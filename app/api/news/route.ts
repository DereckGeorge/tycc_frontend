import { NextResponse } from "next/server"

const API_BASE_URL = "https://tycc.e-saloon.online/api/v1"

export async function GET() {
  try {
    const response = await fetch(`${API_BASE_URL}/news`, {
      method: 'GET',
      headers: {
        'accept': '*/*',
        'X-CSRF-TOKEN': '',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      },
      cache: 'no-store' // Force fresh data
    })

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`)
    }

    const data = await response.json()
    
    // Return fresh data with cache control headers
    return new NextResponse(JSON.stringify(data.data || []), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    })
  } catch (error) {
    console.error('Error fetching news:', error)
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 })
  }
}

