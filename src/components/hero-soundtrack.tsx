"use client";

import { useEffect, useRef, useState } from "react";

const soundtrackSrc = "/audio/pacific-ambient.wav";

export function HeroSoundtrack() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isAvailable, setIsAvailable] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function checkTrack() {
      try {
        const response = await fetch(soundtrackSrc, { method: "HEAD" });

        if (isMounted) {
          setIsAvailable(response.ok);
        }
      } catch {
        if (isMounted) {
          setIsAvailable(false);
        }
      }
    }

    checkTrack();

    return () => {
      isMounted = false;
    };
  }, []);

  async function togglePlayback() {
    const audio = audioRef.current;

    if (!audio || !isAvailable) {
      return;
    }

    if (audio.paused) {
      audio.volume = 0.35;
      await audio.play();
      setIsPlaying(true);
      return;
    }

    audio.pause();
    setIsPlaying(false);
  }

  return (
    <div className="mt-8 max-w-md rounded-2xl border border-slate-200/80 bg-white/85 p-4 shadow-sm backdrop-blur">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-700">
            Soundtrack
          </p>
          <p className="mt-2 text-sm font-medium text-slate-900">
            Optional ambient audio for the homepage.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            void togglePlayback();
          }}
          disabled={!isAvailable}
          className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        {isAvailable
          ? "The soundtrack is loaded and ready. Playback stays optional for visitors."
          : "Add your audio file to public/audio/pacific-ambient.mp3 and the player will appear ready here."}
      </p>

      <audio
        ref={audioRef}
        className="mt-4 w-full"
        controls={isAvailable}
        preload="none"
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      >
        <source src={soundtrackSrc} type="audio/wav" />
      </audio>
    </div>
  );
}
