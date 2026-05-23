// app/kontak/page.js
"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function KontakPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section - Gambar alam yang sama, overlay transparan */}
      <section
        className="h-[40vh] md:h-[50vh] flex items-center justify-center bg-cover bg-center relative px-6"
        style={{ backgroundImage: "url('/bg-hero.jpg')" }} // Pastikan file gambar alam ada di public/
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center container mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Hubungi Kami
          </h1>
          <p className="text-gray-200 mt-4 max-w-2xl mx-auto text-lg">
            Terhubung langsung dengan PT Milenium Jaya Sejati untuk diskusi proyek Hijau berkelanjutan Anda.
          </p>
        </div>

        {/* Breadcrumb - Sejajar dengan container utama */}
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
                  <BreadcrumbPage className="text-white font-medium">Hubungi Kami</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </section>

      {/* Content Section - Mengambang, sudut membulat sempurna, bayangan, border */}
      <section className="py-16 md:py-24 container mx-auto px-6">
        <div className="max-w-6xl mx-auto -mt-10 relative z-20 bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100 flex flex-wrap gap-12 md:gap-16">
          
          {/* Sisi Kiri: Informasi Kontak */}
          <div className="flex-1 space-y-10">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Informasi Kontak</h2>
              <p className="text-gray-600 max-w-lg mx-auto md:mx-0">
                Tim kami siap membantu Anda dengan informasi detail mengenai pengadaan bibit, jasa penanaman, dan pemeliharaan tanaman berkelanjutan.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: MapPin, title: "Alamat Kantor", desc: "Jl. Kalimas No.15, Gobok, Donan, Kec. Cilacap Tengah, Kabupaten Cilacap, Jawa Tengah 53222" },
                { icon: Phone, title: "WhatsApp (Direktur Utama)", desc: "+62 813-9169-3209 (Bapak Eko Mudjiharto)" },
                { icon: Mail, title: "Email Resmi", desc: "mileniumjayasejati@gmail.com" },
                { icon: Clock, title: "Jam Operasional", desc: "Senin - Jumat: 08.00 - 17.00 WIB" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start bg-gray-50 p-5 rounded-2xl border border-gray-100">
                  <div className="p-3 bg-sky-100 text-sky-800 rounded-xl">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-950 text-lg">{item.title}</h4>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA WhatsApp - Terhubung langsung ke Bapak Eko */}
            <div className="text-center md:text-left">
              <Button asChild size="lg" className="rounded-xl bg-sky-800 hover:bg-sky-700 text-white font-semibold">
                <a href="https://wa.me/81391693209?text=Halo%20Bapak%20Eko%20Mudjiharto,%20saya%20tertarik%20untuk%20berdiskusi%20mengenai%20proyek%20pengadaan%20/%20penanaman%20tanaman.%20Bisa%20dibantu%20informasinya?%20Terima%20kasih." target="_blank" rel="noopener noreferrer" className="no-underline">
                  <Phone size={20} className="mr-2" /> Hubungi Kami via WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Sisi Kanan: Maps */}
          <div className="flex-1 min-w-[320px] bg-gray-100 h-[450px] rounded-2xl overflow-hidden border border-gray-100 shadow-sm relative">
            <span className="text-gray-400 text-xs md:text-sm text-center px-4">[ Google Maps Lokasi Kantor ]</span>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.5963431142627!2d109.00450119999999!3d-7.7263835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e65134e1c2140ed%3A0xb753058d0fcee7b5!2sPT%20Milenium%20Jaya%20Sejati!5e0!3m2!1sid!2sid!4v1757949865334!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}