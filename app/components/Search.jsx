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
            <input
                type="text"
                placeholder="Search movies..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <p>Results: {filtered.length}</p>

            <div>
                {filtered.length === 0 && <p>No movies found </p>}

                {filtered.map((movie) => (
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
                        <Link href={`/movies/${movie.id}`}>View Details →</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}