import { Helmet } from 'react-helmet';
import { React } from "react"
import { KPOSERVICES } from "../../lib/utils";
import { KpoServicesHeading } from "./ServicesHeading";
import { ServiceCard } from "./Card";

const KpoServices = () => {
  
  return (
    <>
    <Helmet>
        <title>KPO Services - Apeiro Research</title>
        <meta name="description" content="Explore Apeiro Research's KPO services including data analytics, research, and more." />
        <link rel="canonical" href="https://www.apeiroresearch.com/kpo-services" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "url": "https://www.apeiroresearch.com/kpo-services",
              "name": "KPO Services - Apeiro Research",
              "description": "Explore Apeiro Research's KPO services including data analytics, research, and more."
            }
          `}
        </script>
      </Helmet>
    <div className="bg-gray-50 bg-opacity-75">
      <KpoServicesHeading />
      <div className="container relative mx-auto px-4 pb-1 overflow-x-hidden">
        <div className="mt-8 mb-24 grid grid-cols-1 md:grid-cols-2 gap-6 px-6"   data-aos="fade-right"
      
      data-aos-duration="1300">
          {KPOSERVICES.map((service,index) => (
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

export default KpoServices;
