import { Helmet } from "react-helmet";
import AboutUsSection from "./AboutUsSection";
import GlobeSection from "./GlobeSection";
import OurTeamSection from "./OurTeamSection";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us - Evron Research</title>
        <meta
          name="description"
          content="Learn more about Evron Research and how we help businesses grow with innovative research solutions."
        />
        <link rel="canonical" href="https://www.Evronresearch.com/about" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "url": "https://www.Evronresearch.com/about",
              "name": "About Us - Evron Research",
              "description": "Learn more about Evron Research and how we help businesses grow with innovative research solutions."
            }
          `}
        </script>
      </Helmet>

      <AboutUsSection />
      {/* <GlobeSection /> */}
      <OurTeamSection />
    </>
  );
}
