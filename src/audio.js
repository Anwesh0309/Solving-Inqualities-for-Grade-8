/* =========================================================================
   AUDIO ENGINE (ElevenLabs "Alice" pipeline architecture)
   Voice: Alice (Clear, Engaging Educator) — Voice ID: Xb7hH8MSUJpSbSDYk0k2
   Model: eleven_multilingual_v2

   Playback order for every segment:
     1. Pre-generated static mp3 (seg.file, from scripts/generate_audio.js)
     2. Dynamic ElevenLabs request (VITE_ELEVENLABS_API_KEY in .env.local)
     3. Browser speechSynthesis fallback (so narration never goes silent)
   The next segment is preloaded while the current one plays.
   ========================================================================= */
export const VOICE_ID = "Xb7hH8MSUJpSbSDYk0k2";
export const MODEL_ID = "eleven_multilingual_v2";
const API_KEY = (import.meta.env && import.meta.env.VITE_ELEVENLABS_API_KEY) || "";

export const STYLE_SETTINGS = {
  celebration: {
    stability: 0.12,
    similarity_boost: 0.45,
    style: 0.75,
    rate: 1.06,
    pitch: 1.2
  },
  encouragement: {
    stability: 0.16,
    similarity_boost: 0.50,
    style: 0.65,
    rate: 1.0,
    pitch: 1.1
  },
  question: {
    stability: 0.20,
    similarity_boost: 0.55,
    style: 0.55,
    rate: 0.98,
    pitch: 1.08
  },
  emphasis: {
    stability: 0.16,
    similarity_boost: 0.50,
    style: 0.60,
    rate: 0.95,
    pitch: 1.05
  },
  thinking: {
    stability: 0.24,
    similarity_boost: 0.60,
    style: 0.35,
    rate: 0.90,
    pitch: 0.95
  },
  statement: {
    stability: 0.20,
    similarity_boost: 0.55,
    style: 0.50,
    rate: 1.0,
    pitch: 1.0
  }
};
STYLE_SETTINGS.instruction = STYLE_SETTINGS.statement;

export let audioMuted = false;
let ttsVoice = null;
let currentAudioElement = null;

function pickVoice() {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;
  return (
    voices.find(v => /female|alice|zira|samantha|victoria|google us english/i.test(v.name)) ||
    voices.find(v => v.lang && v.lang.startsWith('en')) ||
    voices[0]
  );
}

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    ttsVoice = pickVoice();
  };
  ttsVoice = pickVoice();
}

export function setMuted(m) {
  audioMuted = m;
  if (m) stopNarration();
}

/* ---------------- URL resolution: static file → ElevenLabs → null ---------------- */
const urlCache = new Map(); // text -> Promise<string|null>

async function staticFileUrl(file) {
  if (!file) return null;
  try {
    const res = await fetch(file, { method: 'GET' });
    const type = res.headers.get('content-type') || '';
    if (res.ok && /audio|mpeg|octet-stream/i.test(type)) {
      const blob = await res.blob();
      return URL.createObjectURL(blob);
    }
  } catch (e) { /* fall through */ }
  return null;
}

async function elevenLabsUrl(text, style) {
  if (!API_KEY) return null;
  const cfg = STYLE_SETTINGS[style] || STYLE_SETTINGS.statement;
  try {
    const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`, {
      method: 'POST',
      headers: {
        'xi-api-key': API_KEY,
        'Content-Type': 'application/json',
        Accept: 'audio/mpeg'
      },
      body: JSON.stringify({
        text,
        model_id: MODEL_ID,
        voice_settings: {
          stability: cfg.stability,
          similarity_boost: cfg.similarity_boost,
          style: cfg.style,
          use_speaker_boost: true
        }
      })
    });
    if (!res.ok) return null;
    const blob = await res.blob();
    return URL.createObjectURL(blob);
  } catch (e) {
    return null;
  }
}

export function getAudioUrl(seg) {
  if (!seg || !seg.text) return Promise.resolve(null);
  if (!urlCache.has(seg.text)) {
    const p = (async () => (await staticFileUrl(seg.file)) || (await elevenLabsUrl(seg.text, seg.style)))();
    urlCache.set(seg.text, p);
    // Don't cache failures forever — allow a retry next time
    p.then(url => { if (!url) urlCache.delete(seg.text); });
  }
  return urlCache.get(seg.text);
}

export function stopNarration() {
  currentQueue++;
  if (currentAudioElement) {
    const el = currentAudioElement;
    currentAudioElement = null;
    try {
      el.onended = null;
      el.onerror = null;
      el.onpause = null;
      el.pause();
      el.currentTime = 0;
      el.src = "";
    } catch (e) {}
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch (e) {}
  }
}

export function speakSegment(seg, queueId) {
  return new Promise(async (resolve) => {
    if (audioMuted || !seg || !seg.text) return resolve();

    const url = await getAudioUrl(seg);
    if (queueId != null && queueId !== currentQueue) return resolve();
    if (audioMuted) return resolve();

    // Cancel any previous speech synthesis before audio element plays
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try { window.speechSynthesis.cancel(); } catch (e) {}
    }

    if (url) {
      try {
        if (currentAudioElement) {
          const prev = currentAudioElement;
          currentAudioElement = null;
          try {
            prev.onended = null;
            prev.onerror = null;
            prev.onpause = null;
            prev.pause();
            prev.src = "";
          } catch (e) {}
        }
        if (queueId != null && queueId !== currentQueue) return resolve();

        const audio = new Audio(url);
        currentAudioElement = audio;

        let finished = false;
        const done = () => {
          if (!finished) {
            finished = true;
            if (currentAudioElement === audio) currentAudioElement = null;
            resolve();
          }
        };

        audio.onended = done;
        audio.onpause = () => { if (currentAudioElement !== audio) done(); };
        audio.onerror = () => {
          if (queueId != null && queueId !== currentQueue) return done();
          fallbackSpeech(seg, queueId).then(done);
        };
        audio.play().catch(() => {
          if (queueId != null && queueId !== currentQueue) return done();
          fallbackSpeech(seg, queueId).then(done);
        });
        return;
      } catch (e) {
        // Fallback to speech synthesis
      }
    }

    fallbackSpeech(seg, queueId).then(resolve);
  });
}

function fallbackSpeech(seg, queueId) {
  return new Promise((resolve) => {
    if (audioMuted || typeof window === 'undefined' || !('speechSynthesis' in window) || !seg.text) {
      return resolve();
    }
    if (queueId != null && queueId !== currentQueue) return resolve();

    if (currentAudioElement) {
      const el = currentAudioElement;
      currentAudioElement = null;
      try {
        el.pause();
        el.src = "";
      } catch (e) {}
    }

    try {
      window.speechSynthesis.cancel();
      const cfg = STYLE_SETTINGS[seg.style] || STYLE_SETTINGS.statement;
      const utter = new SpeechSynthesisUtterance(seg.text);
      if (ttsVoice) utter.voice = ttsVoice;
      utter.rate = cfg.rate;
      utter.pitch = cfg.pitch;
      utter.volume = 1;
      utter.onend = () => resolve();
      utter.onerror = () => resolve();
      window.speechSynthesis.speak(utter);
    } catch (e) {
      resolve();
    }
  });
}

let currentQueue = 0;

export async function narrate(segments, autoplay = true) {
  if (!autoplay || audioMuted) return;
  stopNarration();
  const myQueue = ++currentQueue;
  const segList = Array.isArray(segments) ? segments : [segments];
  for (let i = 0; i < segList.length; i++) {
    if (myQueue !== currentQueue || audioMuted) return;
    if (segList[i + 1]) getAudioUrl(segList[i + 1]); // eager preload of next segment
    await speakSegment(segList[i], myQueue);
  }
}


/* Warm the cache for a list of AUDIO_MAP entries (called once on first interaction) */
export function preloadAudio(entries) {
  entries.forEach(e => getAudioUrl(e));
}

export const say = text => ({ text, style: 'statement' });
export const ask = text => ({ text, style: 'question' });
export const cheer = text => ({ text, style: 'celebration' });
export const emphasize = text => ({ text, style: 'emphasis' });
export const think = text => ({ text, style: 'thinking' });
export const celebrate = text => ({ text, style: 'celebration' });
export const instruct = text => ({ text, style: 'encouragement' });
