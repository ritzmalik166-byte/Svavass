'use client';

import { useEffect, useRef } from 'react';

// Gentle fade-and-rise as content enters the viewport. Content is visible by
// default (no-JS, reduced motion); the hidden state is only applied once JS runs.
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // Anything already on screen at load stays put — no flash of hidden content.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    el.classList.add('reveal-pending');
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('reveal-in');
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className}`} style={delay ? { '--reveal-delay': `${delay}ms` } : undefined} {...rest}>
      {children}
    </Tag>
  );
}
