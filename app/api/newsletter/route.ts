import { NextResponse } from "next/server"

// Mock database for newsletter subscriptions
const newsletterSubscriptions: any[] = []

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    // Validate email
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Check if email already exists
    const existingSubscription = newsletterSubscriptions.find((sub) => sub.email === email)
    if (existingSubscription) {
      return NextResponse.json({ error: "Email already subscribed" }, { status: 409 })
    }

    // Create new subscription
    const newSubscription = {
      id: newsletterSubscriptions.length + 1,
      email,
      status: "active",
      subscribed_at: new Date().toISOString(),
    }

    newsletterSubscriptions.push(newSubscription)

    return NextResponse.json({ message: "Successfully subscribed to newsletter" }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json(newsletterSubscriptions)
}
