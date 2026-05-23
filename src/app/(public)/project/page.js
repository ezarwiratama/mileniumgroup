// src/app/project/page.js (Sesuaikan dengan path file Anda)
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Trees, Sprout, Building2, MapPin, Calendar, CheckCircle2, Loader2, ImageIcon } from "lucide-react";
import { fetchProjects } from "@/app/actions/project"; // Sesuaikan path relative ke action Anda

export default function ProjectPage() {
  const [activeTab, setActiveTab] = useState("kehutanan");
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const tabs = [
    { key: "kehutanan", label: "Kehutanan & Reboisasi" },
    { key: "perkebunan", label: "Perkebunan & Pertanian" },
    { key: "lanskap", label: "Lanskap & Penghijauan" },
  ];

  // Mengambil data real dari Supabase
  useEffect(() => {
    const loadProjects = async () => {
      setIsLoading(true);
      const result = await fetchProjects();
      if (result.success) {
        setProjects(result.data);
      } else {
        console.error("Gagal memuat data dari database:", result.error);
      }
      setIsLoading(false);
    };

    loadProjects();
  }, []);

  // Filter data berdasarkan tab yang aktif
  const filteredProjects = projects.filter((p) => p.category === activeTab);

  // Format tanggal agar tampil rapi di sisi pengunjung
  const formatIndonesianDate = (dateString) => {
    if (!dateString) return "-";
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    const [year, month, day] = dateString.split("-");
    return `${parseInt(day)} ${months[parseInt(month) - 1]} ${year}`;
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section
        className="h-[40vh] md:h-[50vh] flex items-center justify-center bg-cover bg-center relative px-6"
        style={{ backgroundImage: "url('/bg-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center container mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Project Kami
          </h1>
          <p className="text-gray-200 mt-4 max-w-2xl mx-auto text-lg">
            Rekam jejak nyata dedikasi PT Milenium Jaya Sejati dalam menghijaukan lingkungan dan lahan mitra.
          </p>
        </div>

        {/* Breadcrumb */}
        <div className="absolute bottom-8 left-0 right-0 z-10">
          <div className="container mx-auto px-6">
            <Breadcrumb>
              <BreadcrumbList className="text-sm text-gray-300">
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="hover:text-white transition-colors">
                    Beranda
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-gray-500" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-white font-medium">Project</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="-mt-10 relative z-20 sticky top-20">
        <div className="container mx-auto px-4">
          <div className="bg-white p-2 flex flex-row gap-2 justify-center rounded-full max-w-2xl mx-auto shadow-xl border border-gray-100 overflow-x-auto hide-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-3 rounded-full text-xs md:text-sm lg:text-base font-semibold transition-all duration-300 whitespace-nowrap flex-1 text-center ${
                  activeTab === tab.key
                    ? "bg-sky-800 text-white shadow-md"
                    : "text-gray-600 hover:bg-sky-100 hover:text-sky-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-10">
          
          {isLoading ? (
            // Indikator Loading
            <div className="flex flex-col items-center justify-center py-20 bg-white border border-gray-100 rounded-3xl shadow-sm space-y-4">
              <Loader2 className="animate-spin text-sky-800" size={40} />
              <p className="text-gray-500 font-medium">Memuat data proyek...</p>
            </div>
          ) : filteredProjects.length === 0 ? (
            // Fallback jika belum ada data proyek pada kategori tersebut
            <div className="bg-white text-center p-16 rounded-3xl shadow-md border border-gray-100 text-gray-500 flex flex-col items-center gap-3">
              <Sprout size={48} className="text-gray-300" />
              <p>Belum ada portofolio proyek terdaftar untuk kategori ini.</p>
            </div>
          ) : (
            // Loop data project dari database
            filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-10 grid md:grid-cols-12 gap-8 items-stretch hover:shadow-xl transition-all duration-300 group"
              >
                {/* Sisi Kiri: Gambar Proyek Lapangan */}
                <div className="md:col-span-4 bg-gray-100 rounded-2xl flex items-center justify-center border border-gray-200 relative min-h-[220px] md:min-h-full overflow-hidden">
                  {project.img ? (
                    <img 
                      src={project.img || "/project/placeholder.png"}
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-gray-400">
                      <ImageIcon size={32} />
                      <span className="text-xs text-center px-4">Tanpa Dokumentasi Foto</span>
                    </div>
                  )}
                </div>

                {/* Sisi Kanan: Detail Informasi Proyek */}
                <div className="md:col-span-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-y-2 gap-x-4 text-xs text-gray-500 font-medium">
                        <div className="flex items-center gap-1.5">
                          <MapPin size={14} className="text-sky-800" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar size={14} className="text-sky-800" />
                          <span>{formatIndonesianDate(project.date)}</span>
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 tracking-tight leading-tight group-hover:text-sky-800 transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-xs font-semibold text-sky-800 tracking-wide uppercase">
                        Mitra/Klien: {project.client}
                      </p>
                    </div>

                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {project.desc}
                    </p>
                  </div>

                  {/* Spesifikasi teknis pekerjaan */}
                  {project.specs && project.specs.length > 0 && (
                    <div className="pt-4 border-t border-gray-100">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                        Cakupan Penanganan Teknis:
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {project.specs.map((spec, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle2 size={16} className="text-green-600 flex-shrink-0" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
}