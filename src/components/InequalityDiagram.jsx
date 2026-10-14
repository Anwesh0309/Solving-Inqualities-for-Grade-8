import React from 'react';

/* =========================================================================
   INEQUALITY DIAGRAMS — number lines, inequality cards & keyword boards
   ========================================================================= */

const fmt = n => (n < 0 ? `−${-n}` : `${n}`);

/**
 * Interactive-capable number line.
 * point/closed/dir describe the solution ray (dir: 'left' | 'right' | 'between' | null)
 * onPick(value) makes every tick clickable. testValue draws a ✓/✗ marker.
 */
export function NumberLine({
  min = -6, max = 6, step = 1,
  point = null, closed = false, dir = null,
  point2 = null, closed2 = false,
  onPick = null, testValue = null, testOk = null,
  width = 560, color = '#facc15'
}) {
  const pad = 34;
  const H = 110;
  const y = 62;
  const ticks = [];
  for (let v = min; v <= max + 1e-9; v += step) ticks.push(Math.round(v * 100) / 100);
  const X = v => pad + ((v - min) / (max - min)) * (width - pad * 2);
  const hasPoint = point != null;

  return (
    <svg viewBox={`0 0 ${width} ${H}`} className="w-full max-w-[560px] h-auto drop-shadow-[0_0_14px_rgba(250,204,21,0.25)]">
      {/* Base line with arrows */}
      <line x1={8} y1={y} x2={width - 8} y2={y} stroke="#cbd5e1" strokeWidth="3" />
      <polygon points={`4,${y} 16,${y - 7} 16,${y + 7}`} fill="#cbd5e1" />
      <polygon points={`${width - 4},${y} ${width - 16},${y - 7} ${width - 16},${y + 7}`} fill="#cbd5e1" />

      {/* Solution ray */}
      {hasPoint && dir === 'right' && (
        <g>
          <line x1={X(point)} y1={y} x2={width - 14} y2={y} stroke={color} strokeWidth="8" strokeLinecap="round" opacity="0.9" />
          <polygon points={`${width - 2},${y} ${width - 20},${y - 12} ${width - 20},${y + 12}`} fill={color} />
        </g>
      )}
      {hasPoint && dir === 'left' && (
        <g>
          <line x1={14} y1={y} x2={X(point)} y2={y} stroke={color} strokeWidth="8" strokeLinecap="round" opacity="0.9" />
          <polygon points={`2,${y} 20,${y - 12} 20,${y + 12}`} fill={color} />
        </g>
      )}
      {hasPoint && dir === 'between' && point2 != null && (
        <line x1={X(point)} y1={y} x2={X(point2)} y2={y} stroke={color} strokeWidth="8" strokeLinecap="round" opacity="0.9" />
      )}

      {/* Ticks + labels (clickable when onPick provided) */}
      {ticks.map(v => (
        <g key={v} onClick={onPick ? () => onPick(v) : undefined} style={{ cursor: onPick ? 'pointer' : 'default' }}>
          {onPick && <rect x={X(v) - 14} y={y - 30} width="28" height="70" fill="transparent" />}
          <line x1={X(v)} y1={y - 9} x2={X(v)} y2={y + 9} stroke="#e2e8f0" strokeWidth="2" />
          <text x={X(v)} y={y + 30} fill={v === 0 ? '#38bdf8' : '#e2e8f0'} fontSize={ticks.length > 10 ? '13' : '15'} fontWeight="900" textAnchor="middle">{fmt(v)}</text>
        </g>
      ))}

      {/* Boundary circles */}
      {hasPoint && (
        <circle cx={X(point)} cy={y} r="10" fill={closed ? color : '#0c0520'} stroke={color} strokeWidth="4" style={{ pointerEvents: 'none' }} />
      )}
      {hasPoint && dir === 'between' && point2 != null && (
        <circle cx={X(point2)} cy={y} r="10" fill={closed2 ? color : '#0c0520'} stroke={color} strokeWidth="4" style={{ pointerEvents: 'none' }} />
      )}

      {/* Test value marker */}
      {testValue != null && (
        <g style={{ pointerEvents: 'none' }}>
          <line x1={X(testValue)} y1={y - 38} x2={X(testValue)} y2={y - 14} stroke={testOk ? '#4ade80' : '#f43f5e'} strokeWidth="3" />
          <circle cx={X(testValue)} cy={y - 42} r="13" fill={testOk ? '#16a34a' : '#e11d48'} stroke="#fff" strokeWidth="2" />
          <text x={X(testValue)} y={y - 37} fill="#fff" fontSize="14" fontWeight="900" textAnchor="middle">{testOk ? '✓' : '✗'}</text>
        </g>
      )}
    </svg>
  );
}

function InequalityCard({ lhs, sign, rhs }) {
  return (
    <div className="flex items-center justify-center gap-3 sm:gap-4">
      <div className="px-5 h-14 sm:h-16 rounded-2xl bg-cyan-400/15 border-2 border-cyan-300 flex items-center justify-center font-display font-900 text-2xl sm:text-3xl text-cyan-100">{lhs}</div>
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-display font-900 text-3xl sm:text-4xl shadow-[0_0_22px_rgba(250,204,21,0.7)]">{sign}</div>
      <div className="px-5 h-14 sm:h-16 rounded-2xl bg-purple-400/20 border-2 border-purple-300 flex items-center justify-center font-display font-900 text-2xl sm:text-3xl text-purple-100">{rhs}</div>
    </div>
  );
}

function PhraseBoard({ text, keys = [] }) {
  const escaped = keys.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).sort((a, b) => b.length - a.length);
  const parts = escaped.length ? text.split(new RegExp(`(${escaped.join('|')})`, 'i')) : [text];
  return (
    <div className="flex items-center gap-3 bg-[#1e1342] border-2 border-cyan-400/40 rounded-2xl px-5 py-3 max-w-2xl">
      <span className="text-3xl">🔎</span>
      <p className="font-display font-900 text-base sm:text-lg text-slate-100 leading-snug text-left">
        {parts.map((p, i) => (i % 2 === 1
          ? <span key={i} className="text-amber-300 underline decoration-wavy decoration-amber-400/70 underline-offset-4">{p}</span>
          : <span key={i}>{p}</span>))}
      </p>
    </div>
  );
}

export function InequalityDiagram({ visual }) {
  if (!visual) return null;
  return (
    <div className="w-full flex items-center justify-center my-2">
      {visual.kind === 'numline' && <NumberLine {...visual} />}
      {visual.kind === 'ineq' && <InequalityCard lhs={visual.lhs} sign={visual.sign} rhs={visual.rhs} />}
      {visual.kind === 'phrase' && <PhraseBoard text={visual.text} keys={visual.keys} />}
    </div>
  );
}
