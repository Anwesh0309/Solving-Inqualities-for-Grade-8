import React, { useState, useEffect } from 'react';
import { BgSymbols } from '../components/TopNav.jsx';
import { NumberLine } from '../components/InequalityDiagram.jsx';
import { AUDIO_MAP } from '../audioMap.js';
import { narrate, stopNarration } from '../audio.js';

// Interactive Real-World Simulators (Heavier with details & Grade 7 aligned)
import { CoasterGateSim } from './simulate/CoasterGateSim.jsx';
import { SpeedRadarSim } from './simulate/SpeedRadarSim.jsx';
import { CryoChamberSim } from './simulate/CryoChamberSim.jsx';
import { MechanicalScale } from './simulate/MechanicalScale.jsx';
import { DetectiveDossier } from './simulate/DetectiveDossier.jsx';

/* =========================================================================
   3 INTERACTIVE STATIONS × 3 REAL-WORLD ACTIVITIES (Grade 7/8 Accessible)
   Directly aligned with Story Phase & Wonder Phase:
   - Station 1: Number Line Builder  (Real-World Gates, Radars & Thermometers)
   - Station 2: Tipping Scale Solver (Carnival Snack, Emma's Rides, Cryo-Flip)
   - Station 3: Sign-Flip Detective  (Student Homework Investigation Desk)
   ========================================================================= */

const STATION_ACTIVITIES = {
  1: [
    {
      id: 1,
      title: "Activity 1: Thunder Coaster Height Check",
      desc: "Leo is at the Theme Park standing at the Thunder Coaster gate! Read the ride safety rule, pick the sign, place the boundary on the number line, and test if Leo can board!",
      icon: "🎢",
      storyRef: "Aligned with Wonder Phase & Story Slide 1 (Limits)",
      rule: ["Riders must be ", "at least", " 120 cm tall to ride the Thunder Coaster."],
      v: "h",
      min: 100, max: 140, step: 5,
      target: { sign: "≥", point: 120, closed: true, dir: "right" },
      testUnit: "cm",
      simType: "coaster",
      whyBoundary: "Filled Dot (●) because exactly 120 cm IS allowed to ride!",
      whyArrow: "Arrow Right (→) because taller riders (125 cm, 130 cm) are also safe!",
      hint: "'At least 120' means 120 cm or taller → use ≥, a filled dot at 120, and an arrow pointing right."
    },
    {
      id: 2,
      title: "Activity 2: School Zone Speed Radar",
      desc: "The school bus and drivers are passing Maple Elementary. The police speed camera sign is active. Show every legal safe speed on the number line!",
      icon: "🚸",
      storyRef: "Aligned with Story Slide 2 (The Four Inequality Signs)",
      rule: ["Drivers may travel ", "at most", " 40 km/h in the school zone."],
      v: "s",
      min: 0, max: 80, step: 10,
      target: { sign: "≤", point: 40, closed: true, dir: "left" },
      testUnit: "km/h",
      simType: "speed",
      whyBoundary: "Filled Dot (●) because traveling exactly 40 km/h is legal and safe!",
      whyArrow: "Arrow Left (←) because all slower speeds (30, 20, 10 km/h) are completely safe!",
      hint: "'At most 40' means 40 is allowed, but nothing faster → use ≤, a filled dot at 40, and an arrow pointing left."
    },
    {
      id: 3,
      title: "Activity 3: Polar Sanctuary Cryo-Pool",
      desc: "At the Polar Wildlife Sanctuary, the ice shelf will crack if water warms up! The pool must stay strictly colder than −2 °C. Build the inequality and test temperatures!",
      icon: "🐧",
      storyRef: "Aligned with Story Slide 3 (Open Circle Boundaries)",
      rule: ["The penguin pool water must stay ", "strictly colder than", " −2 °C."],
      v: "t",
      min: -8, max: 4, step: 1,
      target: { sign: "<", point: -2, closed: false, dir: "left" },
      testUnit: "°C",
      simType: "cryo",
      whyBoundary: "Open Circle (○) because at −2 °C melting starts — −2 is NOT allowed!",
      whyArrow: "Arrow Left (←) because colder temperatures are more negative (−3, −4, −6 °C)!",
      hint: "'Strictly colder than −2' means below −2 °C, and −2 itself is excluded → use <, an open circle at −2, and arrow pointing left."
    }
  ],
  2: [
    {
      id: 1,
      title: "Activity 1: Leo's Carnival Snack Budget",
      desc: "Leo has a $15 carnival budget. He buys a $7 popcorn bucket. Let x = money left for arcade tokens. He cannot spend more than $15!",
      icon: "🍿",
      storyRef: "Aligned with Story Slide 4 (Solve Like an Equation)",
      choices: [
        { eq: "x + 7 ≥ 15", why: "≥ would mean he MUST spend at least $15 — but $15 is his budget limit!" },
        { eq: "x + 7 ≤ 15", ok: true },
        { eq: "x − 7 ≤ 15", why: "The popcorn snack adds to his expenses, so it is x + 7." }
      ],
      states: [["x + 7", "≤", "15"], ["x", "≤", "8"]],
      panItems: [
        { left: [{ icon: '🍿', label: 'Popcorn ($7)' }, { icon: '🪙', label: 'Tokens (x)' }], right: [{ icon: '💰', label: 'Budget ($15)' }] },
        { left: [{ icon: '🪙', label: 'Tokens (x)' }], right: [{ icon: '💵', label: 'Remaining ($8)' }] }
      ],
      steps: [
        {
          ask: "Get x alone — how do we remove the $7 snack from BOTH sides of the budget scale?",
          options: ["Add 7", "Subtract 7", "Divide by 7"],
          correct: 1,
          msg: "Subtract 7 from both sides → x ≤ 8. Subtracting never flips the sign!"
        }
      ],
      line: { min: 0, max: 14, step: 1, point: 8, closed: true, dir: "left" },
      answer: "Leo can spend at most $8 on arcade tokens. He can buy 8 one-dollar tokens, or 5, or 0, but NOT 9 tokens!"
    },
    {
      id: 2,
      title: "Activity 2: Emma's Fair Ride Adventure",
      desc: "Emma has $50 at the county fair. Park admission is $14 and each ride costs $4. Let r = number of rides. She cannot spend more than $50!",
      icon: "🎡",
      storyRef: "Aligned with Story Slide 7 (Emma's Fair Budget)",
      choices: [
        { eq: "14 + 4r < 50", why: "'At most $50' means she CAN spend up to exactly $50 → use ≤, not <." },
        { eq: "14 + 4r ≤ 50", ok: true },
        { eq: "4r − 14 ≤ 50", why: "Admission adds to Emma's expenses, so it is 14 + 4r." }
      ],
      states: [["14 + 4r", "≤", "50"], ["4r", "≤", "36"], ["r", "?", "9"], ["r", "≤", "9"]],
      panItems: [
        { left: [{ icon: '🎟️', label: 'Admission ($14)' }, { icon: '🎡', label: 'Rides (4r)' }], right: [{ icon: '💵', label: 'Gift Card ($50)' }] },
        { left: [{ icon: '🎡', label: 'Rides (4r)' }], right: [{ icon: '💰', label: 'Ride Fund ($36)' }] },
        { left: [{ icon: '🎡', label: 'Rides (r)' }], right: [{ icon: '🎟️', label: 'Max 9 Rides' }] },
        { left: [{ icon: '🎡', label: 'Rides (r)' }], right: [{ icon: '🎟️', label: 'Max 9 Rides' }] }
      ],
      steps: [
        {
          ask: "Step 1: First clear the $14 entry cost from both pans:",
          options: ["Add 14", "Subtract 14", "Divide by 14"],
          correct: 1,
          msg: "Subtract 14 from both sides → 4r ≤ 36 (Emma has $36 left for rides)."
        },
        {
          ask: "Step 2: Each ride is $4. Get r alone:",
          options: ["Subtract 4", "Multiply by 4", "Divide by 4"],
          correct: 2,
          msg: "Divide both sides by 4…"
        },
        {
          ask: "We divided by +4 (a POSITIVE number). What happens to the sign?",
          options: ["Keep it (≤)", "Flip it (≥)"],
          correct: 0,
          msg: "Positive divisor → keep the sign: r ≤ 9."
        }
      ],
      line: { min: 0, max: 12, step: 1, point: 9, closed: true, dir: "left" },
      answer: "Emma can go on at most 9 rides! In real life, she can take 0, 1, 2 … up to 9 whole rides. You can't take half a ride!"
    },
    {
      id: 3,
      title: "Activity 3: Science Lab Cryo-Chamber Golden Flip",
      desc: "A lab chilling chamber drops temperature by 2 °C per minute (−2m). The chemist needs it strictly colder than −10 °C to freeze crystals. Let m = minutes.",
      icon: "🧊",
      storyRef: "Aligned with Story Slide 5 (The Golden Flip Rule)",
      choices: [
        { eq: "−2m < −10", ok: true },
        { eq: "−2m > −10", why: "'Colder than' means a lower negative temperature → use <." },
        { eq: "2m < −10", why: "The chamber is cooling down, so the rate is negative (−2m)." }
      ],
      states: [["−2m", "<", "−10"], ["m", "?", "5"], ["m", ">", "5"]],
      panItems: [
        { left: [{ icon: '🧊', label: 'Cooling (−2m)' }], right: [{ icon: '❄️', label: 'Limit (−10°C)' }] },
        { left: [{ icon: '⏱️', label: 'Minutes (m)' }], right: [{ icon: '✨', label: '> 5 Minutes' }] },
        { left: [{ icon: '⏱️', label: 'Minutes (m)' }], right: [{ icon: '✨', label: '> 5 Minutes' }] }
      ],
      steps: [
        {
          ask: "To get m alone, what operation cancels multiplying by −2?",
          options: ["Divide by 2", "Add 2", "Divide by −2"],
          correct: 2,
          msg: "Divide both sides by −2…"
        },
        {
          ask: "⚡ GOLDEN FLIP ALERT: We divided by −2 (a NEGATIVE number)! What must happen to the sign?",
          options: ["Keep it  <", "Flip it  >"],
          correct: 1,
          msg: "Negative divisor → FLIP! < becomes > : m > 5."
        }
      ],
      line: { min: 0, max: 10, step: 1, point: 5, closed: false, dir: "right" },
      answer: "After MORE than 5 minutes (e.g. at 6 min: −2(6) = −12 °C < −10 °C), the chamber is successfully colder than −10 °C!"
    }
  ],
  3: [
    {
      id: 1,
      title: "Case #101: Mason's Missing Negative Flip",
      studentName: "Mason",
      caseTitle: "Case #101: The Missing Negative Flip",
      scenarioDesc: "Mason calculated the cooling duration for his ice cream cart: −3x ≥ 12. He forgot the golden rule on line 3! Spot the mistake, fix it, and prove it with evidence.",
      icon: "🔄",
      storyRef: "Aligned with Story Slide 5 (The Golden Flip Rule)",
      lines: ["−3x ≥ 12", "Divide both sides by −3", "x ≥ −4", "Mason's Answer: x ≥ −4"],
      errorIdx: 2,
      fixOptions: ["x ≥ 4", "x ≤ −4", "x ≤ 4"],
      fixCorrect: 1,
      fixedLines: ["−3x ≥ 12", "Divide both sides by −3", "x ≤ −4", "Correct Answer: x ≤ −4"],
      why: "Dividing by a NEGATIVE number (−3) reverses the order on the number line. The sign must FLIP: ≥ becomes ≤.",
      tests: [
        { x: -5, calc: "−3(−5) = 15", rhs: "15 ≥ 12", ok: true, type: "Inside Solution Ray" },
        { x: -4, calc: "−3(−4) = 12", rhs: "12 ≥ 12", ok: true, type: "Boundary Value (Limit)" },
        { x: 0, calc: "−3(0) = 0", rhs: "0 ≥ 12", ok: false, type: "Mason's False Trap (0)" }
      ],
      line: { min: -10, max: 2, step: 1, point: -4, closed: true, dir: "left" },
      hint: "Look at line 3: Mason divided by −3 (a negative number). What must happen to the inequality sign?"
    },
    {
      id: 2,
      title: "Case #102: Chloe's Two-Step Balance Slip",
      studentName: "Chloe",
      caseTitle: "Case #102: Two-Step Balance Slip",
      scenarioDesc: "Chloe calculated supply packs for an art project: 2x − 5 < 9. She made an inverse operation mistake on line 2! Find the slip and restore balance.",
      icon: "🎯",
      storyRef: "Aligned with Story Slide 6 (Two Steps & Checking)",
      lines: ["2x − 5 < 9", "2x − 5 − 5 < 9 − 5", "2x < 4", "Chloe's Answer: x < 2"],
      errorIdx: 1,
      fixOptions: ["2x − 5 + 5 < 9 + 5", "2x − 5 − 5 < 9 + 5", "2x < 9 − 5"],
      fixCorrect: 0,
      fixedLines: ["2x − 5 < 9", "2x − 5 + 5 < 9 + 5", "2x < 14", "Correct Answer: x < 7"],
      why: "To cancel − 5 we must ADD 5 to both sides, not subtract it. Inverse operations maintain balance!",
      tests: [
        { x: 6, calc: "2(6) − 5 = 7", rhs: "7 < 9", ok: true, type: "Inside Answer (6 packs)" },
        { x: 8, calc: "2(8) − 5 = 11", rhs: "11 < 9", ok: false, type: "Outside Safe Limit (8 packs)" }
      ],
      line: { min: 0, max: 12, step: 1, point: 7, closed: false, dir: "left" },
      hint: "Which operation cancels subtracting 5? The opposite of minus is plus!"
    },
    {
      id: 3,
      title: "Case #103: Ava's Theme Park Ticket Trap",
      studentName: "Ava",
      caseTitle: "Case #103: Theme Park Ticket Trap",
      scenarioDesc: "Ava needs at least 80 tickets to win the giant plush lion 🦁 at the carnival. She has 35 and earns 9 per level. She picked the wrong sign on line 2!",
      icon: "🏆",
      storyRef: "Aligned with Story Slide 7 & 2 (Keyword 'At Least')",
      lines: ["Let L = number of game levels", "35 + 9L ≤ 80", "9L ≤ 45", "L ≤ 5", "Ava's Claim: Play at most 5 levels"],
      errorIdx: 1,
      fixOptions: ["35 − 9L ≥ 80", "35 + 9L > 80", "35 + 9L ≥ 80"],
      fixCorrect: 2,
      fixedLines: ["Let L = number of game levels", "35 + 9L ≥ 80", "9L ≥ 45", "L ≥ 5", "Correct Answer: Play at least 5 levels"],
      why: "'At least 80 points' means the total must be GREATER than or equal to 80 (≥), not ≤.",
      tests: [
        { x: 0, calc: "35 + 9(0) = 35", rhs: "35 ≥ 80", ok: false, type: "Ava's False Claim (0 levels)" },
        { x: 5, calc: "35 + 9(5) = 80", rhs: "80 ≥ 80", ok: true, type: "Minimum Required (5 levels)" },
        { x: 6, calc: "35 + 9(6) = 89", rhs: "89 ≥ 80", ok: true, type: "Bonus Won (6 levels)" }
      ],
      line: { min: 0, max: 12, step: 1, point: 5, closed: true, dir: "right" },
      hint: "Re-read the story keyword: 'at least 80' means 80 or more → which sign is that?"
    }
  ]
};

const SIGN_SET = ['<', '>', '≤', '≥'];
const fmtN = n => (n < 0 ? `−${-n}` : `${n}`);
const holds = (v, s, b) => (s === '<' ? v < b : s === '>' ? v > b : s === '≤' ? v <= b : v >= b);

export function SimulatePhase({ muted, onNext }) {
  const [station, setStation] = useState(1);
  const [actIdx, setActIdx] = useState(0);

  // Station 1 — Number Line Builder
  const [pickSign, setPickSign] = useState(null);
  const [pickPoint, setPickPoint] = useState(null);
  const [pickClosed, setPickClosed] = useState(null);
  const [pickDir, setPickDir] = useState(null);
  const [built, setBuilt] = useState(false);
  const [testVal, setTestVal] = useState(0);

  // Station 2 — Tipping Scale Solver
  const [chosen, setChosen] = useState(false);
  const [stepIdx, setStepIdx] = useState(0);
  const [wrongChoice, setWrongChoice] = useState(null);
  const [shake, setShake] = useState(false);

  // Station 3 — Sign-Flip Detective
  const [detStage, setDetStage] = useState('find');
  const [shakeLine, setShakeLine] = useState(null);
  const [showHint, setShowHint] = useState(false);

  // Feedback banner
  const [feedback, setFeedback] = useState(null);

  const currentActivity = STATION_ACTIVITIES[station][actIdx];

  const currentGuidanceKey = `sim_${station}_${actIdx + 1}`;
  const guidanceAudio = AUDIO_MAP[currentGuidanceKey] || AUDIO_MAP[`sim_${station}`];

  useEffect(() => {
    stopNarration();
    setPickSign(null);
    setPickPoint(null);
    setPickClosed(null);
    setPickDir(null);
    setBuilt(false);
    setTestVal(currentActivity.min != null ? currentActivity.min + 2 * currentActivity.step : 0);
    setChosen(false);
    setStepIdx(0);
    setWrongChoice(null);
    setShake(false);
    setDetStage('find');
    setShakeLine(null);
    setShowHint(false);
    setFeedback(null);

    if (guidanceAudio) narrate(guidanceAudio, !muted);

    return () => stopNarration();
  }, [station, actIdx, muted]);

  const playGuidance = () => {
    stopNarration();
    if (guidanceAudio) narrate(guidanceAudio, true);
  };

  // Keep feedback in view
  useEffect(() => {
    if (!feedback) return;
    const t = setTimeout(() => {
      const el = document.querySelector('[data-sim-feedback]');
      if (el) el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }, 60);
    return () => clearTimeout(t);
  }, [feedback, detStage, stepIdx]);

  const success = (text) => {
    stopNarration();
    setFeedback({ success: true, text });
    narrate(AUDIO_MAP.sim_success, !muted);
  };
  const retry = (text) => {
    stopNarration();
    setFeedback({ success: false, text });
    narrate(AUDIO_MAP.sim_retry, !muted);
  };

  /* ---------------- Station 1 Check ---------------- */
  const s1 = currentActivity;
  const checkLine = () => {
    const t = s1.target;
    const problems = [];
    if (pickSign !== t.sign) problems.push('the inequality sign');
    if (pickPoint !== t.point) problems.push('the boundary number on the line');
    if (pickClosed !== t.closed) problems.push('the circle type (open vs filled)');
    if (pickDir !== t.dir) problems.push('the arrow direction (left vs right)');

    if (!problems.length) {
      setBuilt(true);
      setTestVal(t.point);
      success(`🎉 Excellent work! ${s1.v} ${t.sign} ${fmtN(t.point)}. Now use the test slider to see how the real-world scene responds!`);
    } else {
      retry(`Check ${problems.join(', ')}. 💡 ${s1.hint}`);
    }
  };
  const allPicked = pickSign && pickPoint != null && pickClosed != null && pickDir;

  /* ---------------- Station 2 Scale ---------------- */
  const s2 = currentActivity;
  const s2Done = station === 2 && chosen && stepIdx >= s2.steps.length;
  const displayState = station === 2
    ? (s2Done ? s2.states[s2.states.length - 1] : s2.states[Math.min(stepIdx, s2.states.length - 1)])
    : null;

  const currentPanItems = station === 2 && s2.panItems
    ? (s2.panItems[Math.min(stepIdx, s2.panItems.length - 1)] || s2.panItems[0])
    : { left: [], right: [] };

  const isGoldenFlipped = station === 2 && actIdx === 2 && stepIdx >= 1;

  const chooseIneq = (idx) => {
    if (chosen) return;
    const c = s2.choices[idx];
    if (c.ok) {
      setWrongChoice(null);
      setChosen(true);
      setFeedback({ success: true, text: `✅ ${c.eq} matches the story! The balance scale is ready.` });
    } else {
      setWrongChoice(idx);
      retry(`🤔 ${c.why}`);
    }
  };

  const doStep = (optIdx) => {
    const st = s2.steps[stepIdx];
    if (optIdx === st.correct) {
      const next = stepIdx + 1;
      setStepIdx(next);
      if (next >= s2.steps.length) {
        success(`🎉 ${st.msg} ${s2.answer}`);
      } else {
        setFeedback({ success: true, text: `⚖️ ${st.msg}` });
      }
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 450);
      retry(st.options.length === 2
        ? '⚠️ Think: did we multiply or divide by a NEGATIVE number? Only then does the sign flip!'
        : `⚠️ "${st.options[optIdx]}" will not get the variable alone. Use the inverse operation!`);
    }
  };

  /* ---------------- Station 3 Detective ---------------- */
  const s3 = currentActivity;
  const pickLine = (idx) => {
    if (detStage !== 'find') return;
    if (idx === s3.errorIdx) {
      setDetStage('fix');
      setFeedback({ success: true, text: `🔍 Mistake spotted on line ${idx + 1}! ${s3.why}` });
    } else {
      setShakeLine(idx);
      setTimeout(() => setShakeLine(null), 450);
      retry(`Line ${idx + 1} is mathematically correct — keep investigating!`);
    }
  };

  const pickFix = (idx) => {
    if (detStage !== 'fix') return;
    if (idx === s3.fixCorrect) {
      setDetStage('verify');
      setFeedback({ success: true, text: `🛠️ Fixed! The corrected steps are shown in green. Now test the evidence to prove it!` });
    } else {
      retry(`That fix does not keep the inequality true. Check the sign and the inverse operation!`);
    }
  };

  const verifyAnswer = () => {
    setDetStage('done');
    success(`✅ Inside value works, boundary holds, outside trap fails — the corrected solution is proven!`);
  };

  const nextActivity = () => {
    if (actIdx < 2) {
      setActIdx(i => i + 1);
    } else if (station < 3) {
      setStation(s => s + 1);
      setActIdx(0);
    } else {
      onNext();
    }
  };

  const prevActivity = () => {
    if (actIdx > 0) {
      setActIdx(i => i - 1);
    } else if (station > 1) {
      setStation(s => s - 1);
      setActIdx(2);
    }
  };

  const stations = [
    { n: 1, icon: '📏', name: 'Station 1: Number Line Builder', sub: 'Real-world rules → sign & ray' },
    { n: 2, icon: '⚖️', name: 'Station 2: Tipping Scale Solver', sub: 'Balance scale — keep or flip?' },
    { n: 3, icon: '🕵️', name: 'Station 3: Sign-Flip Detective', sub: 'Inspect homework & prove it' }
  ];

  const toggleBtn = (active) => `px-3 py-1 rounded-xl font-display font-black text-xs sm:text-sm transition cursor-pointer border-2 ${
    active
      ? 'bg-amber-400 text-slate-950 border-amber-200 shadow-[0_0_14px_rgba(250,204,21,0.7)] scale-105'
      : 'bg-white/10 text-white border-white/15 hover:bg-white/20'
  }`;

  const feedbackBox = feedback && (
    <div
      data-sim-feedback
      className={`p-2.5 rounded-xl text-xs sm:text-sm font-black w-full text-center shadow-lg shrink-0 fade-in-up mt-1.5 ${
        feedback.success
          ? 'bg-emerald-950/90 text-emerald-300 border-2 border-emerald-400/60'
          : 'bg-rose-950/90 text-rose-300 border-2 border-rose-400/60'
      }`}
    >
      {feedback.text}
    </div>
  );

  return (
    <div className="flex-1 min-h-0 flex flex-col items-center justify-start sm:justify-center p-2 sm:p-3 relative overflow-hidden select-none z-10 w-full h-full">
      <BgSymbols />

      {/* Main Simulation Stations Container */}
      <div className="w-full max-w-6xl h-full max-h-[calc(100vh-5.5rem)] bg-[#140a32]/95 border-2 border-purple-400/40 rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-2xl backdrop-blur-md flex flex-col items-center fade-in-up z-20 overflow-hidden">
        {/* Cyan Accent Bar */}
        <div className="w-20 h-1.5 bg-cyan-400 rounded-full mb-1.5 shadow-[0_0_16px_rgba(56,189,248,0.85)] shrink-0" />

        {/* Card Header Title */}
        <div className="flex items-center justify-between w-full mb-1.5 shrink-0 px-1">
          <h2 className="font-display font-black text-xl sm:text-2xl text-white flex items-center gap-2">
            <span className="text-2xl sm:text-3xl">🧪</span>
            <span>Simulation Lab</span>
          </h2>
          <span className="text-[11px] font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-400/40 px-2.5 py-0.5 rounded-full">
            Grade 7 & 8 Real-World Lab
          </span>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 w-full items-stretch flex-1 min-h-0 overflow-hidden">
          {/* Left Column: Station Sidebar Tabs */}
          <div className="md:col-span-4 flex flex-col justify-between gap-2 shrink-0 max-h-[140px] md:max-h-full overflow-y-auto md:overflow-visible">
            <div className="flex flex-col gap-2">
              {stations.map(st => (
                <button
                  key={st.n}
                  onClick={() => {
                    setStation(st.n);
                    setActIdx(0);
                  }}
                  className={`p-2.5 sm:p-3 rounded-2xl border-2 flex items-center justify-between text-left transition-all duration-200 cursor-pointer ${
                    station === st.n
                      ? 'border-cyan-400 bg-[#1e2852] text-white shadow-[0_0_18px_rgba(56,189,248,0.4)] scale-[1.01]'
                      : 'border-purple-500/25 bg-[#110729]/80 text-slate-300 hover:border-cyan-400/50'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-xl font-bold shrink-0 ${
                      station === st.n ? 'bg-cyan-500/30 text-cyan-300' : 'bg-white/10 text-white'
                    }`}>
                      {st.icon}
                    </div>
                    <div>
                      <p className="font-display font-black text-xs sm:text-sm leading-tight">{st.name}</p>
                      <p className="text-[10px] font-extrabold text-slate-300 mt-0.5">{st.sub}</p>
                    </div>
                  </div>
                  <span className="text-sm">🔓</span>
                </button>
              ))}
            </div>

            {/* Bottom Left CTA Button */}
            <button
              onClick={onNext}
              className="btn-gold font-display font-black text-xs sm:text-sm py-2.5 px-4 shadow-[0_0_20px_rgba(250,204,21,0.65)] hover:scale-105 transition w-full flex items-center justify-center gap-1.5 cursor-pointer shrink-0 mt-1"
            >
              <span>Go to Practice Phase!</span>
              <span>→</span>
            </button>
          </div>

          {/* Right Column: Interactive Real-World Simulation Workstation */}
          <div className="md:col-span-8 bg-[#10072b]/95 border-2 border-purple-400/35 rounded-2xl sm:rounded-3xl p-3 sm:p-4 flex flex-col justify-between shadow-inner flex-1 min-h-0 overflow-hidden">
            <div className="flex flex-col flex-1 min-h-0 overflow-hidden gap-1.5">
              {/* Header Row */}
              <div className="flex items-center justify-between border-b border-white/15 pb-1.5 mb-0.5 shrink-0 gap-2">
                <h3 className="font-display font-black text-base sm:text-lg text-cyan-300 flex items-center gap-2">
                  <span className="text-xl sm:text-2xl">{currentActivity.icon}</span>
                  <span className="truncate">{currentActivity.title}</span>
                </h3>
                <span className="font-display font-black text-[11px] text-slate-200 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15 shrink-0">
                  Activity {actIdx + 1} of 3
                </span>
              </div>

              {/* Activity Description */}
              <p className="text-slate-100 text-xs sm:text-sm leading-snug font-extrabold mb-1 shrink-0 text-left">
                {currentActivity.desc}
              </p>

              {/* ========================================================
                  STATION 1: NUMBER LINE BUILDER
                  ======================================================== */}
              {station === 1 && (
                <div className="flex flex-col items-center gap-2.5 bg-[#1a0f3d]/95 border-2 border-cyan-400/40 rounded-2xl p-2.5 sm:p-3.5 shadow-xl flex-1 min-h-0 overflow-y-auto overflow-x-hidden">
                  {/* Real-World Interactive Visual Rig */}
                  {s1.simType === 'coaster' && (
                    <CoasterGateSim
                      height={built ? testVal : s1.target.point}
                      targetHeight={s1.target.point}
                      isTesting={built}
                    />
                  )}
                  {s1.simType === 'speed' && (
                    <SpeedRadarSim
                      speed={built ? testVal : s1.target.point}
                      targetSpeed={s1.target.point}
                    />
                  )}
                  {s1.simType === 'cryo' && (
                    <CryoChamberSim
                      temp={built ? testVal : s1.target.point}
                      targetTemp={s1.target.point}
                    />
                  )}

                  {/* Real-World Rule Tag */}
                  <div className="w-full bg-[#110526] border border-cyan-400/30 rounded-xl px-3 py-1.5 shrink-0 flex items-center justify-between gap-2 flex-wrap">
                    <p className="font-display font-black text-xs sm:text-sm text-white leading-snug">
                      📜 {s1.rule[0]}
                      <span className="text-amber-300 underline decoration-wavy decoration-amber-400/70 underline-offset-4 mx-1">
                        {s1.rule[1]}
                      </span>
                      {s1.rule[2]}
                    </p>
                    <span className="font-display font-black text-base text-cyan-200 bg-cyan-400/10 border-2 border-cyan-400/40 px-2.5 py-0.5 rounded-lg">
                      {s1.v} <span className="text-amber-300">{pickSign || '?'}</span> {pickPoint != null ? fmtN(pickPoint) : '?'}
                    </span>
                  </div>

                  {/* Interactive Number Line */}
                  <div className="w-full max-w-[500px] flex flex-col items-center shrink-0">
                    {!built && (
                      <span className="text-[10px] font-black text-cyan-300 uppercase tracking-wider mb-0.5">
                        ② Tap the number line to place boundary at {fmtN(s1.target.point)}
                      </span>
                    )}
                    <NumberLine
                      min={s1.min}
                      max={s1.max}
                      step={s1.step}
                      point={pickPoint}
                      closed={pickClosed === true}
                      dir={pickPoint != null ? pickDir : null}
                      onPick={built ? null : (v) => { setPickPoint(v); setFeedback(null); }}
                      testValue={built ? testVal : null}
                      testOk={built ? holds(testVal, s1.target.sign, s1.target.point) : null}
                    />
                  </div>

                  {/* Controls before built */}
                  {!built ? (
                    <div className="w-full flex flex-col items-center gap-2 shrink-0">
                      <div className="w-full flex items-center justify-center gap-x-3 gap-y-1.5 flex-wrap">
                        {/* Step 1: Sign */}
                        <div className="flex items-center gap-1">
                          <span className="text-[11px] font-black text-slate-200">① Sign:</span>
                          {SIGN_SET.map(sg => (
                            <button
                              key={sg}
                              onClick={() => { setPickSign(sg); setFeedback(null); }}
                              className={toggleBtn(pickSign === sg)}
                            >
                              {sg}
                            </button>
                          ))}
                        </div>

                        {/* Step 3: Circle */}
                        <div className="flex items-center gap-1">
                          <span className="text-[11px] font-black text-slate-200">③ Circle:</span>
                          <button onClick={() => setPickClosed(false)} className={toggleBtn(pickClosed === false)}>
                            ○ Open
                          </button>
                          <button onClick={() => setPickClosed(true)} className={toggleBtn(pickClosed === true)}>
                            ● Filled
                          </button>
                        </div>

                        {/* Step 4: Arrow */}
                        <div className="flex items-center gap-1">
                          <span className="text-[11px] font-black text-slate-200">④ Arrow:</span>
                          <button onClick={() => setPickDir('left')} className={toggleBtn(pickDir === 'left')}>
                            ← Left
                          </button>
                          <button onClick={() => setPickDir('right')} className={toggleBtn(pickDir === 'right')}>
                            Right →
                          </button>
                        </div>
                      </div>

                      {/* Explanation Guide Pill for Grade 7 */}
                      <div className="w-full bg-[#12072e] border border-white/10 rounded-xl px-2.5 py-1 text-[10px] sm:text-[11px] font-bold text-slate-300 flex items-center justify-around flex-wrap gap-1 text-center">
                        <span>💡 <span className="text-amber-300">Circle Rule:</span> {s1.whyBoundary}</span>
                        <span>💡 <span className="text-cyan-300">Arrow Rule:</span> {s1.whyArrow}</span>
                      </div>

                      <button
                        onClick={checkLine}
                        disabled={!allPicked}
                        className="btn-gold text-xs sm:text-sm font-black px-6 py-2 shadow-lg hover:scale-105 transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
                      >
                        Check My Number Line ✨
                      </button>
                    </div>
                  ) : (
                    /* Interactive Test Slider once built */
                    <div className="w-full bg-cyan-950/90 border-2 border-cyan-400/60 p-2.5 rounded-2xl flex flex-col items-center gap-1.5 fade-in-up shadow-xl shrink-0">
                      <span className="text-[11px] text-cyan-300 font-black uppercase tracking-wider">
                        🧪 Interactive Test Lab — Slide to see real-world consequences!
                      </span>
                      <div className="flex items-center gap-2.5 w-full justify-center">
                        <span className="text-xs font-extrabold text-slate-200">{s1.v} =</span>
                        <input
                          type="range"
                          min={s1.min}
                          max={s1.max}
                          step={s1.step}
                          value={testVal}
                          onChange={e => setTestVal(Number(e.target.value))}
                          className="w-48 sm:w-56 accent-cyan-400 cursor-pointer"
                        />
                        <span className="text-xs font-black text-amber-300 bg-amber-400/10 px-2.5 py-0.5 rounded-lg border border-amber-400/30">
                          {fmtN(testVal)} {s1.testUnit}
                        </span>
                      </div>
                      <div className={`w-full h-8 rounded-full flex items-center justify-center font-display font-black text-xs shadow-md px-3 text-center ${
                        holds(testVal, s1.target.sign, s1.target.point)
                          ? 'bg-gradient-to-r from-emerald-400 to-green-300 text-slate-950'
                          : 'bg-gradient-to-r from-rose-500 to-pink-400 text-white'
                      }`}>
                        {fmtN(testVal)} {s1.target.sign} {fmtN(s1.target.point)}? {
                          holds(testVal, s1.target.sign, s1.target.point)
                            ? `✓ Yes — ${fmtN(testVal)} ${s1.testUnit} follows the real-world rule!`
                            : `✗ No — ${fmtN(testVal)} ${s1.testUnit} violates the limit.`
                        }
                      </div>
                    </div>
                  )}

                  {feedbackBox}
                </div>
              )}

              {/* ========================================================
                  STATION 2: TIPPING SCALE SOLVER
                  ======================================================== */}
              {station === 2 && (
                <div className="flex flex-col items-center gap-2.5 bg-[#1a0f3d]/95 border-2 border-cyan-400/40 rounded-2xl p-2.5 sm:p-3.5 shadow-xl flex-1 min-h-0 overflow-y-auto overflow-x-hidden">
                  {/* Real-World Mechanical Balance Scale */}
                  <div className="w-full flex flex-col items-center shrink-0">
                    <MechanicalScale
                      lhs={chosen ? displayState[0] : '?'}
                      sign={chosen ? displayState[1] : '?'}
                      rhs={chosen ? displayState[2] : '?'}
                      shake={shake}
                      panItemsLeft={chosen ? currentPanItems.left : []}
                      panItemsRight={chosen ? currentPanItems.right : []}
                      stepNote={chosen ? (s2Done ? s2.answer : `Step ${stepIdx + 1}: ${s2.steps[Math.min(stepIdx, s2.steps.length - 1)].ask}`) : "Pick the matching inequality below to load the scale"}
                      isGoldenFlipped={isGoldenFlipped}
                    />
                  </div>

                  {/* Stage controls */}
                  <div className="w-full shrink-0">
                    {!chosen && (
                      <div className="flex flex-col items-center gap-1.5">
                        <span className="text-[11px] font-black text-cyan-300 uppercase tracking-wider">
                          ① Choose the inequality that matches the real-world story:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full">
                          {s2.choices.map((c, i) => (
                            <button
                              key={i}
                              onClick={() => chooseIneq(i)}
                              className={`py-2 px-2.5 rounded-xl font-display font-black text-xs sm:text-sm transition cursor-pointer border-2 ${
                                wrongChoice === i
                                  ? 'bg-rose-600/80 border-rose-300 text-white animate-shake'
                                  : 'bg-[#12072c] border-purple-400/40 text-white hover:border-cyan-400 hover:bg-[#1f0f45]'
                              }`}
                            >
                              {c.eq}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {chosen && !s2Done && (
                      <div className="flex flex-col items-center gap-1.5 fade-in-up">
                        <span className="text-xs sm:text-sm font-black text-slate-100 text-center">
                          ⚖️ {s2.steps[stepIdx].ask}
                        </span>
                        <div className="flex items-center justify-center gap-2 flex-wrap">
                          {s2.steps[stepIdx].options.map((o, i) => (
                            <button
                              key={o}
                              onClick={() => doStep(i)}
                              className="px-3.5 h-9 rounded-xl bg-cyan-500/20 border-2 border-cyan-300 text-cyan-100 font-display font-black text-xs sm:text-sm hover:scale-105 hover:bg-cyan-500/35 transition cursor-pointer shadow-md"
                            >
                              {o}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {s2Done && (
                      <div className="w-full max-w-[500px] mx-auto bg-cyan-950/90 border-2 border-cyan-400/60 p-2 rounded-2xl flex flex-col items-center gap-1 fade-in-up">
                        <span className="text-[10px] text-cyan-300 font-black uppercase tracking-wider">
                          📏 Solution Verified on the Number Line
                        </span>
                        <NumberLine {...s2.line} />
                      </div>
                    )}
                  </div>

                  {feedbackBox}
                </div>
              )}

              {/* ========================================================
                  STATION 3: SIGN-FLIP DETECTIVE
                  ======================================================== */}
              {station === 3 && (
                <div className="flex flex-col items-center gap-2.5 bg-[#1a0f3d]/95 border-2 border-cyan-400/40 rounded-2xl p-2.5 sm:p-3.5 shadow-xl flex-1 min-h-0 overflow-y-auto overflow-x-hidden">
                  {/* Detective Dossier Component */}
                  <DetectiveDossier
                    studentName={s3.studentName}
                    caseTitle={s3.caseTitle}
                    scenarioDesc={s3.scenarioDesc}
                    lines={s3.lines}
                    fixedLines={s3.fixedLines}
                    errorIdx={s3.errorIdx}
                    detStage={detStage}
                    shakeLine={shakeLine}
                    onPickLine={pickLine}
                    tests={s3.tests}
                    isDone={detStage === 'done'}
                  />

                  {/* Fix Options (Stage 2) */}
                  {detStage === 'fix' && (
                    <div className="w-full flex items-center justify-center gap-2 flex-wrap shrink-0 fade-in-up bg-[#0f0624] p-2.5 rounded-xl border border-purple-400/30">
                      <span className="text-xs font-black text-slate-100">Line {s3.errorIdx + 1} should be:</span>
                      {s3.fixOptions.map((f, i) => (
                        <button
                          key={i}
                          onClick={() => pickFix(i)}
                          className="py-1 px-3 rounded-xl bg-[#1b0d3d] border-2 border-purple-400/50 text-white font-mono font-bold text-xs sm:text-sm hover:border-cyan-400 hover:bg-[#2c145e] transition cursor-pointer"
                        >
                          {f}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Number line when complete */}
                  {detStage === 'done' && (
                    <div className="w-full max-w-[500px] flex flex-col items-center shrink-0 fade-in-up">
                      <NumberLine {...s3.line} />
                    </div>
                  )}

                  {/* Verification & Hint controls */}
                  <div className="flex items-center gap-2.5 w-full justify-center shrink-0">
                    {detStage === 'verify' && (
                      <button
                        onClick={verifyAnswer}
                        className="btn-gold text-xs sm:text-sm font-black px-5 py-2 shadow-lg hover:scale-105 transition cursor-pointer fade-in-up"
                      >
                        🧪 Test Inside & Outside Values ✨
                      </button>
                    )}
                    {detStage !== 'done' && (
                      <button
                        onClick={() => setShowHint(h => !h)}
                        className="bg-purple-900/80 hover:bg-purple-800 border border-purple-400/50 text-purple-200 font-display font-black text-xs px-3 py-1.5 rounded-xl transition cursor-pointer"
                      >
                        💡 Hint
                      </button>
                    )}
                  </div>

                  {showHint && detStage !== 'done' && (
                    <div className="p-2 bg-amber-950/90 border border-amber-400/50 text-amber-200 rounded-xl text-xs font-bold w-full text-center fade-in-up shrink-0">
                      💡 {s3.hint}
                    </div>
                  )}

                  {feedbackBox}
                </div>
              )}
            </div>

            {/* Bottom Activity Step Buttons */}
            <div className="flex items-center justify-between border-t border-white/15 pt-2.5 mt-2 shrink-0">
              <button
                onClick={prevActivity}
                disabled={station === 1 && actIdx === 0}
                className="bg-[#1c0d3a]/90 hover:bg-[#2c1859] border-2 border-white/25 text-white font-display font-black text-xs sm:text-sm px-4 py-1.5 rounded-full cursor-pointer transition disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
              >
                ← Previous Activity
              </button>

              <button
                onClick={nextActivity}
                className="btn-gold text-xs sm:text-sm font-black px-6 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg hover:scale-105 transition cursor-pointer"
              >
                <span>{station === 3 && actIdx === 2 ? 'Go to Practice Phase' : 'Next Activity'}</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
