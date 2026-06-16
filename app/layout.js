export const metadata = {
  title: "Sigma Publisher Shop",
  description: "Responsive book shop page built with Next.js, Tailwind CSS, and Swiper.js",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
