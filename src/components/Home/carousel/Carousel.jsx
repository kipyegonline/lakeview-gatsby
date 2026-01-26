import React, { useState, useEffect, useCallback, useRef } from "react"

export const ReactSlider = ({
  images = [],
  height = "h-64 md:h-80 lg:h-96",
  autoPlayInterval = 3000,
  transitionDuration = 500,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const containerRef = useRef(null)

  // Responsive slides count
  const getVisibleSlides = useCallback(() => {
    if (typeof window === "undefined") return 3
    if (window.innerWidth < 640) return 1
    if (window.innerWidth < 1024) return 2
    return 3
  }, [])

  const [visibleSlides, setVisibleSlides] = useState(3)

  useEffect(() => {
    const handleResize = () => setVisibleSlides(getVisibleSlides())
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [getVisibleSlides])

  const maxIndex = Math.max(0, images.length - visibleSlides)

  const goToNext = useCallback(() => {
    if (isTransitioning || images.length <= visibleSlides) return
    setIsTransitioning(true)
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1))
    setTimeout(() => setIsTransitioning(false), transitionDuration)
  }, [
    isTransitioning,
    maxIndex,
    transitionDuration,
    images.length,
    visibleSlides,
  ])

  const goToPrev = useCallback(() => {
    if (isTransitioning || images.length <= visibleSlides) return
    setIsTransitioning(true)
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1))
    setTimeout(() => setIsTransitioning(false), transitionDuration)
  }, [
    isTransitioning,
    maxIndex,
    transitionDuration,
    images.length,
    visibleSlides,
  ])

  // Auto-play functionality
  useEffect(() => {
    if (isHovering || images.length <= visibleSlides) return
    const interval = setInterval(goToNext, autoPlayInterval)
    return () => clearInterval(interval)
  }, [isHovering, goToNext, autoPlayInterval, images.length, visibleSlides])

  // Touch handlers for mobile swipe
  const minSwipeDistance = 50

  const onTouchStart = e => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = e => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (Math.abs(distance) > minSwipeDistance) {
      distance > 0 ? goToNext() : goToPrev()
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = e => {
      if (!isHovering) return
      if (e.key === "ArrowLeft") goToPrev()
      if (e.key === "ArrowRight") goToNext()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isHovering, goToNext, goToPrev])
  console.log(images, "mages")
  if (!images.length) return "no images to show"

  const slideWidth = 100 / visibleSlides
  const translateX = currentIndex * slideWidth

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50 shadow-lg"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Main carousel track */}
      <div
        className={`flex ${height}`}
        style={{
          transform: `translateX(-${translateX}%)`,
          transition: `transform ${transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 p-2"
            style={{ width: `${slideWidth}%` }}
          >
            <div className="group relative h-full overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
              <img
                src={image.pic}
                alt={
                  typeof image === "string"
                    ? `Slide ${index + 1}`
                    : image.alt || `Slide ${index + 1}`
                }
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Caption if available */}
              {typeof image === "object" && image.caption && (
                <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-gradient-to-t from-purple-900/90 to-purple-800/70 p-3 text-white transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-sm font-medium">{image.caption}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows - only show if there are more images than visible */}
      {images.length > visibleSlides && (
        <>
          <button
            onClick={goToPrev}
            className={`absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-purple-600 hover:text-white hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              isHovering
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-4"
            }`}
            aria-label="Previous slide"
          >
            <svg
              className="h-5 w-5"
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
          <button
            onClick={goToNext}
            className={`absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-purple-600 hover:text-white hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              isHovering
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-4"
            }`}
            aria-label="Next slide"
          >
            <svg
              className="h-5 w-5"
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
        </>
      )}

      {/* Progress indicators */}
      {images.length > visibleSlides && (
        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true)
                  setCurrentIndex(index)
                  setTimeout(
                    () => setIsTransitioning(false),
                    transitionDuration,
                  )
                }
              }}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                currentIndex === index
                  ? "w-6 bg-purple-600"
                  : "w-2 bg-white/70 hover:bg-white"
              }`}
              aria-label={`Go to slide group ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Pause indicator */}
      {isHovering && images.length > visibleSlides && (
        <div className="absolute right-3 top-3 z-10 flex items-center gap-1.5 rounded-full bg-black/50 px-2 py-1 text-xs text-white backdrop-blur-sm">
          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
          <span>Paused</span>
        </div>
      )}
    </div>
  )
}
