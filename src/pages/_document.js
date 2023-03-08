import { Html, Head, Main, NextScript } from 'next/document'
import Header from '@/components/header'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white">
        <Header />
        <div className="container mx-auto px-8 lg:px-48 xl:px-96 py-10 bg-green-100">
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  )
}
