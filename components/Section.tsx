import React from 'react';
import { Reveal } from './Reveal';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  eyebrow?: string;   // mono label above the title
  title?: string;
  subtitle?: string;
}

export const Section: React.FC<SectionProps> = ({
  id,
  className = '',
  children,
  eyebrow,
  title,
  subtitle,
}) => {
  return (
    <section id={id} className={`py-28 px-6 md:px-10 lg:px-16 scroll-mt-20 ${className}`}>
      <div className="max-w-5xl mx-auto">
        {(eyebrow || title || subtitle) && (
          <Reveal className="mb-16">
            {eyebrow && <div className="type-label text-rust mb-4">{eyebrow}</div>}
            {title && <h2 className="type-display-l text-ink">{title}</h2>}
            {subtitle && <p className="type-lead text-ink-secondary mt-5">{subtitle}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
};
