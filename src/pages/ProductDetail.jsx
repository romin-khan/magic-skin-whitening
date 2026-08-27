import { useParams, Link } from 'react-router-dom'
import { products } from '../data/products'
import { business } from '../data/business'
import WhatsAppButton from '../components/WhatsAppButton'

const productPlaceholder = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
    <rect width="800" height="800" fill="#f7f1ea"/>
    <rect x="120" y="120" width="560" height="560" rx="28" fill="#efe2d3"/>
    <text x="400" y="390" text-anchor="middle" font-family="Arial, sans-serif" font-size="34" fill="#7a5b45" font-weight="700">Image unavailable</text>
    <text x="400" y="445" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" fill="#9a7d68">Product image coming soon</text>
  </svg>
`)}`

function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id, 10))

  if (!product) {
    return (
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, the product you're looking for doesn't exist.
          </p>
          <Link
            to="/products"
            className="inline-block px-8 py-3 bg-earth-brown hover:bg-earth-brown/90 text-white font-bold rounded-lg transition-colors"
          >
            Back to Products
          </Link>
        </div>
      </section>
    )
  }

  const whatsappMessage = `Hi, I am interested in ${product.name}. Listed price: ₹${product.price}. Please share more details and availability.`

  const handleImageError = (e) => {
    e.target.src = productPlaceholder
  }

  return (
    <>
      <div className="bg-cream py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/products" className="hover:text-earth-brown transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-earth-brown font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="flex items-center justify-center bg-cream rounded-lg overflow-hidden aspect-square md:sticky md:top-24 md:h-96 border border-soft-tan/60">
              <img
                src={product.image || productPlaceholder}
                alt={product.name}
                className="w-full h-full object-cover"
                loading="eager"
                onError={handleImageError}
              />
            </div>

            <div className="space-y-6 md:space-y-8">
              {product.category && (
                <span className="inline-block text-xs font-medium text-earth-brown bg-warm-beige px-3 py-1 rounded">
                  {product.category}
                </span>
              )}

              <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900">
                {product.name}
              </h1>

              <div className="border-t border-b border-soft-tan py-6">
                <div className="text-gray-600 text-sm mb-2">Price</div>
                <div className="text-4xl font-bold text-earth-brown">
                  ₹{product.price}
                </div>
              </div>

              {product.shortDescription && (
                <p className="text-lg text-gray-700 leading-relaxed">
                  {product.shortDescription}
                </p>
              )}

              <div className="bg-cream p-6 rounded-lg">
                <h3 className="font-serif font-bold text-lg mb-4">Product Information</h3>
                {product.description && product.description.trim() ? (
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {product.description}
                  </div>
                ) : (
                  <div className="text-gray-600 space-y-3">
                    <p>
                      Product information will be updated soon. Please contact us on WhatsApp for ingredients, usage instructions, availability and other product details.
                    </p>
                  </div>
                )}
              </div>

              <div className="space-y-3 pt-6">
                <div>
                  <h3 className="font-serif font-bold text-lg mb-3">Connect With Us</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <WhatsAppButton
                      message={whatsappMessage}
                      variant="compact"
                      label="Ask on WhatsApp"
                      className="!w-full !justify-center"
                    />

                    <a
                      href={`tel:${business.phone}`}
                      className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
                    >
                      <span>📞</span>
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>

                <div className="bg-soft-tan/30 p-4 rounded-lg text-sm text-gray-700">
                  <p className="font-medium mb-2">Available {business.openingHours}</p>
                  <p className="text-xs text-gray-600">
                    Respond times may vary. WhatsApp is recommended for faster communication.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 pt-6 border-t border-soft-tan">
                <Link
                  to="/products"
                  className="flex-1 px-6 py-3 border border-earth-brown text-earth-brown hover:bg-earth-brown hover:text-white font-medium rounded-lg transition-colors text-center"
                >
                  ← Back to Products
                </Link>
                <a
                  href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors text-center"
                >
                  Chat Now →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream" aria-labelledby="related-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="related-heading" className="font-serif text-4xl font-bold text-center mb-12">
            More Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map(p => (
                <Link
                  key={p.id}
                  to={`/products/${p.id}`}
                  className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-soft-tan/60"
                >
                  <div className="relative overflow-hidden bg-cream aspect-square">
                    <img
                      src={p.image || productPlaceholder}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      onError={handleImageError}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif font-bold text-lg text-gray-900 mb-2 line-clamp-2">
                      {p.name}
                    </h3>
                    <p className="text-2xl font-bold text-earth-brown">
                      ₹{p.price}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductDetail
