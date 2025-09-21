"use client";

import { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function TentangPage() {
  const [activeTab, setActiveTab] = useState("profil");

  const tabs = [
    { key: "profil", label: "Profil Perusahaan" },
    { key: "logo", label: "Makna Logo" },
    { key: "visi", label: "Visi dan Misi" },
    { key: "nilai", label: "Nilai Perusahaan" },
    { key: "strategi", label: "Strategi Perusahaan" },
    { key: "kepemilikan", label: "Struktur Kepemilikan" },
    { key: "organisasi", label: "Struktur Organisasi" },
    { key: "manajemen", label: "Manajemen" },
    { key: "afiliasi", label: "Grup dan Afiliasi" },
    { key: "penghargaan", label: "Penghargaan" },
    { key: "sertifikasi", label: "Sertifikasi" },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section
        className="h-[50vh] flex items-center justify-center bg-cover bg-center relative px-6"
        style={{ backgroundImage: "url('/bg-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Judul di tengah */}
        <h1 className="relative z-10 text-4xl font-bold text-white">
          Tentang MileniumGroup
        </h1>

        {/* Breadcrumb di kiri bawah */}
        <div className="absolute bottom-12 left-30 z-10">
          <Breadcrumb>
            <BreadcrumbList className="text-sm text-gray-200">
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="hover:underline hover:text-blue-400">
                  Beranda
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-gray-400" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">Tentang</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="-mt-8 relative z-20">
        <div className="bg-white py-4 px-6 flex flex-wrap gap-3 justify-center rounded-lg max-w-6xl mx-auto shadow border-t border-blue-300">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeTab === tab.key
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Content Section */}
      <section className="p-8 max-w-4xl mx-auto">
        {activeTab === "profil" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Profil Perusahaan</h2>
            <p className="text-gray-700 leading-relaxed">
              Ini adalah deskripsi profil perusahaan. Kamu bisa isi dengan visi,
              sejarah, dan informasi umum tentang perusahaan.
            </p>
          </div>
        )}

        {activeTab === "logo" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Makna Logo</h2>
            <p className="text-gray-700 leading-relaxed">
              Deskripsikan makna logo di sini.
            </p>
          </div>
        )}

        {activeTab === "visi" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Visi dan Misi</h2>
            <p className="text-gray-700 leading-relaxed">
              Visi: Menjadi perusahaan terdepan ...
              <br />
              Misi: Memberikan layanan terbaik ...
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
