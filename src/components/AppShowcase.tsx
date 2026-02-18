import { motion } from 'framer-motion'

import pepeImg from '../assets/chefs/pepe.png'
import yukiImg from '../assets/chefs/yuki.png'
import jacquesImg from '../assets/chefs/jacques.png'
import carlosImg from '../assets/chefs/carlos.png'

/* ────────────────────────────────────── */
/*  Reusable phone-frame wrapper         */
/* ────────────────────────────────────── */
const PhoneFrame = ({ children }: { children: React.ReactNode }) => (
  <div className="relative w-[280px] sm:w-[300px] mx-auto">
    {/* Side buttons — left */}
    <div className="absolute -left-[2.5px] top-[90px] w-[3px] h-[28px] bg-[#2C2C2E] rounded-l-sm" />
    <div className="absolute -left-[2.5px] top-[132px] w-[3px] h-[44px] bg-[#2C2C2E] rounded-l-sm" />
    <div className="absolute -left-[2.5px] top-[186px] w-[3px] h-[44px] bg-[#2C2C2E] rounded-l-sm" />
    {/* Side button — right */}
    <div className="absolute -right-[2.5px] top-[148px] w-[3px] h-[64px] bg-[#2C2C2E] rounded-r-sm" />

    {/* Phone body */}
    <div className="bg-[#1D1D1F] rounded-[48px] sm:rounded-[52px] p-[10px] sm:p-[12px] shadow-[0_25px_60px_-10px_rgba(0,0,0,0.25)]">
      {/* Screen with iPhone 15 Pro aspect ratio */}
      <div className="bg-cream rounded-[40px] sm:rounded-[42px] overflow-hidden relative flex flex-col" style={{ aspectRatio: '9 / 19.5' }}>
        {/* Dynamic Island */}
        <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[90px] h-[25px] bg-[#1D1D1F] rounded-full z-10" />

        {/* Status bar (below Dynamic Island) */}
        <div className="px-7 pt-[42px] pb-1 flex justify-between items-center shrink-0">
          <span className="text-[10px] text-forest-muted font-semibold">9:41</span>
          <div className="flex gap-1 items-center">
            <svg className="w-[14px] h-[10px] text-forest-muted/60" viewBox="0 0 16 12"><path d="M1 7.5a6.5 6.5 0 0 1 14 0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M4 9.5a3.5 3.5 0 0 1 8 0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="8" cy="11" r="1" fill="currentColor"/></svg>
            <svg className="w-[14px] h-[10px] text-forest-muted/60" viewBox="0 0 16 12"><rect x="0.5" y="1" width="3" height="10" rx="0.5" fill="currentColor" opacity="0.3"/><rect x="4.5" y="3" width="3" height="8" rx="0.5" fill="currentColor" opacity="0.5"/><rect x="8.5" y="5" width="3" height="6" rx="0.5" fill="currentColor" opacity="0.7"/><rect x="12.5" y="7" width="3" height="4" rx="0.5" fill="currentColor"/></svg>
            <div className="flex items-center">
              <div className="w-[20px] h-[10px] rounded-[2.5px] border border-forest-muted/40 flex items-center p-[1.5px]">
                <div className="h-full w-[65%] bg-forest-muted/60 rounded-[1px]" />
              </div>
              <div className="w-[1.5px] h-[4px] bg-forest-muted/40 rounded-r-full ml-[0.5px]" />
            </div>
          </div>
        </div>

        {/* Content area */}
        <div className="flex-1 flex flex-col min-h-0">
          {children}
        </div>

        {/* Home indicator — pinned to bottom */}
        <div className="flex justify-center pb-2.5 pt-1.5 shrink-0">
          <div className="w-[100px] h-[4px] bg-forest/15 rounded-full" />
        </div>
      </div>
    </div>
  </div>
)

/* ────────────────────────────────────── */
/*  Screen 1 — Chef Select               */
/* ────────────────────────────────────── */
const ChefSelectMockup = () => (
  <PhoneFrame>
    {/* Header */}
    <div className="px-4 pt-1 pb-3">
      <div className="flex items-center mb-1.5">
        <div className="w-8 h-8 bg-card-white rounded-[10px] border border-border flex items-center justify-center">
          <svg className="w-4 h-4 text-forest-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        </div>
        <p className="font-serif text-[13px] text-forest text-center flex-1 leading-tight">CHOOSE YOUR<br/>CHEF FRIEND</p>
        <div className="w-8 h-8 bg-card-white rounded-[10px] border border-border flex items-center justify-center">
          <svg className="w-4 h-4 text-forest-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </div>
      </div>
      <p className="text-[9px] text-forest-light">Pick a chef friend to cook with today</p>
    </div>

    {/* Border separator */}
    <div className="h-px bg-border" />

    {/* Grid of chefs */}
    <div className="px-3 py-3 grid grid-cols-2 gap-2">
      {[
        { img: pepeImg, name: 'Pepe', specialty: 'Italian home cooking', color: '#E85D2C', selected: true },
        { img: yukiImg, name: 'Yuki', specialty: 'Japanese home cooking', color: '#D94040', selected: false },
        { img: jacquesImg, name: 'Jacques', specialty: 'French home cooking', color: '#4A86C8', selected: false },
        { img: carlosImg, name: 'Carlos', specialty: 'Mexican home cooking', color: '#D4A017', selected: false },
      ].map((chef) => (
        <div
          key={chef.name}
          className={`bg-card-white rounded-[16px] overflow-hidden text-center relative ${
            chef.selected ? 'border-2 shadow-medium' : 'border border-border'
          }`}
          style={chef.selected ? { borderColor: chef.color } : {}}
        >
          {/* Favorite heart */}
          <svg className="absolute top-1.5 right-1.5 w-3.5 h-3.5 text-forest-muted/30 z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          <div className="aspect-[0.9/1] flex items-end justify-center px-0.5 pt-1">
            <img src={chef.img} alt={chef.name} className="w-full h-full object-contain" />
          </div>
          <div className="py-1.5 px-1">
            <p className="text-[11px] font-serif text-forest">{chef.name}</p>
            <p className="text-[8px] font-medium" style={{ color: chef.color }}>{chef.specialty}</p>
          </div>
          {chef.selected && <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ backgroundColor: chef.color }} />}
        </div>
      ))}
    </div>
  </PhoneFrame>
)

/* ────────────────────────────────────── */
/*  Screen 2 — Recipe Suggestions         */
/* ────────────────────────────────────── */
const RecipesMockup = () => (
  <PhoneFrame>
    {/* Header with chef */}
    <div className="px-4 pt-1 pb-2 flex items-center border-b border-border">
      <div className="w-8 h-8 flex items-center justify-center">
        <svg className="w-4 h-4 text-forest-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
      </div>
      <div className="flex-1 flex items-center justify-center gap-2">
        <img src={pepeImg} alt="Pepe" className="w-7 h-7 rounded-full object-cover" style={{ backgroundColor: '#E85D2C20' }} />
        <span className="font-serif text-sm" style={{ color: '#E85D2C' }}>Pepe</span>
      </div>
      <div className="w-8" />
    </div>

    {/* Ingredient strip */}
    <div className="bg-cream-dark border-b border-border px-4 py-2 flex gap-1.5 overflow-hidden">
      {['Chicken', 'Garlic', 'Lemon', 'Rosemary'].map(i => (
        <span key={i} className="bg-card-white border text-[9px] px-2.5 py-0.5 rounded-pill font-medium whitespace-nowrap capitalize" style={{ borderColor: '#E85D2C44', color: '#E85D2C' }}>{i}</span>
      ))}
    </div>

    {/* Section title */}
    <div className="px-5 pt-3 pb-1">
      <p className="font-serif text-[13px] text-forest">RECIPE IDEAS</p>
    </div>

    {/* Recipe cards */}
    <div className="px-4 pb-3 space-y-2.5">
      {/* Recipe card 1 */}
      <div className="bg-card-white rounded-[16px] p-3 border border-border" style={{ borderLeftWidth: 4, borderLeftColor: '#4A7C59' }}>
        <div className="flex justify-between items-start mb-1">
          <p className="font-serif text-[11px] text-forest flex-1">Lemon Herb Roast Chicken</p>
          <span className="text-[8px] font-bold text-white px-2 py-0.5 rounded-pill ml-2" style={{ backgroundColor: '#4A7C59' }}>Easy</span>
        </div>
        <p className="text-[9px] text-forest-light mb-2 leading-relaxed">Classic roasted chicken with bright lemon and fresh rosemary.</p>
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-1">
            <svg className="w-2.5 h-2.5 text-forest-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span className="text-[8px] text-forest-light">45 min</span>
          </div>
          <div className="flex gap-1">
            <span className="text-[8px] bg-cream-dark border border-border px-1.5 py-0.5 rounded-pill text-forest-light">Dinner</span>
            <span className="text-[8px] bg-cream-dark border border-border px-1.5 py-0.5 rounded-pill text-forest-light">Italian</span>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-8 h-8 rounded-full border-[1.5px] flex items-center justify-center shrink-0" style={{ borderColor: '#4A7C59' }}>
            <svg className="w-3.5 h-3.5" style={{ color: '#4A7C59' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 4v6h6M23 20v-6h-6"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/></svg>
          </div>
          <div className="flex-1 text-center py-2 rounded-pill text-[9px] font-bold text-white" style={{ backgroundColor: '#4A7C59' }}>
            LET'S COOK THIS!
          </div>
        </div>
      </div>

      {/* Recipe card 2 */}
      <div className="bg-card-white rounded-[16px] p-3 border border-border" style={{ borderLeftWidth: 4, borderLeftColor: '#D4A017' }}>
        <div className="flex justify-between items-start mb-1">
          <p className="font-serif text-[11px] text-forest flex-1">Garlic Chicken Risotto</p>
          <span className="text-[8px] font-bold text-white px-2 py-0.5 rounded-pill ml-2" style={{ backgroundColor: '#D4A017' }}>Medium</span>
        </div>
        <p className="text-[9px] text-forest-light mb-2 leading-relaxed">Creamy risotto with tender chicken and aromatic garlic.</p>
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-1">
            <svg className="w-2.5 h-2.5 text-forest-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span className="text-[8px] text-forest-light">35 min</span>
          </div>
          <div className="flex gap-1">
            <span className="text-[8px] bg-cream-dark border border-border px-1.5 py-0.5 rounded-pill text-forest-light">Comfort</span>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-8 h-8 rounded-full border-[1.5px] flex items-center justify-center shrink-0" style={{ borderColor: '#D4A017' }}>
            <svg className="w-3.5 h-3.5" style={{ color: '#D4A017' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 4v6h6M23 20v-6h-6"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/></svg>
          </div>
          <div className="flex-1 text-center py-2 rounded-pill text-[9px] font-bold text-white" style={{ backgroundColor: '#D4A017' }}>
            LET'S COOK THIS!
          </div>
        </div>
      </div>
    </div>
  </PhoneFrame>
)

/* ────────────────────────────────────── */
/*  Screen 3 — Cooking Session            */
/* ────────────────────────────────────── */
const CookingMockup = () => (
  <PhoneFrame>
    {/* Header */}
    <div className="px-4 pt-1 pb-2 flex items-center">
      <div className="w-8 h-8 flex items-center justify-center">
        <svg className="w-4 h-4 text-forest-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </div>
      <div className="flex-1 text-center">
        <p className="font-serif text-[11px] text-forest">Lemon Herb Roast Chicken</p>
        <p className="text-[9px] mt-0.5" style={{ color: '#E85D2C' }}>Pepe</p>
      </div>
      <div className="w-8" />
    </div>

    {/* Progress bar */}
    <div className="h-[3px] bg-border">
      <div className="h-full w-[43%]" style={{ backgroundColor: '#E85D2C' }} />
    </div>

    {/* Step content */}
    <div className="flex-1 px-5 pt-5">
      {/* Step counter */}
      <p className="font-serif text-[13px] text-center mb-3" style={{ color: '#E85D2C' }}>STEP 3 OF 7</p>

      {/* Progress dots */}
      <div className="flex justify-center gap-1.5 mb-4">
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#4A7C59' }} />
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#4A7C59' }} />
        <div className="w-6 h-2 rounded-full" style={{ backgroundColor: '#E85D2C' }} />
        <div className="w-2 h-2 rounded-full bg-border" />
        <div className="w-2 h-2 rounded-full bg-border" />
        <div className="w-2 h-2 rounded-full bg-border" />
        <div className="w-2 h-2 rounded-full bg-border" />
      </div>

      {/* Time badge */}
      <div className="flex justify-center mb-4">
        <span className="bg-card-white border border-border rounded-pill px-3 py-1 text-[9px] text-forest-light font-medium flex items-center gap-1.5">
          <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          ~10 min
        </span>
      </div>

      {/* Instruction card */}
      <div className="p-4 bg-card-white rounded-[16px] border shadow-soft" style={{ borderColor: '#E85D2C' }}>
        <p className="text-[11px] text-forest text-center leading-relaxed">
          Place the chicken in a roasting pan, rub with olive oil, salt, and pepper. Stuff the cavity with lemon halves and rosemary sprigs.
        </p>
      </div>

      {/* Chef tip */}
      <div className="mt-3 p-3 bg-cream-dark rounded-[16px] border border-accent">
        <p className="text-[9px] font-bold text-accent-dark uppercase tracking-wider mb-1">PEPE'S TIP</p>
        <p className="text-[10px] text-forest-light italic leading-relaxed">
          Let the chicken come to room temperature for 30 minutes before roasting — it cooks more evenly!
        </p>
      </div>
    </div>

    {/* Footer nav buttons */}
    <div className="shrink-0 border-t border-border px-4 py-2.5 flex gap-2.5">
      <div className="flex-1 bg-card-white border border-border text-center py-2.5 rounded-pill text-[10px] font-bold text-forest-light">
        PREV
      </div>
      <div className="flex-1 text-center py-2.5 rounded-pill text-[10px] font-bold text-white shadow-soft" style={{ backgroundColor: '#E85D2C' }}>
        NEXT
      </div>
    </div>
  </PhoneFrame>
)

/* ────────────────────────────────────── */
/*  Main section                          */
/* ────────────────────────────────────── */
const AppShowcase = () => {
  return (
    <section className="py-24 bg-cream-dark relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-forest-muted tracking-wide uppercase mb-4">
            The App
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest mb-6">
            See it{' '}
            <span className="italic">in action</span>
          </h2>
          <p className="text-lg text-forest-light max-w-2xl mx-auto">
            From picking your chef to plating the final dish. Here's what
            cooking with Chefriends looks like.
          </p>
        </motion.div>

        {/* 3 phone screens side by side */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Screen 1: Chef Select */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
            className="text-center"
          >
            <ChefSelectMockup />
            <div className="mt-6">
              <span className="inline-block bg-forest text-cream text-xs font-semibold px-3 py-1 rounded-pill mb-2">Step 1</span>
              <h3 className="font-serif text-lg text-forest mb-1">Pick a Chef</h3>
              <p className="text-sm text-forest-light">Choose the cuisine you're craving. Each chef brings their own authentic style.</p>
            </div>
          </motion.div>

          {/* Screen 2: Recipe Suggestions */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-center"
          >
            <RecipesMockup />
            <div className="mt-6">
              <span className="inline-block bg-forest text-cream text-xs font-semibold px-3 py-1 rounded-pill mb-2">Step 2</span>
              <h3 className="font-serif text-lg text-forest mb-1">Get Recipes</h3>
              <p className="text-sm text-forest-light">Your chef suggests recipes based on what you have. Refresh for new ideas.</p>
            </div>
          </motion.div>

          {/* Screen 3: Cooking Session */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <CookingMockup />
            <div className="mt-6">
              <span className="inline-block bg-forest text-cream text-xs font-semibold px-3 py-1 rounded-pill mb-2">Step 3</span>
              <h3 className="font-serif text-lg text-forest mb-1">Cook Step by Step</h3>
              <p className="text-sm text-forest-light">Swipe through instructions with chef tips, timers, and ingredient scaling.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AppShowcase
