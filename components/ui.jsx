import Icon from './Icon';

const logos = {
  color: '/brand/svavass-logo.svg',
  gold: '/brand/svavass-logo-gold.svg',
  white: '/brand/svavass-logo-white.svg',
};

// Official Svavass lockup, extracted as vectors from the brand guideline.
export function Logo({ variant = 'color', className = '', width = 180 }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logos[variant]}
      alt="Svavass — An Estate for Wellbeing & Senior Living, by DFPL"
      width={width}
      height={Math.round(width * 0.356)}
      className={`logo ${className}`}
    />
  );
}

// PLACEHOLDER: typographic stand-in until DFPL supplies its logo artwork.
export function DfplLogo({ tone = 'dark', className = '' }) {
  return (
    <span className={`dfpl tone-${tone} ${className}`}>
      <svg className="dfpl-mark" viewBox="0 0 34 40" width="30" height="36" aria-hidden="true">
        <path d="M3 39V17h5v22M11 39V9h5v30M19 39V3h5v36M27 39V13h5v26" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M1 39h32" stroke="currentColor" strokeWidth="1.6" />
      </svg>
      <span className="dfpl-type">
        <span className="dfpl-name">DFPL</span>
        <span className="dfpl-sub">Builders</span>
      </span>
    </span>
  );
}

export function Kicker({ children, tone }) {
  return <p className={`kicker ${tone ? `tone-${tone}` : ''}`}>{children}</p>;
}

export function ButtonLink({ href, children, variant = 'primary', icon = 'arrow', className = '', ...rest }) {
  return (
    <a href={href} className={`btn btn-${variant} ${className}`} {...rest}>
      <span>{children}</span>
      {icon && <Icon name={icon} size={18} />}
    </a>
  );
}

export function TextLink({ href, children }) {
  return (
    <a href={href} className="text-link">
      {children}
      <Icon name="arrow" size={18} />
    </a>
  );
}
