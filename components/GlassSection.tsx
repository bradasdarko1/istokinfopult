import { ReactNode } from 'react'

type GlassSectionProps = {
  children: ReactNode
  className?: string
}

export default function GlassSection({
  children,
  className = '',
}: GlassSectionProps) {
  return (
    <section
      className={`rounded-3xl border border-white/10 bg-black/20 p-6 backdrop-blur-md md:p-10 ${className}`}
    >
      {children}
    </section>
  )
}