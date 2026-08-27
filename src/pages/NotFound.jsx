import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        <h1 className="font-serif text-6xl font-bold text-gray-900 mb-4">
          404
        </h1>
        <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <div className="space-y-3">
          <Link
            to="/"
            className="block w-full px-6 py-3 bg-earth-brown hover:bg-earth-brown/90 text-white font-bold rounded-lg transition-colors"
          >
            Back to Home
          </Link>
          <Link
            to="/products"
            className="block w-full px-6 py-3 border-2 border-earth-brown text-earth-brown hover:bg-earth-brown hover:text-white font-bold rounded-lg transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFound
