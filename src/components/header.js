import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Header() {
  return (
    <>
      <div className="grid place-items-center py-2 md:py-10">
        <div className="text-5xl font-bold self-center mx-auto bg-gradient-to-r from-green-600 to-blue-500 bg-clip-text text-transparent py-2">
          ian's weblog
        </div>
        <div className="italic font-semibold px-2 py-1 text-xs bg-yellow-400">
          I know it is impossible, until I make it.
        </div>
      </div>
    </>
  )
}
