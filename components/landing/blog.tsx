"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Blog() {
  const posts = [
    {
      title: "El Futuro del Aprendizaje: IA y Educación Personalizada",
      excerpt:
        "Descubre cómo la inteligencia artificial está revolucionando la forma en que aprendemos y nos desarrollamos profesionalmente.",
      image: "/images/blog/ai-education.png",
      category: "Tecnología",
      author: "Dr. María González",
      date: "15 Ene 2024",
      readTime: "5 min",
    },
    {
      title: "Microaprendizaje: La Clave del Éxito Profesional",
      excerpt:
        "Por qué las sesiones cortas de aprendizaje son más efectivas que los métodos tradicionales de educación.",
      image: "/images/blog/microlearning.png",
      category: "Educación",
      author: "Carlos Rodríguez",
      date: "12 Ene 2024",
      readTime: "4 min",
    },
    {
      title: "Gamificación en el Aprendizaje Corporativo",
      excerpt: "Cómo las empresas están usando elementos de juego para mejorar la capacitación de sus empleados.",
      image: "/images/blog/gamification.png",
      category: "Negocios",
      author: "Ana Martín",
      date: "10 Ene 2024",
      readTime: "6 min",
    },
  ]

  return (
    <section id="blog" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001F3D] mb-4">Blog</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Mantente actualizado con las últimas tendencias en educación, tecnología y desarrollo profesional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#4CAF50] text-white">{post.category}</Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#001F3D] mb-3 line-clamp-2 group-hover:text-[#4CAF50] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 font-medium line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span className="font-medium">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span className="font-medium">{post.date}</span>
                      </div>
                    </div>
                    <span className="font-medium">{post.readTime}</span>
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full text-[#4CAF50] hover:text-[#45a049] hover:bg-[#4CAF50]/10 font-medium group"
                  >
                    Leer más
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white px-8 py-3 transition-all duration-200 bg-transparent font-medium"
          >
            Ver todos los artículos
          </Button>
        </div>
      </div>
    </section>
  )
}
