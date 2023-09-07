import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['200', '300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={`${poppins.variable} font-sans`}>
        <Component {...pageProps} />
        <Analytics />
      </main>
    </>
  )
}
