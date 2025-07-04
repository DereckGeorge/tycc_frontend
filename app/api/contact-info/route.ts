import { NextResponse } from "next/server"

const API_BASE_URL = "https://tycc.e-saloon.online/api/v1"

export async function GET() {
  try {
    const response = await fetch(`${API_BASE_URL}/contact-info`, {
      headers: {
        'accept': '*/*',
        'X-CSRF-TOKEN': ''
      }
    })

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`)
    }

    const data = await response.json()
    return NextResponse.json(data.data || {})
  } catch (error) {
    console.error('Error fetching contact info:', error)
    return NextResponse.json({ error: 'Failed to fetch contact info' }, { status: 500 })
  }
} 