import Image from 'next/image';
import { images } from '@/lib/images';
import { care } from '@/lib/site';
import Icon from '../Icon';
import Reveal from '../Reveal';
import { PlaceholderNote, SectionHeading } from '../ui';

export default function SafetyCare() {
  return (
    <section id="care" className="section care" aria-labelledby="care-title">
      <div className="container care-grid">
        <Reveal className="care-media">
          <figure className="care-img-main">
            <Image
              src={images.careWalker}
              alt="A caregiver smiling and holding hands with an older woman seated in an armchair"
              sizes="(max-width: 900px) 100vw, 45vw"
              placeholder="blur"
            />
          </figure>
          <blockquote className="care-quote">
            <p>“Independence first, support whenever it’s needed.”</p>
            <footer>The Svavass approach to care</footer>
          </blockquote>
        </Reveal>

        <div className="care-copy">
          <Reveal>
            <SectionHeading
              id="care-title"
              eyebrow="Safety & Care"
              title={
                <>
                  Peace of mind, <em>quietly</em> built in.
                </>
              }
              intro="Thoughtful safety and care that stays in the background — so residents feel free, and families feel reassured."
            />
          </Reveal>

          <ul className="care-list">
            {care.map((c, i) => (
              <Reveal as="li" key={c.title} delay={i * 80}>
                <span className="care-icon">
                  <Icon name={c.icon} size={28} />
                </span>
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <PlaceholderNote>
            Care services are indicative and will be confirmed by the Svavass team.
          </PlaceholderNote>
        </div>
      </div>
    </section>
  );
}
