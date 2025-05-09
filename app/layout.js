import "./css/globals.css";
import Link from "next/link";

export const metadata = {
  title: "My Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body
        className="antialiased font-sans text-gray-800">
        <header className="bg-gray-800 text-white py-4">
          <nav className="text-center">
            <Link href="/" className="mx-2 hover:text-gray-300">Home</Link>
            <Link href="/#about" className="mx-2 hover:text-gray-300">About</Link>
            <Link href="/#work" className="mx-2 hover:text-gray-300">Work</Link>
            <Link href="/#contact" className="mx-2 hover:text-gray-300">Contact</Link>
            <Link href="/blog" className="mx-2 hover:text-gray-300">Blog</Link>
            <Link href="/weather" className="mx-2 hover:text-gray-300">Weather</Link>
          </nav>
        </header>

        {children}

        <footer className="bg-gray-800 text-white py-4 text-center">
          <p>© 2024 My Portfolio</p>
        </footer>
      </body>
    </html>
  );
}
