import React, { useState } from "react"

const OnlineServices = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  const platforms = [
    {
      id: "youtube",
      name: "YouTube",
      description: "Watch our live streams, sermons & worship sessions",
      url: "https://www.youtube.com/@lakeviewagcchurchnakuru9014/streams",
      cta: "Watch on YouTube",
      icon: (
        <svg viewBox="0 0 24 24" className="platform-icon" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      gradient: "linear-gradient(135deg, #ff0000 0%, #cc0000 100%)",
      shadowColor: "rgba(255, 0, 0, 0.4)",
    },
    {
      id: "facebook",
      name: "Facebook",
      description: "Join our community & watch live services",
      url: "https://www.facebook.com/lakeviewagcNakuru/live_videos",
      cta: "Watch on Facebook",
      icon: (
        <svg viewBox="0 0 24 24" className="platform-icon" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      gradient: "linear-gradient(135deg, #1877f2 0%, #0d5bc4 100%)",
      shadowColor: "rgba(24, 119, 242, 0.4)",
    },
  ]

  return (
    <section className="online-services">
      <style>{`
        .online-services {
          padding: var(--space-16) var(--space-6);
          background: linear-gradient(180deg, var(--color-gray-50) 0%, var(--color-white) 100%);
          min-height: 60vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .online-services__header {
          text-align: center;
          margin-bottom: var(--space-12);
          animation: fadeInUp 0.8s ease forwards;
        }

        .online-services__badge {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-2) var(--space-4);
          background: var(--gradient-primary);
          border-radius: var(--radius-full);
          color: var(--color-white);
          font-size: var(--text-sm);
          font-weight: var(--font-semibold);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: var(--space-4);
          animation: scaleIn 0.6s ease forwards;
        }

        .online-services__badge::before {
          content: "";
          width: 8px;
          height: 8px;
          background: var(--color-white);
          border-radius: 50%;
          animation: pulse 1.5s infinite;
        }

        .online-services__title {
          font-family: var(--font-display);
          font-size: clamp(var(--text-3xl), 5vw, var(--text-5xl));
          font-weight: var(--font-extrabold);
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 var(--space-4);
          line-height: 1.2;
        }

        .online-services__subtitle {
          font-size: var(--text-lg);
          color: var(--color-gray-600);
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .online-services__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: var(--space-8);
          width: 100%;
          max-width: 900px;
        }

        .platform-card {
          position: relative;
          background: var(--color-white);
          border-radius: var(--radius-2xl);
          padding: var(--space-8);
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          border: 1px solid var(--color-gray-200);
          overflow: hidden;
          animation: fadeInUp 0.8s ease forwards;
          animation-delay: var(--delay, 0s);
          opacity: 0;
        }

        .platform-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: var(--card-gradient);
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: 0;
        }

        .platform-card::after {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 60%);
          transform: scale(0);
          transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          z-index: 1;
        }

        .platform-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 30px 60px -15px var(--card-shadow);
          border-color: transparent;
        }

        .platform-card:hover::before {
          opacity: 1;
        }

        .platform-card:hover::after {
          transform: scale(1);
        }

        .platform-card:hover .platform-card__content {
          color: var(--color-white);
        }

        .platform-card:hover .platform-icon-wrapper {
          transform: scale(1.1) rotate(5deg);
          background: rgba(255, 255, 255, 0.2);
        }

        .platform-card:hover .platform-icon {
          color: var(--color-white);
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
        }

        .platform-card:hover .platform-card__description {
          color: rgba(255, 255, 255, 0.9);
        }

        .platform-card:hover .platform-card__cta {
          background: var(--color-white);
          color: var(--color-gray-900);
          transform: translateX(5px);
        }

        .platform-card:hover .cta-arrow {
          transform: translateX(6px);
        }

        .platform-card__content {
          position: relative;
          z-index: 2;
          transition: color 0.5s ease;
        }

        .platform-icon-wrapper {
          width: 72px;
          height: 72px;
          border-radius: var(--radius-xl);
          background: var(--color-gray-100);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--space-6);
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .platform-icon {
          width: 36px;
          height: 36px;
          transition: all 0.5s ease;
        }

        .youtube-card .platform-icon {
          color: #ff0000;
        }

        .facebook-card .platform-icon {
          color: #1877f2;
        }

        .platform-card__name {
          font-family: var(--font-display);
          font-size: var(--text-2xl);
          font-weight: var(--font-bold);
          margin: 0 0 var(--space-2);
        }

        .platform-card__description {
          font-size: var(--text-base);
          color: var(--color-gray-500);
          margin: 0 0 var(--space-6);
          line-height: 1.5;
          transition: color 0.5s ease;
        }

        .platform-card__cta {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-3) var(--space-5);
          background: var(--gradient-primary);
          color: var(--color-white);
          font-size: var(--text-sm);
          font-weight: var(--font-semibold);
          border-radius: var(--radius-full);
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          border: none;
          cursor: pointer;
        }

        .cta-arrow {
          transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }

        /* Floating decorative elements */
        .online-services__decoration {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.5;
          pointer-events: none;
          animation: float 6s ease-in-out infinite;
        }

        .decoration-1 {
          width: 300px;
          height: 300px;
          background: var(--color-primary-light);
          top: -100px;
          right: -100px;
          animation-delay: 0s;
        }

        .decoration-2 {
          width: 250px;
          height: 250px;
          background: var(--color-secondary-light);
          bottom: -50px;
          left: -100px;
          animation-delay: 2s;
        }

        @media (max-width: 768px) {
          .online-services {
            padding: var(--space-12) var(--space-4);
          }

          .online-services__grid {
            grid-template-columns: 1fr;
            gap: var(--space-6);
          }

          .platform-card {
            padding: var(--space-6);
          }

          .platform-icon-wrapper {
            width: 60px;
            height: 60px;
          }

          .platform-icon {
            width: 28px;
            height: 28px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .platform-card,
          .platform-icon-wrapper,
          .platform-card__cta,
          .cta-arrow {
            transition: none;
          }
          
          .online-services__decoration {
            animation: none;
          }
        }
      `}</style>

      {/* Decorative background elements */}
      <div
        className="online-services__decoration decoration-1"
        aria-hidden="true"
      />
      <div
        className="online-services__decoration decoration-2"
        aria-hidden="true"
      />

      <header className="online-services__header">
        <span className="online-services__badge">Live Streaming</span>
        <h2 className="online-services__title">Join Us Online</h2>
        <p className="online-services__subtitle">
          Can't make it in person? Experience our worship services from anywhere
          in the world.
        </p>
      </header>

      <div className="online-services__grid">
        {platforms.map((platform, index) => (
          <article
            key={platform.id}
            className={`platform-card ${platform.id}-card`}
            style={{
              "--delay": `${0.2 + index * 0.15}s`,
              "--card-gradient": platform.gradient,
              "--card-shadow": platform.shadowColor,
            }}
            onMouseEnter={() => setHoveredCard(platform.id)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() =>
              window.open(platform.url, "_blank", "noopener,noreferrer")
            }
            role="button"
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === " ") {
                window.open(platform.url, "_blank", "noopener,noreferrer")
              }
            }}
            aria-label={`Open ${platform.name}`}
          >
            <div className="platform-card__content">
              <div className="platform-icon-wrapper">{platform.icon}</div>
              <h3 className="platform-card__name">{platform.name}</h3>
              <p className="platform-card__description">
                {platform.description}
              </p>
              <span className="platform-card__cta">
                {platform.cta}
                <svg
                  className="cta-arrow"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default OnlineServices
