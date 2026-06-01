import React, { useState } from 'react';

const projects = [
  {
    id: 'naknights',
    name: 'NaKNIGHTS',
    subtitle: 'Biological Warfare Game',
    tech: ['Unity', 'C#', '3D', 'Educational'],
    desc: 'A 3D educational immune system battle simulator targeting MedTech students. Players command immune cells against pathogens in a stylized biological battlefield.',
    status: 'COMPLETED',
  },
  {
    id: 'fps-horror',
    name: 'FPS Horror Prototype',
    subtitle: 'Unannounced Project',
    tech: ['Unity', 'C#', 'Horror', 'FPS'],
    desc: 'A first-person horror prototype exploring atmospheric tension and survival mechanics. Currently in early development.',
    status: 'IN DEV',
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="projects" className="section">
      <h2 className="section-title"><span className="section-prefix">{"//"}</span>PROJECTS</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {projects.map(p => (
          <div
            key={p.id}
            onClick={() => setExpanded(expanded === p.id ? null : p.id)}
            style={{
              border: `1px solid ${expanded === p.id ? '#0f0' : 'rgba(0,255,0,0.3)'}`,
              background: 'rgba(0,20,0,0.3)',
              padding: '16px 20px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: expanded === p.id ? '0 0 20px rgba(0,255,0,0.2)' : 'none',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontFamily: 'Courier New', fontSize: '1.1rem', letterSpacing: '2px' }}>{p.name}</span>
                <span style={{ color: 'rgba(0,255,0,0.5)', fontSize: '0.8rem', marginLeft: '12px' }}>{'// '}{p.subtitle}</span>
              </div>
              <span style={{
                fontSize: '0.7rem', padding: '3px 10px',
                border: `1px solid ${p.status === 'COMPLETED' ? '#0f0' : '#ff0'}`,
                color: p.status === 'COMPLETED' ? '#0f0' : '#ff0',
                letterSpacing: '1px',
              }}>
                {p.status}
              </span>
            </div>
            {expanded === p.id && (
              <div style={{ marginTop: '14px', borderTop: '1px solid rgba(0,255,0,0.2)', paddingTop: '14px' }}>
                <p style={{ color: 'rgba(0,255,0,0.75)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '12px' }}>{p.desc}</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {p.tech.map(t => (
                    <span key={t} style={{
                      fontSize: '0.7rem', padding: '2px 10px',
                      border: '1px solid rgba(0,255,0,0.4)',
                      color: 'rgba(0,255,0,0.6)',
                      letterSpacing: '1px',
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
