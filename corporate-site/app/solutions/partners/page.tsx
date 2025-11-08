import Link from 'next/link'

export default function Partners() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/solutions" className="text-gappy-green hover:underline mb-4 inline-block">
            ← Solutions に戻る
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gappy-dark mb-6">Gappy for Partners</h1>
          <p className="text-2xl text-gappy-green font-semibold">
            旅ナカAIを、現場のタッチポイントに。Embed / QR / サイネージ / API
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            ホテル、交通、商業施設、DMOの既存タッチポイントに旅ナカAIを組み込むソリューション。Web埋め込み、QR、サイネージ、APIで、来訪者の「どこ行こう？」を「ここ行こう！」に変えます。
          </p>

          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gappy-dark mb-6">提供形態</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gappy-dark mb-2">Web Embed</h3>
                <p className="text-gray-700">
                  予約確認メール、公式サイト、館内WiFiポータルなどに埋め込み。
                  iframe形式で簡単に導入でき、既存の導線を活かせます。
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gappy-dark mb-2">QRコード</h3>
                <p className="text-gray-700">
                  フロント、客室、駅構内、チラシなどに設置。
                  スマートフォンですぐにアクセスでき、印刷物でも展開可能です。
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gappy-dark mb-2">サイネージ</h3>
                <p className="text-gray-700">
                  デジタルサイネージでの自動表示・タッチ操作対応。
                  駅や商業施設での大画面展開に最適です。
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gappy-dark mb-2">API連携</h3>
                <p className="text-gray-700">
                  既存アプリ・システムへの統合。
                  独自のUI/UXを保ちながら、Gappyの推薦エンジンを活用できます。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-gappy-green rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gappy-dark mb-6">導入メリット</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-gappy-green mr-3 text-xl">✓</span>
                <div>
                  <strong>回遊・滞在時間延長・分散観光の実現</strong>
                  <p className="text-gray-600 mt-1">
                    訪問者の余白時間を周辺体験へと転換し、エリア全体の活性化につなげます。
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-gappy-green mr-3 text-xl">✓</span>
                <div>
                  <strong>問い合わせ対応の効率化（多言語対応含む）</strong>
                  <p className="text-gray-600 mt-1">
                    フロントスタッフの負担を軽減し、より質の高いサービスに集中できます。
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-gappy-green mr-3 text-xl">✓</span>
                <div>
                  <strong>エリア・テーマ特化のカスタマイズ可能</strong>
                  <p className="text-gray-600 mt-1">
                    ブランドやエリアの特性に合わせた体験提案をカスタマイズできます。
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-block bg-gappy-green text-gappy-dark px-10 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
