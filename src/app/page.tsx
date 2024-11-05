"use client"
import { useState } from 'react'
import { Pen, Sparkles, Zap, Users, ChevronRight } from 'lucide-react'
import LandingPageHeader from '@/components/landing-page/header'
import HeroSection from '@/components/landing-page/hero'
import FeaturesSection from '@/components/landing-page/features'
import HowItWorks from '@/components/landing-page/how-it-works'
import Testimonial from '@/components/landing-page/testimonial'
import Pricing from '@/components/landing-page/pricing'
import CTA from '@/components/landing-page/cta'
import Footer from '@/components/landing-page/footer'

export default function ContentCraftLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-gradient-to-b from-purple-50 to-white min-h-screen">
      <LandingPageHeader />
      <main>

        <HeroSection />
        {/* Features section */}
        <FeaturesSection />
        {/* How it works section */}
        <HowItWorks />

        {/* Testimonial section */}

        <Testimonial />
        {/* Pricing section */}
        <Pricing />

        {/* CTA section */}
        <CTA />

      </main>
      <Footer />

    </div>
  )
}