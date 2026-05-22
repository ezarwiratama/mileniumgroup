"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Leaf } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Definisi link navigasi agar konsisten antara Desktop & Mobile
  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Tentang", href: "/tentang" },
    { name: "Produk", href: "/produk" },
    { name: "Project", href: "/project" },
    { name: "Tim Kami", href: "/tim" },
  ]

  return (
    <nav className="w-full fixed top-0 z-50 bg-white border-b border-gray-100 shadow-sm/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-1.5 no-underline">
          <Leaf size={30} className="text-sky-800" />
          <span className="text-2xl font-extrabold tracking-tight text-neutral-950">
            Milenium<span className="text-sky-800 group-hover:text-sky-700 transition-colors">Group</span>
          </span>
        </Link>

        {/* Desktop Menu - Tengah */}
        <div className="hidden md:flex items-center gap-1 bg-neutral-100/50 p-1 rounded-full border border-gray-100">
          {navLinks.map((link) => {
            const isActive = pathname === link.href

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 no-underline ${
                  isActive
                    ? "text-sky-900 bg-white shadow-sm" 
                    : "text-neutral-700 hover:text-sky-900 hover:bg-white" 
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </div>

        {/* Desktop CTA Button & Mobile Trigger - Kanan */}
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <Button asChild size="sm" className="rounded-full bg-sky-800 hover:bg-sky-700 text-white font-semibold">
              <Link href="/kontak" className="tracking-tight">Kontak Kami</Link>
            </Button>
          </div>

          {/* Mobile Menu Button - Trigger */}
          <button
            className="md:hidden p-2 rounded-lg text-neutral-700 hover:bg-sky-50 hover:text-sky-900 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={22} strokeWidth={2.5}/> : <Menu size={22} strokeWidth={2.5}/>}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-[73px] left-0 w-full bg-white border-b border-gray-100 shadow-lg transform transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}`}>
        <div className="flex flex-col p-6 space-y-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            
            return (
              <Link 
                key={`${link.name}-mobile`}
                href={link.href} 
                className={`text-base font-semibold px-4 py-2.5 rounded-xl transition-colors no-underline ${
                  isActive 
                    ? "text-sky-900 bg-sky-50" 
                    : "text-neutral-800 hover:text-sky-900 hover:bg-sky-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            )
          })}
          
          <div className="pt-4 border-t border-gray-100">
            <Button asChild className="w-full rounded-xl bg-sky-800 hover:bg-sky-700 text-white font-semibold">
              <Link href="/kontak" onClick={() => setIsOpen(false)}>Kontak Kami Sekarang</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}