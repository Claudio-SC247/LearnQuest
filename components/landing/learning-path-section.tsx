"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, ArrowRight, Brain } from "lucide-react"

interface LearningPathSectionProps {
  onGeneratePath: () => void
}

export default function LearningPathSection({ onGeneratePath }: LearningPathSectionProps) {
  const [userInput, setUserInput] = useState("")

  return (
    <section className="py-20 bg-gradient-to-br from-[#4CAF50]/10 to-[#001F3D]/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#4CAF50] to-[#001F3D] rounded-full flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#001F3D]">
                Descubre tu Ruta de Aprendizaje Personalizada
              </h2>
            </div>
            <p className="text-lg text-gray-600 font-medium">
              Nuestra IA analizará tus objetivos y creará un plan de estudios personalizado para ti
            </p>
          </div>

          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-lg font-bold text-[#001F3D] mb-3">
                    ¿Qué te gustaría aprender o lograr?
                  </label>
                  <Textarea
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Ejemplo: Quiero convertirme en desarrollador full-stack, me interesa el machine learning, necesito mejorar mis habilidades de liderazgo..."
                    rows={4}
                    className="w-full text-base"
                  />
                </div>

                <div className="text-center">
                  <Button
                    onClick={onGeneratePath}
                    disabled={!userInput.trim()}
                    size="lg"
                    className="bg-gradient-to-r from-[#4CAF50] to-[#001F3D] hover:from-[#45a049] hover:to-[#001F3D]/90 text-white px-8 py-4 text-lg font-medium transition-all duration-200 hover:scale-105"
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    Generar Mi Ruta
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Example Paths */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-lg font-bold text-[#001F3D] mb-2">Desarrollador Full-Stack</h3>
                <p className="text-sm text-gray-600 font-medium">React → Node.js → Bases de datos → DevOps</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-bold text-[#001F3D] mb-2">Data Scientist</h3>
                <p className="text-sm text-gray-600 font-medium">
                  Python → Estadística → Machine Learning → Visualización
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-lg font-bold text-[#001F3D] mb-2">UX/UI Designer</h3>
                <p className="text-sm text-gray-600 font-medium">Psicología → Diseño → Prototipado → Testing</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
