import React from 'react';

export function DetectiveDossier({
  studentName,
  caseTitle,
  scenarioDesc,
  lines,
  fixedLines,
  errorIdx,
  detStage,
  shakeLine,
  onPickLine,
  tests = [],
  isDone = false
}) {
  return (
    <div className="w-full bg-[#12082b] border-2 border-purple-400/40 rounded-2xl p-3 sm:p-3.5 shadow-xl flex flex-col gap-2.5 relative shrink-0">
      {/* Top Header Row: Case File Tag & Student Stamp */}
      <div className="flex items-center justify-between border-b border-purple-400/20 pb-2 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="text-xl">🕵️</span>
          <div>
            <h4 className="font-display font-black text-xs sm:text-sm text-amber-300 leading-tight">
              {caseTitle}
            </h4>
            <span className="text-[10px] font-extrabold text-slate-300">
              Student: <span className="text-white font-black">{studentName}</span> · Grade 8 Math Class
            </span>
          </div>
        </div>

        {/* Status Stamp */}
        <div className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-black border flex items-center gap-1 shadow ${
          isDone
            ? 'bg-emerald-950/80 text-emerald-300 border-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.4)]'
            : detStage === 'find'
              ? 'bg-amber-950/80 text-amber-300 border-amber-400 animate-pulse'
              : 'bg-purple-950/80 text-purple-200 border-purple-400'
        }`}>
          <span>{isDone ? '🏅' : detStage === 'find' ? '🔍' : '🛠️'}</span>
          <span>{isDone ? 'CASE CLOSED' : detStage === 'find' ? 'SPOTTING MISTAKE' : 'APPLYING FIX'}</span>
        </div>
      </div>

      {/* Real-World Context Callout */}
      <div className="bg-[#1b0d3d]/90 border border-amber-400/30 rounded-xl px-2.5 py-1.5 text-[11px] sm:text-xs text-slate-200 font-bold text-left flex items-start gap-1.5 shadow-inner">
        <span className="text-sm shrink-0">📋</span>
        <span className="leading-snug">{scenarioDesc}</span>
      </div>

      {/* Ruled Student Homework Sheet */}
      <div className="relative bg-[#0d0520] border-2 border-purple-500/30 rounded-xl p-2.5 sm:p-3 shadow-inner">
        {/* Left red margin line */}
        <div className="absolute left-8 sm:left-10 top-0 bottom-0 w-0.5 bg-rose-500/30 pointer-events-none" />

        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[9px] uppercase font-black tracking-wider text-purple-300">
            {detStage === 'find'
              ? '👉 Tap the line containing the mathematical error:'
              : '📓 Homework Steps with Detective Markup:'}
          </span>
          {detStage === 'find' && (
            <span className="text-[9px] text-amber-300 font-bold bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/30">
              Magnifier Active 🔎
            </span>
          )}
        </div>

        {/* Solution Step Lines */}
        <div className="flex flex-col gap-1.5 pl-5 sm:pl-6">
          {(detStage === 'verify' || isDone ? fixedLines : lines).map((line, idx) => {
            const isErrorLine = idx === errorIdx;
            const isClickable = detStage === 'find';
            const wasCorrected = (detStage === 'verify' || isDone) && idx >= errorIdx && line !== lines[idx];

            return (
              <button
                key={idx}
                onClick={() => onPickLine(idx)}
                disabled={!isClickable}
                className={`w-full text-left font-mono text-xs sm:text-sm px-2.5 py-1.5 rounded-lg border-2 transition-all flex items-center justify-between ${
                  isClickable
                    ? 'cursor-pointer hover:border-amber-400 hover:bg-amber-400/15'
                    : 'cursor-default'
                } ${shakeLine === idx ? 'animate-shake border-rose-500 bg-rose-950/80 text-rose-200' : ''} ${
                  detStage === 'fix' && isErrorLine
                    ? 'border-rose-400 bg-rose-950/80 text-rose-200 line-through decoration-2'
                    : wasCorrected
                      ? 'border-emerald-400 bg-emerald-950/60 text-emerald-200 shadow'
                      : 'border-white/10 bg-[#160a33]/60 text-slate-100'
                }`}
              >
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="text-slate-400 font-bold text-[10px] w-4 shrink-0">{idx + 1}.</span>
                  <span className="font-extrabold truncate">{line}</span>
                </div>

                {/* Status Badges */}
                {detStage === 'fix' && isErrorLine && (
                  <span className="text-[9px] bg-rose-500 text-white font-black px-1.5 py-0.5 rounded shadow shrink-0">
                    MISTAKE ❌
                  </span>
                )}
                {wasCorrected && (
                  <span className="text-[9px] bg-emerald-500 text-slate-950 font-black px-1.5 py-0.5 rounded shadow shrink-0">
                    CORRECTED ✅
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Multi-Value Evidence Proof Lab (Inside, Boundary, Outside) */}
      {isDone && tests.length > 0 && (
        <div className="bg-[#0b162b] border-2 border-cyan-400/50 rounded-xl p-2.5 flex flex-col gap-1.5 fade-in-up shadow-xl shrink-0">
          <div className="flex items-center justify-between border-b border-cyan-400/20 pb-1">
            <span className="text-[11px] font-black text-cyan-300 uppercase tracking-wider flex items-center gap-1">
              <span>🧪 Lab Verification Proof (Story Slide 6 Rule)</span>
            </span>
            <span className="text-[9px] text-cyan-200 bg-cyan-900/60 px-1.5 py-0.5 rounded border border-cyan-400/30">
              Verified ✓
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs font-mono">
            {tests.map((t, i) => (
              <div
                key={i}
                className={`p-1.5 rounded-lg border flex items-center justify-between gap-1 ${
                  t.ok
                    ? 'bg-emerald-950/60 border-emerald-400/60 text-emerald-200'
                    : 'bg-rose-950/60 border-rose-400/60 text-rose-200'
                }`}
              >
                <div className="min-w-0">
                  <span className="font-sans font-bold text-[9px] uppercase block opacity-80 truncate">
                    {t.type || (t.ok ? 'Inside Answer' : 'Outside / False Trap')} (x = {t.x})
                  </span>
                  <span className="font-bold text-[11px] truncate block">{t.calc}</span>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-bold text-[11px] block">{t.rhs}</span>
                  <span className={`text-[9px] font-black px-1.5 py-0.5 rounded ${t.ok ? 'bg-emerald-500 text-slate-950' : 'bg-rose-500 text-white'}`}>
                    {t.ok ? 'WORKS ✓' : 'FAILS ✗'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
