import { contact, nav, site } from '@/lib/site';
import { CookieSettingsButton } from './CookieConsent';
import Icon from './Icon';
import { Logo } from './ui';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer pattern">
      <div className="container footer-top">
        <div className="footer-brand">
          <Logo variant="gold" width={220} />
          <p>
            Calm, nature-led homes designed around independence, community and care.
          </p>
        </div>

        <nav className="footer-col" aria-label="Footer">
          <h2 className="footer-heading">Explore</h2>
          <ul>
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-col">
          <h2 className="footer-heading">Get in touch</h2>
          <ul className="footer-contact">
            <li>
              <Icon name="phone" size={20} />
              <a href={contact.phoneHref}>{contact.phone}</a>
            </li>
            <li>
              <Icon name="mail" size={20} />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <Icon name="pin" size={20} />
              <address>
                {contact.address.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </address>
            </li>
          </ul>
        </div>

        <div className="footer-col footer-cta">
          <h2 className="footer-heading">Visit Svavass</h2>
          <p>See the homes, walk the gardens and meet the team.</p>
          <a href="#enquire" className="btn btn-gold">
            <span>Book a Visit</span>
            <Icon name="arrow" size={20} />
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p className="footer-disclaimer">
          Disclaimer: Images are representative. Amenities, specifications, services and
          configurations shown are indicative and subject to change and final approvals. This website
          does not constitute an offer or contract.
        </p>
        <div className="footer-legal">
          <p>
            © {year} {site.fullName}. A {site.developer} project.
          </p>
          <CookieSettingsButton className="footer-cookie-btn" />
          <a href="#top" className="back-to-top">
            Back to top <Icon name="arrowUp" size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
