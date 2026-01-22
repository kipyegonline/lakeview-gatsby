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

const Header = () => {
  return (
    <header className="header-modern">
      <div className="header-container">
        {/* Logo Section */}
        <Link to="/" className="header-logo-link">
          <div className="header-logo">
            <div className="header-logo-icon-wrapper">
              <FontAwesomeIcon icon={faChurch} className="header-logo-icon" />
            </div>
            <div className="header-logo-text">
              <span className="header-logo-name">Lakeview AGC</span>
              <span className="header-logo-tagline">Africa Gospel Church</span>
            </div>
          </div>
        </Link>

        {/* Tagline - Hidden on mobile */}
        <div className="header-tagline-wrapper">
          <p className="header-tagline">
            The Whole Church taking the Whole Gospel to the Whole World
          </p>
        </div>

        {/* Social Icons */}
        <div className="header-socials">
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
