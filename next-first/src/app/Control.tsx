"use client"
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

export function Control() {
  const pararms = useParams()
  const id = pararms.id
  const router = useRouter()
  return (
    <ul>
      <li>
        <Link href="/create">Create</Link>
      </li>
     {
        id 
        ? <>
        <li>
          <Link href={`/update/${id}`}>Upadate</Link>
        </li>
        <li>
          <input type="button" onClick={() => {
            fetch(`http://localhost:9999/topics/${id}`, {method: 'DELETE'})
            .then((res) => res.json())
            .then((res) => {
              router.push('/')
              router.refresh()
            })
          }} value="delete" />
        </li>
        </>
        : null
     }
    </ul>
  );
}
