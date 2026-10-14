import React from 'react';

export function SpeedRadarSim({ speed = 40, targetSpeed = 40 }) {
  const minS = 0;
  const maxS = 80;
  const clampedS = Math.min(Math.max(speed, minS), maxS);
  
  // Angle for speedometer needle: -90 deg at 0 km/h to +90 deg at 80 km/h
  const needleAngle = -90 + (clampedS / maxS) * 180;
  
  const isSafe = speed <= targetSpeed;
  const over = speed - targetSpeed;

  return (
    <div className="w-full bg-gradient-to-b from-[#141238] to-[#0a0720] border-2 border-cyan-400/30 rounded-2xl p-3 sm:p-3.5 shadow-xl flex flex-col md:flex-row items-center justify-between gap-3 shrink-0 overflow-hidden relative">
      {/* Decorative road markings behind */}
      <div className="absolute inset-x-0 bottom-0 h-4 bg-slate-900 border-t border-slate-700/60 flex items-center justify-around opacity-25 pointer-events-none">
        <div className="w-6 h-0.5 bg-yellow-400" />
        <div className="w-6 h-0.5 bg-yellow-400" />
        <div className="w-6 h-0.5 bg-yellow-400" />
        <div className="w-6 h-0.5 bg-yellow-400" />
      </div>

      {/* Left Column: Analog Speedometer Dial & Digital LED */}
      <div className="flex flex-col items-center justify-center shrink-0 w-full md:w-auto">
        <div className="relative w-36 h-22 flex items-end justify-center">
          {/* SVG Speedometer Gauge */}
          <svg viewBox="0 0 180 110" className="w-36 h-22 drop-shadow-[0_0_12px_rgba(56,189,248,0.35)]">
            {/* Background Arc */}
            <path
              d="M 20 100 A 70 70 0 0 1 160 100"
              fill="none"
              stroke="#1e293b"
              strokeWidth="16"
              strokeLinecap="round"
            />
            {/* Green Safe Zone Arc (0 to 40 km/h = first half) */}
            <path
              d="M 20 100 A 70 70 0 0 1 90 30"
              fill="none"
              stroke="#10b981"
              strokeWidth="14"
              strokeLinecap="round"
            />
            {/* Red Danger Zone Arc (40 to 80 km/h = second half) */}
            <path
              d="M 90 30 A 70 70 0 0 1 160 100"
              fill="none"
              stroke="#f43f5e"
              strokeWidth="14"
              strokeLinecap="round"
              strokeDasharray="2 3"
            />
            {/* Tick Marks */}
            {[0, 20, 40, 60, 80].map((v) => {
              const ang = (-90 + (v / 80) * 180) * (Math.PI / 180);
              const x1 = 90 + 55 * Math.sin(ang);
              const y1 = 100 - 55 * Math.cos(ang);
              const x2 = 90 + 66 * Math.sin(ang);
              const y2 = 100 - 66 * Math.cos(ang);
              return (
                <g key={v}>
                  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#cbd5e1" strokeWidth="2" />
                  <text
                    x={90 + 44 * Math.sin(ang)}
                    y={100 - 44 * Math.cos(ang)}
                    fill={v === 40 ? '#facc15' : '#94a3b8'}
                    fontSize="9"
                    fontWeight="900"
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    {v}
                  </text>
                </g>
              );
            })}
            {/* Pivot Pin */}
            <circle cx="90" cy="100" r="9" fill="#facc15" stroke="#0f172a" strokeWidth="2.5" />
            {/* Speedometer Needle */}
            <line
              x1="90"
              y1="100"
              x2="90"
              y2="38"
              stroke="#facc15"
              strokeWidth="3.5"
              strokeLinecap="round"
              style={{
                transformOrigin: '90px 100px',
                transform: `rotate(${needleAngle}deg)`,
                transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            />
          </svg>
        </div>

        {/* Digital Speed Readout */}
        <div className="flex items-center gap-1.5 bg-[#090517] border border-cyan-400/40 rounded-lg px-3 py-0.5 mt-0.5 shadow-inner">
          <span className="text-base font-mono font-black text-cyan-300">{speed}</span>
          <span className="text-[10px] font-bold text-slate-400 uppercase">km/h</span>
        </div>
      </div>

      {/* Right Column: School Crosswalk Radar Box */}
      <div className="flex-1 flex flex-col justify-between gap-2 w-full bg-[#0c0824]/90 border border-purple-400/25 rounded-xl p-2.5 sm:p-3 shadow-inner min-w-0">
        <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
          <span className="text-[11px] font-black text-amber-300 uppercase tracking-wider flex items-center gap-1">
            <span>🚸 School Crossing Radar</span>
          </span>
          <span className="text-[10px] font-mono bg-yellow-400/20 text-yellow-300 px-1.5 py-0.5 rounded border border-yellow-400/30 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-ping" />
            RADAR ACTIVE
          </span>
        </div>

        {/* Speed Feedback LED Card */}
        <div className={`p-2 sm:p-2.5 rounded-xl border-2 flex items-center gap-2.5 transition-all duration-300 ${
          isSafe
            ? 'bg-emerald-950/80 border-emerald-400 text-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.25)]'
            : 'bg-rose-950/80 border-rose-400 text-rose-200 shadow-[0_0_15px_rgba(244,63,94,0.25)]'
        }`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-base shrink-0 font-black shadow ${
            isSafe ? 'bg-emerald-500 text-slate-950' : 'bg-rose-500 text-white animate-bounce'
          }`}>
            {isSafe ? '🚌' : '📸'}
          </div>
          <div className="flex flex-col text-left min-w-0">
            <span className="font-display font-black text-xs sm:text-sm leading-tight truncate">
              {isSafe ? 'LEGAL SPEED · School Zone Safe!' : 'SPEEDING VIOLATION · Camera Flash!'}
            </span>
            <span className="text-[11px] font-extrabold opacity-90 leading-tight mt-0.5">
              {isSafe
                ? speed === 40
                  ? 'Exactly 40 km/h! Boundary is legal (filled dot ●).'
                  : `${speed} km/h is below 40 km/h limit. Children cross safely.`
                : `Exceeding safe limit by +${over} km/h! Ticket issued.`}
            </span>
          </div>
        </div>

        {/* Real-World Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[10px] font-extrabold text-slate-300">
          <div className="bg-[#180b33] border border-white/10 rounded-lg p-1 text-center">
            <span className="text-slate-400 block text-[8px] uppercase">Rule Keyword</span>
            <span className="text-amber-300 font-black truncate block">"At most 40" → ≤ 40</span>
          </div>
          <div className="bg-[#180b33] border border-white/10 rounded-lg p-1 text-center">
            <span className="text-slate-400 block text-[8px] uppercase">Number Line Style</span>
            <span className="text-cyan-300 font-black truncate block">Filled Dot ● + Left ←</span>
          </div>
        </div>
      </div>
    </div>
  );
}
