'use client';

import Image from 'next/image';
import { useState } from 'react';
import { images } from '@/lib/images';
import { residenceDesign, residences } from '@/lib/site';
import Icon from '../Icon';
import { Kicker } from '../ui';

export default function Residences() {
  const [current, setCurrent] = useState(0);
  const r = residences[current];

  // Arrow keys move between tabs, as the WAI-ARIA tabs pattern expects.
  const onKeyDown = (e) => {
    const dir = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (!dir) return;
    const next = (current + dir + residences.length) % residences.length;
    setCurrent(next);
    document.getElementById(`tab-${residences[next].id}`)?.focus();
  };

  return (
    <section id="residences" className="section residences" aria-labelledby="residences-title">
      <div className="container">
        <div className="section-head">
          <div>
            <Kicker>The residences</Kicker>
            <h2 id="residences-title">
              Homes that <em>think ahead</em>
            </h2>
          </div>
          <p className="section-head-note">
            Every home is designed for the years to come, not just the day you move in.
          </p>
        </div>

        <div className="res-tabs" role="tablist" aria-label="Residence types" onKeyDown={onKeyDown}>
          {residences.map((item, i) => (
            <button
              key={item.id}
              id={`tab-${item.id}`}
              type="button"
              role="tab"
              aria-selected={i === current}
              aria-controls="res-panel"
              tabIndex={i === current ? 0 : -1}
              onClick={() => setCurrent(i)}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="res-panel" id="res-panel" role="tabpanel" aria-labelledby={`tab-${r.id}`}>
          <div className="res-img">
            <Image key={r.id} src={images[r.img]} alt={r.alt} fill placeholder="blur" sizes="(max-width: 900px) 100vw, 55vw" />
          </div>
          <div className="res-info">
            <h3>{r.name}</h3>
            <p>{r.summary}</p>
            <dl className="res-details">
              {r.details.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <p className="res-design-title">In every home</p>
            <ul className="res-design">
              {residenceDesign.map((d) => (
                <li key={d}>
                  <Icon name="check" size={18} />
                  {d}
                </li>
              ))}
            </ul>
            <a href="#enquire" className="text-link">
              Request floor plans
              <Icon name="arrow" size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
