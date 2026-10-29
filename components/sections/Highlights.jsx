import { highlights } from '@/lib/site';
import Icon from '../Icon';

export default function Highlights() {
  return (
    <section className="highlights" aria-label="Svavass at a glance">
      <ul className="container highlights-list">
        {highlights.map((h) => (
          <li key={h.label}>
            <Icon name={h.icon} size={34} />
            <span>
              {h.label}
              <br />
              {h.sub}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
