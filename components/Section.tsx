import React from 'react';
import { Reveal } from './Reveal';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  eyebrow?: string;   // small mono label above the title
  title?: string;
  subtitle?: string;
}

export const Section: React.FC<SectionProps> = ({
  id,
  className = "",
  children,
  eyebrow,
  title,
  subtitle,
}) => {
  return (
    <section id={id} className={`py-24 px-6 md:px-10 lg:px-16 scroll-mt-20 ${className}`}>
      <div className="max-w-5xl mx-auto">
        {(eyebrow || title || subtitle) && (
          <Reveal className="mb-14">
            {eyebrow && (
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3">
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="font-heading text-3xl md:text-4xl tracking-tight text-ink">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-muted mt-4 max-w-2xl leading-relaxed">{subtitle}</p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
};
