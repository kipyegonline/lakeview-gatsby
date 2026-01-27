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
      {/* Desktop Navigation - Top */}
      <AboutNav
        currentTab={currentTab}
        onTabChange={handleTabChange}
        variant="desktop"
      />

      {/* Main Content */}
      <main className="pb-20 md:pb-8">
        <CurrentComponent />
      </main>

      {/* Mobile Navigation - Fixed Bottom */}
      <AboutNav
        currentTab={currentTab}
        onTabChange={handleTabChange}
        variant="mobile"
      />
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
            ? "hidden md:block sticky top-0 z-40"
            : "md:hidden fixed bottom-0 left-0 right-0 z-50"
        }
      `}
      role="navigation"
      aria-label="About section navigation"
    >
      {/* Background with gradient */}
      <div
        className={`
          ${
            isDesktop
              ? "bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 shadow-lg"
              : "bg-gradient-to-t from-purple-800 via-purple-700 to-purple-600 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]"
          }
        `}
      >
        {/* Desktop Layout */}
        {isDesktop && (
          <div className="max-w-4xl mx-auto px-4">
            <ul className="flex items-center justify-center gap-2 py-2">
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
          </div>
        )}

        {/* Mobile Layout */}
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
        list-none transition-all duration-500 ease-out
        ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <button
        onClick={onClick}
        className={`
          group relative flex items-center gap-2 transition-all duration-300 ease-out
          focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-purple-600
          ${
            isDesktop
              ? `px-6 py-3 rounded-xl font-medium text-sm
               ${
                 isActive
                   ? "bg-white text-purple-700 shadow-lg scale-105"
                   : "text-white/90 hover:bg-white/15 hover:text-white"
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
        {/* Icon */}
        <span
          className={`
            transition-transform duration-300
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
            ${isDesktop ? "" : "text-xs mt-1"}
            ${isActive && isDesktop ? "font-semibold" : ""}
          `}
        >
          {item.label}
        </span>

        {/* Active indicator - Desktop */}
        {isDesktop && isActive && (
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
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
