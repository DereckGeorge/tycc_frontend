import { NextResponse } from "next/server"

const API_BASE_URL = "https://tycc.e-saloon.online/api/v1"

export async function GET() {
  try {
    const response = await fetch(`${API_BASE_URL}/webinars`, {
      method: 'GET',
      headers: {
        'accept': '*/*',
        'X-CSRF-TOKEN': '',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }
    })

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`)
    }

    const data = await response.json()
    return NextResponse.json(data.data || [])
  } catch (error) {
    console.error('Error fetching webinars:', error)
    return NextResponse.json({ error: 'Failed to fetch webinars' }, { status: 500 })
  }
} 