import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-4xl mx-auto p-4">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
