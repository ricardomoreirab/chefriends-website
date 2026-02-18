import { motion } from 'framer-motion'
import { useI18n } from '../i18n'

const HowItWorks = () => {
  const { t } = useI18n()

  const steps = [
    {
      number: '01',
      title: t('howItWorks.step01.title'),
      description: t('howItWorks.step01.description'),
      icon: (<svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>),
      color: '#E85D2C',
    },
    {
      number: '02',
      title: t('howItWorks.step02.title'),
      description: t('howItWorks.step02.description'),
      icon: (<svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>),
      color: '#4A86C8',
    },
    {
      number: '03',
      title: t('howItWorks.step03.title'),
      description: t('howItWorks.step03.description'),
      icon: (<svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>),
      color: '#D4A017',
    },
    {
      number: '04',
      title: t('howItWorks.step04.title'),
      description: t('howItWorks.step04.description'),
      icon: (<svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>),
      color: '#6FA030',
    },
  ]

  return (
    <section id="how-it-works" className="py-24 bg-cream-dark relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-forest-muted tracking-wide uppercase mb-4">
            {t('howItWorks.label')}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest mb-6">
            {t('howItWorks.title')}{' '}
            <span className="italic">{t('howItWorks.titleHighlight')}</span>
          </h2>
          <p className="text-lg text-forest-light max-w-2xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-px bg-border -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative z-10"
              >
                <div className="card-warm p-7 text-center h-full">
                  <span className="text-xs font-semibold text-forest-muted tracking-wider">
                    {t('howItWorks.step')} {step.number}
                  </span>
                  <div
                    className="w-16 h-16 mx-auto mt-4 mb-5 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${step.color}12`, color: step.color }}
                  >
                    {step.icon}
                  </div>
                  <h3 className="font-serif text-lg text-forest mb-3">{step.title}</h3>
                  <p className="text-forest-light leading-relaxed text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
