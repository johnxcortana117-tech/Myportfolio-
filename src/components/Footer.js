import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      borderTop: '1px solid rgba(0,255,0,0.3)',
      padding: '20px 0',
      marginTop: '40px',
      color: 'rgba(0,255,0,0.5)',
      fontFamily: 'Courier New, monospace',
      fontSize: '0.8rem',
      letterSpacing: '1px'
    }}>
      <p>SYSTEM DATE: {new Date().toLocaleString()}</p>
      <p style={{ marginTop: '6px' }}>// END OF FILE //</p>
    </footer>
  );
}
