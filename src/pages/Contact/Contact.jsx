import { Helmet } from "react-helmet";
import React, { useState } from "react";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowRight,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const emailData = {
        apikey:
          "BF0425CAE3DDC0AEC81C07F503513D745223645D9EC1D051B91457401C2F3FEEC3569D8CCFE52B6C0990E9820620E9DD",
        from: "aoun@Evronresearch.com",
        to: "aoun@Evronresearch.com",
        subject: "New Form Submitted",
        bodyHtml: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <div style="margin-top: 10px;">
            <h3>Message:</h3>
            <p style="white-space: pre-line;">${formData.message}</p>
          </div>
        </div>
      `,
      };

      const response = await fetch(
        "https://api.elasticemail.com/v2/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(emailData),
        }
      );

      const result = await response.json();
      if (result) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error(err);
      setError(
        "An error occurred while sending your message. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <Helmet>
        <title>Contact Us - Evron Research</title>
        <meta
          name="description"
          content="Get in touch with Evron Research for your business research and data analytics needs."
        />
        <link rel="canonical" href="https://www.Evronresearch.com/contact" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "url": "https://www.Evronresearch.com/contact",
              "name": "Contact Us - Evron Research",
              "description": "Get in touch with Evron Research for your business research and data analytics needs."
            }
          `}
        </script>
      </Helmet>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section
          className="relative overflow-hidden pt-20 pb-10 md:pt-40 md:pb-20"
          data-aos="fade-down"
        >
          <div className="container mx-auto px-4 pt-16 md:pt-0 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gray-200 backdrop-blur-sm border border-zinc-200 mb-6">
                <span className="w-2 h-2 rounded-full bg-fuchsia-900 mr-2"></span>
                <span className="text-sm font-medium text-fuchsia-900">
                  Let's work together
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold  mb-6 leading-tight">
                <span className="text-[#260433]">Contact Us</span>
              </h1>
              <p className="text-lg text-black max-w-2xl mx-auto mb-10">
                Have a question or want to work together? We'd love to hear from
                you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact-form" className="pb-20 pt-10 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                {/* Contact Info */}
                <div className="lg:col-span-2 space-y-8" data-aos="fade-right">
                  <div>
                    <h2 className="text-3xl text-[#260433] border-b-3 inline-block border-fuchsia-900 font-bold mb-2">
                      Contact Information
                    </h2>
                    <p className="text-gray-700 mb-8">
                      Reach out to us through any of these channels. Our team is
                      ready to assist you with your business needs.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start p-5 rounded-xl bg-white border shadow-sm border-zinc-200 hover:border-gray-500/50 transition-colors duration-300">
                      <div className="bg-zinc-700 p-3 rounded-lg mr-5">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-[#260433] mb-1">
                          Our Location
                        </h3>
                        <p className="text-gray-500">
                          Navi Mumbai - Kopar Khairane
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start p-5 rounded-xl bg-white border shadow-sm border-zinc-200 hover:border-gray-500/50 transition-colors duration-300">
                      <div className="bg-zinc-700 p-3 rounded-lg mr-5">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-[#260433] mb-1">
                          Phone
                        </h3>
                        <p className="text-gray-500">
                          +91 12345-67890
                          <br />
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start p-5 rounded-xl bg-white border shadow-sm border-zinc-200 hover:border-gray-500/50 transition-colors duration-300">
                      <div className="bg-zinc-700 p-3 rounded-lg mr-5">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-[#260433] mb-1">
                          Email
                        </h3>
                        <p className="text-gray-500">Aslan@Evronresearch.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div
                  className="lg:col-span-3 bg-white backdrop-blur-sm rounded-2xl px-8 pt-6 pb-8 border border-zinc-200 shadow-sm"
                  data-aos="fade-left"
                >
                  <h2 className="text-2xl font-bold text-[#260433] mb-6">
                    Send us a message
                  </h2>

                  {isSubmitted ? (
                    <div className="bg-gray-100 border h-[88%] border-zinc-200 shadow-sm rounded-xl md:py-20 px-8 py-10 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white mb-6">
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-semibold text-black mb-3">
                        Thank you!
                      </h3>
                      <p className="text-gray-500 mb-6">
                        Your message has been sent successfully. We'll get back
                        to you soon.
                      </p>

            

                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setPreviewUrl("");
                        }}
                        className="px-6 py-3 bg-black text-white rounded-lg transition-all duration-300 font-medium flex items-center justify-center mx-auto"
                      >
                        New message
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {error && (
                        <div className="bg-red-900/20 text-red-400 p-4 rounded-lg border border-red-800">
                          {error}
                        </div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-base font-medium text-fuchsia-950 mb-2"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-zinc-200 text-black placeholder-gray-400 outline-none focus:ring-gray-500 focus:border-gray-500 transition-colors"
                            placeholder="Your name"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="block text-base font-medium text-fuchsia-950 mb-2"
                          >
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-zinc-200 text-black placeholder-gray-400 outline-none focus:ring-gray-500 focus:border-gray-500 transition-colors"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-base font-medium text-fuchsia-950 mb-2"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-zinc-200 text-black placeholder-gray-400 outline-none focus:ring-gray-500 focus:border-gray-500 transition-colors resize-none"
                          placeholder="How can we help you?"
                        ></textarea>
                      </div>
                      
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full flex cursor-pointer items-center justify-center px-6 py-4 rounded-xl text-white font-medium hover:bg-fuchsia-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition duration-200 ${
                          isSubmitting
                            ? "bg-fuchsia-800 cursor-not-allowed"
                            : "bg-[#260433]"
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
          
        </section>
      </div>
    </>
  );
};

export default Contact;

