import React from 'react';

export const TextCard = ({ altText = "image", title, description }) => {
  // Definisi font family agar tidak berulang
  const poppinsFont = "'Poppins', sans-serif";

  return (
    <div style={{
      maxWidth: '384px',
      margin: '0 auto',
      overflow: 'hidden',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      backgroundColor: 'white',
      borderRadius: '12px', // Sedikit lebih bulat agar cocok dengan karakter Poppins
      height: '576px',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: poppinsFont // Menerapkan Poppins ke seluruh kartu
    }}>
      <div style={{
        padding: '24px',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        overflowY: 'auto',
        scrollbarWidth: 'thin',
      }}>
        <h2 style={{
          marginBottom: '16px',
          fontSize: '24px',
          fontWeight: '700', // Bold Poppins biasanya bagus di angka 700
          color: '#1f2937',
          textAlign: 'center',
          flexShrink: 0,
          fontFamily: poppinsFont,
          letterSpacing: '-0.025em' // Poppins terlihat lebih modern dengan sedikit rapat
        }}>
          {title || 'Judul Kosong'}
        </h2>
        
        <p style={{
          color: '#374151',
          textAlign: 'center',
          lineHeight: '1.7', // Sedikit lebih renggang agar nyaman dibaca
          fontSize: '15px',
          margin: 0,
          fontFamily: poppinsFont,
          fontWeight: '400'
        }}>
          {description || 'Deskripsi Kosong'}
        </p>
      </div>
    </div>
  );
};

export default TextCard;