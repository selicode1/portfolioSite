import React, { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Portfolio from './components/sections/Portfolio';
import Skills from './components/sections/Skills';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import BackToTop from './components/layout/BackToTop';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'John Doe | Developer & Designer Portfolio';
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
      }
      
      @keyframes float-delay {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-15px); }
      }
      
      @keyframes scale-up {
        from { transform: scale(0.8); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      .animate-float-delay {
        animation: float-delay 7s ease-in-out infinite;
        animation-delay: 2s;
      }
      
      .animate-scale-up {
        animation: scale-up 0.3s ease-out forwards;
      }
      
      .typewriter {
        overflow: hidden;
        border-right: .15em solid transparent;
        white-space: nowrap;
        display: inline-block;
        animation: typing 3.5s steps(40, end), blink-caret .75s step-end infinite;
      }
      
      @keyframes typing {
        from { width: 0 }
        to { width: 100% }
      }
      
      @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: #8B5CF6 }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;