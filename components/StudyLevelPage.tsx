'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/LanguageProvider'
import { universities, StudyLevel, University } from '@/data/universities'

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

function transformSr(text: string, script: 'lat' | 'cyr') {
  return script === 'cyr' ? latinToCyrillic(text) : text
}

type Props = {
  level: StudyLevel
}

export default function StudyLevelPage({ level }: Props) {
  const { language, script } = useLanguage()

  const filtered = universities.filter((uni) => uni.levels.includes(level))

  const ui = {
    basic: {
      sr: {
        title: 'OSNOVNE STUDIJE',
        subtitle: 'Neki od univerziteta koje izdvajamo',
        button: 'Poseti sajt',
        programs: 'Programi',
        note: 'Napomena',
      },
      ru: {
        title: 'БАКАЛАВРИАТ',
        subtitle: 'Подборка университетов для бакалавриата',
        button: 'Перейти на сайт',
        programs: 'Программы',
        note: 'Примечание',
      },
    },
    master: {
      sr: {
        title: 'MASTER STUDIJE',
        subtitle: 'Neki od univerziteta koje izdvajamo',
        button: 'Poseti sajt',
        programs: 'Programi',
        note: 'Napomena',
      },
      ru: {
        title: 'МАГИСТРАТУРА',
        subtitle: 'Подборка университетов для магистратуры',
        button: 'Перейти на сайт',
        programs: 'Программы',
        note: 'Примечание',
      },
    },
    doctoral: {
      sr: {
        title: 'DOKTORSKE STUDIJE',
        subtitle: 'Neki od univerziteta koje izdvajamo',
        button: 'Poseti sajt',
        programs: 'Programi',
        note: 'Napomena',
      },
      ru: {
        title: 'ДОКТОРАНТУРА',
        subtitle: 'Подборка университетов для докторских программ',
        button: 'Перейти на сайт',
        programs: 'Программы',
        note: 'Примечание',
      },
    },
  }

  const currentUi = language === 'ru' ? ui[level].ru : ui[level].sr

  const renderUi = (value: string) =>
    language === 'sr' ? transformSr(value, script) : value

  const getText = (value: { sr: string; ru: string }) => {
    const selected = language === 'ru' ? value.ru : value.sr
    return language === 'sr' ? transformSr(selected, script) : selected
  }

  const getPrograms = (uni: University) => {
    const selected = language === 'ru' ? uni.programs.ru : uni.programs.sr
    return language === 'sr' && script === 'cyr'
      ? selected.map((item) => transformSr(item, script))
      : selected
  }

  return (
    <main className="relative min-h-screen px-4 py-8 text-white sm:px-6 md:px-8 md:py-12">
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg.jpg')" }}
      />

      <div className="fixed inset-0 -z-10 bg-black/45" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h1 className="mb-4 text-4xl font-extrabold uppercase tracking-[0.14em] sm:text-5xl">
            {renderUi(currentUi.title)}
          </h1>

          <div className="mx-auto h-1 w-28 rounded-full bg-yellow-400" />

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            {renderUi(currentUi.subtitle)}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((uni, index) => (
            <motion.a
              key={uni.slug}
              href={uni.website}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="block rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_rgba(255,255,255,0.04)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-white/10"
            >
              <h2 className="mb-2 text-xl font-bold text-yellow-400 md:text-2xl">
                {getText(uni.name)}
              </h2>

              <p className="mb-4 text-sm text-gray-400">
                📍 {getText(uni.city)}, {getText(uni.country)}
              </p>

              <p className="mb-5 text-base leading-7 text-gray-300">
                {getText(uni.description)}
              </p>

              <div className="mb-4">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-white/70">
                  {renderUi(currentUi.programs)}
                </p>

                <div className="flex flex-wrap gap-2">
                  {getPrograms(uni).map((program) => (
                    <span
                      key={program}
                      className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-sm text-yellow-300"
                    >
                      {program}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-sm text-gray-400">
                <span className="font-semibold text-white/70">
                  {renderUi(currentUi.note)}:
                </span>{' '}
                {getText(uni.note)}
              </p>

              <div className="mt-5 font-semibold text-yellow-400">
                {renderUi(currentUi.button)} →
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </main>
  )
}