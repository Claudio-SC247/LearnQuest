"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  Trophy,
  Coins,
  Target,
  BookOpen,
  Clock,
  TrendingUp,
  Award,
  ShoppingCart,
  Edit,
  LogOut,
} from "lucide-react"
import Image from "next/image"

interface UserProfileProps {
  user: any
  onBack: () => void
  onStore: () => void
  onLogout: () => void
}

export default function UserProfile({ user, onBack, onStore, onLogout }: UserProfileProps) {
  const userStats = {
    totalTokens: user?.tokens || 1250,
    coursesCompleted: user?.coursesCompleted || 4,
    totalCourses: user?.totalCourses || 12,
    currentStreak: user?.streak || 7,
    totalHours: 24,
    averageScore: 87,
    level: user?.level || "Intermediate Developer",
    nextLevelTokens: 500,
    joinDate: "Enero 2024",
    lastActive: "Hace 2 horas",
  }

  const achievements = [
    { name: "First Steps", description: "Completó su primer curso", icon: Trophy, earned: true },
    { name: "Streak Master", description: "7 días consecutivos aprendiendo", icon: Target, earned: true },
    { name: "Token Collector", description: "Acumuló 1000+ tokens", icon: Coins, earned: true },
    { name: "Course Crusher", description: "Completó 5 cursos", icon: BookOpen, earned: false },
    { name: "Perfect Score", description: "Obtuvo 100% en un curso", icon: Award, earned: false },
    { name: "Speed Learner", description: "Completó un curso en un día", icon: Clock, earned: true },
  ]

  const recentActivity = [
    { action: "Completó", course: "React & TypeScript Avanzado", date: "Hace 2 días", tokens: 150 },
    { action: "Inició", course: "Node.js & APIs REST", date: "Hace 3 días", tokens: 0 },
    { action: "Completó", course: "Python Data Science", date: "Hace 1 semana", tokens: 120 },
    { action: "Completó", course: "DevOps con Docker", date: "Hace 2 semanas", tokens: 180 },
  ]

  const completionPercentage = (userStats.coursesCompleted / userStats.totalCourses) * 100
  const levelProgress = ((userStats.totalTokens % 1000) / 1000) * 100

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
              <div className="text-2xl font-bold text-[#001F3D]">Mi Perfil</div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={onStore} className="hidden sm:flex bg-transparent">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Tienda de Tokens
              </Button>
              <Button variant="ghost" size="icon" onClick={onLogout}>
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* User Card */}
            <Card>
              <CardContent className="p-6 text-center">
                <div className="relative inline-block mb-4">
                  <Image
                    src={user?.avatar || "/placeholder.svg"}
                    alt={user?.name || "Usuario"}
                    width={120}
                    height={120}
                    className="rounded-full mx-auto"
                  />
                  <Button
                    size="icon"
                    className="absolute bottom-0 right-0 bg-[#4CAF50] hover:bg-[#45a049] text-white rounded-full w-8 h-8"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                </div>
                <h2 className="text-2xl font-bold text-[#001F3D] mb-2">{user?.name}</h2>
                <Badge className="bg-[#4CAF50] text-white mb-4">{userStats.level}</Badge>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 font-medium">Miembro desde</p>
                    <p className="font-bold text-[#001F3D]">{userStats.joinDate}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-medium">Última actividad</p>
                    <p className="font-bold text-[#001F3D]">{userStats.lastActive}</p>
                  </div>
                </div>
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
                    <Coins className="w-4 h-4 text-[#4CAF50]" />
                    <span className="text-sm font-medium text-gray-700">Tokens totales</span>
                  </div>
                  <span className="font-bold text-[#001F3D]">{userStats.totalTokens}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#4CAF50]" />
                    <span className="text-sm font-medium text-gray-700">Cursos completados</span>
                  </div>
                  <span className="font-bold text-[#001F3D]">
                    {userStats.coursesCompleted}/{userStats.totalCourses}
                  </span>
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
                    <span className="text-sm font-medium text-gray-700">Puntuación media</span>
                  </div>
                  <span className="font-bold text-[#001F3D]">{userStats.averageScore}%</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Progress Overview */}
            <Card>
              <CardHeader>
                <h3 className="text-xl font-bold text-[#001F3D]">Progreso General</h3>
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
                    <span className="font-medium text-gray-700">Progreso al siguiente nivel</span>
                    <span className="font-bold text-[#4CAF50]">{levelProgress.toFixed(0)}%</span>
                  </div>
                  <Progress value={levelProgress} className="h-3" />
                  <p className="text-sm text-gray-600 mt-2 font-medium">
                    {userStats.nextLevelTokens} tokens para el siguiente nivel
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <h3 className="text-xl font-bold text-[#001F3D]">Logros</h3>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        achievement.earned
                          ? "border-[#4CAF50] bg-[#4CAF50]/10"
                          : "border-gray-200 bg-gray-50 opacity-60"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            achievement.earned ? "bg-[#4CAF50] text-white" : "bg-gray-300 text-gray-500"
                          }`}
                        >
                          <achievement.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#001F3D]">{achievement.name}</h4>
                          <p className="text-sm text-gray-600 font-medium">{achievement.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <h3 className="text-xl font-bold text-[#001F3D]">Actividad Reciente</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#4CAF50] rounded-lg flex items-center justify-center">
                          <BookOpen className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-[#001F3D]">
                            {activity.action} <span className="text-[#4CAF50]">{activity.course}</span>
                          </p>
                          <p className="text-sm text-gray-600 font-medium">{activity.date}</p>
                        </div>
                      </div>
                      {activity.tokens > 0 && (
                        <div className="flex items-center gap-1 text-[#4CAF50] font-bold">
                          <Coins className="w-4 h-4" />+{activity.tokens}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mobile Store Button */}
        <div className="fixed bottom-4 right-4 sm:hidden">
          <Button
            onClick={onStore}
            className="bg-[#4CAF50] hover:bg-[#45a049] text-white rounded-full w-14 h-14 shadow-lg"
          >
            <ShoppingCart className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  )
}
