import React, { useState, useEffect } from 'react';
import "@fontsource/space-mono";
import "@fontsource/urbanist";
import "@fontsource/spline-sans-mono";
import "@fontsource/courier-prime";
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import ContactModal from './components/Contact/ContactModal/ContactModal';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import ProgressBar from './components/ProgressBar/ProgressBar';
import ShieldAnimation from './components/ShieldAnimation/ShieldAnimation.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'aos/dist/aos.css';
import './App.css';


function App() {
  const [scrollTop, setScrollTop] = useState(0)
  const [loading, setLoading] = useState(true)

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const scrolled = (winScroll / height) * 100
    setScrollTop(scrolled)
  }

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    // }, 10000)
    }, 1575)

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <BrowserRouter className="container">
      {loading ? (
        <ShieldAnimation />
      ) : (
        <div>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/about" exact element={<About />} />
              <Route path="/projects" exact element={<Projects />} />
              <Route path="/contact" exact element={<Contact />} />
            </Routes>

            <ContactModal />
            <Footer />
            <ProgressBar height={scrollTop} />
          </div>
        </div>
      )}
    </BrowserRouter>
  )
}

export default App;