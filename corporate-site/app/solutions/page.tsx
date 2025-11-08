import Link from 'next/link'

export default function Solutions() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gappy-dark mb-6">Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Gappyのプロダクトとソリューション</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gappy-dark mb-6">
            旅ナカの「いま・ここ」を起点に、体験創出から効果検証まで。
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Gappyは、旅行者の「いま・ここでできること（Things to do）」をAIで可視化するプラットフォームです。現場導線での体験提案（Platform / for Partners）と、行動データに基づく分析（Insight / Studio）を一気通貫で提供します。
          </p>
        </div>
      </section>

      {/* Gappy Platform Section */}
      <section id="platform" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gappy-dark mb-4">Gappy Platform</h2>
            <p className="text-xl text-gappy-green font-semibold">
              旅ナカの「いま・ここ」を理解し、最適なThings to doを秒で。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                現在地・時間帯・同行者・予算・気分をチャットで伝えるだけ。裏側では徒歩圏・所要時間・営業状況などの条件で候補を絞り込み、いま実行できる体験をパーソナライズして提案します。多言語対応で、欧米豪FITを中心とした訪日旅行者の即時ニーズに応えます。
              </p>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-gappy-dark mb-4">主な機能</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-gappy-green mr-2">•</span>
                    <span>チャット型レコメンド（多言語対応）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gappy-green mr-2">•</span>
                    <span>コンテキスト理解（現在地・時間帯・天候・営業状況）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gappy-green mr-2">•</span>
                    <span>旅行動機スコアによるパーソナライズ</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gappy-green mr-2">•</span>
                    <span>徒歩圏・移動手段・所要時間・予算での自動ソート</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gappy-green mr-2">•</span>
                    <span>Save / シェア機能</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gappy-green mr-2">•</span>
                    <span>予約・外部サイト連携（段階的に拡張）</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-xl">
              <div className="bg-gradient-to-br from-gappy-green/20 to-gappy-green/5 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="bg-white rounded p-4 shadow">
                    <div className="h-2 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                  </div>
                  <div className="bg-gappy-green rounded p-4 shadow">
                    <div className="h-2 bg-white/50 rounded w-2/3 mb-2"></div>
                    <div className="h-2 bg-white/50 rounded w-1/3"></div>
                  </div>
                  <div className="bg-white rounded p-4 shadow">
                    <div className="h-2 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/solutions/platform" className="text-gappy-green font-semibold hover:underline">
              詳しく見る →
            </Link>
          </div>
        </div>
      </section>

      {/* Gappy for Partners Section */}
      <section id="partners" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gappy-dark mb-4">Gappy for Partners</h2>
            <p className="text-xl text-gappy-green font-semibold">
              旅ナカAIを、現場のタッチポイントに。Embed / QR / サイネージ / API
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-gappy-green rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold">W</span>
                  </div>
                  <p className="font-semibold text-gappy-dark">Web埋め込み</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-gappy-green rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold">QR</span>
                  </div>
                  <p className="font-semibold text-gappy-dark">QRコード</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-gappy-green rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold">S</span>
                  </div>
                  <p className="font-semibold text-gappy-dark">サイネージ</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-gappy-green rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold">API</span>
                  </div>
                  <p className="font-semibold text-gappy-dark">API連携</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                ホテル、交通、商業施設、DMOの既存タッチポイントに旅ナカAIを組み込むソリューション。Web埋め込み、QR、サイネージ、APIで、来訪者の「どこ行こう？」を「ここ行こう！」に変えます。
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gappy-dark mb-4">提供形態</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-gappy-green mr-2">•</span>
                    <span><strong>Web Embed：</strong>予約確認メール、公式サイト、館内WiFiポータルなどに埋め込み</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gappy-green mr-2">•</span>
                    <span><strong>QR：</strong>フロント、客室、駅構内、チラシなどに設置</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gappy-green mr-2">•</span>
                    <span><strong>サイネージ：</strong>デジタルサイネージでの自動表示・タッチ操作対応</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gappy-green mr-2">•</span>
                    <span><strong>API：</strong>既存アプリ・システムへの統合</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 bg-white border-2 border-gappy-green rounded-lg p-6">
                <h3 className="font-bold text-gappy-dark mb-3">導入メリット</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-gappy-green mr-2">✓</span>
                    <span>回遊・滞在時間延長・分散観光の実現</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gappy-green mr-2">✓</span>
                    <span>問い合わせ対応の効率化（多言語対応含む）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gappy-green mr-2">✓</span>
                    <span>エリア・テーマ特化のカスタマイズ可能</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/solutions/partners" className="text-gappy-green font-semibold hover:underline">
              詳しく見る →
            </Link>
          </div>
        </div>
      </section>

      {/* Gappy Insight / Studio Section */}
      <section id="insight" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gappy-dark mb-4">Gappy Insight / Studio</h2>
            <p className="text-xl text-gappy-green font-semibold">
              行動データが映す、「旅ナカの中身」。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                プラットフォームで蓄積される検索・保存・予約・行動データを活用し、エリアごとの「旅ナカの中身」を可視化。回遊・滞在時間延長・分散観光の施策設計と検証を支援します。
              </p>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-gappy-dark mb-4">アウトプット例</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-gappy-green mr-2">•</span>
                    <span>時間帯別・曜日別・天候別の検索傾向</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gappy-green mr-2">•</span>
                    <span>国・旅行動機別の関心エリア・体験カテゴリ</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gappy-green mr-2">•</span>
                    <span>回遊パターン・滞在時間分析</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gappy-green mr-2">•</span>
                    <span>施策前後のKPI比較レポート</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gappy-green mr-2">•</span>
                    <span>共創プロジェクトによる施策設計・伴走支援</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-xl">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>回遊率</span>
                    <span className="font-bold text-gappy-green">+24%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div className="bg-gappy-green rounded-full h-2" style={{width: '74%'}}></div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>滞在時間</span>
                    <span className="font-bold text-gappy-green">+18%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div className="bg-gappy-green rounded-full h-2" style={{width: '68%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>分散観光</span>
                    <span className="font-bold text-gappy-green">+31%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div className="bg-gappy-green rounded-full h-2" style={{width: '81%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/solutions/insight" className="text-gappy-green font-semibold hover:underline">
              詳しく見る →
            </Link>
          </div>
        </div>
      </section>

      {/* Security / Privacy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gappy-dark mb-6">Security / Privacy</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            業務提携先のポリシーに準拠し、データの匿名化と安全な管理を徹底します。詳細はお問い合わせください。
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gappy-green/10 to-gappy-green/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gappy-dark mb-6">
            まずはお気軽にご相談ください
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            PoC・導入のご相談、デモのご希望など、お問い合わせをお待ちしております。
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
