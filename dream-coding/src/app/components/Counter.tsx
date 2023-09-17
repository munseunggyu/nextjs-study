"use client"
import { useState } from "react"

export default function Counter() {
  const [counter, setCounter] = useState(0)
  const up = () => {
    setCounter(prev => prev + 1)
  }
  console.log('클라이언트')
  return (
    <div>
      {counter}
      <button onClick={up} >+</button>
      <div className="ballon">
        hover me
      </div>
      <style>
        {
          `
          .balloon {
            position: relative; 
          }
          .balloon::before {
            background: rgba(17, 17, 17, 0.9);
            border-radius: 4px;
            color: #fff;
            content: attr(data-balloon);
            font-size: 12px;
            padding: .5em 1em;
            position: absolute;
            white-space: nowrap;
            z-index: 10; 
          }
          `
        }
      </style>
    </div>
  )
}
