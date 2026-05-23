// src/components/Sidebar.js
"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { LayoutGrid, Users, LogOut, Loader2 } from "lucide-react";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client"; 

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();
  
  // State untuk mengontrol animasi loading saat logout
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true); // Munculkan snackbar & ubah tombol jadi loading
    
    try {
      await supabase.auth.signOut();
      router.push("/login");
    } catch (error) {
      console.error("Error saat logout:", error);
      setIsLoggingOut(false); // Matikan loading jika terjadi kegagalan jaringan
    }
  };

  return (
    <>
      <aside className="w-64 bg-gray-100 text-gray-600 p-6 flex flex-col justify-between hidden md:flex fixed h-full z-30 border-r border-gray-200/50">
        <div className="space-y-8">
          <div className="flex items-center gap-3 px-2 border-b-2 border-gray-200 pb-5">
            <Image
              src="/subsidiary/logo-mjs.jpg"
              alt="Logo PT. Milenium Jaya Sejati"
              width={40}
              height={40}
              style={{ width: "auto", height: "auto" }}
              className="object-cover rounded-xl shadow-sm"
            />
            <span className="text-sky-900 font-black text-xl tracking-tight leading-none">Milenium Admin</span>
          </div>
          
          <nav className="space-y-2">
            <button 
              onClick={() => router.push("/admin")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition shadow-sm ${
                pathname === "/admin" 
                  ? "bg-sky-800 text-white" 
                  : "hover:bg-gray-200 text-gray-600"
              }`}
            >
              <LayoutGrid size={18} /> Proyek Lapangan
            </button>
            
            <button 
              onClick={() => router.push("/admin/users")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition shadow-sm ${
                pathname.includes("/admin/users") 
                  ? "bg-sky-800 text-white" 
                  : "hover:bg-gray-200 text-gray-600"
              }`}
            >
              <Users size={18} /> Manajemen User
            </button>
          </nav>
        </div>

        <button 
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="w-full flex items-center gap-3 px-4 py-3 hover:bg-sky-900 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed rounded-xl text-sm font-medium transition"
        >
          {isLoggingOut ? <Loader2 size={18} className="animate-spin" /> : <LogOut size={18} />} 
          {isLoggingOut ? "Keluar..." : "Keluar Akun"}
        </button>
      </aside>

      {/* FLOATING SNACKBAR NOTIFICATION */}
      {isLoggingOut && (
        <div className="fixed bottom-6 right-6 bg-gray-900 text-white px-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 z-50 animate-in fade-in slide-in-from-bottom-6 border border-gray-700">
          <Loader2 className="animate-spin text-sky-400" size={20} />
          <span className="text-sm font-medium">Mengamankan sesi & mengeluarkan akun...</span>
        </div>
      )}
    </>
  );
}