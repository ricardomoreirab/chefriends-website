import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Download & Sign Up',
    description:
      'Get the app and create your profile. Tell us about your cooking level and favorite cuisines.',
    icon: '📱',
  },
  {
    number: '02',
    title: 'Pick a Chef Friend',
    description:
      'Browse our AI chef friends and choose the cuisine you want to explore. Each chef has their own personality and expertise.',
    icon: '👨‍🍳',
  },
  {
    number: '03',
    title: 'Start Cooking Together',
    description:
      'Chat with your chef friend, get personalized recipes, and follow step-by-step guidance as you cook.',
    icon: '🍳',
  },
  {
    number: '04',
    title: 'Level Up with Live Classes',
    description:
      'Want to go deeper? Join live cooking classes with real professional chefs and learn advanced techniques.',
    icon: '🎥',
  },
]

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#FFF8E6] text-[#F7931E] rounded-full text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get Started in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#F7931E]">
              4 Simple Steps
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From download to your first dish — your AI chef friend is just a tap away.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FFD4BF] via-[#FFE299] to-[#FFD4BF] -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-white rounded-3xl p-8 text-center relative z-10 shadow-sm">
                  {/* Step icon */}
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#FF6B35] to-[#F7931E] rounded-2xl flex items-center justify-center shadow-lg shadow-orange-200">
                    <span className="text-4xl">{step.icon}</span>
                  </div>

                  {/* Step number */}
                  <div className="absolute top-6 right-6 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-gray-400">{step.number}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Free vs Pro comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid md:grid-cols-2 gap-8"
        >
          {/* Free Tier */}
          <div className="bg-gradient-to-br from-[#FFF5F0] to-[#FFEBE0] rounded-3xl p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                <span className="text-3xl">🤖</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Free</h3>
                <p className="text-sm text-gray-600">AI Chef Friends</p>
              </div>
            </div>
            <ul className="space-y-4">
              {[
                'Chat with all AI chef friends',
                'Personalized recipe suggestions',
                'Step-by-step cooking guidance',
                'Dietary preference support',
                'Save your favorite recipes',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-[#FF6B35] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pro Tier */}
          <div className="bg-gradient-to-br from-[#FFF8E6] to-[#FFF1CC] rounded-3xl p-10 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white text-xs font-bold px-3 py-1 rounded-full">
              PRO
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                <span className="text-3xl">👨‍🍳</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Pro</h3>
                <p className="text-sm text-gray-600">Live Chef Classes</p>
              </div>
            </div>
            <ul className="space-y-4">
              {[
                'Everything in Free, plus:',
                'Live cooking classes with real chefs',
                'Interactive Q&A during sessions',
                'Exclusive recipes and techniques',
                'Class recordings to rewatch anytime',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-[#F7931E] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
