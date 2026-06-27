import Image from "next/image";
import Link from "next/link";

export default async function MovieDetail({ params }) {
    const { id } = await params;

    if (!process.env.TMDB_API_KEY) {
        throw new Error("TMDB_API_KEY environment variable is not set");
    }

    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}`,
        {
            cache: "no-store",
            timeout: 10000
        }
    );

    if (!res.ok) {
        throw new Error(`Failed to fetch movie: ${res.status} ${res.statusText}`);
    }

    const movie = await res.json();

    return (
        <main>
            <Link href="/" className="back-link">← Back to movies</Link>

            <div className="detail-wrapper">
                {movie.poster_path && (
                    <div className="detail-poster">
                        <Image
                            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                            alt={movie.title}
                            width={300}
                            height={450}
                            priority
                        />
                    </div>
                )}

                <div className="detail-info">
                    <h1>{movie.title}</h1>

                    <div className="detail-meta">
                        <span className="rating-badge">⭐ {movie.vote_average.toFixed(1)}</span>
                        <span>📅 {movie.release_date}</span>
                        <span>🕐 {movie.runtime} mins</span>
                    </div>

                    <p className="detail-overview">{movie.overview}</p>
                </div>
            </div>
        </main>
    );
}