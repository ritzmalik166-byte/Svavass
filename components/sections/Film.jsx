'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import poster from '@/public/images/video-poster.webp';
import Icon from '../Icon';
import Reveal from '../Reveal';
import { SectionHeading } from '../ui';

const SRC = '/video/svavass-community.mp4';
const chapters = [
  { t: 0, label: 'Together' },
  { t: 12, label: 'Outdoors' },
  { t: 19, label: 'Stillness' },
  { t: 26, label: 'At home' },
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
          <Reveal>
            <SectionHeading
              id="film-title"
              eyebrow="The Svavass Film"
              title={
                <>
                  A gentler rhythm, <em>in motion.</em>
                </>
              }
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="lead">
              Shared afternoons, open green spaces, quiet moments and the comfort of home — a short
              film on the life we are creating.
            </p>
          </Reveal>
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
              aria-label="Svavass film: older couples enjoying parks, open fields, a seaside view and a calm home interior. No sound."
              aria-describedby="film-desc"
              onTimeUpdate={(e) => setCurrent(e.currentTarget.currentTime)}
            />
          ) : (
            <button type="button" className="film-poster" onClick={() => play(0)} aria-describedby="film-desc">
              <Image src={poster} alt="" fill sizes="(max-width: 1300px) 100vw, 1280px" placeholder="blur" />
              <span className="film-play" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="30" height="30">
                  <path d="M8 5.5v13l10.5-6.5Z" fill="currentColor" />
                </svg>
              </span>
              <span className="film-play-label">
                Play film <span className="film-meta">34 sec · no sound</span>
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
              An older couple laughs together under the trees; a woman offers her husband a bunch of
              yellow flowers on a park bench; a man walks a path through bright green fields; another
              sits on a bench gazing at the sea; and a woman rests in an armchair beside a sunlit
              window at home. The film has no dialogue or soundtrack.
            </p>
          </details>
        </div>
        <p className="placeholder-note tone-light">Footage is representative of the intended lifestyle.</p>
      </div>
    </section>
  );
}
