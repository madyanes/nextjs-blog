import Link from 'next/link'
import { useRouter } from 'next/router'

export async function getServerSideProps() {
  const apiURL = `${ process.env.NEXT_PUBLIC_API_BACKEND }/api/posts/`
  const response = await fetch(apiURL)
  const data = await response.json()
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
  const router = useRouter()

  let nextPageLink
  if (router.query.page) {
    nextPageLink = router.pathname + '?page=' + (parseInt(router.query.page) + 1)
  } else {
    nextPageLink = router.pathname + '?page=2'
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
      { nextPage && <Link href={ nextPageLink }>Next Page</Link> }
    </>
  )
}
