"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, BookOpen, Trophy, Users, Sparkles, ArrowRight } from "lucide-react"

interface WelcomeScreenProps {
  onLogin: () => void
  onRegister: () => void
}

export default function WelcomeScreen({ onLogin, onRegister }: WelcomeScreenProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const features = [
    {
      icon: BookOpen,
      title: "Microaprendizaje",
      description: "Aprende en sesiones cortas y efectivas",
    },
    {
      icon: Trophy,
      title: "Gamificación",
      description: "Gana tokens y desbloquea logros",
    },
    {
      icon: Users,
      title: "Comunidad",
      description: "Conecta con otros estudiantes",
    },
  ]

  const testimonials = [
    {
      text: "LearnQuest cambió mi carrera profesional completamente",
      author: "María González",
      role: "Frontend Developer",
    },
    {
      text: "La metodología de microaprendizaje es perfecta para mi horario",
      author: "Carlos Rodríguez",
      role: "Full Stack Developer",
    },
    {
      text: "Los proyectos prácticos me ayudaron a conseguir mi trabajo soñado",
      author: "Ana Martín",
      role: "Data Scientist",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001F3D] via-[#001F3D] to-[#4CAF50] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 20px,
              rgba(255,255,255,0.1) 20px,
              rgba(255,255,255,0.1) 21px
            )`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#4CAF50] rounded-full opacity-20 animate-pulse" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-white rounded-full opacity-10 animate-bounce" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-[#4CAF50] rounded-full opacity-15 animate-pulse" />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Logo and Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#4CAF50] rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">LearnQuest</h1>
              </div>
              <p className="text-xl md:text-2xl text-white/90 font-medium">
                Transforma tu futuro con microaprendizaje gamificado
              </p>
            </div>

            {/* Hero Description */}
            <div className="space-y-6">
              <p className="text-lg text-white/80 leading-relaxed font-medium">
                Únete a miles de profesionales que han transformado sus carreras con nuestros bootcamps intensivos,
                proyectos prácticos y sistema de recompensas tokenizadas.
              </p>

              {/* Features */}
              <div className="grid md:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <feature.icon className="w-6 h-6 text-[#4CAF50]" />
                    <div>
                      <h3 className="font-bold text-sm">{feature.title}</h3>
                      <p className="text-xs text-white/70 font-medium">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#4CAF50]">10K+</div>
                  <div className="text-sm text-white/70 font-medium">Estudiantes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#4CAF50]">95%</div>
                  <div className="text-sm text-white/70 font-medium">Finalización</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#4CAF50]">500+</div>
                  <div className="text-sm text-white/70 font-medium">Proyectos</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={onRegister}
                size="lg"
                className="bg-[#4CAF50] hover:bg-[#45a049] text-white px-8 py-4 text-lg font-medium transition-all duration-200 hover:scale-105"
              >
                Comenzar Gratis
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                onClick={onLogin}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#001F3D] px-8 py-4 text-lg font-medium transition-all duration-200 bg-transparent"
              >
                Iniciar Sesión
              </Button>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Demo Video Card */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-br from-[#4CAF50] to-[#001F3D] rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center text-white">
                    <Play className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <p className="text-lg font-medium">Ver Demo</p>
                    <p className="text-sm opacity-80">Descubre cómo funciona</p>
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Experiencia de Aprendizaje Única</h3>
                <p className="text-white/80 text-sm font-medium">
                  Combina teoría, práctica y gamificación en una plataforma diseñada para el éxito profesional.
                </p>
              </CardContent>
            </Card>

            {/* Testimonial Carousel */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="text-center">
                  <blockquote className="text-white text-lg font-medium mb-4 italic">
                    "{testimonials[currentSlide].text}"
                  </blockquote>
                  <div className="text-white/80">
                    <div className="font-bold">{testimonials[currentSlide].author}</div>
                    <div className="text-sm font-medium">{testimonials[currentSlide].role}</div>
                  </div>
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-2 mt-4">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentSlide ? "bg-[#4CAF50]" : "bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Access */}
            <div className="text-center">
              <p className="text-white/70 text-sm mb-4 font-medium">¿Ya tienes una cuenta?</p>
              <Button
                onClick={onLogin}
                variant="ghost"
                className="text-[#4CAF50] hover:text-[#45a049] hover:bg-white/10 font-medium"
              >
                Acceder directamente
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
