export function PartnersSection() {
  const partners = [
    { name: "African Development Bank", logo: "/placeholder.svg?height=80&width=200" },
    { name: "UNDP Tanzania", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Tanzania Chamber of Commerce", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Mastercard Foundation", logo: "/placeholder.svg?height=80&width=200" },
    { name: "World Bank Group", logo: "/placeholder.svg?height=80&width=200" },
    { name: "USAID Tanzania", logo: "/placeholder.svg?height=80&width=200" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-tycc-green mb-4">Our Partners</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Working together with leading organizations to create opportunities for Tanzania's youth.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="max-h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
