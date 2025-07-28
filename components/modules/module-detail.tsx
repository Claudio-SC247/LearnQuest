"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Play, Clock, BarChart3, Users, Award, Shield, Globe, User, BookOpen } from "lucide-react"
import Image from "next/image"

interface ModuleDetailProps {
  module: any
  onStartCourse: () => void
  onBack: () => void
}

export default function ModuleDetail({ module, onStartCourse, onBack }: ModuleDetailProps) {
  // Related courses suggestions based on category
  const getRelatedCourses = (currentModule: any) => {
    const allCourses = [
      { title: "JavaScript Fundamentals", category: "Frontend", level: "Principiante" },
      { title: "Advanced CSS & Animations", category: "Frontend", level: "Intermedio" },
      { title: "Vue.js Complete Guide", category: "Frontend", level: "Intermedio" },
      { title: "Express.js Masterclass", category: "Backend", level: "Intermedio" },
      { title: "MongoDB & Mongoose", category: "Backend", level: "Principiante" },
      { title: "GraphQL APIs", category: "Backend", level: "Avanzado" },
      { title: "TensorFlow Basics", category: "AI/ML", level: "Intermedio" },
      { title: "Deep Learning with PyTorch", category: "AI/ML", level: "Avanzado" },
      { title: "AWS Cloud Practitioner", category: "DevOps", level: "Principiante" },
    ]

    return allCourses
      .filter((course) => course.category === currentModule.category && course.title !== currentModule.title)
      .slice(0, 3)
  }

  const relatedCourses = getRelatedCourses(module)

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
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Module Header */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-[#4CAF50] text-white">{module.category}</Badge>
                <Badge variant="secondary">{module.level}</Badge>
                {module.price > 0 && (
                  <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white">Premium</Badge>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#001F3D] mb-4">{module.title}</h1>
              <p className="text-lg text-gray-600 font-medium leading-relaxed mb-4">{module.description}</p>

              {/* Instructor */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#4CAF50] rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Instructor</p>
                  <p className="text-lg font-bold text-[#001F3D]">{module.instructor}</p>
                </div>
              </div>
            </div>

            {/* Curriculum */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#001F3D] mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Malla Curricular
                </h3>
                <div className="space-y-3">
                  {module.curriculum?.map((item: string, index: number) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-6 h-6 bg-[#4CAF50] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <span className="font-medium text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications & Accreditations */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#001F3D] mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Certificaciones y Avales
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-bold text-[#001F3D] mb-3">Avalado por:</h4>
                    <div className="flex flex-wrap gap-2">
                      {module.certifications?.map((cert: string, index: number) => (
                        <Badge key={index} variant="outline" className="border-[#4CAF50] text-[#4CAF50]">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#001F3D] mb-3">Certificado que obtendrás:</h4>
                    <div className="flex items-center gap-2 p-3 bg-[#4CAF50]/10 rounded-lg">
                      <Award className="w-5 h-5 text-[#4CAF50]" />
                      <span className="font-medium text-[#001F3D]">{module.certificate}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-bold text-blue-800 mb-2">Reconocimiento Internacional</h4>
                      <p className="text-sm text-blue-700 font-medium">
                        Este certificado es reconocido por empresas líderes en tecnología a nivel mundial y puede ser
                        verificado digitalmente a través de blockchain.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Theory Section */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#001F3D] mb-6">Contenido del Curso</h2>

                {/* Video Player Placeholder */}
                <div className="relative bg-gray-900 rounded-lg overflow-hidden mb-6">
                  <div className="aspect-video flex items-center justify-center">
                    <div className="text-center text-white">
                      <Play className="w-16 h-16 mx-auto mb-4 opacity-80" />
                      <p className="text-lg font-medium">Video Introductorio</p>
                      <p className="text-sm opacity-80">Duración: {module.duration}</p>
                    </div>
                  </div>
                </div>

                {/* Theory Content */}
                <div className="prose max-w-none">
                  <h3 className="text-xl font-bold text-[#001F3D] mb-4">Lo que aprenderás</h3>
                  <div className="space-y-4 text-gray-700 font-medium">
                    <p>
                      En este curso dominarás {module.title.toLowerCase()}, incluyendo las mejores prácticas de la
                      industria y técnicas avanzadas utilizadas por profesionales experimentados.
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Configuración del entorno de desarrollo profesional</li>
                      <li>Conceptos fundamentales y arquitectura moderna</li>
                      <li>Implementación de funcionalidades clave del ecosistema</li>
                      <li>Optimización de rendimiento y mejores prácticas</li>
                      <li>Testing, debugging y mantenimiento de código</li>
                      <li>Deployment y integración continua</li>
                    </ul>
                    <p>
                      Al finalizar este curso, tendrás las habilidades necesarias para aplicar estos conocimientos en
                      proyectos reales y enfrentar desafíos profesionales con confianza.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Module Image */}
            <Card>
              <CardContent className="p-0">
                <Image
                  src={module.image || "/placeholder.svg"}
                  alt={module.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#4CAF50]" />
                      <span className="font-medium">{module.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-[#4CAF50]" />
                      <span className="font-medium">{module.practice} práctica</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#4CAF50]" />
                      <span className="font-medium">1.2k estudiantes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#4CAF50]" />
                      <span className="font-medium">Certificado</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What You'll Learn */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[#001F3D] mb-4">Habilidades que desarrollarás</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#4CAF50] rounded-full mt-2 flex-shrink-0" />
                    <span className="font-medium text-gray-700">Dominio de conceptos fundamentales y avanzados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#4CAF50] rounded-full mt-2 flex-shrink-0" />
                    <span className="font-medium text-gray-700">Implementación práctica en proyectos reales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#4CAF50] rounded-full mt-2 flex-shrink-0" />
                    <span className="font-medium text-gray-700">Aplicación de mejores prácticas industriales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#4CAF50] rounded-full mt-2 flex-shrink-0" />
                    <span className="font-medium text-gray-700">Técnicas de optimización y rendimiento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#4CAF50] rounded-full mt-2 flex-shrink-0" />
                    <span className="font-medium text-gray-700">Testing y debugging profesional</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Related Courses */}
            {relatedCourses.length > 0 && (
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-[#001F3D] mb-4">Cursos relacionados</h3>
                  <div className="space-y-3">
                    {relatedCourses.map((course, index) => (
                      <div
                        key={index}
                        className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                      >
                        <h4 className="font-medium text-[#001F3D] mb-1">{course.title}</h4>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {course.category}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {course.level}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-3 font-medium">
                    Estos cursos complementan perfectamente tu aprendizaje
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Fixed Start Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4">
        <div className="container mx-auto">
          <Button
            onClick={onStartCourse}
            className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white py-4 text-lg font-medium transition-all duration-200 hover:scale-105"
          >
            Empezar Curso
          </Button>
        </div>
      </div>
    </div>
  )
}
