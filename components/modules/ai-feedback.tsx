"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Bot, CheckCircle, MessageSquare, Sparkles, Brain } from "lucide-react"

interface AIFeedbackProps {
  module: any
  onContinue: () => void
  onBack: () => void
}

export default function AIFeedback({ module, onContinue, onBack }: AIFeedbackProps) {
  const [isAnalyzing, setIsAnalyzing] = useState(true)
  const [feedbackReady, setFeedbackReady] = useState(false)

  useEffect(() => {
    // Simulate AI analysis
    const timer = setTimeout(() => {
      setIsAnalyzing(false)
      setFeedbackReady(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const aiFeedback = {
    overall:
      "Tu proyecto demuestra una comprensión sólida de los conceptos fundamentales. El código está bien estructurado y sigue las mejores prácticas.",
    score: 88,
    strengths: [
      "Implementación correcta de los patrones de diseño",
      "Código limpio y bien comentado",
      "Buena estructura de archivos y organización",
      "Manejo adecuado de errores y casos edge",
    ],
    improvements: [
      "Considera agregar más casos de prueba unitarias",
      "La validación de entrada podría ser más robusta",
      "Optimiza el rendimiento en funciones recursivas",
    ],
    suggestions: [
      "Explora el patrón Observer para mejorar la comunicación entre componentes",
      "Considera implementar lazy loading para mejorar el rendimiento",
      "Revisa la documentación oficial para técnicas avanzadas",
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={onBack}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div className="text-2xl font-bold text-[#001F3D]">LearnQuest</div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-[#001F3D]">Feedback de IA</h1>
            </div>
            <p className="text-lg text-gray-600 font-medium">
              Análisis automático de tu proyecto con inteligencia artificial
            </p>
          </div>

          {isAnalyzing ? (
            /* Analyzing State */
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto animate-pulse">
                    <Brain className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <Sparkles className="w-8 h-8 text-yellow-400 animate-spin" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-[#001F3D] mb-4">Analizando tu proyecto...</h2>
                <p className="text-gray-600 font-medium mb-6">
                  Nuestra IA está revisando tu código, estructura y implementación para proporcionarte feedback
                  detallado.
                </p>
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <div
                      className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <div
                      className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <div
                      className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                  <p className="text-purple-700 font-medium text-sm">
                    Procesando patrones de código, verificando mejores prácticas...
                  </p>
                </div>
              </CardContent>
            </Card>
          ) : (
            /* Feedback Ready */
            <div className="space-y-8">
              {/* AI Assistant Info */}
              <Card className="bg-gradient-to-r from-purple-500 to-blue-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <Bot className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">LearnQuest AI Assistant</h3>
                      <p className="text-white/90 font-medium">
                        Análisis completado usando modelos de IA entrenados con millones de proyectos de código
                      </p>
                    </div>
                    <Badge className="bg-white/20 text-white border-white/30">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Análisis Completo
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Overall Score */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#001F3D] mb-4">Puntuación General</h3>
                  <div className="flex items-center gap-6 mb-4">
                    <div className="text-4xl font-bold text-[#4CAF50]">{aiFeedback.score}/100</div>
                    <div className="flex-1">
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div
                          className="bg-gradient-to-r from-[#4CAF50] to-green-600 h-4 rounded-full transition-all duration-1000"
                          style={{ width: `${aiFeedback.score}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-sm text-gray-600 mt-2 font-medium">
                        <span>Principiante</span>
                        <span>Intermedio</span>
                        <span>Avanzado</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed">{aiFeedback.overall}</p>
                </CardContent>
              </Card>

              {/* Detailed Analysis */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Strengths */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-[#001F3D] mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#4CAF50]" />
                      Fortalezas Detectadas
                    </h3>
                    <ul className="space-y-3">
                      {aiFeedback.strengths.map((strength, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-[#4CAF50] rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Areas for Improvement */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-[#001F3D] mb-4 flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-blue-500" />
                      Áreas de Mejora
                    </h3>
                    <ul className="space-y-3">
                      {aiFeedback.improvements.map((improvement, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* AI Suggestions */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-[#001F3D] mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-500" />
                    Sugerencias de IA
                  </h3>
                  <div className="space-y-4">
                    {aiFeedback.suggestions.map((suggestion, index) => (
                      <div key={index} className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <div className="flex items-start gap-3">
                          <Bot className="w-5 h-5 text-purple-600 mt-1" />
                          <p className="text-gray-700 font-medium">{suggestion}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Continue Button */}
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-[#001F3D] mb-4">
                      ¿Quieres feedback adicional de un mentor humano?
                    </h3>
                    <p className="text-gray-600 font-medium mb-6">
                      Nuestros mentores expertos pueden proporcionarte feedback más detallado y personalizado sobre tu
                      proyecto.
                    </p>
                    <Button
                      onClick={onContinue}
                      className="bg-[#4CAF50] hover:bg-[#45a049] text-white px-8 py-3 font-medium"
                    >
                      Continuar al Feedback del Mentor
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
