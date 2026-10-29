'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { images } from '@/lib/images';
import { gallery } from '@/lib/site';
import Icon from '../Icon';
import Reveal from '../Reveal';
import { Kicker } from '../ui';

export default function Gallery() {
  const dialogRef = useRef(null);
  const [index, setIndex] = useState(null);
  const total = gallery.length;

  const openAt = (i) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const step = useCallback((dir) => setIndex((i) => (i + dir + total) % total), [total]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onKey = (e) => {
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    const onClose = () => {
      setIndex(null);
      document.body.style.overflow = '';
    };
    dialog.addEventListener('keydown', onKey);
    dialog.addEventListener('close', onClose);
    return () => {
      dialog.removeEventListener('keydown', onKey);
      dialog.removeEventListener('close', onClose);
    };
  }, [step]);

  useEffect(() => {
    if (index !== null) document.body.style.overflow = 'hidden';
  }, [index]);

  const item = index !== null ? gallery[index] : null;

  return (
    <section id="gallery" className="section gallery" aria-labelledby="gallery-title">
      <div className="container">
        <div className="section-head">
          <div>
            <Kicker>Gallery</Kicker>
            <h2 id="gallery-title">
              Small moments, <em>every day</em>
            </h2>
          </div>
          <p className="section-head-note">Select any photograph to view it larger.</p>
        </div>

        <ul className="gallery-grid">
          {gallery.map((g, i) => (
            <Reveal as="li" key={g.img} className={`gallery-item ${g.wide ? 'is-wide' : ''} ${g.tall ? 'is-tall' : ''}`} delay={(i % 4) * 60}>
              <button type="button" className="gallery-btn" onClick={() => openAt(i)} aria-label={`View larger: ${g.alt}`}>
                <Image
                  src={images[g.img]}
                  alt={g.alt}
                  sizes={g.wide ? '(max-width: 700px) 100vw, 50vw' : '(max-width: 700px) 50vw, 25vw'}
                  placeholder="blur"
                />
                <span className="gallery-zoom" aria-hidden="true">
                  <Icon name="expand" size={20} />
                </span>
              </button>
            </Reveal>
          ))}
        </ul>
        <p className="fine-print">Photographs are representative of the intended lifestyle.</p>
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="Image viewer"
        onClick={(e) => e.target === dialogRef.current && close()}
      >
        {item && (
          <div className="lightbox-inner">
            <figure className="lightbox-figure">
              <div className="lightbox-img">
                <Image src={images[item.img]} alt={item.alt} fill sizes="90vw" placeholder="blur" />
              </div>
              <figcaption>
                <span>{item.alt}</span>
                <span className="lightbox-count" aria-live="polite">
                  {index + 1} / {total}
                </span>
              </figcaption>
            </figure>
            <button type="button" className="lightbox-btn lightbox-prev" onClick={() => step(-1)} aria-label="Previous image">
              <Icon name="arrowLeft" />
            </button>
            <button type="button" className="lightbox-btn lightbox-next" onClick={() => step(1)} aria-label="Next image">
              <Icon name="arrow" />
            </button>
            <button type="button" className="lightbox-btn lightbox-close" onClick={close} aria-label="Close image viewer" autoFocus>
              <Icon name="close" />
            </button>
          </div>
        )}
      </dialog>
    </section>
  );
}
