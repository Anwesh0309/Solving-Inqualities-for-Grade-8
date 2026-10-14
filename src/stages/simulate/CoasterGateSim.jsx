import React from 'react';

export function CoasterGateSim({ height = 120, targetHeight = 120, isTesting = false }) {
  const minH = 100;
  const maxH = 140;
  const clampedH = Math.min(Math.max(height, minH), maxH);
  
  // Convert height to percentage for vertical position (100cm = bottom, 140cm = top)
  const percent = ((clampedH - minH) / (maxH - minH)) * 100;
  const targetPercent = ((targetHeight - minH) / (maxH - minH)) * 100;
  
  const isAllowed = height >= targetHeight;
  const diff = height - targetHeight;

  return (
    <div className="w-full bg-gradient-to-b from-[#190e38] to-[#0c051f] border-2 border-amber-400/30 rounded-2xl p-3 sm:p-3.5 shadow-xl flex flex-col md:flex-row items-center justify-between gap-3 shrink-0 overflow-hidden relative">
      {/* Decorative amusement park background track */}
      <svg className="absolute -right-6 -bottom-6 w-44 h-36 opacity-15 pointer-events-none" viewBox="0 0 200 150">
        <path d="M 0 140 Q 60 20 120 70 T 200 10" fill="none" stroke="#facc15" strokeWidth="4" />
        <path d="M 0 146 Q 60 26 120 76 T 200 16" fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 4" />
        <circle cx="120" cy="70" r="16" fill="none" stroke="#f43f5e" strokeWidth="3" />
      </svg>

      {/* Left Column: Visual Stadiometer & Character */}
      <div className="flex items-end justify-center gap-3 h-36 sm:h-40 w-full md:w-auto relative px-2 shrink-0">
        {/* Height Stadiometer Measuring Pole */}
        <div className="relative w-12 h-32 sm:h-36 bg-[#14082c] border-2 border-amber-400/60 rounded-lg flex flex-col justify-between py-1 px-1 shadow-inner shrink-0">
          {[140, 135, 130, 125, 120, 115, 110, 105, 100].map(val => (
            <div key={val} className="flex items-center justify-between text-[9px] font-mono font-bold text-amber-200/80">
              <span className={`w-2 h-0.5 ${val === targetHeight ? 'bg-amber-400 w-3 h-1' : 'bg-white/30'}`} />
              <span className={val === targetHeight ? 'text-amber-300 font-black' : ''}>{val}</span>
            </div>
          ))}

          {/* Target Height Barrier Line */}
          <div
            className="absolute left-0 right-0 border-t-2 border-dashed border-cyan-400 pointer-events-none flex items-center justify-end pr-0.5 z-10"
            style={{ bottom: `${targetPercent}%` }}
          >
            <span className="text-[8px] bg-cyan-950 text-cyan-300 px-1 rounded font-black border border-cyan-400/60 shadow">
              120
            </span>
          </div>

          {/* Interactive Height Cursor Bar */}
          <div
            className="absolute -left-1 -right-2 h-1.5 bg-gradient-to-r from-amber-400 to-yellow-200 rounded shadow-[0_0_10px_rgba(250,204,21,0.9)] transition-all duration-300 z-20 flex items-center justify-end"
            style={{ bottom: `${percent}%` }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-amber-300 border border-slate-950 shadow" />
          </div>
        </div>

        {/* Leo Rider Avatar */}
        <div className="flex flex-col items-center justify-end h-32 sm:h-36 w-24 relative shrink-0">
          {/* Height marker tag above Leo - Cleanly placed with no buggy transforms */}
          <div className="bg-amber-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full shadow-md border border-white/60 mb-0.5 shrink-0 z-20">
            {height} cm
          </div>

          {/* Cartoon Character Body */}
          <div
            className="flex flex-col items-center transition-all duration-300 origin-bottom"
            style={{ height: `${Math.max(65, (clampedH / 140) * 105)}px` }}
          >
            {/* Mascot Head (Leo) */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-b from-amber-400 to-amber-500 border-2 border-amber-300 flex items-center justify-center text-xl shadow-md shrink-0 relative">
              🦁
              {/* Party/Safety visor */}
              <div className="absolute -top-1 -right-1 text-[10px]">🎢</div>
            </div>
            {/* Body & Shirt */}
            <div className="w-8 flex-1 bg-gradient-to-b from-purple-600 to-indigo-700 rounded-t-lg border border-purple-300/40 mt-0.5 flex flex-col items-center justify-center shadow">
              <span className="text-[7px] font-black text-amber-200">LEO</span>
            </div>
            {/* Legs & Sneakers */}
            <div className="flex gap-1 w-7 h-3 shrink-0">
              <div className="flex-1 bg-indigo-900 rounded-b border border-slate-800" />
              <div className="flex-1 bg-indigo-900 rounded-b border border-slate-800" />
            </div>
            <div className="flex gap-1.5 w-8 h-1.5 shrink-0">
              <div className="flex-1 bg-rose-500 rounded-full" />
              <div className="flex-1 bg-rose-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Turnstile Status Box & Real-World Details */}
      <div className="flex-1 flex flex-col justify-between gap-2 w-full bg-[#110729]/90 border border-purple-400/25 rounded-xl p-2.5 sm:p-3 shadow-inner min-w-0">
        <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
          <span className="text-[11px] font-black text-amber-300 uppercase tracking-wider flex items-center gap-1">
            <span>🎡 Coaster Entrance Gate</span>
          </span>
          <span className="text-[10px] font-mono bg-purple-900/60 text-purple-200 px-1.5 py-0.5 rounded border border-purple-400/30">
            Safety Gate #01
          </span>
        </div>

        {/* LED Gate Status Banner */}
        <div className={`p-2 sm:p-2.5 rounded-xl border-2 flex items-center gap-2.5 transition-all duration-300 ${
          isAllowed
            ? 'bg-emerald-950/80 border-emerald-400 text-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.25)]'
            : 'bg-rose-950/80 border-rose-400 text-rose-200 shadow-[0_0_15px_rgba(244,63,94,0.25)]'
        }`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-base shrink-0 font-black shadow ${
            isAllowed ? 'bg-emerald-500 text-slate-950' : 'bg-rose-500 text-white'
          }`}>
            {isAllowed ? '✓' : '✗'}
          </div>
          <div className="flex flex-col text-left min-w-0">
            <span className="font-display font-black text-xs sm:text-sm leading-tight truncate">
              {isAllowed ? 'ACCESS GRANTED · Safe to Board!' : 'STOP · Under Height Limit!'}
            </span>
            <span className="text-[11px] font-extrabold opacity-90 leading-tight mt-0.5">
              {isAllowed
                ? diff === 0
                  ? 'Exactly 120 cm! Boundary allowed (filled dot ●).'
                  : `120 cm or taller: ${diff} cm above minimum.`
                : `Needs ${Math.abs(diff)} cm more growth to ride.`}
            </span>
          </div>
        </div>

        {/* Real-World Detail Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[10px] font-extrabold text-slate-300">
          <div className="bg-[#180b33] border border-white/10 rounded-lg p-1 text-center">
            <span className="text-slate-400 block text-[8px] uppercase">Rule Keyword</span>
            <span className="text-amber-300 font-black truncate block">"At least 120" → ≥ 120</span>
          </div>
          <div className="bg-[#180b33] border border-white/10 rounded-lg p-1 text-center">
            <span className="text-slate-400 block text-[8px] uppercase">Number Line Style</span>
            <span className="text-cyan-300 font-black truncate block">Filled Dot ● + Right →</span>
          </div>
        </div>
      </div>
    </div>
  );
}
