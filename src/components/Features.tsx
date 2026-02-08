import { Card, CardBody } from '@heroui/react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: '🤖',
    title: 'AI Chef Friends',
    description:
      'Chat with AI chefs specialized in different cuisines. Each one has a unique personality and deep knowledge of their culinary tradition.',
    color: 'bg-[#FFF5F0]',
  },
  {
    icon: '🍳',
    title: 'Step-by-Step Guidance',
    description:
      'Get real-time cooking instructions tailored to your skill level. Your AI chef walks you through every step, from prep to plating.',
    color: 'bg-[#FFF8E6]',
  },
  {
    icon: '📖',
    title: 'Personalized Recipes',
    description:
      'Tell your chef friend what ingredients you have, dietary needs, or cravings — and get custom recipes crafted just for you.',
    color: 'bg-green-50',
  },
  {
    icon: '🎥',
    title: 'Live Chef Classes',
    description:
      'Upgrade to join live cooking sessions with real professional chefs. Learn techniques, ask questions in real time, and cook along.',
    color: 'bg-blue-50',
    isPremium: true,
  },
  {
    icon: '💬',
    title: 'Always Available',
    description:
      'Your AI chef friends are available 24/7. Whether it\'s a midnight snack or a holiday feast, they\'re ready to help.',
    color: 'bg-yellow-50',
  },
  {
    icon: '🌍',
    title: 'Every Cuisine Covered',
    description:
      'Italian, Japanese, Mexican, Indian, French, Thai, and many more. Each cuisine has a dedicated chef friend who knows it inside out.',
    color: 'bg-purple-50',
  },
]

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#FFF5F0] text-[#FF6B35] rounded-full text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Your Kitchen,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#F7931E]">
              Their Expertise
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Free AI chef friends to guide your everyday cooking, plus optional live classes
            with real chefs for when you want to level up.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="h-full bg-white border-none shadow-sm hover:shadow-lg transition-shadow duration-300 relative overflow-visible"
                radius="lg"
              >
                {'isPremium' in feature && feature.isPremium && (
                  <div className="absolute -top-3 right-4 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    PRO
                  </div>
                )}
                <CardBody className="p-8">
                  <div
                    className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-5`}
                  >
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
