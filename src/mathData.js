/* =========================================================================
   MATH DATA & PROCEDURAL QUESTION GENERATOR
   Procedurally generates unbounded non-repeating Grade 8 questions on
   solving linear inequalities (signs, number lines, flip rule, word problems).
   ========================================================================= */

export const WESTERN_NAMES = [
  "Leo", "Emma", "Alex", "Oliver", "Sophia", "Jack", "Maya", "Lucas",
  "Ethan", "Chloe", "Noah", "Liam", "Harper", "Ava", "Mason", "Ella",
  "James", "Mia", "Logan", "Charlotte"
];

export const PRACTICE_WORLDS = [
  { id: 0, name: "Height Check Park", icon: "🎢", range: "Q1–10", difficulty: 1, types: ['words', 'oneStepAdd', 'numberLine'] },
  { id: 1, name: "Number Line Lane", icon: "📏", range: "Q11–20", difficulty: 1, types: ['numberLine', 'oneStepAdd', 'testValue'] },
  { id: 2, name: "Speed Limit Strip", icon: "🚦", range: "Q21–30", difficulty: 2, types: ['oneStepMul', 'words', 'testValue'] },
  { id: 3, name: "Budget Bazaar", icon: "🛍️", range: "Q31–40", difficulty: 2, types: ['budget', 'oneStepAdd', 'twoStep'] },
  { id: 4, name: "Flip Factory", icon: "🔄", range: "Q41–50", difficulty: 3, types: ['negFlip', 'oneStepMul'] },
  { id: 5, name: "Thermo Tundra", icon: "🌡️", range: "Q51–60", difficulty: 3, types: ['negFlip', 'numberLine', 'twoStep'] },
  { id: 6, name: "Score Stadium", icon: "🏆", range: "Q61–70", difficulty: 3, types: ['minimum', 'twoStep'] },
  { id: 7, name: "Elevator Tower", icon: "🛗", range: "Q71–80", difficulty: 4, types: ['budget', 'negFlip', 'minimum'] },
  { id: 8, name: "Whole Number Woods", icon: "🌲", range: "Q81–90", difficulty: 4, types: ['countWhole', 'testValue', 'twoStep'] },
  { id: 9, name: "Inequality HQ", icon: "🏰", range: "Q91–100", difficulty: 4, types: ['words', 'oneStepAdd', 'numberLine', 'testValue', 'oneStepMul', 'budget', 'twoStep', 'negFlip', 'minimum', 'countWhole'] }
];

const SIGNS = ['<', '>', '≤', '≥'];
const FLIP = { '<': '>', '>': '<', '≤': '≥', '≥': '≤' };
const OPEN = { '<': true, '>': true, '≤': false, '≥': false };
const DIR = { '<': 'left', '≤': 'left', '>': 'right', '≥': 'right' };
const SIGN_WORD = { '<': 'less than', '>': 'greater than', '≤': 'less than or equal to', '≥': 'greater than or equal to' };

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const signed = n => (n < 0 ? `− ${-n}` : `+ ${n}`);
const neg = n => (n < 0 ? `−${-n}` : `${n}`);
const holds = (v, s, b) => (s === '<' ? v < b : s === '>' ? v > b : s === '≤' ? v <= b : v >= b);

function shuffleWithCorrect(correctLabel, wrongLabels) {
  const uniq = [];
  for (const w of wrongLabels) if (w !== correctLabel && !uniq.includes(w)) uniq.push(w);
  const all = [correctLabel, ...uniq.slice(0, 3)];
  for (let i = all.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [all[i], all[j]] = [all[j], all[i]];
  }
  return { options: all, correctIndex: all.indexOf(correctLabel) };
}

/* Number line window centred near a boundary value */
function lineAround(b) {
  const span = 6;
  const min = b - span + randInt(-1, 1);
  return { min, max: min + 12, step: 1 };
}

/* Wrong-but-tempting answers for "x [sign] value" */
function signDistractors(v, s, val, extras = []) {
  return [
    `${v} ${FLIP[s]} ${neg(val)}`,
    `${v} ${OPEN[s] ? (s === '<' ? '≤' : '≥') : (s === '≤' ? '<' : '>')} ${neg(val)}`,
    ...extras
  ];
}

/* -------------------------------------------------------------------------
   ARCHETYPES — each returns { rule, prompt, options, correctIndex,
   explanation, visual }
   ------------------------------------------------------------------------- */
const ARCHETYPES = {
  words(diff) {
    const name = pick(WESTERN_NAMES);
    const cases = [
      { ctx: `Riders on the Thunder Coaster must be at least ${randInt(110, 140)} cm tall.`, v: 'h', s: '≥', key: 'at least', unit: 'height h' },
      { ctx: `A lift can carry at most ${randInt(6, 15) * 50} kg.`, v: 'w', s: '≤', key: 'at most', unit: 'mass w' },
      { ctx: `${name}'s school bag must weigh less than ${randInt(4, 9)} kg.`, v: 'm', s: '<', key: 'less than', unit: 'mass m' },
      { ctx: `To win a prize you need more than ${randInt(20, 60)} points.`, v: 'p', s: '>', key: 'more than', unit: 'points p' },
      { ctx: `The car park allows no more than ${randInt(30, 90)} cars.`, v: 'c', s: '≤', key: 'no more than', unit: 'cars c' },
      { ctx: `A pass mark is no less than ${randInt(40, 60)} marks.`, v: 's', s: '≥', key: 'no less than', unit: 'score s' },
      { ctx: `The speed limit in the school zone is ${randInt(3, 5) * 10} km/h — drivers may not go faster.`, v: 'v', s: '≤', key: 'may not go faster', unit: 'speed v' }
    ];
    const c = pick(cases);
    const val = Number(c.ctx.match(/(\d+)/)[1]);
    const right = `${c.v} ${c.s} ${val}`;
    const { options, correctIndex } = shuffleWithCorrect(right, [`${c.v} ${FLIP[c.s]} ${val}`, ...signDistractors(c.v, c.s, val), `${c.v} = ${val}`]);
    return {
      rule: "KEYWORD RULE",
      prompt: `Read the rule above. Which inequality describes every allowed ${c.unit}?`,
      options, correctIndex,
      explanation: `"${c.key}" → ${c.s}, so ${right}.`,
      visual: { kind: 'phrase', text: c.ctx, keys: ['at least', 'at most', 'less than', 'more than', 'no more than', 'no less than', 'may not go faster'] }
    };
  },

  numberLine() {
    const b = randInt(-6, 8);
    const s = pick(SIGNS);
    const v = pick(['x', 'y', 'n']);
    const right = `${v} ${s} ${neg(b)}`;
    const { options, correctIndex } = shuffleWithCorrect(right, [`${v} ${FLIP[s]} ${neg(b)}`, ...signDistractors(v, s, b), `${v} ${s} ${neg(b + 1)}`]);
    return {
      rule: "NUMBER LINE RULE",
      prompt: `Which inequality is shown on the number line?`,
      options, correctIndex,
      explanation: `${OPEN[s] ? 'Open' : 'Closed'} circle at ${neg(b)} (${OPEN[s] ? 'not included' : 'included'}), arrow pointing ${DIR[s]} → ${right}.`,
      visual: { kind: 'numline', ...lineAround(b), point: b, closed: !OPEN[s], dir: DIR[s] }
    };
  },

  oneStepAdd(diff) {
    const v = pick(['x', 'y', 'a', 'k']);
    const s = pick(SIGNS);
    const a = randInt(2, 6 + diff * 3) * (diff >= 2 && Math.random() < 0.4 ? -1 : 1);
    const ans = randInt(-5, 10 + diff * 3);
    const c = ans + a;
    const right = `${v} ${s} ${neg(ans)}`;
    const { options, correctIndex } = shuffleWithCorrect(right, [
      `${v} ${s} ${neg(c + a)}`,
      `${v} ${FLIP[s]} ${neg(ans)}`,
      ...signDistractors(v, s, ans)
    ]);
    return {
      rule: "SOLVE RULE",
      prompt: `Solve: ${v} ${signed(a)} ${s} ${neg(c)}`,
      options, correctIndex,
      explanation: `${a > 0 ? 'Subtract' : 'Add'} ${Math.abs(a)} on both sides (no flip): ${right}.`,
      visual: { kind: 'ineq', lhs: `${v} ${signed(a)}`, sign: s, rhs: neg(c) }
    };
  },

  oneStepMul(diff) {
    const v = pick(['x', 'y', 'p', 't']);
    const s = pick(SIGNS);
    const a = randInt(2, 4 + diff * 2);
    const ans = randInt(-4, 9 + diff * 2);
    const c = a * ans;
    const right = `${v} ${s} ${neg(ans)}`;
    const { options, correctIndex } = shuffleWithCorrect(right, [
      `${v} ${FLIP[s]} ${neg(ans)}`,
      `${v} ${s} ${neg(c - a)}`,
      `${v} ${s} ${neg(c * a)}`,
      ...signDistractors(v, s, ans)
    ]);
    return {
      rule: "SOLVE RULE",
      prompt: `Solve: ${a}${v} ${s} ${neg(c)}`,
      options, correctIndex,
      explanation: `Divide both sides by +${a} — a positive number, so the sign stays: ${right}.`,
      visual: { kind: 'ineq', lhs: `${a}${v}`, sign: s, rhs: neg(c) }
    };
  },

  negFlip(diff) {
    const v = pick(['x', 'y', 'm']);
    const s = pick(SIGNS);
    const a = randInt(2, 4 + diff);
    let ans = randInt(-6, 8);
    if (ans === 0) ans = 3;
    const twoStep = diff >= 4 && Math.random() < 0.6;
    const b = twoStep ? randInt(1, 12) * pick([1, -1]) : 0;
    const c = -a * ans + b;
    const right = `${v} ${FLIP[s]} ${neg(ans)}`;
    const { options, correctIndex } = shuffleWithCorrect(right, [
      `${v} ${s} ${neg(ans)}`,
      `${v} ${FLIP[s]} ${neg(-ans)}`,
      `${v} ${s} ${neg(-ans)}`,
      ...signDistractors(v, FLIP[s], ans)
    ]);
    const lhs = twoStep ? `${neg(-a)}${v} ${signed(b)}` : `${neg(-a)}${v}`;
    return {
      rule: "FLIP RULE",
      prompt: `Solve: ${lhs} ${s} ${neg(c)}`,
      options, correctIndex,
      explanation: `${twoStep ? `${b > 0 ? 'Subtract' : 'Add'} ${Math.abs(b)}: −${a}${v} ${s} ${neg(c - b)}. ` : ''}Divide by −${a} → FLIP the sign: ${right}.`,
      visual: { kind: 'ineq', lhs, sign: s, rhs: neg(c) }
    };
  },

  twoStep(diff) {
    const v = pick(['x', 'n', 'k']);
    const s = pick(SIGNS);
    const negA = diff >= 3 && Math.random() < 0.35;
    const a = randInt(2, 5 + diff) * (negA ? -1 : 1);
    const b = randInt(1, 15) * pick([1, -1]);
    const ans = randInt(-5, 10);
    const c = a * ans + b;
    const fs = negA ? FLIP[s] : s;
    const right = `${v} ${fs} ${neg(ans)}`;
    const { options, correctIndex } = shuffleWithCorrect(right, [
      `${v} ${FLIP[fs]} ${neg(ans)}`,
      `${v} ${fs} ${neg(ans + 2)}`,
      `${v} ${fs} ${neg(ans + 1)}`,
      ...signDistractors(v, fs, ans)
    ]);
    return {
      rule: negA ? "FLIP RULE" : "SOLVE RULE",
      prompt: `Solve: ${neg(a)}${v} ${signed(b)} ${s} ${neg(c)}`,
      options, correctIndex,
      explanation: `${b > 0 ? 'Subtract' : 'Add'} ${Math.abs(b)}: ${neg(a)}${v} ${s} ${neg(c - b)}. Divide by ${neg(a)}${negA ? ' (negative → flip!)' : ''}: ${right}.`,
      visual: { kind: 'ineq', lhs: `${neg(a)}${v} ${signed(b)}`, sign: s, rhs: neg(c) }
    };
  },

  testValue(diff) {
    const s = pick(SIGNS);
    const a = randInt(2, 4 + diff);
    const b = randInt(-8, 10);
    const bound = randInt(-3, 6);
    const c = a * bound + b;
    // Integers satisfying a·x + b [s] c  ⇔  x [s] bound
    const good = [], bad = [];
    for (let x = bound - 6; x <= bound + 6; x++) (holds(x, s, bound) ? good : bad).push(x);
    const correct = pick(good.filter(x => Math.abs(x - bound) <= 3));
    const wrongs = [];
    if (!holds(bound, s, bound)) wrongs.push(bound); // tempting boundary value
    while (wrongs.length < 3) {
      const w = pick(bad.filter(x => Math.abs(x - bound) <= 4));
      if (!wrongs.includes(w)) wrongs.push(w);
    }
    const { options, correctIndex } = shuffleWithCorrect(`x = ${neg(correct)}`, wrongs.map(w => `x = ${neg(w)}`));
    return {
      rule: "TEST RULE",
      prompt: `Which value of x makes ${a}x ${signed(b)} ${s} ${neg(c)} TRUE?`,
      options, correctIndex,
      explanation: `${a}(${neg(correct)}) ${signed(b)} = ${neg(a * correct + b)}, and ${neg(a * correct + b)} ${s} ${neg(c)} ✓. (The solution is x ${s} ${neg(bound)}.)`,
      visual: { kind: 'ineq', lhs: `${a}x ${signed(b)}`, sign: s, rhs: neg(c) }
    };
  },

  budget(diff) {
    const name = pick(WESTERN_NAMES);
    const lift = diff >= 4 && Math.random() < 0.5;
    let total, fixed, each, ctx;
    if (lift) {
      total = randInt(8, 12) * 100;
      fixed = randInt(60, 95);
      each = randInt(6, 9) * 10;
      ctx = `A lift can carry at most ${total} kg. The operator weighs ${fixed} kg and each crate weighs ${each} kg.`;
    } else {
      total = randInt(20, 40 + diff * 10);
      fixed = randInt(3, 12);
      each = randInt(3, 7);
      ctx = `${name} has $${total} to spend at a fair. Entry costs $${fixed} and each ride costs $${each}.`;
    }
    const n = Math.floor((total - fixed) / each);
    if (n < 2 || (total - fixed) % each === 0 && Math.random() < 0.5) return ARCHETYPES.budget(diff);
    const item = lift ? 'crates' : 'rides';
    const fmt = k => `${k} ${item}`;
    const wrongs = [n + 1, Math.floor(total / each), Math.ceil((total + fixed) / each), n - 1, n + 2, n - 2, n + 3].filter(k => k > 0 && k !== n);
    const { options, correctIndex } = shuffleWithCorrect(fmt(n), wrongs.map(fmt));
    return {
      rule: "BUDGET RULE",
      prompt: `${ctx} What is the GREATEST number of ${item} possible?`,
      options, correctIndex,
      explanation: `${fixed} + ${each}n ≤ ${total} → ${each}n ≤ ${total - fixed} → n ≤ ${((total - fixed) / each).toFixed(2).replace(/\.00$/, '')}. Whole ${item} only → at most ${n}.`,
      visual: { kind: 'ineq', lhs: `${fixed} + ${each}n`, sign: '≤', rhs: `${total}` }
    };
  },

  minimum(diff) {
    const name = pick(WESTERN_NAMES);
    const target = randInt(6, 12) * 10;
    const have = randInt(10, Math.floor(target / 2));
    const per = randInt(4, 9);
    const need = target - have;
    const n = Math.ceil(need / per);
    if (need % per === 0 && Math.random() < 0.6) return ARCHETYPES.minimum(diff);
    const fmt = k => `${k} games`;
    const wrongs = [Math.floor(need / per), n + 1, Math.ceil(target / per), n - 1, n + 2, n - 2, n + 3].filter(k => k > 0 && k !== n);
    const { options, correctIndex } = shuffleWithCorrect(fmt(n), wrongs.map(fmt));
    return {
      rule: "AT LEAST RULE",
      prompt: `${name} needs at least ${target} points to unlock a new level. ${name} already has ${have} points and earns ${per} points per game. What is the LEAST number of games needed?`,
      options, correctIndex,
      explanation: `${have} + ${per}g ≥ ${target} → ${per}g ≥ ${need} → g ≥ ${(need / per).toFixed(2).replace(/\.00$/, '')}. Round UP → at least ${n} games.`,
      visual: { kind: 'ineq', lhs: `${have} + ${per}g`, sign: '≥', rhs: `${target}` }
    };
  },

  countWhole() {
    const lo = randInt(-4, 6);
    const hi = lo + randInt(3, 8);
    const s1 = pick(['<', '≤']);
    const s2 = pick(['<', '≤']);
    let count = 0;
    for (let x = Math.max(lo, 0); x <= hi; x++) if (holds(lo, s1, x) && holds(x, s2, hi)) count++;
    const fmt = k => `${k}`;
    const wrongs = [count + 1, count - 1, hi - lo + 1, hi - lo, count + 2, count + 3].filter(k => k >= 0 && k !== count);
    const { options, correctIndex } = shuffleWithCorrect(fmt(count), wrongs.map(fmt));
    const list = [];
    for (let x = Math.max(lo, 0); x <= hi; x++) if (holds(lo, s1, x) && holds(x, s2, hi)) list.push(x);
    return {
      rule: "COUNT RULE",
      prompt: `How many WHOLE numbers (0, 1, 2, …) satisfy ${neg(lo)} ${s1} x ${s2} ${hi}?`,
      options, correctIndex,
      explanation: `They are ${list.length ? list.join(', ') : 'none'} → ${count} whole number${count === 1 ? '' : 's'}. ${s1 === '<' ? 'Open' : 'Closed'} at ${neg(lo)}, ${s2 === '<' ? 'open' : 'closed'} at ${hi}.`,
      visual: { kind: 'numline', min: lo - 2, max: lo + 10, step: 1, point: lo, closed: s1 === '≤', dir: 'between', point2: hi, closed2: s2 === '≤' }
    };
  }
};

/* Remember recent prompts so questions never repeat within a session */
const recentPrompts = [];

/**
 * Generate a procedural question for a given world
 */
export function makeQuestion(worldIndex = 0) {
  const world = PRACTICE_WORLDS[worldIndex] || PRACTICE_WORLDS[0];
  let q;
  for (let tries = 0; tries < 12; tries++) {
    const type = pick(world.types);
    q = ARCHETYPES[type](world.difficulty);
    const key = q.prompt + JSON.stringify(q.visual);
    if (!recentPrompts.includes(key)) {
      recentPrompts.push(key);
      break;
    }
  }
  if (recentPrompts.length > 60) recentPrompts.shift();
  return { world, prompt: q.prompt, options: q.options, correctIndex: q.correctIndex, visual: q.visual, rule: q.rule, explanation: q.explanation };
}

export { SIGN_WORD, FLIP, holds };
