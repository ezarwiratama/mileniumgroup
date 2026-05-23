"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Trees, Sprout, Building2, MapPin, Calendar, CheckCircle2 } from "lucide-react";

export default function ProjectPage() {
  // Tabs pembagian sektor proyek lapangan
  const [activeTab, setActiveTab] = useState("kehutanan");

  const tabs = [
    { key: "kehutanan", label: "Kehutanan & Reboisasi" },
    { key: "perkebunan", label: "Perkebunan & Pertanian" },
    { key: "lanskap", label: "Lanskap & Penghijauan" },
  ];

  // Data Rekam Jejak Proyek Lapangan
  const projectsData = {
    kehutanan: [
      {
        title: "Restorasi Ekosistem Mangrove & Abrasi Pesisir",
        client: "Dinas Lingkungan Hidup / Mitra Swasta",
        location: "Kawasan Pesisir, Cilacap",
        date: "Oktober 2024 - Februari 2025",
        desc: "Penanaman massal lebih dari 50.000 bibit Mangrove (Bakau) tangguh untuk menahan laju abrasi pantai, mengembalikan ekosistem perairan pesisir, dan membangun benteng hijau alami.",
        specs: ["Pengadaan bibit bersertifikat", "Metode penanaman padat cerucuk", "Monitoring kelulusan hidup tanaman 12 bulan"]
      },
      {
        title: "Reboisasi Lahan Kritis & Sabuk Hijau Hutan",
        client: "Kementerian Kehutanan / Kontraktor Utama",
        location: "Kawasan Hutan Lindung, Jawa Tengah",
        date: "Maret 2025",
        desc: "Proyek pemulihan vegetasi lahan kritis akibat deforestasi menggunakan kombinasi pohon peneduh keras dan Cemara Laut guna memperkokoh struktur tanah dan mencegah erosi makro.",
        specs: ["Rehabilitasi kontur tanah pratanam", "Penanaman vegetasi penutup", "Sistem manajemen pemupukan hara berkelanjutan"]
      }
    ],
    perkebunan: [
      {
        title: "Pengadaan & Penanaman Bibit Komoditas Massal",
        client: "Kemitraan Kelompok Tani / Korporasi Agro",
        location: "Area Perkebunan, Jawa Tengah",
        date: "Agustus 2025",
        desc: "Penyediaan dan penanaman bibit unggul komoditas perkebunan dalam skala besar. Fokus pada efisiensi tata letak akar hara agar tanaman siap beradaptasi dengan iklim tropis yang dinamis.",
        specs: ["Penyediaan 20.000+ bibit unggul", "Pengkondisian pH tanah makro", "Instalasi jalur perawatan vegetasi awal"]
      }
    ],
    lanskap: [
      {
        title: "Penataan Sabuk Hijau (Green Belt) Kawasan Industri",
        client: "PT Mitra Industri Utama",
        location: "Kawasan Industri, Cilacap",
        date: "Januari 2026",
        desc: "Perancangan dan penanaman koridor hijau fungsional di sekeliling kawasan industri menggunakan Pohon Palem dan Ekor Tupai untuk mereduksi polusi udara sekaligus meningkatkan estetika visual kawasan.",
        specs: ["Penataan lanskap arsitektural", "Pengadaan pohon peneduh dewasa", "Sistem drainase akar perimeter otomatis"]
      },
      {
        title: "Pengembangan Lanskap Asri Residensial Modern",
        client: "Developer Perumahan Mandiri",
        location: "Kompleks Residensial, Purwokerto",
        date: "Maret 2026",
        desc: "Pekerjaan penataan taman komunal, median jalan utama perumahan, dan area hijau publik untuk mewujudkan konsep hunian bernuansa alam yang modern, teduh, dan tertata rapi.",
        specs: ["Sistem penanaman instan (pohon jadi)", "Pemetaan estetika tata ruang hijau", "Kontrak pemeliharaan estetika berkala"]
      }
    ]
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

      {/* Tabs Section - Menggunakan gaya kapsul mengambang yang matching */}
      <section className="-mt-10 relative z-20 sticky top-20">
        <div className="container mx-auto px-4">
          <div className="bg-white p-2 flex flex-row gap-2 justify-center rounded-full max-w-2xl mx-auto shadow-xl border border-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-3 rounded-full text-xs md:text-sm lg:text-base font-semibold transition-all duration-300 flex-1 text-center ${
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
          
          {/* Loop data project berdasarkan tab yang aktif */}
          {projectsData[activeTab]?.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-10 grid md:grid-cols-12 gap-8 items-stretch hover:shadow-xl transition-all duration-300"
            >
              {/* Sisi Kiri: Gambar Proyek Lapangan */}
              <div className="md:col-span-4 bg-gray-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-200 relative min-h-[220px] md:min-h-full overflow-hidden">
                <span className="text-gray-400 text-xs md:text-sm text-center px-4">[ Foto Dokumentasi Kerja Langan ]</span>
                {/* <Image src={`/project-${activeTab}-${index}.jpg`} alt={project.title} fill className="object-cover" /> */}
              </div>

              {/* Sisi Kanan: Detail Informasi Proyek */}
              <div className="md:col-span-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-y-2 gap-x-4 text-xs text-gray-500 font-medium">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} className="text-sky-800" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} className="text-sky-800" />
                        <span>{project.date}</span>
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 tracking-tight leading-tight">
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

              </div>
            </div>
          ))}

          {/* Fallback jika belum ada data proyek pada kategori tersebut */}
          {projectsData[activeTab]?.length === 0 && (
            <div className="bg-white text-center p-12 rounded-3xl shadow-md border border-gray-100 text-gray-500">
              Belum ada portofolio proyek terdaftar untuk kategori ini.
            </div>
          )}

        </div>
      </section>
    </main>
  );
}