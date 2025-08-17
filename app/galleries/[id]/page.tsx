"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Camera, ChevronLeft, ChevronRight, Download, Share2, X } from "lucide-react"

interface GalleryImage {
  id: number
  url: string
  caption: string
  alt: string
}

interface Gallery {
  id: number
  title: string
  description: string
  cover_image: string
  date: string
  category: string
  image_count: number
  images: GalleryImage[]
}

export default function GalleryDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [gallery, setGallery] = useState<Gallery | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch('/api/galleries')
        if (!response.ok) {
          throw new Error('Failed to fetch galleries')
        }
        
        const data = await response.json()
        const foundGallery = data.find((g: Gallery) => g.id === parseInt(params.id))
        
        if (!foundGallery) {
          throw new Error('Gallery not found')
        }
        
        setGallery(foundGallery)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchGallery()
  }, [params.id])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImageIndex(null)
  }

  const nextImage = () => {
    if (gallery && selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % gallery.images.length)
    }
  }

  const prevImage = () => {
    if (gallery && selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? gallery.images.length - 1 : selectedImageIndex - 1)
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImageIndex === null) return
    
    switch (e.key) {
      case 'Escape':
        closeLightbox()
        break
      case 'ArrowLeft':
        prevImage()
        break
      case 'ArrowRight':
        nextImage()
        break
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selectedImageIndex])

  const downloadImage = (imageUrl: string, fileName: string) => {
    const link = document.createElement('a')
    link.href = imageUrl
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const shareImage = async (imageUrl: string, caption: string) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: gallery?.title,
          text: caption,
          url: window.location.href
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <Camera className="h-12 w-12 text-tycc-blue mx-auto mb-4 animate-pulse" />
            <p className="text-lg text-gray-600">Loading gallery...</p>
          </div>
        </div>
      </main>
    )
  }

  if (error || !gallery) {
    return (
      <main className="min-h-screen">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <p className="text-red-600 text-lg mb-4">Error: {error || 'Gallery not found'}</p>
            <Link
              href="/galleries"
              className="inline-flex items-center text-tycc-blue hover:text-blue-800 font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Galleries
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-tycc-blue to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href="/galleries"
              className="inline-flex items-center text-blue-100 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Galleries
            </Link>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-tycc-gold text-tycc-blue rounded-full text-sm font-medium mb-4">
              {gallery.category}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">{gallery.title}</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-6">
              {gallery.description}
            </p>
            
            <div className="flex items-center justify-center gap-6 text-blue-100">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                {formatDate(gallery.date)}
              </div>
              <div className="flex items-center">
                <Camera className="h-5 w-5 mr-2" />
                {gallery.image_count} Photos
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {gallery.images.map((image, index) => (
              <div
                key={image.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white bg-opacity-90 rounded-full p-3">
                        <Camera className="h-6 w-6 text-tycc-blue" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {image.caption && (
                  <div className="p-4">
                    <p className="text-sm text-gray-600 line-clamp-2">{image.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Image Counter */}
            <div className="absolute top-6 left-6 text-white text-lg font-medium z-10">
              {selectedImageIndex + 1} / {gallery.images.length}
            </div>

            {/* Action Buttons */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-10">
              <button
                onClick={() => downloadImage(
                  gallery.images[selectedImageIndex].url,
                  `${gallery.title}-${selectedImageIndex + 1}.jpg`
                )}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
                title="Download Image"
              >
                <Download className="h-5 w-5" />
              </button>
              
              <button
                onClick={() => shareImage(
                  gallery.images[selectedImageIndex].url,
                  gallery.images[selectedImageIndex].caption
                )}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
                title="Share Image"
              >
                <Share2 className="h-5 w-5" />
              </button>
            </div>

            {/* Previous Button */}
            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 p-2"
            >
              <ChevronLeft className="h-10 w-10" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 p-2"
            >
              <ChevronRight className="h-10 w-10" />
            </button>

            {/* Main Image */}
            <div className="relative max-w-5xl max-h-full">
              <Image
                src={gallery.images[selectedImageIndex].url}
                alt={gallery.images[selectedImageIndex].alt}
                width={1200}
                height={800}
                className="max-h-[85vh] w-auto object-contain"
              />
              
              {/* Caption */}
              {gallery.images[selectedImageIndex].caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-6">
                  <p className="text-center text-lg">{gallery.images[selectedImageIndex].caption}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  )
} 