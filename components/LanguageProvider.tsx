'use client'

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

type Language = 'sr' | 'ru'
type Script = 'cyr' | 'lat'

type TranslationKey =
  | 'siteName'
  | 'content'
  | 'siteSections'
  | 'news'
  | 'freeRussianClasses'
  | 'cinema'
  | 'education'
  | 'culture'
  | 'friends'
  | 'aboutUs'
  | 'serbia'
  | 'world'
  | 'politics'
  | 'beginnerLevel'
  | 'intermediateLevel'
  | 'materials'
  | 'repertoire'
  | 'announcements'
  | 'courses'
  | 'seminars'
  | 'events'
  | 'exhibitions'
  | 'partners'
  | 'associates'
  | 'mission'
  | 'contact'
  | 'todayNews'
  | 'time'
  | 'newSad'
  | 'beijing'
  | 'moscow'
  | 'minsk'
  | 'basicStudies'
  | 'masterStudies'
  | 'doctoralStudies'
  | 'basicStudies'
  | 'masterStudies'
  | 'doctoralStudies'

const translations: Record<
  TranslationKey,
  {
    sr: { cyr: string; lat: string }
    ru: string
  }
> = {
  siteName: {
    sr: {
      cyr: 'ИСТОК ИНФО ПУЛТ',
      lat: 'ISTOK INFO PULT',
    },
    ru: 'ИСТОК ИНФО ПУЛЬТ',
  },
  content: {
    sr: { cyr: 'Садржај', lat: 'Sadržaj' },
    ru: 'Содержание',
  },
  siteSections: {
    sr: { cyr: 'Секције сајта', lat: 'Sekcije sajta' },
    ru: 'Разделы сайта',
  },
  news: {
    sr: { cyr: 'Вести', lat: 'Vesti' },
    ru: 'Новости',
  },
  freeRussianClasses: {
    sr: {
      cyr: 'Бесплатни часови руског језика',
      lat: 'Besplatni časovi ruskog jezika',
    },
    ru: 'Бесплатные уроки русского языка',
  },
  cinema: {
    sr: { cyr: 'Биоскоп', lat: 'Bioskop' },
    ru: 'Кино',
  },
  education: {
    sr: { cyr: 'Образовање', lat: 'Obrazovanje' },
    ru: 'Образование',
  },
  culture: {
    sr: { cyr: 'Култура', lat: 'Kultura' },
    ru: 'Культура',
  },
  friends: {
    sr: { cyr: 'Пријатељи', lat: 'Prijatelji' },
    ru: 'Друзья',
  },
  aboutUs: {
    sr: { cyr: 'О нама', lat: 'O nama' },
    ru: 'О нас',
  },
  serbia: {
    sr: { cyr: 'Србија', lat: 'Srbija' },
    ru: 'Сербия',
  },
  world: {
    sr: { cyr: 'Свет', lat: 'Svet' },
    ru: 'Мир',
  },
  politics: {
    sr: { cyr: 'Политика', lat: 'Politika' },
    ru: 'Политика',
  },
  beginnerLevel: {
    sr: { cyr: 'Почетни ниво', lat: 'Početni nivo' },
    ru: 'Начальный уровень',
  },
  intermediateLevel: {
    sr: { cyr: 'Средњи ниво', lat: 'Srednji nivo' },
    ru: 'Средний уровень',
  },
  materials: {
    sr: { cyr: 'Материјали', lat: 'Materijali' },
    ru: 'Материалы',
  },
  repertoire: {
    sr: { cyr: 'Репертоар', lat: 'Repertoar' },
    ru: 'Репертуар',
  },
  announcements: {
    sr: { cyr: 'Најаве', lat: 'Najave' },
    ru: 'Анонсы',
  },
  courses: {
    sr: { cyr: 'Курсеви', lat: 'Kursevi' },
    ru: 'Курсы',
  },
  seminars: {
    sr: { cyr: 'Семинари', lat: 'Seminari' },
    ru: 'Семинары',
  },
  events: {
    sr: { cyr: 'Догађаји', lat: 'Događaji' },
    ru: 'События',
  },
  exhibitions: {
    sr: { cyr: 'Изложбе', lat: 'Izložbe' },
    ru: 'Выставки',
  },
  partners: {
    sr: { cyr: 'Партнери', lat: 'Partneri' },
    ru: 'Партнёры',
  },
  associates: {
    sr: { cyr: 'Сарадници', lat: 'Saradnici' },
    ru: 'Сотрудники',
  },
  mission: {
    sr: { cyr: 'Мисија', lat: 'Misija' },
    ru: 'Миссия',
  },
  contact: {
    sr: { cyr: 'Контакт', lat: 'Kontakt' },
    ru: 'Контакты',
  },
  todayNews: {
    sr: { cyr: 'Вести дана', lat: 'Vesti dana' },
    ru: 'Новости дня',
  },
  time: {
    sr: { cyr: 'Време', lat: 'Vreme' },
    ru: 'Время',
  },
  newSad: {
    sr: { cyr: 'Нови Сад', lat: 'Novi Sad' },
    ru: 'Нови-Сад',
  },
  beijing: {
    sr: { cyr: 'Пекинг', lat: 'Peking' },
    ru: 'Пекин',
  },
  moscow: {
    sr: { cyr: 'Москва', lat: 'Moskva' },
    ru: 'Москва',
  },
  minsk: {
    sr: { cyr: 'Минск', lat: 'Minsk' },
    ru: 'Минск',
  },
  basicStudies: {
  sr: { cyr: 'Основне студије', lat: 'Osnovne studije' },
  ru: 'Бакалавриат',
  },
  masterStudies: {
  sr: { cyr: 'Мастер студије', lat: 'Master studije' },
  ru: 'Магистратура',
  },
  doctoralStudies: {
  sr: { cyr: 'Докторске студије', lat: 'Doktorske studije' },
  ru: 'Докторантура',
  }, 
  
}

type LanguageContextType = {
  language: Language
  script: Script
  setLanguage: (value: Language) => void
  setScript: (value: Script) => void
  toggleLanguage: () => void
  toggleScript: () => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [language, setLanguage] = useState<Language>('sr')
  const [script, setScript] = useState<Script>('cyr')

  useEffect(() => {
    const storedLanguage = localStorage.getItem('site-language') as Language | null
    const storedScript = localStorage.getItem('site-script') as Script | null

    if (storedLanguage === 'sr' || storedLanguage === 'ru') {
      setLanguage(storedLanguage)
    }

    if (storedScript === 'cyr' || storedScript === 'lat') {
      setScript(storedScript)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('site-language', language)
    document.documentElement.lang = language === 'ru' ? 'ru' : 'sr'
  }, [language])

  useEffect(() => {
    localStorage.setItem('site-script', script)
  }, [script])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'sr' ? 'ru' : 'sr'))
  }

  const toggleScript = () => {
    setScript((prev) => (prev === 'cyr' ? 'lat' : 'cyr'))
  }

  const t = (key: TranslationKey) => {
    const entry = translations[key]
    if (language === 'ru') return entry.ru
    return entry.sr[script]
  }

  const value = useMemo(
    () => ({
      language,
      script,
      setLanguage,
      setScript,
      toggleLanguage,
      toggleScript,
      t,
    }),
    [language, script]
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage mora da bude unutar LanguageProvider')
  }
  return context
}