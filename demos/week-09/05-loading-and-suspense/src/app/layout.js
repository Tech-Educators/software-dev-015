import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/loading">Loading</Link>
          <Link href="/suspense">Suspense</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
