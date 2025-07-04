import Link from "next/link"
import { ArrowRight, Users, Target, Globe } from "lucide-react"

export function HeroSection() {
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
              <Link href="/contact" className="btn-secondary inline-flex items-center justify-center">
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
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-tycc-blue rounded-full mx-auto flex items-center justify-center">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <div className="text-tycc-blue">
                    <div className="text-3xl font-bold">Youth</div>
                    <div className="text-lg">Empowerment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
