import React from 'react';

export function MechanicalScale({
  lhs,
  sign,
  rhs,
  shake,
  panItemsLeft = [],
  panItemsRight = [],
  stepNote = '',
  isGoldenFlipped = false
}) {
  // Tilt angle based on inequality sign
  // ≤ or < means RHS is heavier/greater than LHS -> right pan goes down, left goes up (+10 deg)
  // ≥ or > means LHS is heavier/greater than RHS -> left pan goes down, right goes up (-10 deg)
  const tilt = (sign === '<' || sign === '≤') ? 10 : (sign === '>' || sign === '≥') ? -10 : 0;
  
  const L = 135;
  const rad = (tilt * Math.PI) / 180;
  const pivotX = 200;
  const pivotY = 65;
  
  const leftX = pivotX - L * Math.cos(rad);
  const leftY = pivotY - L * Math.sin(rad);
  const rightX = pivotX + L * Math.cos(rad);
  const rightY = pivotY + L * Math.sin(rad);

  return (
    <div className="w-full flex flex-col items-center justify-center relative shrink-0">
      {/* Golden Flip Lightning Glow effect */}
      {isGoldenFlipped && (
        <div className="absolute inset-0 bg-amber-400/10 rounded-2xl animate-pulse pointer-events-none border border-amber-400/40 shadow-[0_0_25px_rgba(250,204,21,0.4)]" />
      )}

      {/* SVG Mechanical Balance Scale */}
      <svg
        viewBox="0 0 400 205"
        className={`w-full max-w-[310px] sm:max-w-[340px] h-auto drop-shadow-[0_0_15px_rgba(56,189,248,0.35)] shrink-0 ${shake ? 'animate-shake' : ''}`}
      >
        {/* Fulcrum Pedestal Base */}
        <polygon points="200,65 172,190 228,190" fill="#1e1645" stroke="#7c3aed" strokeWidth="2.5" />
        <rect x="140" y="186" width="120" height="10" rx="5" fill="#140c30" stroke="#a78bfa" strokeWidth="2" />

        {/* Dial Gauge Protractor at Pivot */}
        <path d="M 175 65 A 25 25 0 0 1 225 65 Z" fill="#0d0724" stroke="#e2e8f0" strokeWidth="1.5" />
        <line x1="200" y1="65" x2="200" y2="44" stroke="#f43f5e" strokeWidth="1.5" />
        {/* Tilt Indicator Needle */}
        <line
          x1="200"
          y1="65"
          x2={200 + 19 * Math.sin(rad * 1.5)}
          y2={65 - 19 * Math.cos(rad * 1.5)}
          stroke="#facc15"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Brass Balance Beam */}
        <line
          x1={leftX}
          y1={leftY}
          x2={rightX}
          y2={rightY}
          stroke="#facc15"
          strokeWidth="7"
          strokeLinecap="round"
          style={{ transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
        />
        <circle cx={pivotX} cy={pivotY} r="14" fill="#facc15" stroke="#b45309" strokeWidth="2.5" />
        <circle cx={pivotX} cy={pivotY} r="5" fill="#78350f" />

        {/* Center Sign Badge */}
        <g style={{ transform: `translate(${pivotX}px, ${pivotY + 26}px)` }}>
          <rect x="-22" y="-13" width="44" height="26" rx="7" fill="#0b0420" stroke="#facc15" strokeWidth="2" />
          <text x="0" y="5" fill="#facc15" fontSize="16" fontWeight="900" textAnchor="middle">{sign}</text>
        </g>

        {/* Left Pan (Suspended by Chains) */}
        <g style={{ transform: `translate(${leftX}px, ${leftY}px)`, transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
          <line x1="-30" y1="58" x2="0" y2="0" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 2" />
          <line x1="30" y1="58" x2="0" y2="0" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 2" />
          {/* Pan Dish */}
          <path d="M -44 58 Q 0 76 44 58 Z" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
          {/* Item Plaque */}
          <rect x="-40" y="28" width="80" height="26" rx="6" fill="#6d28d9" stroke="#ddd6fe" strokeWidth="1.5" />
          <text x="0" y="46" fill="#ffffff" fontSize="13" fontWeight="900" textAnchor="middle">{lhs}</text>
        </g>

        {/* Right Pan (Suspended by Chains) */}
        <g style={{ transform: `translate(${rightX}px, ${rightY}px)`, transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
          <line x1="-30" y1="58" x2="0" y2="0" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 2" />
          <line x1="30" y1="58" x2="0" y2="0" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 2" />
          {/* Pan Dish */}
          <path d="M -44 58 Q 0 76 44 58 Z" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
          {/* Item Plaque */}
          <rect x="-40" y="28" width="80" height="26" rx="6" fill="#059669" stroke="#a7f3d0" strokeWidth="1.5" />
          <text x="0" y="46" fill="#ffffff" fontSize="13" fontWeight="900" textAnchor="middle">{rhs}</text>
        </g>
      </svg>

      {/* Physical Pan Items Visual Display Bar */}
      <div className="w-full grid grid-cols-2 gap-2 mt-0.5 px-1 shrink-0">
        {/* Left Pan Items */}
        <div className="bg-[#180a38]/90 border border-purple-400/30 rounded-xl p-1.5 flex flex-col items-center shadow-inner">
          <span className="text-[9px] uppercase font-black text-purple-300 mb-0.5">Left: Spending / Action</span>
          <div className="flex items-center gap-1 flex-wrap justify-center min-h-[24px]">
            {panItemsLeft.map((it, idx) => (
              <span
                key={idx}
                className="bg-purple-950/80 border border-purple-400/40 text-purple-200 text-[11px] font-bold px-1.5 py-0.5 rounded-lg flex items-center gap-1 shadow"
              >
                <span>{it.icon}</span>
                <span>{it.label}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Right Pan Items */}
        <div className="bg-[#0b1c2b]/90 border border-emerald-400/30 rounded-xl p-1.5 flex flex-col items-center shadow-inner">
          <span className="text-[9px] uppercase font-black text-emerald-300 mb-0.5">Right: Limit / Budget</span>
          <div className="flex items-center gap-1 flex-wrap justify-center min-h-[24px]">
            {panItemsRight.map((it, idx) => (
              <span
                key={idx}
                className="bg-emerald-950/80 border border-emerald-400/40 text-emerald-200 text-[11px] font-bold px-1.5 py-0.5 rounded-lg flex items-center gap-1 shadow"
              >
                <span>{it.icon}</span>
                <span>{it.label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Step Math Note */}
      {stepNote && (
        <div className="mt-1 text-[11px] font-bold text-amber-200 bg-amber-950/40 border border-amber-400/30 px-2.5 py-0.5 rounded-full text-center shrink-0">
          ⚖️ {stepNote}
        </div>
      )}
    </div>
  );
}
