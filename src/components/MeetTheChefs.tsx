import { motion } from 'framer-motion'
import { useI18n } from '../i18n'

import pepeImg from '../assets/chefs/pepe.png'
import yukiImg from '../assets/chefs/yuki.png'
import carlosImg from '../assets/chefs/carlos.png'
import priyaImg from '../assets/chefs/priya.png'
import jacquesImg from '../assets/chefs/jacques.png'
import somchaiImg from '../assets/chefs/somchai.png'
import renataImg from '../assets/chefs/renata.png'
import joanImg from '../assets/chefs/joan.png'

const MeetTheChefs = () => {
  const { t } = useI18n()

  const chefs = [
    { name: 'Pepe', cuisine: t('meetTheChefs.cuisine.italian'), greeting: t('meetTheChefs.greeting.pepe'), specialties: ['Pasta', 'Risotto', 'Pizza', 'Tiramisu'], color: '#E85D2C', image: pepeImg },
    { name: 'Yuki', cuisine: t('meetTheChefs.cuisine.japanese'), greeting: t('meetTheChefs.greeting.yuki'), specialties: ['Sushi', 'Ramen', 'Tempura', 'Miso'], color: '#D94040', image: yukiImg },
    { name: 'Carlos', cuisine: t('meetTheChefs.cuisine.mexican'), greeting: t('meetTheChefs.greeting.carlos'), specialties: ['Tacos', 'Mole', 'Guacamole', 'Enchiladas'], color: '#D4A017', image: carlosImg },
    { name: 'Priya', cuisine: t('meetTheChefs.cuisine.indian'), greeting: t('meetTheChefs.greeting.priya'), specialties: ['Curry', 'Biryani', 'Naan', 'Samosa'], color: '#E85D2C', image: priyaImg },
    { name: 'Jacques', cuisine: t('meetTheChefs.cuisine.french'), greeting: t('meetTheChefs.greeting.jacques'), specialties: ['Croissants', 'Souffle', 'Coq au Vin', 'Crepes'], color: '#4A86C8', image: jacquesImg },
    { name: 'Somchai', cuisine: t('meetTheChefs.cuisine.thai'), greeting: t('meetTheChefs.greeting.somchai'), specialties: ['Pad Thai', 'Green Curry', 'Tom Yum', 'Sticky Rice'], color: '#8B6FC0', image: somchaiImg },
    { name: 'Renata', cuisine: t('meetTheChefs.cuisine.brazilian'), greeting: t('meetTheChefs.greeting.renata'), specialties: ['Feijoada', 'Pao de Queijo', 'Coxinha', 'Acai'], color: '#6FA030', image: renataImg },
    { name: 'Joan', cuisine: t('meetTheChefs.cuisine.spanish'), greeting: t('meetTheChefs.greeting.joan'), specialties: ['Paella', 'Tapas', 'Gazpacho', 'Tortilla'], color: '#C84A20', image: joanImg },
  ]

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
            {t('meetTheChefs.label')}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest mb-6">
            {t('meetTheChefs.title')}{' '}
            <span className="italic">{t('meetTheChefs.titleHighlight')}</span>
          </h2>
          <p className="text-lg text-forest-light max-w-2xl mx-auto">
            {t('meetTheChefs.subtitle')}
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
                <div className="relative overflow-hidden shrink-0" style={{ backgroundColor: `${chef.color}08` }}>
                  <img src={chef.image} alt={chef.name} className="w-full aspect-square object-contain p-2 group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-serif text-base text-forest">{chef.name}</h3>
                    <span className="text-xs font-medium px-2 py-0.5 rounded-pill" style={{ backgroundColor: `${chef.color}15`, color: chef.color }}>{chef.cuisine}</span>
                  </div>
                  <p className="text-sm text-forest-light italic leading-relaxed mb-3">"{chef.greeting}"</p>
                  <div className="flex flex-wrap gap-1.5">
                    {chef.specialties.map((specialty) => (
                      <span key={specialty} className="px-2 py-0.5 bg-cream-dark text-forest-muted text-[11px] rounded-pill font-medium">{specialty}</span>
                    ))}
                  </div>
                </div>
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
