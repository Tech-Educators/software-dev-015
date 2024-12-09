import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <SignedOut>
            <SignInButton />
          </SignedOut>

          <SignedIn>
            <UserButton showName />
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
