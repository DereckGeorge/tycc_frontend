"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { Users, Award, Calendar, Building } from "lucide-react"

interface Stat {
  icon: React.ReactNode
  value: number
  label: string
  suffix?: string
}

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedValues, setAnimatedValues] = useState<number[]>([0, 0, 0, 0])
  const sectionRef = useRef<HTMLDivElement>(null)

  const stats: Stat[] = [
    {
      icon: <Users className="h-12 w-12" />,
      value: 1000,
      label: "Youth Members",
      suffix: "+",
    },
    {
      icon: <Award className="h-12 w-12" />,
      value: 5,
      label: "Flagship Programs",
    },
    {
      icon: <Calendar className="h-12 w-12" />,
      value: 30,
      label: "Training Events",
      suffix: "+",
    },
    {
      icon: <Building className="h-12 w-12" />,
      value: 50,
      label: "Partner Organizations",
      suffix: "+",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        let start = 0
        const end = stat.value
        const duration = 2000
        const increment = end / (duration / 16)

        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            start = end
            clearInterval(timer)
          }
          setAnimatedValues((prev) => {
            const newValues = [...prev]
            newValues[index] = Math.floor(start)
            return newValues
          })
        }, 16)
      })
    }
  }, [isVisible])

  return (
    <section ref={sectionRef} className="py-20 bg-tycc-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Transforming lives and building futures across Tanzania through youth empowerment and business development.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4 text-tycc-gold">{stat.icon}</div>
              <div className="text-4xl lg:text-5xl font-bold mb-2 count-up">
                {animatedValues[index]}
                {stat.suffix}
              </div>
              <div className="text-lg text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
