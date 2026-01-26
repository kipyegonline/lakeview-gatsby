import React, { useEffect, useRef, useState } from "react"
import Form from "./form/Form"
import delton from "../../images/assets/img/pstdelton.jpg"
import rachael from "../../images/assets/img/newlcc/IMG-20200813-WA0000.jpg"
import harry2 from "../../images/assets/img/newlcc/IMG-20200813-WA0002.jpg"

// Custom hook for fade-in animation on scroll
const useFadeInOnScroll = (threshold = 0.1) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  return [ref, isVisible]
}

// Staff data
const staffMembers = [
  {
    id: 1,
    name: "Rev. Delton Orgeness",
    email: "delorg@yahoo.com",
    mobile: "0726907931",
    title: "Senior Pastor",
    pic: delton,
  },
  {
    id: 2,
    name: "Pastor Rachel Ngetich",
    email: "info@lakeviewagc.net",
    mobile: "0721406155",
    title: "Pastor - Children, Missions, Evangelism & Compassion",
    pic: rachael,
  },
  {
    id: 3,
    name: "Harry Yegon",
    email: "info@lakeviewagc.net",
    mobile: "0726216029",
    title: "Accountant",
    pic: harry2,
  },
]

// Main Contact Component
const Contacts = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Map */}
      <HeroSection />

      {/* Quick Contact Info */}
      <QuickContactBar />

      {/* Staff Section */}
      <StaffSection />

      {/* Contact Form Section */}
      {/** <FormSection /> */}
    </div>
  )
}

export default Contacts

// Hero Section with embedded map
const HeroSection = () => {
  return (
    <section className="relative">
      {/* Map Container */}
      <div className="relative h-[300px] md:h-[400px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7979.5359027757895!2d36.09036012914633!3d-0.2879008840659985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18299274ae85cb9f%3A0x371b0a1059a0ea54!2sLakeview+Africa+Gospel+Church!5e0!3m2!1sen!2ske!4v1512806886474"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lakeview Africa Gospel Church Location"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50 pointer-events-none" />
      </div>

      {/* Floating Header Card */}
      <div className="max-w-4xl mx-auto px-4 -mt-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-purple-100 rounded-full mb-4">
              <svg
                className="w-7 h-7 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Get In Touch
            </h1>
            <p className="text-gray-600 max-w-lg mx-auto">
              We'd love to hear from you. Visit us, call, or send us a message.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Quick Contact Bar
const QuickContactBar = () => {
  const [ref, isVisible] = useFadeInOnScroll()

  const contactItems = [
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      label: "Phone",
      value: "0797438190",
      href: "tel:0797438190",
    },
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      label: "Email",
      value: "info@lakeviewagc.net",
      href: "mailto:info@lakeviewagc.net",
    },
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      label: "Address",
      value: "Section 58, Nakuru",
      href: null,
    },
  ]

  return (
    <section
      ref={ref}
      className={`
        py-8 px-4 transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {contactItems.map((item, index) => (
            <ContactCard key={item.label} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Card Component
const ContactCard = ({ item, index }) => {
  const [ref, isVisible] = useFadeInOnScroll()

  const content = (
    <div
      ref={ref}
      className={`
        bg-white rounded-xl p-5 border border-gray-100 shadow-sm
        hover:shadow-md hover:border-purple-200 transition-all duration-300
        flex items-center gap-4 group
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center
                      group-hover:bg-purple-600 transition-colors duration-300"
      >
        <span className="text-purple-600 group-hover:text-white transition-colors duration-300">
          {item.icon}
        </span>
      </div>
      <div>
        <p className="text-sm text-gray-500">{item.label}</p>
        <p className="font-semibold text-gray-800">{item.value}</p>
      </div>
    </div>
  )

  if (item.href) {
    return (
      <a href={item.href} className="block">
        {content}
      </a>
    )
  }

  return content
}

// Staff Section
const StaffSection = () => {
  const [ref, isVisible] = useFadeInOnScroll()

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div
          ref={ref}
          className={`
            text-center mb-10 transition-all duration-700 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
            <svg
              className="w-6 h-6 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Church Office & Personnel
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Meet our dedicated team who are here to serve and support you.
          </p>
        </div>

        {/* Staff Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {staffMembers.map((staff, index) => (
            <StaffCard key={staff.id} staff={staff} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Staff Card Component
const StaffCard = ({ staff, index }) => {
  const [ref, isVisible] = useFadeInOnScroll(0.15)

  return (
    <article
      ref={ref}
      className={`
        group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm
        hover:shadow-xl hover:border-purple-200 transition-all duration-500 ease-out
        ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}
      `}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={staff.pic}
          alt={staff.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Name overlay on image */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-bold text-white drop-shadow-lg">
            {staff.name}
          </h3>
          <span className="inline-block mt-1 px-3 py-1 bg-purple-600/90 backdrop-blur-sm text-white text-xs font-medium rounded-full">
            {staff.title}
          </span>
        </div>
      </div>

      {/* Contact Info */}
      <div className="p-5 space-y-3">
        {/* Phone */}
        <a
          href={`tel:${staff.mobile}`}
          className="flex items-center gap-3 text-gray-600 hover:text-purple-600 transition-colors group/link"
        >
          <div
            className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center
                          group-hover/link:bg-purple-100 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <span className="text-sm font-medium">{staff.mobile}</span>
        </a>

        {/* Email */}
        <a
          href={`mailto:${staff.email}`}
          className="flex items-center gap-3 text-gray-600 hover:text-purple-600 transition-colors group/link"
        >
          <div
            className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center
                          group-hover/link:bg-purple-100 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <span className="text-sm font-medium truncate">{staff.email}</span>
        </a>
      </div>
    </article>
  )
}

// Form Section
const FormSection = () => {
  const [ref, isVisible] = useFadeInOnScroll()

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div
          ref={ref}
          className={`
            text-center mb-8 transition-all duration-700 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
            <svg
              className="w-6 h-6 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Send Us a Message
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Have a question or need prayer? Fill out the form below and we'll
            get back to you.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
          <Form />
        </div>
      </div>
    </section>
  )
}

// Church Info Footer Section
const ChurchInfoSection = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
          {/* Address */}
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Our Address
            </h3>
            <p className="text-purple-200 leading-relaxed">
              Lakeview Africa Gospel Church
              <br />
              Section 58
              <br />
              P.O. Box 1680-20100
              <br />
              Nakuru, Kenya
            </p>
          </div>

          {/* Social & Connect */}
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
              Connect With Us
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/Lakeview-AGC-Nakuru-355976284540480"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center
                           hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
