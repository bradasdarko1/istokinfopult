'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/LanguageProvider'

export default function KontaktPage() {
  const { language, script } = useLanguage()

  const isRU = language === 'ru'
  const isCyr = script === 'cyr'

  const text = {
    title: isRU ? 'КОНТАКТ' : isCyr ? 'КОНТАКТ' : 'KONTAKT',
    addressLabel: isRU ? 'Адрес' : isCyr ? 'Адреса' : 'Adresa',
    emailLabel: isRU ? 'Электронная почта' : isCyr ? 'Имејл' : 'Email',
    phoneLabel: isRU ? 'Телефон' : isCyr ? 'Телефон' : 'Telefon',
    mapButton: isRU
      ? 'Открыть в Google Maps'
      : isCyr
        ? 'Отвори у Google Maps'
        : 'Otvori u Google Maps',
  }

  return (
    <main className="min-h-screen px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-extrabold tracking-widest sm:text-5xl">
            {text.title}
          </h1>
          <div className="mx-auto mt-4 h-1 w-24 bg-yellow-400" />
        </motion.div>

        {/* GLAVNI BLOK */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-10 rounded-3xl border border-white/10 bg-black/20 backdrop-blur-md p-8 md:p-10"
        >

          {/* MAP BOX */}
          <div className="mb-8 rounded-2xl border border-yellow-400/20 bg-black/20 backdrop-blur-md p-8 text-center">
            <p className="text-lg font-medium text-gray-200 md:text-xl">
              Maksima Gorkog 2a, Novi Sad
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Maksima+Gorkog+2a+Novi+Sad"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-xl bg-yellow-400 px-5 py-3 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-yellow-300"
            >
              {text.mapButton}
            </a>
          </div>

          {/* INFO */}
          <div className="space-y-6 text-lg text-gray-300 md:text-xl">
            <div>
              <span className="font-semibold text-yellow-400">
                {text.addressLabel}:
              </span>{' '}
              Maksima Gorkog 2a, Novi Sad
            </div>

            <div>
              <span className="font-semibold text-yellow-400">
                {text.emailLabel}:
              </span>{' '}
              <a
                href="mailto:istokinfopult@gmail.com"
                className="transition hover:text-white"
              >
                istokinfopult@gmail.com
              </a>
            </div>

            <div>
              <span className="font-semibold text-yellow-400">
                {text.phoneLabel}:
              </span>{' '}
              <a
                href="tel:+38166133231"
                className="transition hover:text-white"
              >
                066/133-231
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </main>
  )
}