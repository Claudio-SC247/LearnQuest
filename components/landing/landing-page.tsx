"use client"
import Header from "@/components/landing/header"
import HeroSection from "@/components/landing/hero-section"
import CourseCatalog from "@/components/landing/course-catalog"
import HowItWorks from "@/components/landing/how-it-works"
import Testimonials from "@/components/landing/testimonials"
import Certifications from "@/components/landing/certifications"
import LearningPathSection from "@/components/landing/learning-path-section"
import AboutUs from "@/components/landing/about-us"
import Blog from "@/components/landing/blog"
import Footer from "@/components/landing/footer"

interface LandingPageProps {
  onLogin: () => void
  onRegister: () => void
  onGeneratePath: () => void
}

export default function LandingPage({ onLogin, onRegister, onGeneratePath }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header onLogin={onLogin} onRegister={onRegister} />
      <HeroSection onRegister={onRegister} />
      <CourseCatalog />
      <HowItWorks />
      <Testimonials />
      <Certifications />
      <LearningPathSection onGeneratePath={onGeneratePath} />
      <AboutUs />
      <Blog />
      <Footer />
    </div>
  )
}
