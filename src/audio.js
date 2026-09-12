const SETTINGS_KEY = 'skychord.audio.v1';
const PROGRESSIONS = [[196, 246.94, 293.66, 369.99], [220, 261.63, 329.63, 392], [174.61, 220, 261.63, 349.23], [164.81, 207.65, 246.94, 329.63]];

export class SkyAudio {
  constructor() {
    this.context = null; this.master = null; this.region = 0; this.mode = 'title'; this.muted = false; this.musicNext = 0; this.musicStep = 0; this.noise = null;
    try { this.muted = !!JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}').muted; } catch (_) {}
  }
  unlock() {
    if (!this.context) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return false;
      try {
        this.context = new Ctx(); this.master = this.context.createGain(); this.master.gain.value = this.muted ? 0 : .12; this.master.connect(this.context.destination);
        this.noise = this.context.createBuffer(1, this.context.sampleRate * .35, this.context.sampleRate); const data = this.noise.getChannelData(0); for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
        this.musicNext = this.context.currentTime + .03; this.scheduleMusic(.55);
      } catch (_) { this.context = null; return false; }
    }
    try { const result = this.context.resume(); if (result?.catch) result.catch(() => {}); } catch (_) {}
    return true;
  }
  setMode(mode, region = 0) {
    const changed = mode !== this.mode || region !== this.region; this.mode = mode; this.region = region;
    if (!this.context || !this.master) return;
    if (changed) { this.musicStep = 0; this.musicNext = this.context.currentTime + .04; }
    const target = this.muted || mode === 'paused' ? 0 : mode === 'battle' ? .16 : mode === 'ending' ? .18 : .12;
    try { this.master.gain.setTargetAtTime(target, this.context.currentTime, .12); } catch (_) {}
  }
  setMuted(muted) {
    this.muted = !!muted; try { localStorage.setItem(SETTINGS_KEY, JSON.stringify({ muted: this.muted })); } catch (_) {}
    if (this.master && this.context) {
      try {
        const target = this.muted || this.mode === 'paused' ? 0 : this.mode === 'battle' ? .16 : this.mode === 'ending' ? .18 : .12;
        this.master.gain.setTargetAtTime(target, this.context.currentTime, .04);
        this.musicNext = this.context.currentTime + .03;
      } catch (_) {}
    }
  }
  voice(frequency, start, duration, type = 'sine', volume = .04, filterHz = 2200) {
    if (!this.context || !this.master || this.muted) return;
    try {
      const oscillator = this.context.createOscillator(), gain = this.context.createGain(), filter = this.context.createBiquadFilter(); filter.type = 'lowpass'; filter.frequency.setValueAtTime(filterHz, start);
      oscillator.type = type; oscillator.frequency.setValueAtTime(frequency, start); gain.gain.setValueAtTime(.0001, start); gain.gain.exponentialRampToValueAtTime(volume, start + .015); gain.gain.exponentialRampToValueAtTime(.0001, start + duration);
      oscillator.connect(filter).connect(gain).connect(this.master); oscillator.start(start); oscillator.stop(start + duration + .04);
    } catch (_) {}
  }
  pluck(frequency, start, volume = .045) { this.voice(frequency, start, .34, 'triangle', volume, 3200); this.voice(frequency * 2.01, start, .18, 'sine', volume * .25, 5000); }
  bass(frequency, start) { this.voice(frequency / 2, start, .55, 'triangle', .052, 900); }
  drum(start, frequency = 100, volume = .035) {
    if (!this.context || !this.master || !this.noise || this.muted) return;
    try { const source = this.context.createBufferSource(), gain = this.context.createGain(), filter = this.context.createBiquadFilter(); source.buffer = this.noise; filter.type = 'bandpass'; filter.frequency.value = frequency; gain.gain.setValueAtTime(volume, start); gain.gain.exponentialRampToValueAtTime(.0001, start + .1); source.connect(filter).connect(gain).connect(this.master); source.start(start); source.stop(start + .12); } catch (_) {}
  }
  scheduleMusic(lookAhead = .8) {
    if (!this.context || !this.master || this.muted || this.mode === 'paused') return;
    const stepDuration = this.mode === 'battle' ? .24 : .34, progression = PROGRESSIONS[this.region % PROGRESSIONS.length], until = this.context.currentTime + lookAhead;
    while (this.musicNext < until) {
      const step = this.musicStep++ % 32, chord = progression[Math.floor(step / 8) % progression.length], start = this.musicNext;
      if (step % 8 === 0) { this.bass(chord, start); this.voice(chord * 1.5, start, 1.15, 'sine', .018, 1400); }
      if (step % 2 === 0) { const melodic = [1, 1.25, 1.5, 2][(step / 2 + this.region) % 4]; this.pluck(chord * melodic, start, this.mode === 'battle' ? .035 : .027); }
      if (this.mode === 'battle' && step % 2 === 0) this.drum(start, step % 8 === 0 ? 86 : 150, step % 8 === 0 ? .045 : .024);
      this.musicNext += stepDuration;
    }
  }
  tone(frequency, duration = .16, type = 'sine', volume = .07) { if (this.context) this.voice(frequency, this.context.currentTime + .01, duration, type, volume); }
  event(type) {
    const notes = { hit: 220, heal: 440, shield: 330, chord: 523.25, encore: 659.25, victory: 783.99, defeat: 146.83, enemy: 164.81, round: 196 };
    if (type === 'chord' || type === 'encore') { this.tone(notes[type], type === 'encore' ? .5 : .28, 'triangle', .1); this.tone(notes[type] * 1.25, type === 'encore' ? .6 : .35, 'sine', .055); }
    else if (notes[type]) this.tone(notes[type], type === 'hit' ? .1 : .2, type === 'enemy' ? 'sawtooth' : 'sine', .06);
  }
  update() { if (!this.context || this.muted || this.mode === 'paused') return; this.scheduleMusic(.8); }
}
