// src/app/admin/users/page.js
"use client";

import { useState, useEffect } from "react";
import { Plus, Users, Loader2, X, ShieldCheck } from "lucide-react";
import { fetchUsers, createUser } from "@/app/actions/user";

export default function UserManagementPage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // State Form Tambah User
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [formEmail, setFormEmail] = useState("");
  const [formPassword, setFormPassword] = useState("");

  const loadUsers = async () => {
    setIsLoading(true);
    const result = await fetchUsers();
    if (result.success) setUsers(result.data);
    else alert("Gagal memuat user: " + result.error);
    setIsLoading(false);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleAddUser = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    
    const formData = new FormData();
    formData.append("email", formEmail);
    formData.append("password", formPassword);

    const result = await createUser(formData);
    if (result.success) {
      setIsOpenForm(false);
      setFormEmail("");
      setFormPassword("");
      await loadUsers();
    } else {
      alert("Gagal menambahkan user: " + result.error);
    }
    setIsSaving(false);
  };

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-200 pb-5">
        <div>
          <h1 className="text-3xl font-black text-gray-950 tracking-tight">Manajemen User</h1>
          <p className="text-gray-500 text-sm">Kelola akses admin ke dalam dashboard sistem.</p>
        </div>
        <button 
          onClick={() => setIsOpenForm(true)}
          className="bg-sky-800 hover:bg-sky-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition shadow-md"
        >
          <Plus size={18} strokeWidth={2.5} /> Tambah Admin
        </button>
      </header>

      {/* STAT CARD */}
      <section className="bg-white p-5 rounded-2xl border border-gray-100 flex items-center justify-between shadow-sm max-w-sm">
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-500">Total Akses Admin</p>
          <p className="text-2xl font-black text-gray-950">
            {isLoading ? <Loader2 className="animate-spin text-gray-400" size={20} /> : users.length}{" "}
            <span className="text-sm font-normal text-gray-400">Akun Aktif</span>
          </p>
        </div>
        <div className="p-3 rounded-xl bg-sky-50 text-sky-700"><Users size={22} /></div>
      </section>

      {/* USER TABLE */}
      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-3">
            <Loader2 className="animate-spin text-sky-800" size={32} />
            <p className="text-sm text-gray-500 font-medium">Memuat data akses...</p>
          </div>
        ) : users.length === 0 ? (
          <div className="text-center py-20 text-gray-400 italic">Belum ada user terdaftar.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left whitespace-nowrap">
              <thead className="bg-gray-50 text-gray-500 uppercase font-bold text-xs border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4">Alamat Email</th>
                  <th className="px-6 py-4">Didaftarkan Pada</th>
                  <th className="px-6 py-4">Login Terakhir</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50/50 transition">
                    <td className="px-6 py-4 font-semibold text-gray-900 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                        {user.email[0].toUpperCase()}
                      </div>
                      {user.email}
                    </td>
                    <td className="px-6 py-4 text-gray-500">
                      {new Date(user.created_at).toLocaleDateString("id-ID", { day: 'numeric', month: 'long', year: 'numeric' })}
                    </td>
                    <td className="px-6 py-4 text-gray-500">
                      {user.last_sign_in_at 
                        ? new Date(user.last_sign_in_at).toLocaleDateString("id-ID")
                        : "Belum pernah masuk"}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-green-50 text-green-700 border border-green-200 rounded-full text-[10px] font-bold uppercase tracking-wider">
                        <ShieldCheck size={12} /> Aktif
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* MODAL TAMBAH USER */}
      {isOpenForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden flex flex-col">
            <div className="p-6 bg-sky-900 text-white flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold">Daftarkan Admin Baru</h3>
                <p className="text-xs text-gray-400 font-bold">User akan langsung memiliki akses ke sistem.</p>
              </div>
              <button onClick={() => setIsOpenForm(false)} className="hover:bg-gray-800 p-1.5 rounded-lg transition" disabled={isSaving}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleAddUser} className="p-6 space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Alamat Email</label>
                <input 
                  type="email" required placeholder="email@milenium.com"
                  value={formEmail} onChange={(e) => setFormEmail(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-100"
                  disabled={isSaving}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Kata Sandi</label>
                <input 
                  type="password" required placeholder="Minimal 6 karakter"
                  value={formPassword} onChange={(e) => setFormPassword(e.target.value)}
                  minLength={6}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-100"
                  disabled={isSaving}
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                <button type="button" onClick={() => setIsOpenForm(false)} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold rounded-xl transition" disabled={isSaving}>Batal</button>
                <button type="submit" className="px-5 py-2 bg-sky-800 hover:bg-sky-700 text-white text-sm font-bold rounded-xl transition shadow-md flex items-center gap-1.5" disabled={isSaving}>
                  {isSaving && <Loader2 className="animate-spin" size={16} />}
                  {isSaving ? "Mendaftarkan..." : "Daftarkan Akun"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}