import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Archē Innovations is a faith-rooted open innovation studio creating practical tools, repair files, smart home systems, and family-friendly maker builds. Most projects are freely shared.";

export const metadata: Metadata = {
  metadataBase: new URL("https://archeinnovations.net"),
  title: {
    default: "Archē Innovations — Small beginnings. Real solutions.",
    template: "%s · Archē Innovations",
  },
  description,
  openGraph: {
    siteName: "Archē Innovations",
    title: "Archē Innovations — Small beginnings. Real solutions.",
    description,
    url: "/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
