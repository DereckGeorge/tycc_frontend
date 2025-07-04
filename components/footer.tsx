"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Download } from "lucide-react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Simple validation
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address")
      return
    }

    // Simulate subscription success
    setIsSubscribed(true)
    setEmail("")

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false)
    }, 3000)
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-tycc-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">TYCC</h3>
                <p className="text-sm text-gray-400">Tanzania Youth Chamber</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering Tanzania's youth through business development, innovation, and strategic partnerships.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-tycc-blue transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-tycc-blue transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-tycc-blue transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-tycc-blue transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-tycc-blue transition-colors">
                  About TYCC
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-tycc-blue transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-tycc-blue transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/news-events" className="text-gray-300 hover:text-tycc-blue transition-colors">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="text-gray-300 hover:text-tycc-blue transition-colors">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-tycc-blue transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-tycc-blue mt-1 flex-shrink-0" />
                <span className="text-gray-300">Dar es Salaam, Tanzania</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-tycc-blue flex-shrink-0" />
                <span className="text-gray-300">+255 123 456 789</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-tycc-blue flex-shrink-0" />
                <span className="text-gray-300">info@tycc.or.tz</span>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center text-tycc-blue hover:text-yellow-400 transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  alert("Constitution download would be available here")
                }}
              >
                <Download className="h-5 w-5 mr-2" />
                Download Constitution
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-300 mb-4">Stay updated with our latest programs and opportunities.</p>
            {isSubscribed ? (
              <div className="bg-green-600 text-white p-4 rounded-lg text-center">
                <p className="font-semibold">Thank you for subscribing!</p>
                <p className="text-sm">You'll receive our latest updates.</p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-tycc-gold text-white"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-tycc-gold hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2024 Tanzania Youth Chamber of Commerce. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
