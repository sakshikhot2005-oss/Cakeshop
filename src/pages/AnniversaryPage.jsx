import { useState } from 'react'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useCart } from '../context/CartContext'

const anniversaryCakes = [
  { img: 'https://i.pinimg.com/1200x/ce/ac/6d/ceac6d0c15b4fdbc95879182219fae9f.jpg', name: 'Anniversary Cake',          price: '₹1,299' },
  { img: 'https://i.pinimg.com/736x/4a/4f/be/4a4fbe4804b99da69fd8a685dd290c06.jpg',  name: 'Floral Anniversary',        price: '₹1,499' },
  { img: 'https://i.pinimg.com/1200x/58/d7/d4/58d7d48add3b102bef557083b665c6f4.jpg', name: 'Heart Tier Cake',           price: '₹1,999' },
  { img: 'https://i.pinimg.com/736x/2d/21/ef/2d21ef1e0a9a9b54300752fd4ea1bf84.jpg',  name: 'Elegant Cream Cake',        price: '₹1,399' },
  { img: 'https://i.pinimg.com/736x/8a/4b/45/8a4b45d2b54840cb778dc1b545369c4a.jpg',  name: 'Rose Gold Anniversary',     price: '₹2,299' },
  { img: 'https://i.pinimg.com/736x/2e/85/fd/2e85fd3d8df40d3ffa73da2fee711983.jpg',  name: 'Classic White Cake',        price: '₹1,799' },
  { img: 'https://i.pinimg.com/1200x/a7/28/4f/a7284f92ec14b8533d95ee585e1da2b3.jpg', name: 'Couple Theme Cake',         price: '₹2,499' },
  { img: 'https://i.pinimg.com/736x/3a/f3/07/3af30702b1b45fa882c8801eb6040d47.jpg',  name: 'Floral Wreath Cake',        price: '₹1,699' },
  { img: 'https://i.pinimg.com/736x/c2/ab/55/c2ab5509d7f94d975d29283512d0024a.jpg',  name: 'Pink Dreamy Cake',          price: '₹1,599' },
  { img: 'https://i.pinimg.com/736x/b3/42/4d/b3424d99f2f3c258f1150326f6b13231.jpg',  name: 'Gold Fondant Cake',         price: '₹2,199' },
  { img: 'https://i.pinimg.com/736x/84/d4/c3/84d4c3adb2e69ccc4032d8251e6f8bf3.jpg',  name: 'Pastel Floral Cake',        price: '₹1,899' },
  { img: 'https://i.pinimg.com/736x/d3/51/00/d35100209f70acec89489f132ba9f9d0.jpg',  name: 'Designer Anniversary Cake', price: '₹2,099' },
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
          onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&auto=format&fit=crop&q=80' }}
        />
      </div>
      <div className="flex flex-col items-center gap-1 px-4 pt-3 pb-4 flex-1 justify-center">
        <h3 className="text-gray-800 font-serif text-sm font-semibold text-center leading-snug">{name}</h3>
        <p className="text-[#e91e8c] font-bold text-base font-sans mt-1">Price: {price}</p>
      </div>
    </div>
  )
}

export default function AnniversaryPage() {
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
        <h1 className="font-serif text-[#3d1a1a] text-3xl font-semibold z-10">Anniversary Cakes</h1>
        <p className="text-[#3d1a1a]/70 text-sm mt-1 z-10 font-sans">Home</p>
      </div>

      {/* Cards Grid — 4 per row */}
      <section className="py-12 px-10 bg-[#f9f9f9]">
        <div className="max-w-6xl mx-auto grid grid-cols-4 gap-7">
          {anniversaryCakes.map((cake, i) => (
            <CakeCard key={i} img={cake.img} name={cake.name} price={cake.price} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
