
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Innovative Research Solutions</h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                We provide cutting-edge research and analytics to help your business grow.
              </p>
              <button className="bg-accent hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Market Research",
                  description: "Comprehensive market analysis to identify opportunities and trends.",
                  icon: "📊"
                },
                {
                  title: "Data Analytics",
                  description: "Advanced analytics to extract meaningful insights from your data.",
                  icon: "🔍"
                },
                {
                  title: "Strategic Consulting",
                  description: "Expert guidance to help you make informed business decisions.",
                  icon: "💡"
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote: "Evron Research provided invaluable insights that transformed our business strategy.",
                  author: "Jane Smith, CEO of TechCorp"
                },
                {
                  quote: "Their data analysis was thorough and actionable. Highly recommended!",
                  author: "John Doe, Marketing Director"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold">{testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
  