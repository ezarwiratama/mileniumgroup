// src/app/admin/layout.js
import Sidebar from "@/app/admin/layout/Sidebar";

export default function AdminLayout({ children }) {
  return (
    <main className="min-h-screen bg-gray-50 flex">
      {/* Sidebar dipanggil satu kali di sini */}
      <Sidebar />
      
      {/* Konten Halaman (Project atau Users) akan masuk ke {children} */}
      <div className="flex-1 md:ml-64 p-6 md:p-10">
        {children}
      </div>
    </main>
  );
}