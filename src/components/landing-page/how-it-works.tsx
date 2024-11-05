import React from 'react'

const HowItWorks = () => {
  return (
    <div className="bg-gray-50 py-16" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">How it Works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Simple Steps to Amazing Content
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Follow these easy steps to transform your ideas into engaging content.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {[
              { step: '01', title: 'Choose a Template', description: 'Select from our wide range of professionally designed templates.' },
              { step: '02', title: 'Write and Collaborate', description: 'Use our AI-powered editor to craft your content and collaborate with your team.' },
              { step: '03', title: 'Publish and Share', description: 'With one click, publish your content to multiple platforms or share it with your audience.' },
            ].map((item) => (
              <div key={item.title} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                  {item.step}
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.title}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}

export default HowItWorks