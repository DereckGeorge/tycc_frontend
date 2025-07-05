"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Mail, Globe } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

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

export default function PartnerPage({ params }: { params: { id: string } }) {
  const [partner, setPartner] = useState<Partner | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPartner = async () => {
      try {
        const response = await fetch('/api/partners')
        if (!response.ok) {
          throw new Error('Failed to fetch partners')
        }
        
        const data = await response.json()
        const foundPartner = data.find((item: Partner) => item.id.toString() === params.id)
        
        if (!foundPartner) {
          notFound()
        }
        
        setPartner(foundPartner)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchPartner()
  }, [params.id])

  if (loading) {
    return (
      <main className="min-h-screen">
        <div className="flex items-center justify-center min-h-screen">
          <p>Loading partner details...</p>
        </div>
      </main>
    )
  }

  if (error || !partner) {
    return (
      <main className="min-h-screen">
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-red-600">Error: {error || 'Partner not found'}</p>
        </div>
      </main>
    )
  }

  const services = JSON.parse(partner.services_provided || '[]')
  const sectors = JSON.parse(partner.sectors_focus || '[]')

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-tycc-blue to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link 
              href="/partners" 
              className="inline-flex items-center text-blue-100 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Partners
            </Link>
          </div>
          <div className="text-center">
            <div className="mb-8">
              <img
                src={`https://tycc.e-saloon.online/public/storage/${partner.logo}` || "/placeholder.svg"}
                alt={partner.name}
                className="h-24 w-auto mx-auto object-contain"
              />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">{partner.name}</h1>
            <Badge className="bg-tycc-gold text-gray-900 mb-4">{partner.category}</Badge>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">{partner.description}</p>
          </div>
        </div>
      </section>

      {/* Partner Details */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Partnership Details */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-tycc-blue">Partnership Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Partnership Type</h3>
                  <Badge variant="secondary" className="bg-tycc-gold text-gray-900">
                    {partner.partnership_type}
                  </Badge>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Partnership Since</h3>
                  <p className="text-gray-600">{partner.partnership_since}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Partnership Details</h3>
                  <p className="text-gray-600 leading-relaxed">{partner.partnership_details}</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-tycc-blue">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Contact Person</h3>
                  <p className="text-gray-600">{partner.contact_person}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <a 
                    href={`mailto:${partner.contact_email}`}
                    className="inline-flex items-center text-tycc-blue hover:text-blue-800"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    {partner.contact_email}
                  </a>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Website</h3>
                  <a 
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-tycc-blue hover:text-blue-800"
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    Visit Website
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Services & Sectors */}
          <div className="mt-12 grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-tycc-blue">Services Provided</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {services.map((service: string, index: number) => (
                    <Badge key={index} variant="outline" className="border-tycc-blue text-tycc-blue">
                      {service}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-tycc-blue">Sectors Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {sectors.map((sector: string, index: number) => (
                    <Badge key={index} variant="outline" className="border-tycc-green text-tycc-green">
                      {sector}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/partners" 
              className="btn-primary inline-flex items-center"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Partners
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 