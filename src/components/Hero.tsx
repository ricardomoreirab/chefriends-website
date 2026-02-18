import { Link } from '@heroui/react'
import { motion } from 'framer-motion'

import pepeImg from '../assets/chefs/pepe.png'
import yukiImg from '../assets/chefs/yuki.png'
import jacquesImg from '../assets/chefs/jacques.png'
import carlosImg from '../assets/chefs/carlos.png'
import somchaiImg from '../assets/chefs/somchai.png'

const chefAvatars = [
  { image: pepeImg, color: '#E85D2C', label: 'Pepe' },
  { image: yukiImg, color: '#D94040', label: 'Yuki' },
  { image: carlosImg, color: '#D4A017', label: 'Carlos' },
  { image: jacquesImg, color: '#4A86C8', label: 'Jacques' },
  { image: somchaiImg, color: '#8B6FC0', label: 'Somchai' },
]

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-cream">
      {/* Soft decorative blobs */}
      <div className="absolute top-20 -left-40 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-40 w-[400px] h-[400px] bg-chef-jacques/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-accent/15 text-forest px-4 py-1.5 rounded-pill text-sm font-medium mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-dark"></span>
              </span>
              <span>Coming soon to iOS</span>
            </motion.div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-forest leading-[1.1] mb-6">
              Your personal{' '}
              <span className="italic text-chef-pepe">AI chef</span>{' '}
              friends
            </h1>

            <p className="text-lg sm:text-xl text-forest-light mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Snap your fridge, pick a chef, and cook something amazing.
              8 AI chefs, each specialized in a different cuisine, guide you
              step by step.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#coming-soon"
                className="bg-forest text-cream font-semibold px-8 py-3.5 rounded-pill text-center hover:bg-forest/90 transition-colors shadow-soft"
              >
                Join the Waitlist
              </Link>
              <Link
                href="#meet-the-chefs"
                className="border border-border text-forest font-semibold px-8 py-3.5 rounded-pill text-center hover:bg-card-white hover:shadow-soft transition-all"
              >
                Meet the Chefs
              </Link>
            </div>

            {/* Chef avatars row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex items-center gap-4 justify-center lg:justify-start"
            >
              <div className="flex -space-x-2.5">
                {chefAvatars.map((chef, i) => (
                  <img
                    key={i}
                    src={chef.image}
                    alt={chef.label}
                    className="w-10 h-10 rounded-full object-cover border-2 border-cream"
                    style={{ backgroundColor: `${chef.color}20` }}
                  />
                ))}
                <div className="chef-avatar w-10 h-10 text-xs bg-forest-muted border-2 border-cream">
                  +3
                </div>
              </div>
              <p className="text-sm text-forest-light">
                <span className="font-semibold text-forest">8 chefs</span> ready to cook with you
              </p>
            </motion.div>
          </motion.div>

          {/* Right Content - Accurate Ingredients Screen Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative animate-gentle-float w-[300px] sm:w-[340px]">
              {/* Side buttons — left */}
              <div className="absolute -left-[2.5px] top-[100px] w-[3px] h-[28px] bg-[#2C2C2E] rounded-l-sm z-20" />
              <div className="absolute -left-[2.5px] top-[142px] w-[3px] h-[44px] bg-[#2C2C2E] rounded-l-sm z-20" />
              <div className="absolute -left-[2.5px] top-[198px] w-[3px] h-[44px] bg-[#2C2C2E] rounded-l-sm z-20" />
              {/* Side button — right */}
              <div className="absolute -right-[2.5px] top-[160px] w-[3px] h-[64px] bg-[#2C2C2E] rounded-r-sm z-20" />

              {/* Phone body */}
              <div className="bg-[#1D1D1F] rounded-[48px] sm:rounded-[52px] p-[10px] sm:p-[12px] shadow-[0_25px_60px_-10px_rgba(0,0,0,0.25)]">
                <div className="bg-cream rounded-[40px] sm:rounded-[42px] overflow-hidden relative flex flex-col" style={{ aspectRatio: '9 / 19.5' }}>
                  {/* Dynamic Island */}
                  <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-[#1D1D1F] rounded-full z-10" />

                  {/* Status bar (below Dynamic Island) */}
                  <div className="px-8 pt-[44px] pb-1 flex justify-between items-center shrink-0">
                    <span className="text-[11px] text-forest-muted font-semibold">9:41</span>
                    <div className="flex gap-1 items-center">
                      <svg className="w-[15px] h-[11px] text-forest-muted/60" viewBox="0 0 16 12"><path d="M1 7.5a6.5 6.5 0 0 1 14 0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M4 9.5a3.5 3.5 0 0 1 8 0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="8" cy="11" r="1" fill="currentColor"/></svg>
                      <svg className="w-[15px] h-[11px] text-forest-muted/60" viewBox="0 0 16 12"><rect x="0.5" y="1" width="3" height="10" rx="0.5" fill="currentColor" opacity="0.3"/><rect x="4.5" y="3" width="3" height="8" rx="0.5" fill="currentColor" opacity="0.5"/><rect x="8.5" y="5" width="3" height="6" rx="0.5" fill="currentColor" opacity="0.7"/><rect x="12.5" y="7" width="3" height="4" rx="0.5" fill="currentColor"/></svg>
                      <div className="flex items-center">
                        <div className="w-[22px] h-[11px] rounded-[2.5px] border border-forest-muted/40 flex items-center p-[1.5px]">
                          <div className="h-full w-[65%] bg-forest-muted/60 rounded-[1px]" />
                        </div>
                        <div className="w-[1.5px] h-[4px] bg-forest-muted/40 rounded-r-full ml-[0.5px]" />
                      </div>
                    </div>
                  </div>

                  {/* Content area */}
                  <div className="flex-1 flex flex-col min-h-0">

                  {/* Header with title and icons */}
                  <div className="px-5 pt-1 pb-2">
                    <div className="flex items-center justify-between">
                      <h2 className="font-serif text-lg text-forest">Chefriends</h2>
                      <div className="flex gap-1.5">
                        <div className="w-7 h-7 bg-card-white rounded-[8px] border border-border flex items-center justify-center">
                          <svg className="w-3.5 h-3.5 text-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                        </div>
                        <div className="w-7 h-7 bg-card-white rounded-[8px] border border-border flex items-center justify-center">
                          <svg className="w-3.5 h-3.5 text-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                        </div>
                        <div className="w-7 h-7 bg-card-white rounded-[8px] border border-border flex items-center justify-center">
                          <svg className="w-3.5 h-3.5 text-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        </div>
                      </div>
                    </div>
                    <p className="text-[11px] text-forest-light mt-0.5">Tell us what's in your kitchen</p>
                  </div>

                  {/* Mode toggle */}
                  <div className="mx-5 mb-3 flex rounded-pill border border-border overflow-hidden">
                    <div className="flex-1 bg-accent text-center py-1.5 flex items-center justify-center gap-1">
                      <svg className="w-3 h-3 text-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>
                      <span className="text-[10px] font-bold text-forest">FOOD</span>
                    </div>
                    <div className="flex-1 bg-card-white text-center py-1.5 flex items-center justify-center gap-1">
                      <svg className="w-3 h-3 text-forest-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 22h8l-4-18z"/><path d="M17 14l3-8"/></svg>
                      <span className="text-[10px] font-bold text-forest-muted">DRINKS</span>
                    </div>
                  </div>

                  {/* Scan buttons row */}
                  <div className="px-5 mb-2 flex gap-2">
                    <div className="flex-1 bg-card-white border border-border rounded-[16px] overflow-hidden">
                      <div className="py-3 px-2 text-center">
                        <svg className="w-5 h-5 mx-auto text-forest mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                        <p className="text-[10px] font-bold text-forest">SCAN FRIDGE</p>
                        <p className="text-[8px] text-forest-muted mt-0.5">Snap your fridge</p>
                      </div>
                      <div className="h-px bg-border mx-3" />
                      <div className="flex items-center justify-center gap-1 py-2">
                        <svg className="w-3 h-3 text-forest-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="13" r="3"/><path d="M16 3v4a1 1 0 0 1-1 1h-2"/></svg>
                        <span className="text-[8px] text-forest-muted">Upload photo</span>
                      </div>
                    </div>
                    <div className="flex-1 bg-card-white border border-border rounded-[16px] overflow-hidden">
                      <div className="py-3 px-2 text-center">
                        <svg className="w-5 h-5 mx-auto text-forest mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                        <p className="text-[10px] font-bold text-forest">SCAN DISH</p>
                        <p className="text-[8px] text-forest-muted mt-0.5">Snap a plate</p>
                      </div>
                      <div className="h-px bg-border mx-3" />
                      <div className="flex items-center justify-center gap-1 py-2">
                        <svg className="w-3 h-3 text-forest-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="13" r="3"/><path d="M16 3v4a1 1 0 0 1-1 1h-2"/></svg>
                        <span className="text-[8px] text-forest-muted">Upload photo</span>
                      </div>
                    </div>
                  </div>

                  {/* Divider: or type a dish name */}
                  <div className="px-5 mb-2 flex items-center gap-2">
                    <div className="flex-1 h-px bg-border" />
                    <span className="text-[8px] text-forest-muted">or type a dish name</span>
                    <div className="flex-1 h-px bg-border" />
                  </div>

                  {/* Dish name input */}
                  <div className="mx-5 mb-2">
                    <div className="bg-card-white border border-border rounded-[12px] px-3 py-2 text-center">
                      <span className="text-[10px] text-forest-muted/50">e.g., Carbonara, Pad Thai...</span>
                    </div>
                  </div>

                  {/* Divider: and add your ingredients */}
                  <div className="px-5 mb-2 flex items-center gap-2">
                    <div className="flex-1 h-px bg-border" />
                    <span className="text-[8px] text-forest-muted">and add your ingredients</span>
                    <div className="flex-1 h-px bg-border" />
                  </div>

                  {/* Ingredient input row */}
                  <div className="px-5 mb-2 flex gap-2">
                    <div className="flex-1 bg-card-white border border-border rounded-[12px] px-3 py-2">
                      <span className="text-[10px] text-forest-muted/50">e.g., chicken, rice...</span>
                    </div>
                    <div className="bg-accent px-3.5 py-2 rounded-pill flex items-center">
                      <span className="text-[10px] font-bold text-forest">ADD</span>
                    </div>
                  </div>

                  {/* Ingredient chips */}
                  <div className="px-5 pb-2">
                    <div className="flex flex-wrap gap-1.5">
                      {['Chicken', 'Garlic', 'Lemon', 'Rosemary'].map((ing) => (
                        <span key={ing} className="bg-card-white border border-border text-forest text-[10px] px-2.5 py-1 rounded-pill font-medium flex items-center gap-1">
                          {ing}
                          <svg className="w-2.5 h-2.5 text-forest-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12"/></svg>
                        </span>
                      ))}
                    </div>
                  </div>

                  </div>{/* end content area */}

                  {/* Footer — FIND RECIPES button */}
                  <div className="shrink-0 border-t border-border px-4 pt-2.5 pb-1">
                    <div className="bg-accent text-center py-2.5 rounded-pill text-[12px] font-bold text-forest shadow-soft">
                      FIND RECIPES
                    </div>
                  </div>

                  {/* Home indicator — pinned to bottom */}
                  <div className="flex justify-center pb-2.5 pt-1 shrink-0">
                    <div className="w-[110px] h-[4px] bg-forest/15 rounded-full" />
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
