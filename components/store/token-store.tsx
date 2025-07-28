"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Coins, CreditCard, Gift, Star, Crown, Zap, ShoppingCart } from "lucide-react"
import Image from "next/image"

interface TokenStoreProps {
  user: any
  onBack: () => void
  onProfile: () => void
}

export default function TokenStore({ user, onBack, onProfile }: TokenStoreProps) {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null)

  const tokenPackages = [
    {
      id: 1,
      name: "Starter Pack",
      tokens: 100,
      price: 9.99,
      bonus: 0,
      popular: false,
      icon: Coins,
      color: "from-blue-400 to-blue-600",
    },
    {
      id: 2,
      name: "Growth Pack",
      tokens: 250,
      price: 19.99,
      bonus: 50,
      popular: true,
      icon: Zap,
      color: "from-[#4CAF50] to-green-600",
    },
    {
      id: 3,
      name: "Pro Pack",
      tokens: 500,
      price: 34.99,
      bonus: 150,
      popular: false,
      icon: Star,
      color: "from-purple-400 to-purple-600",
    },
    {
      id: 4,
      name: "Elite Pack",
      tokens: 1000,
      price: 59.99,
      bonus: 400,
      popular: false,
      icon: Crown,
      color: "from-yellow-400 to-yellow-600",
    },
  ]

  const premiumCourses = [
    {
      id: 1,
      title: "Machine Learning Avanzado",
      description: "Curso completo de ML con proyectos reales",
      price: 300,
      image: "/images/courses/machine-learning.png",
      category: "AI/ML",
      duration: "8 horas",
      certifications: ["Google", "Stanford", "MIT"],
    },
    {
      id: 2,
      title: "Arquitectura de Software",
      description: "Diseña sistemas escalables y robustos",
      price: 250,
      image: "/images/courses/software-architecture.png",
      category: "Backend",
      duration: "6 horas",
      certifications: ["Microsoft", "AWS", "Oracle"],
    },
    {
      id: 3,
      title: "UX/UI Design Masterclass",
      description: "Diseño de experiencias digitales excepcionales",
      price: 200,
      image: "/images/courses/ux-ui-design.png",
      category: "Design",
      duration: "5 horas",
      certifications: ["Adobe", "Figma", "Google"],
    },
    {
      id: 4,
      title: "Blockchain Development",
      description: "Desarrollo de aplicaciones descentralizadas",
      price: 400,
      image: "/images/courses/blockchain.png",
      category: "Blockchain",
      duration: "10 horas",
      certifications: ["Ethereum", "Solidity", "Web3"],
    },
  ]

  const handlePurchaseTokens = (packageId: number) => {
    setSelectedPackage(packageId)
    // Simular compra
    setTimeout(() => {
      alert("¡Compra realizada con éxito!")
      setSelectedPackage(null)
    }, 1000)
  }

  const handlePurchaseCourse = (courseId: number) => {
    alert("¡Curso adquirido con éxito!")
  }

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
              <div className="text-2xl font-bold text-[#001F3D]">Tienda de Tokens</div>
            </div>
            <div className="flex items-center gap-4">
              {/* Current Tokens */}
              <div className="flex items-center gap-2 bg-[#4CAF50]/10 px-3 py-2 rounded-lg">
                <Coins className="w-4 h-4 text-[#4CAF50]" />
                <span className="font-bold text-[#001F3D]">{user?.tokens || 0}</span>
              </div>
              <Button variant="outline" onClick={onProfile} className="hidden sm:flex bg-transparent">
                Mi Perfil
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Token Packages Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#001F3D] mb-4">Comprar Tokens</h2>
            <p className="text-lg text-gray-600 font-medium">
              Adquiere tokens para desbloquear cursos premium y contenido exclusivo
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tokenPackages.map((pkg) => (
              <Card
                key={pkg.id}
                className={`relative border-0 shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  pkg.popular ? "ring-2 ring-[#4CAF50] scale-105" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-[#4CAF50] text-white px-4 py-1">Más Popular</Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${pkg.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <pkg.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#001F3D]">{pkg.name}</h3>
                </CardHeader>

                <CardContent className="text-center space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-[#001F3D]">{pkg.tokens}</div>
                    <div className="text-sm text-gray-600 font-medium">tokens base</div>
                    {pkg.bonus > 0 && <div className="text-[#4CAF50] font-bold">+{pkg.bonus} bonus</div>}
                  </div>

                  <div className="text-2xl font-bold text-[#4CAF50]">€{pkg.price}</div>

                  <Button
                    onClick={() => handlePurchaseTokens(pkg.id)}
                    disabled={selectedPackage === pkg.id}
                    className={`w-full font-medium transition-all duration-200 hover:scale-105 ${
                      pkg.popular
                        ? "bg-[#4CAF50] hover:bg-[#45a049] text-white"
                        : "bg-[#001F3D] hover:bg-[#001F3D]/90 text-white"
                    }`}
                  >
                    {selectedPackage === pkg.id ? (
                      "Procesando..."
                    ) : (
                      <>
                        <CreditCard className="w-4 h-4 mr-2" />
                        Comprar
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Premium Courses Section */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#001F3D] mb-4">Cursos Premium</h2>
            <p className="text-lg text-gray-600 font-medium">
              Usa tus tokens para acceder a cursos avanzados y especializados
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {premiumCourses.map((course) => (
              <Card
                key={course.id}
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
                      <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white">
                        {course.price} tokens
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-[#001F3D] mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 font-medium line-clamp-2">{course.description}</p>

                  {/* Certifications */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2 font-medium">Avalado por:</p>
                    <div className="flex flex-wrap gap-1">
                      {course.certifications.slice(0, 2).map((cert, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                      {course.certifications.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{course.certifications.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="text-sm text-gray-600 mb-4 font-medium">Duración: {course.duration}</div>

                  <Button
                    onClick={() => handlePurchaseCourse(course.id)}
                    disabled={user?.tokens < course.price}
                    className={`w-full font-medium transition-all duration-200 hover:scale-105 ${
                      user?.tokens >= course.price
                        ? "bg-[#4CAF50] hover:bg-[#45a049] text-white"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {user?.tokens >= course.price ? (
                      <>
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Adquirir
                      </>
                    ) : (
                      `Necesitas ${course.price - user?.tokens} tokens más`
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-12">
          <Card className="bg-gradient-to-r from-[#4CAF50] to-[#001F3D] text-white">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Gift className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">¿Por qué comprar tokens?</h3>
                <p className="text-white/90 font-medium">Desbloquea todo el potencial de LearnQuest</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Star className="w-8 h-8 mx-auto mb-3 text-yellow-400" />
                  <h4 className="font-bold mb-2">Contenido Premium</h4>
                  <p className="text-sm text-white/80 font-medium">Accede a cursos avanzados y especializados</p>
                </div>
                <div className="text-center">
                  <Crown className="w-8 h-8 mx-auto mb-3 text-yellow-400" />
                  <h4 className="font-bold mb-2">Certificaciones</h4>
                  <p className="text-sm text-white/80 font-medium">Obtén certificados reconocidos internacionalmente</p>
                </div>
                <div className="text-center">
                  <Zap className="w-8 h-8 mx-auto mb-3 text-yellow-400" />
                  <h4 className="font-bold mb-2">Acceso Prioritario</h4>
                  <p className="text-sm text-white/80 font-medium">Sé el primero en acceder a nuevos contenidos</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
