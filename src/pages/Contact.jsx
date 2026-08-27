import { business } from '../data/business'
import SectionHeading from '../components/SectionHeading'
import WhatsAppButton from '../components/WhatsAppButton'

function Contact() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-cream py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Contact Us"
            subtitle="Get in touch with Magic Skin Whitening"
          />
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <h2 className="font-serif text-3xl font-bold text-gray-900">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Have questions about our products? We'd love to hear from you! Reach out to us through any of these channels.
              </p>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="bg-cream p-6 rounded-lg">
                  <h3 className="font-serif font-bold text-lg mb-3">📞 Phone</h3>
                  <a
                    href={`tel:${business.phone}`}
                    className="text-xl font-medium text-earth-brown hover:text-earth-brown/80 transition-colors"
                  >
                    {business.phone}
                  </a>
                  <p className="text-sm text-gray-600 mt-2">
                    Available {business.openingHours}
                  </p>
                </div>

                {/* WhatsApp */}
                <div className="bg-cream p-6 rounded-lg">
                  <h3 className="font-serif font-bold text-lg mb-3">💬 WhatsApp</h3>
                  <WhatsAppButton
                    variant="compact"
                    label="Chat on WhatsApp"
                    message="Hi, I would like to know more about your products."
                  />
                  <p className="text-sm text-gray-600 mt-3">
                    Send us a message anytime for product inquiries and support
                  </p>
                </div>

                {/* Instagram */}
                {business.instagram && (
                  <div className="bg-cream p-6 rounded-lg">
                    <h3 className="font-serif font-bold text-lg mb-3">📸 Instagram</h3>
                    <a
                      href={business.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-medium text-pink-600 hover:text-pink-700 transition-colors inline-flex items-center space-x-2"
                    >
                      <span>Follow Us</span>
                      <span>→</span>
                    </a>
                    <p className="text-sm text-gray-600 mt-3">
                      See our latest products and behind-the-scenes moments
                    </p>
                  </div>
                )}

                {/* Hours */}
                <div className="bg-cream p-6 rounded-lg">
                  <h3 className="font-serif font-bold text-lg mb-3">🕒 Hours</h3>
                  <p className="text-lg font-medium text-earth-brown">
                    {business.openingHours}
                  </p>
                </div>

                {/* Location */}
                {business.googleMaps && (
                  <div className="bg-cream p-6 rounded-lg">
                    <h3 className="font-serif font-bold text-lg mb-3">📍 Location</h3>
                    <a
                      href={business.googleMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2 bg-earth-brown hover:bg-earth-brown/90 text-white font-medium rounded-lg transition-colors"
                    >
                      Get Directions
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Right: CTA Section */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="bg-earth-brown text-white p-8 rounded-lg space-y-4">
                <h3 className="font-serif text-3xl font-bold">
                  Questions About Products?
                </h3>
                <p className="text-white/90 leading-relaxed">
                  Chat with us on WhatsApp to learn about product ingredients, usage instructions, availability, pricing, and custom orders.
                </p>
                <WhatsAppButton
                  variant="compact"
                  label="Start Chat"
                  message="Hi, I have some questions about your products."
                  className="!bg-white !text-earth-brown hover:!bg-gray-100"
                />
              </div>

              <div className="bg-cream p-8 rounded-lg space-y-4">
                <h3 className="font-serif text-2xl font-bold text-gray-900">
                  About {business.name}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {business.description}
                </p>
                <p className="text-sm text-gray-600">
                  We're here to help you find the perfect skincare solution for your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-center mb-12">
            How We Can Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🛍️</div>
              <h3 className="font-serif font-bold text-xl mb-3">Product Inquiries</h3>
              <p className="text-gray-600">
                Learn about our products, ingredients, and how to use them effectively.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💁</div>
              <h3 className="font-serif font-bold text-xl mb-3">Skincare Advice</h3>
              <p className="text-gray-600">
                Get personalized recommendations for your skincare needs.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📦</div>
              <h3 className="font-serif font-bold text-xl mb-3">Orders & Delivery</h3>
              <p className="text-gray-600">
                Inquire about availability, pricing, and delivery options.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
