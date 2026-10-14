/* =========================================================================
   OFFLINE AUDIO GENERATION — ElevenLabs "Alice" (Xb7hH8MSUJpSbSDYk0k2)
   Reads every narration line from src/audioMap.js and saves an .mp3 for each
   into public/assets/audio/<key>.mp3 using per-style voice settings.

   Usage:
     node scripts/generate_audio.js           # generate only missing files
     node scripts/generate_audio.js --force   # regenerate everything
   ========================================================================= */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'public', 'assets', 'audio');

const VOICE_ID = 'Xb7hH8MSUJpSbSDYk0k2';
const MODEL_ID = 'eleven_multilingual_v2';

const VOICE_SETTINGS = {
  celebration:   { stability: 0.12, similarity_boost: 0.45, style: 0.75, use_speaker_boost: true },
  encouragement: { stability: 0.16, similarity_boost: 0.50, style: 0.65, use_speaker_boost: true },
  question:      { stability: 0.20, similarity_boost: 0.55, style: 0.55, use_speaker_boost: true },
  emphasis:      { stability: 0.16, similarity_boost: 0.50, style: 0.60, use_speaker_boost: true },
  thinking:      { stability: 0.24, similarity_boost: 0.60, style: 0.35, use_speaker_boost: true },
  statement:     { stability: 0.20, similarity_boost: 0.55, style: 0.50, use_speaker_boost: true },
  instruction:   { stability: 0.20, similarity_boost: 0.55, style: 0.50, use_speaker_boost: true }
};

function loadEnv() {
  for (const f of ['.env.local', '.env']) {
    const p = path.join(ROOT, f);
    if (!fs.existsSync(p)) continue;
    for (const line of fs.readFileSync(p, 'utf8').split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
    }
  }
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function fetchWithRetry(url, options, maxRetries = 5) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const res = await fetch(url, options);
      if (res.status === 429) {
        const waitTime = Math.min(attempt * 3000, 15000);
        console.log(`[Rate Limit 429, waiting ${waitTime}ms (attempt ${attempt}/${maxRetries})]...`);
        await sleep(waitTime);
        if (attempt === maxRetries) throw new Error('429 Rate limit exceeded after retries');
        continue;
      }
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`${res.status} ${errorText.slice(0, 160)}`);
      }
      return Buffer.from(await res.arrayBuffer());
    } catch (err) {
      if (attempt === maxRetries) throw err;
      await sleep(attempt * 1000);
    }
  }
  throw new Error('Failed after max retries');
}

async function main() {
  loadEnv();
  const apiKey = process.env.VITE_ELEVENLABS_API_KEY;
  if (!apiKey) {
    console.error('✖ Missing VITE_ELEVENLABS_API_KEY in .env.local');
    process.exit(1);
  }
  const force = process.argv.includes('--force');
  const { AUDIO_MAP } = await import(pathToFileURL(path.join(ROOT, 'src', 'audioMap.js')).href);
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const entries = Object.entries(AUDIO_MAP);
  console.log(`🎙️ Total Audio Lines to Process: ${entries.length}`);
  let made = 0, skipped = 0, failed = 0;

  for (let idx = 0; idx < entries.length; idx++) {
    const [key, { text, style }] = entries[idx];
    const outFile = path.join(OUT_DIR, `${key}.mp3`);
    if (!force && fs.existsSync(outFile) && fs.statSync(outFile).size > 1000) {
      skipped++;
      continue;
    }

    const progressStr = `[${idx + 1}/${entries.length}]`;
    process.stdout.write(`${progressStr} → ${key} ... `);

    try {
      const audioBuffer = await fetchWithRetry(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`, {
        method: 'POST',
        headers: { 'xi-api-key': apiKey, 'Content-Type': 'application/json', Accept: 'audio/mpeg' },
        body: JSON.stringify({
          text,
          model_id: MODEL_ID,
          voice_settings: VOICE_SETTINGS[style] || VOICE_SETTINGS.statement
        })
      });

      fs.writeFileSync(outFile, audioBuffer);
      made++;
      console.log('✅ saved');
    } catch (e) {
      failed++;
      console.log(`❌ FAILED (${e.message})`);
    }

    await sleep(250); // slight rate-limit spacing
  }

  console.log(`\n🎉 Done! Generated: ${made}, Skipped existing: ${skipped}, Failed: ${failed}.`);
  console.log(`Files saved in: public/assets/audio/`);
}

main();
