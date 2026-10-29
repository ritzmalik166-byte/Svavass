import Image from 'next/image';
import { images } from '@/lib/images';
import { amenityFeatures, amenityList } from '@/lib/site';
import Icon from '../Icon';
import Reveal from '../Reveal';
import { PlaceholderNote, SectionHeading } from '../ui';

export default function Amenities() {
  return (
    <section id="amenities" className="section amenities" aria-labelledby="amenities-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="amenities-title"
            align="center"
            eyebrow="Amenities"
            title={
              <>
                Everything close, <em>nothing crowded.</em>
              </>
            }
            intro="Spaces for movement, rest, learning and gathering — woven gently into the landscape so that every day offers a reason to step outside."
          />
        </Reveal>

        <ul className="feature-grid">
          {amenityFeatures.map((f, i) => (
            <Reveal as="li" key={f.title} className="feature-card" delay={i * 100}>
              <div className="feature-img">
                <Image
                  src={images[f.img]}
                  alt={f.alt}
                  sizes="(max-width: 800px) 100vw, 33vw"
                  placeholder="blur"
                />
              </div>
              <div className="feature-body">
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal className="amenity-panel">
          <h3 className="amenity-panel-title">Also on the estate</h3>
          <ul className="amenity-list">
            {amenityList.map((a) => (
              <li key={a.label}>
                <span className="amenity-icon">
                  <Icon name={a.icon} size={28} />
                </span>
                <span>{a.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <PlaceholderNote>
          Amenities shown are indicative and subject to final plans. Please ask our team for the
          confirmed list.
        </PlaceholderNote>
      </div>
    </section>
  );
}
