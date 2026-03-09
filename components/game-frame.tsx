"use client";

import { useMemo, useRef, useState } from "react";

type GameFrameProps = {
  src: string;
  title: string;
};

export function GameFrame({ src, title }: GameFrameProps) {
  const shellRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [frameKey, setFrameKey] = useState(0);

  const openInNewTab = useMemo(() => src, [src]);

  const enterFullscreen = async () => {
    if (!shellRef.current) {
      return;
    }

    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }

    await shellRef.current.requestFullscreen();
  };

  const refreshFrame = () => {
    setIsLoaded(false);
    setFrameKey((current) => current + 1);
  };

  return (
    <div className="frame-shell" ref={shellRef}>
      <div className="frame-toolbar">
        <div>
          <p className="frame-eyebrow">Instant play</p>
          <h2>{title}</h2>
        </div>
        <div className="frame-actions">
          <button type="button" onClick={enterFullscreen}>
            Fullscreen
          </button>
          <button type="button" onClick={refreshFrame}>
            Refresh
          </button>
          <a href={openInNewTab} target="_blank" rel="noreferrer">
            Open source tab
          </a>
        </div>
      </div>

      <div className="frame-stage">
        {!isLoaded && (
          <div className="frame-loading" aria-hidden="true">
            <span />
            <p>Loading the puzzle room...</p>
          </div>
        )}
        <iframe
          key={frameKey}
          src={src}
          title={title}
          loading="eager"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
}
