import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "CineSearch",
  description: "Search and explore popular movies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">🎬 Cine<span>Search</span></Link>
        </nav>
        {children}
      </body>
    </html>
  );
}