"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, MapPin, Clock, Users } from "lucide-react"
import { useEffect, useState } from "react"

interface NewsArticle {
  id: number
  title: string
  excerpt: string
  category: string
  date: string
  image: string
  slug: string
  author: string
  featured: boolean
}

interface Event {
  id: number
  title: string
  description: string
  date: string
  end_date: string
  time: string
  end_time: string
  location: string
  attendees_limit: string
  price: string
  currency: string
  category: string
  featured: boolean
}

export default function NewsEventsPage() {
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([])
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [newsResponse, eventsResponse] = await Promise.all([
          fetch('/api/news'),
          fetch('/api/events')
        ])

        if (!newsResponse.ok || !eventsResponse.ok) {
          throw new Error('Failed to fetch data')
        }

        const newsData = await newsResponse.json()
        const eventsData = await eventsResponse.json()

        setNewsArticles(newsData)
        setEvents(eventsData)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <main className="min-h-screen">
        <div className="flex items-center justify-center min-h-screen">
          <p>Loading news and events...</p>
        </div>
      </main>
    )
  }

  if (error) {
    return (
      <main className="min-h-screen">
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-red-600">Error: {error}</p>
        </div>
      </main>
    )
  }

  const featuredNews = newsArticles.filter(article => article.featured)
  const upcomingEvents = events.filter(event => new Date(event.date) > new Date())

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-tycc-blue to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">News & Events</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Stay updated with the latest news, success stories, and upcoming events from the Tanzania Youth Chamber of
              Commerce.
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tycc-blue mb-4">Latest News</h2>
            <p className="text-xl text-gray-600">Stay informed about our latest achievements and developments</p>
          </div>

          {/* Featured Article */}
          {featuredNews.length > 0 && (
            <Card className="border-0 shadow-xl mb-12 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-tycc-blue to-blue-800">
                  <img
                    src={`https://tycc.e-saloon.online/public/storage/${featuredNews[0].image}` || "/placeholder.svg"}
                    alt={featuredNews[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <Badge className="bg-tycc-gold text-gray-900 mb-4">{featuredNews[0].category}</Badge>
                  <h2 className="text-3xl font-bold text-tycc-blue mb-4">{featuredNews[0].title}</h2>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(featuredNews[0].date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                    <span className="mx-2">•</span>
                    <span>By {featuredNews[0].author}</span>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{featuredNews[0].excerpt}</p>
                  <Link href={`/news/${featuredNews[0].slug}`} className="btn-primary inline-flex items-center">
                    Read Full Article
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </Card>
          )}

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.slice(1).map((article) => (
              <Card
                key={article.id}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-tycc-blue to-blue-800 relative">
                  <img
                    src={`https://tycc.e-saloon.online/public/storage/${article.image}` || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-tycc-gold text-gray-900">{article.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(article.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <CardTitle className="text-xl text-tycc-blue hover:text-blue-800 transition-colors">
                    <Link href={`/news/${article.slug}`}>{article.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed mb-4">{article.excerpt}</CardDescription>
                  <Link
                    href={`/news/${article.slug}`}
                    className="inline-flex items-center text-tycc-blue hover:text-blue-800 font-semibold"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tycc-blue mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Join us at our upcoming events and networking opportunities</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Card
                key={event.id}
                className={`border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ${event.featured ? "ring-2 ring-tycc-gold" : ""}`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant={event.featured ? "default" : "secondary"}
                      className={event.featured ? "bg-tycc-gold text-gray-900" : ""}
                    >
                      {event.category}
                    </Badge>
                    {event.featured && <Badge className="bg-tycc-gold text-gray-900">Featured</Badge>}
                  </div>
                  <CardTitle className="text-xl text-tycc-blue">{event.title}</CardTitle>
                  <CardDescription className="text-gray-600">{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>
                        {new Date(event.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      <span>Up to {event.attendees_limit} attendees</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-lg font-semibold text-tycc-blue">
                      {event.price === "0.00" ? "Free" : `${event.currency} ${event.price}`}
                    </span>
                    <Button className="btn-primary">Register Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
