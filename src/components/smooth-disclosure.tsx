"use client";

import { useEffect, useId, useRef, useState } from "react";

type SmoothDisclosureProps = {
  summary: string;
  children: React.ReactNode;
  className?: string;
};

export function SmoothDisclosure({
  summary,
  children,
  className = "",
}: SmoothDisclosureProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const panelId = useId();

  useEffect(() => {
    const content = contentRef.current;

    if (!content) {
      return;
    }

    const measure = () => {
      setContentHeight(content.scrollHeight);
    };

    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(content);

    window.addEventListener("resize", measure);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition-colors duration-300 ${
        isOpen ? "bg-white" : ""
      } ${className}`}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
          {summary}
        </span>
        <span
          className={`text-xl leading-none text-emerald-700 transition-transform duration-300 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          +
        </span>
      </button>

      <div
        id={panelId}
        className="overflow-hidden transition-[max-height,opacity,margin] duration-500 ease-out motion-reduce:transition-none"
        style={{
          maxHeight: isOpen ? `${contentHeight}px` : "0px",
          opacity: isOpen ? 1 : 0,
          marginTop: isOpen ? "1.25rem" : "0rem",
        }}
      >
        <div ref={contentRef}>{children}</div>
      </div>
    </div>
  );
}
