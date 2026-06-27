import Link from "next/link";
export default async function Home() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`
  );
  const data = await res.json();
  const movie = data.results;
  return (
    
  )


}