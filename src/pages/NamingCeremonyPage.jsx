import { useState } from 'react'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useCart } from '../context/CartContext'

const namingCakes = [
  { img: 'https://i.pinimg.com/1200x/e4/81/17/e4811772486b04125f932fc7c4ea2afb.jpg', name: 'Naming Ceremony Cake 1',   price: '₹1,199' },
  { img: 'https://i.pinimg.com/1200x/36/fb/5d/36fb5dfdf0c8a7606e549c9be1549b4c.jpg', name: 'Naming Ceremony Cake 2',   price: '₹1,299' },
  { img: 'https://i.pinimg.com/1200x/65/ef/a4/65efa42627b7eee4ce22335c98637d0a.jpg', name: 'Floral Naming Cake',        price: '₹1,499' },
  { img: 'https://i.pinimg.com/736x/e2/24/f2/e224f211eb4baa99d1911f9e9f4c75f8.jpg',  name: 'Baby Theme Cake',           price: '₹1,199' },
  { img: 'https://i.pinimg.com/1200x/d6/15/74/d61574ccf2b4aa91069883c8d423ab6d.jpg', name: 'Pastel Naming Cake',        price: '₹1,399' },
  { img: 'https://i.pinimg.com/736x/9a/57/40/9a5740ef4e1705840ebdeb64aa2f0f48.jpg',  name: 'Pink Naming Cake',          price: '₹1,299' },
  { img: 'https://i.pinimg.com/736x/cc/d6/17/ccd617eb6d7672ee345b66eb1c32e0a0.jpg',  name: 'Teddy Bear Cake',           price: '₹1,599' },
  { img: 'https://i.pinimg.com/1200x/31/02/71/31027197c4c8b6152c8658c46a836f70.jpg', name: 'Elegant Naming Cake',       price: '₹1,799' },
  { img: 'https://i.pinimg.com/1200x/e3/00/7d/e3007d157d64f383a74b0ad0c15186cc.jpg', name: 'Dreamy Baby Cake',          price: '₹1,499' },
  { img: 'https://i.pinimg.com/736x/63/32/56/633256ff24d957bbabc232bea33f1556.jpg',  name: 'Butterfly Naming Cake',     price: '₹1,299' },
  { img: 'https://i.pinimg.com/1200x/a7/b1/51/a7b151cdf5101a064f8a9ad53de7c097.jpg', name: 'Cloud Baby Cake',           price: '₹1,399' },
  { img: 'https://i.pinimg.com/1200x/49/14/63/491463ef65ada77ad066ee46f6a217cb.jpg', name: 'Star Theme Cake',           price: '₹1,199' },
  { img: 'https://i.pinimg.com/736x/1b/60/ad/1b60adf13a0d253ca487be56747c52f0.jpg',  name: 'Rainbow Baby Cake',         price: '₹1,499' },
  { img: 'https://i.pinimg.com/736x/4f/48/2b/4f482bd4fb6f02fb13caf66a1c4ccdd2.jpg',  name: 'Floral Crown Cake',         price: '₹1,699' },
  { img: 'https://i.pinimg.com/736x/42/68/7b/42687b90440c237774bb168ffad1d59d.jpg',  name: 'Cute Animal Cake',          price: '₹1,299' },
  { img: 'https://i.pinimg.com/736x/09/46/e5/0946e51b7c52dcc0e7acb2229afa9f22.jpg',  name: 'Blue Baby Cake',            price: '₹1,199' },
  { img: 'https://i.pinimg.com/736x/40/38/ca/4038cae1911aeb943e2fac642e2c4476.jpg',  name: 'Sweet Naming Cake',         price: '₹1,399' },
  { img: 'https://i.pinimg.com/1200x/39/f1/a1/39f1a1b02239e9d6e1ddae362d916952.jpg', name: 'Premium Naming Cake',       price: '₹1,899' },
  { img: 'https://i.pinimg.com/736x/48/e5/c3/48e5c388490cdeedac35beaa57ae9c9e.jpg',  name: 'Jungle Baby Cake',          price: '₹1,499' },
  { img: 'https://i.pinimg.com/736x/1d/a0/7d/1da07de479e0395f2d2aeb689742d370.jpg',  name: 'Unicorn Baby Cake',         price: '₹1,599' },
]

function CakeCard({ img, name, price }) {
  const [wishlisted, setWishlisted] = useState(false)
  const [carted, setCarted]         = useState(false)
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
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 group flex flex-col">
      <div className="relative bg-white h-64 flex-shrink-0 flex items-center justify-center overflow-hidden rounded-t-xl">
        <div className="absolute top-2 left-0 right-0 flex justify-between px-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button onClick={handleCart} title="Add to Cart"
            className={`w-9 h-9 rounded-full shadow-md flex items-center justify-center transition-all
              ${carted ? 'bg-[#e91e8c] text-white' : 'bg-white text-gray-500 hover:bg-[#e91e8c] hover:text-white'}`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
          <button onClick={handleWishlist} title="Wishlist"
            className={`w-9 h-9 rounded-full shadow-md flex items-center justify-center transition-all
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
      <div className="flex flex-col items-center gap-1 px-4 pt-3 pb-4 flex-1 justify-center">
        <h3 className="text-gray-800 font-serif text-sm font-semibold text-center leading-snug">{name}</h3>
        <p className="text-[#e91e8c] font-bold text-base font-sans mt-1">Price: {price}</p>
      </div>
    </div>
  )
}

export default function NamingCeremonyPage() {
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
        <h1 className="font-serif text-[#3d1a1a] text-3xl font-semibold z-10">Naming Ceremony Cakes</h1>
        <p className="text-[#3d1a1a]/70 text-sm mt-1 z-10 font-sans">Home</p>
      </div>

      {/* Cards Grid — 4 per row */}
      <section className="py-8 sm:py-12 px-4 sm:px-10 bg-[#f9f9f9]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-7">
          {namingCakes.map((cake, i) => (
            <CakeCard key={i} img={cake.img} name={cake.name} price={cake.price} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
