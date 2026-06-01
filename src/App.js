import React, { useState, useEffect, useRef } from 'react';
import MatrixCanvas from './components/MatrixCanvas';
import Overlay from './components/Overlay';
import Nav from './components/Nav';
import About from './sections/About';
import Gunpla from './sections/Gunpla';
import Drawings from './sections/Drawings';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [started, setStarted] = useState(false);
  const audioRef = useRef(null);

  const handleStart = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
    setStarted(true);
  };

  return (
    <div className="app">
      {!started && <Overlay onStart={handleStart} />}
      <audio ref={audioRef} loop src="/Cyberpunk.mp3" />
      <MatrixCanvas />
      {started && (
        <div className="main-content">
          <Nav />
          <div className="container">
            <header className="site-header">
              <h1 className="site-title">MY PORTFOLIO</h1>
              <div className="profile-wrapper">
                <img src="/Me.jpg" alt="Profile" className="profile-img" onError={e => { e.target.style.display='none'; }} />
              </div>
              <p className="tagline">
                <span className="tag-item">Game Developer</span>
                <span className="tag-sep"> • </span>
                <span className="tag-item">Gunpla Builder</span>
                <span className="tag-sep"> • </span>
                <span className="tag-item">Artist</span>
              </p>
            </header>
            <About />
            <Gunpla />
            <Drawings />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
