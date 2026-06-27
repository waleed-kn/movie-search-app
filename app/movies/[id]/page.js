import Image from "next/image";

export default async function MovieDetail({ params }) {
    const { id } = await params;

    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`,
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch movie");
    }

    const movie = await res.json();

    return (
        <main>
            {movie.poster_path && (
                <Image
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={movie.title}
                    width={300}
                    height={450}
                    priority
                />
            )}

            <h1>{movie.title}</h1>

            <p>⭐ {movie.vote_average}</p>

            <p>📅 {movie.release_date}</p>

            <p>🕐 {movie.runtime} mins</p>

            <p>{movie.overview}</p>
        </main>
    );
}