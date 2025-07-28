import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  const footerLinks = {
    company: [
      { name: "Sobre nosotros", href: "#" },
      { name: "Nuestro equipo", href: "#" },
      { name: "Carreras", href: "#" },
      { name: "Prensa", href: "#" },
    ],
    resources: [
      { name: "Blog", href: "#" },
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
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Youtube, href: "#", name: "YouTube" },
  ]

  return (
    <footer className="bg-[#001F3D] text-white">
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
                  <Link href={link.href} className="text-gray-300 hover:text-[#4CAF50] transition-colors font-medium">
                    {link.name}
                  </Link>
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
                  <Link href={link.href} className="text-gray-300 hover:text-[#4CAF50] transition-colors font-medium">
                    {link.name}
                  </Link>
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
                  <Link href={link.href} className="text-gray-300 hover:text-[#4CAF50] transition-colors font-medium">
                    {link.name}
                  </Link>
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
                <Link
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-[#4CAF50] transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
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
