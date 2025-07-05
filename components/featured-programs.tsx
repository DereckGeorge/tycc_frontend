"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Laptop, Users, Calendar, Globe } from "lucide-react"
import { useEffect, useState } from "react"

interface Program {
  id: number
  title: string
  description: string
  category: string
  duration: string
  participants: string
  icon: string
  featured: string
}

export function FeaturedPrograms() {
  const [programs, setPrograms] = useState<Program[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await fetch('/api/programs')
        if (!response.ok) {
          throw new Error('Failed to fetch programs')
        }
        const data = await response.json()
        // Filter for featured programs only
        const featuredPrograms = data.filter((program: Program) => program.featured === "1")
        setPrograms(featuredPrograms)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchPrograms()
  }, [])

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "lightbulb":
        return <Lightbulb className="h-8 w-8" />
      case "laptop":
        return <Laptop className="h-8 w-8" />
      case "users":
        return <Users className="h-8 w-8" />
      case "calendar":
        return <Calendar className="h-8 w-8" />
      case "globe":
        return <Globe className="h-8 w-8" />
      default:
        return <Lightbulb className="h-8 w-8" />
    }
  }

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>Loading programs...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-600">Error: {error}</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-tycc-blue mb-4">Featured Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our flagship programs designed to empower Tanzania's youth with essential business skills and
            opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Card key={program.id} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-tycc-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {getIcon(program.icon)}
                </div>
                <CardTitle className="text-xl text-tycc-blue">{program.title}</CardTitle>
                <Badge variant="secondary" className="bg-tycc-gold text-gray-900 w-fit mx-auto">
                  {program.category}
                </Badge>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <CardDescription className="text-gray-600 leading-relaxed">{program.description}</CardDescription>
                <div className="flex justify-between text-sm text-gray-500 pt-4 border-t">
                  <span>Duration: {program.duration}</span>
                  <span>{program.participants}+ participants</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
