import React from 'react'
import { Pen, Sparkles, Zap, Users, ChevronRight } from 'lucide-react'
const FeaturesSection = () => {
  return (
    <div className="py-16 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Craft Content Like Never Before
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Discover the tools that will revolutionize your content creation process.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {[
              {
                name: 'AI-Powered Writing Assistance',
                description: 'Get intelligent suggestions and auto-completions as you write.',
                icon: Sparkles,
              },
              {
                name: 'Real-time Collaboration',
                description: 'Work seamlessly with your team in real-time on any project.',
                icon: Users,
              },
              {
                name: 'Smart Templates',
                description: 'Choose from a variety of templates to jumpstart your content creation.',
                icon: Pen,
              },
              {
                name: 'Instant Publishing',
                description: 'Publish your content to multiple platforms with a single click.',
                icon: Zap,
              },
            ].map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default FeaturesSection