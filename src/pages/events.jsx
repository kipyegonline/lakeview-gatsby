import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { UpcomingEvents } from "../components/Home/events/Events"
import { calendarEvents } from "../components/Home/events/events2026"

const EventsPage = () => {
  return (
    <Layout>
      <Seo
        title="Events | Lakeview Africa Gospel Church"
        description="View upcoming events, programs, and activities at Lakeview Africa Gospel Church in Nakuru. Stay connected with our church calendar."
      />

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Church Events
          </h1>
          <p className="text-purple-200 text-lg max-w-xl mx-auto">
            Stay connected with our church calendar. Join us for worship,
            fellowship, and community activities throughout the year.
          </p>
        </div>
      </header>

      {/* Events Component */}
      <main className="bg-gray-50 min-h-screen">
        <UpcomingEvents events={calendarEvents} />
      </main>
    </Layout>
  )
}

export default EventsPage
