import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gappy-dark mb-6 leading-tight">
                旅ナカの「いま・ここでできること」を、AIで可視化する。
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Gappyは、インバウンド旅行者の滞在中の意思決定を支援するタビナカ特化AIプラットフォームです。
                旅行者にはその場で楽しめるThings to doを、街や事業者には回遊・滞在時間延長・分散観光という成果をもたらします。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/solutions"
                  className="bg-gappy-green text-gappy-dark px-8 py-4 rounded-lg font-semibold text-center hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
                >
                  プロダクトを見る
                </Link>
                <Link
                  href="/solutions#partners"
                  className="bg-white text-gappy-dark px-8 py-4 rounded-lg font-semibold text-center border-2 border-gray-300 hover:border-gappy-green transition-all"
                >
                  事業者・自治体の方へ
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gappy-green/20 to-gappy-green/5 rounded-2xl p-8 shadow-xl">
                <div className="bg-white rounded-lg p-6 shadow-md mb-4">
                  <div className="h-3 bg-gray-200 rounded w-3/4 mb-3"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-gappy-green rounded-full"></div>
                    <div className="h-3 bg-gray-200 rounded flex-1"></div>
                  </div>
                  <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gappy-dark mb-4">What we do</h2>
            <p className="text-xl text-gray-600">インバウンドの「余白時間」を、価値ある体験に変える</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gappy-dark mb-4">Gappy Platform</h3>
              <p className="text-gray-600 leading-relaxed">
                その場で行ける体験を、チャットで提案する旅ナカAI。
                現在地・時間帯・同行者・予算・気分を理解し、短時間・徒歩圏中心の「いま行ける」候補に絞ってレコメンドします。
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gappy-dark mb-4">Gappy for Partners</h3>
              <p className="text-gray-600 leading-relaxed">
                ホテル・交通・商業施設・DMOの既存タッチポイントに旅ナカAIを組み込むソリューション。
                Web埋め込み、QR、サイネージ、APIで、来訪者の「どこ行こう？」を「ここ行こう！」に変えます。
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gappy-dark mb-4">Gappy Insight / Studio</h3>
              <p className="text-gray-600 leading-relaxed">
                プラットフォームで蓄積されるインバウンド行動データを活用し、エリアごとの「旅ナカの中身」を可視化。
                回遊・滞在時間延長・分散観光の施策設計と検証を支援します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gappy-dark mb-4">Products</h2>
            <p className="text-xl text-gray-600">Gappyが提供するプロダクト</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gappy-green rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gappy-dark mb-3">Gappy Platform（toC）</h3>
              <p className="text-gray-600 leading-relaxed">
                訪日旅行者向けの旅ナカAIアプリ / Web。チャットで条件を伝えるだけで、「いま・ここから」行けるローカルな体験やスポットが見つかります。
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gappy-green rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gappy-dark mb-3">Gappy for Partners（toB）</h3>
              <p className="text-gray-600 leading-relaxed">
                宿泊、交通、商業施設、DMO向けのEmbed / QR / サイネージ / APIパッケージ。現場導線で回遊・滞在延長を実現し、問い合わせ対応も補助します。
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gappy-green rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gappy-dark mb-3">Gappy Insight / Studio（Data / Projects）</h3>
              <p className="text-gray-600 leading-relaxed">
                検索・保存・予約・行動データに基づくダッシュボードとレポート。共創プロジェクトで、エリアやテーマに合わせた施策設計を伴走します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Gappy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gappy-dark mb-4">Why Gappy?</h2>
            <p className="text-xl text-gray-600">既存の地図・ガイド・OTAと、何が違うのか</p>
          </div>
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl p-8 md:p-12">
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-gappy-green mr-3 text-2xl">•</span>
                <span>地図は「場所」を示す。Gappyは「いま実行できる体験」を示す。</span>
              </li>
              <li className="flex items-start">
                <span className="text-gappy-green mr-3 text-2xl">•</span>
                <span>事前計画や予約ではなく、滞在中の瞬間意思決定に最適化。</span>
              </li>
              <li className="flex items-start">
                <span className="text-gappy-green mr-3 text-2xl">•</span>
                <span>体験提案から行動データまでが循環し、施策改善につながる。</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects / PoC Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gappy-dark mb-4">Projects / PoC</h2>
            <p className="text-xl text-gray-600">共創パートナーとの実証・プロジェクト</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-lg font-bold text-gappy-dark mb-3">観光局・DMO</h3>
              <p className="text-gray-600">
                旅ナカAIと行動データで、回遊・滞在時間延長・分散観光を検証。
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-lg font-bold text-gappy-dark mb-3">ホテル・ホステル</h3>
              <p className="text-gray-600">
                フロント・客室・予約導線にGappyを組み込み、滞在中の余白時間を周辺体験へ転換。
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-lg font-bold text-gappy-dark mb-3">交通・商業施設・民間ブランド</h3>
              <p className="text-gray-600">
                駅・館内・メディアを活用したテーマ特化の共同企画やキャンペーンを実施。
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-8 text-center">
            <p className="text-gray-500 text-sm">実績ロゴ Coming soon...</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gappy-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-2xl mb-8 text-gappy-green">旅の余白から、街の価値をひらく。</p>
          <p className="text-lg leading-relaxed text-gray-300">
            予約サイトやガイドでは拾いきれない「ちょっとした時間」と「ちょっとした場所」。私たちは、その余白にこそ街の多様性と可能性が宿ると考えます。Gappyは、訪日客一人ひとりの滞在中の意思決定を支え、ローカルな体験が選ばれるきっかけをつくる。旅ナカのインフラとして、日本から世界へ広げていきます。
          </p>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gappy-dark mb-8">News</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            <Link href="/news" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-2">2025.05.15</p>
                  <p className="text-lg text-gappy-dark font-medium">XXX観光局との回遊促進PoC開始のお知らせ</p>
                </div>
              </div>
            </Link>
            <Link href="/news" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-2">2025.04.28</p>
                  <p className="text-lg text-gappy-dark font-medium">国際トラベルテック展示会出展のご報告</p>
                </div>
              </div>
            </Link>
            <Link href="/news" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-2">2025.04.01</p>
                  <p className="text-lg text-gappy-dark font-medium">資金調達およびプロダクトβ版提供開始について</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="text-center mt-8">
            <Link href="/news" className="text-gappy-green font-semibold hover:underline">
              すべてのニュースを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gappy-green/10 to-gappy-green/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gappy-dark mb-6">
            PoC・共創プロジェクトのご相談
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            観光局・DMO、宿泊、交通、商業施設の担当者の方へ。
            まずはお気軽にお問い合わせください。
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
