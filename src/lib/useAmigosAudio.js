"use client";

import { useCallback, useEffect, useState } from "react";

export const SOUND_STORAGE_KEY = "amigos_sound_muted";
export const AUDIO_SOURCE = "/audio/smooth-lounge-jazz.mp3";
export const DEFAULT_VOLUME = 0.42;

// Shared audio singleton and state subscribers across all components
let audioInstance = null;
let volumeFadeTimer = null;
let isCurrentlyPlaying = false;
const subscribers = new Set();

function notifySubscribers(playing) {
  isCurrentlyPlaying = playing;
  subscribers.forEach((callback) => callback(playing));
}

function getAudio() {
  if (typeof window === "undefined") return null;

  if (!audioInstance) {
    audioInstance = new Audio(AUDIO_SOURCE);
    audioInstance.loop = true;
    audioInstance.preload = "auto";
    audioInstance.volume = 0;

    audioInstance.addEventListener("play", () => notifySubscribers(true));
    audioInstance.addEventListener("pause", () => notifySubscribers(false));
    audioInstance.addEventListener("ended", () => notifySubscribers(false));

    window.__amigosAudioInstance = audioInstance;
  }

  return audioInstance;
}

function fadeVolume(audio, targetVolume, durationMs = 1200, onEnd = null) {
  if (!audio) return;
  if (volumeFadeTimer) clearInterval(volumeFadeTimer);

  const stepMs = 40;
  const steps = Math.max(1, Math.round(durationMs / stepMs));
  const diff = targetVolume - audio.volume;
  const increment = diff / steps;

  let currentStep = 0;
  volumeFadeTimer = setInterval(() => {
    currentStep += 1;
    const nextVolume = audio.volume + increment;

    if (currentStep >= steps || (increment > 0 ? nextVolume >= targetVolume : nextVolume <= targetVolume)) {
      audio.volume = Math.min(1, Math.max(0, targetVolume));
      clearInterval(volumeFadeTimer);
      volumeFadeTimer = null;
      if (onEnd) onEnd();
    } else {
      audio.volume = Math.min(1, Math.max(0, nextVolume));
    }
  }, stepMs);
}

export function playAmigosMusic(fadeIn = true) {
  if (typeof window === "undefined") return Promise.resolve(false);

  let userMuted = false;
  try {
    userMuted = window.sessionStorage.getItem(SOUND_STORAGE_KEY) === "true";
  } catch {
    // fallback
  }

  if (userMuted) return Promise.resolve(false);

  const audio = getAudio();
  if (!audio) return Promise.resolve(false);

  if (!fadeIn) {
    audio.volume = DEFAULT_VOLUME;
  }

  return audio
    .play()
    .then(() => {
      notifySubscribers(true);
      if (fadeIn) {
        fadeVolume(audio, DEFAULT_VOLUME, 1500);
      }
      return true;
    })
    .catch((err) => {
      // Browser autoplay policy blocked unmuted audio: attach one-time user interaction listener
      const onFirstInteraction = () => {
        window.removeEventListener("pointerdown", onFirstInteraction);
        window.removeEventListener("click", onFirstInteraction);
        window.removeEventListener("scroll", onFirstInteraction);
        window.removeEventListener("keydown", onFirstInteraction);

        let stillMuted = false;
        try {
          stillMuted = window.sessionStorage.getItem(SOUND_STORAGE_KEY) === "true";
        } catch {}

        if (!stillMuted) {
          audio
            .play()
            .then(() => {
              notifySubscribers(true);
              fadeVolume(audio, DEFAULT_VOLUME, 1500);
            })
            .catch(() => {});
        }
      };

      window.addEventListener("pointerdown", onFirstInteraction, { once: true });
      window.addEventListener("click", onFirstInteraction, { once: true });
      window.addEventListener("scroll", onFirstInteraction, { once: true, passive: true });
      window.addEventListener("keydown", onFirstInteraction, { once: true });

      return false;
    });
}

export function pauseAmigosMusic(fadeOut = true) {
  if (typeof window === "undefined") return;

  const audio = getAudio();
  if (!audio) return;

  if (fadeOut && audio.volume > 0.05) {
    fadeVolume(audio, 0, 350, () => {
      audio.pause();
      notifySubscribers(false);
    });
  } else {
    audio.pause();
    notifySubscribers(false);
  }
}

export function useAmigosAudio() {
  const [isPlaying, setIsPlaying] = useState(isCurrentlyPlaying);

  useEffect(() => {
    // Subscribe to shared state
    subscribers.add(setIsPlaying);
    setIsPlaying(isCurrentlyPlaying);

    // Global hook for script.js / outside triggers
    window.__amigosPlayMusic = playAmigosMusic;
    window.__amigosPauseMusic = pauseAmigosMusic;

    // Listen for nav entered / loader finished events from home page
    const handleNavEntered = () => {
      playAmigosMusic(true);
    };

    window.addEventListener("amigos:nav-entered", handleNavEntered);

    // If nav entered before this component mounted
    if (typeof window !== "undefined" && window.__amigosNavEntered) {
      playAmigosMusic(true);
    }

    return () => {
      subscribers.delete(setIsPlaying);
      window.removeEventListener("amigos:nav-entered", handleNavEntered);
    };
  }, []);

  const toggleSound = useCallback(() => {
    const audio = getAudio();
    if (!audio) return;

    if (isCurrentlyPlaying) {
      try {
        window.sessionStorage.setItem(SOUND_STORAGE_KEY, "true");
      } catch {}
      pauseAmigosMusic(true);
    } else {
      try {
        window.sessionStorage.removeItem(SOUND_STORAGE_KEY);
      } catch {}
      playAmigosMusic(true);
    }
  }, []);

  return { isPlaying, toggleSound };
}
