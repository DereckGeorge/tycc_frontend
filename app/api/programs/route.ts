import { NextResponse } from "next/server"

// Mock data for programs
const programs = [
  {
    id: 1,
    title: "Youth Business Incubator",
    description:
      "A comprehensive 6-month program that provides young entrepreneurs with mentorship, funding opportunities, and business development support to transform innovative ideas into viable businesses.",
    category: "Incubation",
    duration: "6 months",
    participants: 150,
    icon: "lightbulb",
    status: "active",
    created_at: "2024-01-15",
    updated_at: "2024-01-15",
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
    status: "active",
    created_at: "2024-01-15",
    updated_at: "2024-01-15",
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
    status: "active",
    created_at: "2024-01-15",
    updated_at: "2024-01-15",
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
    status: "active",
    created_at: "2024-01-15",
    updated_at: "2024-01-15",
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
    status: "active",
    created_at: "2024-01-15",
    updated_at: "2024-01-15",
  },
]

export async function GET() {
  return NextResponse.json(programs)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const newProgram = {
      id: programs.length + 1,
      ...body,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }
    programs.push(newProgram)
    return NextResponse.json(newProgram, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }
}
