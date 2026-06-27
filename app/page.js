import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }

  const data = await res.json();
  const movies = data.results;

  return (
    <main>
      <h1>Popular Movies</h1>

      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            {movie.poster_path && (
              <Image
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                width={200}
                height={300}
              />
            )}

            <h2>{movie.title}</h2>

            <p>⭐ {movie.vote_average}</p>

            <p>📅 {movie.release_date}</p>

            <Link href={`/movies/${movie.id}`}>
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}