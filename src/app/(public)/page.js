"use client";

import { useState } from "react"; // MODIFIKASI DISINI: Import useState
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  Clock,
  Leaf,
  ArrowRight,
  Phone,
  ZoomIn,
} from "lucide-react"; // MODIFIKASI DISINI: Tambah icon ZoomIn
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"; // MODIFIKASI DISINI: Import komponen Dialog

const subsidiaries = [
  {
    name: "CV. Milenium Jaya Mandiri",
    desc: "Berfokus pada layanan pengadaan dan distribusi tanaman untuk kebutuhan proyek skala kecil maupun besar.",
    logo: "/subsidiary/logo-mjm.jpg",
  },
  {
    name: "CV. Milenium Jaya Abadi",
    desc: "Mengembangkan jasa penanaman dan pemeliharaan tanaman di sektor pertanian, perkebunan, dan kehutanan.",
    logo: "/subsidiary/logo-mja.jpg",
  },
];

const produkData = [
  {
    type: "produk", // Tambah flag type
    name: "Cemara Laut",
    desc: "Tanaman penghijauan yang cocok untuk pantai dan area terbuka, tahan terhadap angin kencang.",
    img: "/produk/cemara-laut.jpg",
  },
  {
    type: "produk",
    name: "Pohon Ekor Tupai",
    desc: "Pohon hias dengan bentuk unik, ideal untuk taman dan lanskap modern.",
    img: "/produk/ekor-tupai.jpg",
  },
  {
    type: "produk",
    name: "Pohon Palem",
    desc: "Pilihan populer untuk penghijauan kawasan perkotaan, taman, hingga jalan raya.",
    img: "/produk/palem.jpg",
  },
  {
    type: "produk",
    name: "Mangrove",
    desc: "Tanaman pelindung ekosistem pesisir, mencegah abrasi dan menjaga kelestarian laut.",
    img: "/produk/mangrove.jpg",
  },
];

const projectData = [
  {
    type: "proyek", // Tambah flag type
    title: "Reboisasi Pantai", // Proyek pakai 'title', Produk pakai 'name'
    desc: "Penanaman Cemara Laut untuk mengurangi abrasi dan menjaga ekosistem pantai.",
    img: "/project/reboisasi.png",
    location: "Cilacap", // Contoh data tambahan untuk proyek
    date: "Mei 2024",
  },
  {
    type: "proyek",
    title: "Penghijauan Perkotaan",
    desc: "Pohon Palem dan Ekor Tupai ditanam di kawasan perkotaan untuk memperindah lingkungan.",
    img: "/project/penghijauan-kota.png",
    location: "Purwokerto",
    date: "April 2024",
  },
  {
    type: "proyek",
    title: "Konservasi Mangrove",
    desc: "Proyek penanaman mangrove di wilayah pesisir untuk melindungi habitat laut.",
    img: "/produk/mangrove.jpg",
    location: "Kebumen",
    date: "Maret 2024",
  },
  {
    type: "proyek",
    title: "Lanskap Perumahan",
    desc: "Pengadaan dan pemeliharaan tanaman hias untuk komplek perumahan modern.",
    img: "/project/lanskap.png",
    location: "Yogyakarta",
    date: "Januari 2024",
  },
  {
    type: "proyek",
    title: "Hutan Kota",
    desc: "Penanaman berbagai jenis pohon untuk penghijauan kawasan perkotaan.",
    img: "/project/hutan-kota.png",
    location: "Semarang",
    date: "Desember 2023",
  },
  {
    type: "proyek",
    title: "Restorasi Lahan Kritis",
    desc: "Proyek penanaman untuk memulihkan lahan tandus agar kembali produktif.",
    img: "/project/restorasi-lahan-kritis.png",
    location: "Bandung",
    date: "November 2023",
  },
];

export default function Home() {
  // MODIFIKASI DISINI: State Management untuk Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // Menampung data produk/proyek yang diklik

  // Fungsi untuk membuka modal dan set data
  const openDetails = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <>
      {/* hero section */}
      <section
        className="relative h-[100vh] w-full bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/bg-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-white max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            PT. Milenium Jaya Sejati
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Solusi terbaik untuk kebutuhan bisnis Anda dengan layanan
            profesional dan terpercaya.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
              <a href="/tentang">Tentang Kami</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-black"
            >
              <a href="/kontak">Hubungi Kami</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Tentang Kami */}
      <section className="py-20 bg-white" id="tentang">
        <div className="text-center mb-12">
          <span className="bg-sky-100 text-sky-700 px-4 py-1 rounded-full text-sm font-medium">
            Tentang Kami
          </span>
          <Image
            src="/subsidiary/logo-mjs.jpg"
            alt="Kegiatan PT. Milenium Jaya Sejati"
            width={100}
            height={100}
            style={{ width: "auto", height: "auto" }}
            className="object-cover rounded-xl mx-auto mt-4"
          />
          <h2 className="text-4xl font-extrabold mt-4 mb-2 text-sky-800">
            PT. Milenium Jaya Sejati
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
          <div className="relative w-full h-[50px] md:h-[500px]">
            <Image
              src="/bg-hero-2.jpg"
              alt="Kegiatan PT. Milenium Jaya Sejati"
              fill
              sizes="50vw"
              className="object-cover rounded-xl"
            />
          </div>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="flex items-start space-x-3">
                <Clock className="text-sky-600 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">Siap 24 Jam</h4>
                  <p className="text-sm text-gray-600">
                    Layanan konsultasi & dukungan penuh setiap saat.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Leaf className="text-sky-600 mt-1" size={30} />
                <div>
                  <h4 className="font-semibold text-gray-900">Berpengalaman</h4>
                  <p className="text-sm text-gray-600">
                    Tenaga ahli berpengalaman di bidang pertanian, perkebunan,
                    dan kehutanan.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-sky-600 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">Fleksibel</h4>
                  <p className="text-sm text-gray-600">
                    Melayani proyek skala kecil maupun besar.
                  </p>
                </div>
              </div>
            </div>
            <Button asChild className="bg-sky-600 hover:bg-sky-700">
              <a href="/kontak">Hubungi Kami</a>
            </Button>
          </div>
        </div>

        <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 px-6">
          <Button className="w-full h-24 rounded-xl bg-sky-600 hover:bg-sky-700 flex flex-col items-center justify-center text-white">
            <span className="text-3xl font-extrabold">20+</span>
            <span className="text-sm font-medium">Tahun Pengalaman</span>
          </Button>
          <Button className="w-full h-24 rounded-xl bg-sky-600 hover:bg-sky-700 flex flex-col items-center justify-center text-white">
            <span className="text-3xl font-extrabold">20+</span>
            <span className="text-sm font-medium">Jenis Tanaman</span>
          </Button>
          <Button className="w-full h-24 rounded-xl bg-sky-600 hover:bg-sky-700 flex flex-col items-center justify-center text-white">
            <span className="text-3xl font-extrabold">100+</span>
            <span className="text-sm font-medium">Pelanggan Puas</span>
          </Button>
        </div>
      </section>

      {/* Produk */}
      <section className="py-20 bg-gray-50" id="produk">
        <div className="text-center mb-12">
          <span className="bg-sky-100 text-sky-700 px-4 py-1 rounded-full text-sm font-medium">
            Produk Kami
          </span>
          <h2 className="text-4xl font-extrabold mt-4 text-sky-800">
            Tanaman Unggulan
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Kami menyediakan berbagai jenis tanaman unggulan yang digunakan
            untuk penghijauan, konservasi lingkungan, serta kebutuhan lanskap.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {produkData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center card group" // Tambah class group
            >
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                {" "}
                {/* Tambah overflow-hidden */}
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110" // Efek zoom saat hover card
                />
              </div>
              <h3 className="text-lg font-semibold text-sky-800">
                {item.name}
              </h3>
              <p className="text-sm text-gray-600 text-center mt-2 flex-1 line-clamp-2">
                {" "}
                {/* line-clamp agar rapi */}
                {item.desc}
              </p>
              {/* MODIFIKASI DISINI: Tambah onClick */}
              <Button
                onClick={() => openDetails(item)}
                className="mt-4 bg-sky-600 hover:bg-sky-700 text-white w-full flex gap-2 items-center"
              >
                <ZoomIn size={16} /> Lihat Detail
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            className="px-6 py-3 border-sky-600 text-sky-700 hover:bg-sky-50"
          >
            <Link href="/produk">
              Lihat Semua
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="max-w-6xl mx-auto mt-16 px-6">
          <div className="bg-sky-600 text-white rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-lg md:text-xl font-bold">
                Butuh Bibit Tanaman dalam Jumlah Besar?
              </h3>
              <p className="text-sm mt-1 opacity-90">
                Kami juga melayani pemesanan bibit dalam jumlah besar untuk
                kebutuhan proyek Anda.
              </p>
            </div>
            <Button
              asChild
              variant="secondary"
              className="mt-4 md:mt-0 bg-white text-sky-700 hover:bg-gray-100"
            >
              <Link href="/kontak">
                <Phone className="mr-2 h-4 w-4" /> Hubungi Kami
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Proyek  */}
      <section className="py-20 bg-white" id="project">
        <div className="text-center mb-12">
          <span className="bg-sky-100 text-sky-700 px-4 py-1 rounded-full text-sm font-medium">
            Project Kami
          </span>
          <h2 className="text-4xl font-extrabold mt-4 text-sky-800">
            Project yang Telah Dilakukan
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Berikut adalah beberapa proyek penghijauan, konservasi, dan lanskap
            yang telah berhasil kami laksanakan bersama mitra dan klien kami.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {projectData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition flex flex-col card group"
            >
              <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-sky-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2 flex-1 line-clamp-3">
                  {item.desc}
                </p>
                {/* MODIFIKASI DISINI: Tambah onClick */}
                <Button
                  onClick={() => openDetails(item)}
                  className="mt-4 bg-sky-600 hover:bg-sky-700 text-white flex gap-2 items-center"
                >
                  <ZoomIn size={16} /> Lihat Detail
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            className="px-6 py-3 border-sky-600 text-sky-700 hover:bg-sky-50"
          >
            <Link href="/project">
              Lihat Semua Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Subsidiaries */}
      <section className="py-20 bg-white" id="subsidiaries">
        <div className="container mx-auto px-6 text-center">
          <span className="bg-sky-100 text-sky-700 px-4 py-1 rounded-full text-sm font-medium">
            Anak Perusahaan
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-4 text-sky-800">
            Anak Perusahaan Kami
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            PT. Milenium Jaya Sejati memiliki anak perusahaan yang mendukung
            layanan pengadaan, penanaman, serta pemeliharaan tanaman untuk
            berbagai sektor.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {subsidiaries.map((item, index) => (
              <Card
                key={index}
                className="rounded-2xl shadow-md hover:shadow-lg transition border border-gray-200"
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Image
                      src={item.logo}
                      alt={`${item.name} Logo`}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <CardTitle className="text-xl font-semibold text-sky-800">
                    {item.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* lokasi */}
      <section className="py-20 bg-gray-50" id="lokasi">
        <div className="container mx-auto px-6 text-center">
          <span className="bg-sky-100 text-sky-700 px-4 py-1 rounded-full text-sm font-medium">
            Lokasi Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-4 text-sky-800">
            Kunjungi Perusahaan Kami
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Silakan datang langsung ke kantor kami di alamat berikut:
          </p>
          <p className="mt-4 font-medium text-lg text-gray-800">
            Jl. Kalimas No.15, Gobok, Donan, Kec. Cilacap Tengah, Kabupaten
            Cilacap, Jawa Tengah 53222
          </p>
          <div className="mt-10 flex justify-center">
            <div className="w-full max-w-4xl h-[450px] rounded-xl overflow-hidden shadow-lg">
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
        </div>
      </section>

      {/* ========================================= */}
      {/* MODIFIKASI DISINI: Komponen Dialog (Modal) Dinamis */}
      {/* ========================================= */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden rounded-2xl border-none shadow-2xl">
          {selectedItem && (
            <>
              {/* Header Modal dengan Gambar */}
              <div className="relative w-full h-[300px]">
                <Image
                  src={selectedItem.img}
                  alt={
                    selectedItem.type === "produk"
                      ? selectedItem.name
                      : selectedItem.title
                  }
                  fill
                  className="object-cover"
                />
                {/* Overlay gradasi agar teks header lebih terbaca jika ada (opsional) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Badge Tipe di pojok kiri atas gambar */}
                <span
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white ${selectedItem.type === "produk" ? "bg-green-600" : "bg-sky-600"}`}
                >
                  {selectedItem.type}
                </span>
              </div>

              {/* Konten Teks Modal */}
              <div className="p-8 space-y-6">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-extrabold text-sky-950 tracking-tight">
                    {selectedItem.type === "produk"
                      ? selectedItem.name
                      : selectedItem.title}
                  </DialogTitle>

                  {/* Meta data tambahan khusus proyek (Lokasi & Tanggal) */}
                  {selectedItem.type === "proyek" && (
                    <div className="flex gap-4 text-sm text-gray-500 pt-1 font-medium">
                      <span className="flex items-center gap-1.5">
                        <Leaf size={14} className="text-sky-600" />{" "}
                        {selectedItem.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} className="text-sky-600" />{" "}
                        {selectedItem.date}
                      </span>
                    </div>
                  )}
                </DialogHeader>

                <div className="border-t border-gray-100 pt-6">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    Deskripsi Detail
                  </h4>
                  <DialogDescription className="text-base text-gray-700 leading-relaxed">
                    {selectedItem.desc}
                  </DialogDescription>
                </div>

                {/* Tombol Aksi di Modal */}
                <div className="flex justify-end pt-4 border-t border-gray-100">
                  <Button
                    asChild
                    className="bg-sky-600 hover:bg-sky-700 flex gap-2"
                  >
                    <Link href="/kontak">
                      <Phone size={16} /> Tanya Info Lebih Lanjut
                    </Link>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
