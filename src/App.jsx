import React from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import './index.css'; // Import the CSS file

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-gray-400 selection:text-gray-50'>
      {/* Background radial gradient */}
      <div className='fixed top-0 left-0 w-full h-full -z-10'>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

        {/* Stars Layers */}
        <div className="absolute top-0 left-0 w-full h-full stars"></div>
        <div className="absolute top-0 left-0 w-full h-full stars2"></div>
        <div className="absolute top-0 left-0 w-full h-full stars3"></div>
      </div>

      {/* Content */}
      <div className='container mx-auto px-8'>
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
};

export default App;
