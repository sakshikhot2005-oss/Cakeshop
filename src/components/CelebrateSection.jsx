export default function CelebrateSection() {
  // Placeholder cake colors to simulate the small thumbnails
  const thumbs = [
    { bg: 'bg-amber-800', label: 'Choco Box' },
    { bg: 'bg-sky-400',   label: 'Blue Dream' },
    { bg: 'bg-purple-400', label: 'Lavender' },
  ]

  return (
    <section className="bg-cream px-6 py-8">
      {/* Header row */}
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-1">
          <h2 className="font-serif text-wineDark text-2xl font-bold uppercase leading-tight tracking-wide">
            Cakes That<br />Celebrate Life
          </h2>
          <a href="/search" className="inline-block mt-3 bg-wineDark text-cream text-[10px] tracking-widest uppercase px-4 py-1.5 rounded-full font-sans hover:bg-wine transition-colors">
            Buy Now
          </a>
        </div>
        {/* Thumbnail row */}
        <div className="flex gap-2">
          {thumbs.map((t) => (
            <div key={t.label} className={`${t.bg} w-16 h-16 rounded-xl shadow-md flex items-end p-1`}>
              <span className="text-white text-[8px] leading-tight font-sans">{t.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Big feature cake */}
      <div className="relative rounded-2xl overflow-hidden bg-choco shadow-xl h-52 flex items-center justify-center mb-4">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/40 to-choco/90"></div>
        {/* Decorative bow */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="text-6xl select-none mb-2">🎂</div>
          <span className="text-cream/70 text-xs font-sans tracking-widest uppercase">Signature Collection</span>
        </div>
        {/* Side cake previews */}
        <div className="absolute right-3 top-3 flex flex-col gap-2">
          <div className="w-14 h-14 rounded-xl bg-amber-700 shadow flex items-center justify-center text-2xl">🎂</div>
          <div className="w-14 h-14 rounded-xl bg-pink-300 shadow flex items-center justify-center text-2xl">🍰</div>
          <div className="w-14 h-14 rounded-xl bg-blue-300 shadow flex items-center justify-center text-2xl">🧁</div>
        </div>
      </div>

      {/* Body text */}
      <p className="text-wineDark/70 text-[11px] leading-relaxed font-sans mb-1">
        We bake all our cakes and sweets fresh in-store daily, using only the finest ingredients. Whether you're planning to have an  celebrations, or offer a cozy space for catch-ups, family time, or a well-loved and loved.
      </p>
      <p className="text-wineDark/70 text-[11px] leading-relaxed font-sans">
        At Dolcino Cakes, every cake is more than just dessert — it's a centrepiece, a memory, and something for everyone to enjoy. From custom wedding cakes and birthday cakes to towering celebration cakes, our cakes are made with love, care, and creativity. We proudly serve the amazing, delivering sweets across Hobart and nearby suburbs. From custom cakes to vegan cakes, we cater for all tastes, styles, and dietary needs.
      </p>
    </section>
  )
}
