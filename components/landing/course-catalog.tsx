"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, BarChart3, User } from "lucide-react"
import Image from "next/image"

export default function CourseCatalog() {
  const courses = [
    {
      title: "React & TypeScript Avanzado",
      duration: "4 semanas",
      practice: "85%",
      image: "/images/courses/react-typescript.png",
      category: "Frontend",
      level: "Avanzado",
      instructor: "Dr. Carlos Mendoza",
      description: "Domina React con TypeScript para crear aplicaciones web modernas y escalables",
    },
    {
      title: "Node.js & APIs REST",
      duration: "5 semanas",
      practice: "90%",
      image: "/images/courses/nodejs-api.png",
      category: "Backend",
      level: "Intermedio",
      instructor: "Ing. Ana Rodríguez",
      description: "Construye APIs robustas y escalables con Node.js y Express",
    },
    {
      title: "Python Data Science",
      duration: "6 semanas",
      practice: "80%",
      image: "/images/courses/python-data-science.png",
      category: "Data Science",
      level: "Principiante",
      instructor: "Dr. Miguel Torres",
      description: "Análisis de datos y machine learning con Python y sus librerías principales",
    },
    {
      title: "Psicología del Aprendizaje",
      duration: "4 semanas",
      practice: "70%",
      image: "/images/courses/psychology-learning.png",
      category: "Psicología",
      level: "Principiante",
      instructor: "Dra. Laura Vásquez",
      description: "Comprende los procesos cognitivos y emocionales del aprendizaje humano",
    },
    {
      title: "Matemáticas para Programadores",
      duration: "8 semanas",
      practice: "85%",
      image: "/images/courses/mathematics-programming.png",
      category: "Matemáticas",
      level: "Intermedio",
      instructor: "Dr. Roberto Silva",
      description: "Fundamentos matemáticos esenciales para el desarrollo de software",
    },
    {
      title: "Historia de la Tecnología",
      duration: "3 semanas",
      practice: "60%",
      image: "/images/courses/technology-history.png",
      category: "Historia",
      level: "Principiante",
      instructor: "Prof. Elena Morales",
      description: "Evolución de la tecnología desde los primeros ordenadores hasta la IA",
    },
  ]

  return (
    <section id="cursos" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001F3D] mb-4">Catálogo de Cursos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Cursos especializados diseñados por expertos para maximizar tu aprendizaje
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#4CAF50] text-white">{course.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-[#001F3D]">
                      {course.level}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#001F3D] mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4 font-medium line-clamp-2">{course.description}</p>

                {/* Instructor */}
                <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                  <User className="w-4 h-4" />
                  <span className="font-medium">{course.instructor}</span>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BarChart3 className="w-4 h-4" />
                    <span className="font-medium">{course.practice} práctica</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-[#001F3D] hover:bg-[#001F3D]/90 text-white transition-all duration-200 hover:scale-105 font-medium">
                  Ver Curso
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white px-8 py-3 transition-all duration-200 bg-transparent font-medium"
          >
            Ver todos los cursos
          </Button>
        </div>
      </div>
    </section>
  )
}
