import { Navigate, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import WhyChooseUs from './components/WhyChooseUs'
import ThemeCakes from './components/ThemeCakes'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'
import KidsThemePage from './pages/KidsThemePage'
import EngagementPage from './pages/EngagementPage'
import AnniversaryPage from './pages/AnniversaryPage'
import NamingCeremonyPage from './pages/NamingCeremonyPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import SearchPage from './pages/SearchPage'
import CartPage from './pages/CartPage'
import CakeDetailPage from './pages/CakeDetailPage'
import SplashScreen from './components/SplashScreen'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}

function HomePage() {
  const [showSplash, setShowSplash] = useState(true)
  return (
    <>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      <div style={{ opacity: showSplash ? 0 : 1, transition: 'opacity 0.5s ease' }}>
        <div className="min-h-screen bg-white font-sans">
          <TopBar />
          <Navbar />
          <HeroSection />
          <WhyChooseUs />
          <ThemeCakes />
          <AboutSection />
          <Footer />
        </div>
      </div>
    </>
  )
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kids-theme" element={<KidsThemePage />} />
        <Route path="/cake/kids-theme" element={<KidsThemePage />} />
        <Route path="/cake/:cakeName" element={<CakeDetailPage />} />
        <Route path="/engagement" element={<EngagementPage />} />
        <Route path="/anniversary" element={<AnniversaryPage />} />
        <Route path="/naming-ceremony" element={<NamingCeremonyPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
