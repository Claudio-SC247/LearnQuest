"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Shield, Globe, CheckCircle } from "lucide-react"

export default function Certifications() {
  const certifications = [
    {
      name: "React Expert Certification",
      category: "Frontend Development",
      validatedBy: ["Meta", "Google", "Microsoft"],
      description: "Certificación oficial en desarrollo React con TypeScript",
      icon: "/images/certs/react-cert.png",
      level: "Avanzado",
    },
    {
      name: "Backend Developer Professional",
      category: "Backend Development",
      validatedBy: ["IBM", "Oracle", "AWS"],
      description: "Certificación en desarrollo de APIs y arquitectura backend",
      icon: "/images/certs/backend-cert.png",
      level: "Intermedio",
    },
    {
      name: "Data Science Fundamentals",
      category: "Data Science",
      validatedBy: ["Google", "IBM", "Coursera"],
      description: "Certificación en análisis de datos y machine learning",
      icon: "/images/certs/data-cert.png",
      level: "Principiante",
    },
    {
      name: "DevOps Professional",
      category: "DevOps",
      validatedBy: ["Docker", "Kubernetes", "AWS"],
      description: "Certificación en containerización y despliegue continuo",
      icon: "/images/certs/devops-cert.png",
      level: "Avanzado",
    },
    {
      name: "Technical English Proficiency",
      category: "Languages",
      validatedBy: ["Cambridge", "TOEFL", "IELTS"],
      description: "Certificación en inglés técnico para profesionales IT",
      icon: "/images/certs/english-cert.png",
      level: "Intermedio",
    },
    {
      name: "Leadership Communication",
      category: "Soft Skills",
      validatedBy: ["PMI", "Scrum Alliance", "LinkedIn Learning"],
      description: "Certificación en comunicación efectiva y liderazgo",
      icon: "/images/certs/leadership-cert.png",
      level: "Intermedio",
    },
  ]

  return (
    <section id="certificaciones" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001F3D] mb-4">Certificaciones Oficiales</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium">
            Obtén certificaciones reconocidas internacionalmente, validadas por las empresas líderes en tecnología
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#001F3D] mb-2">Validación Blockchain</h3>
            <p className="text-gray-600 font-medium">
              Certificados verificables digitalmente con tecnología blockchain
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#001F3D] mb-2">Reconocimiento Global</h3>
            <p className="text-gray-600 font-medium">Aceptados por empresas Fortune 500 en todo el mundo</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#001F3D] mb-2">Estándares Industriales</h3>
            <p className="text-gray-600 font-medium">Basados en competencias requeridas por la industria actual</p>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#4CAF50] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#001F3D] mb-1">{cert.name}</h3>
                    <Badge variant="outline" className="text-xs">
                      {cert.category}
                    </Badge>
                  </div>
                  <Badge
                    className={`text-xs ${
                      cert.level === "Avanzado"
                        ? "bg-red-100 text-red-800"
                        : cert.level === "Intermedio"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800"
                    }`}
                  >
                    {cert.level}
                  </Badge>
                </div>

                <p className="text-gray-600 text-sm mb-4 font-medium">{cert.description}</p>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-bold text-[#001F3D] mb-2">Validado por:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.validatedBy.map((validator, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs border-[#4CAF50] text-[#4CAF50]">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          {validator}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#4CAF50] to-[#001F3D] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">¿Listo para obtener tu certificación?</h3>
            <p className="text-lg mb-6 opacity-90">
              Únete a miles de profesionales que han transformado sus carreras con nuestras certificaciones
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold">10,000+</div>
                <div className="text-sm opacity-80">Certificados emitidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">95%</div>
                <div className="text-sm opacity-80">Tasa de empleabilidad</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm opacity-80">Empresas asociadas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
