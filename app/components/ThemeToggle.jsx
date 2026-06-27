"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [light, setLight] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved === "light") {
            document.body.classList.add("light-mode");
            setLight(true);
        }
    }, []);

    function toggle() {
        const isLight = document.body.classList.toggle("light-mode");
        setLight(isLight);
        localStorage.setItem("theme", isLight ? "light" : "dark");
    }

    return (
        <button className="theme-btn" onClick={toggle} aria-label="Toggle theme">
            {light ? "☀️" : "🌙"}
        </button>
    );
}