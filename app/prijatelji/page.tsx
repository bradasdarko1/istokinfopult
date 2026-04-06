'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/LanguageProvider'

type FriendItem = {
  srLatin: string
  srCyrillic: string
  ru: string
  href?: string
  logo?: string
}

type LanguageType = 'sr' | 'ru'
type ScriptType = 'latin' | 'cyrillic'

const friends: FriendItem[] = [
  {
    srLatin: 'Ruski dom',
    srCyrillic: 'Руски дом',
    ru: 'Русский дом',
    logo: '/static/images/ruski-dom.png',
  },
  {
    srLatin: 'Ambasade Rusije',
    srCyrillic: 'Амбасаде Русије',
    ru: 'Посольства России',
    href: '#',
    logo: '/static/images/ambasada-rusije.jpg',
  },
  {
    srLatin: 'Miholjski zbor',
    srCyrillic: 'Михољски збор',
    ru: 'Михольский сбор',
    href: '#',
    logo: '/static/images/miholjski-zbor.jpg',
  },
  {
    srLatin: 'Lokalitet',
    srCyrillic: 'Локалитет',
    ru: 'Локалитет',
    href: '#',
    logo: '/static/images/lokalitet.png',
  },
  {
    srLatin: 'Novosađani 1989',
    srCyrillic: 'Новосађани 1989',
    ru: 'Новосаджани 1989',
    href: '#',
    logo: '/static/images/novosadjani.jpg',
  },
  {
    srLatin: 'Akademija Srbskih Vidovdanskih vitezova',
    srCyrillic: 'Академија Србских Видовданских витезова',
    ru: 'Академия сербских Видовданских витязей',
    href: '#',
    logo: '/static/images/vidovdanski-vitezovi.jpg',
  },
  {
    srLatin: 'Arheofutura',
    srCyrillic: 'Археофутура',
    ru: 'Археофутура',
    href: '#',
    logo: '/static/images/Arheofutura.jpg',
  },
  {
    srLatin: 'Boevo bratstvo',
    srCyrillic: 'Боево братство',
    ru: 'Боевое братство',
    href: '#',
    logo: '/static/images/boevo-bratstvo.png',
  },
]

export default function PrijateljiPage() {
  const lang = useLanguage()
  const language = lang.language as LanguageType
  const script = lang.script as ScriptType

  const content = {
    sr: {
      latin: {
        title: 'PRIJATELJI',
        subtitle:
          'Organizacije, institucije i zajednice sa kojima delimo vrednosti i viziju.',
        text1:
          'Istok Info Pult ostvaruje saradnju sa prijateljima koji kroz svoj rad doprinose očuvanju tradicije, jačanju obrazovanja i razvijanju kulturnih i društvenih veza.',
        text2:
          'Ova prijateljstva predstavljaju važan oslonac za zajedničke inicijative, projekte i događaje koji povezuju ljude i promovišu znanje, identitet i međusobno poštovanje.',
        sectionTitle: 'Naši prijatelji',
        cardLabel: 'Prijatelj Istok Info Pulta',
      },
      cyrillic: {
        title: 'ПРИЈАТЕЉИ',
        subtitle:
          'Организације, институције и заједнице са којима делимо вредности и визију.',
        text1:
          'Исток Инфо Пулт остварује сарадњу са пријатељима који кроз свој рад доприносе очувању традиције, јачању образовања и развијању културних и друштвених веза.',
        text2:
          'Ова пријатељства представљају важан ослонац за заједничке иницијативе, пројекте и догађаје који повезују људе и промовишу знање, идентитет и међусобно поштовање.',
        sectionTitle: 'Наши пријатељи',
        cardLabel: 'Пријатељ Исток Инфо Пулта',
      },
    },
    ru: {
      title: 'ДРУЗЬЯ',
      subtitle:
        'Организации, учреждения и сообщества, с которыми нас объединяют общие ценности и видение.',
      text1:
        '«Исток Инфо Пульт» сотрудничает с друзьями, которые своей деятельностью вносят вклад в сохранение традиций, развитие образования и укрепление культурных и общественных связей.',
      text2:
        'Эти дружеские связи являются важной опорой для совместных инициатив, проектов и мероприятий, которые объединяют людей и продвигают знания, идентичность и взаимное уважение.',
      sectionTitle: 'Наши друзья',
      cardLabel: 'Друг Исток Инфо Пульта',
    },
  }

  const t =
    language === 'ru'
      ? content.ru
      : script === 'cyrillic'
        ? content.sr.cyrillic
        : content.sr.latin

  const getFriendName = (friend: FriendItem) => {
    if (language === 'ru') return friend.ru
    if (script === 'cyrillic') return friend.srCyrillic
    return friend.srLatin
  }

  return (
    <main className="min-h-screen px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-white/10 bg-black/45 p-8 backdrop-blur-md md:p-12"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-[0.18em] md:text-5xl">
              {t.title}
            </h1>

            <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-yellow-400/80" />

            <p className="mb-6 text-lg font-medium text-yellow-200 md:text-xl">
              {t.subtitle}
            </p>

            <p className="mb-5 text-base leading-8 text-gray-200 md:text-lg">
              {t.text1}
            </p>

            <p className="text-base leading-8 text-gray-300 md:text-lg">
              {t.text2}
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-5xl">
            <h2 className="mb-8 text-center text-2xl font-semibold text-white md:text-3xl">
              {t.sectionTitle}
            </h2>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {friends.map((friend, index) => (
                <motion.a
                  key={index}
                  href={friend.href || '#'}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 }}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/50 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(250,204,21,0.10)]"
                >
                  <div className="mb-4 flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border border-yellow-400/20 bg-white p-3 shadow-md transition group-hover:scale-105">
                    {friend.logo ? (
                      <img
                        src={friend.logo}
                        alt={getFriendName(friend)}
                        className="h-full w-full object-contain"
                      />
                    ) : (
                      <span className="text-xl font-bold text-yellow-500">
                        {getFriendName(friend).charAt(0)}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold leading-7 text-white transition group-hover:text-yellow-200">
                    {getFriendName(friend)}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    {t.cardLabel}
                  </p>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}