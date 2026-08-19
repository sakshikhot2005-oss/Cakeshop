import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import contactImg from '../assets/contactimg.jpeg'
import { getWhatsAppUrl, WHATSAPP_NUMBER } from '../data/contact'

export default function ContactPage() {
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
        <h1 className="font-serif text-[#3d1a1a] text-2xl sm:text-3xl font-semibold z-10">Contact Us</h1>
        <p className="text-[#3d1a1a]/70 text-sm mt-1 z-10 font-sans">Home</p>
      </div>

      {/* Contact Info + Image Section */}
      <section className="py-10 sm:py-16 px-4 sm:px-10 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-16">

          {/* Left — Text */}
          <div className="flex-1">
            <h2 className="font-serif text-3xl text-[#e91e8c] font-normal mb-5">Contact Us</h2>

            <p className="text-gray-600 text-sm leading-8 text-justify font-sans mb-6">
              Want to order the best theme based cake. Please send a whatsapp message to
              8105931021 and give us a couple of hours to respond. We will send you an enquiry
              form wherein you can fill out the order details. Availability, delivery, design,
              flavor, cost will then be discussed on chat.
            </p>

            <p className="text-[#e91e8c] text-sm font-sans mb-5 italic">
              Our consultation timings: 10:30 am to 10:00 PM.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-3 mb-8">
              {/* WhatsApp */}
              <div className="flex items-center gap-3 text-gray-600 text-sm font-sans">
                <svg className="w-4 h-4 text-[#e91e8c] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L.057 23.571a.75.75 0 00.921.921l5.772-1.47A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.685-.523-5.21-1.432l-.374-.22-3.425.873.888-3.335-.242-.386A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                <span>+91 {WHATSAPP_NUMBER.slice(2)}</span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 text-gray-600 text-sm font-sans">
                <svg className="w-4 h-4 text-[#e91e8c] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>+91 {WHATSAPP_NUMBER.slice(2)}</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 text-gray-600 text-sm font-sans">
                <svg className="w-4 h-4 text-[#e91e8c] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>Chikodi, Nipani & Kognoli</span>

              </div>
            </div>

            {/* Order Now Button */}
            <a
              href={getWhatsAppUrl('Hello! I would like to place an order for a cake.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 transition-colors text-white text-sm font-semibold px-7 py-3 rounded-full shadow"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L.057 23.571a.75.75 0 00.921.921l5.772-1.47A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.685-.523-5.21-1.432l-.374-.22-3.425.873.888-3.335-.242-.386A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Order Now!
            </a>
          </div>

          {/* Right — Cake Image */}
          <div className="flex-shrink-0 w-full md:w-[300px]">
            <img
              src={contactImg}
              alt="Contact us cake image"
              className="w-full h-auto object-contain rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
