"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "María González",
      role: "Frontend Developer en TechCorp",
      image: "/images/testimonials/maria-gonzalez.png",
      text: "LearnQuest me ayudó a conseguir mi primer trabajo como desarrolladora. Los proyectos prácticos fueron clave para mi portfolio.",
      rating: 5,
    },
    {
      name: "Carlos Rodríguez",
      role: "Full Stack Developer en StartupXYZ",
      image: "/images/testimonials/carlos-rodriguez.png",
      text: "La metodología de microaprendizaje es perfecta para mi horario. Pude completar 3 bootcamps mientras trabajaba.",
      rating: 5,
    },
    {
      name: "Ana Martín",
      role: "Data Scientist en DataCorp",
      image: "/images/testimonials/ana-martin.png",
      text: "Los tokens y gamificación me mantuvieron motivada. Ahora trabajo en mi empresa soñada gracias a LearnQuest.",
      rating: 5,
    },
    {
      name: "Diego López",
      role: "DevOps Engineer en CloudTech",
      image: "/images/testimonials/diego-lopez.png",
      text: "Los proyectos sandbox son increíbles. Practiqué con tecnologías reales que uso en mi trabajo diario.",
      rating: 5,
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section id="testimonios" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001F3D] mb-4 font-bold">
            Lo que dicen nuestros estudiantes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Historias reales de profesionales que transformaron su carrera
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl bg-white">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#4CAF50] text-[#4CAF50]" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed italic font-medium">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <Image
                    src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="font-bold text-[#001F3D] text-lg font-bold">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-gray-600 font-medium">{testimonials[currentTestimonial].role}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-[#4CAF50]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
