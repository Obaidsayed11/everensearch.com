import { Helmet } from 'react-helmet';
import React from "react";
import { NavLink } from "react-router-dom";
import { CircleCheck, Lightbulb, ShieldAlert, Trophy, UsersRound, Sparkles, Target, TrendingUp, Users, Award, Globe } from "lucide-react";
import { useState } from 'react';

const CompanyOverView = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const values = [
    {
      icon: Lightbulb,
      title: "Expertise & Innovation",
      description: "Delivering specialized and highly skilled knowledge services to meet complex business needs.",
      gradient: "from-purple-500 to-indigo-600",
      glowColor: "rgba(168, 85, 247, 0.3)"
    },
    {
      icon: UsersRound,
      title: "Talent Excellence",
      description: "Sourcing, attracting, and placing top-tier talent that aligns with the client's organizational culture and goals.",
      gradient: "from-emerald-500 to-teal-600",
      glowColor: "rgba(16, 185, 129, 0.3)"
    },
    {
      icon: ShieldAlert,
      title: "Integrity",
      description: "We uphold the highest standards of integrity in all our interactions, ensuring transparency, honesty, and ethical conduct in every aspect of our business.",
      gradient: "from-cyan-500 to-blue-600",
      glowColor: "rgba(6, 182, 212, 0.3)"
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "Our commitment to excellence is unwavering. We strive for the highest quality in our work, processes, and client interactions, setting benchmarks for industry standards.",
      gradient: "from-amber-500 to-orange-600",
      glowColor: "rgba(251, 191, 36, 0.3)"
    },
    {
      icon: CircleCheck,
      title: "Quality & Precision",
      description: "Ensuring accuracy and quality in all knowledge-driven processes, through research, analysis, and strategic solutions.",
      gradient: "from-rose-500 to-pink-600",
      glowColor: "rgba(244, 63, 94, 0.3)"
    },
    {
      icon: Sparkles,
      title: "Collaboration",
      description: "We believe in the power of collaboration, internally and externally, fostering teamwork and partnerships to achieve shared goals and mutual success.",
      gradient: "from-violet-500 to-purple-600",
      glowColor: "rgba(139, 92, 246, 0.3)"
    }
  ];

  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Clients Served",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      icon: Award,
      value: "98%",
      label: "Client Satisfaction",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      icon: TrendingUp,
      value: "10K+",
      label: "Successful Placements",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: Globe,
      value: "25+",
      label: "Countries Worldwide",
      gradient: "from-cyan-500 to-blue-600"
    }
  ];

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
              "description": "Evron Research provides innovative data analytics and research solutions to empower businesses."
            }
          `}
        </script>
      </Helmet>
      
      {/* <div className="min-h-screen bg-gradient-to-br from-purple-950 via-slate-900 to-amber-950"> */}
      <div className="min-h-screen bg-gradient-to-br from-purple-950 via-slate-900 to-amber-950">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-5 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-600/10 to-amber-600/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-white/90 font-medium">Transforming Business Through Innovation</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-amber-200 bg-clip-text text-transparent leading-tight">
              Company Overview
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
              Customized KPO & RPO Solutions for a Future-Ready Workforce
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <NavLink to="/about">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-105">
                  <span className="relative z-10">About Us</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              </NavLink>
              
              <NavLink to="/contact">
                <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-2xl font-semibold transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-105 flex items-center gap-2">
                  <svg fill="none" viewBox="0 0 20 20" width="20" height="20">
                    <path
                      stroke="currentColor"
                      d="M8.709 14.155a4.793 4.793 0 0 1 5.412-6.55m-5.412 6.55a4.793 4.793 0 0 0 6.31 2.54c.1-.044.21-.06.317-.042l2.213.37c.18.03.337-.127.307-.307l-.371-2.21a.566.566 0 0 1 .041-.316 4.793 4.793 0 0 0-3.405-6.586m-5.412 6.55a5.845 5.845 0 0 1-2.682-.461.689.689 0 0 0-.385-.05l-2.695.45a.324.324 0 0 1-.373-.373l.452-2.69a.689.689 0 0 0-.05-.386 5.835 5.835 0 0 1 9.482-6.435 5.808 5.808 0 0 1 1.663 3.395"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.25"
                    ></path>
                  </svg>
                  Talk to Founders
                </button>
              </NavLink>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="relative py-24 px-5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Purpose & Direction
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-amber-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission Card */}
              <div
                onMouseEnter={() => setHoveredCard('mission')}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative"
              >
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 transition-all duration-500 hover:bg-white/10 hover:border-purple-500/50 hover:shadow-[0_0_50px_rgba(168,85,247,0.3)] h-full">
                  <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="mt-8">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-3xl font-bold text-white">Our Mission</h3>
                    </div>
                    <p className="text-amber-400 text-sm font-medium mb-6">
                      Empowering businesses with knowledge, talent, and global excellence.
                    </p>
                    <p className="text-white/80 leading-relaxed text-base">
                      Our mission is to deliver exceptional RPO and KPO services that empower businesses to unlock their full potential. By combining industry expertise, innovative solutions, and cutting-edge technology, we aim to streamline recruitment and knowledge processes, driving efficiency, scalability, and long-term success for our clients. We are committed to fostering strong partnerships, delivering personalized support, and continuously improving our services to exceed client expectations.
                    </p>
                  </div>
                  
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded-b-3xl transition-all duration-500 ${hoveredCard === 'mission' ? 'opacity-100' : 'opacity-0'}`}></div>
                </div>
              </div>

              {/* Vision Card */}
              <div
                onMouseEnter={() => setHoveredCard('vision')}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative"
              >
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 transition-all duration-500 hover:bg-white/10 hover:border-amber-500/50 hover:shadow-[0_0_50px_rgba(251,191,36,0.3)] h-full">
                  <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="mt-8">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-3xl font-bold text-white">Our Vision</h3>
                    </div>
                    <p className="text-purple-400 text-sm font-medium mb-6">
                      Transforming businesses with cutting-edge insights and world-class talent solutions.
                    </p>
                    <p className="text-white/80 leading-relaxed text-base">
                      At Evron Research, we aim to reshape the future of talent acquisition and knowledge outsourcing. Our vision is to deliver transformative RPO and KPO solutions that foster innovation, empower organizations, and drive sustainable growth. By leveraging data, technology, and expertise, we seek to create limitless opportunities for our clients, positioning them for long-term success in a rapidly evolving global market.
                    </p>
                  </div>
                  
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-b-3xl transition-all duration-500 ${hoveredCard === 'vision' ? 'opacity-100' : 'opacity-0'}`}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="relative py-24 px-5 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="group relative"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 h-full transition-all duration-500 hover:bg-white/10 hover:border-white/30 hover:transform hover:scale-105 hover:-translate-y-2">
                      {/* Glow effect on hover */}
                      <div 
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                        style={{ boxShadow: `0 0 50px ${value.glowColor}` }}
                      ></div>
                      
                      <div className="relative z-10">
                        <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${value.gradient} mb-6 shadow-lg group-hover:shadow-2xl transition-shadow`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-4">
                          {value.title}
                        </h3>
                        
                        <p className="text-white/70 leading-relaxed">
                          {value.description}
                        </p>
                      </div>

                      {/* Bottom accent line */}
                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.gradient} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Section */}
            <div className="mt-20 text-center">
              <div className="inline-block bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">
                <p className="text-xl text-white/90 mb-6">
                  Ready to transform your business?
                </p>
                <NavLink to="/contact">
                  <button className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 via-purple-700 to-amber-600 text-white rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] hover:scale-105">
                    <span className="relative z-10 flex items-center gap-2">
                      Let's Discuss Your Project
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-purple-800 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-20 px-5 bg-gradient-to-b from-transparent to-black/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:bg-white/10 hover:border-white/30 hover:transform hover:scale-105"
                  >
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.gradient} mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="text-4xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    
                    <div className="text-white/70 font-medium">
                      {stat.label}
                    </div>

                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CompanyOverView;
