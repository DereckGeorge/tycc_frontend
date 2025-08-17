"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Camera, Eye, Filter, Grid, X } from "lucide-react"

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

export default function GalleriesPage() {
  const [galleries, setGalleries] = useState<Gallery[]>([])
  const [filteredGalleries, setFilteredGalleries] = useState<Gallery[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  useEffect(() => {
    const fetchGalleries = async () => {
      try {
        const response = await fetch('/api/galleries')
        if (!response.ok) {
          throw new Error('Failed to fetch galleries')
        }
        
        const data = await response.json()
        setGalleries(data)
        setFilteredGalleries(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchGalleries()
  }, [])

  // Filter galleries by category
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredGalleries(galleries)
    } else {
      setFilteredGalleries(galleries.filter(gallery => gallery.category === selectedCategory))
    }
  }, [selectedCategory, galleries])

  // Get unique categories
  const categories = ["all", ...Array.from(new Set(galleries.map(gallery => gallery.category)))]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const openImageModal = (image: GalleryImage) => {
    setSelectedImage(image)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  if (loading) {
    return (
      <main className="min-h-screen">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <Camera className="h-12 w-12 text-tycc-blue mx-auto mb-4 animate-pulse" />
            <p className="text-lg text-gray-600">Loading galleries...</p>
          </div>
        </div>
      </main>
    )
  }

  if (error) {
    return (
      <main className="min-h-screen">
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-red-600 text-lg">Error: {error}</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-tycc-blue to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Photo Galleries</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Capturing moments, celebrating achievements, and showcasing the vibrant TYCC community through our lens.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Section */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-tycc-blue" />
                <h2 className="text-lg font-semibold text-gray-900">Filter by Category</h2>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                      selectedCategory === category
                        ? 'bg-tycc-blue text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          {filteredGalleries.length === 0 ? (
            <div className="text-center py-20">
              <Camera className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No galleries found</h3>
              <p className="text-gray-500">Try selecting a different category or check back later.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGalleries.map((gallery) => (
                <div
                  key={gallery.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Gallery Cover Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={gallery.cover_image}
                      alt={gallery.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                      <Camera className="h-4 w-4" />
                      {gallery.image_count}
                    </div>
                    <div className="absolute bottom-4 left-4 bg-tycc-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                      {gallery.category}
                    </div>
                  </div>

                  {/* Gallery Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{gallery.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{gallery.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(gallery.date)}
                      </div>
                      
                      <Link
                        href={`/galleries/${gallery.id}`}
                        className="inline-flex items-center text-tycc-blue hover:text-blue-800 font-medium"
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        View Gallery
                      </Link>
                    </div>
                  </div>

                  {/* Quick Preview Grid */}
                  <div className="border-t border-gray-100 p-4">
                    <div className="grid grid-cols-4 gap-2">
                      {gallery.images.slice(0, 4).map((image, index) => (
                        <div
                          key={image.id}
                          className="relative h-16 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={() => openImageModal(image)}
                        >
                          <Image
                            src={image.url}
                            alt={image.alt}
                            fill
                            className="object-cover"
                          />
                          {index === 3 && gallery.images.length > 4 && (
                            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                              <span className="text-white font-bold text-sm">
                                +{gallery.images.length - 4}
                              </span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            
            <div className="relative">
              <Image
                src={selectedImage.url}
                alt={selectedImage.alt}
                width={800}
                height={600}
                className="max-h-[80vh] w-auto object-contain"
              />
              
              {selectedImage.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                  <p className="text-center">{selectedImage.caption}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  )
} 