import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>NextJS Filesystem Routing</h1>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/posts">Posts</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>

        {children}

        <footer>
          <p>&copy; SD015 2k24</p>
        </footer>
      </body>
    </html>
  );
}
