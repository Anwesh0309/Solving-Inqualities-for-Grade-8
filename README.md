# Inequality Quest · Grade 8 Maths — Solving Inequalities

Same architecture, UI/UX, layout, colours and audio pipeline as the Circumference module —
new content for **Solving Linear Inequalities**.

## Run
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build in dist/
```

## Voice / Audio (ElevenLabs "Alice" · Xb7hH8MSUJpSbSDYk0k2 · eleven_multilingual_v2)
The API key is in `.env.local` (`VITE_ELEVENLABS_API_KEY`).
Playback order (`src/audio.js`): pre-generated mp3 → live ElevenLabs request → browser speech fallback.

```bash
npm run generate:audio                   # bake missing narration mp3s into public/assets/audio/
node scripts/generate_audio.js --force   # regenerate everything
npm run clean:audio                      # delete orphaned mp3s
```
All narration text lives in `src/audioMap.js` (paragraphs & questions only — never titles).

## Content map
| Phase | Content |
|---|---|
| Wonder | "At least 120 cm" roller-coaster rule — one problem, endless answers |
| Story (8 slides) | Equations vs inequalities · the 4 signs · number lines (open/filled) · solving like equations · the golden FLIP rule · two-step + checking · budget limits |
| Station 1 · Number Line Builder | Pick the sign, tap the boundary, choose open/filled circle & arrow, then test values with a slider |
| Station 2 · Tipping Scale Solver | Pick the inequality for the story, solve step-by-step on a tilting scale, decide KEEP or FLIP, see the answer on a number line |
| Station 3 · Sign-Flip Detective | Find the wrong line, choose the fix, then test an inside and an outside value |
| Practice | 10 worlds, procedurally generated: keywords, number lines, one/two-step, flip rule, test-a-value, budgets (round down), minimum targets (round up), counting whole-number solutions |
| Reflect | Explain to Robo when to flip the sign |
