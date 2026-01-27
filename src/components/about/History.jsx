import React, { useEffect, useRef, useState } from "react"
import churcharea2 from "../../images/assets/img/2022/IMG-20220112-WA0004.jpg"
import churcharea from "../../images/assets/img/2022/IMG-20220112-WA0003.jpg"

// Custom hook for fade-in animation on scroll
const useFadeInOnScroll = (threshold = 0.15) => {
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

// Animated paragraph component
const AnimatedParagraph = ({ children, delay = 0, highlight = false }) => {
  const [ref, isVisible] = useFadeInOnScroll()

  return (
    <p
      ref={ref}
      className={`
        text-gray-700 leading-relaxed text-base md:text-lg
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        ${highlight ? "first-letter:text-4xl first-letter:font-bold first-letter:text-purple-600 first-letter:float-left first-letter:mr-2 first-letter:mt-1" : ""}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </p>
  )
}

// Timeline milestone component
const Milestone = ({ year, title, delay = 0 }) => {
  const [ref, isVisible] = useFadeInOnScroll()

  return (
    <div
      ref={ref}
      className={`
        flex items-center gap-3 transition-all duration-500 ease-out
        ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl 
                      flex items-center justify-center text-white font-bold text-sm shadow-lg"
      >
        {year}
      </div>
      <p className="text-gray-700 font-medium">{title}</p>
    </div>
  )
}

const History = () => {
  const today = new Date().getDay() % 2 === 0
  const yearsOfExistence = new Date().getFullYear() - 1978

  return (
    <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-16">
      {/* Hero Section with Cover Image */}
      <header className="relative overflow-hidden">
        <div className="relative h-64 md:h-80 lg:h-96">
          <img
            src={today ? churcharea : churcharea2}
            alt="Lakeview Africa Gospel Church - Church Area"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent" />

          {/* Header Text */}
          <div className="absolute inset-0 flex items-end justify-center pb-8 md:pb-12">
            <div className="text-center px-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full mb-4">
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
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                Our History
              </h1>
              <p className="text-gray-200 text-sm md:text-base">
                {yearsOfExistence} years of faithful service
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        {/* Years Badge */}
        <div className="flex justify-center -mt-8 mb-10 relative z-10">
          <div className="bg-white rounded-2xl shadow-xl px-8 py-4 border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="text-center">
                <span className="block text-4xl md:text-5xl font-bold text-purple-600">
                  {yearsOfExistence}
                </span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">
                  Years
                </span>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <p className="text-gray-600 text-sm md:text-base max-w-[180px]">
                Sharing the light of the gospel in Nakuru and beyond
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <AnimatedParagraph highlight>
            <strong className="text-gray-800">
              Lakeview Africa Gospel Church
            </strong>{" "}
            has been in existence for the last {yearsOfExistence} years with the
            sole purpose of sharing the light of the gospel of the Lord Jesus in
            Nakuru and beyond. It is one of the 1,600 congregations of Africa
            Gospel Church in Kenya.
          </AnimatedParagraph>
        </section>

        {/* Key Milestones */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-4 h-4 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </span>
            Key Milestones
          </h2>
          <div className="space-y-4 pl-2">
            <Milestone
              year="1978"
              title="First service at Afraha Social Hall (March 26th)"
              delay={0}
            />
            <Milestone
              year="1985"
              title="First sanctuary in Section 58 unveiled by President Moi (July 21st)"
              delay={100}
            />
            <Milestone
              year="2002"
              title="Bigger sanctuary launched by President Moi (October 6th)"
              delay={200}
            />
          </div>
        </section>

        {/* Founding Story */}
        <section className="mb-12 bg-purple-50 rounded-2xl p-6 md:p-8 border border-purple-100">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-purple-200 rounded-lg flex items-center justify-center">
              <svg
                className="w-4 h-4 text-purple-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            Our Founding
          </h2>
          <AnimatedParagraph>
            Planted by Isaac and Susana Saoshiro, missionaries with IGM
            (Immanuel General Mission) from Japan, Lakeview AGC is now run fully
            by local leadership, giving its members a sense of ownership of the
            church. The Local Church Council (LCC) governs the policies and
            strategies that uphold the church's vision and mission.
          </AnimatedParagraph>
        </section>

        {/* Early History */}
        <section className="mb-12">
          <AnimatedParagraph>
            Its first service was conducted on{" "}
            <strong className="text-purple-700">March 26th, 1978</strong> in a
            rented room in Afraha Social Hall—it was then called Nakuru Town
            Church. The church eventually relocated to its own new sanctuary in
            Section 58 facing Lake Nakuru, hence christened "Lakeview Africa
            Gospel Church".
          </AnimatedParagraph>
        </section>

        <section className="mb-12">
          <AnimatedParagraph>
            The small sanctuary came to service on{" "}
            <strong className="text-purple-700">July 21st, 1985</strong>,
            unveiled by President Daniel Arap Moi (then second President of the
            Republic of Kenya). The ever-expanding congregation necessitated
            expansion of the church accommodation space; the church eventually
            established a bigger sanctuary which was once again launched by
            President Daniel Arap Moi on
            <strong className="text-purple-700"> October 6th, 2002</strong>.
          </AnimatedParagraph>
        </section>

        {/* Today */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-4 h-4 text-purple-600"
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
            </span>
            Lakeview Today
          </h2>
          <div className="space-y-6">
            <AnimatedParagraph>
              To date, Lakeview Church has grown tremendously to what it is
              today, tailored to meet all your family and individual needs in a
              holistic way. The church has also established
              <strong className="text-purple-700"> Lakeview Academy</strong>, a
              Christian-based academic institution offering quality education
              for kindergarten students and promoting a God-fearing generation
              imparted with spiritual values.
            </AnimatedParagraph>
            <AnimatedParagraph>
              The church continues to evangelize the gospel of Jesus Christ all
              over Nakuru County, both as a whole church and through our devoted
              missions and evangelism ministries. We have ministries committed
              to spreading the gospel through fellowship and companionship.
            </AnimatedParagraph>
          </div>
        </section>

        {/* Scripture Quote */}
        <section className="text-center">
          <blockquote className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 md:p-8 text-white shadow-xl">
            <svg
              className="w-8 h-8 mx-auto mb-4 opacity-50"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-lg md:text-xl font-light leading-relaxed mb-4">
              "For I know the plans I have for you, declares the Lord, plans for
              welfare and not for evil, to give you a future and a hope."
            </p>
            <cite className="text-purple-200 font-medium not-italic">
              — Jeremiah 29:11
            </cite>
          </blockquote>
        </section>
      </div>
    </article>
  )
}

export default History
