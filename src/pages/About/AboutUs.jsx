import { Helmet } from 'react-helmet';
// import smallScreen from "../../image/smallscreen.png";
import { NavLink } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ChevronRight } from "lucide-react";
// const WorldMap = lazy(() => import("../../components/ui/world-map"));


export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us - Apeiro Research</title>
        <meta name="description" content="Learn more about Apeiro Research and how we help businesses grow with innovative research solutions." />
        <link rel="canonical" href="https://www.apeiroresearch.com/about" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "url": "https://www.apeiroresearch.com/about",
              "name": "About Us - Apeiro Research",
              "description": "Learn more about Apeiro Research and how we help businesses grow with innovative research solutions."
            }
          `}
        </script>
      </Helmet>
      <AboutUs />
      <OurTeam />
    </>
  );
}
function AboutUs() {
  return (
    <div
      className=" pt-40 pb-20 dark:bg-black w-full"
      data-aos="fade-up"
      data-aos-duration="1300"
    >
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-semibold tracking-wider text-lg md:text-2xl m-2 mb-6 md:mb-8 uppercase dark:text-gray-300 inline-block text-neutral-400 border-b-3 pb-1 border-neutral-300">
          About Us
        </p>
        <h1 className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Apeiro <span className="text-neutral-400">Research</span>
        </h1>
        <p className="text-sm md:text-lg px-2 text-neutral-500 max-w-2xl mx-auto py-4">
          We provide global KPO and RPO services with a skilled team, driving
          success and growth worldwide
        </p>
      </div>
      {/* <Suspense
        fallback={
          <div className="w-[75%] aspect-[2/1] mx-auto dark:bg-black bg-gray-300 animate-pulse rounded-lg"></div>
        }
      >
        <WorldMap
          dots={[
            {
              start: {
                lat: 64.2008,
                lng: -149.4937,
              }, // Alaska (Fairbanks)
              end: {
                lat: 34.0522,
                lng: -118.2437,
              }, // Los Angeles
            },
            {
              start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
              end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            },
            {
              start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
            },
            {
              start: { lat: 51.5074, lng: -0.1278 }, // London
              end: { lat: 28.6139, lng: 77.209 }, // New Delhi
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
            },
          ]}
        />
      </Suspense> */}
    </div>  
  );  
}

const OurTeam = () => {
  const aboutCards = [
    {
      name: "Aoun Mirza",
      role: "Business Development Head",
      number: "+91 99308 20353",
      linkedin: "https://www.linkedin.com/in/aoun-mirza-6b5173190/",
      color: "blue",
    },
    {
      name: "Shaikh Kaif",
      role: "Head of Operations",
      number: "+91 91365 63434",
      linkedin: "https://www.linkedin.com/in/shaikh-kaif-9b565732b/",
      color: "red",
    },

  ];
  const cardthemes = {
    pink: "hover:border-pink-400",
    blue: "hover:border-blue-400",
    orange: "hover:border-orange-400",
    red: "hover:border-red-400",
    green: "hover:border-green-400",
    purple: "hover:border-purple-400",
  };
  return (
    <>
      <div className="px-4 py-8 lg:px-16">
        <div className="bg-gray-50 p-6 md:p-10 rounded-xl">
          <div className="flex items-center gap-2 md:gap-3">
            {/* <img src={smallScreen} width={30} alt="Apeiro research" /> */}
            <span className="text-xl md:text-2xl text-warning-500 font-semibold">
              |
            </span>
            <span className="text-2xl md:3xl font-semibold">Our Team</span>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 mt-10 items-start lg:items-center">
            <div
              className="flex flex-col w-full mt-8 lg:mt-0"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <h2 className="text-2xl md:text-3xl font-bold">
                Meet Our Team Of Experts
              </h2>
              <p className="text-gray-600 text-medium md:text-base mt-3">
                Our team at Apeiro Research is a diverse group of skilled
                professionals from around the world, united by a shared
                commitment to excellence. Each member brings unique expertise in
                KPO and RPO services, working together to deliver innovative
                solutions and drive success for our clients.
              </p>
              <div>
                <button className="mt-5 md:text-medium text-sm md:px-5 md:py-3 py-2 px-3 tracking-wide flex items-center gap-2 rounded-full text-white bg-black/90 hover:bg-black/100 font-bold">
                  <NavLink to="/contact">Know More</NavLink>
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Card Section */}
            <div className="flex flex-wrap w-full gap-6">
              {aboutCards.map((aboutCard, index) => (
                <div
                  key={index}
                  className={`flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 border ${
                    cardthemes[aboutCard.color]
                  } border-gray-100 w-full md:w-[calc(50%-1rem)]`}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {aboutCard.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{aboutCard.role}</p>
                  <div className="flex items-center flex-row-reverse justify-between">
                    <a
                      href={aboutCard.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-indigo-600 transition-colors flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 20h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.73s.79-1.73 1.75-1.73c.97 0 1.75.79 1.75 1.73s-.79 1.73-1.75 1.73zm13.5 11.27h-3v-5.5c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.96v5.61h-3v-10h2.88v1.36h.04c.4-.75 1.37-1.54 2.81-1.54 3 0 3.55 1.98 3.55 4.56v5.62z" />
                      </svg>
                    </a>
                    <div className="text-sm text-gray-600">
                      {aboutCard.number}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

