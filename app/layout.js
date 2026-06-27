import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Movie Search App",
  description: "Search for Favourite Movies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Movie Search</Link>
        </nav >
        {children}
      </body>

    </html>

  );
}
