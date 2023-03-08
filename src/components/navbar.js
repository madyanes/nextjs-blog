import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter()
  const href = {
    home: '/',
    posts: '/posts',
    about: '/about',
  }
  const activeLink = (page) => router.pathname === page ? 'bg-red-300 py-2' : 'py-2'
  return (
    <>
      <nav className='bg-blue-300 grid grid-cols-3 place-content-stretch mb-5'>
        <Link href={ href.home } className='text-center font-semibold italic text-sm'>
          <div className={ activeLink(href.home) }>Home</div>
        </Link>
        <Link href={ href.posts } className='text-center font-semibold italic text-sm'>
          <div className={ activeLink(href.posts) }>Posts</div>
        </Link>
        <Link href={ href.about } className='text-center font-semibold italic text-sm'>
          <div className={ activeLink(href.about) }>About</div>
        </Link>
      </nav>
    </>
  )
}
