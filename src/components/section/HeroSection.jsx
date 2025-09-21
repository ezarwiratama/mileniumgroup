"use client"

import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
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

        {/* CTA pakai shadcn button */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
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
  )
}
