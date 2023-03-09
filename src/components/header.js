import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
const headerAnimation = 'animate-header bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500'
export default function Header() {
  return (
    <>
      <div className="container mx-auto grid place-items-center py-2 md:py-10 bg-green-200">
        <div className={`${ headerAnimation } text-5xl font-bold self-center mx-auto bg-clip-text text-transparent py-2`}>
          ian's weblog
        </div>
        <div className={`${ headerAnimation } italic font-semibold px-2 py-1 text-xs`}>
          <span className='text-white font-black'>I know it is impossible, until I make it.</span>
        </div>
      </div>
    </>
  )
}
