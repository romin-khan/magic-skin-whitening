function ProductGrid({ children, columns = 4 }) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${columns} gap-6`}>
      {children}
    </div>
  )
}

export default ProductGrid
