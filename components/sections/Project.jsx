import Image from 'next/image';
import { images } from '@/lib/images';
import { projectFacts } from '@/lib/site';
import Icon from '../Icon';
import Reveal from '../Reveal';
import { ButtonLink, Kicker } from '../ui';

export default function Project() {
  return (
    <section id="svavass" className="project" aria-labelledby="project-title">
      <div className="project-media">
        <Image
          src={images.gardenPath}
          alt="A wide garden path between flowering hedges"
          fill
          placeholder="blur"
          sizes="(max-width: 900px) 100vw, 55vw"
        />
        <a href="#amenities" className="project-badge">
          <span className="project-badge-icon" aria-hidden="true">
            <Icon name="people" size={26} />
          </span>
          <span>
            <strong>A community</strong>
            where every day feels special
          </span>
          <span className="project-badge-arrow" aria-hidden="true">
            <Icon name="arrow" size={16} />
          </span>
        </a>
      </div>

      <Reveal className="project-copy">
        <Kicker>The project</Kicker>
        <h2 id="project-title">
          Svavass Senior Living
          <span>by DFPL Builders</span>
        </h2>
        <p>
          Svavass is a thoughtfully planned senior living community that blends modern
          infrastructure with compassionate care. It offers a safe, vibrant and independent
          lifestyle for today’s seniors — with everything they need to live life on their own
          terms.
        </p>

        <dl className="facts">
          {projectFacts.map((f) => (
            <div key={f.title}>
              <dt>{f.title}</dt>
              <dd>{f.text}</dd>
            </div>
          ))}
        </dl>

        <ButtonLink href="#residences">Know more about Svavass</ButtonLink>
      </Reveal>
    </section>
  );
}
