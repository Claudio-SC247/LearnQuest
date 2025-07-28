"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Clock, BarChart3, ShoppingCart, Coins, Sparkles, LogOut, User } from "lucide-react"
import Image from "next/image"

interface DashboardProps {
  user: any
  onSelectModule: (module: any) => void
  onProfile: () => void
  onStore: () => void
  onLogout: () => void
}

export default function Dashboard({ user, onSelectModule, onProfile, onStore, onLogout }: DashboardProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const modules = [
    {
      id: 1,
      title: "React & TypeScript Avanzado",
      description:
        "Domina React con TypeScript para crear aplicaciones web modernas y escalables con componentes reutilizables",
      duration: "4 semanas",
      practice: "85%",
      image: "/images/courses/react-typescript.png",
      category: "Frontend",
      level: "Avanzado",
      price: 0,
      certifications: ["Meta", "Google", "Microsoft"],
      certificate: "React Expert Certification",
      instructor: "Dr. Carlos Mendoza",
      curriculum: [
        "Fundamentos de TypeScript",
        "Componentes avanzados en React",
        "State Management con Redux Toolkit",
        "Testing con Jest y React Testing Library",
        "Optimización de rendimiento",
        "Deployment y CI/CD",
      ],
    },
    {
      id: 2,
      title: "Node.js & APIs REST",
      description:
        "Construye APIs robustas y escalables con Node.js, Express y mejores prácticas de arquitectura backend",
      duration: "5 semanas",
      practice: "90%",
      image: "/images/courses/nodejs-api.png",
      category: "Backend",
      level: "Intermedio",
      price: 150,
      certifications: ["IBM", "Oracle", "AWS"],
      certificate: "Backend Developer Certification",
      instructor: "Ing. Ana Rodríguez",
      curriculum: [
        "Fundamentos de Node.js y npm",
        "Creación de APIs REST con Express",
        "Autenticación y autorización JWT",
        "Integración con bases de datos",
        "Manejo de errores y logging",
        "Testing y documentación de APIs",
      ],
    },
    {
      id: 3,
      title: "Python Data Science",
      description:
        "Análisis de datos y machine learning con Python, pandas, numpy y scikit-learn para insights empresariales",
      duration: "6 semanas",
      practice: "80%",
      image: "/images/courses/python-data-science.png",
      category: "Data Science",
      level: "Principiante",
      price: 0,
      certifications: ["Google", "IBM", "Coursera"],
      certificate: "Data Science Fundamentals",
      instructor: "Dr. Miguel Torres",
      curriculum: [
        "Introducción a Python para Data Science",
        "Manipulación de datos con Pandas",
        "Visualización con Matplotlib y Seaborn",
        "Estadística descriptiva e inferencial",
        "Machine Learning con Scikit-learn",
        "Proyecto final: Análisis predictivo",
      ],
    },
    {
      id: 4,
      title: "DevOps con Docker",
      description:
        "Containerización y despliegue continuo con Docker, Kubernetes y herramientas de automatización modernas",
      duration: "4 semanas",
      practice: "75%",
      image: "/images/courses/devops-docker.png",
      category: "DevOps",
      level: "Intermedio",
      price: 200,
      certifications: ["Docker", "Kubernetes", "AWS"],
      certificate: "DevOps Professional",
      instructor: "Ing. Roberto Silva",
      curriculum: [
        "Fundamentos de containerización",
        "Docker: imágenes y contenedores",
        "Docker Compose para multi-contenedores",
        "Introducción a Kubernetes",
        "CI/CD con GitHub Actions",
        "Monitoreo y logging",
      ],
    },
    {
      id: 5,
      title: "Inglés Técnico para Desarrolladores",
      description:
        "Mejora tu inglés técnico específico para el mundo IT, comunicación profesional y documentación técnica",
      duration: "6 semanas",
      practice: "70%",
      image: "/images/courses/technical-english.png",
      category: "Idiomas",
      level: "Intermedio",
      price: 100,
      certifications: ["Cambridge", "TOEFL", "IELTS"],
      certificate: "Technical English Proficiency",
      instructor: "Prof. Sarah Johnson",
      curriculum: [
        "Vocabulario técnico esencial",
        "Comunicación en reuniones técnicas",
        "Escritura de documentación",
        "Presentaciones técnicas efectivas",
        "Code reviews en inglés",
        "Networking profesional internacional",
      ],
    },
    {
      id: 6,
      title: "Comunicación Efectiva en Equipos",
      description:
        "Desarrolla habilidades de comunicación, liderazgo y trabajo en equipo para liderar proyectos exitosos",
      duration: "5 semanas",
      practice: "65%",
      image: "/images/courses/communication-skills.png",
      category: "Soft Skills",
      level: "Principiante",
      price: 80,
      certifications: ["PMI", "Scrum Alliance", "LinkedIn Learning"],
      certificate: "Leadership Communication",
      instructor: "Dra. Laura Vásquez",
      curriculum: [
        "Fundamentos de comunicación efectiva",
        "Escucha activa y empatía",
        "Gestión de conflictos",
        "Liderazgo de equipos remotos",
        "Feedback constructivo",
        "Presentaciones persuasivas",
      ],
    },
    {
      id: 7,
      title: "Machine Learning Básico",
      description:
        "Introducción al aprendizaje automático con Python, algoritmos fundamentales y aplicaciones prácticas",
      duration: "5 semanas",
      practice: "70%",
      image: "/images/courses/machine-learning.png",
      category: "AI/ML",
      level: "Principiante",
      price: 250,
      certifications: ["Google", "Stanford", "MIT"],
      certificate: "ML Fundamentals",
      instructor: "Dr. Elena Morales",
      curriculum: [
        "Introducción al Machine Learning",
        "Algoritmos de regresión y clasificación",
        "Clustering y reducción de dimensionalidad",
        "Evaluación de modelos",
        "Redes neuronales básicas",
        "Proyecto: Sistema de recomendaciones",
      ],
    },
    {
      id: 8,
      title: "Cybersecurity Fundamentals",
      description:
        "Fundamentos de ciberseguridad, protección de sistemas y mejores prácticas para desarrolladores seguros",
      duration: "3 semanas",
      practice: "85%",
      image: "/images/courses/cybersecurity.png",
      category: "Seguridad",
      level: "Intermedio",
      price: 180,
      certifications: ["CompTIA", "CISSP", "CEH"],
      certificate: "Cybersecurity Professional",
      instructor: "Ing. David Chen",
      curriculum: [
        "Principios de seguridad informática",
        "Criptografía y hashing",
        "Seguridad en aplicaciones web",
        "Gestión de vulnerabilidades",
        "Incident response y forense",
        "Compliance y marcos regulatorios",
      ],
    },
    {
      id: 9,
      title: "Psicología del Aprendizaje",
      description:
        "Comprende los procesos cognitivos y emocionales del aprendizaje humano para optimizar tu desarrollo personal",
      duration: "4 semanas",
      practice: "70%",
      image: "/images/courses/psychology-learning.png",
      category: "Psicología",
      level: "Principiante",
      price: 120,
      certifications: ["APA", "BPS", "Universidad de Harvard"],
      certificate: "Learning Psychology Specialist",
      instructor: "Dra. Laura Vásquez",
      curriculum: [
        "Teorías del aprendizaje",
        "Neurociencia cognitiva",
        "Motivación y engagement",
        "Memoria y retención",
        "Metacognición y autorregulación",
        "Aplicaciones en educación digital",
      ],
    },
    {
      id: 10,
      title: "Matemáticas para Programadores",
      description:
        "Fundamentos matemáticos esenciales para el desarrollo de software, algoritmos y ciencias de la computación",
      duration: "8 semanas",
      practice: "85%",
      image: "/images/courses/mathematics-programming.png",
      category: "Matemáticas",
      level: "Intermedio",
      price: 200,
      certifications: ["MIT", "Stanford", "Khan Academy"],
      certificate: "Mathematical Programming Foundations",
      instructor: "Dr. Roberto Silva",
      curriculum: [
        "Álgebra lineal para programadores",
        "Cálculo diferencial e integral",
        "Estadística y probabilidad",
        "Matemáticas discretas",
        "Teoría de grafos",
        "Complejidad algorítmica",
      ],
    },
    {
      id: 11,
      title: "Historia de la Tecnología",
      description: "Evolución de la tecnología desde los primeros ordenadores hasta la inteligencia artificial moderna",
      duration: "3 semanas",
      practice: "60%",
      image: "/images/courses/technology-history.png",
      category: "Historia",
      level: "Principiante",
      price: 60,
      certifications: ["IEEE", "Computer History Museum", "Smithsonian"],
      certificate: "Technology History Scholar",
      instructor: "Prof. Elena Morales",
      curriculum: [
        "Pioneros de la computación",
        "Evolución del hardware",
        "Historia del software",
        "Internet y la web",
        "Revolución móvil",
        "Futuro de la tecnología",
      ],
    },
  ]

  const filteredModules = modules.filter(
    (module) =>
      module.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      module.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const canAccessModule = (module: any) => {
    return module.price === 0 || user.tokens >= module.price
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#4CAF50] rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div className="text-2xl font-bold text-[#001F3D]">LearnQuest</div>
            </div>
            <div className="flex items-center gap-4">
              {/* Tokens Display */}
              <div className="flex items-center gap-2 bg-[#4CAF50]/10 px-3 py-2 rounded-lg">
                <Coins className="w-4 h-4 text-[#4CAF50]" />
                <span className="font-bold text-[#001F3D]">{user?.tokens || 0}</span>
              </div>

              {/* Store Button */}
              <Button variant="ghost" size="sm" onClick={onStore} className="hidden sm:flex">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Tienda
              </Button>

              {/* User Profile */}
              <button
                onClick={onProfile}
                className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-colors"
              >
                <Image
                  src={user?.avatar || "/placeholder.svg"}
                  alt={user?.name || "Usuario"}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="font-medium text-gray-700 hidden sm:block">{user?.name}</span>
              </button>

              {/* Logout Button */}
              <Button variant="ghost" size="icon" onClick={onLogout}>
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#001F3D] mb-2">
            ¡Bienvenido de vuelta, {user?.name?.split(" ")[0]}!
          </h1>
          <p className="text-gray-600 font-medium">
            Continúa tu journey de aprendizaje y desbloquea nuevas habilidades
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Buscar cursos o módulos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredModules.map((module) => (
            <Card
              key={module.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 cursor-pointer relative"
              onClick={() => canAccessModule(module) && onSelectModule(module)}
            >
              {/* Premium Badge */}
              {module.price > 0 && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white">
                    {module.price} tokens
                  </Badge>
                </div>
              )}

              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={module.image || "/placeholder.svg"}
                    alt={module.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#4CAF50] text-white">{module.category}</Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-[#001F3D]">
                      {module.level}
                    </Badge>
                  </div>

                  {/* Lock Overlay for Premium Courses */}
                  {!canAccessModule(module) && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <div className="text-center text-white">
                        <ShoppingCart className="w-8 h-8 mx-auto mb-2" />
                        <p className="text-sm font-medium">Requiere {module.price} tokens</p>
                      </div>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-lg md:text-xl font-bold text-[#001F3D] mb-2">{module.title}</h3>
                <p className="text-gray-600 text-sm mb-4 font-medium line-clamp-2">{module.description}</p>

                {/* Instructor */}
                <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                  <User className="w-4 h-4" />
                  <span className="font-medium">{module.instructor}</span>
                </div>

                {/* Certifications */}
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2 font-medium">Avalado por:</p>
                  <div className="flex flex-wrap gap-1">
                    {module.certifications.slice(0, 2).map((cert, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {cert}
                      </Badge>
                    ))}
                    {module.certifications.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{module.certifications.length - 2}
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">{module.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BarChart3 className="w-4 h-4" />
                    <span className="font-medium">{module.practice} práctica</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  className={`w-full font-medium transition-all duration-200 hover:scale-105 ${
                    canAccessModule(module)
                      ? "bg-[#001F3D] hover:bg-[#001F3D]/90 text-white"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                  disabled={!canAccessModule(module)}
                >
                  {canAccessModule(module) ? "Ver Módulo" : `Requiere ${module.price} tokens`}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredModules.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron módulos que coincidan con tu búsqueda.</p>
          </div>
        )}

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
