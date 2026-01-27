import React, { useState, useEffect, useCallback } from "react"
import im1 from "../../images/assets/img/2023/IMG-20230111-WA0003.jpg"
import im2 from "../../images/assets/img/2024/school/WhatsApp Image .jpeg"
import im3 from "../../images/assets/img/2024/school/463887923_873207581647503_5922123558472212703_n.jpg"
import im4 from "../../images/assets/img/2024/school/WhatsApp Image 2024-10-13 at 8.24.52 PM.jpeg"
import im5 from "../../images/assets/img/2024/school/WhatsApp Image 2024-10-13 at 8.24.53 PM (1).jpeg"
import im6 from "../../images/assets/img/2024/school/WhatsApp Image 2024-10-13 at 8.24.53 PM.jpeg"

const gallerySlides = [
  { src: im1, title: "Weekly Performance", category: "Activities" },
  { src: im2, title: "Student Excellence", category: "Academics" },
  { src: im3, title: "Poetry Recitation", category: "Arts" },
  { src: im4, title: "Dance Sessions", category: "Culture" },
  { src: im5, title: "Group Activities", category: "Teamwork" },
  { src: im6, title: "Our Campus", category: "Facilities" },
]

const Academy = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [activeTab, setActiveTab] = useState("ECD")
  const [visibleSections, setVisibleSections] = useState({})

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % gallerySlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  // Intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".academy-section").forEach(section => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const nextSlide = useCallback(() => {
    setIsAutoPlaying(false)
    setCurrentSlide(prev => (prev + 1) % gallerySlides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setIsAutoPlaying(false)
    setCurrentSlide(
      prev => (prev - 1 + gallerySlides.length) % gallerySlides.length,
    )
  }, [])

  const goToSlide = useCallback(index => {
    setIsAutoPlaying(false)
    setCurrentSlide(index)
  }, [])

  return (
    <div className="academy">
      <style>{`
        /* ========== ACADEMY COMPONENT STYLES ========== */
        .academy {
          --accent-gradient: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          font-family: var(--font-display);
          overflow-x: hidden;
        }

        /* ========== HERO SECTION ========== */
        .academy-hero {
          position: relative;
          min-height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .academy-hero__carousel {
          position: absolute;
          inset: 0;
          display: flex;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .academy-hero__slide {
          min-width: 100%;
          height: 100%;
          position: relative;
        }

        .academy-hero__slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .academy-hero__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(124, 58, 237, 0.7) 0%,
            rgba(236, 72, 153, 0.6) 50%,
            rgba(9, 9, 11, 0.9) 100%
          );
        }

        .academy-hero__content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: var(--space-8);
          max-width: 900px;
          animation: fadeInUp 1s ease forwards;
        }

        .academy-hero__badge {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-2) var(--space-5);
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: var(--radius-full);
          color: var(--color-white);
          font-size: var(--text-sm);
          font-weight: var(--font-medium);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: var(--space-6);
        }

        .academy-hero__title {
          font-size: clamp(2.5rem, 8vw, 5rem);
          font-weight: var(--font-extrabold);
          color: var(--color-white);
          margin: 0 0 var(--space-4);
          line-height: 1.1;
          text-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
        }

        .academy-hero__title span {
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .academy-hero__subtitle {
          font-size: var(--text-xl);
          color: rgba(255, 255, 255, 0.9);
          max-width: 600px;
          margin: 0 auto var(--space-8);
          line-height: 1.6;
        }

        .academy-hero__cta {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-4) var(--space-8);
          background: var(--color-white);
          color: var(--color-primary);
          font-size: var(--text-base);
          font-weight: var(--font-bold);
          border-radius: var(--radius-full);
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        }

        .academy-hero__cta:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        }

        /* Carousel Controls */
        .carousel-controls {
          position: absolute;
          bottom: var(--space-8);
          left: 50%;
          transform: translateX(-50%);
          z-index: 20;
          display: flex;
          align-items: center;
          gap: var(--space-4);
        }

        .carousel-arrow {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: var(--color-white);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .carousel-arrow:hover {
          background: var(--color-white);
          color: var(--color-primary);
          transform: scale(1.1);
        }

        .carousel-dots {
          display: flex;
          gap: var(--space-2);
        }

        .carousel-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
        }

        .carousel-dot.active {
          background: var(--color-white);
          transform: scale(1.3);
        }

        .carousel-dot:hover {
          background: rgba(255, 255, 255, 0.7);
        }

        /* Gallery Preview Strip */
        .gallery-strip {
          position: absolute;
          bottom: var(--space-24);
          left: 50%;
          transform: translateX(-50%);
          z-index: 15;
          display: flex;
          gap: var(--space-3);
          padding: var(--space-3);
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(15px);
          border-radius: var(--radius-xl);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .gallery-strip__item {
          width: 80px;
          height: 60px;
          border-radius: var(--radius-md);
          overflow: hidden;
          cursor: pointer;
          opacity: 0.6;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .gallery-strip__item.active {
          opacity: 1;
          border-color: var(--color-white);
          transform: scale(1.1);
        }

        .gallery-strip__item:hover {
          opacity: 1;
        }

        .gallery-strip__item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .gallery-strip {
            display: none;
          }
        }

        /* ========== SECTION BASE STYLES ========== */
        .academy-section {
          padding: var(--space-20) var(--space-6);
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .academy-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--space-12);
        }

        .section-badge {
          display: inline-block;
          padding: var(--space-2) var(--space-4);
          background: var(--gradient-subtle);
          border-radius: var(--radius-full);
          font-size: var(--text-xs);
          font-weight: var(--font-bold);
          color: var(--color-primary-dark);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: var(--space-4);
        }

        .section-title {
          font-size: clamp(var(--text-3xl), 5vw, var(--text-5xl));
          font-weight: var(--font-extrabold);
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 var(--space-4);
        }

        .section-subtitle {
          font-size: var(--text-lg);
          color: var(--color-gray-500);
          max-width: 600px;
          margin: 0 auto;
        }

        /* ========== VISION & MISSION ========== */
        .vision-mission {
          background: linear-gradient(180deg, var(--color-white) 0%, var(--color-gray-50) 100%);
        }

        .vision-mission__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-8);
          max-width: 1000px;
          margin: 0 auto;
        }

        .vm-card {
          position: relative;
          padding: var(--space-10);
          background: var(--color-white);
          border-radius: var(--radius-2xl);
          box-shadow: var(--shadow-lg);
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .vm-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--card-accent);
        }

        .vm-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-2xl);
        }

        .vm-card__icon {
          width: 64px;
          height: 64px;
          border-radius: var(--radius-xl);
          background: var(--icon-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--space-6);
          transition: transform 0.5s ease;
        }

        .vm-card:hover .vm-card__icon {
          transform: scale(1.1) rotate(5deg);
        }

        .vm-card__icon svg {
          width: 28px;
          height: 28px;
          color: var(--icon-color);
        }

        .vm-card__title {
          font-size: var(--text-2xl);
          font-weight: var(--font-bold);
          color: var(--color-gray-900);
          margin: 0 0 var(--space-4);
        }

        .vm-card__text {
          font-size: var(--text-base);
          color: var(--color-gray-600);
          line-height: 1.7;
          margin: 0;
        }

        /* ========== CLASSES SECTION ========== */
        .classes-section {
          background: var(--gradient-primary);
          position: relative;
        }

        .classes-section .section-title,
        .classes-section .section-subtitle {
          color: var(--color-white);
          -webkit-text-fill-color: unset;
        }

        .classes-section .section-badge {
          background: rgba(255, 255, 255, 0.2);
          color: var(--color-white);
        }

        .classes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-6);
          max-width: 1000px;
          margin: 0 auto;
        }

        .class-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: var(--radius-xl);
          padding: var(--space-6);
          text-align: center;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          cursor: default;
        }

        .class-card:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .class-card__emoji {
          font-size: 3rem;
          margin-bottom: var(--space-4);
          display: block;
          transition: transform 0.4s ease;
        }

        .class-card:hover .class-card__emoji {
          transform: scale(1.2);
        }

        .class-card__name {
          font-size: var(--text-lg);
          font-weight: var(--font-bold);
          color: var(--color-white);
          margin: 0 0 var(--space-2);
        }

        .class-card__age {
          font-size: var(--text-sm);
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
        }

        /* ========== FEES SECTION ========== */
        .fees-section {
          background: var(--color-gray-50);
        }

        .fees-tabs {
          display: flex;
          justify-content: center;
          gap: var(--space-4);
          margin-bottom: var(--space-10);
        }

        .fees-tab {
          padding: var(--space-4) var(--space-8);
          border: 2px solid var(--color-gray-200);
          background: var(--color-white);
          border-radius: var(--radius-full);
          font-size: var(--text-base);
          font-weight: var(--font-semibold);
          color: var(--color-gray-600);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .fees-tab:hover {
          border-color: var(--color-primary-light);
          color: var(--color-primary);
        }

        .fees-tab.active {
          background: var(--gradient-primary);
          border-color: transparent;
          color: var(--color-white);
          box-shadow: var(--shadow-glow);
        }

        .fees-table-wrapper {
          max-width: 800px;
          margin: 0 auto;
          background: var(--color-white);
          border-radius: var(--radius-2xl);
          box-shadow: var(--shadow-xl);
          overflow: hidden;
          animation: scaleIn 0.5s ease forwards;
        }

        .fees-table {
          width: 100%;
          border-collapse: collapse;
        }

        .fees-table th,
        .fees-table td {
          padding: var(--space-5);
          text-align: center;
          border-bottom: 1px solid var(--color-gray-100);
        }

        .fees-table th {
          background: var(--gradient-primary);
          color: var(--color-white);
          font-weight: var(--font-semibold);
          font-size: var(--text-sm);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .fees-table tr:last-child td {
          border-bottom: none;
        }

        .fees-table tr:hover td {
          background: var(--color-gray-50);
        }

        .fees-table .total-row {
          background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-secondary-light) 100%);
          font-weight: var(--font-bold);
        }

        .fees-table .total-row td {
          color: var(--color-primary-dark);
        }

        .fees-highlight {
          margin-top: var(--space-8);
          padding: var(--space-4) var(--space-6);
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          border-radius: var(--radius-full);
          color: var(--color-white);
          font-weight: var(--font-semibold);
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          animation: pulse 2s infinite;
        }

        /* ========== TESTIMONIALS ========== */
        .testimonials-section {
          background: var(--color-white);
          position: relative;
          overflow: hidden;
        }

        .testimonials-section::before {
          content: """;
          position: absolute;
          top: 10%;
          left: 5%;
          font-size: 20rem;
          font-family: Georgia, serif;
          color: var(--color-gray-100);
          pointer-events: none;
          line-height: 1;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--space-6);
          max-width: 1200px;
          margin: 0 auto;
        }

        .testimonial-card {
          background: var(--color-gray-50);
          border-radius: var(--radius-2xl);
          padding: var(--space-8);
          position: relative;
          transition: all 0.4s ease;
          border: 1px solid transparent;
        }

        .testimonial-card:hover {
          background: var(--color-white);
          border-color: var(--color-primary-light);
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }

        .testimonial-card__quote {
          font-size: var(--text-base);
          color: var(--color-gray-700);
          line-height: 1.7;
          font-style: italic;
          margin: 0 0 var(--space-6);
        }

        .testimonial-card__author {
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }

        .testimonial-card__avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--gradient-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-white);
          font-weight: var(--font-bold);
        }

        .testimonial-card__name {
          font-size: var(--text-sm);
          font-weight: var(--font-semibold);
          color: var(--color-gray-900);
          margin: 0;
        }

        .testimonial-card__role {
          font-size: var(--text-xs);
          color: var(--color-gray-500);
          margin: 0;
        }

        .testimonial-card__stars {
          color: #fbbf24;
          font-size: var(--text-lg);
          margin-bottom: var(--space-4);
        }

        /* ========== CONTACT SECTION ========== */
        .contact-section {
          background: var(--gradient-dark);
          position: relative;
          overflow: hidden;
        }

        .contact-section::before {
          content: "";
          position: absolute;
          top: -50%;
          right: -20%;
          width: 60%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .contact-section .section-title {
          color: var(--color-white);
          -webkit-text-fill-color: unset;
        }

        .contact-section .section-subtitle {
          color: rgba(255, 255, 255, 0.7);
        }

        .contact-section .section-badge {
          background: rgba(255, 255, 255, 0.15);
          color: var(--color-white);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: var(--space-6);
          max-width: 900px;
          margin: 0 auto;
        }

        .contact-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: var(--radius-xl);
          padding: var(--space-6);
          text-align: center;
          transition: all 0.4s ease;
        }

        .contact-card:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .contact-card__icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: var(--color-white);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto var(--space-4);
          transition: transform 0.4s ease;
        }

        .contact-card:hover .contact-card__icon {
          transform: scale(1.1) rotate(10deg);
        }

        .contact-card__icon svg {
          width: 24px;
          height: 24px;
          color: var(--color-primary);
        }

        .contact-card__label {
          font-size: var(--text-sm);
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin: 0 0 var(--space-2);
        }

        .contact-card__value {
          font-size: var(--text-lg);
          font-weight: var(--font-semibold);
          color: var(--color-white);
          margin: 0;
          text-decoration: none;
          display: block;
        }

        .contact-card__value:hover {
          text-decoration: underline;
        }

        /* ========== RESPONSIVE ========== */
        @media (max-width: 768px) {
          .academy-hero {
            min-height: 100vh;
          }

          .academy-section {
            padding: var(--space-12) var(--space-4);
          }

          .classes-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .fees-tabs {
            flex-direction: column;
            align-items: center;
          }

          .fees-table th,
          .fees-table td {
            padding: var(--space-3);
            font-size: var(--text-sm);
          }

          .carousel-controls {
            bottom: var(--space-4);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .academy-section,
          .vm-card,
          .class-card,
          .testimonial-card,
          .contact-card {
            transition: none;
          }
        }
      `}</style>

      {/* ========== HERO WITH CAROUSEL ========== */}
      <section className="academy-hero">
        <div
          className="academy-hero__carousel"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {gallerySlides.map((slide, index) => (
            <div key={index} className="academy-hero__slide">
              <img
                src={slide.src}
                alt={slide.title}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
        <div className="academy-hero__overlay" />

        <div className="academy-hero__content">
          <span className="academy-hero__badge">✦ Excellence in Education</span>
          <h1 className="academy-hero__title">
            Lakeview AGC <span>Academy</span>
          </h1>
          <p className="academy-hero__subtitle">
            Nurturing young minds through Christian values, quality education,
            and holistic development
          </p>
          <a href="#contact" className="academy-hero__cta">
            Enroll Your Child
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Gallery Preview Strip */}
        <div className="gallery-strip">
          {gallerySlides.map((slide, index) => (
            <button
              key={index}
              className={`gallery-strip__item ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}: ${slide.title}`}
            >
              <img src={slide.src} alt="" />
            </button>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="carousel-controls">
          <button
            className="carousel-arrow"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <div className="carousel-dots">
            {gallerySlides.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            className="carousel-arrow"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </section>

      {/* ========== VISION & MISSION ========== */}
      <section
        id="vision-mission"
        className={`academy-section vision-mission ${visibleSections["vision-mission"] ? "visible" : ""}`}
      >
        <header className="section-header">
          <span className="section-badge">Our Foundation</span>
          <h2 className="section-title">Vision & Mission</h2>
          <p className="section-subtitle">
            Guided by faith, driven by excellence
          </p>
        </header>

        <div className="vision-mission__grid">
          <article
            className="vm-card"
            style={{
              "--card-accent": "var(--gradient-primary)",
              "--icon-bg": "var(--color-primary-light)",
              "--icon-color": "var(--color-primary-dark)",
            }}
          >
            <div className="vm-card__icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <h3 className="vm-card__title">Our Vision</h3>
            <p className="vm-card__text">
              To be a leading Christian-based institution of academic
              excellence, shaping future leaders through faith and knowledge.
            </p>
          </article>

          <article
            className="vm-card"
            style={{
              "--card-accent":
                "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)",
              "--icon-bg": "var(--color-secondary-light)",
              "--icon-color": "var(--color-secondary-dark)",
            }}
          >
            <div className="vm-card__icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h3 className="vm-card__title">Our Mission</h3>
            <p className="vm-card__text">
              To impart spiritual virtues, offer quality education, and develop
              a God-fearing generation equipped for tomorrow's challenges.
            </p>
          </article>
        </div>
      </section>

      {/* ========== CLASSES ========== */}
      <section
        id="classes"
        className={`academy-section classes-section ${visibleSections["classes"] ? "visible" : ""}`}
      >
        <header className="section-header">
          <span className="section-badge">Programs</span>
          <h2 className="section-title">Our Classes</h2>
          <p className="section-subtitle">
            Age-appropriate learning for every child
          </p>
        </header>

        <div className="classes-grid">
          {[
            { name: "Playgroup/Daycare", age: "2-3 years", emoji: "🧒" },
            { name: "Pre-Primary 1", age: "3-4 years", emoji: "📚" },
            { name: "Pre-Primary 2", age: "4-5 years", emoji: "✏️" },
            { name: "Grade 1", age: "5-6 years", emoji: "🎒" },
            { name: "Grade 2", age: "6-7 years", emoji: "🌟" },
          ].map((cls, index) => (
            <article
              key={cls.name}
              className="class-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="class-card__emoji">{cls.emoji}</span>
              <h3 className="class-card__name">{cls.name}</h3>
              <p className="class-card__age">{cls.age}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ========== FEES STRUCTURE ========== */}
      <section
        id="fees"
        className={`academy-section fees-section ${visibleSections["fees"] ? "visible" : ""}`}
      >
        <header className="section-header">
          <span className="section-badge">Investment</span>
          <h2 className="section-title">Fees Structure</h2>
          <p className="section-subtitle">
            Affordable quality education for your child
          </p>
        </header>

        <div className="fees-tabs">
          <button
            className={`fees-tab ${activeTab === "ECD" ? "active" : ""}`}
            onClick={() => setActiveTab("ECD")}
          >
            ECD (Playgroup - PP2)
          </button>
          <button
            className={`fees-tab ${activeTab === "PRIMARY" ? "active" : ""}`}
            onClick={() => setActiveTab("PRIMARY")}
          >
            Primary (Grade 1-2)
          </button>
        </div>

        <div className="fees-table-wrapper" key={activeTab}>
          <table className="fees-table">
            <thead>
              <tr>
                <th>Details</th>
                <th>Term 1</th>
                <th>Term 2</th>
                <th>Term 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Admission (Once)</td>
                <td colSpan="3">
                  Ksh {activeTab === "ECD" ? "1,000" : "2,000"}
                </td>
              </tr>
              {activeTab === "PRIMARY" && (
                <tr>
                  <td>Activity Fee</td>
                  <td>Ksh 300</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              )}
              <tr>
                <td>Tuition</td>
                <td>Ksh {activeTab === "ECD" ? "8,500" : "10,500"}</td>
                <td>Ksh {activeTab === "ECD" ? "8,500" : "10,500"}</td>
                <td>Ksh {activeTab === "ECD" ? "8,500" : "10,500"}</td>
              </tr>
              <tr className="total-row">
                <td>
                  <strong>Total</strong>
                </td>
                <td>
                  <strong>
                    Ksh {activeTab === "ECD" ? "9,500" : "12,800"}
                  </strong>
                </td>
                <td>
                  <strong>
                    Ksh {activeTab === "ECD" ? "8,500" : "10,500"}
                  </strong>
                </td>
                <td>
                  <strong>
                    Ksh {activeTab === "ECD" ? "8,500" : "10,500"}
                  </strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ textAlign: "center" }}>
          <span className="fees-highlight">🚌 School Transport Available</span>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section
        id="testimonials"
        className={`academy-section testimonials-section ${visibleSections["testimonials"] ? "visible" : ""}`}
      >
        <header className="section-header">
          <span className="section-badge">Reviews</span>
          <h2 className="section-title">Parent's Feedback</h2>
          <p className="section-subtitle">What our parents say about us</p>
        </header>

        <div className="testimonials-grid">
          {[
            {
              quote:
                "I am happy my baby is here and doing well. The nurturing environment is exceptional!",
              name: "Mary W.",
              role: "Parent",
            },
            {
              quote:
                "Good nurturing of the children and positive improvements. The teachers are dedicated.",
              name: "John K.",
              role: "Parent",
            },
            {
              quote:
                "Very happy and proud of the teachers. My child has grown so much.",
              name: "Grace M.",
              role: "Parent",
            },
            {
              quote:
                "The relationship between children and teachers is impressive. A true family atmosphere.",
              name: "Peter O.",
              role: "Parent",
            },
            {
              quote:
                "My child has improved in all areas since joining. The difference is remarkable!",
              name: "Sarah N.",
              role: "Parent",
            },
          ].map((testimonial, index) => (
            <article key={index} className="testimonial-card">
              <div className="testimonial-card__stars">★★★★★</div>
              <p className="testimonial-card__quote">"{testimonial.quote}"</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="testimonial-card__name">{testimonial.name}</p>
                  <p className="testimonial-card__role">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ========== CONTACT ========== */}
      <section
        id="contact"
        className={`academy-section contact-section ${visibleSections["contact"] ? "visible" : ""}`}
      >
        <header className="section-header">
          <span className="section-badge">Get in Touch</span>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">Ready to enroll? Reach out today!</p>
        </header>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-card__icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <p className="contact-card__label">Telephone</p>
            <a href="tel:0512212862" className="contact-card__value">
              051-2212862
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-card__icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
            </div>
            <p className="contact-card__label">Mobile</p>
            <a href="tel:+254773350101" className="contact-card__value">
              +254 773 350 101
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-card__icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
            </div>
            <p className="contact-card__label">Mobile</p>
            <a href="tel:+254774532310" className="contact-card__value">
              +254 774 532 310
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-card__icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <p className="contact-card__label">Email</p>
            <a
              href="mailto:info@lakeviewagc.net"
              className="contact-card__value"
            >
              info@lakeviewagc.net
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Academy
