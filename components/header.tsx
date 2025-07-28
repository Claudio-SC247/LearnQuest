"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Inicio", href: "#" },
    { name: "Cursos", href: "#cursos" },
    { name: "Cómo funciona", href: "#como-funciona" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Precios", href: "#precios" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-[#001F3D] font-bold">LearnQuest</div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-[#001F3D] hover:text-[#4CAF50] transition-colors font-medium"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="#"
            className="text-sm font-medium text-[#001F3D] hover:text-[#4CAF50] transition-colors font-medium"
          >
            Acceso
          </Link>
          <Button className="bg-[#4CAF50] hover:bg-[#45a049] text-white transition-all duration-200 hover:scale-105 font-medium">
            Regístrate
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6 text-[#001F3D]" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-[#001F3D] hover:text-[#4CAF50] transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t">
                <Link
                  href="#"
                  className="text-lg font-medium text-[#001F3D] hover:text-[#4CAF50] transition-colors font-medium"
                >
                  Acceso
                </Link>
                <Button className="bg-[#4CAF50] hover:bg-[#45a049] text-white w-full font-medium">Regístrate</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
