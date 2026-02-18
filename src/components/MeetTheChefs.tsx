import { motion } from 'framer-motion'

import pepeImg from '../assets/chefs/pepe.png'
import yukiImg from '../assets/chefs/yuki.png'
import carlosImg from '../assets/chefs/carlos.png'
import priyaImg from '../assets/chefs/priya.png'
import jacquesImg from '../assets/chefs/jacques.png'
import somchaiImg from '../assets/chefs/somchai.png'
import renataImg from '../assets/chefs/renata.png'
import joanImg from '../assets/chefs/joan.png'

const chefs = [
  {
    name: 'Pepe',
    cuisine: 'Italian',
    greeting: 'Ciao! Let me show you how nonna used to make it.',
    specialties: ['Pasta', 'Risotto', 'Pizza', 'Tiramisu'],
    color: '#E85D2C',
    image: pepeImg,
  },
  {
    name: 'Yuki',
    cuisine: 'Japanese',
    greeting: 'Konnichiwa! Precision is the soul of Japanese cooking.',
    specialties: ['Sushi', 'Ramen', 'Tempura', 'Miso'],
    color: '#D94040',
    image: yukiImg,
  },
  {
    name: 'Carlos',
    cuisine: 'Mexican',
    greeting: 'Hola amigo! Ready to add some spice to your life?',
    specialties: ['Tacos', 'Mole', 'Guacamole', 'Enchiladas'],
    color: '#D4A017',
    image: carlosImg,
  },
  {
    name: 'Priya',
    cuisine: 'Indian',
    greeting: 'Namaste! Let me teach you the art of spices.',
    specialties: ['Curry', 'Biryani', 'Naan', 'Samosa'],
    color: '#E85D2C',
    image: priyaImg,
  },
  {
    name: 'Jacques',
    cuisine: 'French',
    greeting: 'Bonjour! Cooking is an art, and I am here to guide you.',
    specialties: ['Croissants', 'Souffle', 'Coq au Vin', 'Crepes'],
    color: '#4A86C8',
    image: jacquesImg,
  },
  {
    name: 'Somchai',
    cuisine: 'Thai',
    greeting: 'Sawasdee! Balance is everything — sweet, sour, salty, spicy.',
    specialties: ['Pad Thai', 'Green Curry', 'Tom Yum', 'Sticky Rice'],
    color: '#8B6FC0',
    image: somchaiImg,
  },
  {
    name: 'Renata',
    cuisine: 'Brazilian',
    greeting: "Oi! Let's bring some Brazilian warmth to your kitchen!",
    specialties: ['Feijoada', 'Pao de Queijo', 'Coxinha', 'Acai'],
    color: '#6FA030',
    image: renataImg,
  },
  {
    name: 'Joan',
    cuisine: 'Spanish',
    greeting: 'Hola! Spain is all about sharing food and good moments.',
    specialties: ['Paella', 'Tapas', 'Gazpacho', 'Tortilla'],
    color: '#C84A20',
    image: joanImg,
  },
]

const MeetTheChefs = () => {
  return (
    <section id="meet-the-chefs" className="py-24 bg-cream relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-forest-muted tracking-wide uppercase mb-4">
            Meet the Chefs
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest mb-6">
            8 cuisines,{' '}
            <span className="italic">8 friends</span>
          </h2>
          <p className="text-lg text-forest-light max-w-2xl mx-auto">
            Each chef is an expert in their culinary tradition. They know the authentic
            techniques, the secret ingredients, and the stories behind every dish.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {chefs.map((chef, index) => (
            <motion.div
              key={chef.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              <div className="card-warm overflow-hidden h-full group flex flex-col">
                {/* Chef image */}
                <div
                  className="relative overflow-hidden shrink-0"
                  style={{ backgroundColor: `${chef.color}08` }}
                >
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-full aspect-square object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Info */}
                <div className="p-4 flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-serif text-base text-forest">{chef.name}</h3>
                    <span
                      className="text-xs font-medium px-2 py-0.5 rounded-pill"
                      style={{ backgroundColor: `${chef.color}15`, color: chef.color }}
                    >
                      {chef.cuisine}
                    </span>
                  </div>

                  <p className="text-sm text-forest-light italic leading-relaxed mb-3">
                    "{chef.greeting}"
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {chef.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="px-2 py-0.5 bg-cream-dark text-forest-muted text-[11px] rounded-pill font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Colored bottom bar */}
                <div className="h-1 w-full shrink-0 mt-auto" style={{ backgroundColor: chef.color }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MeetTheChefs
