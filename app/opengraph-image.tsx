import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Nuvora — Global AI product studio for founders';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #050816 0%, #0B111C 55%, #111B2E 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* glow orbs */}
        <div style={{
          position: 'absolute', top: -80, left: -80, width: 480, height: 480,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.28) 0%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute', bottom: -100, right: -60, width: 560, height: 560,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14,165,233,0.18) 0%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute', top: 100, right: 200, width: 300, height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)',
        }} />

        {/* logo row */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 44 }}>
          <div style={{
            width: 54, height: 54, borderRadius: 18,
            background: 'linear-gradient(135deg, #6366f1 0%, #2dd4bf 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 18,
          }}>
            <span style={{ color: '#fff', fontSize: 30, fontWeight: 900 }}>N</span>
          </div>
          <span style={{ fontSize: 42, fontWeight: 800, color: '#ffffff', letterSpacing: '-1.5px' }}>
            Nuvora
          </span>
          <div style={{
            marginLeft: 20, padding: '6px 16px',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: 999, color: '#94a3b8', fontSize: 18,
          }}>
            AI product studio
          </div>
        </div>

        {/* headline */}
        <div style={{
          fontSize: 60, fontWeight: 700, color: '#ffffff',
          lineHeight: 1.12, marginBottom: 26, maxWidth: 860,
        }}>
          Build & ship AI products in weeks, not months.
        </div>

        {/* subtext */}
        <div style={{ fontSize: 26, color: '#94a3b8', maxWidth: 680, lineHeight: 1.5, marginBottom: 56 }}>
          AI MVPs · Custom agents · Workflow automation — async-first, worldwide delivery.
        </div>

        {/* stats chips */}
        <div style={{ display: 'flex', gap: 20 }}>
          {['50+ projects shipped', '30+ countries', '2-week delivery', '100% async'].map((s) => (
            <div key={s} style={{
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.14)',
              borderRadius: 12, padding: '12px 22px',
              color: '#e2e8f0', fontSize: 20,
            }}>{s}</div>
          ))}
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
