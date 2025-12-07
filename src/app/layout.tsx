import type { Metadata } from "next";
import { Inter,Pirata_One  } from "next/font/google";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const pirata_one = Pirata_One({
  subsets: ["latin"],
  variable: "--font-pirata",
  weight: "400"
})

export const metadata: Metadata = {
  title: "Post Prime",
  description: "Basketball Podcast",
  icons: {
    icon: "/pp-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${inter.variable} ${pirata_one.variable} antialiased`}
      >
          {children} 
      </body>
    </html>
  );
}