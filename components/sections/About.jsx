import Image from 'next/image';
import { images } from '@/lib/images';
import { pillars } from '@/lib/site';
import Reveal from '../Reveal';
import { SectionHeading } from '../ui';

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container about-grid">
        <Reveal className="about-copy">
          <SectionHeading
            id="about-title"
            eyebrow="About Svavass"
            title={
              <>
                Unhurried days, <em>in the company</em> of nature.
              </>
            }
          />
          <p className="body-lg">
            Svavass is an estate for wellbeing and senior living by DFPL — a place shaped around the
            things that matter most in this chapter of life: fresh air and green spaces, independence
            and privacy, good company, and the reassurance that help is never far away.
          </p>
          <p>
            Every detail is considered with older residents in mind, from how a doorway is placed to
            where the morning sun falls. The result is a home that feels calm, familiar and entirely
            your own.
          </p>
          <a href="#residences" className="text-link">
            Explore the residences
          </a>
        </Reveal>

        <Reveal className="about-media" delay={120}>
          <figure className="about-img-main">
            <Image
              src={images.gardenFriends}
              alt="Two older women admiring pink peonies in a sunlit garden"
              sizes="(max-width: 900px) 100vw, 45vw"
              placeholder="blur"
            />
          </figure>
          <figure className="about-img-inset">
            <Image
              src={images.courtyard}
              alt="Clipped hedges and benches in a peaceful residential courtyard"
              sizes="(max-width: 900px) 50vw, 22vw"
              placeholder="blur"
            />
          </figure>
          <span className="about-mark" aria-hidden="true" />
        </Reveal>
      </div>

      <div className="container">
        <ol className="pillars">
          {pillars.map((p, i) => (
            <Reveal as="li" key={p.title} className="pillar" delay={i * 100}>
              <span className="pillar-num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
