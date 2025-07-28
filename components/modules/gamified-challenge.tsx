"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle, XCircle, RotateCcw } from "lucide-react"

interface GamifiedChallengeProps {
  module: any
  onContinue: () => void
  onBack: () => void
}

export default function GamifiedChallenge({ module, onContinue, onBack }: GamifiedChallengeProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [attempts, setAttempts] = useState(0)
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const question = {
    text: `¿Cuál es la principal ventaja de usar ${module.title.split(" ")[0]} en proyectos modernos?`,
    options: [
      "Mayor velocidad de desarrollo",
      "Mejor rendimiento en tiempo de ejecución",
      "Facilidad de mantenimiento y escalabilidad",
      "Menor consumo de recursos",
    ],
    correctAnswer: 2,
    explanation:
      "La facilidad de mantenimiento y escalabilidad es una de las principales ventajas, ya que permite crear aplicaciones robustas que pueden crecer con las necesidades del negocio.",
  }

  const handleAnswerSelect = (answerIndex: number) => {
    if (showFeedback) return
    setSelectedAnswer(answerIndex)
  }

  const handleSubmit = () => {
    if (selectedAnswer === null) return

    const correct = selectedAnswer === question.correctAnswer
    setIsCorrect(correct)
    setShowFeedback(true)
    setAttempts(attempts + 1)
  }

  const handleRetry = () => {
    setSelectedAnswer(null)
    setShowFeedback(false)
    setIsCorrect(false)
  }

  const canRetry = attempts < 3 && !isCorrect

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
              <div className="text-2xl font-bold text-[#001F3D]">LearnQuest</div>
            </div>
            <Badge variant="outline" className="text-[#001F3D]">
              Intento {attempts + 1}/3
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Challenge Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#001F3D] mb-4">Desafío Gamificado</h1>
            <p className="text-lg text-gray-600 font-medium">Pon a prueba tus conocimientos sobre {module.title}</p>
          </div>

          {/* Question Card */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-xl font-bold text-[#001F3D] mb-6">{question.text}</h2>

              <div className="space-y-4">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showFeedback}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 font-medium ${
                      selectedAnswer === index
                        ? showFeedback
                          ? index === question.correctAnswer
                            ? "border-green-500 bg-green-50 text-green-800"
                            : "border-red-500 bg-red-50 text-red-800"
                          : "border-[#4CAF50] bg-[#4CAF50]/10 text-[#001F3D]"
                        : showFeedback && index === question.correctAnswer
                          ? "border-green-500 bg-green-50 text-green-800"
                          : "border-gray-200 bg-white text-gray-700 hover:border-[#4CAF50] hover:bg-[#4CAF50]/5"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {showFeedback && (
                        <>
                          {index === question.correctAnswer && <CheckCircle className="w-5 h-5 text-green-600" />}
                          {selectedAnswer === index && index !== question.correctAnswer && (
                            <XCircle className="w-5 h-5 text-red-600" />
                          )}
                        </>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Feedback Section */}
          {showFeedback && (
            <Card className={`mb-8 ${isCorrect ? "border-green-200" : "border-red-200"}`}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {isCorrect ? (
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  )}
                  <div>
                    <h3 className={`text-lg font-bold mb-2 ${isCorrect ? "text-green-800" : "text-red-800"}`}>
                      {isCorrect ? "¡Correcto!" : "¡Incorrecto!"}
                    </h3>
                    <p className="text-gray-700 font-medium leading-relaxed">{question.explanation}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            {!showFeedback && (
              <Button
                onClick={handleSubmit}
                disabled={selectedAnswer === null}
                className="bg-[#4CAF50] hover:bg-[#45a049] text-white px-8 py-3 font-medium"
              >
                Enviar Respuesta
              </Button>
            )}

            {showFeedback && !isCorrect && canRetry && (
              <Button
                onClick={handleRetry}
                variant="outline"
                className="border-[#001F3D] text-[#001F3D] hover:bg-[#001F3D] hover:text-white px-8 py-3 font-medium bg-transparent"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Intentar de nuevo
              </Button>
            )}

            {showFeedback && (isCorrect || attempts >= 3) && (
              <Button onClick={onContinue} className="bg-[#4CAF50] hover:bg-[#45a049] text-white px-8 py-3 font-medium">
                Continuar al Sandbox
              </Button>
            )}
          </div>

          {/* Attempts Warning */}
          {showFeedback && !isCorrect && attempts >= 3 && (
            <div className="text-center mt-6">
              <p className="text-red-600 font-medium">Has agotado tus intentos. Puedes continuar al siguiente paso.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
