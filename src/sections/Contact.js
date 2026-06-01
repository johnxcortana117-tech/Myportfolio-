import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email) {
      setSent(true);
      setTimeout(() => setSent(false), 3000);
      setForm({ name: '', email: '', message: '' });
    }
  };

  const inputStyle = {
    background: 'black',
    color: '#0f0',
    border: '1px solid rgba(0,255,0,0.4)',
    padding: '10px 14px',
    width: '100%',
    fontFamily: 'Courier New, monospace',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.3s',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.75rem',
    letterSpacing: '2px',
    color: 'rgba(0,255,0,0.6)',
    marginBottom: '6px',
  };

  return (
    <section id="contact" className="section">
      <h2 className="section-title"><span className="section-prefix">{"//"}</span>CONTACT</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          border: '1px solid rgba(0,255,0,0.3)',
          padding: '24px',
          background: 'rgba(0,20,0,0.3)',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <div>
          <label style={labelStyle}>NAME:</label>
          <input
            style={inputStyle}
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            placeholder="ENTER DESIGNATION..."
          />
        </div>
        <div>
          <label style={labelStyle}>EMAIL:</label>
          <input
            style={inputStyle}
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            placeholder="TRANSMISSION ADDRESS..."
            type="email"
          />
        </div>
        <div>
          <label style={labelStyle}>MESSAGE:</label>
          <textarea
            style={{ ...inputStyle, height: '100px', resize: 'vertical' }}
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            placeholder="INPUT MESSAGE..."
          />
        </div>
        <button
          type="submit"
          style={{
            background: sent ? 'rgba(0,255,0,0.2)' : 'transparent',
            color: '#0f0',
            border: '1px solid #0f0',
            padding: '12px 28px',
            fontFamily: 'Courier New, monospace',
            fontSize: '0.85rem',
            letterSpacing: '3px',
            cursor: 'pointer',
            textTransform: 'uppercase',
            alignSelf: 'flex-start',
            transition: 'all 0.3s',
            boxShadow: '0 0 10px rgba(0,255,0,0.2)',
          }}
        >
          {sent ? '[ TRANSMISSION SENT ]' : 'SUBMIT SYSTEM ENTRY'}
        </button>
      </form>
    </section>
  );
}
