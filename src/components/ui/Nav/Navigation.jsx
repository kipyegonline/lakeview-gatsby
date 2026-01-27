import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBars,
  faTimes,
  faChevronRight,
  faHeart,
} from "@fortawesome/free-solid-svg-icons"
import Give from "../../give/Give"
import "./navigation.css"

// Menu items array - sourced from footer quick links
const menuItems = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about-lakeview-agc" },
  { name: "Sermons", link: "/services" },
  { name: "Academy", link: "/lakeview-academy" },
  { name: "Events", link: "/events" },
  { name: "Contact", link: "/get-in-touch" },
]

// Give Modal Component
const GiveModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null)

  useEffect(() => {
    const handleEscape = e => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="give-modal-overlay" onClick={onClose}>
      <div
        ref={modalRef}
        className="give-modal-container"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="give-modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        {/* Modal Content */}
        <div className="give-modal-content">
          <Give />
        </div>
      </div>
    </div>
  )
}

// Give Button Component
const GiveButton = ({ onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`give-nav-button ${className}`}
    aria-label="Give"
  >
    <FontAwesomeIcon icon={faHeart} className="give-nav-icon" />
    <span>Give</span>
  </button>
)

// Desktop Menu Component - Sleek horizontal navigation
const DesktopMenu = ({ items, onGiveClick }) => {
  return (
    <nav className="desktop-nav" aria-label="Main navigation">
      <ul className="desktop-nav-list">
        {items.map((item, index) => (
          <li
            key={item.link}
            className="desktop-nav-item"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Link
              to={item.link}
              className="desktop-nav-link"
              activeClassName="desktop-nav-link-active"
            >
              <span className="nav-link-text">{item.name}</span>
              <span className="nav-link-underline"></span>
              <span className="nav-link-glow"></span>
            </Link>
          </li>
        ))}
        {/* Give Button */}
        <li
          className="desktop-nav-item"
          style={{ animationDelay: `${items.length * 0.1}s` }}
        >
          <GiveButton onClick={onGiveClick} />
        </li>
      </ul>
    </nav>
  )
}

// Mobile Menu Component - Animated slide-in panel
const MobileMenu = ({ items, isOpen, onClose, onGiveClick }) => {
  const menuRef = useRef(null)

  // Close on escape key
  useEffect(() => {
    const handleEscape = e => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = e => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose()
      }
    }
    if (isOpen) {
      setTimeout(() => {
        document.addEventListener("click", handleClickOutside)
      }, 100)
    }
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isOpen, onClose])

  const handleGiveClick = () => {
    onClose()
    onGiveClick()
  }

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`mobile-menu-backdrop ${isOpen ? "active" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in menu panel */}
      <nav
        ref={menuRef}
        className={`mobile-menu-panel ${isOpen ? "open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        {/* Close button */}
        <button
          className="mobile-menu-close"
          onClick={onClose}
          aria-label="Close menu"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        {/* Menu header */}
        <div className="mobile-menu-header">
          <span className="mobile-menu-title">Menu</span>
          <div className="mobile-menu-divider"></div>
        </div>

        {/* Menu items */}
        <ul className="mobile-nav-list">
          {items.map((item, index) => (
            <li
              key={item.link}
              className="mobile-nav-item"
              style={{
                animationDelay: isOpen ? `${0.1 + index * 0.08}s` : "0s",
              }}
            >
              <Link
                to={item.link}
                className="mobile-nav-link"
                activeClassName="mobile-nav-link-active"
                onClick={onClose}
              >
                <span className="mobile-nav-link-text">{item.name}</span>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="mobile-nav-arrow"
                />
                <span className="mobile-nav-link-bg"></span>
              </Link>
            </li>
          ))}
          {/* Give Button in Mobile Menu */}
          <li
            className="mobile-nav-item"
            style={{
              animationDelay: isOpen ? `${0.1 + items.length * 0.08}s` : "0s",
            }}
          >
            <button onClick={handleGiveClick} className="mobile-give-button">
              <FontAwesomeIcon icon={faHeart} className="mobile-give-icon" />
              <span className="mobile-nav-link-text">Give</span>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="mobile-nav-arrow"
              />
            </button>
          </li>
        </ul>

        {/* Decorative element */}
        <div className="mobile-menu-decoration">
          <div className="decoration-circle circle-1"></div>
          <div className="decoration-circle circle-2"></div>
        </div>
      </nav>
    </>
  )
}

// Main Navigation Component - Renders both menus
const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isGiveModalOpen, setIsGiveModalOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const openGiveModal = () => {
    setIsGiveModalOpen(true)
  }

  const closeGiveModal = () => {
    setIsGiveModalOpen(false)
  }

  return (
    <div className="navigation-wrapper">
      {/* Desktop Menu - Hidden on mobile */}
      <div className="desktop-menu-container">
        <DesktopMenu items={menuItems} onGiveClick={openGiveModal} />
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        className={`mobile-menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
        onClick={toggleMobileMenu}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMobileMenuOpen}
      >
        <span className="hamburger-box">
          <span className="hamburger-line line-1"></span>
          <span className="hamburger-line line-2"></span>
          <span className="hamburger-line line-3"></span>
        </span>
      </button>

      {/* Mobile Menu Panel */}
      <MobileMenu
        items={menuItems}
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        onGiveClick={openGiveModal}
      />

      {/* Give Modal */}
      <GiveModal isOpen={isGiveModalOpen} onClose={closeGiveModal} />
    </div>
  )
}

export default Navigation
export { DesktopMenu, MobileMenu, GiveModal, menuItems }
