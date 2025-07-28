"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Brain, Sparkles, Clock, BarChart3, ArrowRight, User } from "lucide-react"

interface LearningPathGeneratorProps {
  onBack: () => void
  onLogin: () => void
}

export default function LearningPathGenerator({ onBack, onLogin }: LearningPathGeneratorProps) {
  const [userInput, setUserInput] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedPath, setGeneratedPath] = useState<any>(null)

  const handleGeneratePath = () => {
    if (!userInput.trim()) return

    setIsGenerating(true)

    // Simulate AI processing
    setTimeout(() => {
      const mockPath = {
        title: "Ruta Personalizada: Desarrollador Full-Stack",
        description: "Basado en tu interés en convertirte en desarrollador full-stack",
        duration: "6-8 meses",
        difficulty: "Intermedio",
        courses: [
          {
            id: 1,
            title: "Fundamentos de Programación",
            description: "Conceptos básicos de programación y lógica",
            duration: "3 semanas",
            level: "Principiante",
            instructor: "Dr. Carlos Mendoza",
          },
          {
            id: 2,
            title: "HTML, CSS y JavaScript",
            description: "Tecnologías fundamentales del desarrollo web",
            duration: "4 semanas",
            level: "Principiante",
            instructor: "Ing. Ana Rodríguez",
          },
          {
            id: 3,
            title: "React & TypeScript Avanzado",
            description: "Framework moderno para interfaces de usuario",
            duration: "4 semanas",
            level: "Intermedio",
            instructor: "Dr. Carlos Mendoza",
          },
          {
            id: 4,
            title: "Node.js & APIs REST",
            description: "Desarrollo del lado del servidor",
            duration: "5 semanas",
            level: "Intermedio",
            instructor: "Ing. Ana Rodríguez",
          },
          {
            id: 5,
            title: "Bases de Datos y SQL",
            description: "Gestión y consulta de bases de datos",
            duration: "3 semanas",
            level: "Intermedio",
            instructor: "Dr. Miguel Torres",
          },
          {
            id: 6,
            title: "DevOps con Docker",
            description: "Despliegue y containerización",
            duration: "4 semanas",
            level: "Avanzado",
            instructor: "Ing. Roberto Silva",
          },
        ],
      }

      setGeneratedPath(mockPath)
      setIsGenerating(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={onBack}>
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-[#4CAF50] to-[#001F3D] rounded-lg flex items-center justify-center">
                  <Brain className="w-4 h-4 text-white" />
                </div>
                <div className="text-2xl font-bold text-[#001F3D]">Generador de Rutas</div>
              </div>
            </div>
            <Button onClick={onLogin} className="bg-[#4CAF50] hover:bg-[#45a049] text-white font-medium">
              Iniciar Sesión
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {!generatedPath ? (
            /* Input Form */
            <div className="space-y-8">
              <div className="text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-[#001F3D] mb-4">
                  Descubre tu Ruta de Aprendizaje Personalizada
                </h1>
                <p className="text-lg text-gray-600 font-medium">
                  Nuestra IA analizará tus objetivos y creará un plan de estudios personalizado
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
                        placeholder="Ejemplo: Quiero convertirme en desarrollador full-stack, me interesa el machine learning, necesito mejorar mis habilidades de liderazgo, quiero aprender sobre psicología del aprendizaje..."
                        rows={6}
                        className="w-full text-base"
                      />
                    </div>

                    <div className="text-center">
                      <Button
                        onClick={handleGeneratePath}
                        disabled={!userInput.trim() || isGenerating}
                        size="lg"
                        className="bg-gradient-to-r from-[#4CAF50] to-[#001F3D] hover:from-[#45a049] hover:to-[#001F3D]/90 text-white px-8 py-4 text-lg font-medium transition-all duration-200 hover:scale-105"
                      >
                        {isGenerating ? (
                          <>
                            <Brain className="w-5 h-5 mr-2 animate-pulse" />
                            Generando tu ruta...
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-5 h-5 mr-2" />
                            Generar Mi Ruta
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {isGenerating && (
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#4CAF50] to-[#001F3D] rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#001F3D] mb-2">Analizando tus objetivos...</h3>
                    <p className="text-gray-600 font-medium mb-4">
                      Nuestra IA está creando una ruta personalizada basada en tus intereses y objetivos
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <div
                        className="w-2 h-2 bg-[#4CAF50] rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      />
                      <div
                        className="w-2 h-2 bg-[#4CAF50] rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <div
                        className="w-2 h-2 bg-[#4CAF50] rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          ) : (
            /* Generated Path */
            <div className="space-y-8">
              <div className="text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-[#001F3D] mb-4">{generatedPath.title}</h1>
                <p className="text-lg text-gray-600 font-medium">{generatedPath.description}</p>
              </div>

              {/* Path Overview */}
              <Card className="border-0 shadow-xl bg-gradient-to-r from-[#4CAF50] to-[#001F3D] text-white">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <Clock className="w-8 h-8 mx-auto mb-2" />
                      <div className="text-2xl font-bold">{generatedPath.duration}</div>
                      <div className="text-white/80 font-medium">Duración estimada</div>
                    </div>
                    <div>
                      <BarChart3 className="w-8 h-8 mx-auto mb-2" />
                      <div className="text-2xl font-bold">{generatedPath.difficulty}</div>
                      <div className="text-white/80 font-medium">Nivel de dificultad</div>
                    </div>
                    <div>
                      <Brain className="w-8 h-8 mx-auto mb-2" />
                      <div className="text-2xl font-bold">{generatedPath.courses.length}</div>
                      <div className="text-white/80 font-medium">Cursos incluidos</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Course Path */}
              <div>
                <h2 className="text-2xl font-bold text-[#001F3D] mb-6">Tu Ruta de Aprendizaje</h2>
                <div className="space-y-6">
                  {generatedPath.courses.map((course: any, index: number) => (
                    <Card key={course.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-[#4CAF50] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="text-xl font-bold text-[#001F3D]">{course.title}</h3>
                              <Badge
                                className={`${
                                  course.level === "Avanzado"
                                    ? "bg-red-100 text-red-800"
                                    : course.level === "Intermedio"
                                      ? "bg-yellow-100 text-yellow-800"
                                      : "bg-green-100 text-green-800"
                                }`}
                              >
                                {course.level}
                              </Badge>
                            </div>
                            <p className="text-gray-600 font-medium mb-4">{course.description}</p>
                            <div className="flex items-center gap-6 text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span className="font-medium">{course.duration}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <User className="w-4 h-4" />
                                <span className="font-medium">{course.instructor}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-[#001F3D] mb-4">¿Listo para comenzar tu journey?</h3>
                  <p className="text-gray-600 font-medium mb-6">
                    Regístrate gratis y comienza tu ruta de aprendizaje personalizada hoy mismo
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={onLogin}
                      size="lg"
                      className="bg-[#4CAF50] hover:bg-[#45a049] text-white px-8 py-4 text-lg font-medium transition-all duration-200 hover:scale-105"
                    >
                      Comenzar Ahora
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    <Button
                      onClick={() => {
                        setGeneratedPath(null)
                        setUserInput("")
                      }}
                      variant="outline"
                      size="lg"
                      className="border-[#001F3D] text-[#001F3D] hover:bg-[#001F3D] hover:text-white px-8 py-4 text-lg font-medium bg-transparent"
                    >
                      Generar Nueva Ruta
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
