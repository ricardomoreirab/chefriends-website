import { Button, Input } from '@heroui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useI18n } from '../i18n'

const chefColors = [
  { name: 'Pepe', color: '#E85D2C', letter: 'P' },
  { name: 'Yuki', color: '#D94040', letter: 'Y' },
  { name: 'Carlos', color: '#D4A017', letter: 'C' },
  { name: 'Priya', color: '#E85D2C', letter: 'P' },
  { name: 'Jacques', color: '#4A86C8', letter: 'J' },
  { name: 'Somchai', color: '#8B6FC0', letter: 'S' },
  { name: 'Renata', color: '#6FA030', letter: 'R' },
  { name: 'Joan', color: '#C84A20', letter: 'J' },
]

const ComingSoon = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const { t } = useI18n()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (data.success) {
        setIsSubmitted(true)
        setEmail('')
      } else {
        setError(data.error || t('comingSoon.error.default'))
      }
    } catch {
      setError(t('comingSoon.error.connection'))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="coming-soon" className="py-24 bg-cream relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-chef-jacques/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="bg-card-white rounded-3xl border border-border shadow-warm p-8 sm:p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-accent/15 text-forest px-4 py-1.5 rounded-pill text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-dark"></span>
                </span>
                <span>{t('comingSoon.badge')}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-forest mb-4 leading-tight">
                {t('comingSoon.title')}{' '}
                <span className="italic">{t('comingSoon.titleHighlight')}</span>
              </h2>
              <p className="text-lg text-forest-light mb-8 leading-relaxed">
                {t('comingSoon.subtitle')}
              </p>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder={t('comingSoon.emailPlaceholder')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    classNames={{
                      input: "bg-cream text-forest placeholder:text-forest-muted",
                      inputWrapper: "bg-cream border border-border hover:bg-cream-dark h-12 rounded-pill shadow-none",
                    }}
                    radius="full"
                    size="lg"
                    required
                    isDisabled={isLoading}
                  />
                  <Button
                    type="submit"
                    className="bg-forest text-cream font-semibold h-12 px-8 rounded-pill text-sm min-w-[120px]"
                    size="lg"
                    isLoading={isLoading}
                    isDisabled={isLoading}
                  >
                    {t('comingSoon.joinButton')}
                  </Button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-success/5 border border-success/20 rounded-xl p-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-forest font-semibold">{t('comingSoon.success.title')}</p>
                      <p className="text-forest-light text-sm">{t('comingSoon.success.subtitle')}</p>
                    </div>
                  </div>
                </motion.div>
              )}
              {error && (
                <p className="text-error text-sm mt-3">{error}</p>
              )}

              <div className="flex items-center gap-6 mt-8 pt-6 border-t border-border-light">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-forest-muted" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div>
                    <p className="text-forest text-sm font-medium">{t('comingSoon.iosFirst')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-forest-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <div>
                    <p className="text-forest text-sm font-medium">{t('comingSoon.year')}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="hidden lg:block"
            >
              <div className="bg-cream rounded-2xl border border-border-light p-8">
                <p className="text-xs font-medium text-forest-muted tracking-wide uppercase mb-5">
                  {t('comingSoon.chefRoster')}
                </p>
                <div className="grid grid-cols-4 gap-4">
                  {chefColors.map((chef, i) => (
                    <motion.div
                      key={chef.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.08 * i }}
                      className="flex flex-col items-center gap-2"
                    >
                      <div
                        className="chef-avatar w-14 h-14 text-lg"
                        style={{ backgroundColor: chef.color }}
                      >
                        {chef.letter}
                      </div>
                      <span className="text-xs text-forest-light font-medium">{chef.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComingSoon
