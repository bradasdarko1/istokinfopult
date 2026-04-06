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

type ComingSoonBannerProps = {
  srTitle: string
  ruTitle: string
}

export default function ComingSoonBanner({
  srTitle,
  ruTitle,
}: ComingSoonBannerProps) {
  const { language, script } = useLanguage()

  const srContent = {
    title: srTitle,
    soon: 'USKORO...',
  }

  const ruContent = {
    title: ruTitle,
    soon: 'СКОРО...',
  }

  const content =
    language === 'ru'
      ? ruContent
      : script === 'cyr'
        ? {
            title: latinToCyrillic(srContent.title),
            soon: latinToCyrillic(srContent.soon),
          }
        : srContent

  return (
    <main className="min-h-screen bg-black px-4 py-8 text-white sm:px-6 md:px-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-[28px] border border-yellow-500/50 bg-yellow-500/10 px-6 py-10 text-center shadow-[0_0_35px_rgba(234,179,8,0.08)] backdrop-blur-[2px] sm:px-10 sm:py-14 md:px-16 md:py-16"
        >
          <h1 className="text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl md:text-5xl">
            {content.title}
          </h1>

          <div className="mx-auto my-6 h-px w-32 bg-yellow-500/60" />

          <p className="text-2xl font-bold uppercase tracking-wide text-yellow-400 sm:text-3xl md:text-4xl">
            {content.soon}
          </p>
        </motion.section>
      </div>
    </main>
  )
}