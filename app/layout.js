import "./globals.css";

export const metadata = {
  title: "Nextjs Tailwind Practice",
  description: "Nextjsの練習",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
