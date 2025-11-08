'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/gappy-logo.svg"
              alt="Gappy"
              width={120}
              height={30}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gappy-green transition-colors">
              Home
            </Link>
            <div className="relative group">
              <Link href="/solutions" className="text-gray-700 hover:text-gappy-green transition-colors">
                Solutions
              </Link>
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/solutions/platform" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Gappy Platform
                </Link>
                <Link href="/solutions/partners" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Gappy for Partners
                </Link>
                <Link href="/solutions/insight" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Gappy Insight / Studio
                </Link>
              </div>
            </div>
            <Link href="/cases" className="text-gray-700 hover:text-gappy-green transition-colors">
              Cases
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gappy-green transition-colors">
              About
            </Link>
            <Link href="/news" className="text-gray-700 hover:text-gappy-green transition-colors">
              News
            </Link>
            <Link
              href="/contact"
              className="bg-gappy-green text-gappy-dark px-6 py-2 rounded-md font-semibold hover:bg-opacity-90 transition-all"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-gappy-green"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <Link href="/" className="block py-2 text-gray-700 hover:text-gappy-green">
              Home
            </Link>
            <Link href="/solutions" className="block py-2 text-gray-700 hover:text-gappy-green">
              Solutions
            </Link>
            <Link href="/solutions/platform" className="block py-2 pl-4 text-sm text-gray-600 hover:text-gappy-green">
              Gappy Platform
            </Link>
            <Link href="/solutions/partners" className="block py-2 pl-4 text-sm text-gray-600 hover:text-gappy-green">
              Gappy for Partners
            </Link>
            <Link href="/solutions/insight" className="block py-2 pl-4 text-sm text-gray-600 hover:text-gappy-green">
              Gappy Insight / Studio
            </Link>
            <Link href="/cases" className="block py-2 text-gray-700 hover:text-gappy-green">
              Cases
            </Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-gappy-green">
              About
            </Link>
            <Link href="/news" className="block py-2 text-gray-700 hover:text-gappy-green">
              News
            </Link>
            <Link
              href="/contact"
              className="block mt-2 bg-gappy-green text-gappy-dark px-4 py-2 rounded-md font-semibold text-center"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
