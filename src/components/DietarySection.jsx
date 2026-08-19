export default function DietarySection() {
  const options = [
    { bg: 'bg-green-100',  border: 'border-green-400', icon: '🌿', label: 'Gluten Free', sub: 'Available' },
    { bg: 'bg-yellow-50',  border: 'border-yellow-400', icon: '🥚', label: 'Egg Free',    sub: 'Options' },
    { bg: 'bg-pink-50',    border: 'border-pink-400',   icon: '🌸', label: 'Vegan',       sub: 'Friendly' },
    { bg: 'bg-blue-50',    border: 'border-blue-400',   icon: '🥛', label: 'Dairy Free',  sub: 'Options' },
  ]

  const galleryItems = [
    { emoji: '🍪', bg: 'bg-amber-100' },
    { emoji: '🎂', bg: 'bg-rose-100' },
    { emoji: '🌸', bg: 'bg-pink-100' },
  ]

  return (
    <section className="bg-cream px-6 py-10">
      <h2 className="font-serif text-wineDark text-2xl font-bold uppercase tracking-widest text-center mb-2">
        Special Dietary Options
      </h2>
      <div className="flex justify-center mb-6">
        <button className="bg-caramel text-white text-[10px] tracking-widest uppercase px-5 py-1.5 rounded-full font-sans hover:bg-amber-600 transition-colors shadow">
          All Taste Buds Are Welcome
        </button>
      </div>

      {/* Strawberry feature cake area */}
      <div className="relative flex items-center justify-center mb-6 h-52">
        {/* Backdrop glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-44 h-44 rounded-full bg-wine/10 blur-2xl"></div>
        </div>

        {/* Center cake */}
        <div className="relative z-10 text-8xl select-none drop-shadow-xl">🍰</div>

        {/* Floating strawberries */}
        <div className="absolute top-2 left-8 text-2xl select-none">🍓</div>
        <div className="absolute top-4 right-6 text-xl select-none">🍓</div>
        <div className="absolute bottom-4 left-6 text-xl select-none">🍓</div>
        <div className="absolute bottom-2 right-8 text-2xl select-none">🍓</div>

        {/* Option cards overlaid */}
        <div className="absolute -left-2 top-4 grid grid-cols-1 gap-2">
          {options.slice(0,2).map((o) => (
            <div key={o.label} className={`${o.bg} border ${o.border} rounded-xl px-3 py-2 shadow-md flex items-center gap-2 min-w-[110px]`}>
              <span className="text-xl">{o.icon}</span>
              <div>
                <p className="text-wineDark text-[10px] font-bold font-sans uppercase leading-tight">{o.label}</p>
                <p className="text-wineDark/60 text-[9px] font-sans">{o.sub}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute -right-2 top-4 grid grid-cols-1 gap-2">
          {options.slice(2).map((o) => (
            <div key={o.label} className={`${o.bg} border ${o.border} rounded-xl px-3 py-2 shadow-md flex items-center gap-2 min-w-[110px]`}>
              <span className="text-xl">{o.icon}</span>
              <div>
                <p className="text-wineDark text-[10px] font-bold font-sans uppercase leading-tight">{o.label}</p>
                <p className="text-wineDark/60 text-[9px] font-sans">{o.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Body copy */}
      <p className="text-wineDark/70 text-[11px] leading-relaxed font-sans text-center mb-8">
        We believe every dessert-lover cake, no matter their diet. That's why we offer inclusive, delicious options.
        Every bite is just as delightful as our classic cakes.
      </p>

      {/* Gallery strip */}
      <div className="grid grid-cols-3 gap-3">
        {galleryItems.map((g, i) => (
          <div
            key={i}
            className={`${g.bg} rounded-2xl h-24 flex items-center justify-center text-5xl shadow-md hover:scale-105 transition-transform cursor-pointer`}
          >
            {g.emoji}
          </div>
        ))}
      </div>
    </section>
  )
}
