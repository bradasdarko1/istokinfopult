'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/components/LanguageProvider'

export default function Navbar() {
  const { language, script, toggleLanguage, toggleScript, t } = useLanguage()
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)

  const [open, setOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  const menuItems = [
    {
      title: t('news'),
      href: '/vesti',
      children: [
        { title: t('serbia'), href: '/vesti/srbija' },
        { title: t('world'), href: '/vesti/svet' },
        { title: t('politics'), href: '/vesti/politika' },
      ],
    },
    {
      title: t('freeRussianClasses'),
      href: '/ruski-jezik',
      children: [
        { title: t('beginnerLevel'), href: '/ruski-jezik/pocetni' },
        { title: t('intermediateLevel'), href: '/ruski-jezik/srednji' },
        { title: t('materials'), href: '/ruski-jezik/materijali' },
      ],
    },
    {
      title: t('cinema'),
      href: '/bioskop',
      children: [
        { title: t('repertoire'), href: '/bioskop/repertoar' },
        { title: t('announcements'), href: '/bioskop/najave' },
      ],
    },
    {
      title: t('education'),
      href: '/obrazovanje',
      children: [
        { title: t('basicStudies'), href: '/obrazovanje/osnovne-studije' },
        { title: t('masterStudies'), href: '/obrazovanje/master-studije' },
        { title: t('doctoralStudies'), href: '/obrazovanje/doktorske-studije' },
      ],
    },
    {
      title: t('culture'),
      href: '/kultura',
      children: [
        { title: t('events'), href: '/kultura/dogadjaji' },
        { title: t('exhibitions'), href: '/kultura/izlozbe' },
      ],
    },
    {
      title: t('friends'),
      href: '/prijatelji',
      children: [
      
      ],
    },
    {
      title: t('aboutUs'),
      href: '/o-nama',
      children: [
        { title: t('mission'), href: '/o-nama/misija' },
        { title: t('contact'), href: '/o-nama/kontakt' },
      ],
    },
  ]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
        setActiveSubmenu(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    setOpen(false)
    setActiveSubmenu(null)
  }, [pathname])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6 py-4">
        <div className="justify-self-start">
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-white/20"
              type="button"
            >
              <span className="text-lg leading-none">☰</span>
              <span>{t('content')}</span>

              <svg
                className={`h-4 w-4 transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <div
              className={`absolute left-0 mt-3 w-[360px] origin-top-left overflow-hidden rounded-2xl border border-white/10 bg-black/90 shadow-2xl backdrop-blur-xl transition-all duration-300 ${
                open
                  ? 'pointer-events-auto translate-y-0 opacity-100'
                  : 'pointer-events-none -translate-y-2 opacity-0'
              }`}
            >
              <div className="border-b border-white/10 px-4 py-3 text-sm font-semibold text-white/80">
                {t('siteSections')}
              </div>

              <div className="max-h-[70vh] overflow-y-auto p-2">
                {menuItems.map((item) => {
                  const submenuOpen = activeSubmenu === item.title
                  const itemActive = isActive(item.href)

                  return (
                    <div
                      key={item.href}
                      className="mb-1 overflow-hidden rounded-xl border border-transparent bg-white/[0.02]"
                    >
                      <div className="flex items-center">
                        <Link
                          href={item.href}
                          className={`flex-1 rounded-l-xl px-4 py-3 text-sm font-medium transition ${
                            itemActive
                              ? 'bg-white/15 text-white'
                              : 'text-white/90 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          {item.title}
                        </Link>

                        {item.children && item.children.length > 0 && (
                          <button
                            onClick={() =>
                              setActiveSubmenu(submenuOpen ? null : item.title)
                            }
                            className="mr-2 rounded-lg p-2 text-white/80 transition hover:bg-white/10 hover:text-white"
                            aria-label={`Otvori podmeni za ${item.title}`}
                            type="button"
                          >
                            <svg
                              className={`h-4 w-4 transition-transform duration-300 ${
                                submenuOpen ? 'rotate-180' : 'rotate-0'
                              }`}
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        )}
                      </div>

                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          submenuOpen
                            ? 'grid-rows-[1fr] opacity-100'
                            : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="border-t border-white/10 bg-white/[0.03] px-2 py-2">
                            {item.children?.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={`mb-1 block rounded-lg px-4 py-2.5 text-sm transition last:mb-0 ${
                                  isActive(child.href)
                                    ? 'bg-white/15 text-white'
                                    : 'text-white/75 hover:bg-white/10 hover:text-white'
                                }`}
                              >
                                {child.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <Link
          href="/"
          className="flex flex-col items-center justify-center text-center"
        >
          <img
            src="/static/favicons/logo.png"
            alt="Istok Info Pult logo"
            className="h-24 w-24 object-contain drop-shadow-xl transition duration-300 hover:scale-105 sm:h-28 sm:w-28 lg:h-32 lg:w-32"
          />
          <span
            className={`mt-2 text-2xl font-black text-white drop-shadow-lg sm:text-3xl ${
              language === 'ru' ? 'tracking-wide' : 'tracking-[0.14em]'
            }`}
          >
            {t('siteName')}
          </span>
        </Link>

        <div className="justify-self-end">
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold text-white transition duration-300 hover:bg-white/20"
              title="Promena jezika"
              type="button"
            >
              {language === 'sr' ? 'SR' : 'RU'}
            </button>

            {language === 'sr' && (
              <button
                onClick={toggleScript}
                className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold text-white transition duration-300 hover:bg-white/20"
                title="Promena pisma"
                type="button"
              >
                {script === 'cyr' ? 'ЋИР' : 'LAT'}
              </button>
            )}

            <a
              href="https://www.instagram.com/istokinfopult/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition duration-300 hover:scale-105 hover:bg-white/20"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.8-.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z" />
              </svg>
            </a>

            <a
              href="https://www.youtube.com/@lokalitettv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              title="YouTube"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition duration-300 hover:scale-105 hover:bg-white/20"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M21.6 7.2s-.2-1.5-.8-2.2c-.7-.9-1.5-.9-1.9-1C16.1 3.7 12 3.7 12 3.7s-4.1 0-6.9.3c-.4.1-1.2.1-1.9 1-.6.7-.8 2.2-.8 2.2S2 9 2 10.8v1.4C2 14 2.4 16 2.4 16s.2 1.5.8 2.2c.7.9 1.6.9 2 .9 1.5.1 6.8.3 6.8.3s4.1 0 6.9-.3c.4-.1 1.2-.1 1.9-.9.6-.7.8-2.2.8-2.2s.4-2 .4-3.8v-1.4c0-1.8-.4-3.6-.4-3.6zM10 14.5v-5l5 2.5-5 2.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}