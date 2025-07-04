import { NextResponse } from "next/server"

// Mock data for news and events
const news = [
  {
    id: 1,
    title: "TYCC Launches New Digital Innovation Hub",
    excerpt:
      "A state-of-the-art facility equipped with modern technology to support young entrepreneurs in developing digital solutions for local and regional markets.",
    content:
      "The Tanzania Youth Chamber of Commerce has officially launched its Digital Innovation Hub, a cutting-edge facility designed to nurture the next generation of tech entrepreneurs...",
    category: "Innovation",
    date: "2024-01-20",
    image: "/placeholder.svg?height=300&width=500",
    slug: "tycc-launches-digital-innovation-hub",
    author: "TYCC Communications Team",
    status: "published",
    created_at: "2024-01-20",
    updated_at: "2024-01-20",
  },
  {
    id: 2,
    title: "50 Young Entrepreneurs Graduate from Business Incubator",
    excerpt:
      "The latest cohort of the Youth Business Incubator program celebrates successful completion, with 80% of participants launching viable businesses.",
    content:
      "In a ceremony held at the Dar es Salaam Convention Centre, 50 young entrepreneurs graduated from TYCC's flagship Youth Business Incubator program...",
    category: "Programs",
    date: "2024-01-18",
    image: "/placeholder.svg?height=300&width=500",
    slug: "50-entrepreneurs-graduate-business-incubator",
    author: "Sarah Johnson",
    status: "published",
    created_at: "2024-01-18",
    updated_at: "2024-01-18",
  },
  {
    id: 3,
    title: "Partnership with African Development Bank Announced",
    excerpt:
      "TYCC signs MOU with AfDB to provide $2M in funding support for youth-led businesses across Tanzania over the next three years.",
    content:
      "The Tanzania Youth Chamber of Commerce has entered into a strategic partnership with the African Development Bank to enhance access to finance for young entrepreneurs...",
    category: "Partnerships",
    date: "2024-01-15",
    image: "/placeholder.svg?height=300&width=500",
    slug: "partnership-african-development-bank",
    author: "Michael Temba",
    status: "published",
    created_at: "2024-01-15",
    updated_at: "2024-01-15",
  },
  {
    id: 4,
    title: "Women in Business Track Records 95% Success Rate",
    excerpt:
      "The specialized program for women entrepreneurs achieves remarkable results with participants reporting significant business growth and expansion.",
    content:
      "TYCC's Women in Business Track has achieved a 95% success rate, with participants reporting an average revenue increase of 250% within six months of program completion...",
    category: "Women Empowerment",
    date: "2024-01-12",
    image: "/placeholder.svg?height=300&width=500",
    slug: "women-business-track-success-rate",
    author: "Grace Mwangi",
    status: "published",
    created_at: "2024-01-12",
    updated_at: "2024-01-12",
  },
  {
    id: 5,
    title: "Annual Youth Business Summit 2024 Registration Opens",
    excerpt:
      "Join 500+ young entrepreneurs, investors, and industry leaders at Tanzania's premier youth business event scheduled for March 15-17, 2024.",
    content:
      "Registration is now open for the Annual Youth Business Summit 2024, TYCC's flagship event that brings together the brightest minds in youth entrepreneurship...",
    category: "Events",
    date: "2024-01-10",
    image: "/placeholder.svg?height=300&width=500",
    slug: "youth-business-summit-2024-registration",
    author: "David Mwalimu",
    status: "published",
    created_at: "2024-01-10",
    updated_at: "2024-01-10",
  },
]

export async function GET() {
  return NextResponse.json(news)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const newNews = {
      id: news.length + 1,
      ...body,
      slug: body.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, ""),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }
    news.push(newNews)
    return NextResponse.json(newNews, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }
}
