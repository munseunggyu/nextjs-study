import Link from "next/link";
import { useRouter } from "next/router";
import styles from './NavBar.module.css'
export default function NavBar(){
  const router = useRouter()
  const pathName = router.pathname
  console.log(pathName)
  return (
    <nav>
      <Link href="/" className={pathName === '/' ? styles.active : ''}>
          Home
      </Link>
      <Link href="about" className={pathName === '/about' ? styles.active : ''}>about</Link>
      <style jsx>
        {`
          nav{
            display: flex;
            gap: 15px;
          }
        `}
      </style>
    </nav>
  )
}