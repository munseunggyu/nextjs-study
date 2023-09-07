"use client"
import Link from 'next/link';
import { useParams } from 'next/navigation';

export function Control() {
  const pararms = useParams()
  const id = pararms.id
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
          <input type="button" value="delete" />
        </li>
        </>
        : null
     }
    </ul>
  );
}
