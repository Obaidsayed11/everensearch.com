import { Helmet } from 'react-helmet';
import { React } from "react"
import { RPOSERVICES } from "../../lib/utils";
import { ServiceCard } from "./Card";
import { RpoServicesHeading } from "./ServicesHeading";

const RpoServices = () => {
  return (
    <>
    <Helmet>
        <title>RPO Services - Evron Research</title>
        <meta name="description" content="Explore Evron Research's RPO services to streamline your recruitment processes." />
        <link rel="canonical" href="https://www.Evronresearch.com/rpo-services" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "url": "https://www.Evronresearch.com/rpo-services",
              "name": "RPO Services - Evron Research",
              "description": "Explore Evron Research's RPO services to streamline your recruitment processes."
            }
          `}
        </script>
      </Helmet>
    <div className="bg-gray-50 bg-opacity-75">
      <RpoServicesHeading />
      <div className="container relative mx-auto px-4 pb-1 overflow-x-hidden"   data-aos="fade-down"
      
      data-aos-duration="1300">
        <div className="mt-8 mb-24 grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
          {RPOSERVICES.map((service,index) => (
            <ServiceCard
              key={service.key}
              icon={service.icon}
              title={service.title}
              description={service.description}
              detailPath={service.detailPath}
              color={service.color}
              className={`transform transition-transform duration-300 hover:-translate-y-1 ${
                index % 3 === 0
                  ? "lg:translate-y-4"
                  : index % 3 === 1
                  ? "lg:translate-y-0"
                  : "lg:-translate-y-4"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default RpoServices;
