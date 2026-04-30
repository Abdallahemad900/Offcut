import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import StorePage from './pages/StorePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import StudioPage from './pages/StudioPage'
import CirclePage from './pages/CirclePage'
import AIChat from './sections/AIChat'
import Footer from './components/Footer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    gsap.from("section", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "section",
        start: "top 80%",
      }
    });
  }, []);

  return (
    <Router>
      <main className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/studio" element={<StudioPage />} />
          <Route path="/circle" element={<CirclePage />} />
        </Routes>
        <AIChat />
        <Footer />
      </main>
    </Router>
  )
}

export default App
