import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/header'
import Navbar from '@/components/navbar'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className={ `${inter.className} ` }>
        <Header />
        <div className="px-8 pt-5 bg-green-100">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}
