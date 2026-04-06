'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/LanguageProvider'

export default function SrbijaPamti() {
  const { language, script, t } = useLanguage()

  const backText =
    language === 'ru'
      ? 'Назад к новостям дня'
      : script === 'cyr'
      ? 'Назад на Вести дана'
      : 'Nazad na Vesti dana'

  const title =
    language === 'ru'
      ? 'Сербия ПОМНИТ!'
      : script === 'cyr'
      ? 'Србија ПАМТИ!'
      : 'Srbija PAMTI!'

  const bodyText =
    language === 'ru'
      ? 'Прошло 27 лет со дня агрессии НАТО против Союзной Республики Югославии, и это никогда не должно быть забыто. Сербия помнит. Сербия помнит. Сербия помнит.'
      : script === 'cyr'
      ? 'Прошло је 27 година од НАТО агресије на СРЈ, да се никад не заборави. Србија памти. Србија памти. Србија памти.'
      : 'Prošlo je 27 godina od NATO agresije na SRJ, da se nikad ne zaboravi. Srbija pamti. Srbija pamti. Srbija pamti.'

  return (
    <div className="mx-auto max-w-4xl px-6 py-8">
      <Link
        href="/vesti"
        className="group mb-8 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-black/50 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md shadow-md transition-all duration-300 hover:bg-white/20 hover:shadow-xl"
      >
        <span className="transition-transform duration-300 group-hover:-translate-x-1">
          ←
        </span>
        {backText}
      </Link>

      <article className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-xl backdrop-blur-md">
        <h1 className="mb-6 text-3xl font-black tracking-wide text-white sm:text-4xl">
          {title}
        </h1>

        <div className="mb-6 overflow-hidden rounded-2xl border border-white/10">
          <img
            src="/static/images/srbijapamti.jpg"
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>

        <p className="text-lg leading-8 text-white/90">{bodyText}</p>
      </article>
    </div>
  )
}