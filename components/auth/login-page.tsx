"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ArrowLeft, Eye, EyeOff, Sparkles } from "lucide-react"

interface LoginPageProps {
  onLogin: (userData: any) => void
  onShowRegister: () => void
  onBack: () => void
}

export default function LoginPage({ onLogin, onShowRegister, onBack }: LoginPageProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simular login
    setTimeout(() => {
      const userData = {
        id: 1,
        name: "María González",
        email: email,
        avatar: "/images/testimonials/maria-gonzalez.png",
        tokens: 1250,
        level: "Intermediate Developer",
        coursesCompleted: 4,
        totalCourses: 12,
        streak: 7,
      }
      onLogin(userData)
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#001F3D] to-[#4CAF50] p-4">
      {/* Back Button */}
      <Button onClick={onBack} variant="ghost" className="absolute top-4 left-4 text-white hover:bg-white/10">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Volver
      </Button>

      <Card className="w-full max-w-md">
        <CardHeader className="text-center pb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#4CAF50] rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="text-3xl font-bold text-[#001F3D]">LearnQuest</div>
          </div>
          <p className="text-gray-600 font-medium">Inicia sesión en tu cuenta</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pr-10"
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

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white font-medium"
            >
              {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              ¿No tienes cuenta?{" "}
              <button onClick={onShowRegister} className="text-[#4CAF50] hover:text-[#45a049] font-medium">
                Regístrate
              </button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
