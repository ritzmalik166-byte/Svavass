'use client';

import Image from 'next/image';
import { useState } from 'react';
import { images } from '@/lib/images';
import { stories } from '@/lib/site';
import Icon from '../Icon';
import { Kicker } from '../ui';

export default function Stories() {
  const [i, setI] = useState(0);
  const s = stories[i];
  const step = (dir) => setI((n) => (n + dir + stories.length) % stories.length);

  return (
    <section className="stories" aria-labelledby="stories-title" aria-roledescription="carousel">
      <div className="stories-photo">
        <Image key={s.img} src={images[s.img]} alt="" fill placeholder="blur" sizes="(max-width: 900px) 100vw, 40vw" />
      </div>

      <div className="stories-body">
        <Kicker>Real stories</Kicker>
        <h2 id="stories-title" className="sr-only">
          What residents and families say
        </h2>
        <figure aria-live="polite" key={i} className="story">
          <blockquote>
            <p>{s.quote}</p>
          </blockquote>
          <figcaption>
            — {s.name}, <span>{s.role} at Svavass</span>
          </figcaption>
        </figure>

        <div className="stories-nav">
          <span className="stories-count">
            {String(i + 1).padStart(2, '0')} / {String(stories.length).padStart(2, '0')}
          </span>
          <button type="button" onClick={() => step(-1)} aria-label="Previous story">
            <Icon name="arrowLeft" size={20} />
          </button>
          <button type="button" onClick={() => step(1)} aria-label="Next story">
            <Icon name="arrow" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
