import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import { Header } from '@/components/common/header'
import { Footer } from '@/components/common/footer'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title:
    'Frescura - Health conscious and health focus food for your healthy body',
  description:
    'Eat good everyday without a worry, fullfiling your daily nutrients such as vitamins, proteins, etc to make a healthy and strong body.',
  openGraph: {
    images: '/opengraph-image.png'
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title:
  //     'Pandem - Information you need during on-call emergencies',
  //   description:
  //     'Quickly link new on-call tickets to similar past incidents and their solutions. All directly in Slack the moment an incident happens.',
  //   images: ['https://i.imgur.com/MPMcyPP.png']
  // }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="antialiased"
    >
      <Analytics />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main
            className={`flex min-h-screen flex-col ${inter.className}`}
          >
            <Header />
            {children}
            {/* <div className="flex-none h-fit justify-center w-full h-64 bg-green-200">
              <div className="flex w-full max-w-[1280px] h-full">
              </div>
            </div> */}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
