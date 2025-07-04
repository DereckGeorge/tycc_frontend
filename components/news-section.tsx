"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"

interface NewsItem {
  id: number
  title: string
  excerpt: string
  category: string
  date: string
  image: string
  slug: string
}

// Static news data
const news: NewsItem[] = [
  {
    id: 1,
    title: "TYCC Launches New Digital Innovation Hub",
    excerpt:
      "A state-of-the-art facility equipped with modern technology to support young entrepreneurs in developing digital solutions for local and regional markets.",
    category: "Innovation",
    date: "2024-01-20",
    image: "/placeholder.svg?height=300&width=500",
    slug: "tycc-launches-digital-innovation-hub",
  },
  {
    id: 2,
    title: "50 Young Entrepreneurs Graduate from Business Incubator",
    excerpt:
      "The latest cohort of the Youth Business Incubator program celebrates successful completion, with 80% of participants launching viable businesses.",
    category: "Programs",
    date: "2024-01-18",
    image: "/placeholder.svg?height=300&width=500",
    slug: "50-entrepreneurs-graduate-business-incubator",
  },
  {
    id: 3,
    title: "Partnership with African Development Bank Announced",
    excerpt:
      "TYCC signs MOU with AfDB to provide $2M in funding support for youth-led businesses across Tanzania over the next three years.",
    category: "Partnerships",
    date: "2024-01-15",
    image: "/placeholder.svg?height=300&width=500",
    slug: "partnership-african-development-bank",
  },
]

export function NewsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold text-tycc-blue mb-4">Latest News & Updates</h2>
            <p className="text-xl text-gray-600">
              Stay informed about our latest programs, events, and success stories.
            </p>
          </div>
          <Link
            href="/news-events"
            className="hidden lg:flex items-center text-tycc-blue hover:text-blue-800 font-semibold"
          >
            View All News
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <Card
              key={item.id}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="aspect-video bg-gradient-to-br from-tycc-blue to-blue-800 relative">
                <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-tycc-gold text-gray-900">{item.category}</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(item.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <CardTitle className="text-xl text-tycc-blue hover:text-blue-800 transition-colors">
                  <Link href={`/news/${item.slug}`}>{item.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">{item.excerpt}</CardDescription>
                <Link
                  href={`/news/${item.slug}`}
                  className="inline-flex items-center text-tycc-blue hover:text-blue-800 font-semibold mt-4"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 lg:hidden">
          <Link href="/news-events" className="btn-primary">
            View All News
          </Link>
        </div>
      </div>
    </section>
  )
}
