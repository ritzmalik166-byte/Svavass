import Image from 'next/image';
import { images } from '@/lib/images';
import { amenityList, living } from '@/lib/site';
import Icon from '../Icon';
import Reveal from '../Reveal';
import { TextLink } from '../ui';

export default function Living() {
  return (
    <section id="amenities" className="section living" aria-labelledby="living-title">
      <div className="container">
        <div className="section-head">
          <h2 id="living-title">
            Live a life of <em>comfort, care &amp; community</em>
          </h2>
          <TextLink href="#amenity-list">Explore all amenities</TextLink>
        </div>

        <ul className="living-grid">
          {living.map((item, i) => (
            <Reveal as="li" key={item.title} className="living-card" delay={i * 80}>
              <div className="living-img">
                <Image src={images[item.img]} alt={item.alt} fill placeholder="blur" sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw" />
              </div>
              <div className="living-body">
                <span className="living-icon" aria-hidden="true">
                  <Icon name={item.icon} size={26} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <div className="amenity-strip" id="amenity-list">
          <p className="amenity-strip-title">Also on site</p>
          <ul>
            {amenityList.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
