import React, { useState } from 'react';

const drawings = [
  { label: 'The Harbinger', img: 'The Harbinger.jpg' },
  { label: 'Nord', img: 'Nord.jpg' },
  { label: 'Alice Pagani', img: 'Some pinterest girl.jpg' },
  { label: 'Figure Drawing', img: 'Figure drawing.jpg' },
  { label: 'Fubuki', img: 'Fubuki.jpg' },
  { label: 'Silver Surfer (Shalla-Bal)', img: 'Shalla Bal.png' },
  { label: 'Arthur Morgan', img: 'Arthur Morgan.png' },
];

export default function Drawings() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="drawings" className="section">
      <h2 className="section-title"><span className="section-prefix">//</span>DRAWINGS</h2>
      <div className="grid">
        {drawings.map(item => (
          <div className="card" key={item.label} onClick={() => setLightbox(item)} style={{ cursor: 'zoom-in' }}>
            <p className="card-label">{item.label}</p>
            <img
              src={`/${item.img}`}
              alt={item.label}
              className="card-img"
              onError={e => { e.target.style.display = 'none'; }}
            />
          </div>
        ))}
      </div>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.92)',
            z: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'zoom-out', zIndex: 9000,
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <img
              src={`/${lightbox.img}`}
              alt={lightbox.label}
              style={{ maxWidth: '85vw', maxHeight: '80vh', border: '1px solid #0f0', boxShadow: '0 0 40px rgba(0,255,0,0.3)' }}
            />
            <p style={{ color: '#0f0', marginTop: '12px', letterSpacing: '2px', fontFamily: 'Courier New' }}>{lightbox.label}</p>
            <p style={{ color: 'rgba(0,255,0,0.4)', fontSize: '0.75rem', marginTop: '4px' }}>[CLICK TO CLOSE]</p>
          </div>
        </div>
      )}
    </section>
  );
}
