import { useState, useEffect } from 'react'
import SectionHeading from '../components/SectionHeading'

function Gallery() {
  const [galleryImages, setGalleryImages] = useState([])

  useEffect(() => {
    // Create gallery images array based on available photos
    const images = []
    for (let i = 1; i <= 10; i++) {
      images.push({
        src: `/images/gallery/photo-${String(i).padStart(2, '0')}.jpg`,
        alt: `Gallery image ${i}`,
      })
    }
    setGalleryImages(images)
  }, [])

  return (
    <>
      {/* Page Header */}
      <section className="bg-cream py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Gallery"
            subtitle="Explore our handmade beauty products and brand atmosphere"
          />
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="gallery-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-cream aspect-square"
                role="img"
                aria-label={image.alt}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    // Handle missing images gracefully
                    e.target.style.display = 'none'
                    e.target.parentElement.classList.add('opacity-50')
                  }}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            ))}
          </div>

          {/* Empty State Message */}
          <div className="text-center mt-12 text-gray-600">
            <p className="mb-4">
              More gallery updates coming soon!
            </p>
            <p className="text-sm">
              Follow us on Instagram for daily updates about our handmade beauty products.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery
