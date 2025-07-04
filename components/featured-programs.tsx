"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Laptop, Users, Calendar, Globe } from "lucide-react"

interface Program {
  id: number
  title: string
  description: string
  category: string
  duration: string
  participants: number
  icon: string
}

// Static data - no API calls needed
const programs: Program[] = [
  {
    id: 1,
    title: "Youth Business Incubator",
    description:
      "A comprehensive 6-month program that provides young entrepreneurs with mentorship, funding opportunities, and business development support to transform innovative ideas into viable businesses.",
    category: "Incubation",
    duration: "6 months",
    participants: 150,
    icon: "lightbulb",
  },
  {
    id: 2,
    title: "Digital Skills for Entrepreneurs",
    description:
      "Equipping young business owners with essential digital marketing, e-commerce, and technology skills needed to thrive in the modern business landscape.",
    category: "Digital Skills",
    duration: "3 months",
    participants: 200,
    icon: "laptop",
  },
  {
    id: 3,
    title: "Women in Business Track",
    description:
      "A specialized program designed to empower young women entrepreneurs with leadership skills, networking opportunities, and access to women-focused funding initiatives.",
    category: "Women Empowerment",
    duration: "4 months",
    participants: 120,
    icon: "users",
  },
  {
    id: 4,
    title: "Youth Business Summit",
    description:
      "An annual flagship event bringing together young entrepreneurs, investors, and industry leaders for networking, knowledge sharing, and partnership opportunities.",
    category: "Events",
    duration: "3 days",
    participants: 500,
    icon: "calendar",
  },
  {
    id: 5,
    title: "AfCFTA Access Program",
    description:
      "Preparing young entrepreneurs to leverage opportunities within the African Continental Free Trade Area through market research, trade facilitation, and cross-border business development.",
    category: "Trade",
    duration: "5 months",
    participants: 80,
    icon: "globe",
  },
]

export function FeaturedPrograms() {
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
