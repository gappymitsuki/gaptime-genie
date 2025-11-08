import Link from 'next/link'

export default function Platform() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/solutions" className="text-gappy-green hover:underline mb-4 inline-block">
            ← Solutions に戻る
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gappy-dark mb-6">Gappy Platform</h1>
          <p className="text-2xl text-gappy-green font-semibold">
            旅ナカの「いま・ここ」を理解し、最適なThings to doを秒で。
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            現在地・時間帯・同行者・予算・気分をチャットで伝えるだけ。裏側では徒歩圏・所要時間・営業状況などの条件で候補を絞り込み、いま実行できる体験をパーソナライズして提案します。多言語対応で、欧米豪FITを中心とした訪日旅行者の即時ニーズに応えます。
          </p>

          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gappy-dark mb-6">主な機能</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-gappy-green mr-3 text-xl">•</span>
                <div>
                  <strong>チャット型レコメンド（多言語対応）</strong>
                  <p className="text-gray-600 mt-1">自然な会話で、旅行者の希望を理解します。</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-gappy-green mr-3 text-xl">•</span>
                <div>
                  <strong>コンテキスト理解（現在地・時間帯・天候・営業状況）</strong>
                  <p className="text-gray-600 mt-1">リアルタイムの状況を踏まえた提案を行います。</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-gappy-green mr-3 text-xl">•</span>
                <div>
                  <strong>旅行動機スコアによるパーソナライズ</strong>
                  <p className="text-gray-600 mt-1">ユーザーの興味・関心を学習し、最適化します。</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-gappy-green mr-3 text-xl">•</span>
                <div>
                  <strong>徒歩圏・移動手段・所要時間・予算での自動ソート</strong>
                  <p className="text-gray-600 mt-1">実行可能性の高い順に並べ替えます。</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-gappy-green mr-3 text-xl">•</span>
                <div>
                  <strong>Save / シェア機能</strong>
                  <p className="text-gray-600 mt-1">気になる体験を保存・共有できます。</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-gappy-green mr-3 text-xl">•</span>
                <div>
                  <strong>予約・外部サイト連携（段階的に拡張）</strong>
                  <p className="text-gray-600 mt-1">スムーズな予約体験を提供します。</p>
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
