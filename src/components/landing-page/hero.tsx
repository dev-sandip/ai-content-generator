import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
          <div className="absolute inset-0">
            <Image
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              alt="People working on laptops"
              width={2850}
              height={1900}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-teal-700 mix-blend-multiply"></div>
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-white">ContentCraft</span>
              <span className="block text-teal-200">Craft your content effortlessly</span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-center text-xl text-teal-100 sm:max-w-3xl">
              ContentCraft empowers you to craft high-quality, engaging content with ease, transforming ideas into compelling narratives effortlessly.
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                <a
                  href="#"
                  className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-purple-700 bg-white hover:bg-teal-50 sm:px-8"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                >
                  Live demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection