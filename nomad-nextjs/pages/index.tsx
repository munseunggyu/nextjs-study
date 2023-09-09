import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Seo from '../components/Seo'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface IMovie {
  id: number,
  title: string,
  poster_path: string
}

const Home = ({results}: {results: IMovie[]}) => {
  const router = useRouter()
  const onClick = (id: number, title: string) => {
    router.push(`/movies/${title}/${id}`);
  };

  return (
    <>
      <Seo title='Home'/>
      {
        results.map((movie) => (
          <div
          onClick={() => onClick(movie.id, movie.title)}
          className="movie"
          key={movie.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            <Link href={`/movies/${movie.title}/${movie.id}`}>
              {movie.title}
            </Link>
          </h4>
        </div>
        ))
      }
          <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </>
  )
}

export default Home

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBIC_API_URL}`)
  ).json();
  return {
    props: {
      results,
    },
  };
}