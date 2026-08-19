export default function DreamCakeSection() {
  const miniCakes = [
    { emoji: '🍰', label: 'Custom Cake' },
    { emoji: '🎂', label: 'Birthday' },
    { emoji: '🧁', label: 'Cupcake' },
    { emoji: '🍫', label: 'Choco Drip' },
  ]

  return (
    <section className="relative bg-choco overflow-hidden px-6 py-10">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-950/60 via-choco to-wineDeep/80"></div>

      <div className="relative z-10">
        <h2 className="font-serif text-cream text-xl font-bold uppercase tracking-widest leading-tight mb-2">
          Ready To Bring Your<br />Dream Cake To Life?
        </h2>
        <p className="text-cream/60 text-[11px] font-sans leading-relaxed mb-4">
          Get in touch with our friendly team for a free quote or to discuss how we can make something truly special.
        </p>
        <div className="flex gap-3 mb-6">
          <button className="border border-cream/50 text-cream text-[10px] tracking-widest uppercase px-5 py-1.5 rounded-full font-sans hover:bg-cream/10 transition-colors">
            Enquire
          </button>
          <a href="/search" className="bg-cream text-choco text-[10px] tracking-widest uppercase px-5 py-1.5 rounded-full font-sans hover:bg-cream/90 transition-colors font-semibold">
            View All
          </a>
        </div>

        {/* Mini cake cards grid */}
        <div className="grid grid-cols-2 gap-3">
          {miniCakes.map((c) => (
            <div
              key={c.label}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-3 flex flex-col items-center gap-1 shadow border border-white/10 hover:bg-white/15 transition-colors cursor-pointer"
            >
              <span className="text-3xl">{c.emoji}</span>
              <span className="text-cream text-[10px] font-sans tracking-wider uppercase text-center">{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
