import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faChurch,
} from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-modern">
      {/* Main Footer Content */}
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <FontAwesomeIcon icon={faChurch} className="footer-logo-icon" />
              <span className="footer-logo-text">Lakeview AGC</span>
            </div>
            <p className="footer-tagline">
              The Whole Church taking the Whole Gospel to the Whole World
            </p>
            {/* Social Links */}
            <div className="footer-socials">
              <a
                href="https://www.facebook.com/Lakeview-AGC-Nakuru-355976284540480"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://twitter.com/lakeviewagc"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCVzXXOTTs7PLfh5wjB3KB9g"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="YouTube"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a
                href="https://www.instagram.com/lakeviewagcnakuru/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-section-title">Quick Links</h4>
            <nav className="footer-nav">
              <Link to="/" className="footer-nav-link">Home</Link>
              <Link to="/about-lakeview-agc" className="footer-nav-link">About Us</Link>
              <Link to="/services" className="footer-nav-link">Sermons</Link>
              <Link to="/lakeview-academy" className="footer-nav-link">Academy</Link>
              <Link to="/get-in-touch" className="footer-nav-link">Contact</Link>
            </nav>
          </div>

          {/* Service Times */}
          <div className="footer-section">
            <h4 className="footer-section-title">Service Times</h4>
            <div className="footer-services">
              <div className="footer-service-item">
                <span className="footer-service-day">Sunday</span>
                <span className="footer-service-time">9:30 AM - 12:30 PM</span>
              </div>
              <div className="footer-service-item">
                <span className="footer-service-day">Wednesday</span>
                <span className="footer-service-time">Home Fellowship</span>
              </div>
              <div className="footer-service-item">
                <span className="footer-service-day">Friday</span>
                <span className="footer-service-time">Prayer Service</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-section-title">Contact Us</h4>
            <div className="footer-contact">
              <a href="tel:+254797438190" className="footer-contact-item">
                <FontAwesomeIcon icon={faPhone} className="footer-contact-icon" />
                <span>+254 797 438 190</span>
              </a>
              <a href="mailto:info@lakeviewagc.net" className="footer-contact-item">
                <FontAwesomeIcon icon={faEnvelope} className="footer-contact-icon" />
                <span>info@lakeviewagc.net</span>
              </a>
              <div className="footer-contact-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="footer-contact-icon" />
                <span>Nakuru, Kenya</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar - Far Bottom */}
      <div className="footer-copyright-bar">
        <div className="footer-copyright-container">
          <p className="footer-copyright-text">
            © {currentYear} Lakeview Africa Gospel Church. All rights reserved.
          </p>
        
        </div>
      </div>
    </footer>
  )
}

export default Footer
