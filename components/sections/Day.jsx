import Image from 'next/image';
import { images } from '@/lib/images';
import { day } from '@/lib/site';
import Reveal from '../Reveal';
import { Kicker } from '../ui';

export default function Day() {
  return (
    <section className="section day" aria-labelledby="day-title">
      <div className="container day-grid">
        <div className="day-intro">
          <Kicker tone="dark">A day at Svavass</Kicker>
          <h2 id="day-title">
            Nothing is compulsory.
            <br />
            <em>Everything is close by.</em>
          </h2>
          <p>
            There is no timetable to follow here. But this is roughly how an ordinary Tuesday tends
            to go — and you are welcome to skip any part of it.
          </p>
          <figure className="day-photo">
            <Image src={images.hands} alt="Close-up of an older couple holding hands, her wrist in a gold bangle" placeholder="blur" sizes="(max-width: 900px) 60vw, 26vw" />
          </figure>
        </div>

        <ol className="day-list">
          {day.map((d, i) => (
            <Reveal as="li" key={d.time} delay={i * 60}>
              <time>{d.time}</time>
              <div>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
