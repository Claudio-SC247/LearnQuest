"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Star, Coins, Award, Sparkles, Gift } from "lucide-react"

interface ModuleCompletionProps {
  module: any
  tokensEarned: number
  onGoToProgress: () => void
}

export default function ModuleCompletion({ module, tokensEarned = 150, onGoToProgress }: ModuleCompletionProps) {
  const [showAnimation, setShowAnimation] = useState(false)
  const [badgeEarned] = useState(true)

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => setShowAnimation(true), 500)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4CAF50] to-[#001F3D] flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Main Completion Card */}
        <Card className="relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#4CAF50] rounded-full opacity-20 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#001F3D] rounded-full opacity-10 animate-pulse" />
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#4CAF50]/10 to-[#001F3D]/10 rounded-full animate-spin"
              style={{ animationDuration: "20s" }}
            />
          </div>

          <CardContent className="p-8 text-center relative z-10">
            {/* Trophy Animation */}
            <div
              className={`mb-6 transition-all duration-1000 ${showAnimation ? "scale-100 rotate-0" : "scale-0 rotate-180"}`}
            >
              <div className="relative inline-block">
                <Trophy className="w-24 h-24 text-[#4CAF50] mx-auto" />
                <div className="absolute -top-2 -right-2">
                  <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Completion Message */}
            <div
              className={`mb-8 transition-all duration-1000 delay-300 ${showAnimation ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <h1 className="text-4xl font-bold text-[#001F3D] mb-4">¡Curso Completado!</h1>
              <p className="text-xl text-gray-600 font-medium">Has completado exitosamente</p>
              <p className="text-2xl font-bold text-[#4CAF50] mt-2">{module.title}</p>
            </div>

            {/* Rewards Section */}
            <div
              className={`grid md:grid-cols-2 gap-6 mb-8 transition-all duration-1000 delay-500 ${showAnimation ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              {/* Tokens Earned */}
              <div className="bg-gradient-to-r from-[#4CAF50]/10 to-[#4CAF50]/20 p-6 rounded-lg">
                <div className="flex items-center justify-center mb-3">
                  <Coins className="w-8 h-8 text-[#4CAF50]" />
                </div>
                <h3 className="text-lg font-bold text-[#001F3D] mb-2">Tokens Ganados</h3>
                <p className="text-3xl font-bold text-[#4CAF50]">+{tokensEarned}</p>
              </div>

              {/* Badge Earned */}
              <div className="bg-gradient-to-r from-[#001F3D]/10 to-[#001F3D]/20 p-6 rounded-lg">
                <div className="flex items-center justify-center mb-3">
                  <Award className="w-8 h-8 text-[#001F3D]" />
                </div>
                <h3 className="text-lg font-bold text-[#001F3D] mb-2">Certificado</h3>
                <Badge className="bg-[#001F3D] text-white">{module.certificate || `${module.category} Expert`}</Badge>
              </div>
            </div>

            {/* Achievement Summary */}
            <div
              className={`bg-gray-50 p-6 rounded-lg mb-8 transition-all duration-1000 delay-700 ${showAnimation ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <h3 className="text-lg font-bold text-[#001F3D] mb-4">Resumen de Logros</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-[#4CAF50]">100%</div>
                  <div className="text-sm text-gray-600 font-medium">Completado</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#4CAF50]">88%</div>
                  <div className="text-sm text-gray-600 font-medium">Puntuación</div>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#4CAF50] text-[#4CAF50]" />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Calificación</div>
                </div>
              </div>
            </div>

            {/* Bonus Rewards */}
            <div
              className={`bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg mb-8 transition-all duration-1000 delay-900 ${showAnimation ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <Gift className="w-6 h-6 text-orange-500" />
                <h3 className="text-lg font-bold text-orange-800">¡Bonus por Excelencia!</h3>
              </div>
              <p className="text-orange-700 font-medium mb-3">
                Por completar el curso con una puntuación superior al 85%, has ganado tokens adicionales.
              </p>
              <div className="flex items-center justify-center gap-2">
                <Coins className="w-5 h-5 text-orange-500" />
                <span className="text-xl font-bold text-orange-800">
                  +{Math.floor(tokensEarned * 0.2)} tokens bonus
                </span>
              </div>
            </div>

            {/* Action Button */}
            <div
              className={`transition-all duration-1000 delay-1000 ${showAnimation ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <Button
                onClick={onGoToProgress}
                className="bg-[#4CAF50] hover:bg-[#45a049] text-white px-8 py-4 text-lg font-medium transition-all duration-200 hover:scale-105"
              >
                Ir a Mi Progreso
              </Button>
            </div>

            {/* Motivational Message */}
            <div
              className={`mt-6 transition-all duration-1000 delay-1200 ${showAnimation ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <p className="text-gray-600 font-medium">
                ¡Excelente trabajo! Continúa aprendiendo para desbloquear más recompensas y certificaciones.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Floating Achievement Badges */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className={`absolute top-10 left-10 transition-all duration-2000 delay-1500 ${showAnimation ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
          >
            <div
              className="bg-white p-3 rounded-full shadow-lg animate-bounce"
              style={{ animationDelay: "0s", animationDuration: "3s" }}
            >
              <Trophy className="w-6 h-6 text-[#4CAF50]" />
            </div>
          </div>
          <div
            className={`absolute top-20 right-16 transition-all duration-2000 delay-1700 ${showAnimation ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
          >
            <div
              className="bg-white p-3 rounded-full shadow-lg animate-bounce"
              style={{ animationDelay: "1s", animationDuration: "3s" }}
            >
              <Coins className="w-6 h-6 text-[#4CAF50]" />
            </div>
          </div>
          <div
            className={`absolute bottom-16 left-20 transition-all duration-2000 delay-1900 ${showAnimation ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
          >
            <div
              className="bg-white p-3 rounded-full shadow-lg animate-bounce"
              style={{ animationDelay: "2s", animationDuration: "3s" }}
            >
              <Star className="w-6 h-6 text-[#4CAF50]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
