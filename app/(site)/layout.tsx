import Footer from "./components/Footer"
import Header from "./components/Header"
import "../globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Wadi Elnile",
  description: "Wadi Elnile description",
  icons: {
    icon: "/wl.png",
  },
}

export default function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
