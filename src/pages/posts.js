export async function getServerSideProps() {
  const apiURL = 'http://localhost:8000/api/posts'
  const response = await fetch(apiURL)
  const data = await response.json()
  return {
    props: {
      posts: data,
    }
  }
}

export default function Posts(props) {
  const { posts } = props

  return (
    <div>
      { posts.map(post => 
        <div className="py-5" key={ post.id }>
          <p>
            <strong className="font-semibold">{ post.id }. { post.title }</strong> { post.content }
          </p>
        </div>
      ) }
    </div>
  )
}
