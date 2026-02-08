import { Card, CardBody, Avatar } from '@heroui/react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Food Enthusiast',
    avatar: '👩‍🦰',
    location: 'Barcelona',
    rating: 5,
    text: "I've discovered incredible home cooks in my neighborhood that I never knew existed. The homemade pasta at Maria's was better than any restaurant!",
  },
  {
    name: 'Carlos R.',
    role: 'Home Chef',
    avatar: '👨‍🍳',
    location: 'Madrid',
    rating: 5,
    text: "Hosting meals through Chefriends has been amazing. I get to share my grandmother's recipes and meet wonderful people from all over the world.",
  },
  {
    name: 'Emma L.',
    role: 'Vegetarian Foodie',
    avatar: '👩',
    location: 'Valencia',
    rating: 5,
    text: 'Finally an app that makes it easy to find vegetarian home-cooked meals! The dietary filter is a lifesaver. Every meal has been a delightful surprise.',
  },
  {
    name: 'Kenji T.',
    role: 'Japanese Cuisine Host',
    avatar: '👨',
    location: 'Barcelona',
    rating: 5,
    text: "I moved from Tokyo and wanted to share authentic Japanese food. Chefriends helped me connect with people who truly appreciate homemade ramen.",
  },
  {
    name: 'Ana G.',
    role: 'Weekend Explorer',
    avatar: '👩‍🦱',
    location: 'Seville',
    rating: 5,
    text: "The best way to experience a new city's food culture! I've made friends and discovered family recipes that no restaurant could replicate.",
  },
  {
    name: 'Marco P.',
    role: 'Italian Chef Host',
    avatar: '🧔',
    location: 'Valencia',
    rating: 5,
    text: "Cooking for strangers has become my favorite weekend activity. The booking system is seamless, and the community is incredibly supportive.",
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#FFF5F0] text-[#FF6B35] rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Loved by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#F7931E]">
              Food Lovers
            </span>{' '}
            Everywhere
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of happy diners and hosts creating memorable food experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white border-none shadow-sm hover:shadow-lg transition-shadow duration-300">
                <CardBody className="p-8">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-[#FFD23F] text-lg">
                        ⭐
                      </span>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.text}"</p>

                  {/* Author */}
                  <div className="flex items-center gap-3 mt-auto">
                    <Avatar
                      className="w-12 h-12 bg-gray-100 text-2xl"
                      name={testimonial.avatar}
                      showFallback
                      fallback={<span className="text-2xl">{testimonial.avatar}</span>}
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">
                        {testimonial.role} • {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-12 text-gray-400"
        >
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-900">50K+</p>
            <p className="text-sm">Meals Shared</p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gray-200" />
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-900">10K+</p>
            <p className="text-sm">Active Hosts</p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gray-200" />
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-900">25+</p>
            <p className="text-sm">Cities</p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gray-200" />
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-900">4.9</p>
            <p className="text-sm">Average Rating</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
