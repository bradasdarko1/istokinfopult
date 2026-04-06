'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/LanguageProvider'

const srLatin = {
  title: 'ISTOK INFO PULT',
  subtitle1: 'ŠTA JE ISTOK INFO PULT',
  text1:
    'Istok Info Pult je informativni i kulturni centar koji se nalazi u Novom Sadu. Naš cilj je povezivanje građana Novog Sada, Vojvodine i cele Srbije sa novim prilikama u istočnim zemljama, a pre svega u Rusiji i Belorusiji.',
  subtitle2: 'ČIME SE BAVI ISTOK INFO PULT',
  text2a:
    'Naš centar se bavi pružanjem informacija i podrške svima koji žele da se upoznaju sa mogućnostima saradnje sa Rusijom i Belorusijom u oblastima privrede i poslovanja, obrazovanja i studiranja, kulturne saradnje, sporta i međunarodnih razmena.',
  text2b:
    'Pored toga, Istok Info Pult je ujedno i otvoren kulturni prostor namenjen svima koji imaju ideje i želju da doprinesu kulturnom životu grada Novog Sada.',
  listIntro: 'Naš prostor je dostupan za organizaciju:',
  list: [
    'kulturnih događaja i manifestacija',
    'izložbi',
    'promocija knjiga',
    'tribina i predavanja',
    'projekcija filmova',
    'susreta umetnika, studenata i istraživača',
  ],
  slogan1: 'MESTO SUSRETA IDEJA, LJUDI I MOGUĆNOSTI!',
  slogan2: 'MESTO GDE SE GRADE NOVE VEZE IZMEĐU SRBIJE I ISTOKA',
}

const ruText = {
  title: 'ИСТОК ИНФО ПУЛЬТ',
  subtitle1: 'ЧТО ТАКОЕ ИСТОК ИНФО ПУЛЬТ',
  text1:
    'Исток Инфо Пульт — это информационный и культурный центр, который находится в Нови-Саде. Наша цель — связывать жителей Нови-Сада, Воеводины и всей Сербии с новыми возможностями в странах Востока, прежде всего в России и Беларуси.',
  subtitle2: 'ЧЕМ ЗАНИМАЕТСЯ ИСТОК ИНФО ПУЛЬТ',
  text2a:
    'Наш центр занимается предоставлением информации и поддержкой всем, кто хочет познакомиться с возможностями сотрудничества с Россией и Беларусью в сферах экономики и бизнеса, образования и обучения, культурного сотрудничества, спорта и международных обменов.',
  text2b:
    'Кроме того, Исток Инфо Пульт является открытым культурным пространством, предназначенным для всех, у кого есть идеи и желание внести вклад в культурную жизнь города Нови-Сад.',
  listIntro: 'Наше пространство доступно для организации:',
  list: [
    'культурных мероприятий и манифестаций',
    'выставок',
    'презентаций книг',
    'дискуссий и лекций',
    'кинопоказов',
    'встреч художников, студентов и исследователей',
  ],
  slogan1: 'МЕСТО ВСТРЕЧИ ИДЕЙ, ЛЮДЕЙ И ВОЗМОЖНОСТЕЙ!',
  slogan2: 'МЕСТО, ГДЕ СТРОЯТСЯ НОВЫЕ СВЯЗИ МЕЖДУ СЕРБИЕЙ И ВОСТОКОМ',
}

function latinToCyrillic(text: string) {
  const map: Record<string, string> = {
    A:'А',B:'Б',C:'Ц',Č:'Ч',Ć:'Ћ',D:'Д',Đ:'Ђ',E:'Е',F:'Ф',G:'Г',H:'Х',I:'И',J:'Ј',
    K:'К',L:'Л',M:'М',N:'Н',O:'О',P:'П',R:'Р',S:'С',Š:'Ш',T:'Т',U:'У',V:'В',Z:'З',Ž:'Ж',
    a:'а',b:'б',c:'ц',č:'ч',ć:'ћ',d:'д',đ:'ђ',e:'е',f:'ф',g:'г',h:'х',i:'и',j:'ј',
    k:'к',l:'л',m:'м',n:'н',o:'о',p:'п',r:'р',s:'с',š:'ш',t:'т',u:'у',v:'в',z:'з',ž:'ж',
  }

  return text.split('').map((c) => map[c] ?? c).join('')
}

export default function MisijaPage() {
  const { language, script } = useLanguage()

  const content =
    language === 'ru'
      ? ruText
      : script === 'cyr'
        ? {
            ...srLatin,
            title: latinToCyrillic(srLatin.title),
            subtitle1: latinToCyrillic(srLatin.subtitle1),
            text1: latinToCyrillic(srLatin.text1),
            subtitle2: latinToCyrillic(srLatin.subtitle2),
            text2a: latinToCyrillic(srLatin.text2a),
            text2b: latinToCyrillic(srLatin.text2b),
            listIntro: latinToCyrillic(srLatin.listIntro),
            list: srLatin.list.map(latinToCyrillic),
            slogan1: latinToCyrillic(srLatin.slogan1),
            slogan2: latinToCyrillic(srLatin.slogan2),
          }
        : srLatin

  return (
    <main className="min-h-screen px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <h1 className="text-4xl font-extrabold uppercase tracking-[0.2em] sm:text-5xl md:text-6xl">
            {content.title}
          </h1>
          <div className="mx-auto mt-5 h-1 w-32 rounded-full bg-yellow-400" />
        </motion.div>

        {/* BLOK 1 */}
        <motion.section
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="mb-14 rounded-3xl border border-white/10 bg-black/20 backdrop-blur-md p-8 md:p-10"
        >
          <h2 className="mb-6 text-2xl font-bold uppercase tracking-wide text-yellow-400 md:text-3xl">
            {content.subtitle1}
          </h2>

          <p className="text-lg leading-9 text-gray-200 md:text-xl">
            {content.text1}
          </p>
        </motion.section>

        {/* BLOK 2 */}
        <motion.section
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24 }}
          className="mb-14 rounded-3xl border border-white/10 bg-black/20 backdrop-blur-md p-8 md:p-10"
        >
          <h2 className="mb-6 text-2xl font-bold uppercase tracking-wide text-yellow-400 md:text-3xl">
            {content.subtitle2}
          </h2>

          <div className="space-y-6 text-lg leading-9 text-gray-200 md:text-xl">
            <p>{content.text2a}</p>
            <p>{content.text2b}</p>

            <div>
              <p className="mb-4">{content.listIntro}</p>

              <ul className="space-y-3 pl-1">
                {content.list.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 text-yellow-400">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* SLOGAN */}
        <motion.section
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.36 }}
          className="rounded-3xl border border-yellow-400/30 bg-black/20 backdrop-blur-md p-8 text-center md:p-12"
        >
          <p className="text-xl font-extrabold uppercase tracking-wide text-white md:text-2xl">
            {content.slogan1}
          </p>

          <div className="mx-auto my-6 h-px w-32 bg-yellow-400/40" />

          <p className="text-lg font-semibold uppercase tracking-wide text-yellow-300 md:text-xl">
            {content.slogan2}
          </p>
        </motion.section>

      </div>
    </main>
  )
}