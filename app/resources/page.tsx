"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Video, BookOpen, ExternalLink } from "lucide-react"
import { useEffect, useState } from "react"

interface Resource {
  id: number
  title: string
  description: string
  type: string
  category: string
  file_size_formatted: string
  download_count: string
  featured: boolean
}

interface Webinar {
  id: number
  title: string
  description: string
  duration: string
  date: string
  speaker: string
  views: string
  featured: boolean
  thumbnail: string
}

const tools = [
  {
    id: 1,
    title: "Business Model Canvas Generator",
    description: "Interactive tool to create and visualize your business model canvas online.",
    type: "Web Tool",
    category: "Business Planning",
    link: "#",
  },
  {
    id: 2,
    title: "Market Research Template",
    description: "Structured template for conducting market research and competitor analysis.",
    type: "Template",
    category: "Research",
    link: "#",
  },
  {
    id: 3,
    title: "Pitch Deck Template",
    description: "Professional pitch deck template for presenting your business to investors.",
    type: "PowerPoint",
    category: "Funding",
    link: "#",
  },
  {
    id: 4,
    title: "Social Media Content Calendar",
    description: "Pre-designed content calendar template for planning your social media strategy.",
    type: "Template",
    category: "Marketing",
    link: "#",
  },
]

export default function ResourcesPage() {
  const [resources, setResources] = useState<Resource[]>([])
  const [webinars, setWebinars] = useState<Webinar[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resourcesResponse, webinarsResponse] = await Promise.all([
          fetch('/api/resources'),
          fetch('/api/webinars')
        ])

        if (!resourcesResponse.ok || !webinarsResponse.ok) {
          throw new Error('Failed to fetch data')
        }

        const resourcesData = await resourcesResponse.json()
        const webinarsData = await webinarsResponse.json()

        setResources(resourcesData)
        setWebinars(webinarsData)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const getIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "pdf":
      case "excel":
      case "word":
      case "powerpoint":
        return <FileText className="h-6 w-6" />
      case "video":
        return <Video className="h-6 w-6" />
      default:
        return <BookOpen className="h-6 w-6" />
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen">
        <div className="flex items-center justify-center min-h-screen">
          <p>Loading resources...</p>
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

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-tycc-blue to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Resources</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Access our comprehensive library of business resources, templates, guides, and tools designed to support
              your entrepreneurial journey.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Downloads */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tycc-blue mb-4">Featured Downloads</h2>
            <p className="text-xl text-gray-600">Essential resources every young entrepreneur should have</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources
              .filter((resource) => resource.featured)
              .map((resource) => (
                <Card key={resource.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-tycc-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                      {getIcon(resource.type)}
                    </div>
                    <CardTitle className="text-xl text-tycc-blue">{resource.title}</CardTitle>
                    <Badge variant="secondary" className="bg-tycc-gold text-gray-900 w-fit mx-auto">
                      {resource.category}
                    </Badge>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <CardDescription className="text-gray-600 leading-relaxed">{resource.description}</CardDescription>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>
                        {resource.type} • {resource.file_size_formatted}
                      </span>
                      <span>{resource.download_count} downloads</span>
                    </div>
                    <Button className="w-full btn-primary">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Webinars */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tycc-blue mb-4">Webinar Library</h2>
            <p className="text-xl text-gray-600">Watch recorded sessions from our expert-led webinars</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webinars.map((webinar) => (
              <Card key={webinar.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video bg-gradient-to-br from-tycc-blue to-blue-800 relative rounded-t-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={`https://tycc.e-saloon.online/${webinar.thumbnail}` || "/placeholder.svg"}
                      alt={webinar.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {webinar.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-tycc-gold text-gray-900">Featured</Badge>
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-lg text-tycc-blue">{webinar.title}</CardTitle>
                  <CardDescription className="text-gray-600">{webinar.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm text-gray-500 space-y-1">
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span>{webinar.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Date:</span>
                      <span>{new Date(webinar.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Views:</span>
                      <span>{webinar.views}</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>Speaker:</strong> {webinar.speaker}
                  </div>
                  <Button className="w-full btn-primary">
                    <Video className="h-4 w-4 mr-2" />
                    Watch Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Templates */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tycc-blue mb-4">Tools & Templates</h2>
            <p className="text-xl text-gray-600">Interactive tools and templates to help you build your business</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool) => (
              <Card key={tool.id} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-tycc-green rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    <ExternalLink className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-lg text-tycc-blue">{tool.title}</CardTitle>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700 w-fit mx-auto">
                    {tool.category}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <CardDescription className="text-gray-600">{tool.description}</CardDescription>
                  <Button variant="outline" className="w-full">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Access Tool
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
