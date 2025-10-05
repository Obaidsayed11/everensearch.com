import { Helmet } from 'react-helmet';
import React, { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Stats from "../../components/ui/stats";
// import bg from "../../image/bgimage.png";
import { NavLink } from "react-router-dom";
import { CircleCheck, Lightbulb, ShieldAlert, Trophy, UsersRound } from "lucide-react";

const CompanyOverView = () => {
  return (
    <>
    <Helmet>
  <title>Company Overview - Evron Research</title>
  <meta name="description" content="Learn more about Evron Research, our mission, vision, and the innovative research solutions we provide to empower businesses." />
  <link rel="canonical" href="https://www.Evronresearch.com/company-overview" />
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "url": "https://www.Evronresearch.com/company-overview",
        "name": "Evron Research",
        "description": "Evron Research provides innovative data analytics and research solutions to empower businesses.",
      }
    `}
  </script>
</Helmet>
    <div className="overflow-hidden min-h-screen">
      <div
        className="relative mb-auto flex w-screen flex-col overflow-hidden pt-40 pb-20"
        data-aos="fade-down"
        data-aos-duration="1300"
      >
        {/* dotimage */}
        <div
          className="absolute top-0 right-0 bottom-0 left-0 bg-cover bg-bottom bg-no-repeat"
          // style={{ backgroundImage: `url(${bg})` }}
        ></div>
        {/* content */}

        {/* }
        <div className="relative z-10 mx-auto flex max-w-[689px] flex-col items-center gap-8 text-center px-5">
          <div className="max-w-[295px] sm:max-w-[492px] md:max-w-[689px] ">
            <h2 className="font-semibold text-3xl text-neutral-900 tracking-tight sm:mx-auto sm:text-4xl sm:tracking-tight md:max-w-[689px] md:text-5xl md:leading-tight">
              Company Overview
            </h2>

            <p
              className="mx-auto max-w-[405px] mt-7 text-neutral-600 
              sm:max-w-[560px] 
              md:max-w-[652px] md:text-lg md:leading-7"
            >
              Customized KPO & RPO Solutions for a Future-Ready Workforce
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap gap-3 md:flex-nowrap">
              <button className="inline-flex w-full items-center justify-center gap-1 bg-black text-white rounded-full border border-neutral-900 px-10 py-3 text-center text-base font-medium leading-6">
                <NavLink to="/about">About Us</NavLink>
              </button>
              <button className="relative inline-flex hover:bg-gray-200 w-full items-center justify-center gap-1 whitespace-nowrap rounded-full border-2 border-gray-200 bg-white px-5 py-3 text-base font-medium text-gray-600 leading-6 transition-all duration-100 ease-in-out">
                <svg fill="none" viewBox="0 0 20 20" width="20" height="20">
                  <path
                    stroke="currentColor"
                    d="M8.709 14.155a4.793 4.793 0 0 1 5.412-6.55m-5.412 6.55a4.793 4.793 0 0 0 6.31 2.54c.1-.044.21-.06.317-.042l2.213.37c.18.03.337-.127.307-.307l-.371-2.21a.566.566 0 0 1 .041-.316 4.793 4.793 0 0 0-3.405-6.586m-5.412 6.55a5.845 5.845 0 0 1-2.682-.461.689.689 0 0 0-.385-.05l-2.695.45a.324.324 0 0 1-.373-.373l.452-2.69a.689.689 0 0 0-.05-.386 5.835 5.835 0 0 1 9.482-6.435 5.808 5.808 0 0 1 1.663 3.395"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.25"
                  ></path>
                </svg>
                <NavLink to="/contact">Talk to founders</NavLink>
              </button>
            </div>
          </div>
        </div>

        */}


        <div className="relative z-10 mx-auto flex max-w-[689px] flex-col items-center gap-8 text-center px-5">
  <div className="max-w-[295px] sm:max-w-[492px] md:max-w-[689px]">
    <h2 className="font-semibold text-3xl tracking-tight sm:mx-auto sm:text-4xl sm:tracking-tight md:max-w-[689px] md:text-5xl md:leading-tight bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] bg-clip-text text-transparent">
      Company Overview
    </h2>

    <p
      className="mx-auto max-w-[405px] mt-7 text-neutral-600 
      sm:max-w-[560px] 
      md:max-w-[652px] md:text-lg md:leading-7"
    >
      Customized KPO & RPO Solutions for a Future-Ready Workforce
    </p>
  </div>
  <div className="flex flex-col items-center gap-4">
    <div className="flex flex-wrap gap-3 md:flex-nowrap">
      <button className="inline-flex w-full items-center justify-center gap-1 bg-[#260433] hover:bg-fuchsia-900 text-white rounded-full border border-neutral-900 px-10 py-3 text-center text-base font-medium leading-6">
        <NavLink to="/about">About Us</NavLink>
      </button>
      <button className="relative inline-flex hover:bg-gray-200 w-full items-center justify-center gap-1 whitespace-nowrap rounded-full border-2 border-gray-200 bg-white px-5 py-3 text-base font-medium text-[#260433]  leading-6 transition-all duration-100 ease-in-out">
        <svg fill="none" viewBox="0 0 20 20" width="20" height="20">
          <path
            stroke="currentColor"
            d="M8.709 14.155a4.793 4.793 0 0 1 5.412-6.55m-5.412 6.55a4.793 4.793 0 0 0 6.31 2.54c.1-.044.21-.06.317-.042l2.213.37c.18.03.337-.127.307-.307l-.371-2.21a.566.566 0 0 1 .041-.316 4.793 4.793 0 0 0-3.405-6.586m-5.412 6.55a5.845 5.845 0 0 1-2.682-.461.689.689 0 0 0-.385-.05l-2.695.45a.324.324 0 0 1-.373-.373l.452-2.69a.689.689 0 0 0-.05-.386 5.835 5.835 0 0 1 9.482-6.435 5.808 5.808 0 0 1 1.663 3.395"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.25"
          ></path>
        </svg>
        <NavLink to="/contact">Talk to founders</NavLink>
      </button>
    </div>
  </div>
</div>


      </div>
      <CompanyAccordion />
      <CoreValueCard />
      <Stats />
    </div>
    </>
  );
};

function CompanyAccordion() {
  
  const missionContent =
    "Our mission is to deliver exceptional RPO and KPO services that empower businesses to unlock their full potential. By combining industry expertise, innovative solutions, and cutting-edge technology, we aim to streamline recruitment and knowledge processes, driving efficiency, scalability, and long-term success for our clients. We are committed to fostering strong partnerships, delivering personalized support, and continuously improving our services to exceed client expectations. Our goal is to be the trusted partner of choice, helping organizations build top-tier teams, make informed decisions, and achieve sustainable growth in a dynamic business landscape.";

  const visionContent =
    "At Evron Research, we aim to reshape the future of talent acquisition and knowledge outsourcing. Our vision is to deliver transformative RPO and KPO solutions that foster innovation, empower organizations, and drive sustainable growth. By leveraging data, technology, and expertise, we seek to create limitless opportunities for our clients, positioning them for long-term success in a rapidly evolving global market. We aspire to set new standards in operational excellence, providing tailored strategies that align with business goals. Our commitment to continuous improvement and client-centric solutions ensures that we are a trusted partner in every step of their journey.";

  return (
    <div
      className="px-5 py-14 sm:px-16 bg-gray-50"
      data-aos="fade-up"
      data-aos-duration="1300"
    >
      <Accordion
          
        
      >
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          subtitle={
            <span className="mt-0.5 text-medium xs:block hidden text-gray-500">
             Empowering businesses with knowledge, talent, and global excellence.
            </span>
          }
          indicator={
            <span
              aria-hidden="true"
              className="text-[#260433]  font-semibold text-xl transition-transform rotate-0"
            >
              <Icon />
            </span>
          }
          title={<span className="text-xl font-semibold text-fuchsia-950">Our Mission</span>}
          className="text-black"
        >
          {missionContent}
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          subtitle={
            <span className="mt-0.5 text-medium xs:block hidden text-gray-500">
              Transforming businesses with cutting-edge insights and world-class talent solutions.
            </span>
          }
          indicator={
            <span
              aria-hidden="true"
              className="text-[#260433] font-semibold text-xl transition-transform rotate-0"
            >
              <Icon />
            </span>
          }
          title={
            <span className="mt-2 block text-xl font-semibold text-fuchsia-950">Our Vision</span>
          }
          className="text-black"
        >
          {visionContent}
        </AccordionItem>
      </Accordion>
    </div>
  );
}

const Icon = () => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
    >
      <path
        d="M15.5 19l-7-7 7-7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      ></path>
    </svg>
  );
};
export default CompanyOverView;

const CoreValueCard = () => {
  return (
    <div className="min-h-screen relative z-[1000] bg-[#260433] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold border-fuchsia-700 inline-block border-b-4 p-4 text-white mb-4 tracking-tight">
            Our Core Values
          </h2>
          {/* <div className="w-24 h-1  mx-auto rounded-full"></div> */}
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          data-aos="zoom-in-up"
          data-aos-duration="1300"
        >
          {/* Innovation */}
          <div className="group bg-gray-300/40 border border-zinc-900 hover:bg-zinc-500/60 hover:border-zinc-800  rounded-2xl p-8">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-zinc-950 border border-zinc-900 rounded-xl">
                <Lightbulb className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white ml-4">
                Expertise & Innovation
              </h3>
            </div>
            <p className="text-white leading-relaxed">
              Delivering specialized and highly skilled knowledge services to
              meet complex business needs.
            </p>
          </div>

          {/* Empowerment */}
          <div className="group bg-gray-300/40 border border-zinc-900 hover:bg-zinc-500/60 hover:border-zinc-800  rounded-2xl p-8">
            <div className="flex items-center mb-4">
            <div className="p-3 bg-zinc-950 border border-zinc-900 rounded-xl">
                <UsersRound className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white ml-4">
                Talent Excellence:
              </h3>
            </div>
            <p className="text-white leading-relaxed">
              Sourcing, attracting, and placing top-tier talent that aligns with
              the client’s organizational culture and goals.
            </p>
          </div>

          {/* Integrity */}
          <div className="group bg-gray-300/40 border border-zinc-900 hover:bg-zinc-500/60 hover:border-zinc-800  rounded-2xl p-8">
            <div className="flex items-center mb-4">
            <div className="p-3 bg-zinc-950 border border-zinc-900 rounded-xl">
                <ShieldAlert className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white ml-4">
                Integrity
              </h3>
            </div>
            <p className="text-white leading-relaxed">
              We uphold the highest standards of integrity in all our
              interactions, ensuring transparency, honesty, and ethical conduct
              in every aspect of our business.
            </p>
          </div>

          {/* Collaboration */}
          <div className="group bg-gray-300/40 border border-zinc-900 hover:bg-zinc-500/60 hover:border-zinc-800  rounded-2xl p-8">
            <div className="flex items-center mb-4">
            <div className="p-3 bg-zinc-950 border border-zinc-900 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 text-rose-400"
                >
                  <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                  <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                  <path d="m21 3 1 11h-2" />
                  <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                  <path d="M3 4h8" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white ml-4">
                Collaboration
              </h3>
            </div>
            <p className="text-white leading-relaxed">
              We believe in the power of collaboration, internally and
              externally, fostering teamwork and partnerships to achieve shared
              goals and mutual success.
            </p>
          </div>

          {/* Excellence - Full Width */}
          <div className="group bg-gray-300/40 border border-zinc-900 hover:bg-zinc-500/60 hover:border-zinc-800  rounded-2xl p-8">
            <div className="flex items-center mb-4">
            <div className="p-3 bg-zinc-950 border border-zinc-900 rounded-xl">
                <Trophy className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white ml-4">
                Excellence
              </h3>
            </div>
            <p className="text-white leading-relaxed">
              Our commitment to excellence is unwavering. We strive for the
              highest quality in our work, processes, and client interactions,
              setting benchmarks for industry standards.
            </p>
          </div>

          {/* Quality and Precision */}
          <div className="group  bg-gray-300/40 border border-zinc-900 hover:bg-zinc-500/60 hover:border-zinc-800  rounded-2xl p-8">
            <div className="flex items-center mb-4">
            <div className="p-3 bg-zinc-950 border border-zinc-900 rounded-xl">
                <CircleCheck className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white ml-4">
                Quality & Precision
              </h3>
            </div>
            <p className="text-white leading-relaxed">
              Ensuring accuracy and quality in all knowledge-driven processes,
              through research, analysis, and strategic solutions.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-white text-lg">
            You have better things to do than worry about your business.{" "}
            <NavLink
              to="/contact"
              className="text-fuchsia-700 hover:text-fuchsia-300 font-medium transition-colors"
            >
              Let's Discuss your Project
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

