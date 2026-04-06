export type StudyLevel = 'basic' | 'master' | 'doctoral'

export type LocalizedText = {
  sr: string
  ru: string
}

export type University = {
  slug: string
  name: LocalizedText
  city: LocalizedText
  country: LocalizedText
  website: string
  description: LocalizedText
  programs: {
    sr: string[]
    ru: string[]
  }
  note: LocalizedText
  levels: StudyLevel[]
}

export const universities: University[] = [
  {
    slug: 'hse',
    name: {
      sr: 'Nacionalni istraživački univerzitet „Visoka škola ekonomije” (HSE University)',
      ru: 'Национальный исследовательский университет «Высшая школа экономики» (HSE University)',
    },
    city: { sr: 'Moskva', ru: 'Москва' },
    country: { sr: 'Rusija', ru: 'Россия' },
    website: 'https://www.hse.ru/en/',
    description: {
      sr: 'Jedan od najpoznatijih istraživačkih univerziteta u Rusiji, posebno prepoznat u ekonomiji, društvenim naukama, menadžmentu i digitalnim oblastima.',
      ru: 'Один из самых известных исследовательских университетов России, особенно заметный в экономике, социальных науках, менеджменте и цифровых направлениях.',
    },
    programs: {
      sr: ['ekonomija', 'menadžment', 'IT', 'društvene nauke'],
      ru: ['экономика', 'менеджмент', 'IT', 'социальные науки'],
    },
    note: {
      sr: 'Snažan međunarodni profil i više kampusa.',
      ru: 'Сильный международный профиль и несколько кампусов.',
    },
    levels: ['basic', 'master', 'doctoral'],
  },
  {
    slug: 'rudn',
    name: {
      sr: 'Ruski univerzitet prijateljstva naroda (RUDN University)',
      ru: 'Российский университет дружбы народов (RUDN University)',
    },
    city: { sr: 'Moskva', ru: 'Москва' },
    country: { sr: 'Rusija', ru: 'Россия' },
    website: 'https://eng.rudn.ru/',
    description: {
      sr: 'Široko profilisan univerzitet poznat po međunarodnom karakteru i velikom izboru studijskih oblasti, uključujući medicinu, inženjerstvo i društvene nauke.',
      ru: 'Многопрофильный университет, известный международным характером и широким выбором направлений обучения, включая медицину, инженерные и социальные науки.',
    },
    programs: {
      sr: ['medicina', 'pravo', 'inženjerstvo', 'ekonomija'],
      ru: ['медицина', 'право', 'инженерия', 'экономика'],
    },
    note: {
      sr: 'Posebno zanimljiv za strane studente.',
      ru: 'Особенно интересен для иностранных студентов.',
    },
    levels: ['basic', 'master', 'doctoral'],
  },
  {
    slug: 'pushkin',
    name: {
      sr: 'Državni institut za ruski jezik „A. S. Puškin”',
      ru: 'Государственный институт русского языка им. А. С. Пушкина',
    },
    city: { sr: 'Moskva', ru: 'Москва' },
    country: { sr: 'Rusija', ru: 'Россия' },
    website: 'https://www.pushkin.institute/en/',
    description: {
      sr: 'Specijalizovana ustanova usmerena na ruski jezik, filologiju i pripremu stranih studenata za studiranje na ruskom jeziku.',
      ru: 'Специализированное учебное заведение, ориентированное на русский язык, филологию и подготовку иностранных студентов к обучению на русском языке.',
    },
    programs: {
      sr: ['ruski jezik', 'filologija', 'lingvistika', 'pripremni programi'],
      ru: ['русский язык', 'филология', 'лингвистика', 'подготовительные программы'],
    },
    note: {
      sr: 'Odličan izbor za jezik i humanističke oblasti.',
      ru: 'Отличный выбор для языка и гуманитарных направлений.',
    },
    levels: ['basic', 'master', 'doctoral'],
  },
  {
    slug: 'bauman',
    name: {
      sr: 'Moskovski državni tehnički univerzitet „Bauman”',
      ru: 'Московский государственный технический университет им. Баумана',
    },
    city: { sr: 'Moskva', ru: 'Москва' },
    country: { sr: 'Rusija', ru: 'Россия' },
    website: 'https://www.bmstu.ru/en/',
    description: {
      sr: 'Jedan od vodećih tehničkih univerziteta u Rusiji, sa jakim programima iz inženjerstva, mašinstva i računarskih oblasti.',
      ru: 'Один из ведущих технических университетов России с сильными программами в области инженерии, машиностроения и компьютерных направлений.',
    },
    programs: {
      sr: ['inženjerstvo', 'mašinstvo', 'robotika', 'računarske nauke'],
      ru: ['инженерия', 'машиностроение', 'робототехника', 'компьютерные науки'],
    },
    note: {
      sr: 'Prepoznatljiv tehnički i istraživački profil.',
      ru: 'Ярко выраженный технический и исследовательский профиль.',
    },
    levels: ['basic', 'master', 'doctoral'],
  },
  {
    slug: 'financial-university',
    name: {
      sr: 'Finansijski univerzitet pri Vladi Ruske Federacije',
      ru: 'Финансовый университет при Правительстве Российской Федерации',
    },
    city: { sr: 'Moskva', ru: 'Москва' },
    country: { sr: 'Rusija', ru: 'Россия' },
    website: 'https://en.fa.ru/',
    description: {
      sr: 'Univerzitet poznat po ekonomiji, finansijama, upravljanju, pravu i savremenim analitičkim disciplinama.',
      ru: 'Университет, известный экономикой, финансами, управлением, правом и современными аналитическими дисциплинами.',
    },
    programs: {
      sr: ['finansije', 'ekonomija', 'pravo', 'analitika'],
      ru: ['финансы', 'экономика', 'право', 'аналитика'],
    },
    note: {
      sr: 'Dobar izbor za poslovne i javne finansije.',
      ru: 'Хороший выбор для бизнеса и государственных финансов.',
    },
    levels: ['basic', 'master', 'doctoral'],
  },
  {
    slug: 'ranepa',
    name: {
      sr: 'Ruska akademija narodne privrede i javne uprave pri predsedniku RF (RANEPA)',
      ru: 'Российская академия народного хозяйства и государственной службы при Президенте РФ (РАНЕПА)',
    },
    city: { sr: 'Moskva', ru: 'Москва' },
    country: { sr: 'Rusija', ru: 'Россия' },
    website: 'https://www.ranepa.ru/eng/',
    description: {
      sr: 'Jedna od najvažnijih ustanova za javnu upravu, ekonomiju, menadžment i obrazovanje kadrova za javni sektor.',
      ru: 'Одна из важнейших образовательных организаций в сфере государственного управления, экономики, менеджмента и подготовки кадров для публичного сектора.',
    },
    programs: {
      sr: ['javna uprava', 'ekonomija', 'menadžment', 'državna služba'],
      ru: ['госуправление', 'экономика', 'менеджмент', 'государственная служба'],
    },
    note: {
      sr: 'Snažan fokus na upravljanje i javni sektor.',
      ru: 'Сильный акцент на управлении и государственном секторе.',
    },
    levels: ['basic', 'master', 'doctoral'],
  },
  {
    slug: 'pirogov',
    name: {
      sr: 'Ruski nacionalni istraživački medicinski univerzitet „N. I. Pirogov”',
      ru: 'Российский национальный исследовательский медицинский университет им. Н. И. Пирогова',
    },
    city: { sr: 'Moskva', ru: 'Москва' },
    country: { sr: 'Rusija', ru: 'Россия' },
    website: 'https://typo3.rsmu.ru/admission/apply-now.html',
    description: {
      sr: 'Poznat medicinski univerzitet sa fokusom na medicinu, farmaciju i biomedicinske oblasti.',
      ru: 'Известный медицинский университет с фокусом на медицину, фармацию и биомедицинские направления.',
    },
    programs: {
      sr: ['medicina', 'farmacija', 'biomedicina', 'zdravstvene nauke'],
      ru: ['медицина', 'фармация', 'биомедицина', 'науки о здоровье'],
    },
    note: {
      sr: 'Posebno zanimljiv za medicinske studije.',
      ru: 'Особенно интересен для медицинского образования.',
    },
    levels: ['basic', 'master', 'doctoral'],
  },
  {
    slug: 'bsu',
    name: {
      sr: 'Belarusian State University',
      ru: 'Белорусский государственный университет',
    },
    city: { sr: 'Minsk', ru: 'Минск' },
    country: { sr: 'Belorusija', ru: 'Беларусь' },
    website: 'https://bsu.by/en/',
    description: {
      sr: 'Vodeći univerzitet u Belorusiji sa širokim izborom programa i snažnim akademskim okruženjem.',
      ru: 'Ведущий университет Беларуси с широким выбором программ и сильной академической средой.',
    },
    programs: {
      sr: ['prirodne nauke', 'društvene nauke', 'IT', 'pravo'],
      ru: ['естественные науки', 'социальные науки', 'IT', 'право'],
    },
    note: {
      sr: 'Dobar izbor za studiranje u Minsku.',
      ru: 'Хороший выбор для обучения в Минске.',
    },
    levels: ['basic', 'master', 'doctoral'],
  },
  {
    slug: 'spbu',
    name: {
      sr: 'Sankt Peterburški državni univerzitet',
      ru: 'Санкт-Петербургский государственный университет',
    },
    city: { sr: 'Sankt Peterburg', ru: 'Санкт-Петербург' },
    country: { sr: 'Rusija', ru: 'Россия' },
    website: 'https://english.spbu.ru/',
    description: {
      sr: 'Jedan od najstarijih i najuglednijih univerziteta u Rusiji, sa veoma širokom ponudom studijskih programa.',
      ru: 'Один из старейших и самых престижных университетов России с очень широким выбором образовательных программ.',
    },
    programs: {
      sr: ['pravo', 'prirodne nauke', 'društvene nauke', 'IT'],
      ru: ['право', 'естественные науки', 'социальные науки', 'IT'],
    },
    note: {
      sr: 'Vrlo jak akademski ugled i međunarodna prepoznatljivost.',
      ru: 'Очень сильная академическая репутация и международная узнаваемость.',
    },
    levels: ['basic', 'master', 'doctoral'],
  },
  {
    slug: 'spbpu',
    name: {
      sr: 'Sankt Peterburški politehnički univerzitet Petra Velikog',
      ru: 'Санкт-Петербургский политехнический университет Петра Великого',
    },
    city: { sr: 'Sankt Peterburg', ru: 'Санкт-Петербург' },
    country: { sr: 'Rusija', ru: 'Россия' },
    website: 'https://english.spbstu.ru/',
    description: {
      sr: 'Veliki tehnički univerzitet sa fokusom na inženjerstvo, inovacije i savremene tehnološke discipline.',
      ru: 'Крупный технический университет с акцентом на инженерию, инновации и современные технологические направления.',
    },
    programs: {
      sr: ['inženjerstvo', 'IT', 'industrijske tehnologije', 'energetika'],
      ru: ['инженерия', 'IT', 'промышленные технологии', 'энергетика'],
    },
    note: {
      sr: 'Jak izbor za tehničke i primenjene studije.',
      ru: 'Сильный выбор для технического и прикладного образования.',
    },
    levels: ['basic', 'master', 'doctoral'],
  },
]