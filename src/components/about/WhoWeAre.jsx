import React, { useEffect, useRef, useState } from "react"
import church from "../../images/assets/img/2024/IMG-20231230-WA0006.jpg"
import frontchurch from "../../images/assets/img/2024/IMG-20231230-WA0007.jpg"
import theme2026 from "../../images/assets/img/2026/theme_2026.jpeg"
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

// Animated section wrapper
const AnimatedSection = ({ children, delay = 0, className = "" }) => {
  const [ref, isVisible] = useFadeInOnScroll()

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        ${className}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export const WhoWeAreTab = () => {
  const today = new Date().getDay() % 2 === 0

  return (
    <article className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="relative h-64 md:h-80 lg:h-96 bg-purple-900">
          <img
            src={theme2026}
            alt="Lakeview Africa Gospel Church"
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-800/50 to-transparent" />

          {/* Hero Text */}
          <div className="absolute inset-0 flex items-end justify-center pb-8 md:pb-12">
            <div className="text-center px-4 animate-fade-in-up">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                Lakeview Africa Gospel Church
              </h1>
              <p className="text-purple-200 text-sm md:text-base font-medium">
                Section 58, Nakuru
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-10 md:py-16 space-y-12 md:space-y-16">
        {/* Who We Are */}
        <AnimatedSection>
          <section className="text-center">
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Lakeview Africa Gospel Church is a Christian-based church situated
              in Nakuru, a house of prayer for all people, with a mission of
              spreading the gospel of Jesus Christ to all people across Nakuru
              County and beyond. We are part of a large and diverse Africa
              Gospel Church congregation in Kenya.
            </p>
          </section>
        </AnimatedSection>

        {/* Mission Section */}
        <AnimatedSection delay={100}>
          <section className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 md:p-10 text-white shadow-xl">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Our Mission
              </h2>
              <p className="text-purple-100 leading-relaxed max-w-xl mx-auto mb-6">
                To fulfill the Great Commandment of the Lord Jesus Christ
                according to the Great Plan.
              </p>

              {/* Scripture References */}
              <div className="flex flex-wrap justify-center gap-3">
                {["Mark 12:30-31", "Matthew 28:19-20", "Acts 1:8"].map(
                  (verse, index) => (
                    <span
                      key={verse}
                      className="px-4 py-2 bg-white/15 rounded-full text-sm font-medium backdrop-blur-sm
                               hover:bg-white/25 transition-colors duration-300 cursor-default"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {verse}
                    </span>
                  ),
                )}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Purpose Section */}
        <AnimatedSection delay={200}>
          <Purpose />
        </AnimatedSection>
      </div>

      {/* Custom Animation Styles */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </article>
  )
}

// Purpose Component
export const Purpose = () => {
  const purposes = [
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
            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
          />
        </svg>
      ),
      text: "To proclaim the Gospel of Jesus Christ to all who are saved and who are not saved.",
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
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      text: "To nurture the spiritual, physical and mental life of its members through preaching the word of God, prayers, fellowship and communion.",
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
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      text: "To enable its members to identify, develop and use their spiritual gifts to serve both in and out of church.",
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
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
      text: "To witness through word and deed, undertake projects and programmes that lessen and free the people from the bondage of sin, poverty and disease.",
    },
  ]

  return (
    <section>
      <div className="text-center mb-8">
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
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Our Purpose
        </h2>
      </div>

      <div className="grid gap-4 md:gap-6">
        {purposes.map((purpose, index) => (
          <PurposeCard key={index} purpose={purpose} index={index} />
        ))}
      </div>
    </section>
  )
}

const PurposeCard = ({ purpose, index }) => {
  const [ref, isVisible] = useFadeInOnScroll(0.2)

  return (
    <div
      ref={ref}
      className={`
        flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 
        shadow-sm hover:shadow-md hover:border-purple-200 
        transition-all duration-500 ease-out group
        ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
      `}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div
        className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center
                      group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300"
      >
        <span className="text-purple-600 group-hover:text-white transition-colors duration-300">
          {purpose.icon}
        </span>
      </div>

      {/* Text */}
      <p className="text-gray-600 leading-relaxed pt-1.5">{purpose.text}</p>
    </div>
  )
}
