'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { contact, nav } from '@/lib/site';
import Icon from './Icon';
import { DfplLogo } from './ui';

const TEXT_SIZES = [
  { id: 'base', label: 'A', name: 'Standard text size' },
  { id: 'large', label: 'A+', name: 'Large text size' },
  { id: 'xlarge', label: 'A++', name: 'Extra large text size' },
];
const STORAGE_KEY = 'svavass-text-size';

function TextSizeControl({ size, onChange }) {
  return (
    <div className="text-size" role="group" aria-label="Text size">
      <span className="text-size-label">Text size</span>
      {TEXT_SIZES.map((s) => (
        <button
          key={s.id}
          type="button"
          className={`text-size-btn size-${s.id}`}
          aria-pressed={size === s.id}
          aria-label={s.name}
          onClick={() => onChange(s.id)}
        >
          {s.label}
        </button>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [size, setSize] = useState('base');
  const toggleRef = useRef(null);
  const panelRef = useRef(null);

  // Restore the visitor's preferred text size.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && TEXT_SIZES.some((s) => s.id === saved)) setSize(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.dataset.textSize = size;
    try {
      localStorage.setItem(STORAGE_KEY, size);
    } catch {}
  }, [size]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the section currently in view.
  useEffect(() => {
    const sections = nav.map((n) => n.id).map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const close = useCallback((restoreFocus = true) => {
    setOpen(false);
    if (restoreFocus) toggleRef.current?.focus();
  }, []);

  // Mobile menu: lock scroll, focus the first link, close on Escape, keep Tab inside.
  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    document.body.style.overflow = 'hidden';
    panel?.querySelector('a, button')?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'Tab' && panel) {
        const items = [...panel.querySelectorAll('a, button'), toggleRef.current];
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    const onResize = () => window.innerWidth >= 1180 && close(false);
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open, close]);

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
        <div className="utility-bar">
          <div className="container utility-inner">
            <p className="utility-note">Svavass Senior Living — a DFPL initiative</p>
            <div className="utility-actions">
              <a href={contact.phoneHref} className="utility-link">
                <Icon name="phone" size={16} />
                <span>{contact.phone}</span>
              </a>
              <TextSizeControl size={size} onChange={setSize} />
            </div>
          </div>
        </div>

        <nav className="container nav-bar" aria-label="Main">
          <a href="#top" className="nav-logo" aria-label="DFPL Builders — back to top" onClick={() => open && close(false)}>
            <DfplLogo />
          </a>

          <ul className="nav-links">
            {nav.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} aria-current={active === item.id ? 'true' : undefined}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#enquire" className="btn btn-primary btn-sm nav-cta">
            <span>Enquire Now</span>
            <Icon name="arrow" size={16} />
          </a>

          <button
            ref={toggleRef}
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="nav-toggle-label">{open ? 'Close' : 'Menu'}</span>
            <span className="nav-toggle-icon" aria-hidden='true'>
              <span />
              <span />
            </span>
          </button>
        </nav>

        <div id="mobile-menu" ref={panelRef} className="mobile-menu" hidden={!open}>
          <div className="container">
            <ul className="mobile-links">
              {nav.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} onClick={() => close(false)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mobile-footer">
              <a href="#enquire" className="btn btn-primary" onClick={() => close(false)}>
                <span>Book a site visit</span>
                <Icon name="arrow" size={18} />
              </a>
              <a href={contact.phoneHref} className="btn btn-outline">
                <Icon name="phone" size={18} />
                <span>Call {contact.phone}</span>
              </a>
              <TextSizeControl size={size} onChange={setSize} />
            </div>
          </div>
        </div>
      </header>

      {/* Persistent, thumb-friendly actions on small screens */}
      <div className={`mobile-actions ${scrolled && !open ? 'is-visible' : ''}`} inert={!(scrolled && !open)}>
        <a href={contact.phoneHref} className="mobile-action">
          <Icon name="phone" size={20} />
          <span>Call us</span>
        </a>
        <a href="#enquire" className="mobile-action mobile-action-primary">
          <span>Book a visit</span>
          <Icon name="arrow" size={20} />
        </a>
      </div>
    </>
  );
}
