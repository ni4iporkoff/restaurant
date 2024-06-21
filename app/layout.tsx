import "./globals.css";

export const metadata = {
  title: "NextJS Restaraunt App",
  description: "My first NextJS app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
