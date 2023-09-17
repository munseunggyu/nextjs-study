"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function MeowArticle() {
  const [text, setText] = useState('')
  const getTxt = async () => {
    const res = await axios('https://meowfacts.herokuapp.com')
    const data = res.data.data[0]
    setText(data)
  }
  useEffect(() => {
    getTxt()
  },[])
  return (
    <div>MeowArticle: {text} </div>
  )
}
