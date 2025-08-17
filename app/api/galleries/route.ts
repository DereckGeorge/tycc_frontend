import { NextResponse } from "next/server"

const API_BASE_URL = "https://tycc.e-saloon.online/api/v1"
const IMAGE_BASE_URL = "https://tycc.e-saloon.online/public/storage"

export async function GET() {
  try {
    const response = await fetch(`${API_BASE_URL}/galleries?limit=20`, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
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
    
    // Transform the API data to match our frontend interface
    const transformedGalleries = data.map((gallery: any) => ({
      id: gallery.id,
      title: gallery.title,
      description: gallery.description,
      cover_image: gallery.cover_image.startsWith('/') ? gallery.cover_image : `${IMAGE_BASE_URL}/${gallery.cover_image}`,
      date: gallery.date,
      category: gallery.category,
      image_count: parseInt(gallery.image_count) || gallery.images?.length || 0,
      images: gallery.images?.map((image: any) => ({
        id: image.id,
        url: image.url.startsWith('/') ? image.url : `${IMAGE_BASE_URL}/${image.url}`,
        caption: image.caption || '',
        alt: image.alt || image.caption || gallery.title
      })) || []
    }))
    
    // Return transformed data with proper headers
    return new NextResponse(JSON.stringify(transformedGalleries), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    })
  } catch (error) {
    console.error('Error fetching galleries:', error)
    return NextResponse.json({ error: 'Failed to fetch galleries' }, { status: 500 })
  }
} 