import { BookOpen, Target, Trophy } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: BookOpen,
      title: "Elige un bootcamp",
      description: "Selecciona entre nuestros bootcamps especializados diseñados por expertos de la industria.",
    },
    {
      icon: Target,
      title: "Completa teoría + desafío",
      description: "Aprende conceptos clave y aplícalos inmediatamente en proyectos prácticos reales.",
    },
    {
      icon: Trophy,
      title: "Gana tokens y certificado",
      description: "Recibe recompensas tokenizadas y certificaciones reconocidas por la industria.",
    },
  ]

  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001F3D] mb-4">Cómo funciona</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Tres simples pasos para transformar tu carrera profesional
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-200">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gray-200 -translate-x-1/2" />
                )}
              </div>
              <h3 className="text-xl font-bold text-[#001F3D] mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
