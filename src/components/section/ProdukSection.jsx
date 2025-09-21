"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

const produkData = [
  {
    name: "Cemara Laut",
    desc: "Tanaman penghijauan yang cocok untuk pantai dan area terbuka, tahan terhadap angin kencang.",
    img: "/img-produk.jpg",
  },
  {
    name: "Pohon Ekor Tupai",
    desc: "Pohon hias dengan bentuk unik, ideal untuk taman dan lanskap modern.",
    img: "/img-produk.jpg",
  },
  {
    name: "Pohon Palem",
    desc: "Pilihan populer untuk penghijauan kawasan perkotaan, taman, hingga jalan raya.",
    img: "/img-produk.jpg",
  },
  {
    name: "Mangrove",
    desc: "Tanaman pelindung ekosistem pesisir, mencegah abrasi dan menjaga kelestarian laut.",
    img: "/img-produk.jpg",
  },
]

export default function Produk() {
  return (
    <section className="py-20 bg-gray-50" id="produk">
      <div className="text-center mb-12">
        <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
          Produk Kami
        </span>
        <h2 className="text-4xl font-extrabold mt-4 text-blue-700">
          Tanaman Unggulan
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Kami menyediakan berbagai jenis tanaman unggulan yang digunakan untuk
          penghijauan, konservasi lingkungan, serta kebutuhan lanskap.
        </p>
      </div>

      {/* Grid Produk */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {produkData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center"
          >
            <div className="relative w-full h-48 mb-4">
              <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-lg font-semibold text-blue-700">
              {item.name}
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2 flex-1">
              {item.desc}
            </p>
            <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white w-full">
              Lihat Detail
            </Button>
          </div>
        ))}
      </div>

      {/* Tombol Lihat Semua */}
      <div className="text-center mt-12">
        <Button
          variant="outline"
          className="px-6 py-3 border-blue-600 text-blue-600 hover:bg-blue-50"
        >
          Lihat Semua
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {/* CTA Box */}
      <div className="max-w-6xl mx-auto mt-16 px-6">
        <div className="bg-blue-600 text-white rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-lg md:text-xl font-bold">
              Butuh Bibit Tanaman dalam Jumlah Besar?
            </h3>
            <p className="text-sm mt-1 opacity-90">
              Kami juga melayani pemesanan bibit dalam jumlah besar untuk kebutuhan proyek Anda.
            </p>
          </div>
          <Button
            variant="secondary"
            className="mt-4 md:mt-0 bg-white text-blue-600 hover:bg-gray-100"
          >
            <Phone className="mr-2 h-4 w-4" /> Hubungi Kami
          </Button>
        </div>
      </div>
    </section>
  )
}
