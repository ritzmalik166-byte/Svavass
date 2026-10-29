'use client';

import { useRef, useState } from 'react';
import { contact } from '@/lib/site';
import { enquiryOptions, validateEnquiry } from '@/lib/enquiry';
import Icon from '../Icon';
import Reveal from '../Reveal';
import { Kicker } from '../ui';

const fieldOrder = ['name', 'phone', 'email', 'enquiringFor', 'visitDate', 'message', 'consent'];

function Field({ id, label, optional, error, hint, children }) {
  return (
    <div className={`field ${error ? 'has-error' : ''}`}>
      <label htmlFor={id}>
        {label}
        {optional ? <span className="field-optional"> (optional)</span> : <span className="field-req" aria-hidden="true"> *</span>}
      </label>
      {hint && (
        <p className="field-hint" id={`${id}-hint`}>
          {hint}
        </p>
      )}
      {children}
      {error && (
        <p className="field-error" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}

export default function Enquiry() {
  const formRef = useRef(null);
  const successRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | failed
  const [serverError, setServerError] = useState('');
  const [today] = useState(() => new Date().toISOString().slice(0, 10));

  const describedBy = (id, hint) => [hint && `${id}-hint`, errors[id] && `${id}-error`].filter(Boolean).join(' ') || undefined;

  const focusFirstError = (errs) => {
    const first = fieldOrder.find((f) => errs[f]);
    if (first) formRef.current?.querySelector(`[name="${first}"]`)?.focus();
  };

  async function onSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    data.consent = fd.get('consent') === 'on';

    const errs = validateEnquiry(data);
    setErrors(errs);
    setServerError('');
    if (Object.keys(errs).length) {
      focusFirstError(errs);
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        setStatus('sent');
        formRef.current?.reset();
        requestAnimationFrame(() => successRef.current?.focus());
      } else {
        if (json.errors) {
          setErrors(json.errors);
          focusFirstError(json.errors);
        }
        setServerError(json.error || 'Please check the highlighted fields and try again.');
        setStatus('failed');
      }
    } catch {
      setServerError(`We could not send your enquiry just now. Please call us on ${contact.phone}.`);
      setStatus('failed');
    }
  }

  // Clear a field's error as soon as the visitor corrects it.
  const onChange = (e) => {
    const { name } = e.target;
    if (errors[name]) setErrors(({ [name]: _, ...rest }) => rest);
  };

  return (
    <section id="enquire" className="section enquiry" aria-labelledby="enquire-title">
      <div className="container enquiry-grid">
        <Reveal className="enquiry-info">
          <Kicker>Enquire &amp; visit</Kicker>
          <h2 id="enquire-title">
            Come for chai.
            <br />
            <em>Stay for the conversation.</em>
          </h2>
          <p className="enquiry-lead">
            The best way to know Svavass is to spend an afternoon here. Share a few details and our
            team will call you back to answer questions or arrange an unhurried visit — bring the
            family along.
          </p>

          <ul className="contact-list">
            <li>
              <span className="contact-icon"><Icon name="phone" /></span>
              <div>
                <p className="contact-label">Call us</p>
                <a href={contact.phoneHref}>{contact.phone}</a>
              </div>
            </li>
            <li>
              <span className="contact-icon"><Icon name="mail" /></span>
              <div>
                <p className="contact-label">Email</p>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
            </li>
            <li>
              <span className="contact-icon"><Icon name="pin" /></span>
              <div>
                <p className="contact-label">Visit</p>
                <address>
                  {contact.address.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </address>
                {contact.mapHref && (
                  <a href={contact.mapHref} target="_blank" rel="noopener noreferrer">
                    Get directions
                  </a>
                )}
              </div>
            </li>
            <li>
              <span className="contact-icon"><Icon name="clock" /></span>
              <div>
                <p className="contact-label">Hours</p>
                <p>{contact.visitingHours}</p>
              </div>
            </li>
          </ul>
        </Reveal>

        <Reveal className="enquiry-card" delay={120}>
          {status === 'sent' ? (
            <div className="form-success" role="status" tabIndex={-1} ref={successRef}>
              <span className="success-icon"><Icon name="check" size={32} /></span>
              <h3>Thank you — we’ve received your enquiry.</h3>
              <p>A member of the Svavass team will be in touch shortly. If it’s urgent, please call us on {contact.phone}.</p>
              <button type="button" className="btn btn-outline" onClick={() => setStatus('idle')}>
                <span>Send another enquiry</span>
              </button>
            </div>
          ) : (
            <form ref={formRef} className="enquiry-form" noValidate onSubmit={onSubmit} onChange={onChange} aria-describedby="form-note">
              <h3 className="form-title">Book a visit or request a call</h3>
              <p className="form-note" id="form-note">
                Fields marked <span aria-hidden="true">*</span>
                <span className="sr-only">with an asterisk</span> are required.
              </p>

              {serverError && (
                <p className="form-alert" role="alert">
                  {serverError}
                </p>
              )}

              <div className="form-row">
                <Field id="name" label="Full name" error={errors.name}>
                  <input id="name" name="name" type="text" autoComplete="name" required aria-invalid={!!errors.name} aria-describedby={describedBy('name')} />
                </Field>
                <Field id="phone" label="Phone number" error={errors.phone}>
                  <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required aria-invalid={!!errors.phone} aria-describedby={describedBy('phone')} />
                </Field>
              </div>

              <Field id="email" label="Email address" optional error={errors.email}>
                <input id="email" name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={describedBy('email')} />
              </Field>

              <fieldset className={`field choice-group ${errors.enquiringFor ? 'has-error' : ''}`} aria-describedby={errors.enquiringFor ? 'enquiringFor-error' : undefined}>
                <legend>
                  I am enquiring for<span className="field-req" aria-hidden="true"> *</span>
                </legend>
                <div className="choices">
                  {enquiryOptions.map((opt, n) => (
                    <label key={opt} className="choice">
                      <input type="radio" name="enquiringFor" value={opt} defaultChecked={n === 0} />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
                {errors.enquiringFor && <p className="field-error" id="enquiringFor-error">{errors.enquiringFor}</p>}
              </fieldset>

              <Field id="visitDate" label="Preferred visit date" optional error={errors.visitDate}>
                <input id="visitDate" name="visitDate" type="date" min={today} aria-invalid={!!errors.visitDate} aria-describedby={describedBy('visitDate')} />
              </Field>

              <Field id="message" label="Anything you’d like us to know?" optional error={errors.message}>
                <textarea id="message" name="message" rows={4} maxLength={1500} aria-invalid={!!errors.message} aria-describedby={describedBy('message')} />
              </Field>

              {/* Honeypot — hidden from people and assistive tech */}
              <div className="hp" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <div className={`field consent ${errors.consent ? 'has-error' : ''}`}>
                <label className="checkbox">
                  <input type="checkbox" name="consent" aria-invalid={!!errors.consent} aria-describedby={errors.consent ? 'consent-error' : undefined} />
                  <span>I agree to be contacted by the Svavass team about my enquiry.</span>
                </label>
                {errors.consent && <p className="field-error" id="consent-error">{errors.consent}</p>}
              </div>

              <button type="submit" className="btn btn-primary btn-block" disabled={status === 'sending'}>
                <span>{status === 'sending' ? 'Sending…' : 'Send enquiry'}</span>
                {status !== 'sending' && <Icon name="arrow" size={20} />}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
