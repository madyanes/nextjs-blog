export async function getStaticProps() {
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
        <div className="py-5">
          <p>
            <a href={ post.url } className="font-semibold">[{ post.title }]</a> { post.content }
          </p>
        </div>
      ) }
    </div>
  )
}
