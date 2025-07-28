"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Sparkles } from "lucide-react"
import LoginModal from "@/components/auth/login-modal"

interface HeaderProps {
  onLogin: () => void
  onRegister: () => void
}

export default function Header({ onLogin, onRegister }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Cursos", href: "#cursos" },
    { name: "Cómo funciona", href: "#como-funciona" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Certificaciones", href: "#certificaciones" },
    { name: "Quiénes somos", href: "#quienes-somos" },
    { name: "Blog", href: "#blog" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#4CAF50] rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div className="text-2xl font-bold text-[#001F3D]">LearnQuest</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-[#001F3D] hover:text-[#4CAF50] transition-colors"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              onClick={() => setShowLoginModal(true)}
              variant="ghost"
              className="text-[#001F3D] hover:text-[#4CAF50] font-medium"
            >
              Acceder
            </Button>
            <Button
              onClick={onRegister}
              className="bg-[#4CAF50] hover:bg-[#45a049] text-white transition-all duration-200 hover:scale-105 font-medium"
            >
              Comenzar Gratis
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-[#001F3D]" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-lg font-medium text-[#001F3D] hover:text-[#4CAF50] transition-colors text-left"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="flex flex-col space-y-3 pt-4 border-t">
                  <Button
                    onClick={() => {
                      setShowLoginModal(true)
                      setIsOpen(false)
                    }}
                    variant="ghost"
                    className="text-[#001F3D] hover:text-[#4CAF50] font-medium justify-start"
                  >
                    Acceder
                  </Button>
                  <Button
                    onClick={() => {
                      onRegister()
                      setIsOpen(false)
                    }}
                    className="bg-[#4CAF50] hover:bg-[#45a049] text-white w-full font-medium"
                  >
                    Comenzar Gratis
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLogin={onLogin}
        onShowRegister={() => {
          setShowLoginModal(false)
          onRegister()
        }}
      />
    </>
  )
}
