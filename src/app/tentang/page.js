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
import { Leaf, Target, Handshake, Award } from "lucide-react"; // Import ikon untuk mempercantik UI

export default function TentangPage() {
  // Menyederhanakan Tabs menjadi 3 aspek utama saja
  const [activeTab, setActiveTab] = useState("profil");

  const tabs = [
    { key: "profil", label: "Profil Perusahaan" },
    { key: "visi_misi", label: "Visi, Misi & Nilai" },
    { key: "manajemen", label: "Struktur Manajemen" },
  ];

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section
        className="h-[40vh] md:h-[50vh] flex items-center justify-center bg-cover bg-center relative px-6"
        style={{ backgroundImage: "url('/bg-hero.jpg')" }} // Pastikan file ini ada di folder public
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center container mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Tentang Kami
          </h1>
          <p className="text-gray-200 mt-4 max-w-2xl mx-auto text-lg">
            Mengenal lebih dekat PT Milenium Jaya Sejati, mitra terpercaya Anda di bidang agroforestri.
          </p>
        </div>

        {/* Breadcrumb - Disesuaikan posisinya agar lebih rapi */}
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
                  <BreadcrumbPage className="text-white font-medium">Tentang Kami</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </section>

      {/* Tabs Section - Dibuat lebih modern */}
      <section className="-mt-10 relative z-20 sticky top-20"> {/* Sticky agar tab mengikuti saat scroll */}
        <div className="container mx-auto px-4">
          <div className="bg-white p-2 flex flex-row gap-2 justify-center rounded-full max-w-2xl mx-auto shadow-xl border border-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 flex-1 text-center ${
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

      {/* Content Section - Diisi konten placeholder yang relevan */}
      <section className="py-16 md:py-24 container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100">
          
          {/* TAB 1: PROFIL */}
          {activeTab === "profil" && (
            <div className="grid md:grid-cols-5 gap-12 items-center">
              <div className="md:col-span-3 space-y-6">
                <div className="flex items-center gap-3 text-blue-600">
                  <Leaf size={32} />
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">PT Milenium Jaya Sejati</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Didirikan dengan semangat untuk menghijaukan negeri, <span className="font-semibold text-gray-800">PT Milenium Jaya Sejati</span> adalah perusahaan yang berdedikasi penuh pada penyediaan solusi komprehensif di sektor <span className="font-medium">pertanian, kehutanan, dan perkebunan</span>.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Kami melayani pengadaan bibit tanaman unggul, jasa penanaman profesional, hingga pemeliharaan jangka panjang. Dengan kombinasi keahlian teknis dan pendekatan yang ramah lingkungan, kami berkomitmen untuk mendukung terciptanya ekosistem yang produktif dan berkelanjutan bagi mitra bisnis maupun lingkungan sekitar.
                </p>
              </div>
              <div className="md:col-span-2 bg-gray-100 h-64 rounded-2xl flex items-center justify-center">
                 {/* Placeholder untuk Gambar Profil/Kantor - Gunakan <Image /> seperti manajemen */}
                 {/* <span className="text-gray-400 text-sm">[ Gambar Profil / Kantor ]</span> */}
                 <Image src="/subsidiary/logo-mjs.jpg" alt="PT Milenium Jaya Sejati Profil" width={400} height={400} className="object-contain" />
              </div>
            </div>
          )}

          {/* TAB 2: VISI MISI & NILAI */}
          {activeTab === "visi_misi" && (
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-10">
                {/* Visi */}
                <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 flex gap-5">
                    <Target className="text-blue-600 flex-shrink-0" size={40} strokeWidth={1.5}/>
                    <div>
                        <h3 className="text-2xl font-semibold mb-3 text-blue-950">Visi Kami</h3>
                        <p className="text-blue-900 leading-relaxed">
                          Menjadi perusahaan agroforestri terdepan di Indonesia yang dikenal karena kualitas, integritas, dan kontribusi nyata terhadap keberlanjutan lingkungan.
                        </p>
                    </div>
                </div>
                {/* Misi */}
                <div className="bg-green-50 p-8 rounded-2xl border border-green-100 flex gap-5">
                    <Award className="text-green-600 flex-shrink-0" size={40} strokeWidth={1.5}/>
                    <div>
                        <h3 className="text-2xl font-semibold mb-3 text-green-950">Misi Kami</h3>
                        <ul className="list-disc list-outside pl-5 text-green-900 space-y-2.5 text-sm">
                          <li>Menyediakan bibit tanaman berkualitas tinggi dan bersertifikat.</li>
                          <li>Menerapkan teknik penanaman dan pemeliharaan berbasis sains dan ramah lingkungan.</li>
                          <li>Membangun kemitraan yang saling menguntungkan dan transparan dengan seluruh pemangku kepentingan.</li>
                        </ul>
                    </div>
                </div>
              </div>

              {/* Nilai Perusahaan */}
              <div className="pt-8 border-t border-gray-100 text-center">
                <h3 className="text-2xl font-semibold mb-8 text-gray-900">Nilai-Nilai Perusahaan</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        {icon: Handshake, title: "Integritas", desc: "Jujur & Transparan"},
                        {icon: Leaf, title: "Keberlanjutan", desc: "Peduli Lingkungan"},
                        {icon: Award, title: "Kualitas", desc: "Standar Terbaik"},
                        {icon: Target, title: "Inovasi", desc: "Terus Berkembang"},
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center p-5 bg-white rounded-xl shadow-sm border border-gray-100">
                            <item.icon className="text-blue-500 mb-3" size={32}/>
                            <h4 className="font-semibold text-gray-800">{item.title}</h4>
                            <p className="text-xs text-gray-500">{item.desc}</p>
                        </div>
                    ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: MANAJEMEN */}
          {activeTab === "manajemen" && (
            <div className="text-center space-y-12">
              <h2 className="text-3xl font-bold text-gray-900">Pimpinan Perusahaan</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                PT Milenium Jaya Sejati dipimpin oleh manajemen yang berdedikasi dan berpengalaman di bidangnya, membawa visi perusahaan menuju kesuksesan yang berkelanjutan.
              </p>
              
              <div className="flex flex-wrap gap-8 justify-center">
                {/* Kartu Direktur Utama */}
                <div className="max-w-sm bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-4 hover:border-blue-100 transition hover:shadow-2xl">
                    <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto flex items-center justify-center border-4 border-blue-100 overflow-hidden relative">
                        {/* Placeholder atau Gunakan next/image jika ada foto */}
                        {/* <span className="text-gray-400 text-sm">Foto</span> */}
                        <Image src="/profil-manajemen/eko.jpg" alt="Eko Mudjiharto, S.T." width={150} height={150} className="object-cover rounded-full" />
                    </div>
                    <div className="space-y-1">
                        <h4 className="text-xl font-bold text-gray-950">Eko Mudjiharto, S.T.</h4>
                        <p className="text-blue-700 font-medium text-sm bg-blue-50 px-3 py-1 rounded-full inline-block">Direktur Utama</p>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pt-2 border-t border-gray-100">
                    Sebagai pendiri dan Direktur Utama, Bapak Eko Mudjiharto bertanggung jawab penuh atas arah strategis dan operasional perusahaan, memastikan komitmen kualitas terhadap klien tetap terjaga.
                    </p>
                </div>

                {/* Kartu Engineer - Ezar Hardin Wiratama */}
                <div className="max-w-sm bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-4 hover:border-blue-100 transition hover:shadow-2xl">
                    <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto flex items-center justify-center border-4 border-blue-100 overflow-hidden relative">
                        {/* Placeholder atau Gunakan next/image jika ada foto */}
                        {/* <span className="text-gray-400 text-sm">Foto</span> */}
                        <Image src="/profil-manajemen/ezar.jpg" alt="Ezar Hardin Wiratama" width={150} height={150} className="object-cover rounded-full" />
                    </div>
                    <div className="space-y-1">
                        <h4 className="text-xl font-bold text-gray-950">Ezar Hardin Wiratama</h4>
                        <p className="text-blue-700 font-medium text-sm bg-blue-50 px-3 py-1 rounded-full inline-block">Engineer</p>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pt-2 border-t border-gray-100">
                    Sebagai Computer Engineer, Ezar Hardin Wiratama bertanggung jawab penuh atas arah infrastruktur Teknologi Informasi dan digital perusahaan, memastikan efisiensi dan keamanan teknologi perusahaan tetap terjaga.
                    </p>
                </div>
              </div>
            </div>
          )}
          
        </div>
      </section>
    </main>
  );
}