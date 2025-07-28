"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, CheckCircle, MessageSquare, Star } from "lucide-react"
import Image from "next/image"

interface MentorFeedbackProps {
  module: any
  onContinue: () => void
  onBack: () => void
}

export default function MentorFeedback({ module, onContinue, onBack }: MentorFeedbackProps) {
  const [timeRemaining, setTimeRemaining] = useState(6 * 60 * 60) // 6 hours in seconds
  const [feedbackAvailable, setFeedbackAvailable] = useState(false)

  useEffect(() => {
    // Simulate feedback becoming available after 5 seconds for demo
    const timer = setTimeout(() => {
      setFeedbackAvailable(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (feedbackAvailable) return

    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          setFeedbackAvailable(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [feedbackAvailable])

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours}h ${minutes}m ${secs}s`
  }

  const mentorFeedback = {
    mentor: {
      name: "Dr. Ana Rodríguez",
      title: "Senior Developer & Mentor",
      avatar: "/images/testimonials/ana-martin.png",
      rating: 4.9,
    },
    feedback: {
      overall:
        "Excelente trabajo en tu proyecto. Has demostrado una comprensión sólida de los conceptos fundamentales.",
      strengths: [
        "Implementación correcta de los patrones de diseño",
        "Código limpio y bien estructurado",
        "Buena documentación y comentarios",
        "Manejo adecuado de errores",
      ],
      improvements: [
        "Considera optimizar el rendimiento en la función principal",
        "Podrías agregar más casos de prueba unitarias",
        "La validación de entrada podría ser más robusta",
      ],
      score: 85,
      nextSteps: "Continúa practicando con proyectos más complejos y explora patrones avanzados.",
    },
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
            <h1 className="text-3xl font-bold text-[#001F3D] mb-4">Feedback del Mentor</h1>
            <p className="text-lg text-gray-600 font-medium">Retroalimentación personalizada sobre tu proyecto</p>
          </div>

          {!feedbackAvailable ? (
            /* Waiting State */
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <Clock className="w-16 h-16 text-[#4CAF50] mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-[#001F3D] mb-4">Feedback en proceso</h2>
                <p className="text-gray-600 font-medium mb-6">
                  Nuestro mentor está revisando tu proyecto. El feedback estará disponible pronto.
                </p>
                <div className="bg-[#4CAF50]/10 p-6 rounded-lg">
                  <p className="text-[#001F3D] font-medium mb-2">Tiempo estimado restante:</p>
                  <p className="text-2xl font-bold text-[#4CAF50]">{formatTime(timeRemaining)}</p>
                </div>
                <p className="text-sm text-gray-500 mt-4 font-medium">Te notificaremos cuando el feedback esté listo</p>
              </CardContent>
            </Card>
          ) : (
            /* Feedback Available */
            <div className="space-y-8">
              {/* Mentor Info */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Image
                      src={mentorFeedback.mentor.avatar || "/placeholder.svg"}
                      alt={mentorFeedback.mentor.name}
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#001F3D]">{mentorFeedback.mentor.name}</h3>
                      <p className="text-gray-600 font-medium">{mentorFeedback.mentor.title}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium text-gray-600">{mentorFeedback.mentor.rating}</span>
                      </div>
                    </div>
                    <Badge className="bg-[#4CAF50] text-white">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Feedback Disponible
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Overall Feedback */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#001F3D] mb-4">Evaluación General</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl font-bold text-[#4CAF50]">{mentorFeedback.feedback.score}/100</div>
                    <div className="flex-1">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-[#4CAF50] h-3 rounded-full transition-all duration-500"
                          style={{ width: `${mentorFeedback.feedback.score}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed">{mentorFeedback.feedback.overall}</p>
                </CardContent>
              </Card>

              {/* Detailed Feedback */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Strengths */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-[#001F3D] mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#4CAF50]" />
                      Fortalezas
                    </h3>
                    <ul className="space-y-3">
                      {mentorFeedback.feedback.strengths.map((strength, index) => (
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
                      {mentorFeedback.feedback.improvements.map((improvement, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Next Steps */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-[#001F3D] mb-4">Próximos Pasos</h3>
                  <p className="text-gray-700 font-medium leading-relaxed mb-6">{mentorFeedback.feedback.nextSteps}</p>
                  <Button
                    onClick={onContinue}
                    className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white py-3 font-medium"
                  >
                    Continuar al Resumen
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
