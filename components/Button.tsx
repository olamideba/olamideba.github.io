import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  external?: boolean;
  className?: string;
}

// Square corners, hairline borders, no fills that read as a UI kit button,
// and no drop shadow. v0.2 section 14a bans soft radius and shadows; the
// references use rule-underlined or hairline-bordered text instead of pills.
export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  href,
  external = false,
  className = '',
}) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 px-5 py-2.5 type-small transition-colors duration-200 ease-out cursor-pointer';

  const variants = {
    primary: 'bg-rust text-paper hover:bg-rust-mark',
    secondary: 'bg-sand text-ink hover:bg-rule',
    outline: 'border border-ink text-ink hover:border-rust hover:text-rust',
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={styles}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
};
