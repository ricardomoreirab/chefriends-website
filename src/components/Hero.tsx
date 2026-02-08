import { Button, Link } from '@heroui/react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="gradient-hero min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#FFF5F0] text-[#FF6B35] px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B35] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B35]"></span>
              </span>
              <span>Coming Soon</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Your Personal{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#F7931E]">
                AI Chef Friends
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Meet AI chefs specialized in every cuisine — from Pepe, your Italian home cook, to Yuki, your sushi master.
              Get recipes, tips, and step-by-step guidance whenever you need it.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                as={Link}
                href="#coming-soon"
                className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white font-semibold text-lg px-8"
                radius="full"
                size="lg"
              >
                Join the Waitlist
              </Button>
              <Button
                as={Link}
                href="#meet-the-chefs"
                variant="bordered"
                className="border-2 border-gray-300 text-gray-700 font-semibold text-lg px-8 hover:border-[#FF6B35] hover:text-[#FF6B35]"
                radius="full"
                size="lg"
              >
                Meet the Chefs
              </Button>
            </div>

            {/* Info badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex flex-wrap gap-6 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FFF5F0] rounded-full flex items-center justify-center">
                  <span className="text-lg">🤖</span>
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-900">Free AI Chefs</p>
                  <p className="text-xs text-gray-500">Chat anytime</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FFF8E6] rounded-full flex items-center justify-center">
                  <span className="text-lg">👨‍🍳</span>
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-900">Live Classes</p>
                  <p className="text-xs text-gray-500">With real chefs</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Background decorations */}
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#FFD4BF] rounded-full opacity-30 blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-[#FFE299] rounded-full opacity-30 blur-3xl" />

              {/* Phone mockup */}
              <div className="relative z-10 animate-float">
                <div className="w-72 h-[580px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Phone notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-2xl z-10" />

                    {/* App content mockup - AI Chat */}
                    <div className="h-full pt-10 px-4 pb-4 bg-gradient-to-b from-[#FFF5F0] to-white flex flex-col">
                      {/* Status bar */}
                      <div className="flex justify-between items-center mb-4 px-2">
                        <span className="text-xs font-medium text-gray-800">9:41</span>
                        <div className="flex gap-1">
                          <div className="w-4 h-2 bg-gray-800 rounded-sm" />
                          <div className="w-4 h-2 bg-gray-800 rounded-sm" />
                          <div className="w-6 h-3 bg-gray-800 rounded-sm" />
                        </div>
                      </div>

                      {/* Chat header - Pepe */}
                      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-xl">🇮🇹</span>
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-gray-900">Pepe</h3>
                          <p className="text-xs text-green-500">Online</p>
                        </div>
                      </div>

                      {/* Chat messages */}
                      <div className="flex-1 space-y-3 overflow-hidden">
                        {/* AI message */}
                        <div className="flex gap-2">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-xs">🇮🇹</span>
                          </div>
                          <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-3 py-2 max-w-[85%]">
                            <p className="text-xs text-gray-800">Ciao! I'm Pepe, your Italian home cook. What shall we make today? 🍝</p>
                          </div>
                        </div>

                        {/* User message */}
                        <div className="flex justify-end">
                          <div className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] rounded-2xl rounded-tr-sm px-3 py-2 max-w-[80%]">
                            <p className="text-xs text-white">How do I make a perfect carbonara?</p>
                          </div>
                        </div>

                        {/* AI response */}
                        <div className="flex gap-2">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-xs">🇮🇹</span>
                          </div>
                          <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-3 py-2 max-w-[85%]">
                            <p className="text-xs text-gray-800">Ah, carbonara! The secret is using guanciale, not bacon. Let me walk you through it step by step...</p>
                          </div>
                        </div>

                        {/* Recipe card */}
                        <div className="ml-8 bg-white rounded-xl p-2 shadow-sm border border-gray-100">
                          <div className="w-full h-16 bg-gradient-to-br from-[#FFF5F0] to-[#FFF8E6] rounded-lg mb-2 flex items-center justify-center">
                            <span className="text-2xl">🍝</span>
                          </div>
                          <h4 className="font-semibold text-xs text-gray-900">Classic Carbonara</h4>
                          <p className="text-[10px] text-gray-500">4 ingredients · 20 min</p>
                        </div>
                      </div>

                      {/* Chat input */}
                      <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center gap-2 mt-2">
                        <span className="text-gray-400 text-xs flex-1">Ask Pepe anything...</span>
                        <div className="w-6 h-6 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">↑</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="absolute -left-8 top-20 bg-white rounded-2xl p-4 shadow-xl animate-float-delayed z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">🇯🇵</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Yuki is online</p>
                    <p className="text-xs text-gray-500">Sushi master</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute -right-4 bottom-32 bg-white rounded-2xl p-4 shadow-xl animate-float z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FFF8E6] rounded-full flex items-center justify-center">
                    <span className="text-xl">🎥</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Live class at 7pm</p>
                    <p className="text-xs text-gray-500">Chef Maria · Pasta</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
