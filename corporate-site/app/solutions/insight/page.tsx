import Link from 'next/link'

export default function Insight() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/solutions" className="text-gappy-green hover:underline mb-4 inline-block">
            ← Solutions に戻る
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gappy-dark mb-6">Gappy Insight / Studio</h1>
          <p className="text-2xl text-gappy-green font-semibold">
            行動データが映す、「旅ナカの中身」。
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            プラットフォームで蓄積される検索・保存・予約・行動データを活用し、エリアごとの「旅ナカの中身」を可視化。回遊・滞在時間延長・分散観光の施策設計と検証を支援します。
          </p>

          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gappy-dark mb-6">アウトプット例</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-gappy-green mr-3 text-xl">•</span>
                <div>
                  <strong>時間帯別・曜日別・天候別の検索傾向</strong>
                  <p className="text-gray-600 mt-1">
                    どのタイミングで、どんな体験が求められているかを把握できます。
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-gappy-green mr-3 text-xl">•</span>
                <div>
                  <strong>国・旅行動機別の関心エリア・体験カテゴリ</strong>
                  <p className="text-gray-600 mt-1">
                    訪問者のバックグラウンドごとに興味の傾向を分析します。
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-gappy-green mr-3 text-xl">•</span>
                <div>
                  <strong>回遊パターン・滞在時間分析</strong>
                  <p className="text-gray-600 mt-1">
                    実際の移動データから、回遊促進の施策効果を測定します。
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-gappy-green mr-3 text-xl">•</span>
                <div>
                  <strong>施策前後のKPI比較レポート</strong>
                  <p className="text-gray-600 mt-1">
                    定量的な効果検証で、継続的な改善をサポートします。
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-gappy-green mr-3 text-xl">•</span>
                <div>
                  <strong>共創プロジェクトによる施策設計・伴走支援</strong>
                  <p className="text-gray-600 mt-1">
                    データ分析から施策立案、実行、検証まで一貫してサポートします。
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white border-2 border-gappy-green rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gappy-dark mb-6">活用シーン</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong className="text-gappy-dark">観光局・DMO：</strong>
                エリア全体の回遊促進施策の設計と効果測定
              </p>
              <p>
                <strong className="text-gappy-dark">宿泊施設：</strong>
                ゲストの満足度向上と周辺エリアとの連携強化
              </p>
              <p>
                <strong className="text-gappy-dark">商業施設：</strong>
                館内回遊の最適化とナイトタイムエコノミーの活性化
              </p>
              <p>
                <strong className="text-gappy-dark">交通事業者：</strong>
                乗降客の行動分析と周辺エリアへの送客施策
              </p>
            </div>
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
