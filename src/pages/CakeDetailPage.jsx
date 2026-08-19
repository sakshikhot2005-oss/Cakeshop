import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { allCakes } from '../data/allCakes'
import { cakeFlavors } from '../data/cakeFlavors'
import { useCart } from '../context/CartContext'
import { getWhatsAppUrl } from '../data/contact'

export default function CakeDetailPage() {
  const { cakeName } = useParams()
  const navigate = useNavigate()
  const [wishlisted, setWishlisted] = useState(false)
  const [carted, setCarted] = useState(false)
  const [selectedWeight, setSelectedWeight] = useState('0.5 Kg')
  const [selectedFlavor, setSelectedFlavor] = useState('Chocolate')
  const [cakeMessage, setCakeMessage] = useState('')
  const [deliveryAddress, setDeliveryAddress] = useState('')
  const { addToCart, removeFromCart, addToWishlist, removeFromWishlist } = useCart()

  // Find cake by name
  const cake = allCakes.find(c => c.name.toLowerCase().replace(/\s+/g, '-') === cakeName?.toLowerCase())

  // Find cakes by category if individual cake not found
  const categoryCakes = !cake ? allCakes.filter(c => 
    c.category.toLowerCase().replace(/\s+/g, '-') === cakeName?.toLowerCase()
  ) : []

  // If viewing a category, show the first cake as featured
  const displayCake = cake || (categoryCakes.length > 0 ? categoryCakes[0] : null)

  if (!displayCake) {
    return (
      <div className="min-h-screen bg-white font-sans">
        <TopBar />
        <Navbar />
        <div className="flex flex-col items-center justify-center py-20">
          <h1 className="text-3xl font-serif text-gray-800 mb-4">Cake Not Found</h1>
          <p className="text-gray-500 mb-6">The cake you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/search')}
            className="bg-[#e91e8c] text-white px-6 py-2 rounded-full hover:bg-[#d41872] transition-colors"
          >
            Back to All Cakes
          </button>
        </div>
        <Footer />
      </div>
    )
  }

  const handleBuyNow = () => {
    // Validate delivery location
    if (!deliveryAddress.trim()) {
      alert('Please enter delivery address')
      return
    }

    // Create order message for WhatsApp
    const orderMessage = `🎂 *New Order - Cake Shop*

*Product Details:*
Cake: ${displayCake.name}
Price: ${displayCake.price}
Weight: ${selectedWeight}
Flavor: ${selectedFlavor}
Serving: ${servingInfo[selectedWeight]}

*Order Details:*
Message on Cake: ${cakeMessage || 'No message'}
Delivery Address: ${deliveryAddress}
SKU: ${displayCake.name.toLowerCase().replace(/\s+/g, '')}buttsk

*Earliest Delivery:* Today ✅

Please confirm this order. Thank you!`

    // Open WhatsApp
    window.open(getWhatsAppUrl(orderMessage), '_blank')
  }

  const handleWishlist = () => {
    if (wishlisted) { removeFromWishlist(); setWishlisted(false) }
    else { addToWishlist(); setWishlisted(true) }
  }

  const weightOptions = ['0.5 Kg', '1 Kg', '1.5 Kg', '2 Kg', '4 Kg']
  const servingInfo = {
    '0.5 Kg': '4 - 5 People',
    '1 Kg': '8 - 10 People',
    '1.5 Kg': '12 - 15 People',
    '2 Kg': '16 - 20 People',
    '4 Kg': '30 - 40 People'
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <TopBar />
      <Navbar />

      <section className="py-12 px-10 bg-[#f9f9f9]">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <button
            onClick={() => navigate('/search')}
            className="text-[#e91e8c] font-semibold text-sm mb-6 hover:underline"
          >
            ← Back to All Cakes
          </button>

          {/* Main Content */}
          <div className="grid grid-cols-2 gap-12 bg-white rounded-2xl p-8 shadow-md mb-8">
            {/* Left - Image */}
            <div className="flex items-center justify-center bg-gray-50 rounded-xl p-8">
              <img
                src={displayCake.img}
                alt={displayCake.name}
                className="max-w-full max-h-96 object-contain"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&auto=format&fit=crop&q=80'
                }}
              />
            </div>

            {/* Right - Details */}
            <div className="flex flex-col">
              {/* Header */}
              <div className="mb-6">
                <span className="text-[#e91e8c] text-xs uppercase tracking-widest font-semibold">
                  {displayCake.category}
                </span>
                <h1 className="font-serif text-4xl text-gray-800 mt-2 mb-3">{displayCake.name}</h1>
                <div className="flex items-center gap-4 mb-4">
                  <p className="text-2xl font-bold text-[#e91e8c]">{displayCake.price}</p>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="text-gray-600 text-sm">(125 Reviews)</span>
                  </div>
                </div>
              </div>

              {/* Select Weight */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-gray-800">Select Weight</h3>
                  <a href="#" className="text-blue-500 text-sm hover:underline">Serving info</a>
                </div>
                <div className="flex gap-3 flex-wrap">
                  {weightOptions.map((weight) => (
                    <button
                      key={weight}
                      onClick={() => setSelectedWeight(weight)}
                      className={`px-4 py-2 rounded-full font-semibold border-2 transition-all text-sm
                        ${selectedWeight === weight
                          ? 'bg-[#e91e8c] text-white border-[#e91e8c]'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-[#e91e8c]'
                        }`}
                    >
                      {weight}
                    </button>
                  ))}
                </div>
                <p className="text-gray-500 text-sm mt-2">{servingInfo[selectedWeight]}</p>
              </div>

              {/* Select Flavor */}
              <div className="mb-6">
                <label htmlFor="cake-flavor" className="block text-lg font-semibold text-gray-800 mb-2">
                  Select Flavor
                </label>
                <select
                  id="cake-flavor"
                  value={selectedFlavor}
                  onChange={(e) => setSelectedFlavor(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#e91e8c] bg-white"
                >
                  {cakeFlavors.map((flavor) => (
                    <option key={flavor}>{flavor}</option>
                  ))}
                </select>
              </div>

              {/* Cake Message */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">Cake Message</h3>
                  <span className="text-gray-400 text-sm">{cakeMessage.length}/25</span>
                </div>
                <textarea
                  value={cakeMessage}
                  onChange={(e) => setCakeMessage(e.target.value.slice(0, 25))}
                  placeholder="Write A Sweet Wish!"
                  className="w-full h-24 border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#e91e8c] resize-none"
                />
              </div>

              {/* Delivery Location */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Delivery Address *</h3>
                <textarea
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  placeholder="Enter full delivery address"
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#e91e8c] resize-none"
                />
                <p className="text-orange-500 text-sm mt-1">Available in limited cities*</p>
              </div>

              {/* SKU Number */}
              <div className="mb-4 pb-4 border-b border-gray-200">
                <h3 className="text-sm font-semibold text-gray-800 mb-1">SKU Number</h3>
                <p className="text-gray-600">{displayCake.name.toLowerCase().replace(/\s+/g, '')}buttsk</p>
              </div>

              {/* Delivery Info */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <p className="text-gray-700 font-semibold">
                  🕐 Earliest Delivery: <span className="text-red-600">Today</span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mb-6">
                <button
                  onClick={handleBuyNow}
                  className="flex-1 py-3 rounded-lg font-bold transition-all text-white text-lg bg-[#25D366] hover:bg-[#1da851] flex items-center justify-center gap-2"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-current">
                    <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.1 1.6 5.9L.2 24l6.5-1.7a11.8 11.8 0 0 0 5.4 1.3h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.1-1.2-6.1-3.5-8.3Zm-8.4 18.1h-.1c-1.7 0-3.4-.5-4.8-1.3l-.3-.2-3.8 1 1-3.7-.2-.3a9.8 9.8 0 1 1 8.2 4.5Zm5.4-7.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-1.8-.9-3-1.6-4.2-3.6-.3-.5.3-.5.8-1.6.1-.2.1-.4 0-.6-.1-.2-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.1 3.1 1.3 3.3c.2.2 2.1 3.3 5.2 4.6 1.9.8 2.4.9 3.3.8.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4Z" />
                  </svg>
                  Order Now | {displayCake.price}
                </button>
                <button
                  onClick={handleWishlist}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all border-2 text-lg
                    ${wishlisted
                      ? 'bg-red-50 border-red-500 text-red-500'
                      : 'border-gray-300 text-gray-800 hover:border-[#e91e8c] hover:text-[#e91e8c]'
                    }`}
                >
                  {wishlisted ? '❤️' : '🤍'}
                </button>
              </div>

              {/* Info */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-2">
                  📍 Delivered across Chikodi, Nipani & Kognoli
                </p>
                <p className="text-sm text-gray-600">
                  📞 Call us for bulk orders or custom designs
                </p>
              </div>
            </div>
          </div>

          {/* Ratings & Reviews Section */}
          <div className="bg-white rounded-2xl p-8 shadow-md mb-8">
            <h2 className="text-2xl font-serif text-gray-800 mb-6">Ratings & Reviews</h2>
            <div className="flex items-center gap-8 mb-8">
              <div className="text-center">
                <p className="text-5xl font-bold text-gray-800">5</p>
                <div className="flex justify-center text-yellow-400 text-2xl my-2">★★★★★</div>
                <p className="text-gray-600">(125 Reviews)</p>
              </div>
              <div className="flex-1">
                {[5, 4, 3, 2, 1].map((stars) => (
                  <div key={stars} className="flex items-center gap-4 mb-2">
                    <span className="text-gray-600 text-sm w-20">{stars} ★</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{ width: `${stars * 20}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="border-2 border-[#e91e8c] text-[#e91e8c] px-6 py-2 rounded-lg hover:bg-[#e91e8c] hover:text-white transition-colors font-semibold">
              See All Reviews
            </button>
          </div>

          {/* Related Cakes Section */}
          {categoryCakes.length > 1 && (
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-6">Other {displayCake.category} Cakes</h2>
              <div className="grid grid-cols-4 gap-6">
                {categoryCakes.map((c, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      const url = c.name.toLowerCase().replace(/\s+/g, '-')
                      navigate(`/cake/${url}`)
                    }}
                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden hover:scale-105 transition-transform"
                  >
                    <div className="h-48 bg-gray-50 flex items-center justify-center">
                      <img
                        src={c.img}
                        alt={c.name}
                        className="max-h-full max-w-full object-contain p-2"
                        onError={(e) => { e.target.style.display = 'none' }}
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-gray-800 font-serif text-sm font-semibold mb-2">{c.name}</h3>
                      <p className="text-[#e91e8c] font-bold text-sm">{c.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
