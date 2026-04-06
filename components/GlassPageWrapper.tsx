'use client'

import { ReactNode } from 'react'

type GlassPageWrapperProps = {
  children: ReactNode
}

export default function GlassPageWrapper({
  children,
}: GlassPageWrapperProps) {
  return (
    <main className="relative min-h-screen px-4 py-8 text-white sm:px-6 md:px-8 md:py-12">
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg.jpg')" }}
      />
      <div className="fixed inset-0 -z-10 bg-black/40" />

      <div className="relative z-10 mx-auto max-w-6xl">{children}</div>
    </main>
  )
}