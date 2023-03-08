import '@/styles/globals.css'
import Navbar from '@/components/navbar'

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="container mx-auto px-8 lg:px-48 xl:px-96 py-10 bg-green-100">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  )
}
