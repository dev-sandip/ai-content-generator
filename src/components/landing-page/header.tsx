import { Pen } from 'lucide-react'
import React from 'react'

const LandingPageHeader = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-purple-500 lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">ContentCraft</span>
              <Pen className="h-8 w-auto text-purple-600" />
            </a>
            <div className="hidden ml-10 space-x-8 lg:block">
              <a href="#features" className="text-base font-medium text-gray-700 hover:text-purple-600">Features</a>
              <a href="#how-it-works" className="text-base font-medium text-gray-700 hover:text-purple-600">How it Works</a>
              <a href="#pricing" className="text-base font-medium text-gray-700 hover:text-purple-600">Pricing</a>
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <a href="#" className="inline-block bg-purple-600 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-purple-700">Sign up</a>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          <a href="#features" className="text-base font-medium text-gray-700 hover:text-purple-600">Features</a>
          <a href="#how-it-works" className="text-base font-medium text-gray-700 hover:text-purple-600">How it Works</a>
          <a href="#pricing" className="text-base font-medium text-gray-700 hover:text-purple-600">Pricing</a>
        </div>
      </nav>
    </header>
  )
}

export default LandingPageHeader