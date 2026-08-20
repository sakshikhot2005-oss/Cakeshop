import { useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { allCakes } from '../data/allCakes'
import { useCart } from '../context/CartContext'

function CakeCard({ img, name, price, category }) {
  const navigate = useNavigate()
  const { cartItems, wishlistItems, addToCart, removeFromCart, addToWishlist, removeFromWishlist } = useCart()
  const wishlisted = wishlistItems.some(item => item?.name === name)
  const carted = cartItems.some(item => item?.name === name)

  const handleCart = (e) => {
    e.stopPropagation()
    if (carted) removeFromCart({ img, name, price })
    else addToCart({ img, name, price, category })
  }
  const handleWishlist = (e) => {
    e.stopPropagation()
    if (wishlisted) removeFromWishlist({ img, name, price })
    else addToWishlist({ img, name, price, category })
  }

  const handleCardClick = () => {
    const cakeUrl = name.toLowerCase().replace(/\s+/g, '-')
    navigate(`/cake/${cakeUrl}`)
  }

  return (
    <div 
      onClick={handleCardClick}
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 group flex flex-col cursor-pointer hover:scale-105 transition-transform duration-300"
    >
      <div className="relative bg-white h-64 flex-shrink-0 flex items-center justify-center overflow-hidden rounded-t-xl">
        <div className="absolute top-2 left-0 right-0 flex justify-between px-2 z-10">
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
        <span className="text-[10px] text-[#e91e8c] font-sans uppercase tracking-wider">{category}</span>
        <h3 className="text-gray-800 font-serif text-sm font-semibold text-center leading-snug">{name}</h3>
        <p className="text-[#e91e8c] font-bold text-base font-sans mt-1">Price: {price}</p>
      </div>
    </div>
  )
}

export default function SearchPage() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''

  const results = query.trim()
    ? allCakes.filter(cake =>
        cake.name.toLowerCase().includes(query.toLowerCase()) ||
        cake.category.toLowerCase().includes(query.toLowerCase())
      )
    : allCakes

  return (
    <div className="min-h-screen bg-white font-sans">
      <TopBar />
      <Navbar />

      {/* Banner */}
      <div
        className="relative w-full h-32 sm:h-40 flex flex-col items-center justify-center overflow-hidden px-4 text-center"
        style={{ background: 'radial-gradient(ellipse at 20% 50%, #f5d0d8 0%, #e8b4c0 40%, #d4909f 100%)' }}
      >
        <div className="absolute w-24 h-24 rounded-full bg-yellow-100/60 blur-2xl top-2 left-24"></div>
        <div className="absolute w-28 h-28 rounded-full bg-yellow-50/40 blur-3xl top-0 right-24"></div>
        <h1 className="font-serif text-[#3d1a1a] text-2xl sm:text-3xl font-semibold z-10">
          {query ? 'Search Results' : 'All Cakes'}
        </h1>
        <p className="text-[#3d1a1a]/70 text-sm mt-1 z-10 font-sans">
          {query ? `"${query}"` : 'Explore our complete collection'}
        </p>
      </div>

      {/* Cake Results */}
      <section className="py-8 sm:py-12 px-4 sm:px-10 bg-[#f9f9f9]">
        <div className="max-w-6xl mx-auto">
          {results.length === 0 ? (
            <div className="text-center mt-4 mb-8">
              <p className="text-gray-500 text-lg font-sans mb-2">No cakes found for <span className="text-[#e91e8c] font-semibold">"{query}"</span></p>
              <p className="text-gray-400 text-sm font-sans">Try: Birthday, Engagement, Wedding, Kids, Anniversary...</p>
            </div>
          ) : (
            <>
              <p className="text-gray-500 text-sm font-sans mb-6">
                {query ? (
                  <>Found <span className="text-[#e91e8c] font-semibold">{results.length}</span> results for "<span className="font-semibold">{query}</span>"</>
                ) : (
                  <>Showing <span className="text-[#e91e8c] font-semibold">{results.length}</span> cakes</>
                )}
              </p>
              <div className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-7 mb-8 sm:mb-12">
                {results.map((cake, i) => (
                  <CakeCard key={i} {...cake} />
                ))}
              </div>
            </>
          )}

        </div>
      </section>

      <Footer />
    </div>
  )
}
