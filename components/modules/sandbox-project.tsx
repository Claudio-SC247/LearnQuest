"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Upload, FileText, CheckCircle } from "lucide-react"

interface SandboxProjectProps {
  module: any
  onSubmit: () => void
  onBack: () => void
}

export default function SandboxProject({ module, onSubmit, onBack }: SandboxProjectProps) {
  const [projectText, setProjectText] = useState("")
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    setUploadedFiles([...uploadedFiles, ...files])
  }

  const handleSubmitProject = () => {
    setIsSubmitted(true)
    setTimeout(() => {
      onSubmit()
    }, 2000)
  }

  const projectInstructions = {
    "React & TypeScript Avanzado":
      "Crea un componente React con TypeScript que maneje estado complejo y incluya validación de props.",
    "Node.js & APIs REST":
      "Desarrolla una API REST con al menos 3 endpoints que incluya autenticación y manejo de errores.",
    "Python Data Science": "Realiza un análisis de datos usando pandas y matplotlib con un dataset de tu elección.",
    "DevOps con Docker": "Crea un Dockerfile para una aplicación web y documenta el proceso de containerización.",
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={onBack}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div className="text-2xl font-bold text-[#001F3D]">LearnQuest</div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Project Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#001F3D] mb-4">Proyecto Sandbox</h1>
            <p className="text-lg text-gray-600 font-medium">Aplica tus conocimientos en un proyecto práctico</p>
          </div>

          {!isSubmitted ? (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Instructions */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-[#001F3D] mb-4">Instrucciones del Proyecto</h2>
                  <div className="space-y-4">
                    <p className="text-gray-700 font-medium leading-relaxed">
                      {projectInstructions[module.title] ||
                        "Completa el proyecto siguiendo las mejores prácticas aprendidas en el módulo."}
                    </p>

                    <div className="bg-[#4CAF50]/10 p-4 rounded-lg">
                      <h3 className="font-bold text-[#001F3D] mb-2">Criterios de evaluación:</h3>
                      <ul className="text-sm text-gray-700 space-y-1 font-medium">
                        <li>• Implementación correcta de los conceptos</li>
                        <li>• Código limpio y bien documentado</li>
                        <li>• Manejo adecuado de errores</li>
                        <li>• Aplicación de mejores prácticas</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-bold text-[#001F3D] mb-2">Recursos disponibles:</h3>
                      <ul className="text-sm text-gray-700 space-y-1 font-medium">
                        <li>• Documentación oficial</li>
                        <li>• Ejemplos de código del módulo</li>
                        <li>• Comunidad de estudiantes</li>
                        <li>• Soporte del mentor</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Submission Area */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-[#001F3D] mb-4">Entrega tu Proyecto</h2>

                  {/* Text Area */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Descripción del proyecto</label>
                      <Textarea
                        value={projectText}
                        onChange={(e) => setProjectText(e.target.value)}
                        placeholder="Describe tu implementación, decisiones técnicas y cualquier desafío que hayas enfrentado..."
                        rows={6}
                        className="w-full"
                      />
                    </div>

                    {/* File Upload */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Archivos del proyecto</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#4CAF50] transition-colors">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-2 font-medium">
                          Arrastra archivos aquí o haz clic para seleccionar
                        </p>
                        <input type="file" multiple onChange={handleFileUpload} className="hidden" id="file-upload" />
                        <label
                          htmlFor="file-upload"
                          className="inline-flex items-center px-4 py-2 bg-[#4CAF50] text-white rounded-lg cursor-pointer hover:bg-[#45a049] transition-colors font-medium"
                        >
                          Seleccionar archivos
                        </label>
                      </div>
                    </div>

                    {/* Uploaded Files */}
                    {uploadedFiles.length > 0 && (
                      <div>
                        <h3 className="text-sm font-medium text-gray-700 mb-2">Archivos subidos:</h3>
                        <div className="space-y-2">
                          {uploadedFiles.map((file, index) => (
                            <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                              <FileText className="w-4 h-4 text-gray-500" />
                              <span className="text-sm font-medium text-gray-700">{file.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Submit Button */}
                    <Button
                      onClick={handleSubmitProject}
                      disabled={!projectText.trim() && uploadedFiles.length === 0}
                      className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white py-3 font-medium"
                    >
                      Entregar Proyecto
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            /* Submitted State */
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <CheckCircle className="w-16 h-16 text-[#4CAF50] mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-[#001F3D] mb-4">¡Proyecto Enviado!</h2>
                <p className="text-gray-600 font-medium mb-6">
                  Tu proyecto ha sido enviado exitosamente. Nuestro mentor lo revisará y te proporcionará feedback
                  detallado para ayudarte a mejorar.
                </p>
                <div className="bg-[#4CAF50]/10 p-4 rounded-lg mb-6">
                  <p className="text-[#001F3D] font-medium">
                    Estado: <span className="text-[#4CAF50] font-bold">Enviado</span>
                  </p>
                </div>
                <p className="text-sm text-gray-500 font-medium">Redirigiendo al feedback del mentor...</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
