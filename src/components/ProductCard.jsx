import { Link } from 'react-router-dom'

const productPlaceholder = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
    <rect width="800" height="800" fill="#f7f1ea"/>
    <rect x="120" y="120" width="560" height="560" rx="28" fill="#efe2d3"/>
    <text x="400" y="390" text-anchor="middle" font-family="Arial, sans-serif" font-size="34" fill="#7a5b45" font-weight="700">Image unavailable</text>
    <text x="400" y="445" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" fill="#9a7d68">Product image coming soon</text>
  </svg>
`)}`

function ProductCard({ product }) {
  const handleImageError = (e) => {
    e.target.src = productPlaceholder
  }

  return (
    <Link
      to={`/products/${product.id}`}
      className="group block h-full"
      aria-label={`View details for ${product.name}`}
    >
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden h-full flex flex-col border border-soft-tan/60">
        <div className="relative overflow-hidden bg-cream aspect-square">
          <img
            src={product.image || productPlaceholder}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            onError={handleImageError}
          />
        </div>

        <div className="p-4 flex-1 flex flex-col">
          {product.category && (
            <span className="inline-block w-fit text-xs font-medium text-earth-brown bg-warm-beige px-2 py-1 rounded mb-2">
              {product.category}
            </span>
          )}

          <h3 className="font-serif font-bold text-lg text-gray-900 mb-2 line-clamp-2">
            {product.name}
          </h3>

          <div className="mb-4 mt-auto">
            <span className="text-2xl font-bold text-earth-brown">
              ₹{product.price}
            </span>
          </div>

          <span className="inline-flex items-center justify-center w-full px-4 py-2 bg-earth-brown hover:bg-earth-brown/90 text-white font-medium rounded-lg transition-colors">
            View Details
          </span>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
