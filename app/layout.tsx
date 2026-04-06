// app/layout.tsx
import 'css/tailwind.css'
import 'pliny/search/algolia.css'
import 'remark-github-blockquote-alert/alert.css'

import { Space_Grotesk } from 'next/font/google'
import { Analytics, AnalyticsConfig } from 'pliny/analytics'
import { SearchProvider, SearchConfig } from 'pliny/search'
import SectionContainer from '@/components/SectionContainer'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { LanguageProvider } from '@/components/LanguageProvider'
import siteMetadata from '@/data/siteMetadata'
import { ThemeProviders } from './theme-providers'
import { Metadata } from 'next'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Istok Info Pult',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="sr"
      className={`${spaceGrotesk.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="bg-black text-white antialiased">
        <ThemeProviders>
          <LanguageProvider>
            <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
              {/* Premium background preko celog sajta */}
              <div
                className="pointer-events-none fixed inset-0 -z-30 bg-cover bg-[center_35%] bg-no-repeat scale-105"
                style={{ backgroundImage: "url('static/images/pozadina1.png')" }}
              />

              {/* Glavni tamni sloj */}
              <div className="pointer-events-none fixed inset-0 -z-20 bg-black/45" />

              {/* Suptilan gradient za dubinu */}
              <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-black/30 via-transparent to-black/55" />

              <SectionContainer>
                <div className="flex min-h-screen flex-col">
                  <Navbar />
                  <main className="mb-auto pt-6">{children}</main>
                  <Footer />
                </div>
              </SectionContainer>

              <Analytics
                analyticsConfig={siteMetadata.analytics as AnalyticsConfig}
              />
            </SearchProvider>
          </LanguageProvider>
        </ThemeProviders>
      </body>
    </html>
  )
}