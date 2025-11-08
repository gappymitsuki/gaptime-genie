'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    department: '',
    email: '',
    inquiryType: 'poc',
    message: '',
    agreement: false
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // モック送信処理
    console.log('Form submitted:', formData)
    setSubmitted(true)

    // 3秒後にフォームをリセット
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        company: '',
        department: '',
        email: '',
        inquiryType: 'poc',
        message: '',
        agreement: false
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gappy-dark mb-6">Contact</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            PoC・共創プロジェクトのご相談や、サービスに関するお問い合わせは、
            <br className="hidden md:block" />
            こちらからお気軽にご連絡ください。
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="bg-gappy-green/10 border-2 border-gappy-green rounded-xl p-12 text-center">
              <div className="w-16 h-16 bg-gappy-green rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gappy-dark mb-2">送信完了</h2>
              <p className="text-gray-600">
                お問い合わせありがとうございます。
                <br />
                担当者より2営業日以内にご連絡させていただきます。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* お名前 */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gappy-dark mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gappy-green focus:border-transparent"
                  placeholder="山田 太郎"
                />
              </div>

              {/* 会社名 / 団体名 */}
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gappy-dark mb-2">
                  会社名 / 団体名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gappy-green focus:border-transparent"
                  placeholder="株式会社◯◯◯"
                />
              </div>

              {/* 部署名・役職 */}
              <div>
                <label htmlFor="department" className="block text-sm font-semibold text-gappy-dark mb-2">
                  部署名・役職
                </label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gappy-green focus:border-transparent"
                  placeholder="観光振興部"
                />
              </div>

              {/* メールアドレス */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gappy-dark mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gappy-green focus:border-transparent"
                  placeholder="example@company.com"
                />
              </div>

              {/* お問い合わせ種別 */}
              <div>
                <label htmlFor="inquiryType" className="block text-sm font-semibold text-gappy-dark mb-2">
                  お問い合わせ種別 <span className="text-red-500">*</span>
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  required
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gappy-green focus:border-transparent"
                >
                  <option value="poc">PoC相談</option>
                  <option value="implementation">導入検討</option>
                  <option value="media">取材・メディア</option>
                  <option value="other">その他</option>
                </select>
              </div>

              {/* お問い合わせ内容 */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gappy-dark mb-2">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gappy-green focus:border-transparent"
                  placeholder="お問い合わせ内容をご記入ください"
                />
              </div>

              {/* 個人情報取り扱い */}
              <div>
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="agreement"
                    required
                    checked={formData.agreement}
                    onChange={handleChange}
                    className="mt-1 mr-3 w-5 h-5 text-gappy-green border-gray-300 rounded focus:ring-gappy-green"
                  />
                  <span className="text-sm text-gray-700">
                    個人情報の取り扱いに関する同意 <span className="text-red-500">*</span>
                    <br />
                    <span className="text-xs text-gray-500">
                      お預かりした個人情報は、お問い合わせ対応およびサービスのご案内にのみ使用いたします。
                    </span>
                  </span>
                </label>
              </div>

              {/* 送信ボタン */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gappy-green text-gappy-dark px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
                >
                  送信する
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-xl font-bold text-gappy-dark mb-4">営業時間</h3>
              <p className="text-gray-600">
                平日 10:00 - 18:00
                <br />
                （土日祝日・年末年始を除く）
              </p>
            </div>
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-xl font-bold text-gappy-dark mb-4">回答までの目安</h3>
              <p className="text-gray-600">
                通常2営業日以内にご返信いたします。
                <br />
                お急ぎの場合はその旨ご記載ください。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
