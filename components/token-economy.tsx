import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Coins, Gift, Trophy, Zap } from "lucide-react"

export default function TokenEconomy() {
  const tokenFeatures = [
    {
      icon: Zap,
      title: "Gana tokens completando cursos",
      description: "Cada lección, proyecto y desafío completado te otorga tokens",
    },
    {
      icon: Trophy,
      title: "Desbloquea contenido premium",
      description: "Usa tus tokens para acceder a cursos avanzados y mentoría",
    },
    {
      icon: Gift,
      title: "Canjea por recompensas",
      description: "Intercambia tokens por certificaciones, swag y descuentos",
    },
    {
      icon: Coins,
      title: "Participa en competencias",
      description: "Compite con otros estudiantes y gana tokens extra",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#001F3D] mb-6">Economía de Tokens</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">
              Aprende, gana y desbloquea nuevas oportunidades con nuestro sistema de recompensas gamificado.
            </p>

            <div className="space-y-6">
              {tokenFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4CAF50]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-[#4CAF50]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#001F3D] mb-2">{feature.title}</h3>
                    <p className="text-gray-600 font-medium">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="mt-8 bg-[#4CAF50] hover:bg-[#45a049] text-white transition-all duration-200 hover:scale-105 font-medium">
              Descubre la economía
            </Button>
          </div>

          {/* Token Progress Visualization */}
          <div className="relative">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-[#4CAF50] to-[#45a049] text-white">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold mb-2">1,250</div>
                  <div className="text-white/80 font-medium">Tokens ganados este mes</div>
                </div>

                {/* Progress Bars */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Cursos completados</span>
                      <span className="font-medium">85%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full" style={{ width: "85%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Proyectos finalizados</span>
                      <span className="font-medium">70%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full" style={{ width: "70%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Desafíos superados</span>
                      <span className="font-medium">92%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full" style={{ width: "92%" }} />
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <div className="text-sm text-white/80 mb-2 font-medium">Próxima recompensa en</div>
                  <div className="text-2xl font-bold">250 tokens</div>
                </div>
              </CardContent>
            </Card>

            {/* Floating tokens */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center text-white font-bold animate-bounce">
              <Coins className="w-4 h-4" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#001F3D] rounded-full flex items-center justify-center text-white font-bold animate-pulse">
              <Trophy className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
