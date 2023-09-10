import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router"

interface MovieDetailProps {
  params: Record<string, string>;
}

type IMovieDetailProps = {
  [title: string]: string
}


export default function MovieDetail({params}: IMovieDetailProps){
  console.log(params)
  return (
    <div>
      detail
    </div>
  )
}
// ctx: GetServerSidePropsContext
export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const params = ctx.params
 return {
  props: params
 }
}