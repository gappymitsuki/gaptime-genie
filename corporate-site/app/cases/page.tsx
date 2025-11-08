'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Cases() {
  const [selectedIndustry, setSelectedIndustry] = useState('all')
  const [selectedPurpose, setSelectedPurpose] = useState('all')

  const cases = [
    {
      id: 1,
      title: 'A市観光局 - エリア全体の回遊促進実証',
      industry: 'dmo',
      purpose: 'circulation',
      description: '観光局の公式サイトとQRでGappyを展開。来訪者の検索・保存データから「見えなかった需要」を可視化し、滞在時間が平均18%延長。',
      results: ['滞在時間 +18%', '周辺エリア訪問率 +24%', '問い合わせ対応時間 -30%']
    },
    {
      id: 2,
      title: 'Bホステル - フロント導線での体験提案',
      industry: 'accommodation',
      purpose: 'extension',
      description: 'チェックイン時のQRと客室内タブレットで旅ナカAIを提供。ゲストの余白時間を周辺体験に転換し、満足度スコアが向上。',
      results: ['ゲスト満足度 +15pt', 'リピート意向 +22%', '周辺店舗への送客 実証']
    },
    {
      id: 3,
      title: 'C駅 × ブランドD - テーマ特化キャンペーン',
      industry: 'transport',
      purpose: 'dispersion',
      description: '駅構内サイネージと提携ブランドによる「ナイトタイムエコノミー」キャンペーン。夜間の検索・行動データをもとに施策を最適化。',
      results: ['夜間エリア訪問 +31%', 'キャンペーン認知 3.2万reach', 'データ活用で継続施策化']
    }
  ]

  const filteredCases = cases.filter(c => {
    const industryMatch = selectedIndustry === 'all' || c.industry === selectedIndustry
    const purposeMatch = selectedPurpose === 'all' || c.purpose === selectedPurpose
    return industryMatch && purposeMatch
  })

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gappy-dark mb-6">Cases</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">導入事例・PoC</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-700">
            旅ナカAIの実装からデータ活用まで。現場での検証と成果をご紹介します。
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div>
              <label className="text-sm text-gray-600 mr-2">業種：</label>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-gappy-green focus:border-transparent"
              >
                <option value="all">すべて</option>
                <option value="dmo">観光局・DMO</option>
                <option value="accommodation">宿泊</option>
                <option value="transport">交通</option>
                <option value="commercial">商業施設</option>
                <option value="media">メディア・ブランド</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-600 mr-2">目的：</label>
              <select
                value={selectedPurpose}
                onChange={(e) => setSelectedPurpose(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-gappy-green focus:border-transparent"
              >
                <option value="all">すべて</option>
                <option value="circulation">回遊</option>
                <option value="extension">滞在時間延長</option>
                <option value="dispersion">分散観光</option>
                <option value="inquiry">問い合わせ削減</option>
                <option value="data">データ活用</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {filteredCases.map((caseItem) => (
              <div key={caseItem.id} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gappy-dark mb-4">{caseItem.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{caseItem.description}</p>
                <div className="space-y-2">
                  {caseItem.results.map((result, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="text-gappy-green mr-2">✓</span>
                      <span className="text-sm text-gray-700">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {filteredCases.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">該当する事例が見つかりませんでした。</p>
            </div>
          )}
        </div>
      </section>

      {/* PoC Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gappy-dark mb-4">PoCの進め方</h2>
            <p className="text-lg text-gray-600">スモールスタートから、段階的に拡大</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-12 h-12 bg-gappy-green rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h3 className="text-lg font-bold text-gappy-dark mb-3">ヒアリング・設計</h3>
              <p className="text-gray-600 text-sm">
                課題・KPI・既存導線を整理し、最適な実装方法とデータ取得設計を行います。
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-12 h-12 bg-gappy-green rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h3 className="text-lg font-bold text-gappy-dark mb-3">実装・検証準備</h3>
              <p className="text-gray-600 text-sm">
                Embed / QR / サイネージなど、現場導線に合わせて実装。データ計測環境を整備。
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-12 h-12 bg-gappy-green rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h3 className="text-lg font-bold text-gappy-dark mb-3">運用・データ蓄積</h3>
              <p className="text-gray-600 text-sm">
                一定期間の運用で、検索・保存・行動データを蓄積。定期レポートで傾向を共有。
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-12 h-12 bg-gappy-green rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">4</span>
              </div>
              <h3 className="text-lg font-bold text-gappy-dark mb-3">効果検証・展開</h3>
              <p className="text-gray-600 text-sm">
                KPI達成状況を分析し、本格展開や継続施策への移行を検討。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gappy-dark mb-6">
            事例の詳細資料をご希望の方は
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            守秘義務の範囲内で、より詳細な成果データや導入プロセスをご共有いたします。
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gappy-green text-gappy-dark px-10 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
          >
            お問い合わせ
          </Link>
        </div>
      </section>
    </div>
  )
}
