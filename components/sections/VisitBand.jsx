import Image from 'next/image';
import { images } from '@/lib/images';
import { ButtonLink } from '../ui';

export default function VisitBand() {
  return (
    <section className="visit" aria-labelledby="visit-title">
      <div className="visit-img">
        <Image src={images.morningPaper} alt="" fill placeholder="blur" sizes="(max-width: 900px) 100vw, 60vw" />
      </div>
      <div className="container visit-inner">
        <div className="visit-copy">
          <h2 id="visit-title">
            A brighter tomorrow
            <br />
            begins here
          </h2>
          <p>Discover senior living that celebrates independence, wellness and meaningful connections.</p>
          <ButtonLink href="#enquire" variant="gold">
            Schedule a site visit
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
