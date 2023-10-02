import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage';
import Navbar from '../src/components/Navbar';
import Lenis from '@studio-freight/lenis'


function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })
    
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  },[])

  return (
    <>
    
    <HomePage/>
    
    </>
  )
}

export default App
