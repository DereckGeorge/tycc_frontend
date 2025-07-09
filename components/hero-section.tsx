"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Users, Target, Globe } from "lucide-react"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // Array of slider images
  const sliderImages = [
    "/slider/slider1.jpeg",
    "/slider/slider2.jpeg", 
    "/slider/slider3.jpeg",
    "/slider/slider4.jpeg",
    "/slider/slider5.jpeg",
    "/slider/slider6.jpeg",
    "/slider/slider7.jpeg",
    "/slider/slider8.jpeg"
  ]

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [sliderImages.length])

  return (
    <section className="relative bg-gradient-to-br from-tycc-blue to-blue-800 text-white py-20 lg:py-32">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Empowering Tanzania's Youth. <span className="text-tycc-gold">Building Africa's Future.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                Join Tanzania's premier platform for youth in business and innovation. Transform your ideas into
                thriving enterprises.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/join" className="btn-secondary inline-flex items-center justify-center">
                Join TYCC
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/programs"
                className="border-2 border-white text-white hover:bg-white hover:text-tycc-blue font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
              >
                Explore Programs
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-blue-600">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-tycc-gold" />
                </div>
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-sm text-blue-200">Youth Members</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Target className="h-8 w-8 text-tycc-gold" />
                </div>
                <div className="text-2xl font-bold">5</div>
                <div className="text-sm text-blue-200">Flagship Programs</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Globe className="h-8 w-8 text-tycc-gold" />
                </div>
                <div className="text-2xl font-bold">30+</div>
                <div className="text-sm text-blue-200">Training Events</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-tycc-gold to-yellow-500 rounded-full p-8 shadow-2xl">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden relative">
                {/* Image Slider */}
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  {sliderImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`TYCC Slider ${index + 1}`}
                        fill
                        className="object-cover rounded-full"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                  
                  {/* Overlay with TYCC branding */}
                  <div className="absolute inset-0 bg-black bg-opacity-30 rounded-full flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-tycc-blue rounded-full mx-auto flex items-center justify-center bg-opacity-90">
                        <Users className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-white">
                        <div className="text-2xl font-bold drop-shadow-lg">TYCC</div>
                        <div className="text-sm drop-shadow-lg">Empowering Youth</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slider indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {sliderImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-white scale-125' 
                          : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
