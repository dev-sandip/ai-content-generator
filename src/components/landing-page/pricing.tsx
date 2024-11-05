import { ChevronRight } from 'lucide-react'
import React from 'react'

const Pricing = () => {
  return (
    <div className="bg-gray-50" id="pricing">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">Pricing Plans</h1>
          <p className="mt-5 text-xl text-gray-500 sm:text-center">
            Start crafting amazing content with our flexible plans
          </p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {[
            {
              name: 'Hobby',
              price: 12,
              features: ['5 Projects', 'Up to 10 collaborators', 'Basic templates', '2GB of storage'],
            },
            {
              name: 'Professional',
              price: 24,
              features: ['Unlimited Projects', 'Unlimited collaborators', 'Advanced templates', '10GB of storage', 'Priority support'],
            },
            {
              name: 'Enterprise',
              price: 32,
              features: ['Unlimited Projects', 'Unlimited collaborators', 'Custom templates', 'Unlimited storage', '24/7 support', 'Advanced analytics'],
            },
          ].map((tier) => (
            <div key={tier.name} className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">{tier.name}</h2>
                <p className="mt-4 text-sm text-gray-500">All the basics for starting a new business</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">${tier.price}</span>{' '}
                  <span className="text-base font-medium text-gray-500">/mo</span>
                </p>
                <a
                  href="#"
                  className="mt-8 block w-full bg-purple-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-purple-700"
                >
                  Buy {tier.name}
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">What&apos;s included</h3>
                <ul role="list" className="mt-6 space-y-4">

                  {tier.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <ChevronRight className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Pricing