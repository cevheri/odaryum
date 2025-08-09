import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Odaryum MVP",
  description: "Mock-data powered POC for attention and focus.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="mx-auto max-w-7xl">
          <header className="px-4 py-5 sm:px-6 lg:px-8">
            <h1 className="text-xl font-semibold">Odaryum</h1>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Awareness • Focus • Growth</p>
          </header>
          <main>{children}</main>
          <footer className="px-4 py-10 text-center text-xs text-neutral-500">MVP demo · No real tracking · © Odaryum</footer>
        </div>
      </body>
    </html>
  );
}
