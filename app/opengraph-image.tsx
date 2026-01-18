import { ImageResponse } from 'next/og';

// Konfigurasi Route
export const runtime = 'edge';

// Metadata Gambar
export const alt =
  'CashoutPayLater.my - Pencairan Pantas SPayLater, Boost & Grab';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  // Mengambil Font Inter Bold dari Google Fonts untuk tampilan profesional
  // Jika gagal (offline), sistem akan menggunakan font cadangan
  const interSemiBold = await fetch(
    new URL(
      'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZ9hjp-Ek-_EeA.woff',
    ),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    // Container Utama (Background Slate-900 dengan Pattern)
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0f172a', // Slate 900
        backgroundImage:
          'radial-gradient(circle at 25px 25px, #1e293b 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1e293b 2%, transparent 0%)',
        backgroundSize: '100px 100px',
        fontFamily: '"Inter", sans-serif',
      }}>
      {/* Efek Glow Biru di Tengah */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: '#0ea5e9', // Sky 500
          opacity: '0.15',
          filter: 'blur(120px)',
          borderRadius: '50%',
        }}
      />

      {/* Logo Section */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '40px',
          zIndex: 10,
        }}>
        {/* Icon Wallet (SVG Manual) */}
        <svg
          width='80'
          height='80'
          viewBox='0 0 24 24'
          fill='none'
          stroke='#0ea5e9'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          style={{ marginRight: '20px' }}>
          <path d='M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4' />
          <path d='M4 6v12a2 2 0 0 0 2 2h14v-4' />
          <path d='M18 12a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v-8Z' />
        </svg>

        {/* Nama Brand */}
        <div
          style={{
            display: 'flex',
            fontSize: 64,
            fontWeight: 900,
            color: 'white',
            letterSpacing: '-0.02em',
          }}>
          CashoutPayLater<span style={{ color: '#0ea5e9' }}>.my</span>
        </div>
      </div>

      {/* Headline Utama */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 10,
          textAlign: 'center',
          maxWidth: '900px',
        }}>
        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: '#e2e8f0', // Slate 200
            marginBottom: '10px',
          }}>
          Tunaikan Limit PayLater Anda
        </div>

        <div
          style={{
            fontSize: 32,
            fontWeight: 500,
            color: '#94a3b8', // Slate 400
            marginTop: '10px',
          }}>
          SPayLater • Boost PayFlex • Grab PayLater
        </div>
      </div>

      {/* Footer Bar / CTA Visual */}
      <div
        style={{
          display: 'flex',
          marginTop: '60px',
          padding: '12px 32px',
          background: 'rgba(14, 165, 233, 0.1)',
          border: '1px solid rgba(14, 165, 233, 0.3)',
          borderRadius: '50px',
          alignItems: 'center',
          zIndex: 10,
        }}>
        <div style={{ fontSize: 24, color: '#38bdf8', fontWeight: 600 }}>
          Proses Pantas & Selamat • Wang Tunai Segera
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: interSemiBold,
          style: 'normal',
          weight: 700,
        },
      ],
    },
  );
}
