import React from 'react';

const gunpla = [
  { label: 'Narrative HG C Packs', img: 'NARRATIVE HG.jpg' },
  { label: 'IXCHEL 1/100', img: 'IXCHEL.jpg' },
  { label: 'Unicorn RG', img: 'Unicorn 1.jpg' },
  { label: 'MG Vidar', img: 'VIDAR MG.jpg' },
  { label: 'MG Verka Zeta', img: 'Zeta 2.jpg' },
  { label: 'RG Shining', img: 'Shining RG.jpg' },
  { label: 'MGEX Strike Freedom', img: 'MGEX SF.jpg' },
];

export default function Gunpla() {
  return (
    <section id="gunpla" className="section">
      <h2 className="section-title"><span>//</span>GUNPLA COLLECTION</h2>
      <div className="grid">
        {gunpla.map(item => (
          <div className="card" key={item.label}>
            <p className="card-label">{item.label}</p>
            <img
              src={`/${item.img}`}
              alt={item.label}
              className="card-img"
              onError={e => { e.target.parentNode.querySelector('.card-placeholder').style.display = 'flex'; e.target.style.display = 'none'; }}
            />
            <div className="card-placeholder" style={{ display: 'none' }}>📷</div>
          </div>
        ))}
      </div>
    </section>
  );
}
