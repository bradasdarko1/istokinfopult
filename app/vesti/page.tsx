'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useLanguage } from '@/components/LanguageProvider'

const cities = [
  { key: 'newSad', timeZone: 'Europe/Belgrade' },
  { key: 'beijing', timeZone: 'Asia/Shanghai' },
  { key: 'moscow', timeZone: 'Europe/Moscow' },
  { key: 'minsk', timeZone: 'Europe/Minsk' },
] as const

export default function VestiDanas() {
  const { t, language, script } = useLanguage()
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (timeZone: string) =>
    new Intl.DateTimeFormat(language === 'ru' ? 'ru-RU' : 'sr-RS', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone,
    }).format(now)

  const srbijaPamtiTitle =
    language === 'ru'
      ? 'Сербия ПОМНИТ!'
      : script === 'cyr'
        ? 'Србија ПАМТИ!'
        : 'Srbija PAMTI!'

  const vest2Title =
    language === 'ru'
      ? '27 ЛЕТ ЖДАЛИ ЭТОГО ПАМЯТНИКА???'
      : script === 'cyr'
        ? '27 ГОДИНА СЕ ЧЕКАЛО НА ОВАЈ СПОМЕНИК???'
        : '27 GODINA SE ČEKALO NA OVAJ SPOMENIK???'

  const kejVestTitle =
    language === 'ru'
      ? 'На набережной Жертв рейда: инициатива по установке памятника'
      : script === 'cyr'
        ? 'На Кеју жртава рације: иницијатива за споменик'
        : 'Na Keju žrtava racije: inicijativa za spomenik'

  const kejVestExcerpt =
    language === 'ru'
      ? 'Спортсмены и представители Российской Федерации поддержали петицию в Нови-Саде.'
      : script === 'cyr'
        ? 'Спортисти и представници Руске Федерације подржали петицију у Новом Саду.'
        : 'Sportisti i predstavnici Ruske Federacije podržali peticiju u Novom Sadu.'

  const danasnjeVesti = [
    {
      slug: 'kej-zrtava-racije',
      title: kejVestTitle,
      excerpt: kejVestExcerpt,
      image: '/static/images/kej-6.jpg',
    },
    {
      slug: 'spomenik-27-godina',
      title: vest2Title,
      excerpt: '',
      image: '/static/images/spomenik.png',
    },
    {
      slug: 'srbija-pamti',
      title: srbijaPamtiTitle,
      excerpt: '',
      image: '/static/images/srbijapamti.jpg',
    },
    
  ]

  return (
    <div className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
      <div className="xl:pr-[300px]">
        <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
          {t('todayNews')}
        </h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {danasnjeVesti.map((vest) => (
            <Link key={vest.slug} href={`/vesti/${vest.slug}`}>
              <div className="group h-full cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-lg backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="h-[220px] w-full overflow-hidden sm:h-[250px]">
                  <img
                    src={vest.image}
                    alt={vest.title}
                    className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${
                      vest.slug === 'spomenik-27-godina'
                        ? 'object-[center_30%]'
                        : 'object-center'
                    }`}
                  />
                </div>

                <div className="p-4 sm:p-5">
                  <h2 className="text-xl font-bold leading-snug text-white">
                    <span
                      style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {vest.title}
                    </span>
                  </h2>

                  {vest.excerpt && (
                    <p className="mt-2 text-sm leading-6 text-white/65">
                      {vest.excerpt}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="hidden xl:block">
        <div className="fixed right-6 top-52 w-[260px]">
          <aside className="rounded-2xl border border-white/10 bg-black/50 p-4 text-white shadow-xl backdrop-blur-md">
            <h2 className="mb-4 text-lg font-bold">{t('time')}</h2>

            <div className="space-y-3">
              {cities.map((city) => (
                <div
                  key={city.key}
                  className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2"
                >
                  <span className="text-sm text-white/70">{t(city.key)}</span>
                  <span className="font-mono text-sm font-semibold">
                    {formatTime(city.timeZone)}
                  </span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}