"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Code, Database, Smartphone } from "lucide-react"
import Image from "next/image"
import React from "react"

const icons = {
  Code: Code,
  Database: Database,
  Smartphone: Smartphone,
}

export default function SandboxProjects() {
  const [currentProject, setCurrentProject] = useState(0)

  const projects = [
    {
      title: "E-commerce Dashboard",
      description: "Construye un dashboard completo con React, gráficos interactivos y gestión de estado.",
      icon: "Code",
      image: "/images/projects/ecommerce-dashboard.png",
      tech: ["React", "TypeScript", "Chart.js"],
      difficulty: "Intermedio",
    },
    {
      title: "API REST con Node.js",
      description: "Desarrolla una API completa con autenticación, base de datos y documentación.",
      icon: "Database",
      image: "/images/projects/nodejs-api.png",
      tech: ["Node.js", "Express", "MongoDB"],
      difficulty: "Avanzado",
    },
    {
      title: "App Móvil React Native",
      description: "Crea una aplicación móvil multiplataforma con navegación y estado global.",
      icon: "Smartphone",
      image: "/images/projects/react-native-app.png",
      tech: ["React Native", "Redux", "Firebase"],
      difficulty: "Intermedio",
    },
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001F3D] mb-4">Proyectos Sandbox</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Practica en entornos reales con proyectos que simulan desafíos profesionales
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden border-0 shadow-2xl">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                {/* Project Image */}
                <div className="relative">
                  <Image
                    src={projects[currentProject].image || "/placeholder.svg"}
                    alt={projects[currentProject].title}
                    width={500}
                    height={300}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-2 text-white">
                      {icons[projects[currentProject].icon] &&
                        React.createElement(icons[projects[currentProject].icon], { className: "w-6 h-6" })}
                      <span className="font-semibold font-medium">{projects[currentProject].difficulty}</span>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#001F3D] mb-4">
                    {projects[currentProject].title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed font-medium">
                    {projects[currentProject].description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-[#001F3D] mb-3 font-medium">TECNOLOGÍAS</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[currentProject].tech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button className="bg-[#4CAF50] hover:bg-[#45a049] text-white transition-all duration-200 hover:scale-105 font-medium">
                    Empezar proyecto
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevProject}
              className="border-[#001F3D] text-[#001F3D] hover:bg-[#001F3D] hover:text-white bg-transparent"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentProject ? "bg-[#4CAF50]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextProject}
              className="border-[#001F3D] text-[#001F3D] hover:bg-[#001F3D] hover:text-white bg-transparent"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
