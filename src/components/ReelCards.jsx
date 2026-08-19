import { useEffect } from 'react'
import firstLogo from '../assets/firstlogo.jpg'

const reels = [
  'https://www.instagram.com/reel/DOZJs5nE1MY/',
  'https://www.instagram.com/reel/DBa46x2hu6J/',
  'https://www.instagram.com/reel/C_TCPjxBd94/',
  'https://www.instagram.com/reel/C5iT1-qPx-r/',
]

export default function ReelCards() {
  useEffect(() => {
    const load = () => {
      if (window.instgrm) window.instgrm.Embeds.process()
    }
    if (!document.getElementById('ig-embed-script')) {
      const s = document.createElement('script')
      s.id = 'ig-embed-script'
      s.src = 'https://www.instagram.com/embed.js'
      s.async = true
      s.onload = load
      document.body.appendChild(s)
    } else {
      load()
    }
  }, [])

  return (
    <section className="py-12 bg-[#f9f9f9]">
      <div className="w-full mx-auto px-6">
        <div className="grid grid-cols-4 gap-6 items-start">
          {reels.map((url, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
              {/* Logo — small, top-left */}
              <div className="px-3 pt-3 pb-1">
                <img
                  src={firstLogo}
                  alt="Logo"
                  className="h-8 w-auto object-contain"
                />
              </div>

              {/* Instagram embed */}
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={`${url}?utm_source=ig_embed`}
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: '0',
                  borderRadius: '0',
                  boxShadow: 'none',
                  margin: '0',
                  padding: '0',
                  width: '100%',
                  minWidth: '0',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
