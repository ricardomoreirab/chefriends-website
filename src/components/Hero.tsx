import { Button, Link } from '@heroui/react'
import { motion } from 'framer-motion'
import PixelChef from './PixelChef'

const Hero = () => {
  return (
    <section className="gradient-hero-dark grid-bg min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Ambient glow decorations */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-pixel-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-pixel-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
              className="inline-flex items-center gap-2 bg-pixel-orange/10 text-pixel-orange px-4 py-2 text-xs font-pixel mb-8 pixel-border-subtle"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pixel-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pixel-orange"></span>
              </span>
              <span>COMING SOON</span>
            </motion.div>

            <h1 className="font-pixel text-2xl sm:text-3xl lg:text-4xl text-text-bright leading-relaxed mb-8">
              Your Personal{' '}
              <span className="text-pixel-orange glow-orange block mt-2">
                AI Chef Friends
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-text-dim mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Meet AI chefs specialized in every cuisine — from Pepe, your Italian home cook,
              to Yuki, your sushi master. Get recipes, tips, and step-by-step guidance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                as={Link}
                href="#coming-soon"
                className="bg-pixel-orange text-deep font-bold px-8 font-pixel text-xs tracking-wider"
                radius="none"
                size="lg"
              >
                JOIN WAITLIST
              </Button>
              <Button
                as={Link}
                href="#meet-the-chefs"
                variant="bordered"
                className="border-2 border-pixel-orange/40 text-pixel-orange font-bold px-8 hover:bg-pixel-orange/10 font-pixel text-xs tracking-wider"
                radius="none"
                size="lg"
              >
                MEET CHEFS
              </Button>
            </div>

            {/* Info badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pixel-green/10 border border-pixel-green/30 flex items-center justify-center">
                  <span className="text-pixel-green font-pixel text-xs">AI</span>
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-text-bright">Free AI Chefs</p>
                  <p className="text-xs text-text-dim">Chat anytime</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pixel-gold/10 border border-pixel-gold/30 flex items-center justify-center">
                  <span className="text-pixel-gold font-pixel text-[8px]">PRO</span>
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-text-bright">Live Classes</p>
                  <p className="text-xs text-text-dim">With real chefs</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Retro Terminal Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Terminal device frame */}
              <div className="relative z-10 animate-float">
                <div className="w-80 pixel-border bg-deep p-1 glow-box-orange">
                  {/* Terminal title bar */}
                  <div className="bg-pixel-orange/20 px-3 py-2 flex items-center gap-2 border-b border-pixel-orange/30">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 bg-pixel-red" />
                      <div className="w-2.5 h-2.5 bg-pixel-gold" />
                      <div className="w-2.5 h-2.5 bg-pixel-green" />
                    </div>
                    <span className="font-pixel text-[8px] text-pixel-orange ml-2">chefriends.app</span>
                  </div>

                  {/* Terminal screen */}
                  <div className="crt-screen bg-[#0d1117] p-4 min-h-[420px] flex flex-col">
                    {/* Chat header */}
                    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-pixel-orange/20">
                      <div className="animate-pixel-bounce">
                        <PixelChef chef="pepe" size={5} />
                      </div>
                      <div>
                        <p className="font-pixel text-[10px] text-pixel-orange">PEPE</p>
                        <p className="text-xs text-pixel-green flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-pixel-green inline-block" />
                          Online
                        </p>
                      </div>
                    </div>

                    {/* Chat messages */}
                    <div className="flex-1 space-y-3 relative z-10">
                      {/* AI message */}
                      <div className="flex gap-2">
                        <span className="text-pixel-orange font-pixel text-[8px] mt-1 flex-shrink-0">&gt;</span>
                        <p className="text-sm text-text-bright">
                          Ciao! I'm Pepe, your Italian home cook. What shall we make today?
                        </p>
                      </div>

                      {/* User message */}
                      <div className="bg-pixel-orange/10 border-l-2 border-pixel-orange px-3 py-2">
                        <p className="text-sm text-pixel-orange">
                          How do I make a perfect carbonara?
                        </p>
                      </div>

                      {/* AI response */}
                      <div className="flex gap-2">
                        <span className="text-pixel-orange font-pixel text-[8px] mt-1 flex-shrink-0">&gt;</span>
                        <p className="text-sm text-text-bright">
                          Ah, carbonara! The secret is using guanciale, not bacon. Let me walk you through it...
                        </p>
                      </div>

                      {/* Recipe card */}
                      <div className="bg-card/50 border border-pixel-orange/20 p-3 ml-4">
                        <div className="flex items-center gap-3">
                          <span className="font-pixel text-[10px] text-pixel-gold">RECIPE</span>
                          <div className="h-px flex-1 bg-pixel-orange/20" />
                        </div>
                        <p className="text-text-bright font-semibold text-sm mt-2">Classic Carbonara</p>
                        <p className="text-text-dim text-xs mt-1">4 ingredients &middot; 20 min &middot; Easy</p>
                        <div className="flex gap-2 mt-2">
                          {['Guanciale', 'Eggs', 'Pecorino', 'Pepper'].map(i => (
                            <span key={i} className="text-[10px] px-1.5 py-0.5 bg-pixel-orange/10 text-pixel-orange border border-pixel-orange/20">
                              {i}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Input prompt */}
                    <div className="flex items-center gap-2 mt-3 pt-3 border-t border-pixel-orange/20 relative z-10">
                      <span className="text-pixel-green font-pixel text-[10px]">$</span>
                      <span className="text-text-dim text-sm flex-1">Ask Pepe anything...</span>
                      <span className="w-2 h-4 bg-pixel-orange animate-blink" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
