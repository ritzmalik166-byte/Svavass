import { contact, nav, site } from '@/lib/site';
import { CookieSettingsButton } from './CookieConsent';
import Icon from './Icon';
import { DfplLogo, Logo } from './ui';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Logo variant="gold" width={200} />
          <p>Thoughtfully designed senior living, with care close at hand and a community to belong to.</p>
          <div className="footer-dev">
            <span>A project by</span>
            <DfplLogo tone="light" />
          </div>
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
              <Icon name="phone" size={18} />
              <a href={contact.phoneHref}>{contact.phone}</a>
            </li>
            <li>
              <Icon name="mail" size={18} />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <Icon name="pin" size={18} />
              <address>
                {contact.address.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </address>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p className="footer-disclaimer">
          Disclaimer: Photographs are representative. Amenities, specifications, services and
          configurations are indicative and subject to change and final approvals. This website does
          not constitute an offer or contract.
        </p>
        <div className="footer-legal">
          <p>
            © {year} {site.fullName}. A {site.developer} project.
          </p>
          <CookieSettingsButton className="footer-link-btn" />
          <a href="#top" className="footer-top-link">
            Back to top <Icon name="arrowUp" size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
