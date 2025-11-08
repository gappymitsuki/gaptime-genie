import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gappy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/gappy-logo.svg"
              alt="Gappy"
              width={120}
              height={30}
              className="h-8 w-auto mb-4 brightness-0 invert"
            />
            <div className="text-sm text-gray-400 space-y-1 mt-6">
              <p className="font-semibold text-white">株式会社Gappy（ギャッピー）</p>
              <p>東京都渋谷区</p>
              <p>代表取締役：未定</p>
              <p>資本金：未定</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">ナビゲーション</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/solutions" className="hover:text-gappy-green transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/cases" className="hover:text-gappy-green transition-colors">
                  Cases
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gappy-green transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-gappy-green transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gappy-green transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">プロダクト</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/solutions/platform" className="hover:text-gappy-green transition-colors">
                  Gappy Platform
                </Link>
              </li>
              <li>
                <Link href="/solutions/partners" className="hover:text-gappy-green transition-colors">
                  Gappy for Partners
                </Link>
              </li>
              <li>
                <Link href="/solutions/insight" className="hover:text-gappy-green transition-colors">
                  Gappy Insight / Studio
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-400 text-center">
          <p>© {new Date().getFullYear()} Gappy, Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
