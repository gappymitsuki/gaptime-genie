import Link from 'next/link'

export default function News() {
  const newsItems = [
    {
      date: '2025.05.15',
      title: 'XXX観光局との回遊促進PoC開始のお知らせ',
      category: 'プレスリリース'
    },
    {
      date: '2025.04.28',
      title: '国際トラベルテック展示会出展のご報告',
      category: 'イベント'
    },
    {
      date: '2025.04.01',
      title: '資金調達およびプロダクトβ版提供開始について',
      category: 'プレスリリース'
    },
    {
      date: '2025.03.15',
      title: 'Bホステルとの共創プロジェクト開始',
      category: 'パートナーシップ'
    },
    {
      date: '2025.02.28',
      title: '旅ナカAIの技術解説記事を公開',
      category: 'テックブログ'
    },
    {
      date: '2025.02.10',
      title: 'C駅でのサイネージ実証実験を開始',
      category: 'プロジェクト'
    },
    {
      date: '2025.01.20',
      title: '観光DX推進フォーラムに登壇',
      category: 'イベント'
    },
    {
      date: '2024.12.15',
      title: '年末年始の営業日のお知らせ',
      category: 'お知らせ'
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gappy-dark mb-6">News</h1>
          <p className="text-xl text-gray-600">最新情報・プレスリリース</p>
        </div>
      </section>

      {/* News List Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <p className="text-sm text-gray-500">{item.date}</p>
                      <span className="inline-block px-3 py-1 bg-gappy-green/10 text-gappy-green text-xs font-semibold rounded">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-lg text-gappy-dark font-medium">{item.title}</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-4">
                    <span className="text-gappy-green text-sm font-semibold">詳しく見る →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Placeholder */}
          <div className="mt-12 flex justify-center">
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-gappy-green text-white rounded-md font-semibold">
                1
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">
                2
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">
                3
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gappy-dark mb-4">メディア・取材のお問い合わせ</h2>
          <p className="text-lg text-gray-600 mb-8">
            プレスリリース配信のご希望や、取材のご依頼は
            <br className="hidden md:block" />
            お問い合わせフォームよりご連絡ください。
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
