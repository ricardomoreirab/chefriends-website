import { Card, CardBody } from '@heroui/react'
import { motion } from 'framer-motion'

const chefs = [
  {
    name: 'Pepe',
    flag: '🇮🇹',
    cuisine: 'Italian',
    personality: 'Your friendly Italian home cook',
    specialties: ['Pasta', 'Risotto', 'Pizza', 'Tiramisu'],
    greeting: 'Ciao! Let me show you how nonna used to make it.',
    bgFrom: 'from-green-50',
    bgTo: 'to-red-50',
    accent: 'bg-green-100',
  },
  {
    name: 'Yuki',
    flag: '🇯🇵',
    cuisine: 'Japanese',
    personality: 'Your precise sushi master',
    specialties: ['Sushi', 'Ramen', 'Tempura', 'Miso'],
    greeting: 'Konnichiwa! Precision is the soul of Japanese cooking.',
    bgFrom: 'from-red-50',
    bgTo: 'to-pink-50',
    accent: 'bg-red-100',
  },
  {
    name: 'Carmen',
    flag: '🇲🇽',
    cuisine: 'Mexican',
    personality: 'Your vibrant Mexican chef',
    specialties: ['Tacos', 'Mole', 'Guacamole', 'Enchiladas'],
    greeting: 'Hola amigo! Ready to add some spice to your life?',
    bgFrom: 'from-yellow-50',
    bgTo: 'to-green-50',
    accent: 'bg-yellow-100',
  },
  {
    name: 'Priya',
    flag: '🇮🇳',
    cuisine: 'Indian',
    personality: 'Your spice-loving Indian chef',
    specialties: ['Curry', 'Biryani', 'Naan', 'Samosa'],
    greeting: 'Namaste! Let me teach you the art of spices.',
    bgFrom: 'from-orange-50',
    bgTo: 'to-yellow-50',
    accent: 'bg-orange-100',
  },
  {
    name: 'Jacques',
    flag: '🇫🇷',
    cuisine: 'French',
    personality: 'Your elegant French pâtissier',
    specialties: ['Croissants', 'Soufflé', 'Coq au Vin', 'Crêpes'],
    greeting: 'Bonjour! Cooking is an art, and I\'m here to guide you.',
    bgFrom: 'from-blue-50',
    bgTo: 'to-red-50',
    accent: 'bg-blue-100',
  },
  {
    name: 'Somchai',
    flag: '🇹🇭',
    cuisine: 'Thai',
    personality: 'Your aromatic Thai cook',
    specialties: ['Pad Thai', 'Green Curry', 'Tom Yum', 'Mango Sticky Rice'],
    greeting: 'Sawasdee! Balance is everything — sweet, sour, salty, spicy.',
    bgFrom: 'from-purple-50',
    bgTo: 'to-pink-50',
    accent: 'bg-purple-100',
  },
]

const MeetTheChefs = () => {
  return (
    <section id="meet-the-chefs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#FFF8E6] text-[#F7931E] rounded-full text-sm font-medium mb-4">
            Meet Your Chefs
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            AI Chefs Who Know{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#F7931E]">
              Their Cuisine
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each chef friend is an expert in their culinary tradition. They know the authentic techniques,
            the secret ingredients, and the stories behind every dish.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chefs.map((chef, index) => (
            <motion.div
              key={chef.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="h-full bg-white border-none shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                radius="lg"
              >
                <CardBody className="p-0 overflow-hidden">
                  {/* Chef header */}
                  <div className={`bg-gradient-to-br ${chef.bgFrom} ${chef.bgTo} p-6 pb-8`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 ${chef.accent} rounded-2xl flex items-center justify-center shadow-sm`}>
                        <span className="text-3xl">{chef.flag}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{chef.name}</h3>
                        <p className="text-sm text-gray-600">{chef.personality}</p>
                      </div>
                    </div>
                  </div>

                  {/* Chef details */}
                  <div className="p-6 pt-4">
                    {/* Quote */}
                    <p className="text-gray-600 italic text-sm mb-4">"{chef.greeting}"</p>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2">
                      {chef.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* More chefs coming */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500">
            And many more chef friends coming soon — Korean, Spanish, Ethiopian, Lebanese...
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default MeetTheChefs
