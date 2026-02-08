import { Button, Input } from '@heroui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'

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

  return (
    <section id="coming-soon" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-hero opacity-50" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFD4BF] rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFE299] rounded-full opacity-20 blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2.5rem] p-10 sm:p-14 lg:p-20 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#FF6B35]/20 text-[#FF8C57] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B35] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF6B35]"></span>
                </span>
                <span>Coming Soon</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Be the First to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C57] to-[#FFC533]">
                  Meet Your Chef Friends
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                We're bringing AI chef friends and live cooking classes together in one app.
                Join the waitlist to get early access and be the first to cook with your new friends.
              </p>

              {/* Email signup form */}
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    classNames={{
                      input: "bg-white/10 text-white placeholder:text-gray-400",
                      inputWrapper: "bg-white/10 border-white/20 hover:bg-white/15 h-14",
                    }}
                    radius="lg"
                    size="lg"
                    required
                    isDisabled={isLoading}
                  />
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white font-semibold h-14 px-8"
                    radius="lg"
                    size="lg"
                    isLoading={isLoading}
                    isDisabled={isLoading}
                  >
                    Join Waitlist
                  </Button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/20 border border-green-500/30 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">✓</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">You're on the list!</p>
                      <p className="text-gray-400 text-sm">We'll notify you when Chefriends launches.</p>
                    </div>
                  </div>
                </motion.div>
              )}
              {error && (
                <p className="text-red-400 text-sm mt-3">{error}</p>
              )}

              {/* Coming soon info */}
              <div className="flex items-center gap-8 mt-8 pt-8 border-t border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">iOS & Android</p>
                    <p className="text-gray-500 text-xs">Coming to both platforms</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-xl">🚀</span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Early 2026</p>
                    <p className="text-gray-500 text-xs">Expected launch</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Phone mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative">
                {/* Phone 1 - Chef selection */}
                <div className="w-56 h-[450px] bg-gray-700 rounded-[2.5rem] p-2 shadow-2xl transform -rotate-6 translate-x-8">
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                    <div className="h-full bg-gradient-to-b from-[#FFF5F0] to-white p-4">
                      <div className="text-center mt-8">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#FF6B35] to-[#F7931E] rounded-2xl flex items-center justify-center">
                          <span className="text-3xl">🍳</span>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-1">Choose Your Chef</h4>
                        <p className="text-xs text-gray-500 mb-4">Pick a cuisine to explore</p>
                        {/* Mini chef cards */}
                        <div className="space-y-2">
                          {[
                            { flag: '🇮🇹', name: 'Pepe', cuisine: 'Italian' },
                            { flag: '🇯🇵', name: 'Yuki', cuisine: 'Japanese' },
                            { flag: '🇲🇽', name: 'Carmen', cuisine: 'Mexican' },
                          ].map((chef) => (
                            <div key={chef.name} className="flex items-center gap-2 bg-gray-50 rounded-xl p-2">
                              <span className="text-lg">{chef.flag}</span>
                              <div className="text-left">
                                <p className="text-xs font-semibold text-gray-900">{chef.name}</p>
                                <p className="text-[10px] text-gray-500">{chef.cuisine}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone 2 (front) - Live class */}
                <div className="absolute top-4 left-0 w-56 h-[450px] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl transform rotate-6 -translate-x-8 z-10">
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-xl z-10" />

                    <div className="h-full bg-gradient-to-b from-[#FFF5F0] to-white p-4 pt-8">
                      {/* Live class header */}
                      <div className="mb-3">
                        <div className="flex items-center gap-1 mb-1">
                          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                          <span className="text-[10px] text-red-500 font-semibold">LIVE</span>
                        </div>
                        <h4 className="font-bold text-gray-900 text-sm">Pasta Masterclass</h4>
                        <p className="text-xs text-gray-500">with Chef Maria</p>
                      </div>
                      {/* Video placeholder */}
                      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl h-28 mb-3 flex items-center justify-center">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <span className="text-white text-lg ml-0.5">▶</span>
                        </div>
                      </div>
                      {/* Chat preview */}
                      <div className="space-y-1.5">
                        <div className="bg-gray-100 rounded-lg px-2 py-1">
                          <p className="text-[10px] text-gray-600"><span className="font-semibold">Anna:</span> How much flour?</p>
                        </div>
                        <div className="bg-gray-100 rounded-lg px-2 py-1">
                          <p className="text-[10px] text-gray-600"><span className="font-semibold">Chef:</span> 400g for 4 servings!</p>
                        </div>
                      </div>
                    </div>
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
