// src/components/Sidebar.js
"use client";

import { usePathname, useRouter } from "next/navigation";
import { LayoutGrid, Users, LogOut } from "lucide-react";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client"; // Sesuaikan path jika berbeda

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    // Pastikan session benar-benar terhapus di Supabase
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
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
        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-sky-900 hover:text-white rounded-xl text-sm font-medium transition"
      >
        <LogOut size={18} /> Keluar Akun
      </button>
    </aside>
  );
}