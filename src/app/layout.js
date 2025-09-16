import { Mulish } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
})

export const metadata = {
  title: "PT. Milenium Jaya Sejati",
  description: "Pengadaan serta jasa penanaman dan pemeliharaan tanaman di bidang pertanian, perkebunan, dan kehutanan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={mulish.className}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
