import { useState } from 'react'
import Router from 'next/router'

export default function NewPost() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const storePost = async (event) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append('title', title)
    formData.append('content', content)

    const plainFormData = Object.fromEntries(formData.entries())

    const apiURL = 'http://localhost:8000/api/posts/'
    await fetch(apiURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(plainFormData)
    })
    .then((response) => {
      if (response.status === 201) {
        Router.push('/posts')
      }
    })
  }
  
  return (
    <div>
      <form onSubmit={ storePost }>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" onChange={ e => setTitle(e.target.value) } className="block" />
        <label htmlFor="content">Content</label>
        <input type="text" name="content" id="content" onChange={ e => setContent(e.target.value) } className="block" />
        <button type="submit">Post</button>
      </form>
    </div>
  )
}
