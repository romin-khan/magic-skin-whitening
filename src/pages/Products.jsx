import { useState, useMemo } from 'react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import ProductFilter from '../components/ProductFilter'
import SectionHeading from '../components/SectionHeading'

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Filter products based on selected category
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') {
      return products
    }
    return products.filter(p => p.category === selectedCategory)
  }, [selectedCategory])

  return (
    <>
      {/* Page Header */}
      <section className="bg-cream py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Products"
            subtitle="Discover our complete collection of handmade beauty products"
          />
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Browse our {products.length} carefully crafted products, each designed to support your skincare journey.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="products-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <ProductFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {/* Results Counter */}
          {filteredProducts.length > 0 && (
            <p className="text-gray-600 mb-8 text-sm">
              Showing {filteredProducts.length} {selectedCategory !== 'All' ? `${selectedCategory} ` : ''}product{filteredProducts.length !== 1 ? 's' : ''}
            </p>
          )}

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="fade-in">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Products
