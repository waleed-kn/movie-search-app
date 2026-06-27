"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Search({ movies }) {
    const [query, setQuery] = useState("");

    const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <div className="search-wrapper">
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

            <p className="results-count">{filtered.length} movies found</p>

            <div className="movies-grid">
                {filtered.length === 0 && (
                    <p className="no-results">No movies found for "{query}"</p>
                )}

                {filtered.map((movie) => (
                    <div className="movie-card" key={movie.id}>
                        {movie.poster_path && (
                            <Image
                                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                alt={movie.title}
                                width={200}
                                height={300}
                            />
                        )}
                        <div className="movie-card-body">
                            <h2>{movie.title}</h2>
                            <p className="rating">⭐ {movie.vote_average.toFixed(1)}</p>
                            <p className="date">📅 {movie.release_date}</p>
                            <Link href={`/movies/${movie.id}`}>View Details</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}