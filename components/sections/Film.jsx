'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import poster from '@/public/images/video-poster.webp';
import Icon from '../Icon';
import Reveal from '../Reveal';
import { Kicker } from '../ui';

const SRC = '/video/svavass-community.mp4';
const chapters = [
  { t: 0, label: 'In the park' },
  { t: 6, label: 'Conversations' },
  { t: 12, label: 'Old friends' },
  { t: 27, label: 'Evening' },
];

// The video file is only requested once the visitor chooses to play it.
export default function Film() {
  const videoRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [pendingSeek, setPendingSeek] = useState(0);
  const [current, setCurrent] = useState(0);

  const play = (t = 0) => {
    if (!started) {
      setPendingSeek(t);
      setStarted(true);
      return;
    }
    const v = videoRef.current;
    v.currentTime = t;
    v.play();
    v.focus();
  };

  useEffect(() => {
    if (!started) return;
    const v = videoRef.current;
    v.currentTime = pendingSeek;
    v.focus();
    v.play().catch(() => {});
  }, [started, pendingSeek]);

  const active = chapters.reduce((a, c, i) => (current >= c.t ? i : a), 0);

  return (
    <section id="film" className="section film" aria-labelledby="film-title">
      <div className="container">
        <div className="film-head">
          <div>
            <Kicker>Watch the film</Kicker>
            <h2 id="film-title">
              Life at Svavass, <em>as it should feel</em>
            </h2>
          </div>
          <p>
            A relaxed afternoon in the park — old friends, long conversations and the simple
            pleasure of being together.
          </p>
        </div>

        <Reveal className="film-frame">
          {started ? (
            <video
              ref={videoRef}
              className="film-video"
              src={SRC}
              poster={poster.src}
              controls
              playsInline
              preload="auto"
              aria-label="Svavass film: older friends spending relaxed time together in a park. No sound."
              aria-describedby="film-desc"
              onTimeUpdate={(e) => setCurrent(e.currentTarget.currentTime)}
            />
          ) : (
            <button type="button" className="film-poster" onClick={() => play(0)} aria-describedby="film-desc">
              <Image src={poster} alt="" fill sizes="(max-width: 1300px) 100vw, 1280px" placeholder="blur" />
              <span className="film-play" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="26" height="26">
                  <path d="M8 5.5v13l10.5-6.5Z" fill="currentColor" />
                </svg>
              </span>
              <span className="film-play-label">
                Play film <span className="film-meta">33 sec · no sound</span>
              </span>
            </button>
          )}
        </Reveal>

        <div className="film-foot">
          <ol className="film-chapters" aria-label="Jump to a moment in the film">
            {chapters.map((c, i) => (
              <li key={c.label}>
                <button type="button" className={started && active === i ? 'is-active' : ''} onClick={() => play(c.t)}>
                  <span className="chapter-time">0:{String(c.t).padStart(2, '0')}</span>
                  {c.label}
                </button>
              </li>
            ))}
          </ol>
          <details className="film-desc" id="film-desc">
            <summary>Read a description of the film</summary>
            <p>
              Two friends sit together on a park bench; an elderly couple chats in the shade of a
              tree; two men in white kurtas talk by the water; a grandmother shares a tender moment
              with her grandson in the garden; a woman rests on a garden swing; and the friends on
              the bench watch the sun go down. The film has no dialogue or soundtrack.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
