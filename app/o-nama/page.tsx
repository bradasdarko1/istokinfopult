'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/components/LanguageProvider'

function latinToCyrillic(text: string) {
  const multiMap: Record<string, string> = {
    Dž: 'Џ',
    DŽ: 'Џ',
    dž: 'џ',
    Lj: 'Љ',
    LJ: 'Љ',
    lj: 'љ',
    Nj: 'Њ',
    NJ: 'Њ',
    nj: 'њ',
  }

  let result = text

  Object.entries(multiMap).forEach(([latin, cyr]) => {
    result = result.split(latin).join(cyr)
  })

  const singleMap: Record<string, string> = {
    A: 'А', B: 'Б', C: 'Ц', Č: 'Ч', Ć: 'Ћ', D: 'Д', Đ: 'Ђ',
    E: 'Е', F: 'Ф', G: 'Г', H: 'Х', I: 'И', J: 'Ј',
    K: 'К', L: 'Л', M: 'М', N: 'Н', O: 'О', P: 'П',
    R: 'Р', S: 'С', Š: 'Ш', T: 'Т', U: 'У', V: 'В',
    Z: 'З', Ž: 'Ж',
    a: 'а', b: 'б', c: 'ц', č: 'ч', ć: 'ћ', d: 'д', đ: 'ђ',
    e: 'е', f: 'ф', g: 'г', h: 'х', i: 'и', j: 'ј',
    k: 'к', l: 'л', m: 'м', n: 'н', o: 'о', p: 'п',
    r: 'р', s: 'с', š: 'ш', t: 'т', u: 'у', v: 'в',
    z: 'з', ž: 'ж',
  }

  return result
    .split('')
    .map((char) => singleMap[char] ?? char)
    .join('')
}

const srLatin = {
  title: 'O NAMA',
  intro:
    'Istok Info Pult je mesto informisanja, povezivanja i kulturne razmene. Ova sekcija pruža kratak pregled naše misije i osnovnih kontakt informacija.',
  missionTitle: 'Misija',
  missionText:
    'Saznajte više o ciljevima, delovanju i ulozi Istok Info Pulta u povezivanju Srbije sa Istokom.',
  contactTitle: 'Kontakt',
  contactText:
    'Pronađite našu adresu, email i broj telefona za saradnju, pitanja i organizaciju događaja.',
  button: 'Otvori stranicu',
  slogan: 'Mesto susreta ideja, ljudi i mogućnosti.',
}

const ruText = {
  title: 'О НАС',
  intro:
    'Исток Инфо Пульт — это место информирования, объединения и культурного обмена. В этом разделе представлен краткий обзор нашей миссии и основных контактных данных.',
  missionTitle: 'Миссия',
  missionText:
    'Узнайте больше о целях, деятельности и роли Исток Инфо Пульта в развитии связей Сербии с Востоком.',
  contactTitle: 'Контакты',
  contactText:
    'Найдите наш адрес, email и номер телефона для сотрудничества, вопросов и организации мероприятий.',
  button: 'Открыть страницу',
  slogan: 'Место встречи идей, людей и возможностей.',
}

export default function ONamaPage() {
  const { language, script } = useLanguage()

  const content =
    language === 'ru'
      ? ruText
      : script === 'cyr'
        ? {
            title: latinToCyrillic(srLatin.title),
            intro: latinToCyrillic(srLatin.intro),
            missionTitle: latinToCyrillic(srLatin.missionTitle),
            missionText: latinToCyrillic(srLatin.missionText),
            contactTitle: latinToCyrillic(srLatin.contactTitle),
            contactText: latinToCyrillic(srLatin.contactText),
            button: latinToCyrillic(srLatin.button),
            slogan: latinToCyrillic(srLatin.slogan),
          }
        : srLatin

  return (
    <main className="min-h-screen text-white px-4 py-8 sm:px-6 md:px-8 md:py-12">
      <div className="mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="mb-14 text-center"
        >
          <h1 className="text-4xl font-extrabold uppercase tracking-[0.2em] sm:text-5xl md:text-6xl">
            {content.title}
          </h1>
          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-yellow-400" />
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
            {content.intro}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">

          {/* MISIJA */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
          >
            <Link
              href="/o-nama/misija"
              className="group block h-full rounded-3xl border border-white/10 bg-black/20 backdrop-blur-md p-8 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-white/10"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/15 text-2xl text-yellow-400">
                ✦
              </div>

              <h2 className="mb-4 text-2xl font-bold text-yellow-400 md:text-3xl">
                {content.missionTitle}
              </h2>

              <p className="mb-8 text-lg leading-8 text-gray-300">
                {content.missionText}
              </p>

              <span className="inline-flex rounded-xl border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 font-semibold text-yellow-300 transition group-hover:bg-yellow-400 group-hover:text-black">
                {content.button}
              </span>
            </Link>
          </motion.div>

          {/* KONTAKT */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24 }}
          >
            <Link
              href="/o-nama/kontakt"
              className="group block h-full rounded-3xl border border-white/10 bg-black/20 backdrop-blur-md p-8 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-white/10"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/15 text-2xl text-yellow-400">
                ☎
              </div>

              <h2 className="mb-4 text-2xl font-bold text-yellow-400 md:text-3xl">
                {content.contactTitle}
              </h2>

              <p className="mb-8 text-lg leading-8 text-gray-300">
                {content.contactText}
              </p>

              <span className="inline-flex rounded-xl border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 font-semibold text-yellow-300 transition group-hover:bg-yellow-400 group-hover:text-black">
                {content.button}
              </span>
            </Link>
          </motion.div>
        </div>

        {/* SLOGAN */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.36 }}
          className="mt-14 rounded-3xl border border-yellow-400/20 bg-black/20 backdrop-blur-md p-8 text-center"
        >
          <p className="text-lg font-semibold uppercase tracking-wide text-yellow-300 md:text-xl">
            {content.slogan}
          </p>
        </motion.div>

      </div>
    </main>
  )
}