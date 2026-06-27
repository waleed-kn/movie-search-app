import Link from "next/link";
import ThemeToggle from "./components/ThemeToggle";
import "./globals.css";

export const metadata = {
  title: "CineScope",
  description: "Search and explore popular movies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">🎬 Movies<span>Vault</span></Link>
          <ThemeToggle />
        </nav>

        {children}

        <footer>
          <p>Developed by <span>Waleed Khan</span></p>
        </footer>
      </body>
    </html>
  );
}