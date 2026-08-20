import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useCart } from '../context/CartContext'

const engagementCakes = [
  { img: 'https://sweetmantra.in/wp-content/uploads/2024/07/1526.jpg',                                                                        name: 'Engagement Cake',            price: '₹1,299' },
  { img: 'https://sweetmantra.in/wp-content/uploads/2024/07/1296.jpg',                                                                        name: 'Designer Engagement',        price: '₹1,499' },
  { img: 'https://sweetmantra.in/wp-content/uploads/2025/04/3-tier-Engagement-cake-with-flowers.jpg',                                         name: '3 Tier Floral Engagement',   price: '₹2,999' },
  { img: 'https://sweetmantra.in/wp-content/uploads/2024/07/78.jpg',                                                                          name: 'Classic Engagement',         price: '₹1,199' },
  { img: 'https://sweetmantra.in/wp-content/uploads/2025/12/3-Layer-Engagement-cream-cake-with-flowers.jpg',                                  name: '3 Layer Cream Floral',       price: '₹2,499' },
  { img: 'https://sweetmantra.in/wp-content/uploads/2026/05/3-tier-Wedding-Reception-cake-with-cream-flowers.jpg',                            name: 'Wedding Reception Cake',     price: '₹3,499' },
  { img: 'https://sweetmantra.in/wp-content/uploads/2024/07/80.jpg',                                                                          name: 'Elegant Ring Cake',          price: '₹1,399' },
  { img: 'https://sweetmantra.in/wp-content/uploads/2024/07/1460.jpg',                                                                        name: 'Couple Theme Cake',          price: '₹1,599' },
  { img: 'https://sweetmantra.in/wp-content/uploads/2025/08/Heart-shape-double-layer-engagement-cake-with-bride-and-groom-figurines.jpg',     name: 'Heart Shape Bride & Groom',  price: '₹2,799' },
  { img: 'https://sweetmantra.in/wp-content/uploads/2025/01/3-layer-cream-cake-for-Engagement.jpg',                                           name: '3 Layer Cream Cake',         price: '₹2,299' },
  { img: 'https://sweetmantra.in/wp-content/uploads/2024/07/77.jpg',                                                                          name: 'Floral Engagement Cake',     price: '₹1,299' },
  { img: 'https://sweetmantra.in/wp-content/uploads/2024/07/1076.jpg',                                                                        name: 'Premium Engagement',         price: '₹1,799' },
  { img: 'https://sweetmantra.in/wp-content/uploads/2024/07/76.jpg',                                                                          name: 'Simple Engagement Cake',     price: '₹999'   },
  { img: 'https://sweetmantra.in/wp-content/uploads/2024/07/75.jpg',                                                                          name: 'Gold Engagement Cake',       price: '₹1,699' },
  { img: 'https://sweetmantra.in/wp-content/uploads/2025/07/2-layer-No-fondant-Engagement-cake.jpg',                                          name: '2 Layer No Fondant',         price: '₹1,499' },
  { img: 'https://sweetmantra.in/wp-content/uploads/2025/03/Pink-Engagement-cream-cake-with-flowers.jpg',                                     name: 'Pink Floral Cream Cake',     price: '₹1,899' },
]

function CakeCard({ img, name, price }) {
  const { cartItems, wishlistItems, addToCart, removeFromCart, addToWishlist, removeFromWishlist } = useCart()
  const carted = cartItems.some(item => item?.name === name)
  const wishlisted = wishlistItems.some(item => item?.name === name)

  const handleCart = () => {
    if (carted) removeFromCart({ img, name, price })
    else addToCart({ img, name, price })
  }
  const handleWishlist = () => {
    if (wishlisted) removeFromWishlist({ img, name, price })
    else addToWishlist({ img, name, price })
  }

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow border border-gray-100 group flex flex-col">

      {/* Image — fixed height, object-contain = no crop, white bg */}
      <div className="relative overflow-hidden bg-white h-64 flex-shrink-0">

        {/* Icons — visible on hover */}
        <div className="absolute top-2 left-0 right-0 flex justify-between px-2 z-10">
          {/* Add to Cart — left */}
          <button
            onClick={handleCart}
            title="Add to Cart"
            className={`w-9 h-9 rounded-full shadow-md flex items-center justify-center transition-all
              ${carted ? 'bg-[#e91e8c] text-white' : 'bg-white text-gray-500 hover:bg-[#e91e8c] hover:text-white'}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>

          {/* Wishlist — right */}
          <button
            onClick={handleWishlist}
            title="Wishlist"
            className={`w-9 h-9 rounded-full shadow-md flex items-center justify-center transition-all
              ${wishlisted ? 'bg-red-500 text-white' : 'bg-white text-gray-500 hover:bg-red-500 hover:text-white'}`}
          >
            <svg className="w-4 h-4" fill={wishlisted ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>

        {/* Full image — no crop, contain inside fixed box */}
        <img
          src={img}
          alt={name}
          className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&auto=format&fit=crop&q=80'
          }}
        />
      </div>

      {/* Name + Price */}
      <div className="flex flex-col items-center gap-1 px-4 pt-3 pb-4 flex-1 justify-center">
        <h3 className="text-gray-800 font-serif text-sm font-semibold text-center leading-snug">{name}</h3>
        <p className="text-[#e91e8c] font-bold text-base font-sans mt-1">Price: {price}</p>
      </div>
    </div>
  )
}

export default function EngagementPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <TopBar />
      <Navbar />

      {/* Hero Banner */}
      <div
        className="relative w-full h-32 sm:h-40 flex flex-col items-center justify-center overflow-hidden px-4 text-center"
        style={{ background: 'radial-gradient(ellipse at 20% 50%, #f5d0d8 0%, #e8b4c0 40%, #d4909f 100%)' }}
      >
        <div className="absolute w-24 h-24 rounded-full bg-yellow-100/60 blur-2xl top-2 left-24"></div>
        <div className="absolute w-20 h-20 rounded-full bg-yellow-100/50 blur-2xl top-6 left-96"></div>
        <div className="absolute w-16 h-16 rounded-full bg-white/30 blur-2xl bottom-4 right-40"></div>
        <div className="absolute w-28 h-28 rounded-full bg-yellow-50/40 blur-3xl top-0 right-24"></div>
        <h1 className="font-serif text-[#3d1a1a] text-2xl sm:text-3xl font-semibold z-10">Engagement Cakes</h1>
        <p className="text-[#3d1a1a]/70 text-sm mt-1 z-10 font-sans">Home</p>
      </div>

      {/* Cards Grid — 4 per row */}
      <section className="py-8 sm:py-12 px-4 sm:px-10 bg-[#f9f9f9]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-7">
          {engagementCakes.map((cake, i) => (
            <CakeCard key={i} img={cake.img} name={cake.name} price={cake.price} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
