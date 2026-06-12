import React from 'react';

// DEFINING PROPS
// Props are like arguments passed to a function.
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  external?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  href,
  external = false,
  className = '',
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ease-out cursor-pointer";

  const variants = {
    primary: "bg-accent text-white hover:bg-accentHover shadow-sm",
    secondary: "bg-stone-100 text-ink hover:bg-stone-200",
    outline: "border border-line text-ink hover:border-accent hover:text-accent",
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
