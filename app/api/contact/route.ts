import { NextResponse } from "next/server"

// Mock database for contact form submissions
const contactSubmissions: any[] = []

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Create new contact submission
    const newSubmission = {
      id: contactSubmissions.length + 1,
      name,
      email,
      subject,
      message,
      status: "new",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    contactSubmissions.push(newSubmission)

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification to admin
    // 3. Send confirmation email to user

    return NextResponse.json({ message: "Contact form submitted successfully", id: newSubmission.id }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json(contactSubmissions)
}
