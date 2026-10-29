'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { images } from '@/lib/images';
import { residenceDesign, residences } from '@/lib/site';
import Icon from '../Icon';
import Reveal from '../Reveal';
import { ButtonLink, PlaceholderNote, SectionHeading } from '../ui';

const altText = {
  readingNook: 'A bright studio corner with an armchair, floor lamp and timber flooring',
  livingRoom: 'A sunlit living room with soft sofas, plants and large windows',
  livingOpen: 'An open-plan living and kitchen space with a timber feature wall',
};

export default function Residences() {
  const [current, setCurrent] = useState(0);
  const tabRefs = useRef([]);
  const r = residences[current];

  // WAI-ARIA tabs pattern: arrow keys, Home and End move between tabs.
  const onKeyDown = (e) => {
    const last = residences.length - 1;
    const map = { ArrowRight: current === last ? 0 : current + 1, ArrowLeft: current === 0 ? last : current - 1, Home: 0, End: last };
    if (!(e.key in map)) return;
    e.preventDefault();
    setCurrent(map[e.key]);
    tabRefs.current[map[e.key]]?.focus();
  };

  return (
    <section id="residences" className="section residences tone-sand" aria-labelledby="residences-title">
      <div className="container">
        <div className="residences-head">
          <Reveal>
            <SectionHeading
              id="residences-title"
              eyebrow="Residences"
              title={
                <>
                  Homes designed to <em>age beautifully</em> with you.
                </>
              }
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="lead">
              Light, proportion and ease of movement come first — so every residence feels as
              comfortable in twenty years as it does on the first morning.
            </p>
          </Reveal>
        </div>

        <div className="tabs" role="tablist" aria-label="Residence types" onKeyDown={onKeyDown}>
          {residences.map((res, i) => (
            <button
              key={res.id}
              ref={(el) => (tabRefs.current[i] = el)}
              role="tab"
              type="button"
              id={`tab-${res.id}`}
              aria-selected={current === i}
              aria-controls={`panel-${res.id}`}
              tabIndex={current === i ? 0 : -1}
              className="tab"
              onClick={() => setCurrent(i)}
            >
              {res.name}
            </button>
          ))}
        </div>

        <div className="residence-panel" role="tabpanel" id={`panel-${r.id}`} aria-labelledby={`tab-${r.id}`} key={r.id}>
          <div className="residence-img">
            <Image
              src={images[r.img]}
              alt={altText[r.img]}
              sizes="(max-width: 900px) 100vw, 58vw"
              placeholder="blur"
            />
          </div>
          <div className="residence-info">
            <h3>{r.name}</h3>
            <p>{r.summary}</p>
            <dl className="residence-specs">
              {r.details.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <ButtonLink href="#enquire" variant="primary">
              Request floor plans
            </ButtonLink>
          </div>
        </div>

        <Reveal className="design-strip">
          <h3>Designed for ease, at every age</h3>
          <ul>
            {residenceDesign.map((d) => (
              <li key={d}>
                <Icon name="check" size={20} />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <PlaceholderNote>
          Configurations, areas and specifications are indicative and subject to final approved plans.
          Interior images are representative.
        </PlaceholderNote>
      </div>
    </section>
  );
}
