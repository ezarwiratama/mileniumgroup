"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail, Leaf, Eye, EyeOff, ArrowLeft } from "lucide-react";
// IMPORT DARI FILE BARU YANG KITA BUAT TADI:
import { createClient } from "@/lib/supabase/client"; 

export default function LoginPage() {
  const router = useRouter();
  // GUNAKAN FUNGSI INI:
  const supabase = createClient();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("Email atau kata sandi tidak valid.");
    } else {
      router.push("/admin");
      router.refresh();
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10 space-y-8">
        
        {/* Tombol Kembali ke Beranda */}
        <button 
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-sky-800 transition"
        >
          <ArrowLeft size={16} /> Kembali
        </button>

        {/* Branding */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-sky-100 text-sky-800 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
            <Leaf size={24} />
          </div>
          <h2 className="text-2xl font-black text-gray-950 tracking-tight">
            Milenium<span className="text-sky-800">Group</span> Admin
          </h2>
        </div>

        {error && (
          <div className="p-4 bg-red-50 border border-red-100 text-red-600 text-sm rounded-xl font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-3.5 text-gray-400" size={18} />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@milenium.com"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-sky-100 focus:border-sky-800 transition"
              />
            </div>
          </div>

          {/* Password dengan Show/Hide */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Kata Sandi</label>
            <div className="relative">
              <Lock className="absolute left-4 top-3.5 text-gray-400" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-11 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-sky-100 focus:border-sky-800 transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3.5 text-gray-400 hover:text-sky-800 transition"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-sky-800 hover:bg-sky-700 disabled:opacity-50 text-white font-semibold py-3 rounded-xl transition shadow-md text-sm"
          >
            {loading ? "Memverifikasi..." : "Masuk ke Dashboard"}
          </button>
        </form>
      </div>
    </main>
  );
}