import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { faChurch } from "@fortawesome/free-solid-svg-icons"
import Navigation from "./ui/Nav/Navigation"
import logo from "../images/assets/img/2026/agc_logo.png"
const Header = () => {
  return (
    <header className="header-modern">
      <div className="header-container">
        {/* Logo Section */}
        <Link to="/" className="header-logo-link">
          <div className="header-logo">
            <div className="header-logo-icon-wrapper h-[70px]">
              <img src={logo} alt="Logo" className="header-logo-icon" />
            </div>
            <div className="header-logo-text">
              <span className="header-logo-name">Lakeview AGC</span>
              <span className="header-logo-tagline">Africa Gospel Church</span>
            </div>
          </div>
        </Link>

        {/* Navigation Menu */}
        <Navigation />

        {/* Social Icons - Hidden on mobile */}
        <div className="header-socials ">
          <a
            href="https://www.facebook.com/Lakeview-AGC-Nakuru-355976284540480"
            target="_blank"
            rel="noopener noreferrer"
            className="header-social-link"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://twitter.com/lakeviewagc"
            target="_blank"
            rel="noopener noreferrer"
            className="header-social-link"
            aria-label="Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCVzXXOTTs7PLfh5wjB3KB9g"
            target="_blank"
            rel="noopener noreferrer"
            className="header-social-link"
            aria-label="YouTube"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a
            href="https://www.instagram.com/lakeviewagcnakuru/"
            target="_blank"
            rel="noopener noreferrer"
            className="header-social-link"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
