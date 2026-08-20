import { useEffect, useState } from 'react'
import removalLogo from '../assets/removal.jpg'

const line1 = 'Welcome  to'
const line2 = 'Dolcino Cakes'
const line3 = '& More'

export default function SplashScreen({ onFinish }) {
  const [l1, setL1] = useState(0)
  const [l2, setL2] = useState(0)
  const [l3, setL3] = useState(0)
  const [showLogo, setShowLogo]     = useState(false)
  const [showTagline, setShowTagline] = useState(false)
  const [exiting, setExiting]       = useState(false)

  useEffect(() => {
    const t = []
    line1.split('').forEach((_, i) =>
      t.push(setTimeout(() => setL1(i + 1), 150 + i * 45)))
    t.push(setTimeout(() => setShowLogo(true), 850))
    const l2s = 1100
    line2.split('').forEach((_, i) =>
      t.push(setTimeout(() => setL2(i + 1), l2s + i * 50)))
    const l3s = 2000
    line3.split('').forEach((_, i) =>
      t.push(setTimeout(() => setL3(i + 1), l3s + i * 60)))
    t.push(setTimeout(() => setShowTagline(true), 2600))
    t.push(setTimeout(() => setExiting(true), 3300))
    t.push(setTimeout(() => onFinish(), 4000))
    return () => t.forEach(clearTimeout)
  }, [onFinish])

  const Letter = ({ char, visible, size, color, shadow, italic }) => (
    <span style={{
      display: 'inline-block',
      fontSize: size,
      fontFamily: 'Playfair Display, Georgia, serif',
      fontWeight: 700,
      fontStyle: italic ? 'italic' : 'normal',
      color,
      textShadow: shadow,
      letterSpacing: '2px',
      opacity: visible ? 1 : 0,
      transform: visible
        ? 'translateY(0) scale(1)'
        : 'translateY(28px) scale(0.7)',
      transition: 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.34,1.5,0.64,1)',
      whiteSpace: char === ' ' ? 'pre' : 'normal',
    }}>{char}</span>
  )

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #fce4ec 0%, #f8bbd0 30%, #f48fb1 60%, #e91e8c 100%)',
        transition: 'opacity 1.4s ease',
        opacity: exiting ? 0 : 1,
        pointerEvents: exiting ? 'none' : 'all',
      }}
    >
      {/* Soft bokeh blobs */}
      {[
        { w:420, h:420, t:'-12%', l:'-10%', op:0.35, dur:'8s' },
        { w:360, h:360, t:'65%',  l:'68%',  op:0.28, dur:'10s'},
        { w:260, h:260, t:'25%',  l:'72%',  op:0.22, dur:'7s' },
        { w:200, h:200, t:'78%',  l:'8%',   op:0.25, dur:'9s' },
      ].map((b, i) => (
        <div key={i} style={{
          position:'absolute', width:`${b.w}px`, height:`${b.h}px`,
          borderRadius:'50%', top:b.t, left:b.l, pointerEvents:'none',
          background:`radial-gradient(circle, rgba(255,255,255,${b.op}) 0%, transparent 70%)`,
          animation:`blobFloat ${b.dur} ${i*0.8}s ease-in-out infinite alternate`,
        }}/>
      ))}

      {/* Falling petals */}
      {[8,22,40,58,74,88].map((left, i) => (
        <div key={i} style={{
          position:'absolute', top:'-30px', left:`${left}%`,
          fontSize:'16px', opacity:0.55, pointerEvents:'none',
          animation:`petalFall ${5+i*0.7}s ${i*0.9}s linear infinite`,
        }}>🌸</div>
      ))}

      {/* Sparkle dots */}
      {[
        {t:'10%',l:'10%'},{t:'15%',l:'88%'},{t:'70%',l:'5%'},
        {t:'80%',l:'85%'},{t:'45%',l:'93%'},{t:'88%',l:'30%'},
      ].map((s,i) => (
        <div key={i} style={{
          position:'absolute', top:s.t, left:s.l,
          width:'6px', height:'6px', borderRadius:'50%',
          background:'rgba(255,255,255,0.8)',
          boxShadow:'0 0 8px rgba(255,255,255,0.8)',
          animation:`sparkle ${2.5+i*0.4}s ${i*0.3}s ease-in-out infinite alternate`,
          pointerEvents:'none',
        }}/>
      ))}

      {/* Content */}
      <div style={{ position:'relative', zIndex:10, display:'flex', flexDirection:'column', alignItems:'center', gap:'20px' }}>

        {/* Line 1 — Welcome to */}
        <div style={{ display:'flex', minHeight:'48px', gap:'1px' }}>
          {line1.split('').map((c, i) => (
            <span key={i} style={{
              display: 'inline-block',
              fontSize: 'clamp(24px, 8vw, 42px)',
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: 700,
              fontStyle: 'italic',
              color: '#fff',
              textShadow: '0 4px 20px rgba(150,0,80,0.5), 0 0 30px rgba(255,255,255,0.3)',
              letterSpacing: 'clamp(1px, 1vw, 4px)',
              whiteSpace: c === ' ' ? 'pre' : 'normal',
              opacity: i < l1 ? 1 : 0,
              transform: i < l1
                ? 'translateY(0) rotateY(0deg) scale(1)'
                : 'translateY(-40px) rotateY(-90deg) scale(0.5)',
              transition: 'all 0.6s cubic-bezier(0.34,1.7,0.64,1)',
              filter: i < l1 ? 'drop-shadow(0 0 8px rgba(255,255,255,0.6))' : 'none',
            }}>{c}</span>
          ))}
        </div>

        {/* Logo */}
        <div style={{
          opacity: showLogo ? 1 : 0,
          transform: showLogo ? 'scale(1) translateY(0)' : 'scale(0.6) translateY(20px)',
          transition: 'all 1.1s cubic-bezier(0.34,1.4,0.64,1)',
          filter: 'drop-shadow(0 6px 24px rgba(150,0,80,0.35))',
        }}>
          <img src={removalLogo} alt="Dolcino"
            style={{
              height:'120px', width:'auto', objectFit:'contain',
              mixBlendMode:'multiply',
              filter:'contrast(1.1) saturate(1.1) brightness(0.95)',
            }}
          />
        </div>

        {/* Pink shimmer divider */}
        <div style={{
          height:'2px',
          width: l2 >= line2.length ? '300px' : '0px',
          background:'linear-gradient(90deg, transparent, rgba(255,255,255,0.9), rgba(233,30,140,0.6), rgba(255,255,255,0.9), transparent)',
          boxShadow:'0 0 12px rgba(255,255,255,0.5)',
          transition:'width 0.9s ease',
          borderRadius:'99px',
        }}/>

        {/* Line 2 — Dolcino Cakes (large bold white) */}
        <div style={{ display:'flex', minHeight:'72px' }}>
          {line2.split('').map((c, i) => (
            <Letter key={i} char={c} visible={i < l2}
              size="clamp(36px, 12vw, 60px)" italic={false}
              color="#ffffff"
              shadow="0 4px 24px rgba(150,0,80,0.4), 0 0 40px rgba(255,255,255,0.15)"
            />
          ))}
        </div>

        {/* Line 3 — & More (italic, soft white) */}
        <div style={{ display:'flex', minHeight:'44px', marginTop:'-8px' }}>
          {line3.split('').map((c, i) => (
            <Letter key={i} char={c} visible={i < l3}
              size="32px" italic={true}
              color="rgba(255,255,255,0.85)"
              shadow="0 2px 14px rgba(150,0,80,0.3)"
            />
          ))}
        </div>

        {/* Tagline */}
        <div style={{
          opacity: showTagline ? 1 : 0,
          transform: showTagline ? 'translateY(0)' : 'translateY(12px)',
          transition: 'all 1.2s ease',
          fontSize:'11px',
          color:'rgba(255,255,255,0.65)',
          letterSpacing:'5px',
          textTransform:'uppercase',
          fontFamily:'Inter, sans-serif',
        }}>
          ✦ Crafted with Love · Baked with Passion ✦
        </div>

        {/* Loading bar */}
        <div style={{
          opacity: showTagline ? 1 : 0,
          transition:'opacity 0.8s 0.4s ease',
          width:'200px', height:'2px',
          background:'rgba(255,255,255,0.25)',
          borderRadius:'99px', overflow:'hidden',
        }}>
          <div style={{
            height:'100%',
            background:'linear-gradient(90deg, rgba(255,255,255,0.9), rgba(233,30,140,0.8), rgba(255,255,255,0.9))',
            borderRadius:'99px',
            animation: showTagline ? 'loadBar 3s ease-out forwards' : 'none',
          }}/>
        </div>
      </div>

      <style>{`
        @keyframes blobFloat {
          from { transform:translate(0,0) scale(1); }
          to   { transform:translate(30px,20px) scale(1.08); }
        }
        @keyframes petalFall {
          0%   { transform:translateY(-30px) rotate(0deg) translateX(0); opacity:0; }
          8%   { opacity:0.6; }
          92%  { opacity:0.4; }
          100% { transform:translateY(110vh) rotate(340deg) translateX(50px); opacity:0; }
        }
        @keyframes sparkle {
          from { transform:scale(1); opacity:0.4; }
          to   { transform:scale(1.8); opacity:1; }
        }
        @keyframes loadBar {
          from { width:0%; }
          to   { width:100%; }
        }
      `}</style>
    </div>
  )
}
