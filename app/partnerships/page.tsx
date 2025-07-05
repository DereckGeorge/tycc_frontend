"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building, Users, Globe, Award, ArrowRight, CheckCircle } from "lucide-react"
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

const partnershipTypes = [
  {
    title: "Strategic Partners",
    description:
      "Long-term partnerships with major institutions providing funding, technical assistance, and policy support.",
    icon: <Building className="h-8 w-8" />,
    benefits: ["Multi-year funding commitments", "Technical expertise", "Policy advocacy", "International networks"],
    count: 8,
  },
  {
    title: "Implementation Partners",
    description: "Organizations that collaborate with us to deliver programs and services to young entrepreneurs.",
    icon: <Users className="h-8 w-8" />,
    benefits: ["Program co-delivery", "Resource sharing", "Joint capacity building", "Local expertise"],
    count: 15,
  },
  {
    title: "Corporate Partners",
    description: "Private sector companies providing mentorship, market access, and business opportunities.",
    icon: <Globe className="h-8 w-8" />,
    benefits: ["Mentorship programs", "Market access", "Internship opportunities", "Business linkages"],
    count: 25,
  },
  {
    title: "Academic Partners",
    description: "Universities and research institutions supporting knowledge creation and skills development.",
    icon: <Award className="h-8 w-8" />,
    benefits: ["Research collaboration", "Curriculum development", "Student exchanges", "Innovation support"],
    count: 12,
  },
]

const partnershipBenefits = [
  "Access to a network of 1000+ young entrepreneurs",
  "Opportunity to shape youth entrepreneurship policy",
  "Brand visibility across Tanzania and East Africa",
  "Direct impact on youth employment and economic development",
  "Collaborative program development and implementation",
  "Knowledge sharing and best practice exchange",
]

export default function PartnershipsPage() {
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
          <p>Loading partnerships...</p>
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

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-tycc-blue to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Partnerships</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Building strategic alliances to create sustainable opportunities for Tanzania's youth entrepreneurs and
              drive economic transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tycc-blue mb-4">Partnership Categories</h2>
            <p className="text-xl text-gray-600">We collaborate with diverse organizations to maximize our impact</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipTypes.map((type, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-tycc-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {type.icon}
                  </div>
                  <CardTitle className="text-xl text-tycc-blue">{type.title}</CardTitle>
                  <div className="text-3xl font-bold text-tycc-gold">{type.count}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600">{type.description}</CardDescription>
                  <div className="space-y-2">
                    {type.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-tycc-blue mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tycc-blue mb-4">Our Strategic Partners</h2>
            <p className="text-xl text-gray-600">Working with leading organizations to empower Tanzania's youth</p>
          </div>

          <div className="space-y-8">
            {featuredPartners.map((partner) => (
              <Card key={partner.id} className="border-0 shadow-lg overflow-hidden">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1 bg-white p-8 flex items-center justify-center">
                    <div className="text-center">
                      <img
                        src={`https://tycc.e-saloon.online/public/storage/${partner.logo}` || "/placeholder.svg"}
                        alt={partner.name}
                        className="max-h-20 w-auto mx-auto mb-4 grayscale hover:grayscale-0 transition-all duration-300"
                      />
                      <h3 className="text-xl font-bold text-tycc-blue">{partner.name}</h3>
                      <Badge variant="secondary" className="bg-tycc-gold text-gray-900 mt-2">
                        {partner.category}
                      </Badge>
                      <div className="text-sm text-gray-500 mt-2">Partner since {partner.partnership_since}</div>
                    </div>
                  </div>
                  <div className="lg:col-span-2 p-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">About the Partnership</h4>
                    <p className="text-gray-600 mb-4">{partner.description}</p>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Collaboration Details</h4>
                    <p className="text-gray-600 mb-6">{partner.partnership_details}</p>
                    <Link href={`/partners/${partner.id}`}>
                      <Button
                        variant="outline"
                        className="border-tycc-blue text-tycc-blue hover:bg-tycc-blue hover:text-white bg-transparent"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Partners Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tycc-blue mb-4">All Partners</h2>
            <p className="text-xl text-gray-600">Our complete network of partner organizations</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner) => (
              <Link
                key={partner.id}
                href={`/partners/${partner.id}`}
                className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 group"
              >
                <div className="text-center">
                  <img
                    src={`https://tycc.e-saloon.online/public/storage/${partner.logo}` || "/placeholder.svg"}
                    alt={partner.name}
                    className="max-h-16 w-auto object-contain mx-auto mb-2"
                  />
                  <div className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    {partner.name}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-tycc-blue mb-6">Why Partner with TYCC?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Join our mission to empower Tanzania's youth and create lasting impact on economic development.
              </p>
              <div className="space-y-4">
                {partnershipBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-tycc-blue mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-tycc-blue mb-6">Partnership Opportunities</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-tycc-gold pl-4">
                  <h4 className="font-semibold text-gray-900">Program Sponsorship</h4>
                  <p className="text-gray-600 text-sm">Support specific programs and initiatives</p>
                </div>
                <div className="border-l-4 border-tycc-gold pl-4">
                  <h4 className="font-semibold text-gray-900">Mentorship Programs</h4>
                  <p className="text-gray-600 text-sm">Provide expertise and guidance to young entrepreneurs</p>
                </div>
                <div className="border-l-4 border-tycc-gold pl-4">
                  <h4 className="font-semibold text-gray-900">Market Access</h4>
                  <p className="text-gray-600 text-sm">Create business opportunities for TYCC members</p>
                </div>
                <div className="border-l-4 border-tycc-gold pl-4">
                  <h4 className="font-semibold text-gray-900">Research Collaboration</h4>
                  <p className="text-gray-600 text-sm">Joint research and knowledge creation initiatives</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-tycc-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's work together to create opportunities for Tanzania's youth and drive sustainable economic development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-secondary">Become a Partner</Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-tycc-blue bg-transparent"
            >
              Download Partnership Brochure
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
