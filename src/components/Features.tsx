import { motion } from 'framer-motion'

const features = [
  {
    icon: 'AI',
    title: 'AI Chef Friends',
    description:
      'Chat with AI chefs specialized in different cuisines. Each one has a unique personality and deep knowledge of their culinary tradition.',
    color: 'text-pixel-orange',
    borderColor: 'border-pixel-orange/20',
    bgColor: 'bg-pixel-orange/5',
  },
  {
    icon: '>>',
    title: 'Step-by-Step',
    description:
      'Get real-time cooking instructions tailored to your skill level. Your AI chef walks you through every step, from prep to plating.',
    color: 'text-pixel-green',
    borderColor: 'border-pixel-green/20',
    bgColor: 'bg-pixel-green/5',
  },
  {
    icon: '[]',
    title: 'Custom Recipes',
    description:
      'Tell your chef friend what ingredients you have, dietary needs, or cravings — and get custom recipes crafted just for you.',
    color: 'text-pixel-gold',
    borderColor: 'border-pixel-gold/20',
    bgColor: 'bg-pixel-gold/5',
  },
  {
    icon: '()',
    title: 'Live Classes',
    description:
      'Upgrade to join live cooking sessions with real professional chefs. Learn techniques and cook along in real time.',
    color: 'text-pixel-purple',
    borderColor: 'border-pixel-purple/20',
    bgColor: 'bg-pixel-purple/5',
    isPremium: true,
  },
  {
    icon: '24',
    title: 'Always On',
    description:
      'Your AI chef friends are available 24/7. Whether it\'s a midnight snack or a holiday feast, they\'re ready to help.',
    color: 'text-pixel-blue',
    borderColor: 'border-pixel-blue/20',
    bgColor: 'bg-pixel-blue/5',
  },
  {
    icon: '<>',
    title: 'Every Cuisine',
    description:
      'Italian, Japanese, Mexican, Indian, French, Thai, and many more. Each cuisine has a dedicated chef friend.',
    color: 'text-pixel-red',
    borderColor: 'border-pixel-red/20',
    bgColor: 'bg-pixel-red/5',
  },
]

const Features = () => {
  return (
    <section id="features" className="py-24 bg-dark grid-bg relative">
      <div className="absolute inset-0 bg-gradient-to-b from-deep via-transparent to-deep pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-pixel text-[10px] text-pixel-gold tracking-wider mb-6 block">
            [ FEATURES ]
          </span>
          <h2 className="font-pixel text-xl sm:text-2xl lg:text-3xl text-text-bright mb-6 leading-relaxed">
            Your Kitchen,{' '}
            <span className="text-pixel-orange glow-orange">
              Their Expertise
            </span>
          </h2>
          <p className="text-lg text-text-dim max-w-2xl mx-auto">
            Free AI chef friends for everyday cooking, plus optional live classes
            with real chefs when you want to level up.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`h-full bg-card/50 border ${feature.borderColor} p-8 hover:bg-card-hover/50 transition-all duration-300 relative group`}>
                {feature.isPremium && (
                  <div className="absolute -top-px -right-px font-pixel text-[8px] bg-pixel-purple text-deep px-3 py-1">
                    PRO
                  </div>
                )}
                <div className={`w-12 h-12 ${feature.bgColor} border ${feature.borderColor} flex items-center justify-center mb-5`}>
                  <span className={`font-pixel text-xs ${feature.color}`}>{feature.icon}</span>
                </div>
                <h3 className="font-pixel text-xs text-text-bright mb-4 leading-relaxed">{feature.title}</h3>
                <p className="text-text-dim leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
