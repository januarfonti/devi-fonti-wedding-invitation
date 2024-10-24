import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body className='bg-[#171A0D]'>
        <Main />
        <NextScript />
        <script defer src='/stats/script.js' data-website-id='de76c75d-8bf6-4f05-b4b6-d6d7b2ddff94' />
      </body>
    </Html>
  )
}
