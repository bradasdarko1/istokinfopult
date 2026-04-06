'use client'

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
    A: 'А',
    B: 'Б',
    C: 'Ц',
    Č: 'Ч',
    Ć: 'Ћ',
    D: 'Д',
    Đ: 'Ђ',
    E: 'Е',
    F: 'Ф',
    G: 'Г',
    H: 'Х',
    I: 'И',
    J: 'Ј',
    K: 'К',
    L: 'Л',
    M: 'М',
    N: 'Н',
    O: 'О',
    P: 'П',
    R: 'Р',
    S: 'С',
    Š: 'Ш',
    T: 'Т',
    U: 'У',
    V: 'В',
    Z: 'З',
    Ž: 'Ж',
    a: 'а',
    b: 'б',
    c: 'ц',
    č: 'ч',
    ć: 'ћ',
    d: 'д',
    đ: 'ђ',
    e: 'е',
    f: 'ф',
    g: 'г',
    h: 'х',
    i: 'и',
    j: 'ј',
    k: 'к',
    l: 'л',
    m: 'м',
    n: 'н',
    o: 'о',
    p: 'п',
    r: 'р',
    s: 'с',
    š: 'ш',
    t: 'т',
    u: 'у',
    v: 'в',
    z: 'з',
    ž: 'ж',
  }

  return result
    .split('')
    .map((char) => singleMap[char] ?? char)
    .join('')
}

const srLatin = {
  category: 'Vesti',
  title: '27 GODINA SE ČEKALO NA OVAJ SPOMENIK???',
  date: 'Objavljeno: 2. april 2026.',
  lead:
    'Posle 27 godina od NATO agresije na SRJ, pokreće se inicijativa za podizanje spomenika žrtvama NATO agresije u Novom Sadu.',
  paragraphs: [
    'Udruženja Lokalitet, Novosađani 1989 i Istok Info Pult pokreću ovu inicijativu u Novom Sadu.',
    'U subotu 04.04. u 12 časova na Keju žrtava racije, kod spomenika „Porodica“, pokrećemo peticiju za ovaj spomenik, a ujedno organizujemo javni intervju sa Đorđem Aničićem, čovekom koji je oborio dva nevidljiva aviona F117.',
    'Dođite da zajedno podignemo spomenik žrtvama NATO agresije.',
  ],
  highlight1: 'NOVOSAĐANI PAMTE ’99',
  highlight2: '04.04. U 12 ČASOVA — SVI NA KEJ!',
}

const ruText = {
  category: 'Новости',
  title: '27 ЛЕТ ЖДАЛИ ЭТОГО ПАМЯТНИКА???',
  date: 'Опубликовано: 2 апреля 2026 г.',
  lead:
    'Спустя 27 лет после агрессии НАТО против Союзной Республики Югославии начинается инициатива по установке памятника жертвам агрессии НАТО в Нови-Саде.',
  paragraphs: [
    'Объединения «Локалитет», «Новосаджани 1989» и «Исток Инфо Пульт» запускают эту инициативу в Нови-Саде.',
    'В субботу, 04.04, в 12:00 на Набережной жертв рейда, у памятника «Семья», мы начинаем сбор подписей за установку этого памятника, а также организуем публичное интервью с Джордже Аничичем — человеком, который сбил два невидимых самолета F117.',
    'Приходите, чтобы вместе установить памятник жертвам агрессии НАТО.',
  ],
  highlight1: 'ЖИТЕЛИ НОВИ-САДА ПОМНЯТ ’99',
  highlight2: '04.04. В 12:00 — ВСЕ НА НАБЕРЕЖНУЮ!',
}

export default function SpomenikVestPage() {
  const { language, script } = useLanguage()

  const content =
    language === 'ru'
      ? ruText
      : script === 'cyr'
        ? {
            category: latinToCyrillic(srLatin.category),
            title: latinToCyrillic(srLatin.title),
            date: latinToCyrillic(srLatin.date),
            lead: latinToCyrillic(srLatin.lead),
            paragraphs: srLatin.paragraphs.map(latinToCyrillic),
            highlight1: latinToCyrillic(srLatin.highlight1),
            highlight2: latinToCyrillic(srLatin.highlight2),
          }
        : srLatin

  return (
    <main className="min-h-screen bg-black px-4 py-8 text-white sm:px-6 md:px-8 md:py-12">
      <article className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
            {content.category}
          </p>

          <h1 className="mb-4 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            {content.title}
          </h1>

          <p className="text-sm text-white/60 md:text-base">{content.date}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mb-8 overflow-hidden rounded-3xl border border-white/10"
        >
          <img
            src="/static/images/spomenik.png"
            alt={content.title}
            className="h-auto w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_rgba(255,255,255,0.04)] backdrop-blur-sm sm:p-8 md:p-10"
        >
          <p className="mb-6 text-lg font-medium leading-8 text-gray-200 md:text-xl">
            {content.lead}
          </p>

          <div className="space-y-6 text-base leading-8 text-gray-300 md:text-lg">
            {content.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-center">
            <p className="text-xl font-extrabold uppercase tracking-wide text-white md:text-2xl">
              {content.highlight1}
            </p>

            <div className="mx-auto my-4 h-px w-24 bg-yellow-400/40" />

            <p className="text-lg font-bold uppercase tracking-wide text-yellow-300 md:text-xl">
              {content.highlight2}
            </p>
          </div>
        </motion.div>
      </article>
    </main>
  )
}