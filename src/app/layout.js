import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Opening Songs",
  description: "A list of popular anime opening songs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <header className="w-100">
          <nav className="flex justify-center w-100 bg-babyblue p-4">
            <Link className="m-1 text-brown-500 hover:text-orange-700" href="/">
              Home
            </Link>

            <Link
              className="m-1 text-brown-500 hover:text-orange-700"
              href="/management"
            >
              Manage Library
            </Link>
          </nav>
        </header>
        {children}
        <footer className="text-center">&copy; Codex January Cohort</footer>
      </body>
    </html>
  );
}
