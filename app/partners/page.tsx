"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"

interface Partner {
  id: number
  name: string
  logo: string
  category: string
  description: string
  partnership_details: string
  website: string
  partnership_since: string
  partnership_type: string
  status: string
  featured: boolean
  contact_person: string
  contact_email: string
  services_provided: string
  sectors_focus: string
}

export default function PartnersPage() {
  const [partners, setPartners] = useState<Partner[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await fetch('/api/partners')
        if (!response.ok) {
          throw new Error('Failed to fetch partners')
        }
        
        const data = await response.json()
        setPartners(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchPartners()
  }, [])

  if (loading) {
    return (
      <main className="min-h-screen">
        <div className="flex items-center justify-center min-h-screen">
          <p>Loading partners...</p>
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

  const featuredPartners = partners.filter(partner => partner.featured)
  const otherPartners = partners.filter(partner => !partner.featured)

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-tycc-blue to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Partners</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Working together with leading organizations to create opportunities for Tanzania's youth and build a stronger entrepreneurial ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Partners */}
      {featuredPartners.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-tycc-blue mb-4">Strategic Partners</h2>
              <p className="text-xl text-gray-600">Our key strategic partners who share our vision for youth empowerment</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPartners.map((partner) => (
                <Card
                  key={partner.id}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="h-24 flex items-center justify-center mb-4">
                      <img
                        src={`https://tycc.e-saloon.online/public/storage/${partner.logo}` || "/placeholder.svg"}
                        alt={partner.name}
                        className="max-h-20 w-auto object-contain"
                      />
                    </div>
                    <CardTitle className="text-xl text-tycc-blue">{partner.name}</CardTitle>
                    <Badge className="bg-tycc-gold text-gray-900">{partner.category}</Badge>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {partner.description}
                    </CardDescription>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Since {partner.partnership_since}</span>
                      <span>{partner.partnership_type}</span>
                    </div>
                    <div className="flex gap-2 justify-center">
                      <Link href={`/partners/${partner.id}`}>
                        <Button variant="outline" size="sm">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <a href={partner.website} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tycc-blue mb-4">All Partners</h2>
            <p className="text-xl text-gray-600">Complete list of our valued partners and collaborators</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <Card
                key={partner.id}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <CardHeader className="text-center pb-4">
                  <div className="h-24 flex items-center justify-center mb-4">
                    <img
                      src={`https://tycc.e-saloon.online/public/storage/${partner.logo}` || "/placeholder.svg"}
                      alt={partner.name}
                      className="max-h-20 w-auto object-contain"
                    />
                  </div>
                  <CardTitle className="text-xl text-tycc-blue">{partner.name}</CardTitle>
                  <Badge className="bg-tycc-gold text-gray-900">{partner.category}</Badge>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {partner.description}
                  </CardDescription>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Since {partner.partnership_since}</span>
                    <span>{partner.partnership_type}</span>
                  </div>
                  <div className="flex gap-2 justify-center">
                    <Link href={`/partners/${partner.id}`}>
                      <Button variant="outline" size="sm">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <a href={partner.website} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
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