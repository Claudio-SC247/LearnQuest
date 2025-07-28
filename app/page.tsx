"use client"

import { useState } from "react"
import LandingPage from "@/components/landing/landing-page"
import LoginPage from "@/components/auth/login-page"
import RegisterModal from "@/components/auth/register-modal"
import Dashboard from "@/components/dashboard/dashboard"
import ModuleDetail from "@/components/modules/module-detail"
import GamifiedChallenge from "@/components/modules/gamified-challenge"
import SandboxProject from "@/components/modules/sandbox-project"
import AIFeedback from "@/components/modules/ai-feedback"
import MentorFeedback from "@/components/modules/mentor-feedback"
import ModuleCompletion from "@/components/modules/module-completion"
import ProgressPage from "@/components/progress/progress-page"
import UserProfile from "@/components/profile/user-profile"
import TokenStore from "@/components/store/token-store"
import LearningPathGenerator from "@/components/learning/learning-path-generator"

export type AppStep =
  | "landing"
  | "login"
  | "dashboard"
  | "module-detail"
  | "challenge"
  | "sandbox"
  | "ai-feedback"
  | "feedback"
  | "completion"
  | "progress"
  | "profile"
  | "store"
  | "learning-path"

export default function App() {
  const [currentStep, setCurrentStep] = useState<AppStep>("landing")
  const [showRegisterModal, setShowRegisterModal] = useState(false)
  const [selectedModule, setSelectedModule] = useState<any>(null)
  const [user, setUser] = useState<any>(null)
  const [tokensEarned, setTokensEarned] = useState(0)

  const navigateToStep = (step: AppStep, data?: any) => {
    setCurrentStep(step)
    if (data) {
      if (step === "module-detail") setSelectedModule(data)
      if (step === "login" || step === "dashboard") setUser(data)
      if (step === "completion" && data.tokensEarned) setTokensEarned(data.tokensEarned)
    }
  }

  const handleLogout = () => {
    setUser(null)
    setSelectedModule(null)
    setCurrentStep("landing")
  }

  const renderCurrentStep = () => {
    switch (currentStep) {
      case "landing":
        return (
          <LandingPage
            onLogin={() => navigateToStep("login")}
            onRegister={() => setShowRegisterModal(true)}
            onGeneratePath={() => navigateToStep("learning-path")}
          />
        )
      case "login":
        return (
          <>
            <LoginPage
              onLogin={(userData) => navigateToStep("dashboard", userData)}
              onShowRegister={() => setShowRegisterModal(true)}
              onBack={() => navigateToStep("landing")}
            />
            <RegisterModal
              isOpen={showRegisterModal}
              onClose={() => setShowRegisterModal(false)}
              onRegisterSuccess={() => {
                setShowRegisterModal(false)
                navigateToStep("login")
              }}
            />
          </>
        )
      case "dashboard":
        return (
          <Dashboard
            user={user}
            onSelectModule={(module) => navigateToStep("module-detail", module)}
            onProfile={() => navigateToStep("profile")}
            onStore={() => navigateToStep("store")}
            onLogout={handleLogout}
          />
        )
      case "module-detail":
        return (
          <ModuleDetail
            module={selectedModule}
            onStartCourse={() => navigateToStep("challenge")}
            onBack={() => navigateToStep("dashboard")}
          />
        )
      case "challenge":
        return (
          <GamifiedChallenge
            module={selectedModule}
            onContinue={() => navigateToStep("sandbox")}
            onBack={() => navigateToStep("module-detail")}
          />
        )
      case "sandbox":
        return (
          <SandboxProject
            module={selectedModule}
            onSubmit={() => navigateToStep("ai-feedback")}
            onBack={() => navigateToStep("challenge")}
          />
        )
      case "ai-feedback":
        return (
          <AIFeedback
            module={selectedModule}
            onContinue={() => navigateToStep("feedback")}
            onBack={() => navigateToStep("sandbox")}
          />
        )
      case "feedback":
        return (
          <MentorFeedback
            module={selectedModule}
            onContinue={() => navigateToStep("completion")}
            onBack={() => navigateToStep("ai-feedback")}
          />
        )
      case "completion":
        return (
          <ModuleCompletion
            module={selectedModule}
            tokensEarned={tokensEarned}
            onGoToProgress={() => navigateToStep("progress")}
            onBackToHome={() => navigateToStep("landing")}
          />
        )
      case "progress":
        return <ProgressPage user={user} onExploreCourses={() => navigateToStep("dashboard")} onLogout={handleLogout} />
      case "profile":
        return (
          <UserProfile
            user={user}
            onBack={() => navigateToStep("dashboard")}
            onStore={() => navigateToStep("store")}
            onLogout={handleLogout}
          />
        )
      case "store":
        return (
          <TokenStore
            user={user}
            onBack={() => navigateToStep("dashboard")}
            onProfile={() => navigateToStep("profile")}
          />
        )
      case "learning-path":
        return (
          <LearningPathGenerator onBack={() => navigateToStep("landing")} onLogin={() => navigateToStep("login")} />
        )
      default:
        return (
          <LandingPage
            onLogin={() => navigateToStep("login")}
            onRegister={() => setShowRegisterModal(true)}
            onGeneratePath={() => navigateToStep("learning-path")}
          />
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {renderCurrentStep()}
      <RegisterModal
        isOpen={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        onRegisterSuccess={() => {
          setShowRegisterModal(false)
          navigateToStep("login")
        }}
      />
    </div>
  )
}
