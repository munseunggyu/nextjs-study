"use client"
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function Update(){
  const router = useRouter()
  const params = useParams()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title, body: content})
    }
    fetch(`http://localhost:9999/topics/` + params.id, options)
    .then((res) => res.json())
    .then((res) => 
    {
      const id = res.id
      console.log(id)
      router.refresh()
      router.push(`/read/${id}`)
    }
    )
  }
  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setFuc: (params: string) => void) => {
    setFuc(e.target.value)
  }
  useEffect(() => {
    fetch(`http://localhost:9999/topics/` + params.id)
    .then((res) => res.json())
    .then((res) => {
      setTitle(res.title)
      setContent(res.body)
    })
  }, [])
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <input type="text" value={title} onChange={(e) => (handleChange(e, setTitle))} placeholder="title"/>
      </p>
      <p>
        <textarea onChange={(e) => (handleChange(e, setContent))} value={content} name="body" id="body" ></textarea>
      </p>
      <p>
        <input type="submit" value={'create'} />
      </p>
    </form>
  )
}