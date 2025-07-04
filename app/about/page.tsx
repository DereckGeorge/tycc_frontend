import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Users, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-tycc-blue to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">About TYCC</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Tanzania Youth Chamber of Commerce is the premier platform for youth entrepreneurship and business
              development in Tanzania.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-tycc-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-tycc-blue">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-gray-700 leading-relaxed text-center">
                  To be Africa's premier platform for youth in business and innovation, creating sustainable economic
                  opportunities and fostering entrepreneurial excellence across the continent.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-tycc-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-gray-900" />
                </div>
                <CardTitle className="text-2xl text-tycc-blue">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-gray-700 leading-relaxed text-center">
                  To empower young entrepreneurs through comprehensive business development programs, strategic
                  partnerships, and innovative solutions that drive economic growth and social impact.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tycc-blue mb-6">Our Story</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Founded in 2018, the Tanzania Youth Chamber of Commerce emerged from a vision to bridge the gap between
                young entrepreneurs and sustainable business opportunities. Recognizing that youth represent over 60% of
                Tanzania's population, our founders saw the immense potential for economic transformation through youth
                empowerment.
              </p>
              <p>
                What started as a small network of passionate young entrepreneurs has grown into Tanzania's leading
                youth business organization, with over 1,000 active members across the country. We have successfully
                launched five flagship programs, conducted over 30 training events, and facilitated partnerships with
                more than 50 organizations.
              </p>
              <p>
                Today, TYCC stands as a beacon of hope and opportunity for young Tanzanians, providing the tools,
                resources, and networks necessary to transform innovative ideas into thriving businesses that contribute
                to national economic development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tycc-blue mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do and shape our approach to youth empowerment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Innovation",
                description: "Fostering creative solutions and entrepreneurial thinking",
                icon: <Award className="h-8 w-8" />,
              },
              {
                title: "Integrity",
                description: "Maintaining the highest standards of ethics and transparency",
                icon: <Users className="h-8 w-8" />,
              },
              {
                title: "Collaboration",
                description: "Building strong partnerships and networks for mutual growth",
                icon: <Target className="h-8 w-8" />,
              },
              {
                title: "Excellence",
                description: "Striving for the highest quality in all our programs and services",
                icon: <Eye className="h-8 w-8" />,
              },
            ].map((value, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-tycc-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl text-tycc-blue">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
