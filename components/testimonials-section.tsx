"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  testimonial: string
  avatar: string
}

// Static testimonials data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Amina Hassan",
    role: "Founder & CEO",
    company: "TechSolutions Tanzania",
    testimonial:
      "TYCC's Youth Business Incubator transformed my tech startup idea into a thriving business. The mentorship and networking opportunities were invaluable in securing our first major clients.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "John Mwalimu",
    role: "Co-founder",
    company: "GreenAgri Innovations",
    testimonial:
      "The Digital Skills program equipped me with the knowledge to scale my agricultural business online. Within 6 months, we increased our revenue by 300% through e-commerce platforms.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Grace Kimaro",
    role: "Managing Director",
    company: "Kimaro Fashion House",
    testimonial:
      "The Women in Business Track gave me the confidence and skills to expand my fashion business across East Africa. The support network I built continues to be instrumental in my success.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-tycc-green mb-4">What Our Members Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from young entrepreneurs who have transformed their lives through TYCC programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <Quote className="h-12 w-12 text-tycc-gold" />
                </div>
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.testimonial}"
                </blockquote>
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback className="bg-tycc-blue text-white">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-tycc-blue">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
