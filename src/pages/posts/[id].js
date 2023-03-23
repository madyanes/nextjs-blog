import Head from "next/head"
import { useState, useEffect } from "react"
import CKeditor from "@/components/ckeditor"

export async function getServerSideProps({ params }) {
  const apiURL = `${ process.env.NEXT_PUBLIC_API_BACKEND }/api/posts/${ params.id }/`
  const response = await fetch(apiURL)
  const data = await response.json()

  return {
    props: {
      post: data,
      apiURL
    }
  }
}

export default function PostEdit(props) {
  const { post, apiURL } = props

  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)
  const [validation, setValidation] = useState({})
  
  // CKeditor State
  const [editorLoaded, setEditorLoaded] = useState(false)

  useEffect(() => {
    setEditorLoaded(true)
  }, [])
  
  const updatePost = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('title', title)
    formData.append('content', content)

    const plainFormData = Object.fromEntries(formData.entries())
    
    await fetch(apiURL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(plainFormData)
    })
    .then(async (res) => {
      if (!res.ok) {
        console.error(res)
        const errorMsg = await res.text()
        const errorObject = JSON.parse(errorMsg)
        setValidation(errorObject)
        throw new Error(errorMsg)
      }
      setValidation({})
      alert('saved')
    })
    .catch(error => {
      console.error(error)
    })
  }

  return (
    <>
      <Head>
        <title>Ian&apos;s Web-Log | Edit post</title>
        <meta name="description" content="Ian's Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <form onSubmit={ updatePost }>
          <label htmlFor="title">Title</label>
          <input name="title" type="text" className="block" value={ title } onChange={ e => { setTitle(e.target.value) } } />
          { validation.title && (
            <p className="text-red-500">{ validation.title }</p>
          ) }
          <label htmlFor="content">Content</label>
          <CKeditor 
            id="content"
            name='description'
            value={ content }
            onChange={ (data) => {
              setContent(data)
            }}
            editorLoaded={editorLoaded}
          />
          { validation.content && (
            <p className="text-red-500">{ validation.content }</p>
          ) }
          <button>Save Changes</button>
        </form>
      </div>
    </>
  )
}
