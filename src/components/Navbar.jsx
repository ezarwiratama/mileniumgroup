"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react" // icon lucide sudah bawaan

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full fixed top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Milenium<span className="text-blue-600">Group</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-600">Beranda</Link>
          <Link href="/tentang" className="hover:text-blue-600">Tentang</Link>
          <Link href="/produk" className="hover:text-blue-600">Produk</Link>
          <Link href="/project" className="hover:text-blue-600">Project</Link>
          <Link href="/tim" className="hover:text-blue-600">Tim Kami</Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button asChild>
            <Link href="/contact">Kontak Kami</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <div className="flex flex-col p-4 space-y-4">
            <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            <Button asChild className="w-full">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
