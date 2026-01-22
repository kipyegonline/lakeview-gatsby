import React from "react"

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./ui/footer/Footer"
import Nav from "./ui/Nav/Nav"
import { icons } from "./icons"

const Layout = ({ children }) => {
  const handleNavigation = () => window.scrollTo({ behavior: "smooth", top: 0 })
  const [showScrollTop, setShowScrollTop] = React.useState(false)
  
  const handleScroll = () => {
    const scrollY = window.scrollY
    setShowScrollTop(scrollY > 400)
  }

  React.useEffect(() => {
    library.add(...icons)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="layout-wrapper">
      <Header />
      <Nav />
      <main className="main-content">
        {children}
      </main>
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          className="scroll-to-top"
          onClick={handleNavigation}
          aria-label="Scroll to top"
        >
          <FontAwesomeIcon icon="arrow-alt-circle-up" />
        </button>
      )}
    </div>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
