import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import secondLogo from '../assets/secondlogo.jpg'
import { useCart } from '../context/CartContext'
import { allCakes } from '../data/allCakes'
import { cakeFlavors } from '../data/cakeFlavors'
import { getWhatsAppUrl } from '../data/contact'



const megaMenu = {
  'Kids Theme Cakes': [
    ['1st Birthday Boy', 'Mickey Mouse'],
    ['1st Birthday Girl', 'Winnie The Pooh'],
    ['6 Months', 'Unicorn'],
    ['Twins', 'Princess'],
    ['Cocomelon', 'Mermaid'],
    ['Jungle', 'Frozen'],
    ['Space', 'Baby Shark'],
    ['Superhero', 'Masha and Bear'],
    ['Peppa Pig', 'Rainbow'],
    ['Boss Baby', 'Minnie Mouse'],
    ['Vehicles', 'Nursery Rhymes'],
    ['Dinosaur', 'Cartoon'],
    ['Construction', 'Annaprashan'],
    ['Paw Patrol', 'Baby Theme'],
    ['Sports', 'See All Themes'],
  ],
  'By Occasion': [
    ['Engagement', 'Farewell'],
    ['Wedding', 'Retirement'],
    ['Birthday', 'Graduation'],
    ['Milestone Birthday', 'New Home'],
    ['Baby Shower', 'Parent and Kid Birthday'],
    ['Anniversary', 'Christmas'],
    ['Naming Ceremony', "Valentine's Day"],
    ['Corporate', "Women's Day"],
    ["Bachelor/Bachelorette", "Mother's Day"],
    ['', "Father's Day"],
  ],
  'By Relation': [
    ['Cakes for Wife', ''],
    ['Cakes for Husband', ''],
    ['Cakes for Grandma', ''],
    ['Cakes for Grandpa', ''],
    ['Cakes for Mother', ''],
    ['Cakes for Father', ''],
    ['Cakes for Newborn', ''],
    ['Cakes for Daughter', ''],
    ['Cakes for Son', ''],
    ['Cakes for Teenager', ''],
    ['Cakes for Sister', ''],
    ['Cakes for Brother', ''],
  ],
  'By Theme': [
    ['Travel', 'Lazy'],
    ['Saree', 'Beach'],
    ['Jewellery', 'Music'],
    ['Selfie', 'Dance'],
    ['Mom to Be', 'Food'],
    ['New Mom', 'Social Media'],
    ['Bike and Car', 'Beer'],
    ['Gym', 'Whiskey'],
    ['Fashion', 'Hookah'],
    ['Yoga', 'Weed'],
    ['Shopping', 'Poker'],
    ['Cooking', 'Bride To Be'],
    ['Gadgets', 'Trekking'],
    ['TV Series', 'Gentleman'],
  ],
  'By Profession': [
    ['Techie', ''],
    ['Office', ''],
    ['Doctor', ''],
    ['Dentist', ''],
    ['Uniform', ''],
    ['Stock Market', ''],
    ['Cakes for Boss', ''],
    ['Workaholic', ''],
    ['Architect', ''],
    ['Lawyer', ''],
    ['Teacher', ''],
    ['Engineer', ''],
    ['Actor', ''],
    ['Singer', ''],
    ['CA', ''],
  ],
}

export default function Navbar() {
  const [searchVal, setSearchVal] = useState('')
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [wishlistOpen, setWishlistOpen] = useState(false)
  const { cartItems, cartCount, wishlistItems, wishlistCount } = useCart()
  const navigate = useNavigate()
  const searchRef = useRef(null)
  const cartRef = useRef(null)
  const wishlistRef = useRef(null)

  // Live search results
  const searchResults = searchVal.trim().length > 0
    ? allCakes.filter(cake =>
        cake.name.toLowerCase().includes(searchVal.toLowerCase()) ||
        cake.category.toLowerCase().includes(searchVal.toLowerCase())
      ).slice(0, 8)
    : []

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowDropdown(false)
      }
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setCartOpen(false)
      }
      if (wishlistRef.current && !wishlistRef.current.contains(e.target)) {
        setWishlistOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchVal.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchVal.trim())}`)
      setSearchVal('')
      setShowDropdown(false)
    }
  }

  const handleInputChange = (e) => {
    setSearchVal(e.target.value)
    setShowDropdown(e.target.value.trim().length > 0)
  }

  const handleSelectCake = (cake) => {
    navigate(`/search?q=${encodeURIComponent(cake.name)}`)
    setSearchVal('')
    setShowDropdown(false)
  }

  const handleCartOrder = () => {
    if (cartItems.length === 0) return
    const total = cartItems.reduce((sum, item) => {
      const price = parseInt((item.price || '').replace(/[^\d]/g, ''), 10)
      return sum + (Number.isNaN(price) ? 0 : price)
    }, 0)
    const items = cartItems.map((item, index) => `${index + 1}. ${item.name} - ${item.price || 'Price TBD'}`).join('\n')
    const message = `Hello! I want to order these cakes:\n\n${items}\n\nTotal: ₹${total.toLocaleString()}\n\nPlease confirm availability.`
    window.open(getWhatsAppUrl(message), '_blank')
    setCartOpen(false)
  }

  return (
    <div className="relative">
      <nav className="bg-white shadow-sm px-3 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-2 sm:gap-3">

        {/* Logo */}
        <button
          type="button"
          aria-label="Go to Dolcino Cakes home page"
          onClick={() => navigate('/')}
          className="flex items-center gap-2 min-w-0 text-left"
        >
          <img
            src={secondLogo}
            alt="Dolcino Cakes Logo"
            className="h-12 sm:h-20 w-auto max-w-[135px] sm:max-w-none object-contain"
          />
          <div className="leading-tight">
            <div className="text-2xl font-bold font-serif leading-none text-[#e91e8c]"></div>
            <div className="text-sm text-gray-500 font-sans tracking-widest"></div>
          </div>
        </button>

        {/* Nav links */}
        <div className="hidden lg:flex items-center gap-6 text-sm text-gray-700 font-medium">

          {/* Custom Cakes — mega menu trigger */}
          <div className="relative">
            <button
              className={`flex items-center gap-1 hover:text-[#e91e8c] transition-colors ${megaOpen ? 'text-[#e91e8c]' : ''}`}
              onClick={() => setMegaOpen(open => !open)}
              onBlur={() => setTimeout(() => setMegaOpen(false), 200)}
            >
              Custom Cakes
              <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Flavours dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-[#e91e8c] transition-colors whitespace-nowrap">
              Flavours
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {/* Dropdown */}
            <div className="absolute top-full left-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-xl py-3 z-50 w-52 max-h-80 overflow-y-auto opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {cakeFlavors.map(flavour => (
                <a key={flavour} href="#"
                  className="block px-4 py-1.5 text-sm text-gray-700 hover:bg-pink-50 hover:text-[#e91e8c] transition-colors font-sans">
                  {flavour}
                </a>
              ))}
            </div>
          </div>

          <a href="#" className="flex items-center gap-1 hover:text-[#e91e8c] transition-colors whitespace-nowrap">
            Dessert Tables
            <span className="bg-[#e91e8c] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-sm leading-none">NEW</span>
          </a>
          <button type="button" onClick={() => navigate('/about')} className="hover:text-[#e91e8c] transition-colors whitespace-nowrap">About us</button>
          <button type="button" onClick={() => navigate('/contact')} className="hover:text-[#e91e8c] transition-colors whitespace-nowrap">Contact us</button>
        </div>

        {/* Search bar with live dropdown */}
        <div ref={searchRef} className="relative order-4 w-full lg:order-none lg:w-auto lg:flex-1 lg:max-w-[220px]">
            <form onSubmit={handleSearch} className="flex items-center border border-gray-200 rounded-full overflow-hidden bg-gray-50 w-full lg:w-[220px]">
            <input
              type="text"
              placeholder="Search Cakes"
              value={searchVal}
              onChange={handleInputChange}
              onFocus={() => searchVal.trim() && setShowDropdown(true)}
              className="bg-transparent px-4 py-2 text-sm text-gray-700 outline-none w-full placeholder-gray-400"
            />
            <button type="submit" className="bg-[#e91e8c] hover:bg-[#c2185b] transition-colors px-3 py-2 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
            </button>
          </form>

          {/* Live dropdown results */}
          {showDropdown && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-100 rounded-xl shadow-xl z-50 max-h-[420px] overflow-y-auto">
              {searchResults.length === 0 ? (
                <div className="px-4 py-3 text-sm text-gray-400 font-sans text-center">
                  No cakes found for "{searchVal}"
                </div>
              ) : (
                <>
                  <div className="px-4 py-2 border-b border-gray-50">
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider font-sans">
                      {searchResults.length} results
                    </span>
                  </div>
                  {searchResults.map((cake, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelectCake(cake)}
                      className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-pink-50 transition-colors text-left border-b border-gray-50 last:border-0"
                    >
                      {/* Thumbnail */}
                      <div className="w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                        <img
                          src={cake.img}
                          alt={cake.name}
                          className="w-full h-full object-contain"
                          onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=100&auto=format&fit=crop&q=60' }}
                        />
                      </div>
                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-800 font-serif truncate">{cake.name}</p>
                        <p className="text-[10px] text-[#e91e8c] font-sans">{cake.category}</p>
                      </div>
                      {/* Price */}
                      <span className="text-sm font-bold text-[#e91e8c] font-sans flex-shrink-0">{cake.price}</span>
                    </button>
                  ))}
                  {/* View all button */}
                  <button
                    onClick={() => { setCartOpen(false); navigate('/cart') }}
                    className="w-full px-4 py-3 text-center text-sm text-[#e91e8c] font-semibold font-sans hover:bg-pink-50 transition-colors"
                  >
                    View Cart
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        {/* Order Now button */}
        <a href={getWhatsAppUrl('Hello! I would like to place an order for a cake.')} target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-2 bg-green-500 hover:bg-green-600 transition-colors text-white text-sm font-semibold px-4 lg:px-5 py-2.5 rounded-full whitespace-nowrap shadow">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L.057 23.571a.75.75 0 00.921.921l5.772-1.47A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.685-.523-5.21-1.432l-.374-.22-3.425.873.888-3.335-.242-.386A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
          Order Now!
        </a>

        {/* Cart button with dropdown */}
        <div ref={cartRef} className="relative ml-auto lg:ml-0">
          <button
            onClick={() => setCartOpen(o => !o)}
            className="relative flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 hover:border-[#e91e8c] hover:text-[#e91e8c] text-gray-600 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#e91e8c] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Cart dropdown panel */}
          {cartOpen && (
            <div className="absolute right-0 sm:right-0 top-full mt-2 w-[min(20rem,calc(100vw-1rem))] max-w-[calc(100vw-1rem)] bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 max-sm:fixed max-sm:left-1/2 max-sm:right-auto max-sm:-translate-x-1/2 max-sm:top-[7.5rem] max-sm:mt-0">
              <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                <span className="font-serif text-gray-800 font-semibold text-sm">
                  Cart ({cartCount} {cartCount === 1 ? 'item' : 'items'})
                </span>
                <button onClick={() => setCartOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {cartCount === 0 ? (
                <div className="px-4 py-8 text-center">
                  <svg className="w-10 h-10 mx-auto text-gray-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <p className="text-gray-400 text-sm font-sans">Your cart is empty</p>
                </div>
              ) : (
                <>
                  <ul className="max-h-64 overflow-y-auto divide-y divide-gray-50">
                    {cartItems.filter(item => item && item.name).map((item, i) => (
                      <li key={i}>
                        <button
                          type="button"
                          onClick={() => {
                            setCartOpen(false)
                            navigate(`/cake/${item.name.toLowerCase().replace(/\s+/g, '-')}`)
                          }}
                          className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-pink-50 transition-colors"
                          title={`Open ${item.name}`}
                        >
                        <div className="w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                          <img
                            src={item.img || 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=100&auto=format&fit=crop&q=60'}
                            alt={item.name || 'Cake'}
                            className="w-full h-full object-contain"
                            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=100&auto=format&fit=crop&q=60' }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-gray-800 font-serif truncate">{item.name}</p>
                          {item.price && (
                            <p className="text-xs text-[#e91e8c] font-sans font-bold mt-0.5">{item.price}</p>
                          )}
                        </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div className="px-4 py-3 border-t border-gray-100">
                    <div className="flex gap-2">
                      <button
                        onClick={() => { setCartOpen(false); navigate('/cart') }}
                        className="flex-1 border border-[#e91e8c] text-[#e91e8c] hover:bg-pink-50 transition-colors text-sm font-semibold py-2.5 rounded-full font-sans"
                      >
                        View Cart
                      </button>
                      <button
                        onClick={handleCartOrder}
                        className="flex-1 bg-green-500 hover:bg-green-600 transition-colors text-white text-sm font-semibold py-2.5 rounded-full font-sans"
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Wishlist icon and dropdown */}
        <div ref={wishlistRef} className="relative">
          <button
            type="button"
            onClick={() => setWishlistOpen(open => !open)}
            aria-label="Open wishlist"
            className="relative flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 hover:border-red-400 hover:text-red-500 text-gray-600 transition-all"
          >
            <svg className="w-5 h-5" fill={wishlistCount > 0 ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>

          {wishlistOpen && (
            <div className="absolute right-0 sm:right-0 top-full mt-2 w-[min(20rem,calc(100vw-1rem))] max-w-[calc(100vw-1rem)] bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 max-sm:fixed max-sm:left-1/2 max-sm:right-auto max-sm:-translate-x-1/2 max-sm:top-[7.5rem] max-sm:mt-0">
              <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                <span className="font-serif text-gray-800 font-semibold text-sm">
                  My Wishlist ({wishlistCount})
                </span>
                <button type="button" onClick={() => setWishlistOpen(false)} className="text-gray-400 hover:text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {wishlistItems.length === 0 ? (
                <p className="px-4 py-8 text-center text-gray-400 text-sm">Your wishlist is empty</p>
              ) : (
                <ul className="max-h-72 overflow-y-auto divide-y divide-gray-50">
                  {wishlistItems.filter(item => item && item.name).map((item, i) => (
                    <li key={`${item.name}-${i}`}>
                      <button
                        type="button"
                        onClick={() => {
                          setWishlistOpen(false)
                          navigate(`/cake/${item.name.toLowerCase().replace(/\s+/g, '-')}`)
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-pink-50 transition-colors"
                      >
                        <div className="w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                          <img
                            src={item.img || 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=100&auto=format&fit=crop&q=60'}
                            alt={item.name}
                            className="w-full h-full object-contain"
                            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=100&auto=format&fit=crop&q=60' }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-gray-800 font-serif truncate">{item.name}</p>
                          {item.price && <p className="text-xs text-[#e91e8c] font-bold mt-0.5">{item.price}</p>}
                        </div>
                        <span className="text-red-500 text-lg" aria-hidden="true">♥</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(open => !open)}
          className="flex lg:hidden items-center justify-center w-10 h-10 rounded-full border border-gray-200 text-gray-600"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="mobile-menu-panel lg:hidden absolute top-full left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-pink-100 shadow-xl px-4 py-4 space-y-2 text-sm text-gray-700">
          <button onClick={() => { setMegaOpen(true); setMobileOpen(false) }} className="block w-full text-left px-3 py-3 rounded-lg hover:bg-pink-50">Custom Cakes</button>
          <button type="button" onClick={() => { navigate('/about'); setMobileOpen(false) }} className="block w-full text-left px-3 py-3 rounded-lg hover:bg-pink-50">About us</button>
          <button type="button" onClick={() => { navigate('/contact'); setMobileOpen(false) }} className="block w-full text-left px-3 py-3 rounded-lg hover:bg-pink-50">Contact us</button>
          <a href={getWhatsAppUrl('Hello! I would like to place an order for a cake.')} target="_blank" rel="noopener noreferrer" className="flex sm:hidden items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-3 rounded-full shadow-md transition-colors">Order Now!</a>
        </div>
      )}

      {/* Mega Menu Dropdown */}
      {megaOpen && (
        <div className="absolute top-full left-0 right-0 z-50 bg-[#1a0505] shadow-2xl border-t-2 border-[#e91e8c]">
          <div className="max-h-[70vh] overflow-y-auto max-w-screen-xl mx-auto px-4 sm:px-8 py-6 sm:py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
            {Object.entries(megaMenu).map(([category, items]) => (
              <div key={category}>
                {/* Category heading */}
                <h4 className="text-[#e91e8c] font-serif text-sm font-semibold mb-3 pb-2 border-b border-[#e91e8c]/40 tracking-wide">
                  {category}
                </h4>
                {/* Items */}
                <ul className="space-y-1.5">
                  {items.map(([left, right], i) => (
                    <li key={i} className="grid grid-cols-2 gap-3">
                      {left && (
                        <a href="#" className="text-gray-300 text-xs hover:text-[#e91e8c] transition-colors font-sans break-words min-w-0">
                          {left}
                        </a>
                      )}
                      {right && (
                        <a href="#" className="text-gray-300 text-xs hover:text-[#e91e8c] transition-colors font-sans break-words min-w-0">
                          {right}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
