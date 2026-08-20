import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useCart } from '../context/CartContext'
import { shareOrderWithImages } from '../data/contact'

export default function CartPage() {
  const { cartItems, removeFromCart, cartCount } = useCart()

  const total = cartItems.reduce((sum, item) => {
    const num = parseInt((item.price || '₹0').replace(/[^\d]/g, ''))
    return sum + (isNaN(num) ? 0 : num)
  }, 0)

  const handleWhatsAppOrder = async () => {
    if (cartItems.length === 0) return
    const itemList = cartItems
      .map((item, i) => `${i + 1}. ${item.name} - ${item.price || 'Price TBD'}`)
      .join('\n')
    const msg = `Hello! I want to order the following cakes:\n\n${itemList}\n\nTotal: ₹${total.toLocaleString()}\n\nPlease confirm availability.`
    await shareOrderWithImages(msg, cartItems.map(item => item.img))
  }

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans">
      <TopBar />
      <Navbar />

      {/* Banner */}
      <div
        className="relative w-full h-32 sm:h-36 flex flex-col items-center justify-center overflow-hidden px-4 text-center"
        style={{ background: 'radial-gradient(ellipse at 20% 50%, #f5d0d8 0%, #e8b4c0 40%, #d4909f 100%)' }}
      >
        <div className="absolute w-24 h-24 rounded-full bg-yellow-100/60 blur-2xl top-2 left-24"></div>
        <div className="absolute w-28 h-28 rounded-full bg-yellow-50/40 blur-3xl top-0 right-24"></div>
        <h1 className="font-serif text-[#3d1a1a] text-2xl sm:text-3xl font-semibold z-10">My Cart</h1>
        <p className="text-[#3d1a1a]/60 text-sm mt-1 z-10">
          {cartCount} {cartCount === 1 ? 'item' : 'items'} in your cart
        </p>
      </div>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        {cartItems.length === 0 ? (
          /* Empty cart */
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-16 flex flex-col items-center gap-4">
            <svg className="w-16 h-16 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <p className="text-gray-400 text-lg font-sans">Your cart is empty</p>
            <a href="/" className="mt-2 bg-[#e91e8c] hover:bg-[#c2185b] text-white text-sm font-semibold px-8 py-3 rounded-full transition-colors">
              Browse Cakes
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Cart Items */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <h2 className="font-serif text-xl text-gray-800 font-semibold mb-2">
                Cart ({cartCount} {cartCount === 1 ? 'item' : 'items'})
              </h2>

              {cartItems.map((item, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-3 sm:p-4 flex items-center gap-3 sm:gap-4">
                  {/* Image */}
                  <div className="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
                    <img
                      src={item.img || ''}
                      alt={item.name}
                      className="w-full h-full object-contain p-1"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=200&auto=format&fit=crop&q=80'
                      }}
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-base font-semibold text-gray-800">{item.name}</h3>
                    {item.category && (
                      <p className="text-[11px] text-[#e91e8c] uppercase tracking-wider font-sans mt-0.5">{item.category}</p>
                    )}
                    <p className="text-[#e91e8c] font-bold text-base font-sans mt-1">{item.price || 'Price on request'}</p>
                  </div>

                  {/* Remove button */}
                  <button
                    onClick={() => removeFromCart(item)}
                    className="w-8 h-8 rounded-full border border-gray-200 hover:border-red-400 hover:bg-red-50 hover:text-red-500 text-gray-400 flex items-center justify-center transition-all flex-shrink-0"
                    title="Remove"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4">
                <h2 className="font-serif text-xl text-gray-800 font-semibold">Order Summary</h2>

                <div className="flex flex-col gap-2 border-b border-gray-100 pb-4">
                  {cartItems.map((item, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 font-sans truncate max-w-[140px]">{item.name}</span>
                      <span className="text-sm font-semibold text-gray-700 font-sans">{item.price || '-'}</span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-serif text-base font-bold text-gray-800">Total</span>
                  <span className="font-bold text-[#e91e8c] text-lg font-sans">
                    ₹{total.toLocaleString()}
                  </span>
                </div>

                {/* WhatsApp Order */}
                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 transition-colors text-white font-semibold text-sm py-3.5 rounded-full shadow mt-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L.057 23.571a.75.75 0 00.921.921l5.772-1.47A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.685-.523-5.21-1.432l-.374-.22-3.425.873.888-3.335-.242-.386A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                  Order via WhatsApp
                </button>

                <p className="text-[10px] text-gray-400 text-center font-sans leading-relaxed">
                  Click to send your order on WhatsApp. We'll confirm availability & delivery details.
                </p>
              </div>

              {/* Continue shopping */}
              <a href="/"
                className="text-center text-sm text-[#e91e8c] hover:underline font-sans font-semibold">
                ← Continue Shopping
              </a>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </div>
  )
}
