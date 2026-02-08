import { motion } from 'framer-motion'
import PixelChef, { type ChefId } from './PixelChef'

const chefs: {
  id: ChefId
  name: string
  cuisine: string
  personality: string
  specialties: string[]
  greeting: string
  accentColor: string
  borderColor: string
  bgColor: string
}[] = [
  {
    id: 'pepe',
    name: 'PEPE',
    cuisine: 'Italian',
    personality: 'Your friendly Italian home cook',
    specialties: ['Pasta', 'Risotto', 'Pizza', 'Tiramisu'],
    greeting: 'Ciao! Let me show you how nonna used to make it.',
    accentColor: 'text-pixel-green',
    borderColor: 'border-pixel-green/30',
    bgColor: 'bg-pixel-green/5',
  },
  {
    id: 'yuki',
    name: 'YUKI',
    cuisine: 'Japanese',
    personality: 'Your precise sushi master',
    specialties: ['Sushi', 'Ramen', 'Tempura', 'Miso'],
    greeting: 'Konnichiwa! Precision is the soul of Japanese cooking.',
    accentColor: 'text-pixel-red',
    borderColor: 'border-pixel-red/30',
    bgColor: 'bg-pixel-red/5',
  },
  {
    id: 'carmen',
    name: 'CARMEN',
    cuisine: 'Mexican',
    personality: 'Your vibrant Mexican chef',
    specialties: ['Tacos', 'Mole', 'Guacamole', 'Enchiladas'],
    greeting: 'Hola amigo! Ready to add some spice to your life?',
    accentColor: 'text-pixel-gold',
    borderColor: 'border-pixel-gold/30',
    bgColor: 'bg-pixel-gold/5',
  },
  {
    id: 'priya',
    name: 'PRIYA',
    cuisine: 'Indian',
    personality: 'Your spice-loving Indian chef',
    specialties: ['Curry', 'Biryani', 'Naan', 'Samosa'],
    greeting: 'Namaste! Let me teach you the art of spices.',
    accentColor: 'text-pixel-orange',
    borderColor: 'border-pixel-orange/30',
    bgColor: 'bg-pixel-orange/5',
  },
  {
    id: 'jacques',
    name: 'JACQUES',
    cuisine: 'French',
    personality: 'Your elegant French patissier',
    specialties: ['Croissants', 'Souffle', 'Coq au Vin', 'Crepes'],
    greeting: 'Bonjour! Cooking is an art, and I am here to guide you.',
    accentColor: 'text-pixel-blue',
    borderColor: 'border-pixel-blue/30',
    bgColor: 'bg-pixel-blue/5',
  },
  {
    id: 'somchai',
    name: 'SOMCHAI',
    cuisine: 'Thai',
    personality: 'Your aromatic Thai cook',
    specialties: ['Pad Thai', 'Green Curry', 'Tom Yum', 'Sticky Rice'],
    greeting: 'Sawasdee! Balance is everything — sweet, sour, salty, spicy.',
    accentColor: 'text-pixel-purple',
    borderColor: 'border-pixel-purple/30',
    bgColor: 'bg-pixel-purple/5',
  },
]

const MeetTheChefs = () => {
  return (
    <section id="meet-the-chefs" className="py-24 bg-deep grid-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-pixel text-[10px] text-pixel-orange tracking-wider mb-6 block">
            [ SELECT YOUR CHEF ]
          </span>
          <h2 className="font-pixel text-xl sm:text-2xl lg:text-3xl text-text-bright mb-6 leading-relaxed">
            AI Chefs Who Know{' '}
            <span className="text-pixel-gold glow-gold">
              Their Cuisine
            </span>
          </h2>
          <p className="text-lg text-text-dim max-w-2xl mx-auto">
            Each chef friend is an expert in their culinary tradition. They know the authentic techniques,
            the secret ingredients, and the stories behind every dish.
          </p>
        </motion.div>

        {/* Character Select Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chefs.map((chef, index) => (
            <motion.div
              key={chef.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`h-full bg-card/40 border ${chef.borderColor} hover:bg-card-hover/50 transition-all duration-300 group cursor-default`}>
                {/* Character display area */}
                <div className={`${chef.bgColor} p-6 flex items-center gap-5 border-b ${chef.borderColor}`}>
                  <div className="animate-pixel-bounce group-hover:animate-float">
                    <PixelChef chef={chef.id} size={7} />
                  </div>
                  <div>
                    <p className={`font-pixel text-sm ${chef.accentColor} mb-1`}>{chef.name}</p>
                    <p className="text-text-dim text-sm">{chef.personality}</p>
                  </div>
                </div>

                {/* Chef details */}
                <div className="p-5">
                  {/* Greeting */}
                  <div className="flex gap-2 mb-4">
                    <span className={`font-pixel text-[8px] ${chef.accentColor} mt-0.5 flex-shrink-0`}>&gt;</span>
                    <p className="text-text-dim italic text-sm">"{chef.greeting}"</p>
                  </div>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2">
                    {chef.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className={`px-2 py-1 bg-deep/50 border ${chef.borderColor} text-text-dim text-xs font-medium`}
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
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
          <p className="font-pixel text-[10px] text-text-dim tracking-wider">
            MORE CHEFS LOADING... KOREAN, SPANISH, ETHIOPIAN, LEBANESE
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default MeetTheChefs
