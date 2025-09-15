"use client";

import { CheckCircle, Clock, Leaf } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Tentang() {
  return (
    <section className="py-20 bg-white" id="tentang">
      <div className="text-center mb-12">
        <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
          Tentang Kami
        </span>
        <h2 className="text-4xl font-extrabold mt-4 text-blue-700">
          PT. Milenium Jaya Sejati
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
        {/* Gambar */}
        <div className="relative w-full h-[350px] md:h-[400px]">
          <Image
            src="/bg-hero.jpg"
            alt="Kegiatan PT. Milenium Jaya Sejati"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* Konten */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            Menyediakan layanan pengadaan, penanaman, dan pemeliharaan tanaman
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            PT. Milenium Jaya Sejati adalah perusahaan yang bergerak di bidang
            pengadaan serta jasa penanaman dan pemeliharaan tanaman di sektor
            pertanian, perkebunan, dan kehutanan. Kami berkomitmen untuk
            menghadirkan solusi berkelanjutan yang mendukung produktivitas
            lingkungan dan menjaga kelestarian alam.
          </p>

          {/* Kelebihan */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="flex items-start space-x-3">
              <Clock className="text-blue-600 mt-1" size={20} />
              <div>
                <h4 className="font-semibold text-gray-900">Siap 24 Jam</h4>
                <p className="text-sm text-gray-600">
                  Layanan konsultasi & dukungan penuh setiap saat.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Leaf className="text-blue-600 mt-1" size={30} />
              <div>
                <h4 className="font-semibold text-gray-900">Berpengalaman</h4>
                <p className="text-sm text-gray-600">
                  Tenaga ahli berpengalaman di bidang pertanian, perkebunan, dan
                  kehutanan.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-blue-600 mt-1" size={20} />
              <div>
                <h4 className="font-semibold text-gray-900">Fleksibel</h4>
                <p className="text-sm text-gray-600">
                  Melayani proyek skala kecil maupun besar.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <a href="/contact">Hubungi Kami</a>
          </Button>
        </div>
      </div>

      {/* 3 Button Bawah */}
      <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Button className="w-full h-24 rounded-xl bg-blue-600 hover:bg-blue-700 flex flex-col items-center justify-center text-white">
          <span className="text-3xl font-extrabold">4+</span>
          <span className="text-sm font-medium">Tahun Pengalaman</span>
        </Button>

        <Button className="w-full h-24 rounded-xl bg-blue-600 hover:bg-blue-700 flex flex-col items-center justify-center text-white">
          <span className="text-3xl font-extrabold">20+</span>
          <span className="text-sm font-medium">Jenis Tanaman</span>
        </Button>

        <Button className="w-full h-24 rounded-xl bg-blue-600 hover:bg-blue-700 flex flex-col items-center justify-center text-white">
          <span className="text-3xl font-extrabold">100+</span>
          <span className="text-sm font-medium">Pelanggan Puas</span>
        </Button>
      </div>
    </section>
  );
}
