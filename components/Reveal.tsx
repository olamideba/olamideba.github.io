import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

// The one page-wide motion primitive. It only reveals content once and uses
// native scrolling; no parallax, hover movement, or exit animation is added.
export const Reveal: React.FC<RevealProps> = ({ children, className = '', delay = 0 }) => {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const element = root.current;
    if (!element) return undefined;

    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      // Split only textual blocks. Splitting the wrapper itself rewrites
      // flex and grid children, which breaks their layout and text sizing.
      const textBlocks = element.querySelectorAll<HTMLElement>('h1, h2, h3, h4, p');
      if (textBlocks.length === 0) return undefined;

      const splits = Array.from(textBlocks, (block) => SplitText.create(block, {
        type: 'lines',
        mask: 'lines',
        linesClass: 'reveal-line',
      }));

      // Each block gets its own short stagger. A whole project row can have
      // dozens of lines; treating them as one sequence leaves late lines
      // visibly blurred for too long.
      splits.forEach((split) => {
        gsap.from(split.lines, {
          yPercent: 105,
          filter: 'blur(1.5px)',
          duration: 0.64,
          ease: 'power3.out',
          stagger: 0.075,
          delay: delay / 1000,
          clearProps: 'filter,transform',
          scrollTrigger: {
            trigger: element,
            start: 'top 110%',
            once: true,
          },
        });
      });

      return () => splits.forEach((split) => split.revert());
    });

    return () => media.revert();
  }, { scope: root });

  return <div ref={root} className={`reveal ${className}`}>{children}</div>;
};
