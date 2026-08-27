import { Link } from 'react-router-dom'
import { business } from '../data/business'

function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <footer className="bg-earth-brown text-white mt-20" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={business.logo} 
                alt={business.name}
                className="h-12 w-12 object-contain bg-white rounded-lg p-1"
                loading="lazy"
              />
              <span className="font-serif text-lg font-bold">{business.name}</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              {business.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${business.phone}`}
                  className="text-white/80 hover:text-white transition-colors flex items-center space-x-2"
                >
                  <span>📞</span>
                  <span>{business.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent('Hi, I would like to know more about your products.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors flex items-center space-x-2"
                >
                  <span>💬</span>
                  <span>WhatsApp</span>
                </a>
              </li>
              {business.instagram && (
                <li>
                  <a
                    href={business.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors flex items-center space-x-2"
                  >
                    <span>📸</span>
                    <span>Instagram</span>
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Hours</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              {business.openingHours}
            </p>
            {business.googleMaps && (
              <a
                href={business.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors"
              >
                Get Directions
              </a>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          {/* Social Links */}
          {business.instagram && (
            <div className="flex justify-center mb-6">
              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Visit our Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z" />
                </svg>
              </a>
            </div>
          )}

          {/* Copyright */}
          <div className="text-center text-white/60 text-sm">
            <p>&copy; {currentYear} {business.name}. All rights reserved.</p>
            <p className="mt-2">Handmade beauty products made with love</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
