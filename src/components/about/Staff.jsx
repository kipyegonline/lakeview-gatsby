import React, { useEffect, useRef, useState } from "react"

import delo from "../../images/assets/img/pstdelton.jpg"
import rachael from "../../images/assets/img/newlcc/IMG-20200813-WA0000.jpg"

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

const PStaff = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-10 md:py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
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
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Pastoral Staff
          </h1>
          <p className="text-gray-500 max-w-lg mx-auto">
            Meet the dedicated leaders who shepherd our congregation with love,
            wisdom, and faithfulness.
          </p>
        </header>

        {/* Staff Grid */}
        <div className="grid gap-8 md:gap-10">
          {pastors.map((pastor, index) => (
            <PastorCard key={pastor.name} pastor={pastor} index={index} />
          ))}
        </div>

        {/* Scripture Quote */}
        <div className="mt-16 text-center">
          <blockquote className="max-w-2xl mx-auto">
            <svg
              className="w-8 h-8 mx-auto mb-4 text-purple-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-gray-600 text-lg italic leading-relaxed mb-4">
              "Remember your leaders, those who spoke to you the word of God.
              Consider the outcome of their way of life, and imitate their
              faith."
            </p>
            <cite className="text-purple-600 font-medium not-italic">
              — Hebrews 13:7
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

const PastorCard = ({ pastor, index }) => {
  const [ref, isVisible] = useFadeInOnScroll(0.15)
  const isEven = index % 2 === 0

  return (
    <article
      ref={ref}
      className={`
        group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden
        hover:shadow-xl hover:border-purple-200 transition-all duration-500 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div
        className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
      >
        {/* Image Container */}
        <div className="relative w-full md:w-2/5 lg:w-1/3 overflow-hidden">
          <div className="aspect-[4/5] md:aspect-auto md:h-full">
            {pastor.pic ? (
              <img
                src={pastor.pic}
                alt={pastor.name}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <svg
                  className="w-24 h-24 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            )}
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent md:hidden" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
          {/* Role Badge */}
          <div className="mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">
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
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              {pastor.title}
            </span>
          </div>

          {/* Name */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 group-hover:text-purple-700 transition-colors duration-300">
            {pastor.name}
          </h2>

          {/* Description */}
          {pastor.des && (
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center mt-0.5">
                <svg
                  className="w-4 h-4 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Ministry Focus</p>
                <p className="text-gray-700">{pastor.des}</p>
              </div>
            </div>
          )}

          {/* Decorative line */}
          <div className="mt-auto pt-4">
            <div
              className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full 
                            group-hover:w-24 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </article>
  )
}

export default PStaff

const pastors = [
  {
    name: "Rev. Delton Orgeness",
    title: "Senior Pastor",
    pic: delo,
    des: null,
  },
  {
    name: "Pastor Rachel Ngetich",
    title: "Pastor",
    pic: rachael,
    des: "Children, Missions, Evangelism and Compassion.",
  },
]
