"use client"

import { useState } from "react"
import WelcomeScreen from "@/components/welcome/welcome-screen"
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

export type AppStep =
  | "welcome"
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

export default function App() {
  const [currentStep, setCurrentStep] = useState<AppStep>("welcome")
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

  const renderCurrentStep = () => {
    switch (currentStep) {
      case "welcome":
        return <WelcomeScreen onLogin={() => navigateToStep("login")} onRegister={() => setShowRegisterModal(true)} />
      case "login":
        return (
          <>
            <LoginPage
              onLogin={(userData) => navigateToStep("dashboard", userData)}
              onShowRegister={() => setShowRegisterModal(true)}
              onBack={() => navigateToStep("welcome")}
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
          />
        )
      case "progress":
        return (
          <ProgressPage
            user={user}
            onExploreCourses={() => navigateToStep("dashboard")}
            onLogout={() => navigateToStep("welcome")}
          />
        )
      case "profile":
        return (
          <UserProfile user={user} onBack={() => navigateToStep("dashboard")} onStore={() => navigateToStep("store")} />
        )
      case "store":
        return (
          <TokenStore
            user={user}
            onBack={() => navigateToStep("dashboard")}
            onProfile={() => navigateToStep("profile")}
          />
        )
      default:
        return <WelcomeScreen onLogin={() => navigateToStep("login")} onRegister={() => setShowRegisterModal(true)} />
    }
  }

  return <div className="min-h-screen bg-gray-50">{renderCurrentStep()}</div>
}
