import { Html, Head, Main, NextScript } from 'next/document'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white">
        <Header />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}
