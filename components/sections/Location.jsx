import Image from 'next/image';
import { images } from '@/lib/images';
import { contact, nearby } from '@/lib/site';
import Icon from '../Icon';
import Reveal from '../Reveal';
import { Kicker } from '../ui';

export default function Location() {
  return (
    <section id="location" className="section location" aria-labelledby="location-title">
      <div className="container location-grid">
        <Reveal className="location-copy">
          <Kicker>Location</Kicker>
          <h2 id="location-title">
            Close to the city.
            <br />
            <em>Away from its noise.</em>
          </h2>
          <p>
            Svavass is planned within easy reach of a hospital, a temple, the market and the
            station — so family is never far, and neither is anything you need.
          </p>

          <ul className="nearby">
            {nearby.map((n) => (
              <li key={n.label}>
                <Icon name={n.icon} size={24} />
                <span>{n.label}</span>
                {n.distance && <span className="nearby-dist">{n.distance}</span>}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="location-card">
          <div className="location-img">
            <Image src={images.couplePorch} alt="An elderly Sikh couple sitting outside their home in the morning" fill placeholder="blur" sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
          <div className="location-address">
            <p className="location-label">Site address</p>
            <address>
              {contact.address.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>
            <p className="location-hours">
              <Icon name="clock" size={18} />
              {contact.visitingHours}
            </p>
            {contact.mapHref && (
              <a href={contact.mapHref} className="text-link" target="_blank" rel="noopener noreferrer">
                Get directions
                <Icon name="arrow" size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
