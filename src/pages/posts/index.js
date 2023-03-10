import Link from 'next/link'

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
  return (
    <>
      <Link href='/posts/new' className='bg-green-500 text-sm shadow-lg border-black border-2 font-extrabold rounded-full text-center px-2 fixed bottom-5 left-1/2 -translate-x-1/2'>+ New Post</Link>
      { posts.map(post => 
        <div className="pb-3" key={ post.id }>
          <p>
            <strong className="font-semibold">{ post.id }. { post.title }</strong> { post.content }
          </p>
        </div>
      ) }
    </>
  )
}
