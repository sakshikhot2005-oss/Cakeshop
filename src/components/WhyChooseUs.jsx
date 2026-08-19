const features = [
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17 8C8 10 5.9 16.17 3.82 19.82L5.71 21l1-1.5A4.49 4.49 0 0 0 8 20c4 0 4-2 8-2s4 2 8 2v-2c-4 0-4-2-8-2c-.96 0-1.7.1-2.38.22C14.5 12.5 16 10.5 17 8z"/>
        <circle cx="12" cy="6" r="3"/>
      </svg>
    ),
    label: 'Pure Veg Cake',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3h-1V1h-2v2H8V1H6v2H5C3.9 3 3 3.9 3 5v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H5V8h14v13zm0-15H5V5h14v1zM7 10h5v5H7z"/>
      </svg>
    ),
    label: 'Since 2024',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2a5 5 0 1 0 0 10A5 5 0 0 0 12 2zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-1 8h2v2h2v2h-2v2h-2v-2H9v-2h2v-2z"/>
        <path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6H4z"/>
      </svg>
    ),
    label: 'Creativity in designs',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.7 1.3 3 3 3s3-1.3 3-3h6c0 1.7 1.3 3 3 3s3-1.3 3-3h2v-5l-3-4zM6 18.5c-.8 0-1.5-.7-1.5-1.5S5.2 15.5 6 15.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"/>
      </svg>
    ),
    label: 'Delivering all over Chikodi, Nipani & Kognoli',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f0f4f8] py-10 sm:py-16 px-4 sm:px-10">
      {/* Heading */}
      <h2 className="text-center font-serif text-2xl sm:text-3xl text-[#e91e8c] font-normal mb-8 sm:mb-12 tracking-wide">
        Why Customers Choose Us ?
      </h2>

      {/* Cards — full width, equal spacing */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 max-w-7xl mx-auto mb-8 sm:mb-12">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-sm flex flex-col items-center justify-center gap-4 sm:gap-8 px-3 sm:px-12 py-8 sm:py-16 min-h-[190px] sm:min-h-[320px] hover:shadow-md transition-shadow"
          >
            {/* Icon circle */}
            <div className="w-16 h-16 sm:w-28 sm:h-28 rounded-full bg-[#f4a7b9] flex items-center justify-center flex-shrink-0">
              <span className="[&>svg]:w-8 [&>svg]:h-8 sm:[&>svg]:w-14 sm:[&>svg]:h-14">{f.icon}</span>
            </div>
            {/* Label */}
            <p className="text-gray-600 text-sm sm:text-lg text-center leading-snug font-sans">
              {f.label}
            </p>
          </div>
        ))}
      </div>

      {/* View All Cakes Button */}
      <div className="flex justify-center">
        <a href="/search" className="bg-[#e91e8c] text-white text-base font-semibold px-8 py-3 rounded-full hover:bg-[#d41872] transition-colors shadow-md hover:shadow-lg font-sans">
          View All Cakes
        </a>
      </div>
    </section>
  )
}
