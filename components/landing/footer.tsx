"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Github } from "lucide-react"

export default function Footer() {
  const footerLinks = {
    company: [
      { name: "Sobre nosotros", href: "#quienes-somos" },
      { name: "Nuestro equipo", href: "#quienes-somos" },
      { name: "Carreras", href: "#" },
      { name: "Prensa", href: "#" },
    ],
    resources: [
      { name: "Blog", href: "#blog" },
      { name: "Ayuda", href: "#" },
      { name: "Documentación", href: "#" },
      { name: "Comunidad", href: "#" },
    ],
    legal: [
      { name: "Términos de uso", href: "#" },
      { name: "Política de privacidad", href: "#" },
      { name: "Cookies", href: "#" },
      { name: "GDPR", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/learnquest", name: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/learnquest", name: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/learnquest", name: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/learnquest", name: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com/learnquest", name: "YouTube" },
    { icon: Github, href: "https://github.com/learnquest", name: "GitHub" },
  ]

  const companies = [
    { name: "Google", logo: "/images/companies/google.png" },
    { name: "Microsoft", logo: "/images/companies/microsoft.png" },
    { name: "Amazon", logo: "/images/companies/amazon.png" },
    { name: "Meta", logo: "/images/companies/meta.png" },
    { name: "Netflix", logo: "/images/companies/netflix.png" },
    { name: "Spotify", logo: "/images/companies/spotify.png" },
    { name: "Uber", logo: "/images/companies/uber.png" },
    { name: "Airbnb", logo: "/images/companies/airbnb.png" },
  ]

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <footer className="bg-[#001F3D] text-white">
      {/* Companies Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Nuestros graduados trabajan en</h3>
            <p className="text-white/80 font-medium">Empresas líderes que confían en la formación de LearnQuest</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {companies.map((company, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-white/60 font-bold text-xs">{company.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">LearnQuest</h3>
              <p className="text-gray-300 leading-relaxed mb-6 font-medium">
                Transformamos la educación técnica con microaprendizaje gamificado, proyectos prácticos y una comunidad
                de futuros profesionales.
              </p>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-4">Mantente actualizado</h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Tu email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 font-medium"
                />
                <Button className="bg-[#4CAF50] hover:bg-[#45a049] text-white font-medium">Suscríbete</Button>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-[#4CAF50] transition-colors font-medium text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-[#4CAF50] transition-colors font-medium text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-[#4CAF50] transition-colors font-medium">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm font-medium">© 2024 LearnQuest. Todos los derechos reservados.</p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#4CAF50] transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="text-sm text-gray-400 font-medium">
              <span>contacto@learnquest.com | +34 900 123 456</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
