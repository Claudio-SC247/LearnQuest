"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Play, Clock, BarChart3, Users, Award, Shield, Globe } from "lucide-react"
import Image from "next/image"

interface ModuleDetailProps {
  module: any
  onStartCourse: () => void
  onBack: () => void
}

export default function ModuleDetail({ module, onStartCourse, onBack }: ModuleDetailProps) {
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
              <p className="text-lg text-gray-600 font-medium leading-relaxed">{module.description}</p>
            </div>

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
                <h2 className="text-2xl font-bold text-[#001F3D] mb-6">Teoría</h2>

                {/* Video Player Placeholder */}
                <div className="relative bg-gray-900 rounded-lg overflow-hidden mb-6">
                  <div className="aspect-video flex items-center justify-center">
                    <div className="text-center text-white">
                      <Play className="w-16 h-16 mx-auto mb-4 opacity-80" />
                      <p className="text-lg font-medium">Video Interactivo</p>
                      <p className="text-sm opacity-80">Duración: {module.duration}</p>
                    </div>
                  </div>
                </div>

                {/* Theory Content */}
                <div className="prose max-w-none">
                  <h3 className="text-xl font-bold text-[#001F3D] mb-4">Conceptos Clave</h3>
                  <div className="space-y-4 text-gray-700 font-medium">
                    <p>
                      En este módulo aprenderás los fundamentos esenciales de {module.title.toLowerCase()}, incluyendo
                      las mejores prácticas de la industria y técnicas avanzadas.
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Configuración del entorno de desarrollo</li>
                      <li>Conceptos fundamentales y arquitectura</li>
                      <li>Implementación de funcionalidades clave</li>
                      <li>Optimización y mejores prácticas</li>
                      <li>Testing y debugging</li>
                    </ul>
                    <p>
                      Al finalizar este módulo, tendrás las habilidades necesarias para aplicar estos conocimientos en
                      proyectos reales y enfrentar desafíos profesionales.
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
                <h3 className="text-lg font-bold text-[#001F3D] mb-4">Lo que aprenderás</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#4CAF50] rounded-full mt-2 flex-shrink-0" />
                    <span className="font-medium text-gray-700">Fundamentos y conceptos avanzados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#4CAF50] rounded-full mt-2 flex-shrink-0" />
                    <span className="font-medium text-gray-700">Implementación práctica de proyectos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#4CAF50] rounded-full mt-2 flex-shrink-0" />
                    <span className="font-medium text-gray-700">Mejores prácticas de la industria</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#4CAF50] rounded-full mt-2 flex-shrink-0" />
                    <span className="font-medium text-gray-700">Técnicas de optimización</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
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
