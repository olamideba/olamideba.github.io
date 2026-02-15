import React, { useState } from 'react';
import { BookOpen, Brain, Code, Mail, Github, Linkedin, FileText, Terminal, Shield, GraduationCap, ExternalLink } from 'lucide-react';

import { Button } from './components/Button';
import { Section } from './components/Section';

import { projects } from './data/projects';
import { research } from './data/research';
import { experience } from './data/experience';

const App: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-textMain font-sans selection:bg-primary selection:text-white">

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full bg-[#FDFBF7]/90 backdrop-blur-md border-b border-stone-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src="/images/pfp.jpg"
              onError={(e) => {
                // Fallback if local image isn't found
                e.currentTarget.src = 'https://picsum.photos/200';
              }}
              alt="Olamide Balogun"
              className="w-10 h-10 rounded-full object-cover border border-stone-300"
            />
            <span className="font-serif font-bold text-lg tracking-tight">Olamide Balogun</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-textMuted">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#research" className="hover:text-primary transition-colors">Research</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-textMuted">
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-stone-200 p-6 flex flex-col gap-4 shadow-lg animate-fade-in">
            <a href="#about" onClick={toggleMenu} className="text-lg">About</a>
            <a href="#projects" onClick={toggleMenu} className="text-lg">Projects</a>
            <a href="#research" onClick={toggleMenu} className="text-lg">Research</a>
            <a href="#experience" onClick={toggleMenu} className="text-lg">Experience</a>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <Section className="pt-5 pb-5 min-h-[90vh] flex flex-col justify-center bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-slide-up">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-wider uppercase text-primary bg-orange-50 rounded-full border border-orange-100">
              AI Engineer • Researcher
            </div>
            <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-6 text-textMain">
              Olamide Balogun
            </h1>
            <p className="text-lg md:text-xl text-textMuted mb-8 leading-relaxed max-w-lg">
              Building reliable AI systems through rigorous research and engineering.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="#research">View Research</Button>
              <Button variant="outline" href="#contact">Get in Touch</Button>
            </div>
          </div>

          {/* Abstract Hero Visual */}
          <div className="order-1 md:order-2 flex justify-center relative">
            {/* Decorative abstract circle representing "Knowledge Nodes" */}
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <div className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 border border-stone-300 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-stone-100 p-8 rounded-full shadow-sm border border-stone-200">
                  <Brain className="w-16 h-16 text-primary" strokeWidth={1.5} />
                </div>
              </div>
              {/* Orbiting elements */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 bg-white p-2 rounded-lg shadow-sm text-xs font-mono text-primary border border-orange-100">
                Learn
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 bg-white p-2 rounded-lg shadow-sm text-xs font-mono text-primary border border-orange-100">
                Build
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* --- PHILOSOPHY QUOTE --- */}
      {/* <div className="bg-stone-900 text-stone-200 py-16 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl italic opacity-90 mb-4">
            "The ultimate goal of the educational system is to shift to the individual the burden of pursuing his own education."
          </p>
          <p className="text-sm uppercase tracking-widest text-primary font-bold">— John Gardner</p>
        </div>
      </div> */}

      {/* --- ABOUT SECTION --- */}
      <Section id="about" title="About Me">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6 text-lg text-textMuted leading-relaxed">
            <p>
              I am Olamide, an AI Research Engineer in training. Right now, I am focused on strengthening my foundations in Deep Learning while building projects and exploring research around trustworthy AI, Retrieval-Augmented Generation, and Agentic AI.
            </p>
            <p>
              I am passionate about building reliable AI systems. In doing so, I am learning about the core architecture of foundation models, their weaknesses and how to mitigate them.
              <br /><br />
              My interest is in improving AI trustworthiness in academia and low-resource contexts.
            </p>
            <p>
              I have been curious about <em> metacognition</em>. In a world flooded with information, the ability to discern factual truth from plausible-sounding noise is the most critical skill. This drives my research interest into techniques such as <strong>Retrieval-Augmented Generation (RAG)</strong>.
            </p>
          </div>

          {/* Quick Stats Card */}
          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm h-fit">
            <h3 className="font-serif text-xl mb-4 border-b border-stone-100 pb-2">Core Focus</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm">
                <BookOpen className="w-4 h-4 text-primary" />
                <span>Information Retrieval Architectures</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Brain className="w-4 h-4 text-primary" />
                <span>Metacognitive Learning</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Shield className="w-4 h-4 text-primary" />
                <span>Trustworthy AI</span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-stone-100">
              <div className="text-xs text-stone-400 uppercase tracking-wider mb-2">Education</div>
              <div className="font-medium">B.Sc Computer Science</div>
              <div className="text-sm text-stone-500">Afe Babalola University</div>
              <div className="text-primary font-bold text-sm mt-1">4.88 / 5.00 CGPA</div>
            </div>
          </div>
        </div>
      </Section>

      {/* --- RESEARCH SECTION --- */}
      <Section id="research" title="Research & Publications" className="bg-white">
        <div className="space-y-8">
          {/* Mapping through research papers. 'map' transforms data into UI components. */}
          {research.map((paper) => (
            <div key={paper.id} className="border-l-2 border-primary pl-6 hover:bg-stone-50 transition-colors rounded-r-lg p-4 -ml-4">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-textMain">
                  {paper.title}
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap
                  ${paper.status === 'Published' ? 'bg-green-100 text-green-800' :
                    paper.status === 'Under Review' ? 'bg-amber-100 text-amber-800' : 'bg-stone-100 text-stone-600'}`}>
                  {paper.status}
                </span>
              </div>
              <div className="text-sm font-mono text-primary mb-3">{paper.journal} • {paper.year}</div>
              <p className="text-stone-600 leading-relaxed mb-4">
                <span className="font-bold text-textMain">Abstract: </span>
                {paper.abstract}
              </p>
              {/* Visualizing the key metric mentioned in the abstract */}
              <div className="flex gap-6 mt-4 pt-4 border-t border-stone-100">
                <div>
                  <div className="text-2xl font-bold text-textMain">97%</div>
                  <div className="text-xs text-stone-500 uppercase">Retrieval Accuracy</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-textMain">-15%</div>
                  <div className="text-xs text-stone-500 uppercase">Hallucination Rate</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* --- PROJECTS SECTION --- */}
      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white p-6 rounded-xl border border-stone-200 hover:border-primary/50 hover:shadow-md transition-all">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-xl text-textMain group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  {project.links?.github && (
                    <a href={project.links.github} className="text-stone-400 hover:text-primary">
                      <Github size={18} />
                    </a>
                  )}
                  {project.links?.demo && (
                    <a href={project.links.demo} className="text-stone-400 hover:text-primary">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-stone-600 text-sm mb-6 min-h-[60px]">
                {project.description}
              </p>

              {/* Metrics Grid (if metrics exist) */}
              {project.metrics && (
                <div className="grid grid-cols-2 gap-2 mb-6 bg-stone-50 p-3 rounded-lg border border-stone-100">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key}>
                      <span className="block text-xs text-stone-500 uppercase">{key}</span>
                      <span className="block font-mono font-bold text-primary">{value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-stone-100 text-stone-600 text-xs rounded-md border border-stone-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* --- EXPERIENCE SECTION --- */}
      <Section id="experience" title="Experience" className="bg-white">
        <div className="relative border-l border-stone-200 ml-3 md:ml-6 space-y-12">
          {experience.map((job, index) => (
            <div key={job.id} className="relative pl-8 md:pl-12">
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] md:-left-[5px] top-2 w-3 h-3 rounded-full bg-primary ring-4 ring-white"></div>

              <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-2">
                <h3 className="text-xl font-bold text-textMain">{job.role}</h3>
                <span className="text-primary font-medium">@ {job.company}</span>
              </div>

              <div className="text-sm text-stone-400 font-mono mb-4">{job.period}</div>

              <ul className="space-y-2">
                {job.description.map((point, i) => (
                  <li key={i} className="text-stone-600 flex items-start gap-2 text-sm md:text-base">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-stone-300 flex-shrink-0"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* --- CONTACT / FOOTER --- */}
      <footer id="contact" className="bg-stone-900 text-stone-300 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl text-white mb-8">Let's connect theory with practice.</h2>
          <p className="mb-12 text-lg max-w-2xl mx-auto opacity-80">
            I am actively seeking MSc opportunities and Research roles where I can contribute to robust, trustworthy and safe AI systems.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <a href="mailto:olamidebalogun174@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white">
              <Mail size={18} />
              <span>olamidebalogun174@gmail.com</span>
            </a>
            <a href="https://github.com/olamideba/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white">
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/olamideba/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white">
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="text-sm text-stone-500 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Olamide Balogun. Built with React & Tailwind.</p>
            <p className="italic">"Learning to learn."</p>
          </div>
          <p className="text-sm text-stone-500 pt-4">UI inspired by Anthropic's claude's UI.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;