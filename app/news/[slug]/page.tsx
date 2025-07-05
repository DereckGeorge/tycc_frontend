"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

interface NewsArticle {
  id: number
  title: string
  excerpt: string
  content: string
  category: string
  date: string
  image: string
  slug: string
  author: string
  featured: boolean
  views: string
  meta_description: string
}

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const [article, setArticle] = useState<NewsArticle | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch('/api/news')
        if (!response.ok) {
          throw new Error('Failed to fetch news')
        }
        
        const data = await response.json()
        const foundArticle = data.find((item: NewsArticle) => item.slug === params.slug)
        
        if (!foundArticle) {
          notFound()
        }
        
        setArticle(foundArticle)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchArticle()
  }, [params.slug])

  if (loading) {
    return (
      <main className="min-h-screen">
        <div className="flex items-center justify-center min-h-screen">
          <p>Loading article...</p>
        </div>
      </main>
    )
  }

  if (error || !article) {
    return (
      <main className="min-h-screen">
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-red-600">Error: {error || 'Article not found'}</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-tycc-blue to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link 
              href="/news-events" 
              className="inline-flex items-center text-blue-100 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to News
            </Link>
          </div>
          <div className="text-center">
            <Badge className="bg-tycc-gold text-gray-900 mb-4">{article.category}</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">{article.title}</h1>
            <div className="flex items-center justify-center text-blue-100 text-lg">
              <Calendar className="h-5 w-5 mr-2" />
              {new Date(article.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              <span className="mx-2">•</span>
              <span>By {article.author}</span>
              <span className="mx-2">•</span>
              <span>{article.views} views</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-tycc-blue to-blue-800">
              <img
                src={`https://tycc.e-saloon.online/public/storage/${article.image}` || "/placeholder.svg"}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-8 lg:p-12">
              <div className="prose prose-lg max-w-none">
                <div className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                  {article.content}
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-200">
                <Link 
                  href="/news-events" 
                  className="btn-primary inline-flex items-center"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to All News
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
} 