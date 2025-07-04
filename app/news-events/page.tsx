import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, MapPin, Clock, Users } from "lucide-react"

const newsArticles = [
  {
    id: 1,
    title: "TYCC Launches New Digital Innovation Hub",
    excerpt:
      "A state-of-the-art facility equipped with modern technology to support young entrepreneurs in developing digital solutions for local and regional markets.",
    content: "Full article content here...",
    category: "Innovation",
    date: "2024-01-20",
    image: "/placeholder.svg?height=300&width=500",
    slug: "tycc-launches-digital-innovation-hub",
    author: "TYCC Communications Team",
    featured: true,
  },
  {
    id: 2,
    title: "50 Young Entrepreneurs Graduate from Business Incubator",
    excerpt:
      "The latest cohort of the Youth Business Incubator program celebrates successful completion, with 80% of participants launching viable businesses.",
    content: "Full article content here...",
    category: "Programs",
    date: "2024-01-18",
    image: "/placeholder.svg?height=300&width=500",
    slug: "50-entrepreneurs-graduate-business-incubator",
    author: "Sarah Johnson",
    featured: true,
  },
  {
    id: 3,
    title: "Partnership with African Development Bank Announced",
    excerpt:
      "TYCC signs MOU with AfDB to provide $2M in funding support for youth-led businesses across Tanzania over the next three years.",
    content: "Full article content here...",
    category: "Partnerships",
    date: "2024-01-15",
    image: "/placeholder.svg?height=300&width=500",
    slug: "partnership-african-development-bank",
    author: "Michael Temba",
    featured: true,
  },
  {
    id: 4,
    title: "Women in Business Track Records 95% Success Rate",
    excerpt:
      "The specialized program for women entrepreneurs achieves remarkable results with participants reporting significant business growth and expansion.",
    content: "Full article content here...",
    category: "Women Empowerment",
    date: "2024-01-12",
    image: "/placeholder.svg?height=300&width=500",
    slug: "women-business-track-success-rate",
    author: "Grace Mwangi",
    featured: false,
  },
  {
    id: 5,
    title: "Annual Youth Business Summit 2024 Registration Opens",
    excerpt:
      "Join 500+ young entrepreneurs, investors, and industry leaders at Tanzania's premier youth business event scheduled for March 15-17, 2024.",
    content: "Full article content here...",
    category: "Events",
    date: "2024-01-10",
    image: "/placeholder.svg?height=300&width=500",
    slug: "youth-business-summit-2024-registration",
    author: "David Mwalimu",
    featured: false,
  },
  {
    id: 6,
    title: "TYCC Members Secure $500K in Funding This Quarter",
    excerpt:
      "Young entrepreneurs from TYCC programs successfully raise significant funding from local and international investors.",
    content: "Full article content here...",
    category: "Success Stories",
    date: "2024-01-08",
    image: "/placeholder.svg?height=300&width=500",
    slug: "members-secure-funding-quarter",
    author: "Finance Team",
    featured: false,
  },
]

const upcomingEvents = [
  {
    id: 1,
    title: "Youth Business Summit 2024",
    description:
      "Tanzania's premier youth entrepreneurship event featuring keynote speakers, panel discussions, and networking opportunities.",
    date: "March 15-17, 2024",
    time: "9:00 AM - 6:00 PM",
    location: "Dar es Salaam Convention Centre",
    attendees: 500,
    price: "TSh 25,000",
    category: "Summit",
    featured: true,
  },
  {
    id: 2,
    title: "Digital Marketing Workshop",
    description:
      "Hands-on workshop covering social media marketing, content creation, and online advertising strategies.",
    date: "February 20, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "TYCC Innovation Hub",
    attendees: 50,
    price: "Free",
    category: "Workshop",
    featured: true,
  },
  {
    id: 3,
    title: "Women Entrepreneurs Networking Evening",
    description:
      "Exclusive networking event for women entrepreneurs to share experiences and build business connections.",
    date: "February 28, 2024",
    time: "6:00 PM - 9:00 PM",
    location: "TYCC Women's Center",
    attendees: 80,
    price: "TSh 10,000",
    category: "Networking",
    featured: true,
  },
  {
    id: 4,
    title: "Pitch Competition: Tech Startups",
    description: "Monthly pitch competition for technology startups with cash prizes and mentorship opportunities.",
    date: "March 5, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "TYCC Innovation Hub",
    attendees: 100,
    price: "Free",
    category: "Competition",
    featured: false,
  },
  {
    id: 5,
    title: "Export Training Seminar",
    description: "Learn about export procedures, documentation, and opportunities under the AfCFTA framework.",
    date: "March 12, 2024",
    time: "9:00 AM - 1:00 PM",
    location: "TYCC Trade Center",
    attendees: 60,
    price: "TSh 15,000",
    category: "Training",
    featured: false,
  },
]

export default function NewsEventsPage() {
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
          {newsArticles.filter((article) => article.featured)[0] && (
            <Card className="border-0 shadow-xl mb-12 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-tycc-blue to-blue-800">
                  <img
                    src={newsArticles[0].image || "/placeholder.svg"}
                    alt={newsArticles[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <Badge className="bg-tycc-gold text-gray-900 mb-4">{newsArticles[0].category}</Badge>
                  <h2 className="text-3xl font-bold text-tycc-blue mb-4">{newsArticles[0].title}</h2>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(newsArticles[0].date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                    <span className="mx-2">•</span>
                    <span>By {newsArticles[0].author}</span>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{newsArticles[0].excerpt}</p>
                  <Link href={`/news/${newsArticles[0].slug}`} className="btn-primary inline-flex items-center">
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
                    src={article.image || "/placeholder.svg"}
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
                    {event.featured && (
                      <Badge variant="outline" className="text-tycc-blue border-tycc-blue">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl text-tycc-blue">{event.title}</CardTitle>
                  <CardDescription className="text-gray-600">{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-tycc-gold" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-tycc-gold" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-tycc-gold" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-tycc-gold" />
                      {event.attendees} attendees expected
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-lg font-semibold text-tycc-blue">{event.price}</div>
                    <Button className="btn-primary">Register Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-tycc-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Never Miss an Update</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter to receive the latest news, event announcements, and opportunities directly in
            your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-tycc-gold"
              />
              <Button className="btn-secondary">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
