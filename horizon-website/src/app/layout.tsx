import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition"; // Import PageTransition

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Horizon Website",
  description: "Innovative solutions for a better future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full"> {/* Ensure html has height for transitions */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen h-full bg-gray-100 dark:bg-dark-background dark:text-dark-text transition-colors duration-300`}
      >
        <Header />
        <PageTransition>
          {/* The <main> tag itself doesn't need specific dark mode classes if its children handle their own context,
              or if the body's dark:text-dark-text is sufficient for default text color.
              Individual page content (cards, sections) will need their own dark mode styles.
           */}
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
