"use client";

import { useRef, useState } from "react";

const soundtrackSrc = "/audio/pacific-ambient-mobile.wav";

export function HeroSoundtrack() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackError, setPlaybackError] = useState<string | null>(null);

  async function togglePlayback() {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    setPlaybackError(null);

    if (audio.paused) {
      audio.volume = 0.35;
      audio.load();

      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
        setPlaybackError(
          "If Safari blocks the button, use the audio control below to start the soundtrack.",
        );
      }

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
            Pacific ambience for the journey.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            void togglePlayback();
          }}
          className="btn-primary rounded-full px-5 py-2 text-sm font-semibold text-white"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        Tap into a soft Pacific ambience while you explore the stories and
        language of the vanua.
      </p>

      {playbackError ? (
        <p className="mt-3 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-sm leading-6 text-amber-900">
          {playbackError}
        </p>
      ) : null}

      <audio
        ref={audioRef}
        className="mt-4 w-full"
        controls
        preload="metadata"
        onError={() => {
          setIsPlaying(false);
          setPlaybackError("The soundtrack could not load in this browser.");
        }}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      >
        <source src={soundtrackSrc} type="audio/wav" />
      </audio>
    </div>
  );
}
