import React, { useState } from "react";
import TagsInput from "react-tagsinput";
import 'react-tagsinput/react-tagsinput.css'; // 必要に応じてCSSをインポート

const GrantSimulator: React.FC = () => {
    const [matchAmount] = useState<number>(1000000); // 固定マッチング金額
    const [grants, setGrants] = useState<
        { name: string; contributions: number[]; total: number; match: number }[]
    >([
        { name: "Grant #1", contributions: [], total: 0, match: 0 },
        { name: "Grant #2", contributions: [], total: 0, match: 0 },
        { name: "Grant #3", contributions: [], total: 0, match: 0 },
        { name: "Grant #4", contributions: [], total: 0, match: 0 },
    ]);

    const calculateMatch = () => {
        let summedMatches = 0;
        const updatedGrants = grants.map((grant) => {
            const match = Math.pow(
                grant.contributions.reduce((acc, curr) => acc + Math.sqrt(curr || 0), 0),
                2
            );
            summedMatches += match;
            return { ...grant, match };
        });

        const scalingFactor = summedMatches ? matchAmount / summedMatches : 0;

        setGrants(
            updatedGrants.map((grant) => ({
                ...grant,
                match: parseFloat((grant.match * scalingFactor).toFixed(2)),
            }))
        );
    };

    const handleTagChange = (tags: string[], index: number) => {
        const updatedGrants = [...grants];
        updatedGrants[index].contributions = tags.map((tag) => parseFloat(tag));
        updatedGrants[index].total = updatedGrants[index].contributions.reduce(
            (acc, curr) => acc + curr,
            0
        );
        setGrants(updatedGrants);
        calculateMatch();
    };

    return (
        <div
            style={{
                fontFamily: "Arial, sans-serif",
                maxWidth: "1000px",
                margin: "60px auto",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                    border: "1px solid #ccc",
                    padding: "10px",
                    borderRadius: "5px",
                }}
            >
                <label>
                    DIG SHIBUYAによる上乗せ金額: ¥{matchAmount.toLocaleString()}
                </label>
                <div>プロジェクト数: {grants.length}</div>
            </div>
            <div style={{ display: "grid", gap: "10px" }}>
                {/* テーブルヘッダー */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "2fr 4fr 2fr 2fr",
                        fontWeight: "bold",
                        borderBottom: "2px solid #ccc",
                        paddingBottom: "10px",
                        columnGap: "30px", // 列の間にマージンを追加
                    }}
                >
                    <div>プロジェクト</div>
                    <div>支援</div>
                    <div>支援総額</div>
                    <div>上乗せ額</div>
                </div>
                {/* テーブルボディ */}
                {grants.map((grant, index) => (
                    <div
                        key={index}
                        style={{
                            display: "grid",
                            gridTemplateColumns: "2fr 4fr 2fr 2fr",
                            alignItems: "center",
                            border: "1px solid #ccc",
                            padding: "10px",
                            borderRadius: "5px",
                            backgroundColor: "#f9f9f9",
                            columnGap: "20px", // 列の間にマージンを追加
                        }}
                    >
                        <strong>プロジェクト #{index + 1}</strong>
                        <TagsInput
                            value={grant.contributions.map((c) => c.toString())}
                            onChange={(tags) => handleTagChange(tags, index)}
                            inputProps={{
                                placeholder: "寄付を追加",
                                style: {
                                    backgroundColor: '#fff', // 背景色を白に
                                    borderRadius: '5px', // 角の丸さを統一
                                    border: 'none', // 枠線を削除
                                    padding: '5px', // パディングを追加
                                    // width: '50%', //これは効いてないな~~~
                                }
                            }}
                            onlyUnique
                        />
                        <div>¥{grant.total.toLocaleString()}</div>
                        <div>¥{grant.match.toLocaleString()}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GrantSimulator;
