// app/(public)/layout.js
import Navbar from "@/app/(public)/layout/Navbar";
import Footer from "@/app/(public)/layout/Footer";

export default function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      {/* pt-[73px] digunakan agar konten teratas tidak tertutup oleh navbar yang posisinya fixed */}
      <div className="pt-[73px]">
        {children}
      </div>
      <Footer />
    </>
  );
}