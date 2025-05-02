import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { loadContributions, loadGrants } from '../utils/staticData';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';

const calculateQFMatch = (contributions: number[]): number => {
  return Math.pow(
    contributions.reduce((acc, curr) => acc + Math.sqrt(curr || 0), 0),
    2
  );
};

const calculateCOCMMatch = (contributions: number[], donorCount: number, totalDonors: number): number => {
  const standardMatch = calculateQFMatch(contributions);
  const diversityFactor = totalDonors ? (donorCount / totalDonors) : 0;
  const diversityBonus = 1 + (diversityFactor * 0.5); // 50% bonus for diversity
  return standardMatch * diversityBonus;
};

const Analysis: React.FC = () => {
  const [grants, setGrants] = useState<any[]>([]);
  const [contributions, setContributions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [qfResults, setQfResults] = useState<any[]>([]);
  const [cocmResults, setCocmResults] = useState<any[]>([]);
  const [matchAmount, setMatchAmount] = useState(1000000);
  const [activeTab, setActiveTab] = useState('comparison');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const grantsData = await loadGrants();
        const contributionsData = await loadContributions();
        
        setGrants(grantsData);
        setContributions(contributionsData);
        
        if (grantsData.length > 0 && contributionsData.length > 0) {
          calculateResults(grantsData, contributionsData, matchAmount);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  useEffect(() => {
    if (grants.length > 0 && contributions.length > 0) {
      calculateResults(grants, contributions, matchAmount);
    }
  }, [matchAmount, grants, contributions]);

  const calculateResults = (grantsData: any[], contributionsData: any[], matchPool: number) => {
    const contributionsByGrant: Record<string, number[]> = {};
    const donorsByGrant: Record<string, Set<string>> = {};
    
    contributionsData.forEach(contribution => {
      const grantId = contribution.grantId;
      const userId = contribution.userId;
      
      if (!contributionsByGrant[grantId]) {
        contributionsByGrant[grantId] = [];
        donorsByGrant[grantId] = new Set();
      }
      
      contributionsByGrant[grantId].push(contribution.amount);
      donorsByGrant[grantId].add(userId);
    });
    
    const allDonors = new Set<string>();
    contributionsData.forEach(contribution => {
      allDonors.add(contribution.userId);
    });
    const totalDonors = allDonors.size;
    
    let qfMatches: any[] = [];
    let summedMatches = 0;
    
    grantsData.forEach(grant => {
      const grantId = grant.id;
      const contributions = contributionsByGrant[grantId] || [];
      const donorCount = donorsByGrant[grantId]?.size || 0;
      
      const match = calculateQFMatch(contributions);
      summedMatches += match;
      
      qfMatches.push({
        id: grantId,
        name: grant.name,
        contributions: contributions,
        donorCount: donorCount,
        match: match,
        totalContributed: contributions.reduce((sum, amount) => sum + amount, 0),
      });
    });
    
    const scalingFactor = summedMatches ? matchPool / summedMatches : 0;
    
    const finalQfResults = qfMatches.map(item => ({
      ...item,
      scaledMatch: item.match * scalingFactor,
    })).sort((a, b) => b.scaledMatch - a.scaledMatch);
    
    let cocmMatches: any[] = [];
    let summedCocmMatches = 0;
    
    grantsData.forEach(grant => {
      const grantId = grant.id;
      const contributions = contributionsByGrant[grantId] || [];
      const donorCount = donorsByGrant[grantId]?.size || 0;
      
      const match = calculateCOCMMatch(contributions, donorCount, totalDonors);
      summedCocmMatches += match;
      
      cocmMatches.push({
        id: grantId,
        name: grant.name,
        contributions: contributions,
        donorCount: donorCount,
        match: match,
        totalContributed: contributions.reduce((sum, amount) => sum + amount, 0),
      });
    });
    
    const cocmScalingFactor = summedCocmMatches ? matchPool / summedCocmMatches : 0;
    
    const finalCocmResults = cocmMatches.map(item => ({
      ...item,
      scaledMatch: item.match * cocmScalingFactor,
    })).sort((a, b) => b.scaledMatch - a.scaledMatch);
    
    setQfResults(finalQfResults);
    setCocmResults(finalCocmResults);
  };

  const handleMatchAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setMatchAmount(value);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>DIGSHIBUYA QF分析 | Quadratic Funding Analysis</title>
        <meta name="description" content="DIGSHIBUYAの寄付データを使用した通常QFとCOCM QFの比較分析" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">DIGSHIBUYA QF分析</h1>
            <p className="mt-2 text-lg text-gray-600">
              通常のQuadratic FundingとCOCM QFの比較分析
            </p>
          </div>
          <Link href="/" className="text-blue-600 hover:text-blue-800 flex items-center">
            ← メインページに戻る
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
              <div className="px-4 py-5 sm:px-6">
                <h2 className="text-xl font-semibold text-gray-900">分析設定</h2>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  マッチングプールの金額を調整して結果を確認できます
                </p>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="matchAmount" className="block text-sm font-medium text-gray-700">
                      マッチングプール金額
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">¥</span>
                      </div>
                      <input
                        type="number"
                        name="matchAmount"
                        id="matchAmount"
                        className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                        value={matchAmount}
                        onChange={handleMatchAmountChange}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col h-full justify-center">
                      <div className="text-sm text-gray-500">
                        <span className="font-medium">プロジェクト数:</span> {grants.length}
                      </div>
                      <div className="text-sm text-gray-500">
                        <span className="font-medium">寄付総数:</span> {contributions.length}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex">
                  <button
                    onClick={() => setActiveTab('comparison')}
                    className={`${
                      activeTab === 'comparison'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm`}
                  >
                    QF比較
                  </button>
                  <button
                    onClick={() => setActiveTab('standard')}
                    className={`${
                      activeTab === 'standard'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm`}
                  >
                    標準QF詳細
                  </button>
                  <button
                    onClick={() => setActiveTab('cocm')}
                    className={`${
                      activeTab === 'cocm'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm`}
                  >
                    COCM QF詳細
                  </button>
                </nav>
              </div>

              <div className="px-4 py-5 sm:p-6">
                {activeTab === 'comparison' && (
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">QFとCOCM QFの比較</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              プロジェクト
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              寄付者数
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              寄付総額
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              標準QF配分
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              COCM QF配分
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              差分
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {qfResults.map((result, index) => {
                            const cocmResult = cocmResults.find(r => r.id === result.id);
                            const difference = cocmResult ? cocmResult.scaledMatch - result.scaledMatch : 0;
                            
                            return (
                              <tr key={result.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                  {result.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {result.donorCount}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  ¥{result.totalContributed.toLocaleString()}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  ¥{Math.round(result.scaledMatch).toLocaleString()}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  ¥{cocmResult ? Math.round(cocmResult.scaledMatch).toLocaleString() : 0}
                                </td>
                                <td className={`px-6 py-4 whitespace-nowrap text-sm ${difference > 0 ? 'text-green-600' : difference < 0 ? 'text-red-600' : 'text-gray-500'}`}>
                                  {difference > 0 ? '+' : ''}{Math.round(difference).toLocaleString()}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeTab === 'standard' && (
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">標準QF詳細</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              順位
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              プロジェクト
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              寄付者数
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              寄付総額
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              QF計算値
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              最終配分額
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {qfResults.map((result, index) => (
                            <tr key={result.id}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {index + 1}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {result.name}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {result.donorCount}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                ¥{result.totalContributed.toLocaleString()}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {Math.round(result.match).toLocaleString()}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                ¥{Math.round(result.scaledMatch).toLocaleString()}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeTab === 'cocm' && (
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">COCM QF詳細</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              順位
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              プロジェクト
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              寄付者数
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              寄付総額
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              COCM計算値
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              最終配分額
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {cocmResults.map((result, index) => (
                            <tr key={result.id}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {index + 1}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {result.name}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {result.donorCount}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                ¥{result.totalContributed.toLocaleString()}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {Math.round(result.match).toLocaleString()}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                ¥{Math.round(result.scaledMatch).toLocaleString()}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h2 className="text-xl font-semibold text-gray-900">QFとCOCM QFについて</h2>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                <div className="prose max-w-none">
                  <p>
                    <strong>Quadratic Funding (QF)</strong>は、寄付額の平方根の合計を二乗する計算方式です。
                    これにより、多くの小口寄付が少数の大口寄付よりも高く評価されます。
                  </p>
                  <p className="mt-4">
                    <strong>COCM QF</strong>は多様性を重視した拡張アルゴリズムで、
                    異なるクラスターから支持を集めるプロジェクトに追加のボーナスを与えます。
                    これにより、より多様な支持基盤を持つプロジェクトが優遇されます。
                  </p>
                  <div className="mt-6">
                    <a 
                      href="https://note.com/tkgshn/n/na33eddfb0798" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      詳細な分析記事を読む <ArrowTopRightIcon className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Analysis;
