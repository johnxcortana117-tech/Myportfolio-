import React, { useState, useEffect } from 'react';
import './Overlay.css';

export default function Overlay({ onStart }) {
  const [text, setText] = useState('');
  const full = '[WAITING FOR COMMAND...]';

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setText(full.slice(0, i + 1));
      i++;
      if (i >= full.length) clearInterval(t);
    }, 60);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="overlay">
      <div className="overlay-content">
        <div className="boot-lines">
          <p>SYS://PORTFOLIO.EXE</p>
          <p>LOADING ASSETS... <span className="ok">OK</span></p>
          <p>NEURAL MATRIX... <span className="ok">READY</span></p>
          <p>AWAITING AUTHORIZATION...</p>
        </div>
        <button className="start-btn" onClick={onStart}>
          INITIALIZE NEURAL LINK
        </button>
        <p className="wait-text">{text}<span className="cursor">_</span></p>
      </div>
    </div>
  );
}
