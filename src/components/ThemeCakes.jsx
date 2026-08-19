import { useNavigate } from 'react-router-dom'

const cakes = [
  {
    img: 'https://sweetmantra.in/wp-content/uploads/2024/06/Header-Kids-Theme.jpg',
    label: 'Kids Theme',
    link: '/kids-theme',
    price: '₹1,299',
  },
  {
    img: 'https://sweetmantra.in/wp-content/uploads/2024/06/Header-Engagement.jpg',
    label: 'Engagement',
    link: '/engagement',
    price: '₹1,499',
  },
  {
    img: 'https://sweetmantra.in/wp-content/uploads/2024/06/Header-Wedding.jpg',
    label: 'Wedding',
    link: null,
    price: '₹2,499',
  },
  {
    img: 'https://sweetmantra.in/wp-content/uploads/2024/06/Header-Birthday.jpg',
    label: 'Birthday',
    link: null,
    price: '₹1,199',
  },
  {
    img: 'https://sweetmantra.in/wp-content/uploads/2024/06/Header-Baby-Shower.jpg',
    label: 'Baby Shower',
    link: null,
    price: '₹1,399',
  },
  {
    img: 'https://sweetmantra.in/wp-content/uploads/2024/06/Header-Anniversary.jpg',
    label: 'Anniversary',
    link: '/anniversary',
    price: '₹1,599',
  },
  {
    img: 'https://sweetmantra.in/wp-content/uploads/2024/06/Header-Naming-Ceremony.jpg',
    label: 'Naming Ceremony',
    link: '/naming-ceremony',
    price: '₹1,299',
  },
  {
    img: 'https://sweetmantra.in/wp-content/uploads/2024/06/Header-Graduation.jpg',
    label: 'Graduation',
    link: null,
    price: '₹1,299',
  },
]

export default function ThemeCakes() {
  const navigate = useNavigate()

  const handleCakeClick = (label) => {
    // Convert label to URL format
    const cakeUrl = label.toLowerCase().replace(/\s+/g, '-')
    navigate(`/cake/${cakeUrl}`)
  }

  return (
    <section className="bg-[#f0f4f8] py-14 px-10">
      <h2 className="text-center font-serif text-3xl text-[#e91e8c] font-normal mb-10 tracking-wide">
        Customised Theme Cakes
      </h2>

      <div className="grid grid-cols-4 gap-8 max-w-6xl mx-auto">
        {cakes.map((cake, i) => (
          <div
            key={i}
            onClick={() => handleCakeClick(cake.label)}
            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <div className="h-64 bg-white flex items-center justify-center">
              <img
                src={cake.img}
                alt={cake.label}
                className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-300"
                onError={(e) => { e.target.style.display = 'none' }}
              />
            </div>
            <div className="flex flex-col items-center gap-3 py-4 px-4">
              <h3 className="text-gray-800 font-serif text-lg font-semibold">{cake.label}</h3>
              <p className="text-[#e91e8c] font-bold text-lg font-sans">{cake.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
