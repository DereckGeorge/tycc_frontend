import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Video, BookOpen, ExternalLink } from "lucide-react"

const resources = [
  {
    id: 1,
    title: "TYCC Constitution",
    description: "Official constitution and governance documents of the Tanzania Youth Chamber of Commerce.",
    type: "PDF",
    category: "Governance",
    size: "2.5 MB",
    downloads: 1250,
    icon: <FileText className="h-6 w-6" />,
    featured: true,
  },
  {
    id: 2,
    title: "Business Plan Template",
    description: "Comprehensive business plan template specifically designed for young entrepreneurs in Tanzania.",
    type: "PDF",
    category: "Business Planning",
    size: "1.8 MB",
    downloads: 3400,
    icon: <FileText className="h-6 w-6" />,
    featured: true,
  },
  {
    id: 3,
    title: "Digital Marketing Guide",
    description:
      "Complete guide to digital marketing for small businesses, including social media strategies and online advertising.",
    type: "PDF",
    category: "Marketing",
    size: "4.2 MB",
    downloads: 2100,
    icon: <BookOpen className="h-6 w-6" />,
    featured: true,
  },
  {
    id: 4,
    title: "Funding Opportunities Database",
    description:
      "Comprehensive database of funding opportunities available for young entrepreneurs in Tanzania and East Africa.",
    type: "Excel",
    category: "Funding",
    size: "850 KB",
    downloads: 1800,
    icon: <FileText className="h-6 w-6" />,
    featured: false,
  },
  {
    id: 5,
    title: "Export/Import Procedures Guide",
    description: "Step-by-step guide for young entrepreneurs looking to engage in international trade under AfCFTA.",
    type: "PDF",
    category: "Trade",
    size: "3.1 MB",
    downloads: 950,
    icon: <BookOpen className="h-6 w-6" />,
    featured: false,
  },
  {
    id: 6,
    title: "Financial Management Toolkit",
    description:
      "Essential financial management tools including cash flow templates, budgeting sheets, and financial planning guides.",
    type: "Excel",
    category: "Finance",
    size: "1.2 MB",
    downloads: 2800,
    icon: <FileText className="h-6 w-6" />,
    featured: false,
  },
]

const webinars = [
  {
    id: 1,
    title: "Building Resilient Businesses in Challenging Times",
    description:
      "Learn strategies for building businesses that can withstand economic uncertainties and market volatility.",
    duration: "45 minutes",
    date: "January 15, 2024",
    speaker: "Dr. Sarah Mwangi, Business Consultant",
    views: 1200,
    featured: true,
  },
  {
    id: 2,
    title: "Digital Transformation for Small Businesses",
    description: "Practical steps for digitizing your business operations and reaching customers online.",
    duration: "60 minutes",
    date: "December 20, 2023",
    speaker: "John Temba, Digital Marketing Expert",
    views: 2100,
    featured: true,
  },
  {
    id: 3,
    title: "Accessing International Markets through AfCFTA",
    description: "Understanding opportunities and requirements for expanding your business across African markets.",
    duration: "50 minutes",
    date: "November 28, 2023",
    speaker: "Grace Mollel, Trade Specialist",
    views: 850,
    featured: false,
  },
]

const tools = [
  {
    id: 1,
    title: "Business Model Canvas Generator",
    description: "Interactive tool to create and visualize your business model canvas online.",
    type: "Web Tool",
    category: "Business Planning",
    link: "#",
  },
  {
    id: 2,
    title: "Market Research Template",
    description: "Structured template for conducting market research and competitor analysis.",
    type: "Template",
    category: "Research",
    link: "#",
  },
  {
    id: 3,
    title: "Pitch Deck Template",
    description: "Professional pitch deck template for presenting your business to investors.",
    type: "PowerPoint",
    category: "Funding",
    link: "#",
  },
  {
    id: 4,
    title: "Social Media Content Calendar",
    description: "Pre-designed content calendar template for planning your social media strategy.",
    type: "Template",
    category: "Marketing",
    link: "#",
  },
]

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-tycc-blue to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Resources</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Access our comprehensive library of business resources, templates, guides, and tools designed to support
              your entrepreneurial journey.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Downloads */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tycc-blue mb-4">Featured Downloads</h2>
            <p className="text-xl text-gray-600">Essential resources every young entrepreneur should have</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources
              .filter((resource) => resource.featured)
              .map((resource) => (
                <Card key={resource.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-tycc-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                      {resource.icon}
                    </div>
                    <CardTitle className="text-xl text-tycc-blue">{resource.title}</CardTitle>
                    <Badge variant="secondary" className="bg-tycc-gold text-gray-900 w-fit mx-auto">
                      {resource.category}
                    </Badge>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <CardDescription className="text-gray-600 leading-relaxed">{resource.description}</CardDescription>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>
                        {resource.type} • {resource.size}
                      </span>
                      <span>{resource.downloads} downloads</span>
                    </div>
                    <Button className="w-full btn-primary">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tycc-blue mb-4">All Resources</h2>
            <p className="text-xl text-gray-600">Browse our complete collection of business resources</p>
          </div>

          <div className="space-y-4">
            {resources.map((resource) => (
              <Card key={resource.id} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-tycc-blue rounded-lg flex items-center justify-center text-white">
                        {resource.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-tycc-blue">{resource.title}</h3>
                        <p className="text-gray-600 text-sm">{resource.description}</p>
                        <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                          <Badge variant="outline" className="text-xs">
                            {resource.category}
                          </Badge>
                          <span>
                            {resource.type} • {resource.size}
                          </span>
                          <span>{resource.downloads} downloads</span>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="border-tycc-blue text-tycc-blue hover:bg-tycc-blue hover:text-white bg-transparent"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tycc-blue mb-4">Webinar Library</h2>
            <p className="text-xl text-gray-600">Watch recorded sessions from our expert-led webinars</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webinars.map((webinar) => (
              <Card key={webinar.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video bg-gradient-to-br from-tycc-blue to-blue-800 relative rounded-t-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Video className="h-16 w-16 text-white opacity-80" />
                  </div>
                  {webinar.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-tycc-gold text-gray-900">Featured</Badge>
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-lg text-tycc-blue">{webinar.title}</CardTitle>
                  <CardDescription className="text-gray-600">{webinar.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm text-gray-500 space-y-1">
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span>{webinar.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Date:</span>
                      <span>{webinar.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Views:</span>
                      <span>{webinar.views}</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>Speaker:</strong> {webinar.speaker}
                  </div>
                  <Button className="w-full btn-primary">
                    <Video className="h-4 w-4 mr-2" />
                    Watch Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Templates */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tycc-blue mb-4">Business Tools & Templates</h2>
            <p className="text-xl text-gray-600">
              Ready-to-use tools and templates to streamline your business operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {tools.map((tool) => (
              <Card key={tool.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-tycc-blue mb-2">{tool.title}</h3>
                      <p className="text-gray-600 mb-4">{tool.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <Badge variant="outline">{tool.category}</Badge>
                        <span>{tool.type}</span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="border-tycc-blue text-tycc-blue hover:bg-tycc-blue hover:text-white ml-4 bg-transparent"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Access
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-tycc-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Need More Support?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Can't find what you're looking for? Our team is here to help you access the resources you need to succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-secondary">Contact Support</Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-tycc-blue bg-transparent"
            >
              Request Resource
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
