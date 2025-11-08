export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gappy-dark mb-6">About</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">株式会社Gappyについて</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gappy-dark mb-4">Mission</h2>
            <p className="text-2xl text-gappy-green font-semibold mb-6">
              旅の余白から、街の価値をひらく。
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-8 md:p-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              予約サイトやガイドでは拾いきれない「ちょっとした時間」と「ちょっとした場所」。私たちは、その余白にこそ街の多様性と可能性が宿ると考えます。Gappyは、訪日客一人ひとりの滞在中の意思決定を支え、ローカルな体験が選ばれるきっかけをつくる。旅ナカのインフラとして、日本から世界へ広げていきます。
            </p>
          </div>
        </div>
      </section>

      {/* What we build Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gappy-dark mb-6">What we build</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-xl font-bold text-gappy-dark mb-4">旅ナカの「いま・ここ」に最適化したAI</h3>
              <p className="text-gray-600 leading-relaxed">
                事前計画ではなく、滞在中の瞬間瞬間で「いま実行できる体験」を提案。現在地・時間帯・営業状況・天候・移動手段などをリアルタイムに理解し、旅行者の意思決定を支援します。
              </p>
            </div>
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-xl font-bold text-gappy-dark mb-4">街・事業者のための行動データ基盤</h3>
              <p className="text-gray-600 leading-relaxed">
                検索・保存・行動データを蓄積・可視化し、回遊促進・滞在延長・分散観光の施策設計と効果検証を支援。旅ナカの「見えなかった需要」を明らかにします。
              </p>
            </div>
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-xl font-bold text-gappy-dark mb-4">現場導線への柔軟な組み込み</h3>
              <p className="text-gray-600 leading-relaxed">
                Web埋め込み、QR、サイネージ、APIなど、既存のタッチポイントに合わせて実装。ホテル・交通・商業施設・DMOそれぞれの導線で、旅ナカAIを活用できます。
              </p>
            </div>
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-xl font-bold text-gappy-dark mb-4">共創プロジェクトによる伴走</h3>
              <p className="text-gray-600 leading-relaxed">
                データ提供だけでなく、施策設計から実行、検証までを共に進める共創スタイル。エリアやテーマに合わせた継続的な改善をサポートします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Facts Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gappy-dark mb-6">Company Facts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-4xl font-bold text-gappy-green mb-2">2024</div>
              <p className="text-gray-600">設立年</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-4xl font-bold text-gappy-green mb-2">FIT</div>
              <p className="text-gray-600">ターゲット旅行者</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-4xl font-bold text-gappy-green mb-2">AI</div>
              <p className="text-gray-600">コア技術</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gappy-dark mb-6">Company</h2>
          </div>
          <div className="bg-white rounded-xl p-8 md:p-12">
            <dl className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <dt className="text-sm font-semibold text-gray-500 mb-2">会社名</dt>
                <dd className="text-lg text-gappy-dark">株式会社Gappy（ギャッピー）</dd>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <dt className="text-sm font-semibold text-gray-500 mb-2">所在地</dt>
                <dd className="text-lg text-gappy-dark">東京都渋谷区（詳細はお問い合わせください）</dd>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <dt className="text-sm font-semibold text-gray-500 mb-2">代表取締役</dt>
                <dd className="text-lg text-gappy-dark">未定</dd>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <dt className="text-sm font-semibold text-gray-500 mb-2">設立</dt>
                <dd className="text-lg text-gappy-dark">2024年</dd>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <dt className="text-sm font-semibold text-gray-500 mb-2">資本金</dt>
                <dd className="text-lg text-gappy-dark">未定</dd>
              </div>
              <div className="pb-4">
                <dt className="text-sm font-semibold text-gray-500 mb-2">事業内容</dt>
                <dd className="text-lg text-gappy-dark">
                  インバウンド旅行者向け旅ナカAIプラットフォームの開発・運営<br/>
                  観光・宿泊・交通事業者向けソリューション提供<br/>
                  旅行者行動データ分析・コンサルティング
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gappy-dark mb-6">Team</h2>
            <p className="text-lg text-gray-600">
              AI・データサイエンス・観光・UXの専門性を持つメンバーが、
              <br className="hidden md:block" />
              旅ナカの体験とデータを設計しています。
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-8 md:p-12 text-center">
            <p className="text-gray-600">メンバー詳細は随時公開予定</p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gappy-dark mb-6">Partners</h2>
          <p className="text-lg text-gray-600 mb-8">
            観光局・DMO、宿泊、交通、商業施設など、
            <br className="hidden md:block" />
            旅ナカの体験創出に取り組むパートナーを募集しています。
          </p>
          <div className="bg-white rounded-xl p-12">
            <p className="text-gray-500">パートナーロゴ Coming soon...</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gappy-dark mb-6">
            Gappyと共に、旅ナカの未来をつくりませんか？
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            PoC・共創プロジェクトのご相談、採用に関するお問い合わせなど、お気軽にご連絡ください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-gappy-green text-gappy-dark px-10 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
