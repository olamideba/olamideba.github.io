import React, { useCallback, useEffect, useState } from 'react';
import { Particles, ParticlesProvider } from '@tsparticles/react';
import type { Engine, ISourceOptions } from '@tsparticles/engine';
import { loadBasic } from '@tsparticles/basic';

const particleOptions: ISourceOptions = {
  detectRetina: false,
  fpsLimit: 30,
  fullScreen: { enable: false },
  interactivity: {
    events: {
      onHover: { enable: false },
      resize: { enable: true },
    },
  },
  particles: {
    color: { value: '#EDE7DB' },
    move: {
      enable: true,
      speed: 0.12,
      outModes: { default: 'out' },
    },
    number: {
      value: 24,
      density: { enable: true, width: 1440, height: 900 },
    },
    opacity: {
      value: { min: 0.2, max: 0.65 },
      animation: { enable: true, speed: 0.2, sync: false },
    },
    shape: { type: 'circle' },
    size: { value: { min: 1, max: 2 } },
  },
};

export const HeroParticles: React.FC = () => {
  const [reducedMotion, setReducedMotion] = useState(false);
  const init = useCallback(async (engine: Engine) => {
    await loadBasic(engine);
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  if (reducedMotion) return null;

  return (
    <div className="hero-particles" aria-hidden="true">
      <ParticlesProvider init={init}>
        <Particles id="hero-particles-canvas" options={particleOptions} />
      </ParticlesProvider>
    </div>
  );
};
