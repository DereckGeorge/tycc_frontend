import { NextResponse } from "next/server"

// Mock gallery data until backend API is available
const mockGalleries = [
  {
    id: 1,
    title: "Youth Business Summit 2024",
    description: "Highlights from Tanzania's premier youth entrepreneurship event",
    cover_image: "/slider/slider1.jpeg",
    date: "2024-03-15",
    category: "events",
    image_count: 12,
    images: [
      {
        id: 1,
        url: "/slider/slider1.jpeg",
        caption: "Opening ceremony with keynote speakers",
        alt: "Youth Business Summit opening ceremony"
      },
      {
        id: 2,
        url: "/slider/slider2.jpeg",
        caption: "Young entrepreneurs networking session",
        alt: "Networking session at Youth Business Summit"
      },
      {
        id: 3,
        url: "/slider/slider3.jpeg",
        caption: "Panel discussion on innovation and technology",
        alt: "Panel discussion at Youth Business Summit"
      },
      {
        id: 4,
        url: "/slider/slider4.jpeg",
        caption: "Pitch competition presentations",
        alt: "Startup pitch competition"
      },
      {
        id: 5,
        url: "/slider/slider5.jpeg",
        caption: "Award ceremony for outstanding entrepreneurs",
        alt: "Award ceremony at Youth Business Summit"
      },
      {
        id: 6,
        url: "/slider/slider6.jpeg",
        caption: "Exhibition showcasing youth-led innovations",
        alt: "Innovation exhibition"
      }
    ]
  },
  {
    id: 2,
    title: "Women in Business Training",
    description: "Empowering women entrepreneurs through specialized business training",
    cover_image: "/slider/slider7.jpeg",
    date: "2024-02-20",
    category: "training",
    image_count: 8,
    images: [
      {
        id: 7,
        url: "/slider/slider7.jpeg",
        caption: "Women entrepreneurs learning digital marketing strategies",
        alt: "Women in business training session"
      },
      {
        id: 8,
        url: "/slider/slider8.jpeg",
        caption: "Group discussions and knowledge sharing",
        alt: "Women entrepreneurs group discussion"
      },
      {
        id: 9,
        url: "/slider/slider1.jpeg",
        caption: "Mentorship sessions with successful businesswomen",
        alt: "Mentorship sessions"
      },
      {
        id: 10,
        url: "/slider/slider2.jpeg",
        caption: "Financial literacy workshop",
        alt: "Financial literacy training"
      }
    ]
  },
  {
    id: 3,
    title: "Innovation Hub Launch",
    description: "Official opening of TYCC's state-of-the-art Digital Innovation Hub",
    cover_image: "/slider/slider3.jpeg",
    date: "2024-01-20",
    category: "facilities",
    image_count: 10,
    images: [
      {
        id: 11,
        url: "/slider/slider3.jpeg",
        caption: "Ribbon cutting ceremony at the Innovation Hub",
        alt: "Innovation Hub launch ceremony"
      },
      {
        id: 12,
        url: "/slider/slider4.jpeg",
        caption: "Modern co-working spaces for young entrepreneurs",
        alt: "Innovation Hub co-working space"
      },
      {
        id: 13,
        url: "/slider/slider5.jpeg",
        caption: "High-tech equipment and prototyping facilities",
        alt: "Innovation Hub equipment"
      },
      {
        id: 14,
        url: "/slider/slider6.jpeg",
        caption: "3D printing and fabrication lab",
        alt: "Innovation Hub fabrication lab"
      }
    ]
  },
  {
    id: 4,
    title: "Entrepreneurship Bootcamp",
    description: "Intensive training program for aspiring young entrepreneurs",
    cover_image: "/slider/slider7.jpeg",
    date: "2024-01-15",
    category: "training",
    image_count: 15,
    images: [
      {
        id: 15,
        url: "/slider/slider7.jpeg",
        caption: "Interactive business planning sessions",
        alt: "Entrepreneurship bootcamp session"
      },
      {
        id: 16,
        url: "/slider/slider8.jpeg",
        caption: "Team building and collaboration exercises",
        alt: "Bootcamp team building"
      },
      {
        id: 17,
        url: "/slider/slider1.jpeg",
        caption: "One-on-one mentoring with industry experts",
        alt: "Bootcamp mentoring session"
      }
    ]
  },
  {
    id: 5,
    title: "Partnership Signing Ceremony",
    description: "Strategic partnerships with international organizations",
    cover_image: "/slider/slider2.jpeg",
    date: "2024-01-10",
    category: "partnerships",
    image_count: 6,
    images: [
      {
        id: 18,
        url: "/slider/slider2.jpeg",
        caption: "MOU signing with African Development Bank",
        alt: "Partnership signing ceremony"
      },
      {
        id: 19,
        url: "/slider/slider3.jpeg",
        caption: "Leaders discussing collaboration opportunities",
        alt: "Partnership discussion"
      }
    ]
  }
]

export async function GET() {
  try {
    // Return mock data with proper headers
    return new NextResponse(JSON.stringify(mockGalleries), {
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