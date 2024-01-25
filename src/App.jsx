import './App.css'
import About from './components/About'
import Developer from './components/Developer'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Subscriber from './components/Subscriber'
function App() {


  return (
  <div className='bg-black'>
    <Navbar/>
    <Hero/>
    <About/>
    <Developer/>
    <Subscriber/>
    <Footer/>
    </div> 
    
  )
}

export default App
