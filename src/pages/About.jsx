import { business } from '../data/business'
import SectionHeading from '../components/SectionHeading'

function About() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-cream py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="About Us"
            subtitle={business.name}
          />
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Left: Image or Logo */}
            <div className="md:col-span-1 flex justify-center">
              <div className="w-64 h-64 md:w-56 md:h-56 bg-cream rounded-lg flex items-center justify-center p-8">
                <img
                  src={business.logo}
                  alt={business.name}
                  className="w-full h-full object-contain"
                  loading="eager"
                />
              </div>
            </div>

            {/* Right: About Text */}
            <div className="md:col-span-2 space-y-6">
              <h2 className="font-serif text-3xl font-bold text-gray-900">
                {business.name}
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                {business.description}
              </p>

              <div className="prose prose-gray max-w-none">
                <h3 className="font-serif text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Our Commitment
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We are dedicated to creating beauty products that are kind to your skin and made with love. Each product is handcrafted using natural ingredients, ensuring quality and care in every jar, bottle, and bar.
                </p>

                <h3 className="font-serif text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Why Choose Us
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <span className="text-earth-brown font-bold">✓</span>
                    <span><strong>Handmade</strong> - Each product is crafted with attention to detail</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-earth-brown font-bold">✓</span>
                    <span><strong>Natural Ingredients</strong> - We use quality natural components</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-earth-brown font-bold">✓</span>
                    <span><strong>Made with Love</strong> - Every product reflects our passion for beauty</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-earth-brown font-bold">✓</span>
                    <span><strong>Customer Focused</strong> - Your satisfaction is our priority</span>
                  </li>
                </ul>

                <h3 className="font-serif text-2xl font-bold text-gray-900 mt-8 mb-4">
                  How to Reach Us
                </h3>
                <p className="text-gray-700">
                  Have questions about our products? We're here to help! Get in touch via WhatsApp, call us, or visit us during our {business.openingHours}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-gray-900 mb-8">
            Get In Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {/* Phone */}
            <a
              href={`tel:${business.phone}`}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-3">📞</div>
              <h3 className="font-serif font-bold text-lg mb-2">Call Us</h3>
              <p className="text-earth-brown font-medium">{business.phone}</p>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent('Hi, I would like to know more about your products.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-3">💬</div>
              <h3 className="font-serif font-bold text-lg mb-2">WhatsApp</h3>
              <p className="text-green-600 font-medium">Chat with us</p>
            </a>

            {/* Instagram */}
            {business.instagram && (
              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-3">📸</div>
                <h3 className="font-serif font-bold text-lg mb-2">Instagram</h3>
                <p className="text-pink-600 font-medium">Follow us</p>
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default About
