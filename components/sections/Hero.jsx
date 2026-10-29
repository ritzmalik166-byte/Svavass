import Image from 'next/image';
import { images } from '@/lib/images';
import Icon from '../Icon';
import { ButtonLink, Logo } from '../ui';

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <Logo width={210} className="hero-logo" />
        <h1 id="hero-title">
          A new chapter
          <br />
          called <em>home</em>
        </h1>
        <p className="hero-lead">
          Thoughtfully designed senior living residences for a healthier, happier and more
          fulfilling life — with neighbours for company, care within reach, and a garden to walk
          in every morning.
        </p>
        <div className="hero-actions">
          <ButtonLink href="#svavass">Explore Svavass</ButtonLink>
          <a href="#film" className="btn btn-outline">
            <span className="btn-play" aria-hidden="true">
              <Icon name="play" size={12} />
            </span>
            <span>Watch video</span>
          </a>
        </div>
      </div>

      <div className="hero-media">
        <Image
          src={images.coupleRose}
          alt="A smiling older couple standing together in a garden, the husband holding a red rose"
          fill
          priority
          placeholder="blur"
          sizes="(max-width: 900px) 100vw, 58vw"
        />
        <p className="hero-script" aria-hidden="true">
          More living,
          <br />
          every day
        </p>
        <a href="#film" className="hero-film">
          <span className="hero-film-btn" aria-hidden="true">
            <Icon name="play" size={20} />
          </span>
          <span>
            <strong>Watch</strong>
            Life at Svavass
          </span>
        </a>
      </div>
    </section>
  );
}
