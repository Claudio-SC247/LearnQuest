import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-[#F5F5F5] py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            #001F3D 10px,
            #001F3D 11px
          )`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#001F3D] leading-tight">
                Transforma tu teoría en práctica real
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                Bootcamps intensivos, proyectos sandbox y recompensas tokenizadas para futuros profesionales
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#4CAF50] hover:bg-[#45a049] text-white px-8 py-4 text-lg transition-all duration-200 hover:scale-105 font-medium"
              >
                Empieza gratis
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-[#001F3D] text-[#001F3D] hover:bg-[#001F3D] hover:text-white px-8 py-4 text-lg transition-all duration-200 bg-transparent font-medium"
              >
                Ver demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#001F3D]">10K+</div>
                <div className="text-sm text-gray-600 font-medium">Estudiantes activos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#001F3D]">95%</div>
                <div className="text-sm text-gray-600 font-medium">Tasa de finalización</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#001F3D]">500+</div>
                <div className="text-sm text-gray-600 font-medium">Proyectos completados</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/images/hero-collaboration.png"
                alt="Personas colaborando en un entorno digital"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#4CAF50] rounded-full opacity-20 blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#001F3D] rounded-full opacity-10 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
