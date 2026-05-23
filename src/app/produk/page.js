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
import { Leaf, Sprout, ShieldCheck, Wrench, Eye, CheckCircle2 } from "lucide-react";

export default function ProdukPage() {
  // Tabs yang membagi 3 pilar utama bisnis agroforestri perusahaan
  const [activeTab, setActiveTab] = useState("pengadaan");

  const tabs = [
    { key: "pengadaan", label: "Pengadaan Tanaman" },
    { key: "penanaman", label: "Jasa Penanaman" },
    { key: "pemeliharaan", label: "Pemeliharaan & Perawatan" },
  ];

  // Data Dummy Produk Tanaman untuk Tab Pengadaan
  const produkTanaman = [
    { name: "Cemara Laut", desc: "Sangat optimal untuk mitigasi bencana pesisir, penahan angin, dan reboisasi pantai.", icon: Leaf },
    { name: "Mangrove (Bakau)", desc: "Bibit tangguh untuk restorasi ekosistem pesisir, pencegahan abrasi, dan konservasi laut.", icon: Leaf },
    { name: "Pohon Palem", desc: "Pilihan utama penataan lanskap hijau perkotaan, area komersial, dan jalan raya.", icon: Leaf },
    { name: "Pohon Ekor Tupai", desc: "Tanaman hias peneduh dengan estetika tinggi, sangat cocok untuk lanskap modern.", icon: Leaf },
  ];

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section
        className="h-[40vh] md:h-[50vh] flex items-center justify-center bg-cover bg-center relative px-6"
        style={{ backgroundImage: "url('/bg-hero.jpg')" }} // Pastikan file gambar ada di public/
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center container mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Produk & Layanan
          </h1>
          <p className="text-gray-200 mt-4 max-w-2xl mx-auto text-lg">
            Solusi agroforestri menyeluruh dari hulu ke hilir untuk proyek hijau berkelanjutan.
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
                  <BreadcrumbPage className="text-white font-medium">Produk & Layanan</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </section>

      {/* Tabs Section - Menggunakan style capsule modern yang sama dengan page tentang */}
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
          
          {/* TAB 1: PENGADAAN TANAMAN */}
          {activeTab === "pengadaan" && (
            <div className="space-y-10">
              <div className="grid md:grid-cols-5 gap-12 items-center">
                <div className="md:col-span-3 space-y-4">
                  <div className="flex items-center gap-3 text-sky-800">
                    <Sprout size={32} />
                    <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Pengadaan Bibit & Tanaman Unggul</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Kami menyediakan berbagai jenis bibit dan tanaman dewasa berkualitas tinggi untuk kebutuhan reboisasi, konservasi pesisir, maupun kebutuhan estetika lanskap komersial.
                  </p>
                  <p className="text-gray-650 text-sm">
                    Seluruh komoditas tanaman kami dibudidayakan secara matang oleh tenaga ahli, memastikan daya adaptasi yang tinggi saat dipindahkan ke lokasi lahan baru.
                  </p>
                </div>
                <div className="md:col-span-2 bg-gray-100 h-56 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300 relative overflow-hidden">
                  {/* <span className="text-gray-400 text-sm">[ Gambar Pembibitan / Kebun ]</span> */}
                  <Image src="/layanan/pengadaan.jpg" alt="Pembibitan Tanaman" fill className="object-cover" />
                </div>
              </div>

              {/* Grid Mini Katalog */}
              <div className="pt-8 border-t border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center md:text-left">Komoditas Utama Kami</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {produkTanaman.map((tanaman, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 items-start">
                      <div className="p-3 bg-sky-100 text-sky-800 rounded-xl">
                        <tanaman.icon size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-950 text-lg">{tanaman.name}</h4>
                        <p className="text-gray-600 text-sm mt-1 leading-relaxed">{tanaman.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: JASA PENANAMAN */}
          {activeTab === "penanaman" && (
            <div className="space-y-10">
              <div className="grid md:grid-cols-5 gap-12 items-center">
                <div className="md:col-span-3 space-y-4">
                  <div className="flex items-center gap-3 text-sky-800">
                    <ShieldCheck size={32} />
                    <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Jasa Penanaman Profesional</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Bukan sekadar menancapkan bibit ke tanah, kami menyediakan tim lapangan terampil yang melakukan penanaman dengan metodologi agronomi dan kehutanan yang presisi.
                  </p>
                  <p className="text-gray-650 text-sm">
                    Kami menghitung jarak tanam yang ideal, mengkondisikan unsur hara tanah pratanam, serta menggunakan teknik penataan akar yang meminimalkan risiko stres vegetasi.
                  </p>
                </div>
                <div className="md:col-span-2 bg-gray-100 h-56 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300 relative overflow-hidden">
                  {/* <span className="text-gray-400 text-sm">[ Gambar Proses Penanaman ]</span> */}
                  <Image src="/layanan/penanaman.jpg" alt="Proses Penanaman" fill className="object-cover" />
                </div>
              </div>

              {/* Scope of Work Penanaman */}
              <div className="pt-8 border-t border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Cakupan Layanan Penanaman</h3>
                <div className="grid sm:grid-cols-3 gap-6">
                  {[
                    { title: "Reboisasi & Konservasi", desc: "Penghijauan kembali hutan kritis, daerah aliran sungai (DAS), dan wilayah pesisir pantai." },
                    { title: "Lanskap Perkotaan", desc: "Penataan taman kota, sabuk hijau (green belt), hiasan median jalan, dan kompleks residensial." },
                    { title: "Restorasi Lahan Kritis", desc: "Reklamasi dan optimasi lahan tandus pasca-aktivitas tertentu agar kembali produktif." }
                  ].map((scope, i) => (
                    <div key={i} className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100/50 text-center space-y-2">
                      <CheckCircle2 className="text-sky-800 mx-auto" size={28} />
                      <h4 className="font-bold text-gray-900 pt-2">{scope.title}</h4>
                      <p className="text-gray-600 text-xs leading-relaxed">{scope.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PEMELIHARAAN & PERAWATAN */}
          {activeTab === "pemeliharaan" && (
            <div className="space-y-10">
              <div className="grid md:grid-cols-5 gap-12 items-center">
                <div className="md:col-span-3 space-y-4">
                  <div className="flex items-center gap-3 text-sky-800">
                    <Wrench size={32} />
                    <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Pemeliharaan & Monitoring Berkala</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Keberhasilan penghijauan diukur dari pertumbuhan jangka panjangnya. Kami menyediakan program pemeliharaan kontraktual untuk memastikan tanaman tumbuh sehat dan mandiri.
                  </p>
                  <p className="text-gray-650 text-sm">
                    Layanan ini mencakup pengendalian gulma, pemangkasan periodik struktural tanaman hias, hingga pemupukan berkala guna menjaga stabilitas ekosistem makro.
                  </p>
                </div>
                <div className="md:col-span-2 bg-gray-100 h-56 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300 relative overflow-hidden">
                  {/* <span className="text-gray-400 text-sm">[ Gambar Pemeliharaan Lahan ]</span> */}
                  <Image src="/layanan/pemeliharaan.jpg" alt="Pemeliharaan Tanaman" fill className="object-cover" />
                </div>
              </div>

              {/* Proses Perawatan */}
              <div className="pt-8 border-t border-gray-100 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-8">Aspek Manajemen Perawatan</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {[
                    { icon: Wrench, title: "Pengendalian Hama", desc: "Proteksi nabati berkala" },
                    { icon: Leaf, title: "Nutrisi & Pemupukan", desc: "Pemberian pupuk organik hara" },
                    { icon: Eye, title: "Monitoring Rutin", desc: "Evaluasi tingkat kelulusan hidup" }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center p-5 bg-white rounded-xl shadow-sm border border-gray-100">
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