'use client'

import { useEffect, useState } from 'react'

const cities = [
  { name: 'Novi Sad', timeZone: 'Europe/Belgrade' },
  { name: 'Peking', timeZone: 'Asia/Shanghai' },
  { name: 'Moskva', timeZone: 'Europe/Moscow' },
  { name: 'Minsk', timeZone: 'Europe/Minsk' },
]

export default function WorldClock() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (timeZone: string) =>
    new Intl.DateTimeFormat('sr-RS', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone,
    }).format(now)

  return (
    <aside className="rounded-2xl border border-white/10 bg-black/50 p-5 text-white">
      <h2 className="mb-4 text-xl font-bold">Vreme</h2>
      <div className="space-y-3">
        {cities.map((city) => (
          <div key={city.name} className="flex items-center justify-between">
            <span>{city.name}</span>
            <span>{formatTime(city.timeZone)}</span>
          </div>
        ))}
      </div>
    </aside>
  )
}