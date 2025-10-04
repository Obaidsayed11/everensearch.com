
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-12 text-center">Our Services</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Market Research",
                description: "Comprehensive analysis of market trends, consumer behavior, and competitive landscapes to identify growth opportunities.",
                icon: "📊"
              },
              {
                title: "Data Analytics",
                description: "Advanced statistical analysis and machine learning techniques to extract meaningful insights from complex datasets.",
                icon: "🔍"
              },
              {
                title: "Consumer Insights",
                description: "Deep understanding of customer needs, preferences, and pain points through qualitative and quantitative research.",
                icon: "👥"
              },
              {
                title: "Competitive Intelligence",
                description: "Strategic analysis of competitors' strengths, weaknesses, and market positioning.",
                icon: "🏆"
              },
              {
                title: "Product Development",
                description: "Research-driven approach to product innovation and feature prioritization.",
                icon: "🛠️"
              },
              {
                title: "Strategic Consulting",
                description: "Expert guidance to align your business strategy with market realities and opportunities.",
                icon: "💡"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="text-xl font-bold mb-2">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-primary text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Custom Solutions</h2>
            <p className="mb-6">
              Every business is unique. We offer tailored research solutions designed specifically for your needs and objectives.
            </p>
            <button className="bg-white text-primary font-bold py-2 px-6 rounded hover:bg-gray-100 transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
  