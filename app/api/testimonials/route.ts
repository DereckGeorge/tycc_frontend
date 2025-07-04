import { NextResponse } from "next/server"

// Mock data for testimonials
const testimonials = [
  {
    id: 1,
    name: "Amina Hassan",
    role: "Founder & CEO",
    company: "TechSolutions Tanzania",
    testimonial:
      "TYCC's Youth Business Incubator transformed my tech startup idea into a thriving business. The mentorship and networking opportunities were invaluable in securing our first major clients.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    created_at: "2024-01-10",
    updated_at: "2024-01-10",
  },
  {
    id: 2,
    name: "John Mwalimu",
    role: "Co-founder",
    company: "GreenAgri Innovations",
    testimonial:
      "The Digital Skills program equipped me with the knowledge to scale my agricultural business online. Within 6 months, we increased our revenue by 300% through e-commerce platforms.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    created_at: "2024-01-12",
    updated_at: "2024-01-12",
  },
  {
    id: 3,
    name: "Grace Kimaro",
    role: "Managing Director",
    company: "Kimaro Fashion House",
    testimonial:
      "The Women in Business Track gave me the confidence and skills to expand my fashion business across East Africa. The support network I built continues to be instrumental in my success.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    created_at: "2024-01-14",
    updated_at: "2024-01-14",
  },
  {
    id: 4,
    name: "David Mollel",
    role: "Founder",
    company: "EduTech Africa",
    testimonial:
      "TYCC's programs opened doors I never knew existed. The connections I made at the Youth Business Summit led to partnerships that transformed my education technology startup.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    created_at: "2024-01-16",
    updated_at: "2024-01-16",
  },
  {
    id: 5,
    name: "Fatuma Said",
    role: "Export Manager",
    company: "Spice Route Trading",
    testimonial:
      "The AfCFTA Access Program prepared my spice trading business for continental expansion. We now export to 8 African countries, thanks to the market insights and trade facilitation support.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    created_at: "2024-01-18",
    updated_at: "2024-01-18",
  },
]

export async function GET() {
  return NextResponse.json(testimonials)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const newTestimonial = {
      id: testimonials.length + 1,
      ...body,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }
    testimonials.push(newTestimonial)
    return NextResponse.json(newTestimonial, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }
}
