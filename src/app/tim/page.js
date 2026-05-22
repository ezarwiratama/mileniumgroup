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
import { Users, Microscope, BrainCircuit, HardHat, Sprout, BriefcaseBusiness } from "lucide-react"; // Ikon yang relevan

export default function TimPage() {
  // Tabs yang membagi pilar kekuatan tim
  const [activeTab, setActiveTab] = useState("manajemen");

  const tabs = [
    { key: "manajemen", label: "Manajemen Inti" },
    { key: "ahli", label: "Tenaga Ahli" },
    { key: "lapangan", label: "Tim Lapangan" },
  ];

  // Data Staf Manajemen Inti (sesuai data sebelumnya)
  const pimpinanData = [
    { name: "Eko Mudjiharto, S.T.", title: "Direktur Utama", roleTag: "Strategic Leader", path: "/path/to/eko-photo.jpg", desc: "Pendiri yang mengarahkan visi strategis, kemitraan B2B, dan memastikan standar operasional tertinggi terpenuhi." },
    { name: "Ezar Hardin Wiratama", title: "Engineer", roleTag: "Computer Engineer", path: "/path/to/ezar-photo.jpg", desc: "Penanggung jawab infrastruktur Teknologi Informasi, digitalisasi data lahan, dan keamanan sistem perusahaan." },
  ];

  // Data Tenaga Ahli Agroforestri (Placeholder Kredibel)
  const ahliData = [
    { name: "Dr. Ir. [Nama Ahli Agronomi]", title: "Senior Agronomist", expertise: "Spesialis Nutrisi Tanah & Hortikultura", path: "/path/to/ahli-agronomi.jpg" },
    { name: "Ir. [Nama Ahli Kehutanan]", title: "Silviculturist Expert", expertise: "Pakar Restorasi Hutan & Pesisir", path: "/path/to/ahli-forestri.jpg" },
  ];

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section
        className="h-[40vh] md:h-[50vh] flex items-center justify-center bg-cover bg-center relative px-6"
        style={{ backgroundImage: "url('/bg-hero.jpg')" }} // Gunakan gambar alam yang sama
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center container mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Tim Kami
          </h1>
          <p className="text-gray-200 mt-4 max-w-2xl mx-auto text-lg">
            Kombinasi dedikasi pimpinan, basis sains tenaga ahli, dan kekuatan eksekusi lapangan.
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
                  <BreadcrumbPage className="text-white font-medium">Tim Kami</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </section>

      {/* Tabs Section - Kapsul Mengambang yang Matching */}
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
        <div className="max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100">
          
          {/* TAB 1: MANAJEMEN INTI */}
          {activeTab === "manajemen" && (
            <div className="text-center space-y-12">
              <div className="flex items-center gap-3 text-sky-800 justify-center">
                <BriefcaseBusiness size={32} />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Pimpinan Strategis</h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Digerakkan oleh manajemen yang berdedikasi tinggi dalam mengarahkan operasional agroforestri modern dan mengintegrasikan solusi digital.
              </p>
              
              <div className="flex flex-wrap gap-8 justify-center">
                {pimpinanData.map((pimpinan, index) => (
                  <div key={index} className="max-w-sm bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-4 hover:border-sky-100 transition hover:shadow-2xl flex-1 min-w-[280px]">
                      <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto flex items-center justify-center border-4 border-sky-100 overflow-hidden relative">
                          <span className="text-gray-400 text-sm">Foto</span>
                          {/* <Image src={pimpinan.path} alt={pimpinan.name} fill className="object-cover rounded-full" /> */}
                      </div>
                      <div className="space-y-1.5">
                          <h4 className="text-xl font-bold text-gray-950">{pimpinan.name}</h4>
                          <p className="text-sky-800 font-semibold text-xs bg-sky-50 px-3 py-1.5 rounded-full inline-block uppercase tracking-wider">{pimpinan.title}</p>
                          <p className="text-xs text-gray-500 font-medium tracking-tight">({pimpinan.roleTag})</p>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed pt-2 border-t border-gray-100">
                        {pimpinan.desc}
                      </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: TENAGA AHLI */}
          {activeTab === "ahli" && (
            <div className="text-center space-y-12">
              <div className="flex items-center gap-3 text-sky-800 justify-center">
                <Microscope size={32} />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Pakar & Saintis Lapangan</h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Kualitas penanaman kami didukung oleh basis sains yang kuat dari para tenaga ahli berpengalaman di bidang ilmu tanah, budidaya tanaman, dan kehutanan.
              </p>

              <div className="grid sm:grid-cols-2 gap-8 justify-center">
                {ahliData.map((ahli, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-center gap-5 hover:bg-white hover:shadow-md transition">
                        <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 border-2 border-gray-200 overflow-hidden relative">
                            <span className="text-gray-400 text-xs">Foto</span>
                            {/* <Image src={ahli.path} alt={ahli.name} fill className="object-cover rounded-full" /> */}
                        </div>
                        <div className="text-left space-y-1">
                            <h4 className="font-bold text-gray-950 text-base">{ahli.name}</h4>
                            <p className="text-sky-800 text-sm font-medium">{ahli.title}</p>
                            <div className="flex items-center gap-1.5 text-xs text-gray-600 pt-1">
                                <BrainCircuit size={14} className="text-gray-400" />
                                <span>Keahlian: {ahli.expertise}</span>
                            </div>
                        </div>
                    </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: TIM LAPANGAN */}
          {activeTab === "lapangan" && (
            <div className="space-y-12 text-center md:text-left">
              <div className="grid md:grid-cols-5 gap-12 items-center">
                <div className="md:col-span-3 space-y-5">
                  <div className="flex items-center gap-3 text-sky-800 justify-center md:justify-start">
                    <HardHat size={32} />
                    <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Kekuatan Eksekusi Lahan</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Tim lapangan kami adalah ujung tombak operasi, terdiri dari personel terlatih yang disiplin dalam menerapkan metodologi penanaman, pemeliharaan berkelanjutan, dan pemantauan vegetasi di lahan kritis.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Mereka memastikan setiap bibit ditanam dengan presisi, dikelola secara matang, dan dipantau secara berkala untuk menjamin tingkat kelulusan hidup yang optimal.
                  </p>
                </div>
                <div className="md:col-span-2 bg-gray-100 h-56 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300 relative overflow-hidden">
                  <span className="text-gray-400 text-sm">[ Gambar Dokumentasi Tim Lapangan ]</span>
                  {/* <Image src="/path/to/tim-lapangan.jpg" alt="Tim Lapangan PT Milenium Jaya Sejati" fill className="object-cover" /> */}
                </div>
              </div>

              {/* Komponen Tim Lapangan */}
              <div className="pt-8 border-t border-gray-100 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-8">Struktur Tim Operasional Lahan</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {[
                    { icon: Users, title: "Leader Lapangan", desc: "Koordinasi harian & pengawasan teknis" },
                    { icon: HardHat, title: "Crew Penanaman", desc: "Personel terlatih untuk penanaman massal" },
                    { icon: Sprout, title: "Tim Perawatan", desc: "Monitoring hara & pasca-tanam" }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-sky-100 transition">
                      <item.icon className="text-sky-800 mb-3" size={32} />
                      <h4 className="font-semibold text-gray-800 text-sm md:text-base">{item.title}</h4>
                      <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
        </div>
      </section>
    </main>
  );
}