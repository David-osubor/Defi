import './App.css'
import About from './components/About'
import Developer from './components/Developer'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Subscriber from './components/Subscriber'
function App() {


  return (
  <div>
    <Navbar/>

    <Hero/>
    <div className='bg-black'>
    <About/>
    <Developer/>
    <Subscriber/>
    <Footer/>
    </div>
    </div> 
    
  )
}

export default App
