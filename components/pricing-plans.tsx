import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"

export default function PricingPlans() {
  const plans = [
    {
      name: "Gratis",
      price: "0",
      period: "siempre",
      description: "Perfecto para empezar tu journey",
      features: [
        { name: "Acceso a 3 cursos básicos", included: true },
        { name: "50 tokens por mes", included: true },
        { name: "Proyectos sandbox limitados", included: true },
        { name: "Comunidad Discord", included: true },
        { name: "Mentoría personalizada", included: false },
        { name: "Certificaciones oficiales", included: false },
        { name: "Acceso a cursos premium", included: false },
        { name: "Soporte prioritario", included: false },
      ],
      cta: "Empezar gratis",
      popular: false,
    },
    {
      name: "Básico",
      price: "29",
      period: "mes",
      description: "Para estudiantes comprometidos",
      features: [
        { name: "Acceso a todos los cursos", included: true },
        { name: "500 tokens por mes", included: true },
        { name: "Proyectos sandbox ilimitados", included: true },
        { name: "Comunidad Discord", included: true },
        { name: "2 sesiones de mentoría/mes", included: true },
        { name: "Certificaciones oficiales", included: true },
        { name: "Acceso a cursos premium", included: false },
        { name: "Soporte prioritario", included: false },
      ],
      cta: "Elegir Básico",
      popular: true,
    },
    {
      name: "Premium",
      price: "79",
      period: "mes",
      description: "Para futuros profesionales",
      features: [
        { name: "Acceso a todos los cursos", included: true },
        { name: "1500 tokens por mes", included: true },
        { name: "Proyectos sandbox ilimitados", included: true },
        { name: "Comunidad Discord", included: true },
        { name: "Mentoría ilimitada", included: true },
        { name: "Certificaciones oficiales", included: true },
        { name: "Acceso a cursos premium", included: true },
        { name: "Soporte prioritario", included: true },
      ],
      cta: "Elegir Premium",
      popular: false,
    },
  ]

  return (
    <section id="precios" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001F3D] mb-4">Planes y Precios</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Elige el plan que mejor se adapte a tus objetivos de aprendizaje
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-0 shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                plan.popular ? "bg-gradient-to-b from-[#4CAF50] to-[#45a049] text-white scale-105" : "bg-white"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-[#001F3D] text-white px-4 py-1">Más Popular</Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-[#001F3D]"}`}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-[#001F3D]"}`}>
                    €{plan.price}
                  </span>
                  <span className={`text-lg ${plan.popular ? "text-white/80" : "text-gray-600"} font-medium`}>
                    /{plan.period}
                  </span>
                </div>
                <p className={`${plan.popular ? "text-white/90" : "text-gray-600"} font-medium`}>{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check className={`w-5 h-5 ${plan.popular ? "text-white" : "text-[#4CAF50]"}`} />
                    ) : (
                      <X className={`w-5 h-5 ${plan.popular ? "text-white/50" : "text-gray-400"}`} />
                    )}
                    <span
                      className={`${
                        feature.included
                          ? plan.popular
                            ? "text-white"
                            : "text-gray-900"
                          : plan.popular
                            ? "text-white/50"
                            : "text-gray-400"
                      } font-medium`}
                    >
                      {feature.name}
                    </span>
                  </div>
                ))}
              </CardContent>

              <CardFooter className="pt-8">
                <Button
                  className={`w-full transition-all duration-200 hover:scale-105 ${
                    plan.popular
                      ? "bg-white text-[#4CAF50] hover:bg-gray-100"
                      : "bg-[#4CAF50] hover:bg-[#45a049] text-white"
                  } font-medium`}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4 font-medium">¿Necesitas un plan empresarial?</p>
          <Button
            variant="outline"
            className="border-[#001F3D] text-[#001F3D] hover:bg-[#001F3D] hover:text-white bg-transparent font-medium"
          >
            Contactar ventas
          </Button>
        </div>
      </div>
    </section>
  )
}
