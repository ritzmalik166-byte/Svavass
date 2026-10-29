import Image from 'next/image';
import { images } from '@/lib/images';
import Icon from '../Icon';
import { ButtonLink } from '../ui';

export default function Hero() {
  return (
    <section id="top" className="hero pattern" aria-labelledby="hero-title">
      <div className="hero-media">
        <Image
          src={images.hero}
          alt="A laughing older couple holding hands beneath shady trees"
          fill
          preload
          sizes="100vw"
          placeholder="blur"
          className="hero-img"
        />
        <div className="hero-scrim" aria-hidden="true" />
      </div>

      <div className="container hero-content">
        <p className="hero-eyebrow">
          <span className="eyebrow-rule" aria-hidden="true" />
          Svavass by DFPL
        </p>
        <h1 id="hero-title" className="hero-title">
          A life well lived,
          <br />
          <em>gently held.</em>
        </h1>
        <p className="hero-lead">
          An estate for wellbeing and senior living — where nature sets the pace, friendships come
          easily, and care is always close at hand.
        </p>
        <div className="hero-actions">
          <ButtonLink href="#enquire" variant="gold">
            Book a Site Visit
          </ButtonLink>
          <ButtonLink href="#film" variant="ghost-light" icon="play">
            Watch the Film
          </ButtonLink>
        </div>
      </div>

      <a href="#enquire" className="hero-card">
        <span className="hero-card-label">Private visits</span>
        <span className="hero-card-title">Walk the gardens, meet the team</span>
        <span className="hero-card-link">
          Plan your visit <Icon name="arrow" size={18} />
        </span>
      </a>

      <div className="hero-footer">
        <div className="container hero-footer-inner">
          <ul className="hero-pillars" aria-label="What Svavass stands for">
            <li>Nature</li>
            <li>Community</li>
            <li>Wellbeing</li>
            <li>Care</li>
          </ul>
          <a href="#about" className="hero-scroll">
            <span>Scroll to explore</span>
            <span className="hero-scroll-line" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
