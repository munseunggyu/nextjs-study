"use client"

import { useRouter } from "next/navigation";
import React, { useState } from "react";
interface IResult {
  title: string,
  id: number
}
export default function Create() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title:content})
    }
    fetch(`http://localhost:9999/topics`, options)
    .then((res) => res.json())
    .then((res: IResult) => 
    {
      const id = res.id
      console.log(id)
      router.push(`/read/${id}`)
    }
    )
  }
  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setFuc: (params: string) => void) => {
    setFuc(e.target.value)
  }
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
