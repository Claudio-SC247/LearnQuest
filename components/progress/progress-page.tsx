"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, Coins, Download, BarChart3, Award, Target, BookOpen, Clock, TrendingUp, LogOut } from "lucide-react"
import Image from "next/image"

interface ProgressPageProps {
  user: any
  onExploreCourses: () => void
  onLogout: () => void
}

export default function ProgressPage({ user, onExploreCourses, onLogout }: ProgressPageProps) {
  const [showExitModal, setShowExitModal] = useState(false)

  const userStats = {
    totalTokens: 1250,
    coursesCompleted: 4,
    totalCourses: 12,
    currentStreak: 7,
    totalHours: 24,
    averageScore: 87,
    level: "Intermediate Developer",
    nextLevelTokens: 500,
  }

  const certificates = [
    {
      id: 1,
      title: "React & TypeScript Expert",
      date: "2024-01-15",
      score: 85,
      downloadUrl: "#",
    },
    {
      id: 2,
      title: "Node.js Backend Developer",
      date: "2024-01-10",
      score: 92,
      downloadUrl: "#",
    },
    {
      id: 3,
      title: "Python Data Science Fundamentals",
      date: "2024-01-05",
      score: 78,
      downloadUrl: "#",
    },
    {
      id: 4,
      title: "DevOps with Docker",
      date: "2024-01-01",
      score: 88,
      downloadUrl: "#",
    },
  ]

  const completionPercentage = (userStats.coursesCompleted / userStats.totalCourses) * 100
  const levelProgress = ((userStats.totalTokens % 1000) / 1000) * 100

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-[#001F3D]">LearnQuest</div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Image
                  src={user?.avatar || "/placeholder.svg"}
                  alt={user?.name || "Usuario"}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="font-medium text-gray-700">{user?.name}</span>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setShowExitModal(true)}>
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#001F3D] mb-2">Mi Progreso</h1>
          <p className="text-gray-600 font-medium">Revisa tus logros y continúa tu journey de aprendizaje</p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Coins className="w-8 h-8 text-[#4CAF50] mx-auto mb-3" />
              <div className="text-2xl font-bold text-[#001F3D]">{userStats.totalTokens}</div>
              <div className="text-sm text-gray-600 font-medium">Tokens Totales</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <BookOpen className="w-8 h-8 text-[#4CAF50] mx-auto mb-3" />
              <div className="text-2xl font-bold text-[#001F3D]">
                {userStats.coursesCompleted}/{userStats.totalCourses}
              </div>
              <div className="text-sm text-gray-600 font-medium">Cursos Completados</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Target className="w-8 h-8 text-[#4CAF50] mx-auto mb-3" />
              <div className="text-2xl font-bold text-[#001F3D]">{userStats.currentStreak}</div>
              <div className="text-sm text-gray-600 font-medium">Días Consecutivos</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 text-[#4CAF50] mx-auto mb-3" />
              <div className="text-2xl font-bold text-[#001F3D]">{userStats.averageScore}%</div>
              <div className="text-sm text-gray-600 font-medium">Puntuación Media</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Progress Charts */}
          <div className="lg:col-span-2 space-y-6">
            {/* Overall Progress */}
            <Card>
              <CardHeader>
                <h3 className="text-xl font-bold text-[#001F3D] flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Progreso General
                </h3>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">Cursos Completados</span>
                    <span className="font-bold text-[#4CAF50]">{completionPercentage.toFixed(0)}%</span>
                  </div>
                  <Progress value={completionPercentage} className="h-3" />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">Nivel Actual: {userStats.level}</span>
                    <span className="font-bold text-[#4CAF50]">{levelProgress.toFixed(0)}%</span>
                  </div>
                  <Progress value={levelProgress} className="h-3" />
                  <p className="text-sm text-gray-600 mt-2 font-medium">
                    {userStats.nextLevelTokens} tokens para el siguiente nivel
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Certificates */}
            <Card>
              <CardHeader>
                <h3 className="text-xl font-bold text-[#001F3D] flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Certificados Obtenidos
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {certificates.map((cert) => (
                    <div key={cert.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-[#4CAF50] rounded-lg flex items-center justify-center">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#001F3D]">{cert.title}</h4>
                          <p className="text-sm text-gray-600 font-medium">
                            {new Date(cert.date).toLocaleDateString()} • Puntuación: {cert.score}%
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white bg-transparent"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Descargar
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievement Badge */}
            <Card>
              <CardContent className="p-6 text-center">
                <Trophy className="w-16 h-16 text-[#4CAF50] mx-auto mb-4" />
                <h3 className="text-lg font-bold text-[#001F3D] mb-2">¡Felicitaciones!</h3>
                <p className="text-sm text-gray-600 font-medium mb-4">
                  Has completado {userStats.coursesCompleted} cursos y ganado {userStats.totalTokens} tokens
                </p>
                <Badge className="bg-[#4CAF50] text-white">{userStats.level}</Badge>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-bold text-[#001F3D]">Estadísticas Rápidas</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#4CAF50]" />
                    <span className="text-sm font-medium text-gray-700">Tiempo total</span>
                  </div>
                  <span className="font-bold text-[#001F3D]">{userStats.totalHours}h</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-[#4CAF50]" />
                    <span className="text-sm font-medium text-gray-700">Racha actual</span>
                  </div>
                  <span className="font-bold text-[#001F3D]">{userStats.currentStreak} días</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#4CAF50]" />
                    <span className="text-sm font-medium text-gray-700">Mejor puntuación</span>
                  </div>
                  <span className="font-bold text-[#001F3D]">92%</span>
                </div>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-bold text-[#001F3D]">¿Qué sigue?</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600 font-medium">
                  ¿Deseas explorar más módulos y continuar tu aprendizaje?
                </p>
                <div className="space-y-3">
                  <Button
                    onClick={onExploreCourses}
                    className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white font-medium"
                  >
                    Sí, explorar más cursos
                  </Button>
                  <Button
                    onClick={() => setShowExitModal(true)}
                    variant="outline"
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 font-medium"
                  >
                    No, cerrar sesión
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Exit Modal */}
      {showExitModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="max-w-md w-full">
            <CardContent className="p-6 text-center">
              <Trophy className="w-16 h-16 text-[#4CAF50] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#001F3D] mb-4">¡Hasta pronto!</h3>
              <p className="text-gray-600 font-medium mb-6">
                Gracias por usar LearnQuest. Tu progreso ha sido guardado y te esperamos pronto para continuar
                aprendiendo.
              </p>
              <div className="flex gap-3">
                <Button
                  onClick={() => setShowExitModal(false)}
                  variant="outline"
                  className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium"
                >
                  Cancelar
                </Button>
                <Button onClick={onLogout} className="flex-1 bg-[#4CAF50] hover:bg-[#45a049] text-white font-medium">
                  Cerrar Sesión
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
