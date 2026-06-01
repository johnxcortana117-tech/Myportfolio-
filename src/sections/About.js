import React, { useState, useEffect, useRef } from 'react';

const fullText = `Hi. This is a brief introduction about myself. Well nothing too special here, but you know, im a man of multiple thoughts, deep and entropic. Silence adorned with self reflection between the frequencies of the universe is my favorite idle activity, on top of drawing and building gunplas.`;

export default function About() {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const t = setInterval(() => {
      setDisplayed(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(t);
    }, 18);
    return () => clearInterval(t);
  }, [started]);

  return (
    <section id="about" className="section" ref={ref}>
      <h2 className="section-title"><span className="section-prefix">{"//"}</span>ABOUT ME</h2>
      <div style={{
        border: '1px solid rgba(0,255,0,0.25)',
        padding: '20px',
        background: 'rgba(0,20,0,0.3)',
        position: 'relative',
        lineHeight: 1.8,
        fontSize: '0.95rem',
        color: 'rgba(0,255,0,0.85)',
      }}>
        <span style={{ color: 'rgba(0,255,0,0.4)', marginRight: '8px' }}>&gt;</span>
        {displayed}
        {displayed.length < fullText.length && (
          <span style={{ animation: 'blink 1s infinite', display: 'inline-block' }}>_</span>
        )}
      </div>
    </section>
  );
}
