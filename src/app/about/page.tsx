// import { Button } from '@/components/ui/button'
// import Typography from '@/components/ui/typography'
// import Image from 'next/image'
// import Feature from '../feature'
// import Article from '../article'
// import { ArrowUpDown, Timer, Workflow } from 'lucide-react'
// import Link from 'next/link'

export default function Page() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative pt-16 overflow-hidden">
        <div className="w-full h-[500px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10"></div>
          <picture>
            <img
              src="https://readdy.ai/api/search-image?query=fresh%20organic%20fruits%20and%20vegetables%20arranged%20artistically%20on%20white%20marble%20counter%2C%20bright%20natural%20lighting%2C%20citrus%20fruits%2C%20leafy%20greens%2C%20strawberries%2C%20clean%20and%20minimal%20styling%2C%20soft%20shadows%2C%20professional%20food%20photography&width=1440&height=500&seq=29&orientation=landscape"
              alt="About Us Hero"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
            />
          </picture>
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl mb-4">
                About Us
              </h1>
              <p className="text-xl text-white/90 max-w-xl">
                {`We're on a mission to transform how people nourish their bodies
                through sustainable, organic meal solutions that prioritize both
                health and environmental responsibility.`}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Section Navigation */}
      <div className="bg-white sticky top-16 z-40 border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-3 scrollbar-hide">
            <a
              href="#history"
              className="text-gray-700 hover:text-[#315A2E] whitespace-nowrap px-1 py-2 text-sm font-medium border-b-2 border-transparent hover:border-[#315A2E] cursor-pointer"
            >
              Our History
            </a>
            <a
              href="#mission"
              className="text-gray-700 hover:text-[#315A2E] whitespace-nowrap px-1 py-2 text-sm font-medium border-b-2 border-transparent hover:border-[#315A2E] cursor-pointer"
            >
              Mission & Values
            </a>
            <a
              href="#team"
              className="text-gray-700 hover:text-[#315A2E] whitespace-nowrap px-1 py-2 text-sm font-medium border-b-2 border-transparent hover:border-[#315A2E] cursor-pointer"
            >
              Our Team
            </a>
            <a
              href="#sustainability"
              className="text-gray-700 hover:text-[#315A2E] whitespace-nowrap px-1 py-2 text-sm font-medium border-b-2 border-transparent hover:border-[#315A2E] cursor-pointer"
            >
              Sustainability
            </a>
            <a
              href="#quality"
              className="text-gray-700 hover:text-[#315A2E] whitespace-nowrap px-1 py-2 text-sm font-medium border-b-2 border-transparent hover:border-[#315A2E] cursor-pointer"
            >
              Quality Commitment
            </a>
          </div>
        </div>
      </div>
      {/* Company History Section */}
      <section id="history" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Journey
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              From humble beginnings to becoming a leader in sustainable
              nutrition
            </p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#315A2E]/20"></div>
            {/* Timeline items */}
            <div className="space-y-12">
              {/* 2018 */}
              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="absolute z-10 w-10 h-10 rounded-full bg-[#315A2E] flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-white"></div>
                  </div>
                </div>
                <div className="relative z-10 flex items-center pt-6">
                  <div className="w-1/2 pr-8 md:pr-12 text-right">
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        2018
                      </h3>
                      <h4 className="text-lg font-semibold text-[#315A2E] mb-3">
                        The Beginning
                      </h4>
                      <p className="text-gray-600">
                        Founded by two nutrition enthusiasts in a small kitchen,
                        we started with a simple goal: make healthy eating
                        accessible and delicious.
                      </p>
                    </div>
                  </div>
                  <div className="w-1/2 pl-8 md:pl-12">
                    <picture>
                      <img
                        src="https://readdy.ai/api/search-image?query=two%2520entrepreneurs%2520working%2520in%2520small%2520kitchen%2520preparing%2520healthy%2520meals%252C%2520surrounded%2520by%2520fresh%2520ingredients%252C%2520bright%2520natural%2520lighting%252C%2520casual%2520professional%2520atmosphere%252C%2520focused%2520expressions%252C%2520sustainable%2520packaging%2520visible%252C%2520high%2520quality%2520professional%2520photography&width=600&height=400&seq=12&orientation=landscape"
                        alt="Company founding"
                        className="w-full h-48 object-cover rounded-lg shadow-md"
                      />
                    </picture>
                  </div>
                </div>
              </div>
              {/* 2020 */}
              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="absolute z-10 w-10 h-10 rounded-full bg-[#315A2E] flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-white"></div>
                  </div>
                </div>
                <div className="relative z-10 flex items-center pt-6">
                  <div className="w-1/2 pr-8 md:pr-12">
                    <picture>
                      <img
                        src="https://readdy.ai/api/search-image?query=modern%2520food%2520production%2520facility%2520with%2520staff%2520in%2520white%2520uniforms%2520and%2520hairnets%252C%2520preparing%2520organic%2520meals%252C%2520clean%2520stainless%2520steel%2520equipment%252C%2520bright%2520lighting%252C%2520professional%2520food%2520preparation%2520environment%252C%2520high%2520quality%2520professional%2520photography&width=600&height=400&seq=13&orientation=landscape"
                        alt="First facility"
                        className="w-full h-48 object-cover rounded-lg shadow-md"
                      />
                    </picture>
                  </div>
                  <div className="w-1/2 pl-8 md:pl-12 text-left">
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        2020
                      </h3>
                      <h4 className="text-lg font-semibold text-[#315A2E] mb-3">
                        First Production Facility
                      </h4>
                      <p className="text-gray-600">
                        With growing demand, we opened our first dedicated
                        production facility, committed to maintaining quality
                        while scaling operations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* 2022 */}
              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="absolute z-10 w-10 h-10 rounded-full bg-[#315A2E] flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-white"></div>
                  </div>
                </div>
                <div className="relative z-10 flex items-center pt-6">
                  <div className="w-1/2 pr-8 md:pr-12 text-right">
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        2022
                      </h3>
                      <h4 className="text-lg font-semibold text-[#315A2E] mb-3">
                        Organic Certification
                      </h4>
                      <p className="text-gray-600">
                        Achieved full organic certification and established
                        partnerships with local farms to ensure the highest
                        quality ingredients.
                      </p>
                    </div>
                  </div>
                  <div className="w-1/2 pl-8 md:pl-12">
                    <picture>
                      <img
                        src="https://readdy.ai/api/search-image?query=organic%2520certification%2520ceremony%2520with%2520team%2520members%2520and%2520local%2520farmers%252C%2520displaying%2520certificate%252C%2520surrounded%2520by%2520fresh%2520produce%252C%2520bright%2520natural%2520lighting%252C%2520professional%2520setting%252C%2520happy%2520expressions%252C%2520high%2520quality%2520professional%2520photography&width=600&height=400&seq=14&orientation=landscape"
                        alt="Organic certification"
                        className="w-full h-48 object-cover rounded-lg shadow-md"
                      />
                    </picture>
                  </div>
                </div>
              </div>
              {/* 2024 */}
              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="absolute z-10 w-10 h-10 rounded-full bg-[#315A2E] flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-white"></div>
                  </div>
                </div>
                <div className="relative z-10 flex items-center pt-6">
                  <div className="w-1/2 pr-8 md:pr-12">
                    <picture>
                      <img
                        src="https://readdy.ai/api/search-image?query=modern%2520eco-friendly%2520office%2520building%2520with%2520solar%2520panels%252C%2520green%2520roof%252C%2520surrounded%2520by%2520landscaped%2520gardens%252C%2520employees%2520entering%2520building%252C%2520bright%2520sunny%2520day%252C%2520sustainable%2520architecture%252C%2520high%2520quality%2520professional%2520photography&width=600&height=400&seq=15&orientation=landscape"
                        alt="New headquarters"
                        className="w-full h-48 object-cover rounded-lg shadow-md"
                      />
                    </picture>
                  </div>
                  <div className="w-1/2 pl-8 md:pl-12 text-left">
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        2024
                      </h3>
                      <h4 className="text-lg font-semibold text-[#315A2E] mb-3">
                        National Expansion
                      </h4>
                      <p className="text-gray-600">
                        Opened our new eco-friendly headquarters and expanded
                        delivery to all 50 states, bringing healthy nutrition to
                        more people than ever.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* 2025 - Present */}
              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="absolute z-10 w-10 h-10 rounded-full bg-[#315A2E] flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-white"></div>
                  </div>
                </div>
                <div className="relative z-10 flex items-center pt-6">
                  <div className="w-1/2 pr-8 md:pr-12 text-right">
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        2025 - Present
                      </h3>
                      <h4 className="text-lg font-semibold text-[#315A2E] mb-3">
                        Looking Forward
                      </h4>
                      <p className="text-gray-600">
                        Today, we continue to innovate with new meal options,
                        enhanced sustainability practices, and community
                        nutrition programs.
                      </p>
                    </div>
                  </div>
                  <div className="w-1/2 pl-8 md:pl-12">
                    <picture>
                      <img
                        src="https://readdy.ai/api/search-image?query=diverse%2520team%2520meeting%2520in%2520modern%2520conference%2520room%2520with%2520glass%2520walls%252C%2520plants%252C%2520digital%2520displays%2520showing%2520meal%2520plans%252C%2520collaborative%2520atmosphere%252C%2520bright%2520natural%2520lighting%252C%2520professional%2520business%2520setting%252C%2520high%2520quality%2520professional%2520photography&width=600&height=400&seq=16&orientation=landscape"
                        alt="Present day"
                        className="w-full h-48 object-cover rounded-lg shadow-md"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mission & Values Section */}
      <section id="mission" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Mission & Values
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Guiding principles that drive everything we do
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <picture>
                  <img
                    src="https://readdy.ai/api/search-image?query=abstract%2520representation%2520of%2520mission%2520and%2520purpose%252C%2520compass%2520pointing%2520north%2520with%2520green%2520elements%252C%2520path%2520forward%252C%2520clean%2520minimalist%2520design%252C%2520symbolic%2520imagery%2520of%2520direction%2520and%2520purpose%252C%2520professional%2520graphic%2520design%252C%2520high%2520quality%2520illustration&width=400&height=400&seq=17&orientation=squarish"
                    alt="Our Mission"
                    className="w-full h-auto rounded-lg"
                  />
                </picture>
              </div>
              <div className="md:w-2/3 md:pl-12">
                <h3 className="text-2xl font-bold text-[#315A2E] mb-4">
                  Our Mission
                </h3>
                <p className="text-xl text-gray-700 italic mb-6">
                  {`"To transform how people nourish their bodies by providing
                  accessible, sustainable, and delicious meal solutions that
                  prioritize both personal health and environmental
                  responsibility."`}
                </p>
                <p className="text-gray-600">
                  We believe that everyone deserves access to nutritious food
                  that supports their wellbeing while respecting our planet. Our
                  mission drives us to continually innovate, educate, and
                  advocate for a healthier food system that benefits all.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#315A2E]/10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-leaf text-2xl text-[#315A2E]"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Sustainability
              </h3>
              <p className="text-gray-600">
                We prioritize environmentally responsible practices in every
                aspect of our business, from ingredient sourcing to packaging
                and delivery.
              </p>
            </div>
            {/* Value 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#315A2E]/10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-heart text-2xl text-[#315A2E]"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wellness</h3>
              <p className="text-gray-600">
                We believe in nourishing the whole person, creating meals that
                support physical health, mental clarity, and emotional
                wellbeing.
              </p>
            </div>
            {/* Value 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#315A2E]/10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-seedling text-2xl text-[#315A2E]"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality</h3>
              <p className="text-gray-600">
                We never compromise on ingredients, preparation methods, or
                flavor. Every meal meets our exacting standards for nutrition
                and taste.
              </p>
            </div>
            {/* Value 4 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#315A2E]/10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-users text-2xl text-[#315A2E]"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Community
              </h3>
              <p className="text-gray-600">
                We foster connections between farmers, chefs, nutritionists, and
                customers, creating a community united by shared values.
              </p>
            </div>
            {/* Value 5 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#315A2E]/10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-lightbulb text-2xl text-[#315A2E]"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Innovation
              </h3>
              <p className="text-gray-600">
                We continuously explore new ingredients, preparation methods,
                and technologies to enhance nutrition, flavor, and
                sustainability.
              </p>
            </div>
            {/* Value 6 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#315A2E]/10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-handshake text-2xl text-[#315A2E]"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Transparency
              </h3>
              <p className="text-gray-600">
                We believe in open communication about our ingredients,
                processes, and business practices, building trust through
                honesty.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Team Members Section */}
      <section id="team" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              The passionate people behind our mission
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="h-80 overflow-hidden">
                <picture>
                  <img
                    src="https://readdy.ai/api/search-image?query=professional%2520portrait%2520of%2520female%2520CEO%2520in%2520her%252040s%252C%2520confident%2520expression%252C%2520business%2520casual%2520attire%252C%2520neutral%2520background%252C%2520warm%2520lighting%252C%2520professional%2520headshot%2520style%252C%2520high%2520quality%2520professional%2520photography&width=600&height=800&seq=18&orientation=portrait"
                    alt="Sarah Johnson"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </picture>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Sarah Johnson
                </h3>
                <p className="text-[#315A2E] font-medium mb-3">
                  Co-Founder & CEO
                </p>
                <p className="text-gray-600 mb-4">
                  With a background in nutrition and business, Sarah leads our
                  company vision and strategic growth initiatives.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#315A2E] transition-colors duration-300 cursor-pointer"
                  >
                    <i className="fab fa-linkedin text-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#315A2E] transition-colors duration-300 cursor-pointer"
                  >
                    <i className="fab fa-twitter text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="h-80 overflow-hidden">
                <picture>
                  <img
                    src="https://readdy.ai/api/search-image?query=professional%2520portrait%2520of%2520male%2520chef%2520in%2520his%252030s%252C%2520smiling%252C%2520wearing%2520chef%2520coat%252C%2520neutral%2520background%252C%2520warm%2520lighting%252C%2520professional%2520headshot%2520style%252C%2520high%2520quality%2520professional%2520photography&width=600&height=800&seq=19&orientation=portrait"
                    alt="Michael Chen"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </picture>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Michael Chen
                </h3>
                <p className="text-[#315A2E] font-medium mb-3">
                  Co-Founder & Head Chef
                </p>
                <p className="text-gray-600 mb-4">
                  A culinary innovator with experience in top restaurants,
                  Michael ensures our meals are both nutritious and delicious.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#315A2E] transition-colors duration-300 cursor-pointer"
                  >
                    <i className="fab fa-linkedin text-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#315A2E] transition-colors duration-300 cursor-pointer"
                  >
                    <i className="fab fa-instagram text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="h-80 overflow-hidden">
                <picture>
                  <img
                    src="https://readdy.ai/api/search-image?query=professional%2520portrait%2520of%2520female%2520nutritionist%2520in%2520her%252030s%252C%2520warm%2520smile%252C%2520business%2520casual%2520attire%252C%2520neutral%2520background%252C%2520warm%2520lighting%252C%2520professional%2520headshot%2520style%252C%2520high%2520quality%2520professional%2520photography&width=600&height=800&seq=20&orientation=portrait"
                    alt="Emily Rodriguez"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </picture>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Emily Rodriguez
                </h3>
                <p className="text-[#315A2E] font-medium mb-3">
                  Lead Nutritionist
                </p>
                <p className="text-gray-600 mb-4">
                  With a PhD in Nutritional Science, Emily designs our meal
                  plans to maximize health benefits and meet diverse dietary
                  needs.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#315A2E] transition-colors duration-300 cursor-pointer"
                  >
                    <i className="fab fa-linkedin text-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#315A2E] transition-colors duration-300 cursor-pointer"
                  >
                    <i className="fab fa-twitter text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* Team Member 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="h-80 overflow-hidden">
                <picture>
                  <img
                    src="https://readdy.ai/api/search-image?query=professional%2520portrait%2520of%2520male%2520operations%2520director%2520in%2520his%252040s%252C%2520confident%2520pose%252C%2520business%2520attire%252C%2520neutral%2520background%252C%2520warm%2520lighting%252C%2520professional%2520headshot%2520style%252C%2520high%2520quality%2520professional%2520photography&width=600&height=800&seq=21&orientation=portrait"
                    alt="David Thompson"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </picture>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  David Thompson
                </h3>
                <p className="text-[#315A2E] font-medium mb-3">
                  Operations Director
                </p>
                <p className="text-gray-600 mb-4">
                  David oversees our production facilities and supply chain,
                  ensuring efficiency while maintaining our quality standards.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#315A2E] transition-colors duration-300 cursor-pointer"
                  >
                    <i className="fab fa-linkedin text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* Team Member 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="h-80 overflow-hidden">
                <picture>
                  <img
                    src="https://readdy.ai/api/search-image?query=professional%2520portrait%2520of%2520female%2520sustainability%2520director%2520in%2520her%252030s%252C%2520friendly%2520expression%252C%2520casual%2520professional%2520attire%252C%2520neutral%2520background%252C%2520warm%2520lighting%252C%2520professional%2520headshot%2520style%252C%2520high%2520quality%2520professional%2520photography&width=600&height=800&seq=22&orientation=portrait"
                    alt="Aisha Patel"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </picture>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Aisha Patel</h3>
                <p className="text-[#315A2E] font-medium mb-3">
                  Sustainability Director
                </p>
                <p className="text-gray-600 mb-4">
                  Aisha leads our environmental initiatives, from sourcing
                  practices to packaging innovation and carbon footprint
                  reduction.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#315A2E] transition-colors duration-300 cursor-pointer"
                  >
                    <i className="fab fa-linkedin text-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#315A2E] transition-colors duration-300 cursor-pointer"
                  >
                    <i className="fab fa-twitter text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* Team Member 6 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="h-80 overflow-hidden">
                <picture>
                  <img
                    src="https://readdy.ai/api/search-image?query=professional%2520portrait%2520of%2520male%2520customer%2520experience%2520manager%2520in%2520his%252030s%252C%2520warm%2520smile%252C%2520business%2520casual%2520attire%252C%2520neutral%2520background%252C%2520warm%2520lighting%252C%2520professional%2520headshot%2520style%252C%2520high%2520quality%2520professional%2520photography&width=600&height=800&seq=23&orientation=portrait"
                    alt="James Wilson"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </picture>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  James Wilson
                </h3>
                <p className="text-[#315A2E] font-medium mb-3">
                  Customer Experience Manager
                </p>
                <p className="text-gray-600 mb-4">
                  James ensures every customer interaction exceeds expectations,
                  from ordering through delivery and beyond.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#315A2E] transition-colors duration-300 cursor-pointer"
                  >
                    <i className="fab fa-linkedin text-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#315A2E] transition-colors duration-300 cursor-pointer"
                  >
                    <i className="fab fa-instagram text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Sustainability Practices Section */}
      <section id="sustainability" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Sustainability Practices
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Committed to nourishing both people and planet
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <picture>
                  <img
                    src="https://readdy.ai/api/search-image?query=sustainable%2520organic%2520farm%2520with%2520rows%2520of%2520vegetables%252C%2520workers%2520harvesting%2520produce%252C%2520beautiful%2520golden%2520hour%2520lighting%252C%2520rich%2520soil%252C%2520irrigation%2520systems%2520visible%252C%2520mountains%2520in%2520background%252C%2520high%2520quality%2520professional%2520photography&width=800&height=500&seq=24&orientation=landscape"
                    alt="Sustainable farming"
                    className="w-full h-64 object-cover"
                  />
                </picture>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Organic Sourcing
                  </h3>
                  <p className="text-gray-600">
                    We partner exclusively with certified organic farms that
                    practice regenerative agriculture. Our ingredients are grown
                    without synthetic pesticides or fertilizers, promoting soil
                    health and biodiversity while producing more nutritious
                    food.
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <i className="fas fa-check text-[#315A2E] mt-1 mr-2"></i>
                      <span>100% certified organic ingredients</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-[#315A2E] mt-1 mr-2"></i>
                      <span>Support for regenerative farming practices</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-[#315A2E] mt-1 mr-2"></i>
                      <span>Seasonal menu planning to reduce food miles</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <picture>
                  <img
                    src="https://readdy.ai/api/search-image?query=eco-friendly%2520packaging%2520materials%2520including%2520compostable%2520containers%252C%2520plant-based%2520plastics%252C%2520recycled%2520paper%2520products%252C%2520arranged%2520on%2520wooden%2520table%252C%2520bright%2520natural%2520lighting%252C%2520green%2520plants%2520in%2520background%252C%2520high%2520quality%2520professional%2520photography&width=800&height=500&seq=25&orientation=landscape"
                    alt="Sustainable packaging"
                    className="w-full h-64 object-cover"
                  />
                </picture>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Sustainable Packaging
                  </h3>
                  <p className="text-gray-600">
                    {`We've reimagined every aspect of our packaging to minimize
                    environmental impact. From compostable meal containers to
                    recyclable shipping materials, we're working toward a
                    zero-waste future.`}
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <i className="fas fa-check text-[#315A2E] mt-1 mr-2"></i>
                      <span>100% compostable or recyclable packaging</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-[#315A2E] mt-1 mr-2"></i>
                      <span>Plant-based insulation materials</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-[#315A2E] mt-1 mr-2"></i>
                      <span>Reusable container program in select markets</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <picture>
                  <img
                    src="https://readdy.ai/api/search-image?query=electric%2520delivery%2520van%2520with%2520green%2520company%2520logo%252C%2520being%2520charged%2520at%2520charging%2520station%252C%2520urban%2520setting%252C%2520bright%2520daylight%252C%2520clean%2520modern%2520vehicle%252C%2520eco-friendly%2520transportation%252C%2520high%2520quality%2520professional%2520photography&width=800&height=500&seq=26&orientation=landscape"
                    alt="Carbon neutral delivery"
                    className="w-full h-64 object-cover"
                  />
                </picture>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Carbon Footprint Reduction
                  </h3>
                  <p className="text-gray-600">
                    {`We're committed to minimizing our carbon footprint across
                    all operations. From our energy-efficient facilities to our
                    electric delivery fleet, we're working toward carbon
                    neutrality.`}
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <i className="fas fa-check text-[#315A2E] mt-1 mr-2"></i>
                      <span>Solar-powered production facilities</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-[#315A2E] mt-1 mr-2"></i>
                      <span>Electric delivery vehicles in urban markets</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-[#315A2E] mt-1 mr-2"></i>
                      <span>Carbon offset program for remaining emissions</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <picture>
                  <img
                    src="https://readdy.ai/api/search-image?query=community%2520garden%2520with%2520diverse%2520group%2520of%2520volunteers%2520working%2520together%252C%2520planting%2520vegetables%252C%2520urban%2520setting%252C%2520bright%2520sunny%2520day%252C%2520community%2520engagement%252C%2520sustainable%2520food%2520education%252C%2520high%2520quality%2520professional%2520photography&width=800&height=500&seq=27&orientation=landscape"
                    alt="Community initiatives"
                    className="w-full h-64 object-cover"
                  />
                </picture>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Community Initiatives
                  </h3>
                  <p className="text-gray-600">
                    {`We believe in giving back to the communities we serve.
                    Through our meal donation program and educational
                    initiatives, we're working to create a more equitable and
                    sustainable food system.`}
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <i className="fas fa-check text-[#315A2E] mt-1 mr-2"></i>
                      <span>One-for-one meal donation program</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-[#315A2E] mt-1 mr-2"></i>
                      <span>
                        Support for community gardens and food education
                      </span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-[#315A2E] mt-1 mr-2"></i>
                      <span>Volunteer opportunities for team members</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#315A2E] hover:bg-[#264723] md:py-4 md:text-lg md:px-10 transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
              Learn More About Our Impact
            </button>
          </div>
        </div>
      </section>
      {/* Quality Commitment Section */}
      <section id="quality" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Quality Commitment
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Uncompromising standards in every meal we prepare
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <picture>
                  <img
                    src="https://readdy.ai/api/search-image?query=chef%2520inspecting%2520fresh%2520organic%2520produce%2520in%2520commercial%2520kitchen%252C%2520carefully%2520examining%2520vegetables%252C%2520bright%2520clean%2520environment%252C%2520food%2520safety%2520practices%2520visible%252C%2520professional%2520culinary%2520setting%252C%2520high%2520quality%2520professional%2520photography&width=600&height=800&seq=28&orientation=portrait"
                    alt="Quality inspection"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </picture>
                <div className="mt-8 bg-gray-50 rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Our Certifications
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-[#315A2E]/10 rounded-full flex items-center justify-center mr-4">
                        <i className="fas fa-certificate text-[#315A2E]"></i>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          USDA Organic
                        </h4>
                        <p className="text-sm text-gray-600">
                          Certified since 2022
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-[#315A2E]/10 rounded-full flex items-center justify-center mr-4">
                        <i className="fas fa-leaf text-[#315A2E]"></i>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Non-GMO Project Verified
                        </h4>
                        <p className="text-sm text-gray-600">
                          Certified since 2022
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-[#315A2E]/10 rounded-full flex items-center justify-center mr-4">
                        <i className="fas fa-check-circle text-[#315A2E]"></i>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          B Corp Certified
                        </h4>
                        <p className="text-sm text-gray-600">
                          Certified since 2023
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-[#315A2E]/10 rounded-full flex items-center justify-center mr-4">
                        <i className="fas fa-recycle text-[#315A2E]"></i>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Zero Waste Certified
                        </h4>
                        <p className="text-sm text-gray-600">
                          Certified since 2024
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-8">
              {/* Ingredient Sourcing */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#315A2E]/10 rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-carrot text-2xl text-[#315A2E]"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Ingredient Sourcing
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    We believe exceptional meals begin with exceptional
                    ingredients. Our sourcing team works directly with organic
                    farmers and producers who share our commitment to quality
                    and sustainability.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">
                        Local First Policy
                      </h4>
                      <p className="text-sm text-gray-600">
                        We source ingredients from within 250 miles of our
                        facilities whenever possible, reducing food miles and
                        supporting local economies.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">
                        Seasonal Menus
                      </h4>
                      <p className="text-sm text-gray-600">
                        Our menus change with the seasons to showcase
                        ingredients at their peak flavor and nutritional value.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">
                        Transparent Supply Chain
                      </h4>
                      <p className="text-sm text-gray-600">
                        We can trace every ingredient back to its source,
                        ensuring quality and ethical production at every step.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">
                        Fair Trade Commitment
                      </h4>
                      <p className="text-sm text-gray-600">
                        For imported ingredients, we partner exclusively with
                        Fair Trade certified suppliers who ensure fair wages and
                        working conditions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Food Safety */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#315A2E]/10 rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-shield-alt text-2xl text-[#315A2E]"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Food Safety & Quality Control
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Safety is non-negotiable. Our comprehensive food safety
                    program exceeds industry standards, with rigorous testing
                    and quality control measures at every stage of production.
                  </p>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#315A2E]/10 rounded-full flex items-center justify-center mr-4 mt-1">
                        <i className="fas fa-microscope text-[#315A2E]"></i>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">
                          Comprehensive Testing
                        </h4>
                        <p className="text-sm text-gray-600">
                          We conduct regular microbiological and nutritional
                          testing on all ingredients and finished meals to
                          ensure safety and quality.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#315A2E]/10 rounded-full flex items-center justify-center mr-4 mt-1">
                        <i className="fas fa-user-shield text-[#315A2E]"></i>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">
                          Trained Professionals
                        </h4>
                        <p className="text-sm text-gray-600">
                          Our team includes certified food safety professionals
                          who oversee all aspects of our production process.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#315A2E]/10 rounded-full flex items-center justify-center mr-4 mt-1">
                        <i className="fas fa-clipboard-check text-[#315A2E]"></i>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">
                          HACCP Compliance
                        </h4>
                        <p className="text-sm text-gray-600">
                          We follow Hazard Analysis Critical Control Point
                          principles to identify and control potential food
                          safety hazards.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#315A2E]/10 rounded-full flex items-center justify-center mr-4 mt-1">
                        <i className="fas fa-temperature-high text-[#315A2E]"></i>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">
                          Cold Chain Integrity
                        </h4>
                        <p className="text-sm text-gray-600">
                          Our proprietary packaging and delivery system ensures
                          meals remain at safe temperatures from our kitchen to
                          your door.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Nutritional Excellence */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#315A2E]/10 rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-heartbeat text-2xl text-[#315A2E]"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Nutritional Excellence
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Every meal is designed by our team of nutritionists to
                    provide optimal nutrition while satisfying your taste buds.
                    We believe healthy eating should never feel like a
                    compromise.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="w-12 h-12 bg-[#315A2E]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <i className="fas fa-balance-scale text-[#315A2E]"></i>
                      </div>
                      <h4 className="font-medium text-gray-900 mb-2">
                        Balanced Macronutrients
                      </h4>
                      <p className="text-sm text-gray-600">
                        Optimal ratios of proteins, carbs, and healthy fats for
                        sustained energy.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="w-12 h-12 bg-[#315A2E]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <i className="fas fa-apple-alt text-[#315A2E]"></i>
                      </div>
                      <h4 className="font-medium text-gray-900 mb-2">
                        Nutrient Density
                      </h4>
                      <p className="text-sm text-gray-600">
                        Maximum nutrition per calorie, with emphasis on
                        micronutrients.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="w-12 h-12 bg-[#315A2E]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <i className="fas fa-allergies text-[#315A2E]"></i>
                      </div>
                      <h4 className="font-medium text-gray-900 mb-2">
                        Allergen Control
                      </h4>
                      <p className="text-sm text-gray-600">
                        Strict protocols to prevent cross-contamination of
                        common allergens.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
