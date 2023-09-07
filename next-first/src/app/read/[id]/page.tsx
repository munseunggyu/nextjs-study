import { Topics, url } from "@/app/layout"

interface ReadProps {
  params: {
    id: string
  }
}
export default async function Read(props: ReadProps) {
  const res = await fetch(`${url}/${props.params.id}`, {cache: 'no-store'})
  const topics: Topics = await res.json()
  console.log(topics.body)
  return (
    <div>
      <p>
        {topics.body}
      </p>
      Read {props.params.id}
    </div>
  )
}
