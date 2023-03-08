import { Html, Head, Main, NextScript } from 'next/document'
import Header from '@/components/header'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white">
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
