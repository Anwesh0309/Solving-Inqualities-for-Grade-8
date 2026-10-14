import React, { useState, useEffect, useRef } from 'react';
import { BgSymbols } from '../components/TopNav.jsx';
import { AUDIO_MAP } from '../audioMap.js';
import { narrate, stopNarration } from '../audio.js';

const STORY_SLIDES = [
  {
    id: 1,
    title: "When One Answer Isn't Enough",
    audioKey: "story_1",
    image: "/assets/images/slide1.png",
    body: "An equation like x = 5 has just one answer. But real life is full of limits — speed limits, age limits, height rules and budgets — where MANY numbers work. These are called inequalities!",
    quote: "x = 5 is one point. x > 5 is a whole ray of answers!",
    bubble: "Let's learn to solve inequalities and draw every answer!"
  },
  {
    id: 2,
    title: "The Four Inequality Signs",
    audioKey: "story_2",
    image: "/assets/images/slide2.png",
    body: "We use four signs: < means less than, > means greater than, ≤ means less than or equal to (at most), and ≥ means greater than or equal to (at least).",
    quote: "At least → ≥     At most → ≤",
    bubble: "The wide open side of the sign always faces the bigger number!"
  },
  {
    id: 3,
    title: "Showing Answers on a Number Line",
    audioKey: "story_3",
    image: "/assets/images/slide3.png",
    body: "We draw the answers on a number line. An open circle means the boundary is NOT included (< or >). A filled dot means it IS included (≤ or ≥). The arrow points to all the other answers.",
    quote: "x > 3 → open circle at 3, arrow to the right",
    bubble: "Filled dot = the number is part of the answer!"
  },
  {
    id: 4,
    title: "Solve It Like an Equation",
    audioKey: "story_4",
    image: "/assets/images/slide4.png",
    body: "Solve inequalities using the same steps as equations. For x + 7 ≤ 15, subtract 7 from both sides to get x ≤ 8. For 3x > 12, divide both sides by 3 to get x > 4. The sign stays the same!",
    quote: "Add, subtract, or × ÷ by a positive → keep the sign",
    bubble: "Do the same thing to BOTH sides, just like a balance!"
  },
  {
    id: 5,
    title: "The Golden Flip Rule",
    audioKey: "story_5",
    image: "/assets/images/slide5.png",
    body: "When you multiply or divide both sides by a NEGATIVE number, you must flip the inequality sign. For −2x < 10, divide by −2 and flip: x > −5. Why? 2 < 5, but −2 > −5!",
    quote: "× or ÷ by a negative → FLIP the sign!",
    bubble: "Negatives turn the number line around, so the sign turns too!"
  },
  {
    id: 6,
    title: "Two Steps & Checking",
    audioKey: "story_6",
    image: "/assets/images/slide6.png",
    body: "Solve 4x − 5 ≥ 11: add 5 to get 4x ≥ 16, then divide by 4 to get x ≥ 4. Check with one value inside the answer and one outside: x = 5 gives 15 ≥ 11 ✓, but x = 3 gives 7 ≥ 11 ✗.",
    quote: "Test one value inside and one outside!",
    bubble: "If an inside value fails, look for a missing flip!"
  },
  {
    id: 7,
    title: "Real World: Budget Limits",
    audioKey: "story_7",
    image: "/assets/images/slide7.png",
    body: "Emma has $50 at the fair. Entry costs $14 and each ride costs $4. So 14 + 4r ≤ 50, which gives 4r ≤ 36 and r ≤ 9. Emma can go on at most 9 rides!",
    quote: "Answers must make sense — you can't take half a ride!",
    bubble: "r ≤ 9 means 0, 1, 2 … up to 9 rides."
  },
  {
    id: 8,
    title: "Step Into the Simulation Lab!",
    audioKey: "story_8",
    image: "/assets/images/slide8.png",
    body: "Brilliant work! You've learned the four signs, number lines, solving steps and the golden flip rule. Now step into the lab to build number lines, tip the scales and catch sneaky sign flips!",
    quote: "Ready to test your inequality skills?",
    bubble: "Click below to enter the interactive lab!"
  }
];

export function StoryPhase({ muted, onDone, onSlideChange }) {
  const [slideIdx, setSlideIdx] = useState(0);
  const slide = STORY_SLIDES[slideIdx];

  // Keep the latest callback in a ref so a new inline function from the parent
  // doesn't re-run this effect (which would loop and restart narration).
  const slideChangeRef = useRef(onSlideChange);
  slideChangeRef.current = onSlideChange;

  useEffect(() => {
    if (slideChangeRef.current) {
      slideChangeRef.current(slideIdx + 1, STORY_SLIDES.length);
    }
    const audioData = AUDIO_MAP[slide.audioKey];
    if (audioData) {
      narrate(audioData, !muted);
    }
    return () => stopNarration();
  }, [slideIdx, muted]);

  const goNext = () => {
    stopNarration();
    if (slideIdx < STORY_SLIDES.length - 1) {
      setSlideIdx(i => i + 1);
    } else {
      onDone();
    }
  };

  const goPrev = () => {
    stopNarration();
    if (slideIdx > 0) setSlideIdx(i => i - 1);
  };

  return (
    <div className="flex-1 min-h-0 flex flex-col items-center justify-center p-3 sm:p-5 relative overflow-hidden select-none z-10">
      <BgSymbols />

      {/* Main Story Card with Maximum Grade 4 Visual Legibility & Scaled Image */}
      <div className="w-full max-w-5xl max-h-[92vh] bg-[#160b36]/95 border-2 border-purple-400/40 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center fade-in-up z-20 my-auto overflow-hidden">
        {/* Left Column: Extra Large Image Illustration */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 h-80 sm:h-[420px] md:h-[450px] w-full bg-black/40 flex items-center justify-center shrink-0">
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover rounded-3xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Column: Extra Large Typography & Callout Pills */}
        <div className="flex flex-col items-start text-left justify-center gap-4.5 overflow-y-auto max-h-full py-1">
          {/* Slide Title */}
          <h2 className="font-display font-900 text-3xl sm:text-4xl md:text-5xl text-amber-400 leading-tight drop-shadow-md">
            {slide.title}
          </h2>

          {/* Body Narrative */}
          <p className="text-slate-100 text-xl sm:text-2xl leading-relaxed font-extrabold drop-shadow-sm">
            {slide.body}
          </p>

          {/* Pull-Quote Sparkle Pill */}
          <div className="w-full bg-[#1e0e45] border-2 border-amber-400/60 rounded-2xl px-6 py-3.5 text-center text-amber-300 font-display font-900 text-lg sm:text-xl flex items-center justify-center gap-3 shadow-lg">
            <span className="shrink-0 text-2xl">✨</span>
            <span className="leading-snug">"{slide.quote}"</span>
            <span className="shrink-0 text-2xl">✨</span>
          </div>

          {/* Mascot Speech Bubble Pill */}
          <div className="flex items-center gap-4 w-full mt-1">
            <div className="w-16 h-16 rounded-full bg-amber-400 flex items-center justify-center text-4xl shadow-lg shrink-0">
              🦁
            </div>
            <div className="bg-white text-[#0c031d] rounded-2xl px-7 py-3.5 font-display font-900 text-lg sm:text-xl shadow-xl flex-1 text-left leading-snug">
              {slide.bubble}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Row: Back, Dots, Next */}
      <div className="w-full max-w-4xl flex items-center justify-between mt-3 z-20 shrink-0">
        <button
          onClick={goPrev}
          disabled={slideIdx === 0}
          className="bg-[#1c0d3a]/90 hover:bg-[#2c1859] border-2 border-white/30 text-white font-display font-900 text-xl sm:text-2xl px-10 py-4 rounded-full cursor-pointer transition disabled:opacity-30 disabled:cursor-not-allowed shadow-xl hover:scale-105"
        >
          ← Back
        </button>

        {/* Dots Indicator */}
        <div className="flex items-center gap-3.5">
          {STORY_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                stopNarration();
                setSlideIdx(i);
              }}
              className={`rounded-full transition-all cursor-pointer ${
                i === slideIdx
                  ? 'w-4.5 h-4.5 bg-amber-400 shadow-[0_0_18px_rgba(250,204,21,0.9)]'
                  : 'w-3.5 h-3.5 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          className="btn-gold text-xl sm:text-2xl px-11 py-4 font-900 flex items-center gap-2 shadow-[0_0_35px_rgba(250,204,21,0.85)] hover:scale-105"
        >
          <span>{slideIdx === STORY_SLIDES.length - 1 ? 'Enter Lab 🧪' : 'Next'}</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
}
