import React from 'react';

export function CryoChamberSim({ temp = -2, targetTemp = -2 }) {
  const minT = -8;
  const maxT = 4;
  const clampedT = Math.min(Math.max(temp, minT), maxT);
  
  // Percent from bottom (minT = -8°C is at bottom, maxT = +4°C is at top)
  const percent = ((clampedT - minT) / (maxT - minT)) * 100;
  const targetPercent = ((targetTemp - minT) / (maxT - minT)) * 100;
  
  const isColdEnough = temp < targetTemp;
  const fmt = n => (n < 0 ? `−${-n}` : `${n}`);

  return (
    <div className="w-full bg-gradient-to-b from-[#091533] to-[#04091a] border-2 border-cyan-400/40 rounded-2xl p-3 sm:p-3.5 shadow-xl flex flex-col md:flex-row items-center justify-between gap-3 shrink-0 overflow-hidden relative">
      {/* Background snowflake particles */}
      <div className="absolute top-2 right-4 text-cyan-300/15 text-2xl select-none pointer-events-none">❄️</div>
      <div className="absolute bottom-2 left-10 text-cyan-300/10 text-xl select-none pointer-events-none">❄️</div>

      {/* Left Column: Cryogenic Thermometer Column */}
      <div className="flex items-end justify-center gap-3 h-36 sm:h-40 w-full md:w-auto relative px-2 shrink-0">
        {/* Thermometer Tube */}
        <div className="relative w-10 h-32 sm:h-36 bg-[#0a1024] border-2 border-cyan-400/60 rounded-full flex flex-col justify-between py-1.5 px-0.5 shadow-inner shrink-0">
          {/* Internal Fluid Column */}
          <div
            className="absolute bottom-1.5 left-1.5 right-1.5 bg-gradient-to-t from-blue-600 via-cyan-400 to-cyan-200 rounded-b-full transition-all duration-300 shadow-[0_0_12px_rgba(56,189,248,0.7)]"
            style={{ height: `${Math.max(10, percent)}%` }}
          />

          {/* Temperature Tick Marks */}
          {[4, 2, 0, -2, -4, -6, -8].map(val => (
            <div key={val} className="flex items-center justify-between text-[9px] font-mono font-bold text-cyan-200/70 z-10 px-0.5">
              <span className={`w-2 h-0.5 ${val === targetTemp ? 'bg-amber-400 w-3 h-1' : 'bg-white/30'}`} />
              <span className={val === targetTemp ? 'text-amber-300 font-black' : ''}>{fmt(val)}°</span>
            </div>
          ))}

          {/* Target Limit Barrier Line */}
          <div
            className="absolute left-0 right-0 border-t-2 border-dashed border-rose-400 pointer-events-none flex items-center justify-end pr-0.5 z-20"
            style={{ bottom: `${targetPercent}%` }}
          >
            <span className="text-[8px] bg-rose-950 text-rose-300 px-1 rounded font-black border border-rose-400/60 shadow">
              −2°
            </span>
          </div>
        </div>

        {/* Penguin Habitat Float */}
        <div className="flex flex-col items-center justify-end h-32 sm:h-36 w-24 relative shrink-0">
          <div className="text-3xl mb-1 filter drop-shadow select-none">
            {isColdEnough ? '🐧' : '💧'}
          </div>
          {/* Floating Ice Shelf */}
          <div className={`w-20 h-7 rounded-xl border-2 flex items-center justify-center font-display font-black text-[11px] transition-all duration-300 shadow-md ${
            isColdEnough
              ? 'bg-gradient-to-r from-cyan-400/40 to-blue-500/40 border-cyan-300 text-cyan-100 shadow-[0_0_12px_rgba(56,189,248,0.5)]'
              : 'bg-rose-950/60 border-rose-400 text-rose-200'
          }`}>
            {isColdEnough ? '❄️ Solid Ice' : '⚠️ Melting!'}
          </div>
          {/* Current Temp readout badge */}
          <div className="mt-1 bg-cyan-950/90 border border-cyan-400 text-cyan-300 font-mono font-black text-[10px] px-2 py-0.5 rounded-full">
            {fmt(temp)} °C
          </div>
        </div>
      </div>

      {/* Right Column: Cryo-Control Status Box */}
      <div className="flex-1 flex flex-col justify-between gap-2 w-full bg-[#07112b]/90 border border-cyan-400/25 rounded-xl p-2.5 sm:p-3 shadow-inner min-w-0">
        <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
          <span className="text-[11px] font-black text-cyan-300 uppercase tracking-wider flex items-center gap-1">
            <span>🧊 Polar Sanctuary Habitat</span>
          </span>
          <span className="text-[10px] font-mono bg-cyan-900/60 text-cyan-200 px-1.5 py-0.5 rounded border border-cyan-400/30">
            Cryo-Sensor #4
          </span>
        </div>

        {/* Cold Feedback Card */}
        <div className={`p-2 sm:p-2.5 rounded-xl border-2 flex items-center gap-2.5 transition-all duration-300 ${
          isColdEnough
            ? 'bg-emerald-950/80 border-emerald-400 text-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.25)]'
            : 'bg-rose-950/80 border-rose-400 text-rose-200 shadow-[0_0_15px_rgba(244,63,94,0.25)]'
        }`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-base shrink-0 font-black shadow ${
            isColdEnough ? 'bg-emerald-500 text-slate-950' : 'bg-rose-500 text-white'
          }`}>
            {isColdEnough ? '❄️' : '⚠️'}
          </div>
          <div className="flex flex-col text-left min-w-0">
            <span className="font-display font-black text-xs sm:text-sm leading-tight truncate">
              {isColdEnough ? 'SAFE COLD · Ice Shelf Frozen!' : 'TOO WARM · Ice Begins Melting!'}
            </span>
            <span className="text-[11px] font-extrabold opacity-90 leading-tight mt-0.5">
              {isColdEnough
                ? `${fmt(temp)} °C is colder than −2 °C. Solid ice for penguins.`
                : temp === targetTemp
                  ? 'At −2 °C, ice melts! Strict < means −2 is excluded (open circle ○).'
                  : `${fmt(temp)} °C is warmer than −2 °C. Danger of cracking!`}
            </span>
          </div>
        </div>

        {/* Real-World Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[10px] font-extrabold text-slate-300">
          <div className="bg-[#0b173d] border border-white/10 rounded-lg p-1 text-center">
            <span className="text-slate-400 block text-[8px] uppercase">Rule Keyword</span>
            <span className="text-amber-300 font-black truncate block">"Colder than −2" → &lt; −2</span>
          </div>
          <div className="bg-[#0b173d] border border-white/10 rounded-lg p-1 text-center">
            <span className="text-slate-400 block text-[8px] uppercase">Number Line Style</span>
            <span className="text-cyan-300 font-black truncate block">Open Circle ○ + Left ←</span>
          </div>
        </div>
      </div>
    </div>
  );
}
