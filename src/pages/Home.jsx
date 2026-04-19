import React from 'react'
import { useLang } from '../i18n'

function RobotHero() {
  return (
    <div className="flex justify-center items-center w-full h-64">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes blink {
          0%, 90%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }
        @keyframes spin-gear {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-antenna {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }
        .robot-float { animation: float 3s ease-in-out infinite; }
        .robot-eye { animation: blink 4s ease-in-out infinite; }
        .robot-gear { animation: spin-gear 4s linear infinite; }
        .robot-antenna { animation: pulse-antenna 1.2s ease-in-out infinite; }
      `}</style>

      <svg className="robot-float" width="180" height="220" viewBox="0 0 180 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Antenna */}
        <line x1="90" y1="10" x2="90" y2="35" stroke="#0d9488" strokeWidth="3" strokeLinecap="round"/>
        <circle className="robot-antenna" cx="90" cy="8" r="6" fill="#14b8a6"/>

        {/* Head */}
        <rect x="52" y="35" width="76" height="58" rx="14" fill="#0d9488"/>
        <rect x="58" y="42" width="64" height="44" rx="10" fill="#134e4a"/>

        {/* Eyes */}
        <g className="robot-eye" style={{transformOrigin: '74px 64px'}}>
          <rect x="64" y="56" width="20" height="16" rx="5" fill="#5eead4"/>
        </g>
        <g className="robot-eye" style={{transformOrigin: '106px 64px'}}>
          <rect x="96" y="56" width="20" height="16" rx="5" fill="#5eead4"/>
        </g>

        {/* Mouth */}
        <rect x="70" y="76" width="40" height="6" rx="3" fill="#0d9488"/>
        <rect x="76" y="76" width="8" height="6" rx="2" fill="#5eead4"/>
        <rect x="96" y="76" width="8" height="6" rx="2" fill="#5eead4"/>

        {/* Neck */}
        <rect x="82" y="93" width="16" height="10" rx="3" fill="#0d9488"/>

        {/* Body */}
        <rect x="42" y="103" width="96" height="72" rx="14" fill="#0d9488"/>
        <rect x="52" y="112" width="76" height="52" rx="8" fill="#134e4a"/>

        {/* Gear on chest */}
        <g className="robot-gear" style={{transformOrigin: '90px 138px'}}>
          <circle cx="90" cy="138" r="14" fill="none" stroke="#5eead4" strokeWidth="3"/>
          <circle cx="90" cy="138" r="6" fill="#5eead4"/>
          {[0,45,90,135,180,225,270,315].map((deg, i) => (
            <rect key={i}
              x="88" y="121"
              width="4" height="6" rx="1"
              fill="#5eead4"
              transform={`rotate(${deg} 90 138)`}
            />
          ))}
        </g>

        {/* Arms */}
        <rect x="14" y="105" width="26" height="54" rx="12" fill="#0d9488"/>
        <rect x="140" y="105" width="26" height="54" rx="12" fill="#0d9488"/>
        {/* Hands */}
        <circle cx="27" cy="163" r="10" fill="#0d9488"/>
        <circle cx="153" cy="163" r="10" fill="#0d9488"/>

        {/* Legs */}
        <rect x="58" y="175" width="26" height="38" rx="10" fill="#0d9488"/>
        <rect x="96" y="175" width="26" height="38" rx="10" fill="#0d9488"/>
        {/* Feet */}
        <rect x="52" y="206" width="36" height="12" rx="6" fill="#0d9488"/>
        <rect x="92" y="206" width="36" height="12" rx="6" fill="#0d9488"/>
      </svg>
    </div>
  )
}

export default function Home(){
  const { t } = useLang()
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl font-extrabold mb-4">{t('siteTitle')}</h1>
          <p className="mb-6 text-lg text-gray-700">{t('tagline')}</p>
          <a href="/services" className="inline-block px-6 py-3 bg-teal-600 text-white rounded">{t('servicesTitle')}</a>
        </div>
        <div>
          <RobotHero />
        </div>
      </div>
    </section>
  )
}
