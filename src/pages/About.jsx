
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">About Evron Research</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-6">
                At Evron Research, we're dedicated to providing innovative research solutions that help businesses make data-driven decisions. Our team of experts combines cutting-edge methodologies with deep industry knowledge to deliver actionable insights.
              </p>
              <p className="text-gray-700">
                Founded in 2015, we've grown to become a trusted partner for companies across various industries, from startups to Fortune 500 enterprises.
              </p>
            </div>
            <div>
              <img 
                src="https://picsum.photos/600/400?random=1" 
                alt="Team working in office" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
          
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Dr. Sarah Johnson", role: "Founder & CEO", image: "https://picsum.photos/200/200?random=2" },
                { name: "Michael Chen", role: "Director of Research", image: "https://picsum.photos/200/200?random=3" },
                { name: "Emily Rodriguez", role: "Data Scientist", image: "https://picsum.photos/200/200?random=4" },
                { name: "David Wilson", role: "Consulting Lead", image: "https://picsum.photos/200/200?random=5" }
              ].map((member, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-32 h-32 rounded-full mx-auto mb-4"
                  />
                  <h3 className="font-bold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
  