// app/page.tsx
import VestiDanas from './vesti/page'
import { Metadata } from 'next'

// Opcionalno: SEO metadata
export const metadata: Metadata = {
  title: 'Istok Info Pult',
  description: 'Najnovije vesti dana, slike i članci na jednom mestu.',
}

export default function Početna() {
  // Renderuje landing VestiDanas
  return <VestiDanas />
}