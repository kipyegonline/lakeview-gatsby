import React, { useState, useCallback, useEffect } from "react"
import History from "./History"
import { WhoWeAreTab } from "./WhoWeAre"
import PStaff from "./Staff"

// Navigation items configuration
const navItems = [
  {
    id: 0,
    label: "Who We Are",
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
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    id: 1,
    label: "Pastoral Staff",
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
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    label: "History",
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
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
]

// Component map for rendering
const componentMap = {
  0: WhoWeAreTab,
  1: PStaff,
  2: History,
}

const About = () => {
  const [currentTab, setCurrentTab] = useState(0)

  const handleTabChange = useCallback(tabId => {
    setCurrentTab(tabId)
    // Smooth scroll to top on mobile
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      window.scrollTo({ behavior: "smooth", top: 0 })
    }
  }, [])

  const CurrentComponent = componentMap[currentTab] || WhoWeAreTab

  return (
    <section className="relative min-h-screen bg-gray-50">
      {/* Desktop Layout - Sidebar + Content */}
      <div className="hidden md:flex">
        {/* Desktop Sidebar Navigation */}
        <AboutNav
          currentTab={currentTab}
          onTabChange={handleTabChange}
          variant="desktop"
        />

        {/* Main Content - Desktop */}
        <main className="flex-1 min-h-screen">
          <CurrentComponent />
        </main>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        {/* Main Content - Mobile */}
        <main className="pb-24">
          <CurrentComponent />
        </main>

        {/* Mobile Navigation - Fixed Bottom */}
        <AboutNav
          currentTab={currentTab}
          onTabChange={handleTabChange}
          variant="mobile"
        />
      </div>
    </section>
  )
}

export default About

export const AboutNav = ({ currentTab, onTabChange, variant }) => {
  const isDesktop = variant === "desktop"

  return (
    <nav
      className={`
        ${
          isDesktop
            ? "sticky top-0 h-screen w-64 shrink-0 z-40"
            : "md:hidden fixed bottom-0 left-0 right-0 z-50"
        }
      `}
      role="navigation"
      aria-label="About section navigation"
    >
      {/* Background with gradient */}
      <div
        className={`
          h-full
          ${
            isDesktop
              ? "bg-gradient-to-b from-purple-700 via-purple-600 to-indigo-600 shadow-xl"
              : "bg-gradient-to-t from-purple-800 via-purple-700 to-purple-600 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]"
          }
        `}
      >
        {/* Desktop Layout - Vertical Sidebar */}
        {isDesktop && (
          <div className="flex flex-col h-full p-4">
            {/* Header */}
            <div className="mb-8 pt-4 text-center">
              <h2 className="text-white font-bold text-xl mb-1">About Us</h2>
              <div className="w-12 h-1 bg-white/40 rounded-full mx-auto"></div>
            </div>

            {/* Nav Items */}
            <ul className="flex flex-col gap-2 flex-1">
              {navItems.map((item, index) => (
                <NavItem
                  key={item.id}
                  item={item}
                  isActive={currentTab === item.id}
                  onClick={() => onTabChange(item.id)}
                  variant="desktop"
                  index={index}
                />
              ))}
            </ul>

            {/* Decorative bottom */}
            <div className="mt-auto pt-6 pb-4 text-center">
              <div className="flex items-center justify-center gap-2 text-white/50 text-sm">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span>Lakeview AGC</span>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Layout - Horizontal Bottom Bar */}
        {!isDesktop && (
          <div className="safe-area-bottom">
            <ul className="flex items-center justify-around py-2 px-2">
              {navItems.map((item, index) => (
                <NavItem
                  key={item.id}
                  item={item}
                  isActive={currentTab === item.id}
                  onClick={() => onTabChange(item.id)}
                  variant="mobile"
                  index={index}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

const NavItem = ({ item, isActive, onClick, variant, index = 0 }) => {
  const isDesktop = variant === "desktop"
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Staggered fade-in delay based on index
    const timer = setTimeout(() => {
      setIsMounted(true)
    }, index * 100)

    return () => clearTimeout(timer)
  }, [index])

  return (
    <li
      className={`
        list-none transition-all duration-500 ease-out w-full
        ${isMounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
      `}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <button
        onClick={onClick}
        className={`
          group relative flex items-center gap-3 transition-all duration-300 ease-out w-full
          focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-purple-600
          ${
            isDesktop
              ? `px-4 py-4 rounded-xl font-medium text-sm text-left
               ${
                 isActive
                   ? "bg-white text-purple-700 shadow-lg shadow-purple-900/30"
                   : "text-white/90 hover:bg-white/15 hover:text-white hover:translate-x-1"
               }`
              : `flex-col items-center justify-center px-4 py-2 rounded-xl min-w-[80px]
               ${
                 isActive
                   ? "bg-white/20 text-white"
                   : "text-white/70 hover:text-white"
               }`
          }
        `}
        aria-current={isActive ? "page" : undefined}
      >
        {/* Active indicator - Desktop (left bar) */}
        {isDesktop && isActive && (
          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-purple-700 rounded-r-full" />
        )}

        {/* Icon */}
        <span
          className={`
            transition-transform duration-300 shrink-0
            ${isActive ? "scale-110" : "group-hover:scale-110"}
            ${!isDesktop && isActive ? "text-white" : ""}
          `}
        >
          {item.icon}
        </span>

        {/* Label */}
        <span
          className={`
            transition-all duration-300
            ${isDesktop ? "flex-1" : "text-xs mt-1"}
            ${isActive && isDesktop ? "font-semibold" : ""}
          `}
        >
          {item.label}
        </span>

        {/* Arrow indicator - Desktop */}
        {isDesktop && (
          <svg
            className={`w-4 h-4 transition-all duration-300 shrink-0 ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0"}`}
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
        )}

        {/* Active indicator - Mobile */}
        {!isDesktop && isActive && (
          <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-full" />
        )}

        {/* Hover glow effect */}
        <span
          className={`
            absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300
            ${isDesktop ? "group-hover:opacity-100 bg-gradient-to-r from-white/5 to-white/10" : ""}
          `}
        />
      </button>
    </li>
  )
}
