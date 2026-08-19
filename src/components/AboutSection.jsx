import { useNavigate } from 'react-router-dom'

export default function AboutSection({ showReadMore = true }) {
  const navigate = useNavigate()
  return (
    <section className="bg-white py-16 px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">

        {/* Left — Text content */}
        <div className="flex-1">
          <h2 className="font-serif text-3xl text-[#e91e8c] font-normal mb-6">
            About Dolcino Cakes
          </h2>

          <p className="text-gray-600 text-sm leading-8 text-justify font-sans mb-8">
            Looking for a customised designer cake? Since 2024, Dolcino Cakes has been crafting
            custom cakes that blend creative design with delectable flavors. We can design a
            personalised cake tailored to your specific requirements and budget. Our master bakers
            personally work with every customer to translate their vision into a stunning piece of
            art and make their dream cake come true. Kids birthday, Wedding, Engagement,
            Anniversary, Baby Shower, Corporate events and more — our cakes are sure to add a
            touch of elegance to make any celebration even more special. We take pride in using
            only the finest ingredients, ensuring every bite is as memorable as the occasion itself.
            Just click on the Order Now button to connect with us on WhatsApp and order a
            customised cake from the comfort of your home!
          </p>

          {showReadMore && (
            <button
              onClick={() => navigate('/about')}
              className="bg-[#e91e8c] hover:bg-[#c2185b] transition-colors text-white text-sm font-semibold px-8 py-3 rounded-full shadow"
            >
              Read more
            </button>
          )}
        </div>

        {/* Right — Male chef image */}
        <div className="flex-shrink-0 w-full md:w-[280px]">
          <img
            src="https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=800&auto=format&fit=crop&q=85"
            alt="Professional male cake chef"
            className="w-full h-auto object-contain rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
  )
}
