import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Documents App",
  description: "Inspired by Paul",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Header Section */}
        <header className="bg-blue-900 text-white py-4 px-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-semibold">Document Archive</h1>
            <nav className="space-x-4">
              <a href="/" className="hover:text-gray-200">Home</a>
              <a href="#" className="hover:text-gray-200">About</a>
              <a href="#" className="hover:text-gray-200">Services</a>
              <a href="#" className="hover:text-gray-200">Contact</a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        {/* <section className="bg-gray-100 py-4">
          <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Online Document Request Platform</h1>
          </div>
        </section> */}

        {/* Main Content */}
        <main >
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-blue-900 text-white py-8">
          <div className="container mx-auto text-center space-y-4">
            <p>&copy; 2024 Documents App. All rights reserved.</p>
            <nav className="space-x-4">
              <a href="#" className="hover:text-gray-200">Privacy Policy</a>
              <a href="#" className="hover:text-gray-200">Terms of Service</a>
              <a href="#" className="hover:text-gray-200">Contact</a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
