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
    .map((c) => singleMap[c] ?? c)
    .join('')
}

type StudyItem = {
  title: string
  href: string
}

type EducationContent = {
  title: string
  heading: string
  studies: StudyItem[]
  introText: string
  applyText: string
  applyLink: string
  quotaText: string
  quotaLink: string
  infoText1: string
  infoLink: string
  infoText2: string
  button: string
  belarusText: string
  belarusLink: string
}

const srLatin: EducationContent = {
  title: 'OBRAZOVANJE',
  heading: 'BESPLATNO VISOKO OBRAZOVANJE U RUSIJI',
  studies: [
    { title: 'Osnovne studije', href: '/obrazovanje/osnovne-studije' },
    { title: 'Master studije', href: '/obrazovanje/master-studije' },
    { title: 'Doktorske studije', href: '/obrazovanje/doktorske-studije' },
  ],
  introText:
    'Istok info pult pruža informacije o mogućnostima školovanja u Rusiji i Belorusiji, kao i pomoć prilikom izbora visokoobrazovne ustanove, prikupljanja dokumentacije i podnošenja prijave.',
  quotaText: 'Informacije o obrazovanju u Rusiji dostupne su na sajtu Ruskog doma',
  quotaLink: 'ruskidom.rs/sr/kvota',
  applyText: 'Podnesite prijavu i registrujte se na sajtu',
  applyLink: 'education-in-russia.com',
  infoText1:
    'O univerzitetima, smerovima i strukama možete se informisati na sajtu Ministarstva obrazovanja Rusije',
  infoLink: 'russia-edu.minobrnauki.gov.ru',
  infoText2: 'ili u kancelariji Istok Info Pult u Maksima Gorkog 2a.',
  button: 'Otvori stranicu',
  belarusText:
    'Informacije o mogućnostima obrazovanja u Belorusiji za strane državljane dostupne su na specijalizovanom web sajtu studiranje u Belorusiji',
  belarusLink: 'studyinby.com',
}

const ruText: EducationContent = {
  title: 'ОБРАЗОВАНИЕ',
  heading: 'БЕСПЛАТНОЕ ВЫСШЕЕ ОБРАЗОВАНИЕ В РОССИИ',
  studies: [
    { title: 'Бакалавриат', href: '/obrazovanje/osnovne-studije' },
    { title: 'Магистратура', href: '/obrazovanje/master-studije' },
    { title: 'Докторантура', href: '/obrazovanje/doktorske-studije' },
  ],
  introText:
    'Исток Инфо Пульт предоставляет информацию о возможностях обучения в России и Белоруссии, а также помощь при выборе высшего учебного заведения, сборе документов и подаче заявки.',
  quotaText: 'Информация об образовании в России доступна на сайте Русского дома',
  quotaLink: 'ruskidom.rs/sr/kvota',
  applyText: 'Подайте заявку и зарегистрируйтесь на сайте',
  applyLink: 'education-in-russia.com',
  infoText1:
    'Об университетах, направлениях и специальностях вы можете узнать на сайте Министерства образования России',
  infoLink: 'russia-edu.minobrnauki.gov.ru',
  infoText2: 'или в офисе Исток Инфо Пульт по адресу Максима Горького 2а.',
  button: 'Открыть страницу',
  belarusText:
    'Информация о возможностях обучения в Белоруссии для иностранных граждан доступна на специализированном сайте study in Belarus',
  belarusLink: 'studyinby.com',
}

export default function ObrazovanjePage() {
  const { language, script } = useLanguage()

  const content: EducationContent =
    language === 'ru'
      ? ruText
      : script === 'cyr'
        ? {
            title: latinToCyrillic(srLatin.title),
            heading: latinToCyrillic(srLatin.heading),
            studies: srLatin.studies.map((i) => ({
              ...i,
              title: latinToCyrillic(i.title),
            })),
            introText: latinToCyrillic(srLatin.introText),
            quotaText: latinToCyrillic(srLatin.quotaText),
            quotaLink: srLatin.quotaLink,
            applyText: latinToCyrillic(srLatin.applyText),
            applyLink: srLatin.applyLink,
            infoText1: latinToCyrillic(srLatin.infoText1),
            infoLink: srLatin.infoLink,
            infoText2: latinToCyrillic(srLatin.infoText2),
            button: latinToCyrillic(srLatin.button),
            belarusText: latinToCyrillic(srLatin.belarusText),
            belarusLink: srLatin.belarusLink,
          }
        : srLatin

  return (
    <main className="relative min-h-screen px-4 py-8 text-white sm:px-6 md:px-8 md:py-12">
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/pozadina1.png')" }}
      />

      <div className="fixed inset-0 -z-10 bg-black/40" />

      <div className="relative z-10">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h1 className="mb-4 text-4xl font-extrabold uppercase tracking-[0.18em] sm:text-5xl">
              {content.title}
            </h1>
            <div className="mx-auto h-1 w-28 rounded-full bg-yellow-400" />
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 rounded-3xl border border-white/10 bg-black/20 p-6 backdrop-blur-md md:p-10"
          >
            <h2 className="mb-8 text-center text-2xl font-bold text-yellow-400 md:text-3xl">
              {content.heading}
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {content.studies.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Link
                    href={item.href}
                    className="block rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/10"
                  >
                    <div className="mb-4 text-2xl text-yellow-400">✦</div>
                    <h3 className="mb-4 text-xl font-bold">{item.title}</h3>
                    <span className="text-yellow-300">{content.button}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4 rounded-3xl border border-white/10 bg-black/20 p-6 backdrop-blur-md md:p-10"
          >
            <p className="mb-4 text-2xl text-yellow-400">{content.introText}</p>

            <p>
              {content.quotaText}{' '}
              <a
                href="https://ruskidom.rs/sr/kvota"
                target="_blank"
                rel="noreferrer"
                className="text-yellow-400 hover:underline"
              >
                {content.quotaLink}
              </a>
            </p>

            <p>
              {content.applyText}{' '}
              <a
                href="https://education-in-russia.com"
                target="_blank"
                rel="noreferrer"
                className="text-yellow-400 hover:underline"
              >
                {content.applyLink}
              </a>
            </p>

            <p>
              {content.infoText1}{' '}
              <a
                href="https://russia-edu.minobrnauki.gov.ru"
                target="_blank"
                rel="noreferrer"
                className="text-yellow-400 hover:underline"
              >
                {content.infoLink}
              </a>{' '}
              {content.infoText2}
            </p>

            <p>
              {content.belarusText}{' '}
              <a
                href="https://studyinby.com/"
                target="_blank"
                rel="noreferrer"
                className="text-yellow-400 hover:underline"
              >
                {content.belarusLink}
              </a>
            </p>
          </motion.section>
        </div>
      </div>
    </main>
  )
}