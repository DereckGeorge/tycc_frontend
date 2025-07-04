import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Lightbulb, Laptop, Users, Calendar, Globe, Clock, MapPin, DollarSign } from "lucide-react"

const programs = [
  {
    id: 1,
    title: "Youth Business Incubator",
    description:
      "A comprehensive 6-month program that provides young entrepreneurs with mentorship, funding opportunities, and business development support to transform innovative ideas into viable businesses.",
    fullDescription:
      "Our flagship program designed to nurture early-stage startups through intensive mentorship, workshops, and access to funding. Participants receive one-on-one coaching, pitch training, market validation support, and networking opportunities with successful entrepreneurs and investors.",
    category: "Incubation",
    duration: "6 months",
    participants: 150,
    icon: "lightbulb",
    features: ["1-on-1 Mentorship", "Funding Access", "Pitch Training", "Market Validation", "Networking Events"],
    requirements: ["Age 18-35", "Business Idea", "Commitment to Program", "Basic Business Plan"],
    nextIntake: "March 2024",
    location: "TYCC Innovation Hub, Dar es Salaam",
    cost: "Free",
  },
  {
    id: 2,
    title: "Digital Skills for Entrepreneurs",
    description:
      "Equipping young business owners with essential digital marketing, e-commerce, and technology skills needed to thrive in the modern business landscape.",
    fullDescription:
      "A practical program covering digital marketing, social media management, e-commerce platforms, basic web development, and digital financial services. Perfect for entrepreneurs looking to digitize their operations and reach new markets online.",
    category: "Digital Skills",
    duration: "3 months",
    participants: 200,
    icon: "laptop",
    features: [
      "Digital Marketing",
      "E-commerce Setup",
      "Social Media Management",
      "Basic Web Development",
      "Digital Payments",
    ],
    requirements: ["Basic Computer Skills", "Existing Business", "Internet Access", "Smartphone/Laptop"],
    nextIntake: "February 2024",
    location: "Online & TYCC Centers",
    cost: "TSh 50,000",
  },
  {
    id: 3,
    title: "Women in Business Track",
    description:
      "A specialized program designed to empower young women entrepreneurs with leadership skills, networking opportunities, and access to women-focused funding initiatives.",
    fullDescription:
      "Addressing unique challenges faced by women entrepreneurs through leadership development, confidence building, work-life balance strategies, and access to women-only funding opportunities and networks.",
    category: "Women Empowerment",
    duration: "4 months",
    participants: 120,
    icon: "users",
    features: [
      "Leadership Training",
      "Confidence Building",
      "Women-only Networks",
      "Funding Access",
      "Work-life Balance",
    ],
    requirements: ["Female Entrepreneur", "Age 18-40", "Business Idea/Existing Business", "Leadership Potential"],
    nextIntake: "April 2024",
    location: "TYCC Women's Center, Dar es Salaam",
    cost: "Free",
  },
  {
    id: 4,
    title: "Youth Business Summit",
    description:
      "An annual flagship event bringing together young entrepreneurs, investors, and industry leaders for networking, knowledge sharing, and partnership opportunities.",
    fullDescription:
      "Tanzania's premier youth entrepreneurship event featuring keynote speakers, panel discussions, pitch competitions, exhibition spaces, and extensive networking opportunities. A must-attend event for anyone in the youth business ecosystem.",
    category: "Events",
    duration: "3 days",
    participants: 500,
    icon: "calendar",
    features: ["Keynote Speakers", "Panel Discussions", "Pitch Competition", "Exhibition", "Networking"],
    requirements: ["Youth Entrepreneur", "Registration Required", "Business Interest", "Networking Mindset"],
    nextIntake: "March 15-17, 2024",
    location: "Dar es Salaam Convention Centre",
    cost: "TSh 25,000",
  },
  {
    id: 5,
    title: "AfCFTA Access Program",
    description:
      "Preparing young entrepreneurs to leverage opportunities within the African Continental Free Trade Area through market research, trade facilitation, and cross-border business development.",
    fullDescription:
      "Specialized training on continental trade opportunities, export/import procedures, market research across African countries, trade finance, and building cross-border business relationships under the AfCFTA framework.",
    category: "Trade",
    duration: "5 months",
    participants: 80,
    icon: "globe",
    features: ["Trade Procedures", "Market Research", "Export Training", "Trade Finance", "Cross-border Networks"],
    requirements: ["Existing Business", "Export Interest", "Basic Trade Knowledge", "Commitment to Africa Trade"],
    nextIntake: "May 2024",
    location: "TYCC Trade Center, Dar es Salaam",
    cost: "TSh 100,000",
  },
]

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "lightbulb":
      return <Lightbulb className="h-8 w-8" />
    case "laptop":
      return <Laptop className="h-8 w-8" />
    case "users":
      return <Users className="h-8 w-8" />
    case "calendar":
      return <Calendar className="h-8 w-8" />
    case "globe":
      return <Globe className="h-8 w-8" />
    default:
      return <Lightbulb className="h-8 w-8" />
  }
}

export default function ProgramsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-tycc-blue to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Comprehensive programs designed to empower Tanzania's youth with essential business skills, funding
              access, and growth opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {programs.map((program, index) => (
              <Card key={program.id} className="border-0 shadow-lg overflow-hidden">
                <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  {/* Content */}
                  <div className={`p-8 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-tycc-blue rounded-full flex items-center justify-center text-white">
                        {getIcon(program.icon)}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-tycc-blue">{program.title}</h2>
                        <Badge variant="secondary" className="bg-tycc-gold text-gray-900">
                          {program.category}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-gray-600 text-lg leading-relaxed mb-6">{program.fullDescription}</p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {program.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <div className="w-2 h-2 bg-tycc-gold rounded-full mr-3"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {program.requirements.map((requirement, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <div className="w-2 h-2 bg-tycc-blue rounded-full mr-3"></div>
                              {requirement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-6 text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-tycc-gold" />
                        <span className="text-gray-600">Duration: {program.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-tycc-gold" />
                        <span className="text-gray-600">{program.participants}+ participants</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-tycc-gold" />
                        <span className="text-gray-600">{program.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-4 w-4 text-tycc-gold" />
                        <span className="text-gray-600">Cost: {program.cost}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="btn-primary">Apply Now</Button>
                      <Button
                        variant="outline"
                        className="border-tycc-blue text-tycc-blue hover:bg-tycc-blue hover:text-white bg-transparent"
                      >
                        Learn More
                      </Button>
                    </div>

                    <div className="mt-4 text-sm text-gray-500">
                      Next Intake: <span className="font-semibold text-tycc-blue">{program.nextIntake}</span>
                    </div>
                  </div>

                  {/* Image */}
                  <div
                    className={`bg-gradient-to-br from-tycc-blue to-blue-800 flex items-center justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                  >
                    <div className="text-center text-white p-8">
                      <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <div className="text-6xl">{getIcon(program.icon)}</div>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                      <p className="text-blue-100">{program.category}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-tycc-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of young entrepreneurs who have accelerated their business growth through TYCC programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-secondary">Apply for Programs</Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-tycc-blue bg-transparent"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
