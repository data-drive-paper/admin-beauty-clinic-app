"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { GuidedTour } from "./guided-tour"
import { Play, X } from "lucide-react"

/**
 * 🧪 TESTING COMPONENT - DELETE THIS FILE AFTER TESTING
 *
 * This component is for testing the guided tour.
 * To remove:
 * 1. Delete this file: components/tour-test-button.tsx
 * 2. Remove import from app/dashboard/page.tsx
 * 3. Remove <TourTestButton /> from dashboard render
 */

export function TourTestButton() {
  const [showTour, setShowTour] = useState(false)

  const tourSteps = [
    {
      target: '[data-tour="sidebar-dashboard"]',
      title: "Welcome to Your Dashboard! 🎉",
      description: `This is your command center. Here you'll see an overview of your bookings, revenue, and key metrics at a glance.`,
      position: "right" as const,
      highlight: true
    },
    {
      target: '[data-tour="sidebar-calendar"]',
      title: "Calendar & Scheduling 📅",
      description: `Manage all your bookings here. View appointments in calendar or list mode, create new bookings, and track your schedule.`,
      position: "right" as const,
      highlight: true
    },
    {
      target: '[data-tour="sidebar-clients"]',
      title: `Your Customers 👥`,
      description: `Manage your customers database. Add new customers, view their history, and track their preferences.`,
      position: "right" as const,
      highlight: true
    },
    {
      target: '[data-tour="sidebar-staff"]',
      title: `Manage Your Staff 👨‍💼`,
      description: `Add and manage your staff. Set their schedules, assign services, and track their performance.`,
      position: "right" as const,
      highlight: true
    },
    {
      target: '[data-tour="sidebar-treatments"]',
      title: `Your Products ⭐`,
      description: `Create and manage your products. Set prices, durations, and assign them to your staff.`,
      position: "right" as const,
      highlight: true
    },
    {
      target: '[data-tour="sidebar-walkin"]',
      title: "Walk-in Bookings 🚶",
      description: `Quick booking feature for walk-in customers. Perfect for handling last-minute appointments without going through the full booking flow.`,
      position: "right" as const,
      highlight: true
    },
    {
      target: '[data-tour="sidebar-reports"]',
      title: "Reports & Analytics 📊",
      description: `View detailed reports about your business performance. Track revenue, popular products, and staff performance.`,
      position: "right" as const,
      highlight: true
    },
    {
      target: '[data-tour="sidebar-withdrawal"]',
      title: "Manage Your Earnings 💰",
      description: "Track your earnings and request withdrawals. Monitor your revenue and manage your finances all in one place.",
      position: "right" as const,
      highlight: true
    },
    {
      target: '[data-tour="sidebar-settings"]',
      title: "Settings & Customization ⚙️",
      description: "Customize your workspace. Update business information, change terminology, manage categories, and configure your preferences.",
      position: "right" as const,
      highlight: true
    },
  ]

  const handleStartTour = () => {
    // Clear FTUE completed flag to allow testing
    localStorage.removeItem('ftue-completed')
    setShowTour(true)
  }

  const handleCompleteTour = () => {
    setShowTour(false)
    // Don't set ftue-completed so you can test again
  }

  const handleSkipTour = () => {
    setShowTour(false)
    // Don't set ftue-completed so you can test again
  }

  return (
    <>
      {/* Fixed button in bottom-right corner */}
      <div className="fixed bottom-6 right-6 z-[9999]">
        <Button
          onClick={handleStartTour}
          className="h-14 px-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-2xl gap-2 animate-pulse"
          size="lg"
        >
          <Play className="h-5 w-5" />
          🧪 Test Tour
        </Button>
      </div>

      {/* Tour component */}
      {showTour && (
        <GuidedTour
          steps={tourSteps}
          onComplete={handleCompleteTour}
          onSkip={handleSkipTour}
        />
      )}
    </>
  )
}