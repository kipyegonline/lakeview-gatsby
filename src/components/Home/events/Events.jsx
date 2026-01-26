import React, { useState, useMemo } from "react"

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const Events = ({ events = [] }) => {
  return (
    <div className="bg-gray-50 py-8">
      <UpcomingEvents events={events} />
    </div>
  )
}

export default Events

// Upcoming Events Component
export const UpcomingEvents = ({ events = [] }) => {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [showPastEvents, setShowPastEvents] = useState(false)

  // Filter events for current selected month
  const filteredEvents = useMemo(() => {
    return events
      .filter(event => {
        const eventDate = new Date(event.date)
        return (
          eventDate.getMonth() === currentMonth &&
          eventDate.getFullYear() === today.getFullYear()
        )
      })
      .sort((a, b) => new Date(a.date) - new Date(b.date))
  }, [events, currentMonth, today])

  // Separate past and upcoming events
  const { pastEvents, upcomingEvents } = useMemo(() => {
    const now = new Date()
    now.setHours(0, 0, 0, 0)

    return {
      pastEvents: filteredEvents.filter(
        event => new Date(event.end_date || event.date) < now,
      ),
      upcomingEvents: filteredEvents.filter(
        event => new Date(event.end_date || event.date) >= now,
      ),
    }
  }, [filteredEvents])

  const goToPrevMonth = () =>
    setCurrentMonth(prev => (prev === 0 ? 11 : prev - 1))
  const goToNextMonth = () =>
    setCurrentMonth(prev => (prev === 11 ? 0 : prev + 1))
  const goToCurrentMonth = () => setCurrentMonth(today.getMonth())

  const isCurrentMonth = currentMonth === today.getMonth()

  return (
    <div className="max-w-3xl mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Church Calendar
        </h2>
        <p className="text-gray-500 text-sm">
          Stay updated with upcoming events
        </p>
      </div>

      {/* Month Navigation */}
      <div className="flex items-center justify-between bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
        <button
          onClick={goToPrevMonth}
          className="p-2 rounded-lg hover:bg-purple-50 text-gray-600 hover:text-purple-600 transition-colors"
          aria-label="Previous month"
        >
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800">
            {months[currentMonth]} 2026
          </h3>
          {!isCurrentMonth && (
            <button
              onClick={goToCurrentMonth}
              className="text-xs text-purple-600 hover:text-purple-700 mt-1 hover:underline"
            >
              Back to current month
            </button>
          )}
        </div>

        <button
          onClick={goToNextMonth}
          className="p-2 rounded-lg hover:bg-purple-50 text-gray-600 hover:text-purple-600 transition-colors"
          aria-label="Next month"
        >
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Month Quick Select */}
      <div className="flex flex-wrap justify-center gap-1 mb-6">
        {months.map((month, index) => (
          <button
            key={month}
            onClick={() => setCurrentMonth(index)}
            className={`px-3 py-1 text-xs rounded-full transition-all ${
              currentMonth === index
                ? "bg-purple-600 text-white shadow-md"
                : index === today.getMonth()
                  ? "bg-purple-100 text-purple-700 hover:bg-purple-200"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {month.slice(0, 3)}
          </button>
        ))}
      </div>

      {/* Events List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Upcoming Events */}
        {upcomingEvents.length > 0 ? (
          <div>
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-4 py-3">
              <h4 className="text-white font-medium flex items-center gap-2">
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Upcoming Events ({upcomingEvents.length})
              </h4>
            </div>
            <div className="divide-y divide-gray-100">
              {upcomingEvents.map((event, index) => (
                <EventRow key={index} event={event} isPast={false} />
              ))}
            </div>
          </div>
        ) : (
          <div className="px-4 py-8 text-center text-gray-500">
            <svg
              className="w-12 h-12 mx-auto mb-3 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p>No upcoming events in {months[currentMonth]}</p>
          </div>
        )}

        {/* Past Events Toggle */}
        {pastEvents.length > 0 && (
          <div className="border-t border-gray-100">
            <button
              onClick={() => setShowPastEvents(!showPastEvents)}
              className="w-full px-4 py-3 flex items-center justify-between text-gray-500 hover:bg-gray-50 transition-colors"
            >
              <span className="flex items-center gap-2 text-sm">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Past Events ({pastEvents.length})
              </span>
              <svg
                className={`w-4 h-4 transition-transform ${showPastEvents ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {showPastEvents && (
              <div className="divide-y divide-gray-100 bg-gray-50">
                {pastEvents.map((event, index) => (
                  <EventRow key={index} event={event} isPast={true} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Stats Footer */}
      <div className="mt-4 flex justify-center gap-6 text-sm text-gray-500">
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-purple-500"></span>
          {upcomingEvents.length} upcoming
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          {pastEvents.length} completed
        </span>
      </div>
    </div>
  )
}

// Single Event Row Component
const EventRow = ({ event, isPast }) => {
  const startDate = new Date(event.date)
  const endDate = event.end_date ? new Date(event.end_date) : null
  const isMultiDay = endDate && startDate.getTime() !== endDate.getTime()

  // Calculate number of days for multi-day events
  const getDayCount = () => {
    if (!isMultiDay) return 0
    const diffTime = Math.abs(endDate - startDate)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1
    return diffDays
  }

  const dayCount = getDayCount()

  const formatDate = date => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      day: "numeric",
    })
  }

  return (
    <div
      className={`px-4 py-3 flex items-start gap-4 transition-colors hover:bg-gray-50 ${isPast ? "opacity-60" : ""}`}
    >
      {/* Date Badge */}
      <div
        className={`flex-shrink-0 w-12 h-12 rounded-lg flex flex-col items-center justify-center text-center ${
          isPast ? "bg-gray-100 text-gray-500" : "bg-purple-100 text-purple-700"
        }`}
      >
        <span className="text-lg font-bold leading-none">
          {startDate.getDate()}
        </span>
        <span className="text-xs uppercase">
          {startDate.toLocaleDateString("en-US", { weekday: "short" })}
        </span>
      </div>

      {/* Event Details */}
      <div className="flex-1 min-w-0">
        <h5
          className={`font-medium truncate ${isPast ? "text-gray-500" : "text-gray-800"}`}
        >
          {event.event}
        </h5>
        <p className="text-sm text-gray-500">
          {formatDate(startDate)}
          {isMultiDay && ` → ${formatDate(endDate)}`}
        </p>
      </div>

      {/* Status Indicator */}
      {isMultiDay && !isPast && (
        <span className="flex-shrink-0 px-2 py-1 text-xs rounded-full bg-amber-100 text-amber-700">
          {dayCount} days
        </span>
      )}
      {isPast && (
        <span className="flex-shrink-0 px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-500">
          ✓ Done
        </span>
      )}
    </div>
  )
}

// Weekly Events Component
export const WeeklyEvents = () => {
  const weeklySchedule = [
    { day: "Monday", event: "Church Visitation", time: "5:30 PM" },
    { day: "Tuesday", event: "YP BS @ Bontana Hotel", time: "5:30 PM" },
    { day: "Wednesday", event: "Home Fellowship", time: "5:30 PM" },
    { day: "Thursday", event: "Choir Practice", time: "5:30 PM" },
    { day: "Friday", event: "Prayer Service", time: "5:30 PM" },
    { day: "Saturday", event: "Choir Practice", time: "5:30 PM" },
  ]

  const todayIndex = new Date().getDay() - 1 // 0 = Monday in our array

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 px-4 py-3">
        <h4 className="text-white font-medium text-center">Weekly Schedule</h4>
        <p className="text-purple-200 text-xs text-center">5:30 PM - 6:30 PM</p>
      </div>
      <div className="divide-y divide-gray-100">
        {weeklySchedule.map((item, index) => (
          <div
            key={item.day}
            className={`px-4 py-3 flex items-center justify-between transition-colors ${
              index === todayIndex
                ? "bg-purple-50 border-l-4 border-purple-500"
                : "hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                  index === todayIndex
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {item.day.slice(0, 2)}
              </span>
              <span
                className={
                  index === todayIndex
                    ? "font-medium text-purple-700"
                    : "text-gray-700"
                }
              >
                {item.event}
              </span>
            </div>
            {index === todayIndex && (
              <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded-full">
                Today
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// Prayer Days Component
export const PrayerDays = () => {
  const prayerSchedule = [
    { day: "Monday", department: "Compassion & Children", icon: "❤️" },
    { day: "Tuesday", department: "Ladies & Men", icon: "👥" },
    { day: "Wednesday", department: "Missions & Evangelism", icon: "🌍" },
    { day: "Thursday", department: "Youth & Academy", icon: "🎓" },
    { day: "Friday", department: "Worship & Development", icon: "🎵" },
  ]

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 px-4 py-3">
        <h4 className="text-white font-medium text-center">
          Department Prayer Days
        </h4>
      </div>
      <div className="divide-y divide-gray-100">
        {prayerSchedule.map(item => (
          <div
            key={item.day}
            className="px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors"
          >
            <span className="text-xl">{item.icon}</span>
            <div className="flex-1">
              <p className="font-medium text-gray-800 text-sm">
                {item.department}
              </p>
              <p className="text-xs text-gray-500">{item.day}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Quick Contacts Component
export const QuickContacts = ({ contacts = [] }) => {
  const defaultContacts = [
    {
      name: "Rev. Delton Orgeness",
      phone: "0726907931",
      role: "Senior Pastor",
    },
    { name: "Pastor Rachel Ng'etich", phone: "0721406155", role: "Pastor" },
    { name: "Harry Yegon", phone: "0726216029", role: "Elder" },
    { name: "Samuel Maina", phone: "0724754423", role: "Worship Director" },
    {
      name: "Church Office",
      phone: "0797438190",
      role: "info@lakeviewagc.net",
    },
  ]

  const displayContacts = contacts.length > 0 ? contacts : defaultContacts

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 px-4 py-3">
        <h4 className="text-white font-medium text-center">Quick Contacts</h4>
      </div>
      <div className="divide-y divide-gray-100">
        {displayContacts.map((contact, index) => (
          <div
            key={index}
            className="px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-medium">
              {contact.name
                .split(" ")
                .map(n => n[0])
                .join("")
                .slice(0, 2)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-800 text-sm truncate">
                {contact.name}
              </p>
              <p className="text-xs text-gray-500">{contact.role}</p>
            </div>
            <a
              href={`tel:${contact.phone}`}
              className="text-purple-600 hover:text-purple-700 text-sm font-medium"
            >
              {contact.phone}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

// Give Component
export const Give = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 px-4 py-3">
        <h4 className="text-white font-medium text-center">Give</h4>
        <p className="text-purple-200 text-xs text-center">
          Support the ministry
        </p>
      </div>
      <div className="p-4 space-y-4">
        <div className="bg-green-50 rounded-lg p-4 border border-green-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">📱</span>
            <div>
              <p className="font-semibold text-green-800">M-Pesa Paybill</p>
              <p className="text-xs text-green-600">Lipa na M-Pesa</p>
            </div>
          </div>
          <div className="bg-white rounded-md p-3 text-center">
            <p className="text-sm text-gray-500">Business Number</p>
            <p className="text-xl font-bold text-green-700">522522</p>
            <p className="text-sm text-gray-500 mt-2">Account Number</p>
            <p className="text-lg font-semibold text-green-700">1297aboret</p>
          </div>
        </div>
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🏦</span>
            <div>
              <p className="font-semibold text-blue-800">Bank Transfer</p>
              <p className="text-xs text-blue-600">Co-operative Bank</p>
            </div>
          </div>
          <div className="bg-white rounded-md p-3 text-center">
            <p className="text-sm text-gray-500">Account Number</p>
            <p className="text-lg font-bold text-blue-700">01129727000100</p>
          </div>
        </div>
      </div>
    </div>
  )
}
