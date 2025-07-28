import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, BarChart3 } from "lucide-react"
import Image from "next/image"

export default function CourseCatalog() {
  const courses = [
    {
      title: "React & TypeScript Avanzado",
      duration: "4 min",
      practice: "85%",
      image: "/images/courses/react-typescript.png",
      category: "Frontend",
      level: "Avanzado",
    },
    {
      title: "Node.js & APIs REST",
      duration: "5 min",
      practice: "90%",
      image: "/images/courses/nodejs-api.png",
      category: "Backend",
      level: "Intermedio",
    },
    {
      title: "Python Data Science",
      duration: "3 min",
      practice: "80%",
      image: "/images/courses/python-data-science.png",
      category: "Data Science",
      level: "Principiante",
    },
    {
      title: "DevOps con Docker",
      duration: "4 min",
      practice: "75%",
      image: "/images/courses/devops-docker.png",
      category: "DevOps",
      level: "Intermedio",
    },
    {
      title: "Machine Learning Básico",
      duration: "5 min",
      practice: "70%",
      image: "/images/courses/machine-learning.png",
      category: "AI/ML",
      level: "Principiante",
    },
    {
      title: "Cybersecurity Fundamentals",
      duration: "3 min",
      practice: "85%",
      image: "/images/courses/cybersecurity.png",
      category: "Seguridad",
      level: "Intermedio",
    },
  ]

  return (
    <section id="cursos" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001F3D] mb-4">Catálogo de Bootcamps</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Cursos intensivos diseñados para maximizar tu aprendizaje práctico
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card
              key={index}
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
                    <Badge variant="secondary" className="bg-white/90 text-[#001F3D]">
                      {course.level}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#001F3D] mb-3">{course.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BarChart3 className="w-4 h-4" />
                    <span className="font-medium">{course.practice} práctica</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-[#001F3D] hover:bg-[#001F3D]/90 text-white transition-all duration-200 hover:scale-105 font-medium">
                  Ver más
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white px-8 py-3 transition-all duration-200 bg-transparent font-medium"
          >
            Ver todos los cursos
          </Button>
        </div>
      </div>
    </section>
  )
}
