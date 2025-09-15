"use client"

import Link from "next/link"
import { Facebook, Phone, MapPin, User } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white pt-15 pb-6 rounded-tl-4xl rounded-tr-4xl">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Brand & Deskripsi */}
        <div>
          <h2 className="text-2xl font-bold mb-2">PT. Milenium Jaya Sejati</h2>
          <p className="text-sm leading-relaxed mb-4">
            Pengadaan serta jasa penanaman dan pemeliharaan tanaman di bidang pertanian, perkebunan, dan kehutanan.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-gray-200">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:text-gray-200">
              <Phone size={20} />
            </Link>
          </div>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="font-semibold mb-3 border-b border-white/30 pb-2">
            Navigasi
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-gray-200">Beranda</Link></li>
            <li><Link href="/tentang" className="hover:text-gray-200">Tentang</Link></li>
            <li><Link href="/produk" className="hover:text-gray-200">Produk</Link></li>
            <li><Link href="/project" className="hover:text-gray-200">Project</Link></li>
            <li><Link href="/tim" className="hover:text-gray-200">Tim Kami</Link></li>
            <li><Link href="/kontak" className="hover:text-gray-200">Kontak</Link></li>
          </ul>
        </div>

        {/* Informasi & Kontak */}
        <div>
          <h3 className="font-semibold mb-3 border-b border-white/30 pb-2">
            Informasi & Kontak
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start space-x-2">
              <MapPin size={30} />
              <span>Jl. Kalimas No.15, Gobok, Donan, Kec. Cilacap Tengah, Kabupaten Cilacap, Jawa Tengah 53222</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={16} />
              <span>0813-9169-3209</span>
            </li>
            <li className="flex items-center space-x-2">
              <User size={16} />
              <span>Eko Mudjiharto</span>
            </li>
            <li>
              <strong>Jam Operasional:</strong><br />
              <span>Weekdays 08.00-16.00</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-sm border-t border-white/30 pt-4">
        © 2025 Milenium Group. Hak Cipta Dilindungi.
      </div>
    </footer>
  )
}
