'use client';

import { useState } from 'react';
import { testimonials } from '@/lib/site';
import Icon from '../Icon';
import Reveal from '../Reveal';
import { SectionHeading } from '../ui';

// No auto-rotation: older readers control the pace entirely.
export default function Testimonials() {
  const [i, setI] = useState(0);
  const total = testimonials.length;
  const t = testimonials[i];
  const go = (dir) => setI((n) => (n + dir + total) % total);

  return (
    <section className="section testimonials tone-sage" aria-labelledby="testimonials-title">
      <div className="container testimonials-inner">
        <Reveal className="testimonials-intro">
          <SectionHeading
            id="testimonials-title"
            eyebrow="In their words"
            title={
              <>
                Voices from <em>the Svavass family.</em>
              </>
            }
          />
          <div className="testimonial-controls">
            <button type="button" className="round-btn" onClick={() => go(-1)} aria-label="Previous testimonial">
              <Icon name="arrowLeft" />
            </button>
            <p className="testimonial-count">
              <span>{String(i + 1).padStart(2, '0')}</span> / {String(total).padStart(2, '0')}
            </p>
            <button type="button" className="round-btn" onClick={() => go(1)} aria-label="Next testimonial">
              <Icon name="arrow" />
            </button>
          </div>
        </Reveal>

        <Reveal className="testimonial-stage" delay={100}>
          <figure className="testimonial" aria-live="polite" key={i}>
            <span className="testimonial-mark" aria-hidden="true">
              “
            </span>
            <blockquote>
              <p>{t.quote}</p>
            </blockquote>
            <figcaption>
              <span className="testimonial-avatar" aria-hidden="true">
                {t.name.charAt(0)}
              </span>
              <span>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </span>
            </figcaption>
          </figure>
          <div className="testimonial-dots" aria-hidden="true">
            {testimonials.map((_, n) => (
              <span key={n} className={n === i ? 'is-active' : ''} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
