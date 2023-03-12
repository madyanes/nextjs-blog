import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter()
  const href = {
    home: '/',
    posts: '/posts',
    about: '/about',
  }
  const linkClassName = 'bg-blue-300 text-center font-semibold italic text-sm rounded-full sm:rounded'
  const activeLink = (page) => router.pathname === page ? 'bg-red-300 sm:rounded ' : ''
  const activeLinkGeneral = 'py-2 rounded-full'
  return (
    <>
      <nav className='flex md:flex-col mb-5 gap-4'>
        <Link href={ href.home } className={ `${linkClassName} grow` }>
          <div className={ `${activeLink(href.home)} + ${activeLinkGeneral} md:px-16` }>Home</div>
        </Link>
        <Link href={ href.posts } className={ `${linkClassName} grow` }>
          <div className={ activeLink(href.posts) + activeLinkGeneral }>Posts</div>
        </Link>
        <Link href={ href.about } className={ `${linkClassName} grow` }>
          <div className={ activeLink(href.about) + activeLinkGeneral }>About</div>
        </Link>
      </nav>
    </>
  )
}
