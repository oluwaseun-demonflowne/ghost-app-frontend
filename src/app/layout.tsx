import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import IconNav from "./(shared)/IconNav";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Whisper zone",
  description: "An app to send anonymous messages to people",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <IconNav />
        {children}
      </body>
    </html>
  );
}
