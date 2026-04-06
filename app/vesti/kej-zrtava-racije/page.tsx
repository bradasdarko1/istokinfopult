'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
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

const images = [
  '/static/images/kej-1.jpeg',
  '/static/images/kej-2.jpg',
  '/static/images/kej-3.jpg',
  '/static/images/kej-4.jpg',
  '/static/images/kej-5.jpg',
  '/static/images/kej-6.jpg',
  '/static/images/kej-7.jpg',
  '/static/images/kej-8.jpg',
  '/static/images/kej-9.jpg',
  '/static/images/kej-10.jpg',
]

const srLatin = {
  category: 'Vesti',
  title:
    'Na Keju žrtava racije: sportisti i predstavnici Ruske Federacije zajedno za spomenik žrtvama NATO agresije',
  date: 'Objavljeno: 6. april 2026.',
  lead:
    'U subotu, 4. aprila 2026. godine, na Keju žrtava racije u Novom Sadu održan je događaj sa ciljem potpisivanja peticije za podizanje spomenika žrtvama NATO agresije.',
  paragraphs: [
    'Na mestu snažnog istorijskog i simboličkog značaja okupili su se građani, sportisti i prijatelji ove inicijative kako bi podržali nastojanje da se stradanje nevinih žrtava NATO bombardovanja trajno obeleži dostojnim spomenikom.',
    'Događaju su prisustvovali potpukovnik Đorđe Aničić, fudbaleri Fudbalskog kluba „Kabel“, kao i Olga Viktorovna Litvina, predstavnica „Boevog bratstva“ u Republici Srbiji i Republici Srpskoj.',
    'Posebnu pažnju privukao je intervju sa potpukovnikom Đorđem Aničićem, koji je propraćen i objavljen na našem Instagram profilu, gde je ostao sačuvan kao svedočanstvo o značaju očuvanja istorijskog pamćenja i istine o stradanju srpskog naroda tokom NATO agresije.',
    'Na samom kraju događaja prisutnima se kratko obratila i Olga Viktorovna Litvina, istakavši važnost zajedništva, poštovanja prema žrtvama i potrebe da se kultura sećanja sačuva za buduće generacije.',
    'Prisustvo sportista, predstavnika prijateljskih organizacija i građana pokazalo je da postoji iskrena i široka podrška inicijativi za podizanje spomenika žrtvama NATO agresije u Novom Sadu.',
  ],
  highlight1: 'SEĆANJE KOJE TRAJE',
  highlight2: 'SPOMENIK ŽRTVAMA NATO AGRESIJE',
}

const ruText = {
  category: 'Новости',
  title:
    'На набережной Жертв рейда: спортсмены и представители Российской Федерации вместе за памятник жертвам агрессии НАТО',
  date: 'Опубликовано: 6 апреля 2026 г.',
  lead:
    'В субботу, 4 апреля 2026 года, на Набережной жертв рейда в Нови-Саде состоялось мероприятие с целью сбора подписей за установку памятника жертвам агрессии НАТО.',
  paragraphs: [
    'На месте большого исторического и символического значения собрались граждане, спортсмены и друзья этой инициативы, чтобы поддержать стремление достойно увековечить память невинных жертв бомбардировок НАТО.',
    'На мероприятии присутствовали подполковник Джордже Аничич, футболисты футбольного клуба «Кабел», а также Ольга Викторовна Литвина, представительница организации «Боевое братство» в Республике Сербия и Республике Сербской.',
    'Особое внимание привлекло интервью с подполковником Джордже Аничичем, которое было освещено и опубликовано в нашем Instagram-профиле и сохранено там как свидетельство важности сохранения исторической памяти и правды о страданиях сербского народа во время агрессии НАТО.',
    'В самом конце мероприятия к присутствующим с кратким обращением выступила и Ольга Викторовна Литвина, подчеркнув важность единства, уважения к жертвам и необходимости сохранения культуры памяти для будущих поколений.',
    'Присутствие спортсменов, представителей дружественных организаций и граждан показало, что существует искренняя и широкая поддержка инициативы по установке памятника жертвам агрессии НАТО в Нови-Саде.',
  ],
  highlight1: 'ПАМЯТЬ, КОТОРАЯ ЖИВЁТ',
  highlight2: 'ПАМЯТНИК ЖЕРТВАМ АГРЕССИИ НАТО',
}

export default function KejZrtavaRacijePage() {
  const { language, script } = useLanguage()
  const [selected, setSelected] = useState<number | null>(null)

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
      <article className="mx-auto max-w-5xl">
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
          <button
            onClick={() => setSelected(0)}
            className="group block w-full text-left"
            aria-label="Otvori glavnu fotografiju"
          >
            <img
              src={images[0]}
              alt={content.title}
              className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02]"
            />
          </button>
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

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.36 }}
          className="mt-10"
        >
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              {language === 'ru'
                ? 'Фотографии с мероприятия'
                : script === 'cyr'
                  ? 'Фотографије са догађаја'
                  : 'Fotografije sa događaja'}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {images.slice(1).map((img, i) => (
              <button
                key={img}
                onClick={() => setSelected(i + 1)}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                aria-label={`Otvori fotografiju ${i + 2}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={img}
                    alt={`${content.title} ${i + 2}`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </article>

      {selected !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-12 right-0 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
            >
              {language === 'ru'
                ? 'Закрыть'
                : script === 'cyr'
                  ? 'Затвори'
                  : 'Zatvori'}
            </button>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl">
              <img
                src={images[selected]}
                alt={`${content.title} ${selected + 1}`}
                className="max-h-[85vh] w-full object-contain"
              />
            </div>

            {images.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setSelected((selected - 1 + images.length) % images.length)
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 px-4 py-3 text-2xl text-white backdrop-blur-md transition hover:bg-black/60"
                  aria-label="Prethodna slika"
                >
                  ‹
                </button>

                <button
                  onClick={() => setSelected((selected + 1) % images.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 px-4 py-3 text-2xl text-white backdrop-blur-md transition hover:bg-black/60"
                  aria-label="Sledeća slika"
                >
                  ›
                </button>
              </>
            )}

            <div className="mt-4 text-center text-sm text-white/70">
              {selected + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}