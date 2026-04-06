'use client'

import { useState } from 'react'

type GalleryImage = {
  src: string
  alt?: string
}

type PremiumGalleryProps = {
  images: GalleryImage[]
}

export default function PremiumGallery({ images }: PremiumGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const closeModal = () => setSelectedIndex(null)
  const showPrev = () => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length)
  }
  const showNext = () => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex + 1) % images.length)
  }

  if (!images || images.length === 0) return null

  const heroImage = images[0]
  const restImages = images.slice(1)

  return (
    <>
      <section className="my-10">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">
          <button
            onClick={() => setSelectedIndex(0)}
            className="group relative block w-full text-left"
            aria-label="Otvori glavnu fotografiju"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <img
                src={heroImage.src}
                alt={heroImage.alt || 'Glavna fotografija'}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 w-full p-4 md:p-6">
                <div className="inline-flex items-center rounded-full border border-white/20 bg-black/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md md:text-sm">
                  Fotografije sa događaja
                </div>
              </div>
            </div>
          </button>
        </div>

        {restImages.length > 0 && (
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {restImages.map((image, index) => (
              <button
                key={image.src}
                onClick={() => setSelectedIndex(index + 1)}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                aria-label={`Otvori fotografiju ${index + 2}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt || `Fotografija ${index + 2}`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 transition duration-300 group-hover:bg-black/0" />
                </div>
              </button>
            ))}
          </div>
        )}
      </section>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
            >
              Zatvori
            </button>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl">
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt || `Fotografija ${selectedIndex + 1}`}
                className="max-h-[85vh] w-full object-contain"
              />
            </div>

            {images.length > 1 && (
              <>
                <button
                  onClick={showPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 px-4 py-3 text-2xl text-white backdrop-blur-md transition hover:bg-black/60"
                  aria-label="Prethodna slika"
                >
                  ‹
                </button>

                <button
                  onClick={showNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 px-4 py-3 text-2xl text-white backdrop-blur-md transition hover:bg-black/60"
                  aria-label="Sledeća slika"
                >
                  ›
                </button>
              </>
            )}

            <div className="mt-4 text-center text-sm text-white/70">
              {selectedIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  )
}