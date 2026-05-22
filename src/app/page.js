"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { CheckCircle, Clock, Leaf, ArrowRight, Phone } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const subsidiaries = [
  {
    name: "CV. Milenium Jaya Mandiri",
    desc: "Berfokus pada layanan pengadaan dan distribusi tanaman untuk kebutuhan proyek skala kecil maupun besar.",
    logo: "/logo.jpg", // letakkan file di public/
  },
  {
    name: "CV. Milenium Jaya Abadi",
    desc: "Mengembangkan jasa penanaman dan pemeliharaan tanaman di sektor pertanian, perkebunan, dan kehutanan.",
    logo: "/logo.jpg", // letakkan file di public/
  },
];

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

export default function Home() {
  return (
    <>
    {/* hero section */}
    <section
      className="relative h-[100vh] w-full bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/bg-hero.jpg')" }}
    >
      {/* Overlay gelap agar teks lebih jelas */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Konten */}
      <div className="relative z-10 text-white max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          PT. Milenium Jaya Sejati
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Solusi terbaik untuk kebutuhan bisnis Anda dengan layanan profesional
          dan terpercaya.
        </p>

        {/* CTA pakai shadcn button - Warna diubah jadi sky */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
            <a href="/about">Tentang Kami</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-black"
          >
            <a href="/contact">Hubungi Kami</a>
          </Button>
        </div>
      </div>
    </section>

    {/* Tentang Kami */}
     <section className="py-20 bg-white" id="tentang">
      <div className="text-center mb-12">
        {/* Badge dan Judul diubah jadi sky */}
        <span className="bg-sky-100 text-sky-700 px-4 py-1 rounded-full text-sm font-medium">
          Tentang Kami
        </span>
        <h2 className="text-4xl font-extrabold mt-4 text-sky-800">
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

          {/* Kelebihan - Icon diubah jadi sky */}
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
                  Tenaga ahli berpengalaman di bidang pertanian, perkebunan, dan
                  kehutanan.
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

          {/* CTA - Tombol diubah jadi sky */}
          <Button asChild className="bg-sky-600 hover:bg-sky-700">
            <a href="/contact">Hubungi Kami</a>
          </Button>
        </div>
      </div>

      {/* 3 Button Bawah - Diubah jadi sky */}
      <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 px-6">
        <Button className="w-full h-24 rounded-xl bg-sky-600 hover:bg-sky-700 flex flex-col items-center justify-center text-white">
          <span className="text-3xl font-extrabold">4+</span>
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
        {/* Badge dan Judul diubah jadi sky */}
        <span className="bg-sky-100 text-sky-700 px-4 py-1 rounded-full text-sm font-medium">
          Produk Kami
        </span>
        <h2 className="text-4xl font-extrabold mt-4 text-sky-800">
          Tanaman Unggulan
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Kami menyediakan berbagai jenis tanaman unggulan yang digunakan untuk
          ghijauan, konservasi lingkungan, serta kebutuhan lanskap.
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
            {/* Teks dan Tombol diubah jadi sky */}
            <h3 className="text-lg font-semibold text-sky-800">
              {item.name}
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2 flex-1">
              {item.desc}
            </p>
            <Button className="mt-4 bg-sky-600 hover:bg-sky-700 text-white w-full">
              Lihat Detail
            </Button>
          </div>
        ))}
      </div>

      {/* Tombol Lihat Semua - Diubah jadi sky */}
      <div className="text-center mt-12">
        <Button
          variant="outline"
          className="px-6 py-3 border-sky-600 text-sky-700 hover:bg-sky-50"
        >
          Lihat Semua
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {/* CTA Box - Diubah jadi sky */}
      <div className="max-w-6xl mx-auto mt-16 px-6">
        <div className="bg-sky-600 text-white rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between">
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
            className="mt-4 md:mt-0 bg-white text-sky-700 hover:bg-gray-100"
          >
            <Phone className="mr-2 h-4 w-4" /> Hubungi Kami
          </Button>
        </div>
      </div>
    </section>

    {/* Proyek  */}
    <section className="py-20 bg-white" id="project">
      <div className="text-center mb-12">
        {/* Badge dan Judul diubah jadi sky */}
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
              {/* Teks dan Tombol diubah jadi sky */}
              <h3 className="text-xl font-semibold text-sky-800">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2 flex-1">{item.desc}</p>
              <Button className="mt-4 bg-sky-600 hover:bg-sky-700 text-white">
                Lihat Detail
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Lihat Semua Button - Diubah jadi sky */}
       <div className="text-center mt-12">
        <Button
          variant="outline"
          className="px-6 py-3 border-sky-600 text-sky-700 hover:bg-sky-50"
        >
          Lihat Semua Project
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>

    {/* Subsidiaries */}
     <section className="py-20 bg-white" id="subsidiaries">
      <div className="container mx-auto px-6 text-center">
        {/* Heading - Diubah jadi sky */}
        <span className="bg-sky-100 text-sky-700 px-4 py-1 rounded-full text-sm font-medium">
          Anak Perusahaan
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-4 text-sky-800">
          Anak Perusahaan Kami
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          PT. Milenium Jaya Sejati memiliki anak perusahaan yang mendukung
          layanan pengadaan, penanaman, serta pemeliharaan tanaman untuk berbagai
          sektor.
        </p>

        {/* Grid Anak Perusahaan */}
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
                {/* Judul diubah jadi sky */}
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
        {/* Heading - Diubah jadi sky */}
        <span className="bg-sky-100 text-sky-700 px-4 py-1 rounded-full text-sm font-medium">
          Lokasi Kami
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-4 text-sky-800">
          Kunjungi Perusahaan Kami
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Silakan datang langsung ke kantor kami di alamat berikut:
        </p>

        {/* Alamat */}
        <p className="mt-4 font-medium text-lg text-gray-800">
          Jl. Kalimas No.15, Gobok, Donan, Kec. Cilacap Tengah,  
          Kabupaten Cilacap, Jawa Tengah 53222
        </p>

        {/* Map */}
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
    </>
  );
}
