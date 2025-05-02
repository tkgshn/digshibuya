import React, { useState, useEffect } from "react";
import TagsInput from "react-tagsinput";
import 'react-tagsinput/react-tagsinput.css'; // 必要に応じてCSSをインポート
import { loadContributions } from "../../utils/staticData";
import { ContributionResponse } from "../../types/contribution";

interface Contribution extends Omit<ContributionResponse, 'createdAt' | 'updatedAt'> {
    createdAt?: string;
    updatedAt?: string;
}

interface Grant {
    name: string;
    contributions: number[];
    total: number;
    match: number;
    matchCOCM: number;
}

const GrantSimulator: React.FC = () => {
    const [matchAmount, setMatchAmount] = useState<number>(1000000); // マッチング金額
    const [grants, setGrants] = useState<
        { name: string; contributions: number[]; total: number; match: number; matchCOCM: number }[]
    >([
        { name: "Grant #1", contributions: [], total: 0, match: 0, matchCOCM: 0 },
        { name: "Grant #2", contributions: [], total: 0, match: 0, matchCOCM: 0 },
        { name: "Grant #3", contributions: [], total: 0, match: 0, matchCOCM: 0 },
        { name: "Grant #4", contributions: [], total: 0, match: 0, matchCOCM: 0 },
    ]);
    const [showAdvanced, setShowAdvanced] = useState(false);
    const [realData, setRealData] = useState<Contribution[]>([]);
    const [loadedRealData, setLoadedRealData] = useState(false);

    useEffect(() => {
        const loadRealGrantData = async () => {
            const contributions = await loadContributions();
            if (contributions && contributions.length > 0) {
                const formattedContributions = contributions.map(c => ({
                    ...c,
                    createdAt: c.createdAt instanceof Date ? c.createdAt.toISOString() : undefined,
                    updatedAt: c.updatedAt instanceof Date ? c.updatedAt.toISOString() : undefined
                }));
                setRealData(formattedContributions);
                setLoadedRealData(true);
            }
        };
        
        loadRealGrantData();
    }, []);

    const applyRealData = (): void => {
        if (!loadedRealData || realData.length === 0) return;
        
        const contributionsByGrant: Record<string, number[]> = {};
        realData.forEach((contribution: Contribution) => {
            const grantId = contribution.grantId;
            if (!contributionsByGrant[grantId]) {
                contributionsByGrant[grantId] = [];
            }
            contributionsByGrant[grantId].push(contribution.amount);
        });
        
        const grantIds = Object.keys(contributionsByGrant).slice(0, 4);
        const updatedGrants = grantIds.map((grantId, index) => {
            const contributions = contributionsByGrant[grantId];
            const total = contributions.reduce((sum, amount) => sum + amount, 0);
            return {
                name: `Grant #${index + 1}`,
                contributions,
                total,
                match: 0,
                matchCOCM: 0,
            };
        });
        
        while (updatedGrants.length < 4) {
            updatedGrants.push({ 
                name: `Grant #${updatedGrants.length + 1}`, 
                contributions: [], 
                total: 0, 
                match: 0,
                matchCOCM: 0
            });
        }
        
        setGrants(updatedGrants);
        calculateMatches(updatedGrants);
    };

    const calculateMatches = (grantsToCalculate = grants): void => {
        let summedMatches = 0;
        const updatedGrants = grantsToCalculate.map((grant: Grant) => {
            const match = Math.pow(
                grant.contributions.reduce((acc: number, curr: number) => acc + Math.sqrt(curr || 0), 0),
                2
            );
            summedMatches += match;
            return { ...grant, match };
        });

        const scalingFactor = summedMatches ? matchAmount / summedMatches : 0;
        
        const donorCount = updatedGrants.map((g: Grant) => g.contributions.length);
        const totalDonors = donorCount.reduce((sum: number, count: number) => sum + count, 0);
        
        const updatedGrantsWithCOCM = updatedGrants.map((grant: Grant, index: number) => {
            const standardMatch = parseFloat((grant.match * scalingFactor).toFixed(2));
            
            const diversityFactor = totalDonors ? (grant.contributions.length / totalDonors) : 0;
            
            const diversityBonus = 1 + (diversityFactor * 0.5); // 50% bonus for diversity
            const cocmMatch = parseFloat((standardMatch * diversityBonus).toFixed(2));
            
            return {
                ...grant,
                match: standardMatch,
                matchCOCM: cocmMatch,
            };
        });
        
        const totalCOCM = updatedGrantsWithCOCM.reduce((sum: number, g: Grant) => sum + g.matchCOCM, 0);
        const cocmScalingFactor = totalCOCM ? matchAmount / totalCOCM : 0;
        
        const finalGrants = updatedGrantsWithCOCM.map((grant: Grant) => ({
            ...grant,
            matchCOCM: parseFloat((grant.matchCOCM * cocmScalingFactor).toFixed(2))
        }));

        setGrants(finalGrants);
    };

    const handleTagChange = (tags: string[], index: number): void => {
        const updatedGrants = [...grants];
        updatedGrants[index].contributions = tags.map((tag: string) => parseFloat(tag));
        updatedGrants[index].total = updatedGrants[index].contributions.reduce(
            (acc: number, curr: number) => acc + curr,
            0
        );
        setGrants(updatedGrants);
        calculateMatches(updatedGrants);
    };

    const handleMatchAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        if (!isNaN(value) && value >= 0) {
            setMatchAmount(value);
            calculateMatches();
        }
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
                    flexWrap: "wrap",
                    marginBottom: "20px",
                    border: "1px solid #ccc",
                    padding: "10px",
                    borderRadius: "5px",
                }}
            >
                <div>
                    <label>
                        上乗せ金額 / Matching Pool: 
                        <input 
                            type="number" 
                            value={matchAmount} 
                            onChange={handleMatchAmountChange}
                            style={{ 
                                marginLeft: "10px", 
                                width: "120px",
                                padding: "5px",
                                borderRadius: "4px",
                                border: "1px solid #ccc"
                            }} 
                        />
                    </label>
                </div>
                <div>プロジェクト数 / Number of Projects: {grants.length}</div>
                <div>
                    <button 
                        onClick={() => setShowAdvanced(!showAdvanced)}
                        style={{
                            padding: "5px 10px",
                            backgroundColor: "#0055B2",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer"
                        }}
                    >
                        {showAdvanced ? "基本表示 / Basic View" : "詳細表示 / Advanced View"}
                    </button>
                    {loadedRealData && (
                        <button 
                            onClick={applyRealData}
                            style={{
                                marginLeft: "10px",
                                padding: "5px 10px",
                                backgroundColor: "#D9A596",
                                color: "white",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer"
                            }}
                        >
                            実データを適用 / Apply Real Data
                        </button>
                    )}
                </div>
            </div>
            <div style={{ display: "grid", gap: "10px" }}>
                {/* テーブルヘッダー */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: showAdvanced ? "2fr 4fr 2fr 2fr 2fr" : "2fr 4fr 2fr 2fr",
                        fontWeight: "bold",
                        borderBottom: "2px solid #ccc",
                        paddingBottom: "10px",
                        columnGap: "20px",
                    }}
                >
                    <div>プロジェクト / Project</div>
                    <div>支援 / Contributions</div>
                    <div>支援総額 / Total</div>
                    <div>上乗せ額 / QF Match</div>
                    {showAdvanced && <div>COCM 上乗せ額 / COCM Match</div>}
                </div>
                {/* テーブルボディ */}
                {grants.map((grant, index) => (
                    <div
                        key={index}
                        style={{
                            display: "grid",
                            gridTemplateColumns: showAdvanced ? "2fr 4fr 2fr 2fr 2fr" : "2fr 4fr 2fr 2fr",
                            alignItems: "center",
                            border: "1px solid #ccc",
                            padding: "10px",
                            borderRadius: "5px",
                            backgroundColor: "#f9f9f9",
                            columnGap: "20px",
                        }}
                    >
                        <strong>Project #{index + 1}</strong>
                        <TagsInput
                            onlyUnique={false}
                            value={grant.contributions.map((c) => c.toString())}
                            onChange={(tags) => handleTagChange(tags, index)}
                            inputProps={{
                                placeholder: "寄付を追加 / Add Donation",
                                style: {
                                    backgroundColor: '#fff',
                                    borderRadius: '5px',
                                    border: 'none',
                                    padding: '5px',
                                }
                            }}
                        />
                        <div>¥{grant.total.toLocaleString()}</div>
                        <div>¥{grant.match.toLocaleString()}</div>
                        {showAdvanced && <div>¥{grant.matchCOCM.toLocaleString()}</div>}
                    </div>
                ))}
            </div>
            
            {showAdvanced && (
                <div style={{ marginTop: "30px", padding: "15px", backgroundColor: "#f0f0f0", borderRadius: "5px" }}>
                    <h3 style={{ marginTop: 0 }}>QFとCOCM QFの比較 / Comparison of QF and COCM QF</h3>
                    <p>
                        通常のQFは寄付額の平方根の合計を二乗する計算方式です。一方、COCM QFは多様性を重視した拡張アルゴリズムで、
                        異なるクラスターから支持を集めるプロジェクトに追加のボーナスを与えます。
                    </p>
                    <p>
                        Standard QF uses the square of the sum of square roots of donations. COCM QF is an extended algorithm 
                        that emphasizes diversity by giving additional bonuses to projects that gather support from different clusters.
                    </p>
                    <div style={{ marginTop: "15px" }}>
                        <a 
                            href="https://tkgshn.github.io/DIGSHIBUYA_QF_COCM/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ color: "#0055B2", textDecoration: "none", fontWeight: "bold" }}
                        >
                            詳細な分析を見る / View Detailed Analysis →
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GrantSimulator;
