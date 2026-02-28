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

const PhoneFrame = ({ children }: { children: React.ReactNode }) => (
  <div className="relative w-[280px] sm:w-[300px] mx-auto">
    <div className="absolute -left-[2.5px] top-[90px] w-[3px] h-[28px] bg-[#2C2C2E] rounded-l-sm" />
    <div className="absolute -left-[2.5px] top-[132px] w-[3px] h-[44px] bg-[#2C2C2E] rounded-l-sm" />
    <div className="absolute -left-[2.5px] top-[186px] w-[3px] h-[44px] bg-[#2C2C2E] rounded-l-sm" />
    <div className="absolute -right-[2.5px] top-[148px] w-[3px] h-[64px] bg-[#2C2C2E] rounded-r-sm" />
    <div className="bg-[#1D1D1F] rounded-[48px] sm:rounded-[52px] p-[10px] sm:p-[12px] shadow-[0_25px_60px_-10px_rgba(0,0,0,0.25)]">
      <div className="bg-cream rounded-[40px] sm:rounded-[42px] overflow-hidden relative flex flex-col" style={{ aspectRatio: '9 / 19.5' }}>
        <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[90px] h-[25px] bg-[#1D1D1F] rounded-full z-10" />
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
        <div className="flex-1 flex flex-col min-h-0">
          {children}
        </div>
        <div className="flex justify-center pb-2.5 pt-1.5 shrink-0">
          <div className="w-[100px] h-[4px] bg-forest/15 rounded-full" />
        </div>
      </div>
    </div>
  </div>
)

const ChefSelectMockup = ({ t }: { t: (key: string) => string }) => (
  <PhoneFrame>
    <div className="px-4 pt-1 pb-3">
      <div className="flex items-center mb-1.5">
        <div className="w-8 h-8 bg-card-white rounded-[10px] border border-border flex items-center justify-center">
          <svg className="w-4 h-4 text-forest-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        </div>
        <p className="font-serif text-[13px] text-forest text-center flex-1 leading-tight whitespace-pre-line">{t('appShowcase.phone.chooseChef')}</p>
        <div className="w-8 h-8 bg-card-white rounded-[10px] border border-border flex items-center justify-center">
          <svg className="w-4 h-4 text-forest-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </div>
      </div>
      <p className="text-[9px] text-forest-light">{t('appShowcase.phone.pickChef')}</p>
    </div>
    <div className="h-px bg-border" />
    <div className="flex justify-center py-3">
      <div className="flex items-center gap-1.5 bg-accent/80 px-4 py-1.5 rounded-pill shadow-soft">
        <svg className="w-3 h-3 text-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M16 3h5v5M4 20L21 3M21 16v5h-5M3 4l17 17"/></svg>
        <span className="text-[9px] font-semibold text-forest">Surprise Me</span>
      </div>
    </div>
    <div className="px-3 pb-3 grid grid-cols-4 gap-x-1 gap-y-2">
      {[
        { img: pepeImg, name: 'Pepe', cuisine: t('meetTheChefs.cuisine.italian'), color: '#E85D2C', selected: true, fav: true },
        { img: yukiImg, name: 'Yuki', cuisine: t('meetTheChefs.cuisine.japanese'), color: '#D94040', selected: false, fav: false },
        { img: carlosImg, name: 'Carlos', cuisine: t('meetTheChefs.cuisine.mexican'), color: '#D4A017', selected: false, fav: false },
        { img: priyaImg, name: 'Priya', cuisine: t('meetTheChefs.cuisine.indian'), color: '#E85D2C', selected: false, fav: true },
        { img: jacquesImg, name: 'Jacques', cuisine: t('meetTheChefs.cuisine.french'), color: '#4A86C8', selected: false, fav: false },
        { img: somchaiImg, name: 'Somchai', cuisine: t('meetTheChefs.cuisine.thai'), color: '#8B6FC0', selected: false, fav: false },
        { img: renataImg, name: 'Renata', cuisine: t('meetTheChefs.cuisine.brazilian'), color: '#6FA030', selected: false, fav: false },
        { img: joanImg, name: 'Joan', cuisine: t('meetTheChefs.cuisine.spanish'), color: '#C84A20', selected: false, fav: false },
      ].map((chef) => (
        <div key={chef.name} className="flex flex-col items-center">
          <div className="relative">
            <div
              className="w-[52px] h-[52px] rounded-full border-[2.5px] flex items-center justify-center bg-card-white shadow-soft"
              style={{ borderColor: chef.selected ? chef.color : 'transparent' }}
            >
              <div className="w-[44px] h-[44px] rounded-full overflow-hidden" style={{ backgroundColor: `${chef.color}10` }}>
                <img src={chef.img} alt={chef.name} className="w-full h-[66px] object-cover" />
              </div>
            </div>
            <div
              className="absolute -top-0.5 -right-0.5 w-[16px] h-[16px] rounded-full flex items-center justify-center border"
              style={{
                backgroundColor: chef.fav ? '#D94040' : '#fff',
                borderColor: chef.fav ? '#D94040' : '#e5e5e5',
              }}
            >
              <svg className="w-[8px] h-[8px]" viewBox="0 0 24 24" fill={chef.fav ? '#fff' : 'none'} stroke={chef.fav ? '#fff' : '#bbb'} strokeWidth="2.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </div>
          </div>
          <p className={`text-[9px] mt-1 font-serif ${chef.selected ? '' : 'text-forest'}`} style={chef.selected ? { color: chef.color } : {}}>{chef.name}</p>
          <p className="text-[7px] font-medium" style={{ color: chef.color }}>{chef.cuisine}</p>
        </div>
      ))}
    </div>
  </PhoneFrame>
)

const RecipesMockup = ({ t }: { t: (key: string) => string }) => (
  <PhoneFrame>
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
    <div className="bg-cream-dark border-b border-border px-4 py-2 flex gap-1.5 overflow-hidden">
      {['Chicken', 'Garlic', 'Lemon', 'Rosemary'].map(i => (
        <span key={i} className="bg-card-white border text-[9px] px-2.5 py-0.5 rounded-pill font-medium whitespace-nowrap capitalize" style={{ borderColor: '#E85D2C44', color: '#E85D2C' }}>{i}</span>
      ))}
    </div>
    <div className="px-5 pt-3 pb-1">
      <p className="font-serif text-[13px] text-forest">{t('appShowcase.phone.recipeIdeas')}</p>
    </div>
    <div className="px-4 pb-3 space-y-2.5">
      <div className="bg-card-white rounded-[16px] p-3 border border-border" style={{ borderLeftWidth: 4, borderLeftColor: '#4A7C59' }}>
        <div className="flex justify-between items-start mb-1">
          <p className="font-serif text-[11px] text-forest flex-1">{t('appShowcase.phone.recipe1.title')}</p>
          <span className="text-[8px] font-bold text-white px-2 py-0.5 rounded-pill ml-2" style={{ backgroundColor: '#4A7C59' }}>{t('appShowcase.phone.recipe1.difficulty')}</span>
        </div>
        <p className="text-[9px] text-forest-light mb-2 leading-relaxed">{t('appShowcase.phone.recipe1.description')}</p>
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-1">
            <svg className="w-2.5 h-2.5 text-forest-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span className="text-[8px] text-forest-light">{t('appShowcase.phone.recipe1.time')}</span>
          </div>
          <div className="flex gap-1">
            <span className="text-[8px] bg-cream-dark border border-border px-1.5 py-0.5 rounded-pill text-forest-light">{t('appShowcase.phone.recipe1.category')}</span>
            <span className="text-[8px] bg-cream-dark border border-border px-1.5 py-0.5 rounded-pill text-forest-light">{t('meetTheChefs.cuisine.italian')}</span>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-8 h-8 rounded-full border-[1.5px] flex items-center justify-center shrink-0" style={{ borderColor: '#4A7C59' }}>
            <svg className="w-3.5 h-3.5" style={{ color: '#4A7C59' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 4v6h6M23 20v-6h-6"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/></svg>
          </div>
          <div className="flex-1 text-center py-2 rounded-pill text-[9px] font-bold text-white" style={{ backgroundColor: '#4A7C59' }}>
            {t('appShowcase.phone.letsCook')}
          </div>
        </div>
      </div>
      <div className="bg-card-white rounded-[16px] p-3 border border-border" style={{ borderLeftWidth: 4, borderLeftColor: '#D4A017' }}>
        <div className="flex justify-between items-start mb-1">
          <p className="font-serif text-[11px] text-forest flex-1">{t('appShowcase.phone.recipe2.title')}</p>
          <span className="text-[8px] font-bold text-white px-2 py-0.5 rounded-pill ml-2" style={{ backgroundColor: '#D4A017' }}>{t('appShowcase.phone.recipe2.difficulty')}</span>
        </div>
        <p className="text-[9px] text-forest-light mb-2 leading-relaxed">{t('appShowcase.phone.recipe2.description')}</p>
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-1">
            <svg className="w-2.5 h-2.5 text-forest-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span className="text-[8px] text-forest-light">{t('appShowcase.phone.recipe2.time')}</span>
          </div>
          <div className="flex gap-1">
            <span className="text-[8px] bg-cream-dark border border-border px-1.5 py-0.5 rounded-pill text-forest-light">{t('appShowcase.phone.recipe2.category')}</span>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-8 h-8 rounded-full border-[1.5px] flex items-center justify-center shrink-0" style={{ borderColor: '#D4A017' }}>
            <svg className="w-3.5 h-3.5" style={{ color: '#D4A017' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 4v6h6M23 20v-6h-6"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/></svg>
          </div>
          <div className="flex-1 text-center py-2 rounded-pill text-[9px] font-bold text-white" style={{ backgroundColor: '#D4A017' }}>
            {t('appShowcase.phone.letsCook')}
          </div>
        </div>
      </div>
    </div>
  </PhoneFrame>
)

const CookingMockup = ({ t }: { t: (key: string) => string }) => (
  <PhoneFrame>
    <div className="px-4 pt-1 pb-2 flex items-center">
      <div className="w-8 h-8 flex items-center justify-center">
        <svg className="w-4 h-4 text-forest-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </div>
      <div className="flex-1 text-center">
        <p className="font-serif text-[11px] text-forest">{t('appShowcase.phone.recipe1.title')}</p>
        <p className="text-[9px] mt-0.5" style={{ color: '#E85D2C' }}>Pepe</p>
      </div>
      <div className="w-8" />
    </div>
    <div className="h-[3px] bg-border">
      <div className="h-full w-[43%]" style={{ backgroundColor: '#E85D2C' }} />
    </div>
    <div className="flex-1 px-5 pt-5">
      <p className="font-serif text-[13px] text-center mb-3" style={{ color: '#E85D2C' }}>{t('appShowcase.phone.stepOf')}</p>
      <div className="flex justify-center gap-1.5 mb-4">
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#4A7C59' }} />
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#4A7C59' }} />
        <div className="w-6 h-2 rounded-full" style={{ backgroundColor: '#E85D2C' }} />
        <div className="w-2 h-2 rounded-full bg-border" />
        <div className="w-2 h-2 rounded-full bg-border" />
        <div className="w-2 h-2 rounded-full bg-border" />
        <div className="w-2 h-2 rounded-full bg-border" />
      </div>
      <div className="flex justify-center mb-4">
        <span className="bg-card-white border border-border rounded-pill px-3 py-1 text-[9px] text-forest-light font-medium flex items-center gap-1.5">
          <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          {t('appShowcase.phone.cookTime')}
        </span>
      </div>
      <div className="p-4 bg-card-white rounded-[16px] border shadow-soft" style={{ borderColor: '#E85D2C' }}>
        <p className="text-[11px] text-forest text-center leading-relaxed">
          {t('appShowcase.phone.instruction')}
        </p>
      </div>
      <div className="mt-3 p-3 bg-cream-dark rounded-[16px] border border-accent">
        <p className="text-[9px] font-bold text-accent-dark uppercase tracking-wider mb-1">{t('appShowcase.phone.pepeTip')}</p>
        <p className="text-[10px] text-forest-light italic leading-relaxed">
          {t('appShowcase.phone.tipText')}
        </p>
      </div>
    </div>
    <div className="shrink-0 border-t border-border px-4 py-2.5 flex gap-2.5">
      <div className="flex-1 bg-card-white border border-border text-center py-2.5 rounded-pill text-[10px] font-bold text-forest-light">
        {t('appShowcase.phone.prev')}
      </div>
      <div className="flex-1 text-center py-2.5 rounded-pill text-[10px] font-bold text-white shadow-soft" style={{ backgroundColor: '#E85D2C' }}>
        {t('appShowcase.phone.next')}
      </div>
    </div>
  </PhoneFrame>
)

const AppShowcase = () => {
  const { t } = useI18n()

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
            {t('appShowcase.label')}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest mb-6">
            {t('appShowcase.title')}{' '}
            <span className="italic">{t('appShowcase.titleHighlight')}</span>
          </h2>
          <p className="text-lg text-forest-light max-w-2xl mx-auto">
            {t('appShowcase.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-start">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0 }} className="text-center">
            <ChefSelectMockup t={t} />
            <div className="mt-6">
              <span className="inline-block bg-forest text-cream text-xs font-semibold px-3 py-1 rounded-pill mb-2">{t('appShowcase.step1.label')}</span>
              <h3 className="font-serif text-lg text-forest mb-1">{t('appShowcase.step1.title')}</h3>
              <p className="text-sm text-forest-light">{t('appShowcase.step1.description')}</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="text-center">
            <RecipesMockup t={t} />
            <div className="mt-6">
              <span className="inline-block bg-forest text-cream text-xs font-semibold px-3 py-1 rounded-pill mb-2">{t('appShowcase.step2.label')}</span>
              <h3 className="font-serif text-lg text-forest mb-1">{t('appShowcase.step2.title')}</h3>
              <p className="text-sm text-forest-light">{t('appShowcase.step2.description')}</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="text-center">
            <CookingMockup t={t} />
            <div className="mt-6">
              <span className="inline-block bg-forest text-cream text-xs font-semibold px-3 py-1 rounded-pill mb-2">{t('appShowcase.step3.label')}</span>
              <h3 className="font-serif text-lg text-forest mb-1">{t('appShowcase.step3.title')}</h3>
              <p className="text-sm text-forest-light">{t('appShowcase.step3.description')}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AppShowcase
