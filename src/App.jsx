import FeatureSection from './components/FeatureSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'
import Workflow from './components/Workflow'


const App = () => {
  return (
    <div>
      
     <Navbar />

     <div className='max-w-7xl mx-auto px-6 pt-20'>
     <HeroSection />
     <FeatureSection />
     <Workflow />
     <Pricing />
     <Testimonial />
     <Footer />
     </div>
     
    </div>
  )
}

export default App
