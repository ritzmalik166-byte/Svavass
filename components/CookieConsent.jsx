'use client';

import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';

const KEY = 'svavass-consent';
const VERSION = 1;
export const OPEN_EVENT = 'svavass:cookie-settings';

const categories = [
  { id: 'necessary', label: 'Strictly necessary', text: 'Keep the site secure and remember your choices, such as text size and this consent. Always on.', locked: true },
  { id: 'analytics', label: 'Analytics', text: 'Help us understand which pages are useful, so we can improve the site.' },
  { id: 'marketing', label: 'Marketing', text: 'Allow us to measure our advertising and show you relevant information elsewhere.' },
];

function readConsent() {
  try {
    const c = JSON.parse(localStorage.getItem(KEY));
    return c?.version === VERSION ? c : null;
  } catch {
    return null;
  }
}

// Stored in localStorage and mirrored to a first-party cookie (readable server-side).
// Scripts that need consent should listen for the `svavass:consent` event.
function saveConsent(prefs) {
  const consent = { version: VERSION, necessary: true, analytics: !!prefs.analytics, marketing: !!prefs.marketing, date: new Date().toISOString() };
  try {
    localStorage.setItem(KEY, JSON.stringify(consent));
  } catch {}
  document.cookie = `${KEY}=${encodeURIComponent(JSON.stringify({ a: consent.analytics, m: consent.marketing, v: VERSION }))}; Max-Age=${60 * 60 * 24 * 180}; Path=/; SameSite=Lax`;
  window.dispatchEvent(new CustomEvent('svavass:consent', { detail: consent }));
}

export function CookieSettingsButton({ className = '' }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}>
      Cookie preferences
    </button>
  );
}

export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [custom, setCustom] = useState(false);
  const [prefs, setPrefs] = useState({ analytics: false, marketing: false });
  const panelRef = useRef(null);
  const returnFocus = useRef(null);

  useEffect(() => {
    const saved = readConsent();
    if (saved) setPrefs({ analytics: saved.analytics, marketing: saved.marketing });
    else {
      const t = setTimeout(() => setOpen(true), 900); // let the page settle first
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    const reopen = () => {
      returnFocus.current = document.activeElement;
      const saved = readConsent();
      if (saved) setPrefs({ analytics: saved.analytics, marketing: saved.marketing });
      setCustom(true);
      setOpen(true);
    };
    window.addEventListener(OPEN_EVENT, reopen);
    return () => window.removeEventListener(OPEN_EVENT, reopen);
  }, []);

  useEffect(() => {
    document.documentElement.toggleAttribute('data-cookie-open', open);
    if (open && returnFocus.current) panelRef.current?.querySelector('h2')?.focus();
  }, [open, custom]);

  const finish = (p) => {
    saveConsent(p);
    setPrefs(p);
    setOpen(false);
    setCustom(false);
    returnFocus.current?.focus?.();
    returnFocus.current = null;
  };

  if (!open) return null;

  return (
    <section
      ref={panelRef}
      className={`cookie ${custom ? 'is-custom' : ''}`}
      role="region"
      aria-labelledby="cookie-title"
      onKeyDown={(e) => e.key === 'Escape' && custom && returnFocus.current && setOpen(false)}
    >
      <div className="cookie-inner">
        <div className="cookie-head">
          <span className="cookie-icon" aria-hidden="true">
            <Icon name="cookie" size={26} />
          </span>
          <div>
            <h2 id="cookie-title" tabIndex={-1}>
              {custom ? 'Your cookie preferences' : 'We value your privacy'}
            </h2>
            <p>
              We use cookies to keep this site working and, with your permission, to understand how it is
              used. You can change your choice at any time from “Cookie preferences” in the footer.
            </p>
          </div>
        </div>

        {custom && (
          <ul className="cookie-options">
            {categories.map((c) => (
              <li key={c.id}>
                <label className="cookie-option">
                  <span>
                    <strong>{c.label}</strong>
                    <span>{c.text}</span>
                  </span>
                  <input
                    type="checkbox"
                    role="switch"
                    className="switch"
                    checked={c.locked ? true : prefs[c.id]}
                    disabled={c.locked}
                    onChange={(e) => setPrefs((p) => ({ ...p, [c.id]: e.target.checked }))}
                  />
                </label>
              </li>
            ))}
          </ul>
        )}

        <div className="cookie-actions">
          {custom ? (
            <button type="button" className="btn btn-primary" onClick={() => finish(prefs)}>
              <span>Save preferences</span>
            </button>
          ) : (
            <button type="button" className="btn btn-outline" onClick={() => setCustom(true)}>
              <span>Customise</span>
            </button>
          )}
          <button type="button" className="btn btn-outline" onClick={() => finish({ analytics: false, marketing: false })}>
            <span>Reject all</span>
          </button>
          <button type="button" className="btn btn-gold" onClick={() => finish({ analytics: true, marketing: true })}>
            <span>Accept all</span>
          </button>
        </div>
      </div>
    </section>
  );
}
