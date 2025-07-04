import { HeroSection } from "@/components/hero-section"
import { FeaturedPrograms } from "@/components/featured-programs"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { NewsSection } from "@/components/news-section"
import { PartnersSection } from "@/components/partners-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturedPrograms />
      <StatsSection />
      <TestimonialsSection />
      <NewsSection />
      <PartnersSection />
    </main>
  )
}
