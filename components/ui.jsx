import Icon from './Icon';

const logos = {
  color: '/brand/svavass-logo.svg',
  gold: '/brand/svavass-logo-gold.svg',
  white: '/brand/svavass-logo-white.svg',
};

// Official lockup, extracted as vectors from the brand guideline. Variants follow
// the guideline's approved colour combinations (original / gold on dark / white on dark).
export function Logo({ variant = 'color', className = '', width = 180 }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logos[variant]}
      alt="Svavass — An Estate for Wellbeing & Senior Living, by DFPL"
      width={width}
      height={Math.round(width * 0.3)}
      className={`logo ${className}`}
    />
  );
}

export function SectionHeading({ eyebrow, title, intro, align = 'left', tone = 'light', id }) {
  return (
    <header className={`section-heading align-${align} tone-${tone}`}>
      {eyebrow && (
        <p className="eyebrow">
          <span className="eyebrow-rule" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2 id={id}>{title}</h2>
      {intro && <p className="lead">{intro}</p>}
    </header>
  );
}

export function ButtonLink({ href, children, variant = 'primary', icon = 'arrow', className = '', ...rest }) {
  return (
    <a href={href} className={`btn btn-${variant} ${className}`} {...rest}>
      <span>{children}</span>
      {icon && <Icon name={icon} size={20} />}
    </a>
  );
}

export function PlaceholderNote({ children, tone = 'light' }) {
  return <p className={`placeholder-note tone-${tone}`}>{children}</p>;
}
