import Head from 'next/head'
import { useState, useEffect } from 'react'
import Router from 'next/router'
import CKeditor from '@/components/ckeditor'

export default function NewPost() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [validation, setValidation] = useState({})

  // CKeditor State
  const [editorLoaded, setEditorLoaded] = useState(false)

  useEffect(() => {
    setEditorLoaded(true)
  }, [])

  const storePost = async (event) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append('title', title)
    formData.append('content', content)

    const plainFormData = Object.fromEntries(formData.entries())

    const apiURL = `${ process.env.NEXT_PUBLIC_API_BACKEND }/api/posts/`
    await fetch(apiURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(plainFormData)
    })
    .then(async (response) => {
      if (!response.ok) {
        const errorString = await response.text()
        const errorObject = JSON.parse(errorString)
        setValidation(errorObject)
        throw new Error(errorString)
      }
      if (response.status === 201) {
        Router.push('/posts')
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }
  
  return (
    <>
      <Head>
        <title>Ian&apos;s Web-Log | Create a new post</title>
        <meta name="description" content="Ian's Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <form onSubmit={ storePost }>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" onChange={ e => setTitle(e.target.value) } className="block" />
          { validation.title && (
            <p className="text-red-500">{ validation.title }</p>
          ) }
          <label htmlFor="content">Content</label>
          <CKeditor 
            id="content"
            name='description'
            onChange={ (data) => {
              setContent(data)
            }}
            editorLoaded={editorLoaded}
          />
          { validation.content && (
            <p className="text-red-500">{ validation.content }</p>
          ) }
          <button type="submit">Post</button>
        </form>
      </div>
    </>
  )
}
