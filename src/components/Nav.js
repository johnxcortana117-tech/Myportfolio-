import React, { useState, useEffect } from 'react';
import './Nav.css';

const links = ['about', 'gunpla', 'drawings', 'projects', 'contact'];

export default function Nav() {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      links.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) setActive(id);
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      {links.map(id => (
        <a
          key={id}
          href={`#${id}`}
          className={`nav-link ${active === id ? 'active' : ''}`}
        >
          {id.toUpperCase()}
        </a>
      ))}
    </nav>
  );
}
