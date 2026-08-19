import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useCart } from '../context/CartContext'

const kidsCakes = [
  { img: 'https://sweetmantra.in/wp-content/uploads/2024/06/Header-1st-Birthday-Boy.jpg',   name: '1st Birthday Boy' },
  { img: 'https://sweetmantra.in/wp-content/uploads/2024/06/Header-1st-Birthday-Girl.png',  name: '1st Birthday Girl' },
  { img: 'https://sweetmantra.in/wp-content/uploads/2024/06/Header-6-months.jpg',            name: '6 Months' },
  { img: 'https://sweetmantra.in/wp-content/uploads/2024/06/Header-Cake-for-Twins.png',      name: 'Twins' },
  { img: 'https://sweetmantra.in/wp-content/uploads/2024/06/Header-Jungle.jpg',              name: 'Jungle' },
  { img: 'https://sweetmantra.in/wp-content/uploads/2024/06/Header-Superhero.jpg',           name: 'Superhero' },
  { img: 'https://sweetmantra.in/wp-content/uploads/2024/06/Header-Boss-Baby.jpg',           name: 'Boss Baby' },
  { img: 'https://sweetmantra.in/wp-content/uploads/2024/06/Header-Vehicles.jpg',            name: 'Vehicles' },
  { img: 'https://sweetmantra.in/wp-content/uploads/2024/06/Header-Sports.jpg',              name: 'Sports' },
  { img: 'https://sweetmantra.in/wp-content/uploads/2024/06/Header-Mickey-Mouse.jpg',        name: 'Mickey Mouse' },
  { img: 'https://sweetmantra.in/wp-content/uploads/2024/06/Header-Unicorn.jpg',             name: 'Unicorn' },
  { img: 'https://sweetmantra.in/wp-content/uploads/2024/06/Header-Baby-Shark.jpg',          name: 'Baby Shark' },
  { img: 'https://sweetmantra.in/wp-content/uploads/2024/06/Header-Rainbow.jpg',             name: 'Rainbow' },
  { img: 'https://sweetmantra.in/wp-content/uploads/2024/06/Header-Cartoon.jpg',             name: 'Cartoon' },
  { img: 'https://sweetmantra.in/wp-content/uploads/2024/06/Header-Baby-Theme.jpg',          name: 'Baby Theme' },
  { img: 'https://sweetmantra.in/wp-content/uploads/2024/06/Header-Barbie.jpg',              name: 'Barbie' },
  { img: 'https://sweetmantra.in/wp-content/uploads/2024/06/Header-Books.jpg',               name: 'Books' },
  { img: 'https://sweetmantra.in/wp-content/uploads/2024/06/Header-Butterfly.jpg',           name: 'Butterfly' },
  { img: 'https://sweetmantra.in/wp-content/uploads/2024/06/Header-Balloon.jpg',             name: 'Balloon' },
  { img: 'https://sweetmantra.in/wp-content/uploads/2024/06/Header-Playstation.jpg',         name: 'Gaming' },
  { img: 'https://sweetmantra.in/wp-content/uploads/2024/06/Header-Fruits.jpg',              name: 'Fruits' },
  { img: 'https://sweetmantra.in/wp-content/uploads/2024/06/Header-Painting.jpg',            name: 'Painting' },
]

function CakeCard({ img, name, price = '' }) {
  const navigate = useNavigate()
  const [wishlisted, setWishlisted] = useState(false)
  const [carted, setCarted] = useState(false)
  const { addToCart, removeFromCart, addToWishlist, removeFromWishlist } = useCart()

  const handleCart = () => {
    if (carted) { removeFromCart({ img, name, price }); setCarted(false) }
    else { addToCart({ img, name, price }); setCarted(true) }
  }
  const handleWishlist = () => {
    if (wishlisted) { removeFromWishlist({ img, name, price }); setWishlisted(false) }
    else { addToWishlist({ img, name, price }); setWishlisted(true) }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow border border-gray-100 group">
      <div className="relative bg-white h-64 flex-shrink-0 flex items-center justify-center">
        <div className="absolute top-2 left-0 right-0 flex justify-between px-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button onClick={handleCart} title="Add to Cart"
            className={`w-9 h-9 rounded-full shadow flex items-center justify-center transition-all
              ${carted ? 'bg-[#e91e8c] text-white' : 'bg-white text-gray-500 hover:bg-[#e91e8c] hover:text-white'}`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
          <button onClick={handleWishlist} title="Add to Wishlist"
            className={`w-9 h-9 rounded-full shadow flex items-center justify-center transition-all
              ${wishlisted ? 'bg-red-500 text-white' : 'bg-white text-gray-500 hover:bg-red-500 hover:text-white'}`}>
            <svg className="w-4 h-4" fill={wishlisted ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
        <img src={img} alt={name}
          className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
          onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&auto=format&fit=crop&q=80' }}
        />
      </div>
      <div className="px-4 pt-3 pb-1 text-center">
        <h3 className="text-gray-800 font-serif text-base font-semibold">{name}</h3>
      </div>
      <div className="px-4 pb-4 pt-2 flex justify-center">
        <button
          onClick={() => navigate(`/cake/${name.toLowerCase().replace(/\s+/g, '-')}`)}
          className="border border-[#e91e8c] text-[#e91e8c] text-xs px-6 py-1.5 rounded-sm hover:bg-[#e91e8c] hover:text-white transition-colors font-sans"
        >
          View All Cakes
        </button>
      </div>
    </div>
  )
}

export default function KidsThemePage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <TopBar />
      <Navbar />

      {/* Hero Banner */}
      <div
        className="relative w-full h-40 flex flex-col items-center justify-center overflow-hidden"
        style={{ background: 'radial-gradient(ellipse at 20% 50%, #f5d0d8 0%, #e8b4c0 40%, #d4909f 100%)' }}
      >
        <div className="absolute w-24 h-24 rounded-full bg-yellow-100/60 blur-2xl top-2 left-24"></div>
        <div className="absolute w-20 h-20 rounded-full bg-yellow-100/50 blur-2xl top-6 left-96"></div>
        <div className="absolute w-16 h-16 rounded-full bg-white/30 blur-2xl bottom-4 right-40"></div>
        <div className="absolute w-28 h-28 rounded-full bg-yellow-50/40 blur-3xl top-0 right-24"></div>
        <h1 className="font-serif text-[#3d1a1a] text-3xl font-semibold z-10">Kids Theme Cakes</h1>
        <p className="text-[#3d1a1a]/70 text-sm mt-1 z-10 font-sans">Home</p>
      </div>

      {/* Cards Grid */}
      <section className="py-8 sm:py-12 px-4 sm:px-10 bg-[#f9f9f9]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-7">
          {kidsCakes.map((cake, i) => (
            <CakeCard key={i} img={cake.img} name={cake.name} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
