import { Button, Input } from '@heroui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import PixelChef from './PixelChef'
import type { ChefId } from './PixelChef'

const ComingSoon = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

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
        setError(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setError('Unable to connect. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  const miniChefs: ChefId[] = ['pepe', 'yuki', 'carmen', 'priya', 'jacques', 'somchai']

  return (
    <section id="coming-soon" className="py-24 bg-deep relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-pixel-orange/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pixel-gold/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="bg-card/30 pixel-border p-8 sm:p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-pixel-orange/10 text-pixel-orange px-4 py-2 font-pixel text-[8px] mb-8 pixel-border-subtle">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pixel-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-pixel-orange"></span>
                </span>
                <span>COMING SOON</span>
              </div>

              <h2 className="font-pixel text-lg sm:text-xl lg:text-2xl text-text-bright mb-6 leading-relaxed">
                Be the First to{' '}
                <span className="text-pixel-gold glow-gold block mt-2">
                  Meet Your Chef Friends
                </span>
              </h2>
              <p className="text-lg text-text-dim mb-8 leading-relaxed">
                We're bringing AI chef friends and live cooking classes together in one app.
                Join the waitlist to get early access.
              </p>

              {/* Email signup form */}
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    classNames={{
                      input: "bg-deep/50 text-text-bright placeholder:text-text-dim",
                      inputWrapper: "bg-deep/50 border-pixel-orange/30 hover:bg-deep/70 h-12 rounded-none",
                    }}
                    radius="none"
                    size="lg"
                    required
                    isDisabled={isLoading}
                  />
                  <Button
                    type="submit"
                    className="bg-pixel-orange text-deep font-bold h-12 px-8 font-pixel text-[10px] tracking-wider"
                    radius="none"
                    size="lg"
                    isLoading={isLoading}
                    isDisabled={isLoading}
                  >
                    JOIN
                  </Button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-pixel-green/10 border border-pixel-green/30 p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-pixel text-xs text-pixel-green">OK</span>
                    <div>
                      <p className="text-text-bright font-semibold">You're on the list!</p>
                      <p className="text-text-dim text-sm">We'll notify you when Chefriends launches.</p>
                    </div>
                  </div>
                </motion.div>
              )}
              {error && (
                <p className="text-pixel-red text-sm mt-3">{error}</p>
              )}

              {/* Coming soon info */}
              <div className="flex items-center gap-8 mt-8 pt-6 border-t border-pixel-orange/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 border border-pixel-blue/30 flex items-center justify-center">
                    <span className="font-pixel text-[8px] text-pixel-blue">AP</span>
                  </div>
                  <div>
                    <p className="text-text-bright text-sm font-medium">iOS & Android</p>
                    <p className="text-text-dim text-xs">Both platforms</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 border border-pixel-green/30 flex items-center justify-center">
                    <span className="font-pixel text-[8px] text-pixel-green">GO</span>
                  </div>
                  <div>
                    <p className="text-text-bright text-sm font-medium">Early 2026</p>
                    <p className="text-text-dim text-xs">Expected launch</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Chef parade */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="hidden lg:block"
            >
              <div className="bg-deep/50 border border-pixel-orange/10 p-8">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-pixel-orange/10">
                  <span className="font-pixel text-[10px] text-pixel-orange">CHEF ROSTER</span>
                  <div className="h-px flex-1 bg-pixel-orange/10" />
                  <span className="font-pixel text-[8px] text-text-dim">6/6</span>
                </div>

                {/* Chef grid */}
                <div className="grid grid-cols-3 gap-6">
                  {miniChefs.map((chefId, i) => (
                    <motion.div
                      key={chefId}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                      className="flex flex-col items-center gap-2"
                    >
                      <div className="animate-pixel-bounce" style={{ animationDelay: `${i * 0.3}s` }}>
                        <PixelChef chef={chefId} size={6} />
                      </div>
                      <span className="font-pixel text-[8px] text-text-dim uppercase">{chefId}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Loading bar */}
                <div className="mt-6 pt-4 border-t border-pixel-orange/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-pixel text-[8px] text-text-dim">LOADING...</span>
                    <span className="font-pixel text-[8px] text-pixel-orange">87%</span>
                  </div>
                  <div className="h-2 bg-deep border border-pixel-orange/20">
                    <motion.div
                      className="h-full bg-pixel-orange"
                      initial={{ width: '0%' }}
                      whileInView={{ width: '87%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                  </div>
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
