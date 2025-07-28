"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Eye, EyeOff } from "lucide-react"

interface RegisterModalProps {
  isOpen: boolean
  onClose: () => void
  onRegisterSuccess: () => void
}

export default function RegisterModal({ isOpen, onClose, onRegisterSuccess }: RegisterModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simular registro
    setTimeout(() => {
      onRegisterSuccess()
      setIsLoading(false)
      setFormData({ name: "", email: "", password: "", confirmPassword: "" })
    }, 1000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#001F3D] text-center">Crear Cuenta</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Nombre completo
            </label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Tu nombre"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="register-email" className="text-sm font-medium text-gray-700">
              Email
            </label>
            <Input
              id="register-email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="tu@email.com"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="register-password" className="text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <div className="relative">
              <Input
                id="register-password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="••••••••"
                required
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="confirm-password" className="text-sm font-medium text-gray-700">
              Confirmar contraseña
            </label>
            <Input
              id="confirm-password"
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              placeholder="••••••••"
              required
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white font-medium"
          >
            {isLoading ? "Creando cuenta..." : "Crear Cuenta"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
