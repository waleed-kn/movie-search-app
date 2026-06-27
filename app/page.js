import Search from "./components/Search";

export default async function Home() {
  if (!process.env.TMDB_API_KEY) {
    throw new Error("TMDB_API_KEY environment variable is not set");
  }

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`,
    {
      cache: "no-store",
      timeout: 10000
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch movies: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  const movies = data.results;

  return (
    <main>
      <h1>Popular <span>Movies</span></h1>
      <Search movies={movies} />
    </main>
  );
}