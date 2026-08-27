import { Link } from 'react-router-dom'
import { products } from '../data/products'
import { business } from '../data/business'
import ProductCard from '../components/ProductCard'
import SectionHeading from '../components/SectionHeading'
import WhatsAppButton from '../components/WhatsAppButton'

const productPlaceholder = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
    <rect width="1200" height="900" fill="#f7f1ea"/>
    <rect x="160" y="110" width="880" height="680" rx="32" fill="#efe2d3"/>
    <text x="600" y="425" text-anchor="middle" font-family="Arial, sans-serif" font-size="42" fill="#7a5b45" font-weight="700">Image unavailable</text>
    <text x="600" y="480" text-anchor="middle" font-family="Arial, sans-serif" font-size="26" fill="#9a7d68">Product image coming soon</text>
  </svg>
`)}`

function Home() {
  const featuredProducts = products.slice(0, 6)
  const heroImage = featuredProducts[0]?.image || productPlaceholder

  return (
    <>
      <section className="bg-gradient-to-b from-cream to-white pt-12 pb-20 md:pt-20 md:pb-32" aria-label="Hero section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 md:space-y-8 slide-up">
              <div>
                <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                  {business.name}
                </h1>
                <p className="text-xl text-gray-700 font-light">
                  {business.description}
                </p>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Discover our collection of handmade beauty products crafted with care and natural ingredients. Each product is made with love to help you achieve natural, radiant skin.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/products"
                  className="inline-block px-8 py-4 bg-earth-brown hover:bg-earth-brown/90 text-white font-bold rounded-lg transition-colors text-center"
                >
                  Explore Products
                </Link>
                <WhatsAppButton variant="compact" />
              </div>
            </div>

            <div className="relative h-96 md:h-full min-h-96 slide-up" style={{ animationDelay: '0.1s' }}>
              <img
                src={heroImage}
                alt="Featured beauty product"
                className="w-full h-full object-cover rounded-lg shadow-lg"
                loading="eager"
                onError={(e) => {
                  e.target.src = productPlaceholder
                }}
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-warm-beige rounded-full opacity-50 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Introduction */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="brand-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="brand-heading" className="font-serif text-4xl font-bold text-gray-900 mb-6">
              Handmade Beauty, Made with Love
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Every product in our collection is thoughtfully crafted using natural ingredients. We believe in creating beauty solutions that are gentle, effective, and respectful to your skin.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">🌿</div>
                <h3 className="font-serif font-bold text-lg mb-2">Natural</h3>
                <p className="text-sm text-gray-600">Made from natural ingredients</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">✋</div>
                <h3 className="font-serif font-bold text-lg mb-2">Handmade</h3>
                <p className="text-sm text-gray-600">Crafted with care and attention</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">💖</div>
                <h3 className="font-serif font-bold text-lg mb-2">Love</h3>
                <p className="text-sm text-gray-600">Made with passion and dedication</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-cream" aria-labelledby="featured-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Featured Products"
            subtitle="Explore our most popular handmade beauty solutions"
          />

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Link
              to="/products"
              className="inline-block px-8 py-3 border-2 border-earth-brown text-earth-brown hover:bg-earth-brown hover:text-white font-bold rounded-lg transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="gallery-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Gallery"
            subtitle="See our handmade beauty products in action"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="relative overflow-hidden rounded-lg bg-cream aspect-square">
                <img
                  src={`/images/gallery/photo-0${num}.jpg`}
                  alt={`Gallery image ${num}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/gallery"
              className="inline-block px-8 py-3 bg-earth-brown hover:bg-earth-brown/90 text-white font-bold rounded-lg transition-colors"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="py-16 md:py-24 bg-earth-brown text-white" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-heading" className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Have Questions?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Chat with us on WhatsApp to learn more about our products, ingredients, pricing, and availability.
          </p>
          <WhatsAppButton
            variant="compact"
            label="Chat on WhatsApp"
            className="!bg-white !text-earth-brown hover:!bg-gray-100"
          />
        </div>
      </section>
    </>
  )
}

export default Home
