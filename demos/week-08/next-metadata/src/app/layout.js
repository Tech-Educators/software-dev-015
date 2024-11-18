import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// for images, put them in the public folder
// you don't need to specifc more of the route if its already in the public folder
// eg image is in public/image.png just write 'image.png'
// if image is in public/openGraph/image.png' write '/openGraph/image.png'

export const metadata = {
  title: "Sams Mushroom App",
  description: "Learn more about different mushrooms",
  openGraph: {
    title: 'All mushrooms | Sams Mushroom Tracker',
    image: ['image.png']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
