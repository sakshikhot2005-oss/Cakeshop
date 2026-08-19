import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])
  const [wishlistItems, setWishlistItems] = useState([])

  const cartCount = cartItems.length
  const wishlistCount = wishlistItems.length

  const addToCart = (item) => {
    if (!item || !item.name) return
    setCartItems(prev => [...prev, item])
  }

  const removeFromCart = (item) => {
    if (!item || !item.name) return
    setCartItems(prev => {
      const idx = prev.findIndex(c => c && c.name === item.name)
      if (idx === -1) return prev
      return [...prev.slice(0, idx), ...prev.slice(idx + 1)]
    })
  }

  const addToWishlist = (item) => {
    if (!item || !item.name) return
    setWishlistItems(prev => [...prev, item])
  }

  const removeFromWishlist = (item) => {
    if (!item || !item.name) return
    setWishlistItems(prev => {
      const idx = prev.findIndex(w => w && w.name === item.name)
      if (idx === -1) return prev
      return [...prev.slice(0, idx), ...prev.slice(idx + 1)]
    })
  }

  return (
    <CartContext.Provider value={{
      cartItems,
      wishlistItems,
      cartCount,
      wishlistCount,
      addToCart,
      removeFromCart,
      addToWishlist,
      removeFromWishlist,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
