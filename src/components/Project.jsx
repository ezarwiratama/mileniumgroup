"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const projectData = [
  {
    title: "Reboisasi Pantai",
    desc: "Penanaman Cemara Laut untuk mengurangi abrasi dan menjaga ekosistem pantai.",
    img: "/img-project.jpg",
  },
  {
    title: "Penghijauan Perkotaan",
    desc: "Pohon Palem dan Ekor Tupai ditanam di kawasan perkotaan untuk memperindah lingkungan.",
    img: "/img-project.jpg",
  },
  {
    title: "Konservasi Mangrove",
    desc: "Proyek penanaman mangrove di wilayah pesisir untuk melindungi habitat laut.",
    img: "/img-project.jpg",
  },
  {
    title: "Lanskap Perumahan",
    desc: "Pengadaan dan pemeliharaan tanaman hias untuk komplek perumahan modern.",
    img: "/img-project.jpg",
  },
  {
    title: "Hutan Kota",
    desc: "Penanaman berbagai jenis pohon untuk penghijauan kawasan perkotaan.",
    img: "/img-project.jpg",
  },
  {
    title: "Restorasi Lahan Kritis",
    desc: "Proyek penanaman untuk memulihkan lahan tandus agar kembali produktif.",
    img: "/img-project.jpg",
  },
]

export default function Project() {
  return (
    <section className="py-20 bg-white" id="project">
      <div className="text-center mb-12">
        <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
          Project Kami
        </span>
        <h2 className="text-4xl font-extrabold mt-4 text-blue-700">
          Project yang Telah Dilakukan
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Berikut adalah beberapa proyek penghijauan, konservasi, dan lanskap
          yang telah berhasil kami laksanakan bersama mitra dan klien kami.
        </p>
      </div>

      {/* Grid Project */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {projectData.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition flex flex-col"
          >
            <div className="relative w-full h-48">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover rounded-t-xl"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold text-blue-700">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2 flex-1">{item.desc}</p>
              <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                Lihat Detail
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Lihat Semua Button */}
       <div className="text-center mt-12">
        <Button
          variant="outline"
          className="px-6 py-3 border-blue-600 text-blue-600 hover:bg-blue-50"
        >
          Lihat Semua Project
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}
