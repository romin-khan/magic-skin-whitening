import { useEffect, useState } from 'react'
import { products } from '../data/products'

function ProductFilter({ selectedCategory, onCategoryChange }) {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    // Extract unique categories from products
    const uniqueCategories = ['All', ...new Set(products.map(p => p.category).filter(Boolean))]
    setCategories(uniqueCategories)
  }, [])

  return (
    <div className="mb-8">
      <h2 className="text-lg font-serif font-bold mb-4">Filter by Category</h2>
      
      {/* Desktop - Horizontal buttons */}
      <div className="hidden sm:flex flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              selectedCategory === category
                ? 'bg-earth-brown text-white'
                : 'bg-warm-beige text-earth-brown hover:bg-soft-tan'
            }`}
            aria-pressed={selectedCategory === category}
            aria-label={`Filter by ${category}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Mobile - Dropdown */}
      <div className="sm:hidden">
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-soft-tan bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-earth-brown"
          aria-label="Select product category"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default ProductFilter
