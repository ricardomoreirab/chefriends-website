import { Button } from '@heroui/react'
import { motion } from 'framer-motion'

const Download = () => {
  return (
    <section id="download" className="py-24 bg-white relative overflow-hidden">
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Start Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C57] to-[#FFC533]">
                  Culinary Journey?
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Download Chefriends today and discover amazing home-cooked meals in your neighborhood.
                Join our community of food lovers and passionate home chefs.
              </p>

              {/* App store buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-white text-gray-900 font-semibold h-16 px-6"
                  radius="lg"
                  size="lg"
                  startContent={
                    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                  }
                >
                  <div className="text-left">
                    <p className="text-xs text-gray-500">Download on the</p>
                    <p className="text-base font-semibold">App Store</p>
                  </div>
                </Button>

                <Button
                  className="bg-white text-gray-900 font-semibold h-16 px-6"
                  radius="lg"
                  size="lg"
                  startContent={
                    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                  }
                >
                  <div className="text-left">
                    <p className="text-xs text-gray-500">Get it on</p>
                    <p className="text-base font-semibold">Google Play</p>
                  </div>
                </Button>
              </div>

              {/* Quick stats */}
              <div className="flex items-center gap-6 mt-8 pt-8 border-t border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {['👩‍🦰', '👨', '👩', '🧔'].map((emoji, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center ring-2 ring-gray-800"
                      >
                        <span className="text-sm">{emoji}</span>
                      </div>
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm">+10K users</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[#FFD23F]">⭐</span>
                  <span className="text-white font-semibold">4.9</span>
                  <span className="text-gray-400 text-sm">(2K+ reviews)</span>
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
                {/* Phone 1 */}
                <div className="w-56 h-[450px] bg-gray-700 rounded-[2.5rem] p-2 shadow-2xl transform -rotate-6 translate-x-8">
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                    <div className="h-full bg-gradient-to-b from-[#FFF5F0] to-white p-4">
                      {/* App mockup content */}
                      <div className="text-center mt-8">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#FF6B35] to-[#F7931E] rounded-2xl flex items-center justify-center">
                          <span className="text-3xl">🍳</span>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-1">Welcome!</h4>
                        <p className="text-xs text-gray-500 mb-6">Sign in to continue</p>
                        <div className="space-y-3">
                          <div className="bg-gray-100 rounded-xl h-10" />
                          <div className="bg-gray-100 rounded-xl h-10" />
                          <div className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] rounded-xl h-10 flex items-center justify-center">
                            <span className="text-white text-sm font-medium">Sign In</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone 2 (front) */}
                <div className="absolute top-4 left-0 w-56 h-[450px] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl transform rotate-6 -translate-x-8 z-10">
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-xl z-10" />

                    <div className="h-full bg-gradient-to-b from-[#FFF5F0] to-white p-4 pt-8">
                      {/* Discovery screen mockup */}
                      <div className="mb-3">
                        <h4 className="font-bold text-gray-900 text-sm">Discover</h4>
                        <p className="text-xs text-gray-500">Find meals near you</p>
                      </div>
                      <div className="bg-gray-100 rounded-full h-8 mb-3" />
                      <div className="flex gap-2 mb-3">
                        {['All', '🍝', '🍣'].map((t, i) => (
                          <div
                            key={i}
                            className={`px-2 py-1 rounded-full text-xs ${i === 0 ? 'bg-[#FF6B35] text-white' : 'bg-gray-100'}`}
                          >
                            {t}
                          </div>
                        ))}
                      </div>
                      {/* Mini meal cards */}
                      <div className="space-y-2">
                        {[1, 2].map((i) => (
                          <div key={i} className="bg-white rounded-xl p-2 shadow-sm">
                            <div className="w-full h-16 bg-gradient-to-br from-[#FFF5F0] to-[#FFF8E6] rounded-lg mb-2" />
                            <div className="h-2 bg-gray-200 rounded w-3/4 mb-1" />
                            <div className="h-2 bg-gray-100 rounded w-1/2" />
                          </div>
                        ))}
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

export default Download
