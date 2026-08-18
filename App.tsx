import React, { useState } from 'react';
import {
  Mail, Github, Linkedin, ExternalLink, Play, Award, Trophy,
  ArrowUpRight, BookOpen, Languages, Search, Microscope, MapPin,
} from 'lucide-react';

import { Button } from './components/Button';
import { Section } from './components/Section';
import { Reveal } from './components/Reveal';

import { projects } from './data/projects';
import { experience } from './data/experience';
import { posts } from './data/posts';
import { Project } from './types';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#writing', label: 'Writing' },
  { href: '#experience', label: 'Experience' },
];

const socials = [
  { href: 'https://github.com/olamideba', label: 'GitHub', icon: Github },
  { href: 'https://www.linkedin.com/in/olamideba/', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://huggingface.co/olamideba', label: 'Hugging Face', icon: ExternalLink },
];

// Extracts the root domain from a URL for use with the favicon service.
function faviconUrl(siteUrl: string): string {
  try {
    const { hostname } = new URL(siteUrl);
    return `https://www.google.com/s2/favicons?domain=${hostname}&sz=32`;
  } catch {
    return '';
  }
}

// Favicon displayed next to a project title when a live URL is available.
const ProjectFavicon: React.FC<{ url: string }> = ({ url }) => {
  const src = faviconUrl(url);
  if (!src) return null;
  return (
    <img
      src={src}
      alt=""
      width={18}
      height={18}
      className="flex-shrink-0 opacity-80"
    />
  );
};

// Small labelled link used inside project cards.
const ProjectLink: React.FC<{ href: string; icon: React.ElementType; label: string }> = ({
  href, icon: Icon, label,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-1.5 text-sm text-ink-secondary hover:text-rust transition-colors"
  >
    <Icon size={15} strokeWidth={1.75} />
    <span>{label}</span>
  </a>
);

const ProjectLinks: React.FC<{ project: Project }> = ({ project }) => {
  const l = project.links;
  if (!l && !project.privateRepo) return null;
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
      {l?.github && <ProjectLink href={l.github} icon={Github} label="Code" />}
      {l?.live && <ProjectLink href={l.live} icon={ExternalLink} label="Live demo" />}
      {l?.video && <ProjectLink href={l.video} icon={Play} label="Demo video" />}
      {l?.devpost && <ProjectLink href={l.devpost} icon={Trophy} label="Devpost" />}
      {l?.certificate && <ProjectLink href={l.certificate} icon={Award} label="Certificate" />}
      {l?.doi && <ProjectLink href={l.doi} icon={Microscope} label="Journal publication" />}
      {project.privateRepo && (
        <span className="inline-flex items-center gap-1.5 text-sm text-ink-secondary">
          <Github size={15} strokeWidth={1.75} />
          <span>Private repo</span>
        </span>
      )}
    </div>
  );
};

const Tags: React.FC<{ tags: string[] }> = ({ tags }) => (
  <div className="flex flex-wrap gap-2">
    {tags.map((tag) => (
      <span
        key={tag}
        className="px-2.5 py-1 bg-paper text-ink-secondary type-label border border-rule"
      >
        {tag}
      </span>
    ))}
  </div>
);

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const aiProjects = projects.filter((p) => p.category === 'ai-ml');
  const productProjects = projects.filter((p) => p.category === 'full-stack');

  return (
    <div className="min-h-screen bg-paper text-ink font-sans antialiased">

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full bg-paper border-b border-rule z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group">
            <picture>
              <source srcSet="/images/pfp.webp" type="image/webp" />
              <img
                src="/images/pfp.jpg"
                alt=""
                width={36}
                height={36}
                className="w-9 h-9 object-cover border border-rule"
              />
            </picture>
            <span className="type-display-s">Olamide Balogun</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-ink-secondary">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-rust transition-colors">
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 border border-ink text-ink hover:border-rust hover:text-rust transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-sm font-medium text-ink-secondary">
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-paper border-b border-rule px-6 py-6 flex flex-col gap-4 animate-fade-in">
            {[...navLinks, { href: '#contact', label: 'Contact' }].map((link) => (
              <a key={link.href} href={link.href} onClick={toggleMenu} className="text-lg">
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* --- HERO --- */}
      <header className="relative pt-36 pb-24 px-6 md:px-10 lg:px-16 overflow-hidden">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.5fr] gap-12 items-center">
          {/* Portrait */}
          <div className="hidden md:block">
            <div className="relative w-full max-w-[280px]">
              <div className="absolute -inset-3 bg-sand border border-rust/30 -z-10 rotate-3" />
              <picture>
                <source srcSet="/images/me.webp" type="image/webp" />
                <img
                  src="/images/me.jpg"
                  alt="Olamide Balogun"
                  width={560}
                  height={560}
                  className="w-full aspect-square object-cover border border-rule"
                />
              </picture>
            </div>
          </div>

          <div className="animate-slide-up">
            <div className="type-label text-rust mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-rust-mark inline-block" />
              Applied AI Engineer
              <span className="text-ink-secondary inline-flex items-center gap-1 normal-case tracking-normal">
                <MapPin size={13} strokeWidth={1.75} /> Lagos, Nigeria
              </span>
            </div>
            <h1 className="type-display-xl text-ink mb-6">
              Olamide Balogun
            </h1>
            <p className="type-lead text-ink-secondary mb-8">
              I build and ship production GenAI systems: LLMs, retrieval-augmented generation,
              agentic, and real-time multimodal architectures, mostly on Google Cloud. Currently
              moving toward AI research engineering.
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <Button href="#projects">View work</Button>
              <Button variant="outline" href="#contact">Get in touch</Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm text-ink-secondary">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-rust transition-colors"
                >
                  <Icon size={16} strokeWidth={1.75} />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* --- ABOUT --- */}
      <Section id="about" eyebrow="About" title="Engineer first, researcher in the making.">
        <div className="grid md:grid-cols-3 gap-12">
          <Reveal className="md:col-span-2 space-y-6 type-body text-ink-secondary">
            <p>
              I'm Olamide, an Applied AI Engineer based in Lagos, Nigeria. Day to day I build and
              ship production agentic applications, building on large language models, retrieval-augmented
              generation, agentic workflows.
            </p>
            <p>
              I care about systems that hold up in the real world: durable sessions, graceful
              failure handling, grounded retrieval, and the unglamorous reliability work that makes
              an agent trustworthy enough to put in front of users.
            </p>
            <p>
              Longer term, I'm moving toward AI research engineering. Right now I'm{' '}
              <em>currently exploring</em> interests in multilingual and low-resource LLMs,
              information retrieval, and interpretability. Directions, not settled
              specializations.
            </p>
          </Reveal>

          <Reveal delay={120} className="h-fit">
            <div className="bg-sand p-6 border border-rule">
              <h3 className="type-label text-rust mb-5">
                Currently exploring
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm">
                  <Languages className="w-4 h-4 text-rust mt-0.5 flex-shrink-0" strokeWidth={1.75} />
                  <span>Multilingual &amp; low-resource LLMs</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Search className="w-4 h-4 text-rust mt-0.5 flex-shrink-0" strokeWidth={1.75} />
                  <span>Information retrieval</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Microscope className="w-4 h-4 text-rust mt-0.5 flex-shrink-0" strokeWidth={1.75} />
                  <span>Interpretability</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-rule">
                <div className="type-label text-ink-secondary mb-2">
                  Education
                </div>
                <div className="font-medium text-ink">B.Sc Computer Science</div>
                <div className="text-sm text-ink-secondary">Afe Babalola University</div>
                <div className="text-rust font-semibold text-sm mt-1">4.88 / 5.00 CGPA</div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* --- PROJECTS --- */}
      <Section
        id="projects"
        eyebrow="Selected work"
        title="Projects"
        className="bg-sand border-y border-rule"
      >
        {/* Category A: AI / ML Engineering (primary) */}
        <Reveal className="mb-8">
          <div className="flex items-baseline gap-3 flex-wrap">
            <h3 className="type-display-m text-ink">AI / ML Engineering</h3>
            <span className="type-label text-ink-secondary">
              the focus
            </span>
          </div>
          <p className="text-ink-secondary mt-2 max-w-2xl">
            Production GenAI systems and research, where most of my attention goes.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {aiProjects.map((project, i) => (
            <Reveal key={project.id} delay={i * 80}>
              <article className="group h-full flex flex-col bg-paper p-7 border border-rule hover:border-rust/40 transition-colors">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-2.5">
                    <h4 className="type-display-s text-ink">{project.title}</h4>
                  </div>
                  <ArrowUpRight
                    className="text-ink-secondary group-hover:text-rust transition-colors flex-shrink-0 mt-1"
                    size={18}
                  />
                </div>

                {project.status && (
                  <div className="inline-flex self-start items-center px-2.5 py-1 mb-4 bg-sand border border-rust/30 text-rust text-xs font-medium">
                    {project.status}
                  </div>
                )}

                <p className="text-ink-secondary leading-relaxed mb-5">{project.description}</p>

                {project.highlights && (
                  <ul className="space-y-2.5 mb-5">
                    {project.highlights.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-ink-secondary">
                        <span className="text-rust flex-shrink-0 leading-none mt-1" aria-hidden="true">*</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {project.metrics && (
                  <div className="grid grid-cols-2 gap-3 mb-5 p-4 bg-sand border border-rule">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key}>
                        <span className="block font-mono font-medium text-rust text-lg">{value}</span>
                        <span className="block text-xs text-ink-secondary uppercase tracking-wide mt-0.5">{key}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* push footer to bottom */}
                <div className="mt-auto pt-5 space-y-4">
                  <Tags tags={project.tags} />
                  <ProjectLinks project={project} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Category B: Full-Stack & Product (secondary) */}
        <Reveal className="mb-8">
          <div className="flex items-baseline gap-3 flex-wrap">
            <h3 className="type-display-m text-ink">Full-Stack &amp; Product Engineering</h3>
            <span className="type-label text-ink-secondary">
              shipping range
            </span>
          </div>
          <p className="text-ink-secondary mt-2 max-w-2xl">
            Live, production software shipped for real stakeholders.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {productProjects.map((project, i) => (
            <Reveal key={project.id} delay={i * 80}>
              <article className="group h-full flex flex-col bg-paper p-6 border border-rule hover:border-rust/40 transition-colors">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    {project.links?.live && <ProjectFavicon url={project.links.live} />}
                    <h4 className="type-display-s text-ink">{project.title}</h4>
                  </div>
                  {project.status && (
                    <span className="type-label text-rust">
                      {project.status}
                    </span>
                  )}
                </div>
                <p className="text-sm text-ink-secondary leading-relaxed mb-5">{project.description}</p>
                <div className="mt-auto space-y-4">
                  <Tags tags={project.tags} />
                  <ProjectLinks project={project} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* --- WRITING --- */}
      <Section
        id="writing"
        eyebrow="Writing"
        title="Notes from the build"
        subtitle="Engineering write-ups on what I'm shipping and learning. More to come."
      >
        <div className="space-y-4">
          {posts.map((post, i) => (
            <Reveal key={post.id} delay={i * 80}>
              <a
                href={post.url}
                target="_blank"
                rel="noreferrer"
                className="group block bg-sand p-7 border border-rule hover:border-rust/40 transition-colors"
              >
                <div className="flex items-center gap-3 type-label text-ink-secondary mb-3">
                  <span className="inline-flex items-center gap-1.5 text-rust">
                    <BookOpen size={13} strokeWidth={1.75} /> {post.platform}
                  </span>
                  <span>·</span>
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="type-display-m text-ink mb-3 group-hover:text-rust transition-colors flex items-start gap-2">
                  <span>{post.title}</span>
                  <ArrowUpRight className="text-ink-secondary group-hover:text-rust transition-colors flex-shrink-0 mt-1.5" size={18} />
                </h3>
                <p className="text-ink-secondary leading-relaxed max-w-3xl">{post.excerpt}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* --- EXPERIENCE --- */}
      <Section
        id="experience"
        eyebrow="Experience"
        title="Where I've worked"
        className="bg-sand border-y border-rule"
      >
        <div className="relative border-l border-rule ml-3 md:ml-4 space-y-12">
          {experience.map((job, index) => (
            <Reveal key={job.id} delay={index * 60}>
              <div className="relative pl-8 md:pl-10">
                <div className="absolute -left-[4px] top-2.5 w-[7px] h-[7px] bg-rust-mark" />
                <div className="flex flex-col md:flex-row md:items-baseline gap-x-2 gap-y-1 mb-1">
                  <h3 className="text-lg font-semibold text-ink">{job.role}</h3>
                  <span className="text-rust font-medium">@ {job.company}</span>
                </div>
                <div className="font-mono text-xs text-ink-secondary mb-4">{job.period}</div>
                <ul className="space-y-2">
                  {job.description.map((point, i) => (
                    <li key={i} className="text-ink-secondary flex items-start gap-2.5 text-sm md:text-base">
                      <span className="text-rust flex-shrink-0 leading-none mt-1.5" aria-hidden="true">*</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* --- CONTACT / FOOTER --- */}
      <footer id="contact" className="on-dark bg-void text-cream-secondary py-24 px-6 scroll-mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="type-label text-rust-light mb-6">
            Get in touch
          </div>
          <h2 className="type-display-l text-cream mb-6">
            Let's build something reliable.
          </h2>
          <p className="mb-12 text-lg max-w-2xl mx-auto text-cream-secondary leading-relaxed">
            I'm always happy to talk about applied AI, GenAI systems, or research
            collaboration. Reach out and let's compare notes.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a href="mailto:olamidebalogun174@gmail.com" className="inline-flex items-center gap-2 px-5 py-3 border border-rule-dark text-cream type-small hover:border-rust-light hover:text-rust-light transition-colors">
              <Mail size={17} /> olamidebalogun174@gmail.com
            </a>
            <a href="https://github.com/olamideba" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 border border-rule-dark text-cream type-small hover:border-rust-light hover:text-rust-light transition-colors">
              <Github size={17} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/olamideba/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 border border-rule-dark text-cream type-small hover:border-rust-light hover:text-rust-light transition-colors">
              <Linkedin size={17} /> LinkedIn
            </a>
            <a href="https://huggingface.co/olamideba" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 border border-rule-dark text-cream type-small hover:border-rust-light hover:text-rust-light transition-colors">
              <ExternalLink size={17} /> Hugging Face
            </a>
          </div>

          <div className="text-sm text-cream-secondary pt-8 border-t border-rule-dark flex flex-col md:flex-row justify-between items-center gap-3">
            <p>© {new Date().getFullYear()} Olamide Balogun. Built with React &amp; Tailwind.</p>
            <p className="font-mono text-xs">Lagos, Nigeria</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
