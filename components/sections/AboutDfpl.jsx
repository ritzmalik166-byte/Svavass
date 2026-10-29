import Image from 'next/image';
import { images } from '@/lib/images';
import { developer } from '@/lib/site';
import Reveal from '../Reveal';
import { DfplLogo, Kicker } from '../ui';

export default function AboutDfpl() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container about-grid">
        <Reveal className="about-copy">
          <Kicker>About DFPL</Kicker>
          <h2 id="about-title">
            Homes we would want
            <br />
            <em>our own parents to live in.</em>
          </h2>
          <p className="about-intro">{developer.intro}</p>
          <ol className="about-principles">
            {developer.principles.map((p, i) => (
              <li key={p.title}>
                <span className="about-num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="about-media">
          <figure className="about-photo">
            <Image src={images.familyGarden} alt="Grandparents laughing with their young grandson on a garden bench" placeholder="blur" sizes="(max-width: 900px) 100vw, 45vw" />
          </figure>
          <div className="about-sign">
            <DfplLogo />
            <p>Developer of Svavass Senior Living</p>
          </div>
        </div>
      </div>
    </section>
  );
}
