"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award, Globe } from "lucide-react"
import Image from "next/image"

export default function AboutUs() {
  const values = [
    {
      icon: Target,
      title: "Misión",
      description: "Democratizar la educación tecnológica de calidad para todos los profesionales del mundo",
    },
    {
      icon: Users,
      title: "Comunidad",
      description: "Crear una red global de aprendices que se apoyen mutuamente en su crecimiento profesional",
    },
    {
      icon: Award,
      title: "Excelencia",
      description: "Mantener los más altos estándares de calidad en contenido y metodología de enseñanza",
    },
    {
      icon: Globe,
      title: "Impacto",
      description: "Transformar carreras profesionales y contribuir al desarrollo tecnológico global",
    },
  ]

  const team = [
    {
      name: "Dr. María González",
      role: "CEO & Fundadora",
      image: "/images/team/maria-gonzalez.png",
      description: "PhD en Ciencias de la Computación, ex-Google",
    },
    {
      name: "Carlos Rodríguez",
      role: "CTO",
      image: "/images/team/carlos-rodriguez.png",
      description: "15 años en desarrollo, ex-Microsoft",
    },
    {
      name: "Ana Martín",
      role: "Head of Education",
      image: "/images/team/ana-martin.png",
      description: "Especialista en pedagogía digital, ex-MIT",
    },
  ]

  return (
    <section id="quienes-somos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001F3D] mb-4">Quiénes Somos</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium">
            Somos un equipo de educadores, tecnólogos y visionarios comprometidos con transformar la forma en que las
            personas aprenden y desarrollan sus carreras profesionales
          </p>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-[#001F3D] mb-6">Nuestra Historia</h3>
            <div className="space-y-4 text-gray-700 font-medium">
              <p>
                LearnQuest nació en 2020 con una visión clara: hacer que la educación tecnológica de calidad sea
                accesible para todos, sin importar su ubicación o situación económica.
              </p>
              <p>
                Fundada por un equipo de ex-ejecutivos de Google, Microsoft y MIT, combinamos la experiencia de la
                industria tecnológica con metodologías pedagógicas innovadoras.
              </p>
              <p>
                Hoy, más de 10,000 estudiantes en 50 países han transformado sus carreras profesionales a través de
                nuestra plataforma de microaprendizaje gamificado.
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/about/company-story.png"
              alt="Historia de la empresa"
              width={500}
              height={400}
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-[#001F3D] text-center mb-12">Nuestros Valores</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-[#001F3D] mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm font-medium">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-2xl font-bold text-[#001F3D] text-center mb-12">Nuestro Equipo</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h4 className="text-xl font-bold text-[#001F3D] mb-1">{member.name}</h4>
                  <p className="text-[#4CAF50] font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm font-medium">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 bg-gradient-to-r from-[#4CAF50] to-[#001F3D] rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-white/80 font-medium">Estudiantes</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-white/80 font-medium">Países</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-white/80 font-medium">Satisfacción</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-white/80 font-medium">Empresas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
