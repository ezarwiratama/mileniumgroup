// src/app/admin/page.js
"use client";

import { useState, useEffect } from "react";
import { 
  Trees, Sprout, LayoutGrid, Plus, Trash2, Edit, MapPin, 
  User, Calendar, X, Upload, Image as ImageIcon, Loader2, 
  FolderKanban, ChevronLeft, ChevronRight, Filter 
} from "lucide-react";
import { fetchProjects, saveProject, deleteProject } from "../actions/project";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("all");
  const [projects, setProjects] = useState([]);
  
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  // --- STATE FILTER & PAGINASI ---
  const [sortOrder, setSortOrder] = useState("newest"); // "newest", "date-desc", "date-asc", "name-asc", "name-desc"
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // State Kontrol Form
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formCategory, setFormCategory] = useState("kehutanan");
  const [formTitle, setFormTitle] = useState("");
  const [formClient, setFormClient] = useState("");
  const [formLocation, setFormLocation] = useState("");
  const [formDate, setFormDate] = useState(""); 
  const [formDesc, setFormDesc] = useState("");
  const [formSpecs, setFormSpecs] = useState([]);
  const [newSpecInput, setNewSpecInput] = useState("");
  
  const [formImgFile, setFormImgFile] = useState(null);
  const [formImgPreview, setFormImgPreview] = useState("");
  const [imageError, setImageError] = useState("");

  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);

  const loadProjects = async () => {
    setIsLoading(true);
    const result = await fetchProjects();
    if (result.success) setProjects(result.data);
    else alert("Gagal memuat data dari database: " + result.error);
    setIsLoading(false);
  };

  useEffect(() => {
    loadProjects();
  }, []);

  // Reset halaman ke-1 setiap kali tab kategori, urutan, atau limit diubah
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab, sortOrder, itemsPerPage]);

  const formatIndonesianDate = (dateString) => {
    if (!dateString) return "-";
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    const [year, month, day] = dateString.split("-");
    return `${parseInt(day)} ${months[parseInt(month) - 1]} ${year}`;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageError("");
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setImageError("Ukuran foto terlalu besar! Maksimal 2MB.");
        return;
      }
      if (!file.type.startsWith("image/")) {
        setImageError("Format file tidak didukung!");
        return;
      }
      setFormImgFile(file);
      setFormImgPreview(URL.createObjectURL(file));
    }
  };

  const handleAddSpec = () => {
    if(newSpecInput.trim()) {
      setFormSpecs([...formSpecs, newSpecInput.trim()]);
      setNewSpecInput("");
    }
  };

  const handleRemoveSpec = (indexToRemove) => {
    setFormSpecs(formSpecs.filter((_, index) => index !== indexToRemove));
  };

  const handleOpenCreate = () => {
    setEditingId(null); setFormCategory("kehutanan"); setFormTitle(""); setFormClient(""); setFormLocation(""); setFormDate(""); setFormDesc(""); setFormSpecs([]); setFormImgFile(null); setFormImgPreview(""); setImageError(""); setIsOpenForm(true);
  };

  const handleOpenEdit = (project) => {
    setEditingId(project.id); setFormCategory(project.category); setFormTitle(project.title); setFormClient(project.client); setFormLocation(project.location); setFormDate(project.date); setFormDesc(project.desc); setFormSpecs(project.specs); setFormImgPreview(project.img || ""); setFormImgFile(null); setImageError(""); setIsOpenForm(true);
  };

  const handleOpenDelete = (project) => {
    setProjectToDelete(project);
    setIsOpenDeleteModal(true);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      const formData = new FormData();
      if (editingId) formData.append("id", editingId);
      formData.append("category", formCategory);
      formData.append("title", formTitle);
      formData.append("client", formClient);
      formData.append("location", formLocation);
      formData.append("date", formDate);
      formData.append("desc", formDesc);
      formData.append("specs", JSON.stringify(formSpecs));

      if (formImgFile) formData.append("imageFile", formImgFile);
      else formData.append("currentImageUrl", formImgPreview);

      const result = await saveProject(formData);
      if (result.success) {
        setIsOpenForm(false);
        await loadProjects();
      } else {
        alert("Gagal menyimpan data: " + result.error);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  const handleConfirmDelete = async () => {
    if (projectToDelete) {
      setIsDeleting(true);
      const result = await deleteProject(projectToDelete.id);
      if (result.success) {
        setIsOpenDeleteModal(false);
        setProjectToDelete(null);
        await loadProjects();
        
        // Cek jika halaman saat ini kosong setelah dihapus, mundur 1 halaman
        if (paginatedProjects.length === 1 && currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      } else {
        alert("Gagal menghapus data: " + result.error);
      }
      setIsDeleting(false);
    }
  };

  // --- LOGIKA FILTER, PENGURUTAN, & PAGINASI ---
  // 1. Filter Kategori
  const filteredProjects = activeTab === "all" ? projects : projects.filter(p => p.category === activeTab);
  
  // 2. Pengurutan Data
  let sortedProjects = [...filteredProjects];
  if (sortOrder === "newest") {
    // Urutkan berdasarkan data yang paling baru ditambahkan ke database (createdAt)
    sortedProjects.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  } else if (sortOrder === "date-desc") {
    // Urutkan berdasarkan tanggal pelaksanaan pekerjaan (Terbaru)
    sortedProjects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } else if (sortOrder === "date-asc") {
    // Urutkan berdasarkan tanggal pelaksanaan pekerjaan (Terlama)
    sortedProjects.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  } else if (sortOrder === "name-asc") {
    // Urutkan berdasarkan nama proyek A-Z
    sortedProjects.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortOrder === "name-desc") {
    // Urutkan berdasarkan nama proyek Z-A
    sortedProjects.sort((a, b) => b.title.localeCompare(a.title));
  }

  // 3. Paginasi
  const totalPages = Math.ceil(sortedProjects.length / itemsPerPage) || 1;
  const paginatedProjects = sortedProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-200 pb-5">
        <div>
          <h1 className="text-3xl font-black text-gray-950 tracking-tight">Manajemen Proyek</h1>
          <p className="text-gray-500 text-sm">Tambahkan, edit, atau hapus portfolio proyek perusahaan</p>
        </div>
        <button 
          onClick={handleOpenCreate}
          className="bg-sky-800 hover:bg-sky-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition shadow-md whitespace-nowrap"
        >
          <Plus size={18} strokeWidth={2.5} /> Tambah Proyek
        </button>
      </header>

      {/* STATS AT A GLANCE (4 Kolom) */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-2xl border border-gray-100 flex items-center justify-between shadow-sm">
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-500">Total Semua</p>
            <p className="text-2xl font-black text-gray-950">
              {isLoading ? <Loader2 className="animate-spin text-gray-400" size={20} /> : projects.length}{" "}
              <span className="text-sm font-normal text-gray-400">Data</span>
            </p>
          </div>
          <div className="p-3 rounded-xl bg-indigo-50 text-indigo-700"><FolderKanban size={22} /></div>
        </div>

        {[
          { label: "Kehutanan", count: projects.filter(p=>p.category==="kehutanan").length, icon: Trees, bg: "bg-emerald-50 text-emerald-700" },
          { label: "Perkebunan", count: projects.filter(p=>p.category==="perkebunan").length, icon: Sprout, bg: "bg-amber-50 text-amber-700" },
          { label: "Tata Lanskap", count: projects.filter(p=>p.category==="lanskap").length, icon: LayoutGrid, bg: "bg-sky-50 text-sky-700" }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 flex items-center justify-between shadow-sm">
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-500">{stat.label}</p>
              <p className="text-2xl font-black text-gray-950">
                {isLoading ? <Loader2 className="animate-spin text-gray-400" size={20} /> : stat.count}{" "}
                <span className="text-sm font-normal text-gray-400">Data</span>
              </p>
            </div>
            <div className={`p-3 rounded-xl ${stat.bg}`}><stat.icon size={22} /></div>
          </div>
        ))}
      </section>

      {/* TAB CONTROLLERS & SORTING FILTER */}
      <div className="border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 pb-0">
        <div className="flex gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 hide-scrollbar">
          {[
            { key: "all", label: "Semua Kategori" },
            { key: "kehutanan", label: "Kehutanan" },
            { key: "perkebunan", label: "Perkebunan" },
            { key: "lanskap", label: "Lanskap" }
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`pb-3 px-4 text-sm font-semibold border-b-2 transition-all whitespace-nowrap ${
                activeTab === tab.key ? "border-sky-800 text-sky-800" : "border-transparent text-gray-500 hover:text-gray-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Filter Urutan dengan Ikon */}
        <div className="flex items-center gap-2 pb-3">
          <Filter size={18} className="text-gray-400" />
          <span className="text-sm font-medium text-gray-500">Urutkan:</span>
          <select 
            value={sortOrder} 
            onChange={(e) => setSortOrder(e.target.value)}
            className="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-2 focus:ring-sky-100 focus:border-sky-800 block p-2 outline-none cursor-pointer shadow-sm transition"
          >
            <option value="newest">Baru Ditambahkan</option>
            <option value="date-desc">Berdasarkan Tanggal (Terbaru)</option>
            <option value="date-asc">Berdasarkan Tanggal (Terlama)</option>
            <option value="name-asc">Berdasarkan Nama (A - Z)</option>
            <option value="name-desc">Berdasarkan Nama (Z - A)</option>
          </select>
        </div>
      </div>

      {/* PROJECT LIST CARDS WITH LOADING SKELETON */}
      <section className="space-y-4">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 bg-white border border-gray-100 rounded-3xl space-y-3">
            <Loader2 className="animate-spin text-sky-800" size={32} />
            <p className="text-sm text-gray-500 font-medium">Sinkronisasi data dengan Supabase...</p>
          </div>
        ) : paginatedProjects.length === 0 ? (
          <div className="text-center py-20 bg-white border border-gray-100 rounded-3xl text-gray-400 italic">
            Belum ada data proyek terdaftar di kategori ini.
          </div>
        ) : (
          paginatedProjects.map((project) => (
            <div key={project.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col lg:flex-row justify-between gap-6 hover:border-sky-100 transition">
              <div className="flex flex-col sm:flex-row gap-5 items-start flex-1">
                <div className="relative w-full sm:w-36 h-24 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0 border border-gray-100 shadow-sm">
                  {project.img ? (
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400"><ImageIcon size={24} /></div>
                  )}
                </div>

                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      project.category === 'kehutanan' ? 'bg-emerald-50 text-emerald-800' :
                      project.category === 'perkebunan' ? 'bg-amber-50 text-amber-800' : 'bg-sky-50 text-sky-800'
                    }`}>
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-sky-950 tracking-tight">{project.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed max-w-4xl line-clamp-2">{project.desc}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-xs text-gray-500 font-medium">
                    <span className="flex items-center gap-1.5"><User size={14} className="text-gray-400" /> Klien: {project.client}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={14} className="text-gray-400" /> Lokasi: {project.location}</span>
                    <span className="flex items-center gap-1.5"><Calendar size={14} className="text-gray-400" /> Waktu: {formatIndonesianDate(project.date)}</span>
                  </div>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex lg:flex-col justify-end gap-2 border-t lg:border-t-0 pt-4 lg:pt-0 border-gray-100 flex-shrink-0">
                <button 
                  onClick={() => handleOpenEdit(project)}
                  className="p-2.5 bg-gray-50 hover:bg-sky-50 text-gray-600 hover:text-sky-800 rounded-xl transition flex items-center justify-center border border-gray-200/60"
                  title="Edit Data"
                >
                  <Edit size={16} />
                </button>
                <button 
                  onClick={() => handleOpenDelete(project)}
                  className="p-2.5 bg-gray-50 hover:bg-red-50 text-gray-600 hover:text-red-600 rounded-xl transition flex items-center justify-center border border-gray-200/60"
                  title="Hapus Data"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))
        )}

        {/* --- KONTROL PAGINASI & LIMIT (BAGIAN BAWAH) --- */}
        {!isLoading && sortedProjects.length > 0 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-200 mt-6">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-sm text-gray-500 font-medium">
                Menampilkan <span className="text-gray-900 font-bold">{(currentPage - 1) * itemsPerPage + 1}</span> - <span className="text-gray-900 font-bold">{Math.min(currentPage * itemsPerPage, sortedProjects.length)}</span> dari total <span className="text-gray-900 font-bold">{sortedProjects.length}</span> data
              </span>

              {/* Dropdown Limit Page dipindah ke sini */}
              <div className="hidden sm:flex items-center gap-2 border-l border-gray-300 pl-4">
                <label className="text-sm font-medium text-gray-500">Per Halaman:</label>
                <select 
                  value={itemsPerPage} 
                  onChange={(e) => setItemsPerPage(Number(e.target.value))}
                  className="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-2 focus:ring-sky-100 focus:border-sky-800 block py-1.5 px-2 outline-none cursor-pointer shadow-sm transition"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-sky-50 hover:text-sky-800 hover:border-sky-200 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center"
              >
                <ChevronLeft size={18} />
              </button>
              
              <div className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-bold text-sky-800 bg-sky-50 shadow-sm">
                {currentPage} / {totalPages}
              </div>

              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-sky-50 hover:text-sky-800 hover:border-sky-200 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}
      </section>

      {/* DYNAMIC MODAL BOX FORM (ADD / EDIT) */}
      {isOpenForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[90vh]">
            <div className="p-6 bg-sky-900 text-white flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold">{editingId ? "Edit Data Proyek" : "Tambah Proyek Baru"}</h3>
                <p className="text-xs text-gray-400 font-bold">Pastikan seluruh data atribut wajib terisi dengan benar.</p>
              </div>
              <button onClick={() => setIsOpenForm(false)} className="hover:bg-gray-800 p-1.5 rounded-lg transition" disabled={isSaving}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmitForm} className="p-6 overflow-y-auto space-y-5 flex-1">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Foto Kegiatan / Proyek</label>
                {imageError && <p className="text-xs font-semibold text-red-600 bg-red-50 p-2.5 rounded-lg border border-red-100 mb-2">{imageError}</p>}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                  <label className="sm:col-span-2 flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-200 hover:border-sky-500 hover:bg-sky-50/30 rounded-2xl cursor-pointer transition group">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4 space-y-1">
                      <Upload size={22} className="text-gray-400 group-hover:text-sky-600 transition" />
                      <p className="text-xs font-bold text-gray-700">Klik untuk Unggah Gambar</p>
                      <p className="text-[11px] text-gray-400">Format PNG, JPG, atau WEBP (Maksimal ukuran 2MB)</p>
                    </div>
                    <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} disabled={isSaving} />
                  </label>
                  <div className="h-32 bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden relative flex items-center justify-center text-gray-400 text-xs">
                    {formImgPreview ? (
                      <>
                        <img src={formImgPreview} alt="Preview" className="w-full h-full object-cover" />
                        <button type="button" onClick={() => { setFormImgFile(null); setFormImgPreview(""); }} className="absolute top-2 right-2 p-1 bg-black/60 hover:bg-black text-white rounded-lg transition" title="Hapus gambar" disabled={isSaving}>
                          <X size={14} />
                        </button>
                      </>
                    ) : (
                      <div className="flex flex-col items-center gap-1">
                        <ImageIcon size={20} className="text-gray-300" />
                        <span>Belum ada foto</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5 col-span-2 sm:col-span-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Kategori Sektor</label>
                  <select value={formCategory} onChange={(e)=>setFormCategory(e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-100 focus:border-sky-800 transition" disabled={isSaving}>
                    <option value="kehutanan">Kehutanan</option>
                    <option value="perkebunan">Perkebunan</option>
                    <option value="lanskap">Lanskap</option>
                  </select>
                </div>
                <div className="space-y-1.5 col-span-2 sm:col-span-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Masa / Tanggal Proyek</label>
                  <input type="date" required value={formDate} onChange={(e)=>setFormDate(e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-100 focus:border-sky-800 transition cursor-pointer" disabled={isSaving} />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Nama / Judul Utama Proyek</label>
                <input type="text" required placeholder="Masukkan judul" value={formTitle} onChange={(e)=>setFormTitle(e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-100" disabled={isSaving} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Nama Instansi Klien</label>
                  <input type="text" required placeholder="Dinas Lingkungan Hidup" value={formClient} onChange={(e)=>setFormClient(e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-100" disabled={isSaving} />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Lokasi Lahan</label>
                  <input type="text" required placeholder="Kawasan Cilacap" value={formLocation} onChange={(e)=>setFormLocation(e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-100" disabled={isSaving} />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Deskripsi Ringkasan Operasional</label>
                <textarea required rows={3} placeholder="Jelaskan secara ringkas..." value={formDesc} onChange={(e)=>setFormDesc(e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-100" disabled={isSaving} />
              </div>

              <div className="space-y-2 border-t border-gray-100 pt-4">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block">Spesifikasi Kerja Teknis</label>
                <div className="flex gap-2">
                  <input type="text" placeholder="Contoh: Pengadaan 20.000 bibit" value={newSpecInput} onChange={(e)=>setNewSpecInput(e.target.value)} onKeyDown={(e) => { if(e.key === 'Enter') { e.preventDefault(); handleAddSpec(); } }} className="flex-1 bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-3 text-sm focus:outline-none" disabled={isSaving} />
                  <button type="button" onClick={handleAddSpec} className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-4 rounded-xl text-sm transition" disabled={isSaving}>Tambah</button>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {formSpecs.map((spec, index) => (
                    <span key={index} className="flex items-center gap-1.5 bg-sky-50 text-sky-900 border border-sky-100 text-xs font-semibold pl-3 pr-2 py-1.5 rounded-xl">
                      {spec}
                      <button type="button" onClick={()=>handleRemoveSpec(index)} className="text-sky-600 hover:text-red-600 p-0.5 rounded-md" disabled={isSaving}><X size={12} /></button>
                    </span>
                  ))}
                  {formSpecs.length === 0 && <p className="text-xs text-gray-400 italic">Belum ada spesifikasi kerja ditambahkan.</p>}
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                <button type="button" onClick={() => setIsOpenForm(false)} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold rounded-xl transition" disabled={isSaving}>Batal</button>
                <button type="submit" className="px-5 py-2 bg-sky-800 hover:bg-sky-700 text-white text-sm font-bold rounded-xl transition shadow-md flex items-center gap-1.5" disabled={isSaving}>
                  {isSaving && <Loader2 className="animate-spin" size={16} />}
                  {isSaving ? "Menyimpan..." : "Simpan Perubahan"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CUSTOM DELETE CONFIRMATION DIALOG */}
      {isOpenDeleteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 border border-gray-100 space-y-6 my-auto">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-red-50 text-red-600 rounded-xl flex-shrink-0">
                {isDeleting ? <Loader2 className="animate-spin text-red-600" size={24} /> : <Trash2 size={24} />}
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-gray-950 tracking-tight">Hapus Proyek?</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Apakah Anda yakin ingin menghapus proyek <span className="font-semibold text-gray-900">"{projectToDelete?.title}"</span>?
                </p>
              </div>
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <button type="button" onClick={() => setIsOpenDeleteModal(false)} className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 text-sm font-semibold rounded-xl transition border border-gray-200/60" disabled={isDeleting}>Batal</button>
              <button type="button" onClick={handleConfirmDelete} className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded-xl transition shadow-sm" disabled={isDeleting}>
                {isDeleting ? "Menghapus..." : "Ya, Hapus"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}