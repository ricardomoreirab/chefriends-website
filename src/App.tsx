import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import MeetTheChefs from './components/MeetTheChefs'
import AppShowcase from './components/AppShowcase'
import HowItWorks from './components/HowItWorks'
import ComingSoon from './components/ComingSoon'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <MeetTheChefs />
        <AppShowcase />
        <HowItWorks />
        <ComingSoon />
      </main>
      <Footer />
    </div>
  )
}

export default App
