import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
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
    </Routes>
  )
}

export default App
