export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1>Postgres with NextJS</h1>
        {children}
        <footer>I am the footer. I am the eggman. Coocoocacho!</footer>
      </body>
    </html>
  );
}
