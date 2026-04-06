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
    .map((char) => singleMap[char] ?? char)
    .join('')
}

const srLatin = {
  title: 'BIOSKOP',
  heading: 'FILMSKI PROGRAM ISTOK INFO PULTA',
  intro:
    'U okviru kulturnog programa Istok Info Pulta, posetioci imaju priliku da prate filmske projekcije koje se organizuju u našem prostoru. Cilj ovog programa je da publici približi savremenu i klasičnu rusku kinematografiju, kao i da kroz film otvori prostor za dijalog, razmenu utisaka i novo kulturno iskustvo.',
  text1:
    'Svakog meseca preliminarno dobijamo četiri filma posredstvom Ruskog doma, koji se emituju u kancelarijama Istok Info Pulta. Na taj način naš prostor postaje mesto susreta publike, filma i kulture, uz pažljivo odabran program namenjen svima koji žele da upoznaju rusku umetnost i filmsku tradiciju.',
  text2:
    'Pored samih projekcija, bioskopski program zamišljen je i kao prilika za okupljanje, razgovor i upoznavanje sa različitim temama, autorima i estetikom ruskog filma. Kroz repertoar i najave, posetioci mogu pravovremeno da se informišu o predstojećim projekcijama i sadržajima.',
  cards: [
    {
      title: 'Repertoar',
      text: 'Pregled aktuelnih filmova i raspored projekcija u okviru mesečnog bioskopskog programa.',
      href: '/bioskop/repertoar',
      icon: '🎬',
    },
    {
      title: 'Najave',
      text: 'Informacije o predstojećim projekcijama, posebnim prikazivanjima i novim filmskim sadržajima.',
      href: '/bioskop/najave',
      icon: '📽️',
    },
  ],
  slogan: 'Film kao susret kulture, umetnosti i publike.',
  button: 'Otvori stranicu',
}

const ruText = {
  title: 'КИНО',
  heading: 'КИНОПРОГРАММА ИСТОК ИНФО ПУЛЬТ',
  intro:
    'В рамках культурной программы Исток Инфо Пульт посетители имеют возможность смотреть киносеансы, которые организуются в нашем пространстве. Цель этой программы — познакомить публику с современной и классической русской кинематографией, а также через кино открыть пространство для диалога, обмена впечатлениями и нового культурного опыта.',
  text1:
    'Каждый месяц мы предварительно получаем четыре фильма через Русский дом, которые показываются в офисе Исток Инфо Пульт. Таким образом, наше пространство становится местом встречи зрителей, кино и культуры с тщательно подобранной программой для всех, кто хочет познакомиться с русским искусством и кинотрадицией.',
  text2:
    'Помимо самих показов, кинопрограмма задумана и как возможность для встреч, бесед и знакомства с различными темами, авторами и эстетикой русского кино. Через репертуар и анонсы посетители могут своевременно узнавать о предстоящих показах и событиях.',
  cards: [
    {
      title: 'Репертуар',
      text: 'Обзор актуальных фильмов и расписание показов в рамках ежемесячной кинопрограммы.',
      href: '/bioskop/repertoar',
      icon: '🎬',
    },
    {
      title: 'Анонсы',
      text: 'Информация о предстоящих показах, специальных просмотрах и новых киноматериалах.',
      href: '/bioskop/najave',
      icon: '📽️',
    },
  ],
  slogan: 'Кино как встреча культуры, искусства и зрителя.',
  button: 'Открыть страницу',
}

export default function BioskopPage() {
  const { language, script } = useLanguage()

  const content =
    language === 'ru'
      ? ruText
      : script === 'cyr'
        ? {
            title: latinToCyrillic(srLatin.title),
            heading: latinToCyrillic(srLatin.heading),
            intro: latinToCyrillic(srLatin.intro),
            text1: latinToCyrillic(srLatin.text1),
            text2: latinToCyrillic(srLatin.text2),
            cards: srLatin.cards.map((item) => ({
              ...item,
              title: latinToCyrillic(item.title),
              text: latinToCyrillic(item.text),
            })),
            slogan: latinToCyrillic(srLatin.slogan),
            button: latinToCyrillic(srLatin.button),
          }
        : srLatin

  return (
    <main className="min-h-screen bg-black px-4 py-8 text-white sm:px-6 md:px-8 md:py-12">
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
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mb-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_20px_rgba(255,255,255,0.02)] backdrop-blur-[2px] sm:p-8 md:p-10"
        >
          <h2 className="mb-6 text-center text-2xl font-bold uppercase tracking-wide text-yellow-400 md:text-3xl">
            {content.heading}
          </h2>

          <div className="space-y-6 text-lg leading-8 text-gray-200 md:text-xl">
            <p>{content.intro}</p>
            <p>{content.text1}</p>
            <p>{content.text2}</p>
          </div>
        </motion.section>

        <div className="grid gap-6 md:grid-cols-2">
          {content.cards.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 + index * 0.1 }}
            >
              <Link
                href={item.href}
                className="group block h-full rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_0_20px_rgba(255,255,255,0.02)] backdrop-blur-[2px] transition duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-white/[0.05]"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/15 text-2xl">
                  {item.icon}
                </div>

                <h3 className="mb-4 text-2xl font-bold text-yellow-400 md:text-3xl">
                  {item.title}
                </h3>

                <p className="mb-8 text-lg leading-8 text-gray-300">
                  {item.text}
                </p>

                <span className="inline-flex rounded-xl border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 font-semibold text-yellow-300 transition group-hover:bg-yellow-400 group-hover:text-black">
                  {content.button}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-8 text-center backdrop-blur-[2px]"
        >
          <p className="text-lg font-semibold uppercase tracking-wide text-yellow-300 md:text-xl">
            {content.slogan}
          </p>
        </motion.div>
      </div>
    </main>
  )
}