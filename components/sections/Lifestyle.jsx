import Image from 'next/image';
import { images } from '@/lib/images';
import { dayRhythm, lifestyle } from '@/lib/site';
import Reveal from '../Reveal';
import { SectionHeading } from '../ui';

export default function Lifestyle() {
  return (
    <section id="lifestyle" className="section lifestyle tone-dark pattern" aria-labelledby="lifestyle-title">
      <div className="container">
        <div className="lifestyle-head">
          <Reveal>
            <SectionHeading
              id="lifestyle-title"
              tone="dark"
              eyebrow="Lifestyle & Community"
              title={
                <>
                  A neighbourhood of <em>kindred spirits.</em>
                </>
              }
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="lead tone-dark-text">
              Life at Svavass moves to your rhythm. Join in, step back, or simply sit with a cup of tea
              and watch the garden — there is always something to share, and never any pressure to.
            </p>
          </Reveal>
        </div>

        <ul className="lifestyle-grid">
          {lifestyle.map((item, i) => (
            <Reveal as="li" key={item.title} className={`lifestyle-card card-${i + 1}`} delay={i * 90}>
              <figure>
                <div className="lifestyle-img">
                  <Image
                    src={images[item.img]}
                    alt={item.alt}
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 30vw"
                    placeholder="blur"
                  />
                </div>
                <figcaption>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        <Reveal className="day-rhythm">
          <h3 className="day-title">
            <span className="eyebrow-rule" aria-hidden="true" />
            An illustrative day
          </h3>
          <ol className="day-list">
            {dayRhythm.map((d) => (
              <li key={d.time}>
                <p className="day-time">{d.time}</p>
                <h4>{d.title}</h4>
                <p>{d.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
