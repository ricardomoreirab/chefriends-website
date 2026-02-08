import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Download',
    description: 'Get the app and create your profile. Tell us about your cooking level and favorite cuisines.',
    icon: 'DL',
    color: 'text-pixel-orange',
    borderColor: 'border-pixel-orange/30',
  },
  {
    number: '02',
    title: 'Pick a Chef',
    description: 'Browse our AI chef friends and choose the cuisine you want to explore. Each chef has their own personality.',
    icon: '??',
    color: 'text-pixel-green',
    borderColor: 'border-pixel-green/30',
  },
  {
    number: '03',
    title: 'Start Cooking',
    description: 'Chat with your chef friend, get personalized recipes, and follow step-by-step guidance as you cook.',
    icon: '!!',
    color: 'text-pixel-gold',
    borderColor: 'border-pixel-gold/30',
  },
  {
    number: '04',
    title: 'Level Up',
    description: 'Want to go deeper? Join live cooking classes with real professional chefs and learn advanced techniques.',
    icon: 'UP',
    color: 'text-pixel-purple',
    borderColor: 'border-pixel-purple/30',
  },
]

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-dark grid-bg relative">
      <div className="absolute inset-0 bg-gradient-to-b from-deep via-transparent to-deep pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-pixel text-[10px] text-pixel-green tracking-wider mb-6 block">
            [ HOW IT WORKS ]
          </span>
          <h2 className="font-pixel text-xl sm:text-2xl lg:text-3xl text-text-bright mb-6 leading-relaxed">
            Get Started in{' '}
            <span className="text-pixel-orange glow-orange">
              4 Steps
            </span>
          </h2>
          <p className="text-lg text-text-dim max-w-2xl mx-auto">
            From download to your first dish — your AI chef friend is just a tap away.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pixel-orange/20 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className={`bg-card/50 border ${step.borderColor} p-8 text-center relative z-10 h-full`}>
                  {/* Step number */}
                  <div className="absolute top-3 right-3">
                    <span className="font-pixel text-[10px] text-text-dim">{step.number}</span>
                  </div>

                  {/* Step icon */}
                  <div className={`w-16 h-16 mx-auto mb-6 border-2 ${step.borderColor} flex items-center justify-center`}>
                    <span className={`font-pixel text-lg ${step.color}`}>{step.icon}</span>
                  </div>

                  <h3 className="font-pixel text-xs text-text-bright mb-4 leading-relaxed">{step.title}</h3>
                  <p className="text-text-dim leading-relaxed text-sm">{step.description}</p>
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
          className="mt-20 grid md:grid-cols-2 gap-6"
        >
          {/* Free Tier */}
          <div className="bg-card/30 border border-pixel-orange/20 p-8">
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-pixel-orange/10">
              <div className="w-12 h-12 border border-pixel-orange/30 flex items-center justify-center">
                <span className="font-pixel text-xs text-pixel-orange">AI</span>
              </div>
              <div>
                <h3 className="font-pixel text-sm text-pixel-orange">FREE</h3>
                <p className="text-text-dim text-sm">AI Chef Friends</p>
              </div>
            </div>
            <ul className="space-y-3">
              {[
                'Chat with all AI chef friends',
                'Personalized recipe suggestions',
                'Step-by-step cooking guidance',
                'Dietary preference support',
                'Save your favorite recipes',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="font-pixel text-[8px] text-pixel-green">+</span>
                  <span className="text-text-dim text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pro Tier */}
          <div className="bg-card/30 border border-pixel-gold/30 p-8 relative pixel-border-gold">
            <div className="absolute -top-px -right-px font-pixel text-[8px] bg-pixel-gold text-deep px-3 py-1">
              PRO
            </div>
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-pixel-gold/10">
              <div className="w-12 h-12 border border-pixel-gold/30 flex items-center justify-center">
                <span className="font-pixel text-[10px] text-pixel-gold">LV</span>
              </div>
              <div>
                <h3 className="font-pixel text-sm text-pixel-gold">PRO</h3>
                <p className="text-text-dim text-sm">Live Chef Classes</p>
              </div>
            </div>
            <ul className="space-y-3">
              {[
                'Everything in Free, plus:',
                'Live cooking classes with real chefs',
                'Interactive Q&A during sessions',
                'Exclusive recipes and techniques',
                'Class recordings to rewatch anytime',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="font-pixel text-[8px] text-pixel-gold">+</span>
                  <span className="text-text-dim text-sm">{item}</span>
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
