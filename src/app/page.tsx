// import { Button } from '@/components/ui/button'
// import Typography from '@/components/ui/typography'
// import Image from 'next/image'
// import Feature from './feature'
// import Article from './article'
// import { MilkOffIcon, SaladIcon, WheatIcon } from 'lucide-react'
// import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative pt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
            <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 flex flex-col justify-center">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                      <span className="block">Nourish Your Body,</span>
                      <span className="block text-[#315A2E]">
                        Elevate Your Life
                      </span>
                    </h1>
                    <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      Discover the perfect balance of taste and nutrition with
                      our carefully crafted meal plans and premium organic
                      ingredients.
                    </p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                      <div className="rounded-md shadow">
                        <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#315A2E] hover:bg-[#264723] md:py-4 md:text-lg md:px-10 transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
                          Explore Meal Plans
                        </button>
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <button className="w-full flex items-center justify-center px-8 py-3 border border-[#315A2E] text-base font-medium rounded-md text-[#315A2E] bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
                          Learn More
                        </button>
                      </div>
                    </div>
                    <div className="mt-8 flex items-center">
                      <div className="flex -space-x-2 mr-4">
                        <img
                          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                          src="https://readdy.ai/api/search-image?query=smiling%20young%20woman%20with%20brown%20hair%20in%20professional%20headshot%20style%20with%20neutral%20background%2C%20high%20quality%20portrait&width=100&height=100&seq=1&orientation=squarish"
                          alt="Customer"
                        />
                        <img
                          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                          src="https://readdy.ai/api/search-image?query=smiling%20young%20man%20with%20short%20dark%20hair%20in%20professional%20headshot%20style%20with%20neutral%20background%2C%20high%20quality%20portrait&width=100&height=100&seq=2&orientation=squarish"
                          alt="Customer"
                        />
                        <img
                          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                          src="https://readdy.ai/api/search-image?query=smiling%20middle%20aged%20woman%20with%20blonde%20hair%20in%20professional%20headshot%20style%20with%20neutral%20background%2C%20high%20quality%20portrait&width=100&height=100&seq=3&orientation=squarish"
                          alt="Customer"
                        />
                      </div>
                      <div>
                        <div className="flex items-center">
                          <div className="flex text-yellow-400">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                          </div>
                          <span className="ml-2 text-gray-700 font-medium">
                            4.8/5
                          </span>
                        </div>
                        <p className="text-sm text-gray-500">
                          from over 2,500 happy customers
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2 mt-10 lg:mt-0">
                    <div className="relative h-64 sm:h-72 md:h-96 lg:h-full">
                      <img
                        className="absolute inset-0 w-full h-full object-cover object-top rounded-lg shadow-xl"
                        src="https://readdy.ai/api/search-image?query=fresh%20organic%20vegetables%20and%20fruits%20arrangement%20with%20vibrant%20colors%20including%20leafy%20greens%2C%20citrus%20fruits%2C%20berries%20and%20colorful%20peppers%20on%20a%20bright%20kitchen%20counter%20with%20soft%20natural%20lighting%20and%20blurred%20kitchen%20background%2C%20professional%20food%20photography&width=800&height=600&seq=4&orientation=landscape"
                        alt="Fresh organic produce"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Featured Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Discover Our Meal Categories
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Tailored nutrition to fit your lifestyle and dietary preferences
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {/* Category 1 */}
            <div className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=healthy%20balanced%20meal%20prep%20containers%20with%20grilled%20chicken%2C%20roasted%20vegetables%20and%20quinoa%20on%20wooden%20table%20with%20soft%20natural%20lighting%2C%20professional%20food%20photography%20with%20minimalist%20clean%20background&width=600&height=400&seq=5&orientation=landscape"
                  alt="Balanced Meals"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Balanced Meals
                </h3>
                <p className="text-gray-600">
                  Perfectly portioned meals with optimal macronutrient balance
                  for sustained energy.
                </p>
                <div className="mt-4 flex items-center text-[#315A2E]">
                  <span className="font-medium">Explore plans</span>
                  <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
                </div>
              </div>
            </div>
            {/* Category 2 */}
            <div className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=plant%20based%20vegan%20meal%20with%20colorful%20vegetables%2C%20legumes%2C%20and%20grains%20in%20beautiful%20arrangement%20on%20plate%20with%20soft%20natural%20lighting%2C%20professional%20food%20photography%20with%20minimalist%20clean%20background&width=600&height=400&seq=6&orientation=landscape"
                  alt="Plant-Based"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Plant-Based
                </h3>
                <p className="text-gray-600">
                  Nutrient-dense, plant-focused meals that are both satisfying
                  and environmentally conscious.
                </p>
                <div className="mt-4 flex items-center text-[#315A2E]">
                  <span className="font-medium">Explore plans</span>
                  <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
                </div>
              </div>
            </div>
            {/* Category 3 */}
            <div className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=high%20protein%20fitness%20meal%20with%20grilled%20salmon%2C%20steamed%20broccoli%20and%20sweet%20potatoes%20on%20white%20plate%20with%20soft%20natural%20lighting%2C%20professional%20food%20photography%20with%20minimalist%20clean%20background&width=600&height=400&seq=7&orientation=landscape"
                  alt="Fitness Focus"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Fitness Focus
                </h3>
                <p className="text-gray-600">
                  High-protein, performance-optimized meals designed to support
                  your active lifestyle.
                </p>
                <div className="mt-4 flex items-center text-[#315A2E]">
                  <span className="font-medium">Explore plans</span>
                  <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Simple steps to healthier eating habits
            </p>
          </div>
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Step 1 */}
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-[#315A2E] text-white text-2xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Choose Your Plan
                </h3>
                <p className="text-gray-600">
                  Select from our range of customizable meal plans tailored to
                  your dietary needs and preferences.
                </p>
              </div>
              {/* Step 2 */}
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-[#315A2E] text-white text-2xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Customize Your Meals
                </h3>
                <p className="text-gray-600">
                  Personalize your weekly menu with our chef-crafted options
                  using premium organic ingredients.
                </p>
              </div>
              {/* Step 3 */}
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-[#315A2E] text-white text-2xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Enjoy Fresh Deliveries
                </h3>
                <p className="text-gray-600">
                  Receive your freshly prepared meals directly to your doorstep
                  in eco-friendly packaging.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#315A2E] hover:bg-[#264723] md:py-4 md:text-lg md:px-10 transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
              Get Started Today
            </button>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Real results from real people
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                {`"The meal plans have transformed my relationship with food. I've
                lost 15 pounds and have more energy than ever before!"`}
              </p>
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full mr-4"
                  src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20smiling%20woman%20in%20her%2030s%20with%20brown%20hair%20against%20neutral%20background%2C%20high%20quality%20portrait&width=100&height=100&seq=8&orientation=squarish"
                  alt="Customer"
                />
                <div>
                  <h4 className="font-medium text-gray-900">Sarah Johnson</h4>
                  <p className="text-gray-500 text-sm">Member since 2024</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                {`"As a busy professional, these meal plans have been a lifesaver.
                Delicious, nutritious, and so convenient!"`}
              </p>
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full mr-4"
                  src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20smiling%20man%20in%20his%2040s%20with%20glasses%20against%20neutral%20background%2C%20high%20quality%20portrait&width=100&height=100&seq=9&orientation=squarish"
                  alt="Customer"
                />
                <div>
                  <h4 className="font-medium text-gray-900">Michael Chen</h4>
                  <p className="text-gray-500 text-sm">Member since 2023</p>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                {`"The variety of meals keeps things interesting, and I love that
                everything is organic. My whole family enjoys these meals!"`}
              </p>
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full mr-4"
                  src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20smiling%20woman%20in%20her%2050s%20with%20short%20blonde%20hair%20against%20neutral%20background%2C%20high%20quality%20portrait&width=100&height=100&seq=10&orientation=squarish"
                  alt="Customer"
                />
                <div>
                  <h4 className="font-medium text-gray-900">Emily Rodriguez</h4>
                  <p className="text-gray-500 text-sm">Member since 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-[#315A2E] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Ready to Transform Your Nutrition?
          </h2>
          <p className="mt-4 text-xl max-w-2xl mx-auto">
            Join thousands of satisfied customers who have improved their health
            with our meal plans.
          </p>
          <div className="mt-8 flex justify-center">
            <button className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-[#315A2E] md:py-4 md:text-lg md:px-10 transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
              Get Started Today
            </button>
          </div>
          <p className="mt-4 text-sm">
            No commitment required. Cancel anytime.
          </p>
        </div>
      </section>
    </div>
  )
}
