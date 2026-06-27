import Search from "./components/Search";

export default async function Home() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`,
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to fetch movies");

  const data = await res.json();
  const movies = data.results;

  return (
    <main>
      <h1>Popular <span>Movies</span></h1>
      <Search movies={movies} />
    </main>
  );
}