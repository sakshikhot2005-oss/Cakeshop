import { useState, useEffect } from 'react'

const slides = [
  {
    img: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=1200&auto=format&fit=crop&q=90',
    alt: 'Pink fondant cake with cream swirls',
    bg: 'radial-gradient(ellipse at 70% 50%, #e8b4c0 0%, #d4909f 40%, #c07888 100%)',
    blob1: 'bg-yellow-200/50',
    blob2: 'bg-yellow-100/40',
  },
  {
    img: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1200&auto=format&fit=crop&q=90',
    alt: 'Elegant white wedding cake with flowers',
    bg: 'radial-gradient(ellipse at 70% 50%, #d4c5f9 0%, #b39ddb 40%, #9575cd 100%)',
    blob1: 'bg-purple-200/50',
    blob2: 'bg-pink-100/40',
  },
  {
    img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&auto=format&fit=crop&q=90',
    alt: 'Chocolate drip birthday cake with berries',
    bg: 'radial-gradient(ellipse at 70% 50%, #d4a574 0%, #b8860b 40%, #8B4513 100%)',
    blob1: 'bg-yellow-300/50',
    blob2: 'bg-amber-200/40',
  },
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      goToNext()
    }, 4000)
    return () => clearInterval(timer)
  }, [current])

  const goToNext = () => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(prev => (prev + 1) % slides.length)
      setAnimating(false)
    }, 400)
  }

  const goToPrev = () => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(prev => (prev - 1 + slides.length) % slides.length)
      setAnimating(false)
    }, 400)
  }

  const goTo = (index) => {
    if (animating || index === current) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(index)
      setAnimating(false)
    }, 400)
  }

  const slide = slides[current]

  return (
    <section
      className="relative w-full overflow-hidden flex items-center transition-all duration-700"
      style={{
        minHeight: '620px',
        background: slide.bg,
        transition: 'background 0.7s ease',
      }}
    >
      {/* Bokeh glow blobs */}
      <div className={`absolute w-40 h-40 rounded-full ${slide.blob1} blur-3xl top-10 left-36 pointer-events-none transition-all duration-700`}></div>
      <div className={`absolute w-28 h-28 rounded-full ${slide.blob2} blur-2xl top-28 left-60 pointer-events-none transition-all duration-700`}></div>
      <div className="absolute w-24 h-24 rounded-full bg-white/10 blur-2xl bottom-16 left-72 pointer-events-none"></div>

      {/* Left — text content */}
      <div className="relative z-10 flex flex-col justify-center pl-16 pr-8 py-16 max-w-[480px]">
        <h1 className="font-serif text-white text-4xl md:text-5xl font-semibold leading-tight mb-5 drop-shadow">
          Customised Cake<br />
          For Any Occasion<br />
          <span className="text-[#e91e8c]">At Our Shop!!</span>
        </h1>

        <p className="text-white/90 text-sm leading-relaxed mb-8 max-w-xs font-sans">
          Every cake is homemade, eggless and personally handcrafted by owners Seema and Jatin
        </p>

        <button className="self-start bg-[#e91e8c] hover:bg-[#c2185b] transition-colors text-white text-sm font-semibold px-8 py-3 rounded-full shadow-lg">
          View All Cakes
        </button>

        {/* Dot indicators */}
        <div className="flex items-center gap-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'bg-white w-6 h-2.5'
                  : 'bg-white/40 w-2.5 h-2.5 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right — cake image with fade transition */}
      <div className="absolute right-0 top-0 bottom-0 w-[60%] pointer-events-none overflow-hidden">
        <img
          key={current}
          src={slide.img}
          alt={slide.alt}
          className={`h-full w-full object-cover object-center transition-opacity duration-500 ${
            animating ? 'opacity-0' : 'opacity-100'
          }`}
          style={{ objectPosition: 'center center' }}
        />
      </div>

      {/* Prev / Next arrow buttons */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white w-9 h-9 rounded-full flex items-center justify-center transition-all shadow"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white w-9 h-9 rounded-full flex items-center justify-center transition-all shadow"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  )
}
