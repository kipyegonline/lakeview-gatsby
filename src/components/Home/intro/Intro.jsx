import React, { useState, useEffect } from "react"
import images2026 from "../../../data/images2026"
import { image } from "d3"

const Intro = ({ churcharea = [] }) => {
  const [isVisible, setIsVisible] = useState(false)
  const year = new Date().getFullYear()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-slate-50 to-white">
      {/* Theme & Scripture Hero Section */}
      <div
        className={`max-w-5xl mx-auto mb-12 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-8 md:p-12 text-center shadow-2xl">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-300/10 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <p className="text-amber-300 text-sm md:text-base font-medium tracking-widest uppercase mb-4 animate-fade-in">
              Theme of the Year {year}
            </p>

            <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-2 tracking-tight">
              Committed to the
            </h1>
            <h2 className="text-amber-400 text-3xl md:text-5xl lg:text-6xl font-extrabold mb-2 tracking-tight">
              Whole Counsel
            </h2>
            <h3 className="text-white text-3xl md:text-5xl lg:text-6xl font-light italic mb-8">
              of God
            </h3>

            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <svg
                className="w-5 h-5 text-amber-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="text-amber-300 font-semibold tracking-wider text-lg">
                ACTS 20:27
              </span>
            </div>
          </div>

          {/* Decorative light rays */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-amber-400/60 to-transparent blur-sm" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -rotate-12 w-1 h-24 bg-gradient-to-b from-amber-400/40 to-transparent blur-sm" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 rotate-12 w-1 h-24 bg-gradient-to-b from-amber-400/40 to-transparent blur-sm" />
        </div>
      </div>

      {/* Service Times Card */}
      <div
        className={`max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 px-6 py-4">
            <div className="flex items-center justify-center gap-3">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-white text-xl font-bold tracking-wide">
                Sunday Services
              </h3>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-3 gap-4">
              <ServiceTimeCard
                icon="☀️"
                title="First Service"
                time="8:30 - 9:45 AM"
                delay="0"
              />
              <ServiceTimeCard
                icon="🌟"
                title="Second Service"
                time="10:00 - 11:30 AM"
                delay="100"
              />
              <ServiceTimeCard
                icon="👥"
                title="Youth & Sunday School"
                time="9:30 - 11:30 AM"
                delay="200"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Church Areas Section */}
      {churcharea.length > 0 && (
        <div
          className={`max-w-5xl mx-auto mt-12 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <ChurchAreaCard
              title="Celebrating & Sharing God's Love"
              description="Welcome to Lakeview Africa Gospel Church. We are delighted to have you — a house of prayer for all people. We are bound by our vision of sharing the light of the gospel in Nakuru and beyond."
              icon="❤️"
              images={images2026.slice(0, 7)}
            />
            <ChurchAreaCard
              title="Fellowship"
              description="At Lakeview AGC, we proclaim the Gospel of Jesus Christ through preaching the word of God, prayers, fellowship and communion."
              icon="🤝"
              images={images2026.slice(7, 11)}
            />
            <ChurchAreaCard
              title="Companionship"
              description="We believe in companionship as a family bound by the body of Jesus Christ, endeavoring to witness and undertake projects that free people from bondage."
              icon="👨‍👩‍👧‍👦"
              images={images2026.slice(11, 14)}
            />
            <ChurchAreaCard
              title="Missions & Partnerships"
              description="We thank God for His blessings and for allowing us to reach the people of Turkana and Kakuma refugee camps. We partner with AGC mission station."
              icon="🌍"
              images={images2026.slice(14, 17)}
            />
          </div>
        </div>
      )}
    </section>
  )
}

const ServiceTimeCard = ({ icon, title, time, delay }) => {
  const [hover, setHover] = useState(false)

  return (
    <div
      className={`group relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 border border-gray-100 cursor-pointer transition-all duration-300 hover:border-purple-200 hover:shadow-md hover:-translate-y-1`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl opacity-0 transition-opacity duration-300 ${hover ? "opacity-100" : ""}`}
      />
      <div className="relative z-10 text-center">
        <span className="text-2xl mb-2 block">{icon}</span>
        <h4 className="font-semibold text-gray-800 text-sm mb-1">{title}</h4>
        <p className="text-purple-600 font-bold text-lg">{time}</p>
      </div>
    </div>
  )
}

const ChurchAreaCard = ({ title, description, icon, images }) => {
  // Get current day of week (0 = Sunday, 1 = Monday, ... 6 = Saturday)
  const dayOfWeek = new Date().getDay()

  // Select image based on day, with fallback logic
  const getImageForDay = () => {
    if (!images) return null
    // If images is a string (single image), use it directly
    if (typeof images === "string") return images
    // If images is an array, get image for current day (with wraparound)
    if (Array.isArray(images) && images.length > 0) {
      return images[dayOfWeek % images.length]
    }
    return null
  }

  const currentImage = getImageForDay()

  return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex">
        {currentImage && (
          <div className="w-24 md:w-32 flex-shrink-0 overflow-hidden">
            <img
              src={currentImage.pic}
              alt={currentImage.caption || title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        )}
        <div className="flex-1 p-4 md:p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">{icon}</span>
            <h4 className="font-bold text-gray-900 text-sm md:text-base">
              {title}
            </h4>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Intro
