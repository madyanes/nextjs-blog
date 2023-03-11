import Link from 'next/link'
import { useRouter } from 'next/router'

export async function getServerSideProps(context) {
  const pageNumber = context.query.page
  const apiURL = `${ process.env.NEXT_PUBLIC_API_BACKEND }/api/posts?page=${ pageNumber ? pageNumber : 1 }`
  const response = await fetch(apiURL)
  const data = await response.json()

  // Redirect to `/posts` if the backend isn't recognized the url parameter value of `page`
  if (!response.ok) {
    return {
      redirect: {
        destination: '/posts',
        permanent: false
      }
    }
  }

  return {
    props: {
      postsData: data,
    }
  }
}

export default function Posts(props) {
  const { postsData } = props
  const posts = postsData.results
  const nextPage = postsData.next
  const prevPage = postsData.previous
  const router = useRouter()

  let nextPageLink
  if (router.query.page) {
    nextPageLink = router.pathname + '?page=' + (parseInt(router.query.page) + 1)
  } else {
    nextPageLink = router.pathname + '?page=2'
  }

  let prevPageLink
  if (prevPage) {
    const prevPageNumber = prevPage.match('[?&]' + 'page' + '=([^&]+)')
    if (prevPageNumber) {
      prevPageLink = router.pathname + '?page=' + prevPageNumber[1]
    } else {
      prevPageLink = router.pathname + '?page=1'
    }
  }

  return (
    <>
      <Link href='/posts/new' className='bg-green-500 text-sm shadow-lg border-black border-2 font-extrabold rounded-full text-center px-2 fixed bottom-5 left-1/2 -translate-x-1/2'>+ New Post</Link>
      { posts.map(post => 
        <div className="pb-3" key={ post.id }>
          <p className='font-semibold text-lg'>
            <Link href={'#' + post.id}>{ post.title }</Link>
          </p>
          <p>
            { post.content }
          </p>
        </div>
      ) }
      <div>
        { nextPage && <Link href={ nextPageLink }>Next Page</Link> }
      </div>
      <div>
        { prevPage && <Link href={ prevPageLink }>Previous Page</Link> }
      </div>
    </>
  )
}
