"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About TYCC", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Resources", href: "/resources" },
    { name: "News", href: "/news-events" },
    { name: "Galleries", href: "/galleries" },
    { name: "Partnerships", href: "/partnerships" },
    { name: "Contact Us", href: "/contact" },
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img src="/logo.png" alt="TYCC Logo" className="w-12 h-12 object-contain" />
            <div>
              <h1 className="text-xl font-bold text-tycc-blue">TYCC</h1>
              <p className="text-xs text-gray-600">Tanzania Youth Chamber of Commerce</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-900 hover:text-tycc-blue font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-900 hover:text-tycc-blue font-medium">
              About
            </Link>
            <Link href="/programs" className="text-gray-900 hover:text-tycc-blue font-medium">
              Programs
            </Link>
            <Link href="/news-events" className="text-gray-900 hover:text-tycc-blue font-medium">
              News
            </Link>
            <Link href="/galleries" className="text-gray-900 hover:text-tycc-blue font-medium">
              Galleries
            </Link>
            <Link href="/partnerships" className="text-gray-900 hover:text-tycc-blue font-medium">
              Partnerships
            </Link>
            <Link href="/resources" className="text-gray-900 hover:text-tycc-blue font-medium">
              Resources
            </Link>
            <Link href="/contact" className="text-gray-900 hover:text-tycc-blue font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/join" className="btn-primary">
              Join TYCC
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-tycc-blue"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-tycc-blue font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/join" className="btn-primary inline-block text-center mt-4">
                Join TYCC
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
