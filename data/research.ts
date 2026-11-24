// Content for the research-first homepage (src/pages/index.astro).
// Every number here is taken from the paper or from a results file in the
// project repo. Do not round, restate or "improve" one without its source.

export const profile = {
  name: 'Olamide Balogun',
  role: 'Applied AI Engineer, Lagos, Nigeria',
  seeking: 'Applying to thesis-based MSc programmes in Computer Science for 2027.',
  interest: {
    lead: "I'm interested in when language-model systems can be trusted:",
    items: [
      "Grounding: whether a model's answers can be traced back to real sources.",
      'Agent reliability: whether agents, tools and LLM judges behave dependably.',
      'Low-resource languages: whether safety and grounding hold up in languages like Yoruba, which I speak natively.',
      'Education: whether AI tutors and learning assistants stay reliable when students depend on them.',
    ],
  },
  links: [
    { label: 'CV', href: 'https://drive.google.com/file/d/1bpdPNnOcoo3NtaAnbXTA7mqaXK_rwBTJ/view?usp=sharing' },
    { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=e05FcFEAAAAJ&hl=en' },
    { label: 'ORCID', href: 'https://orcid.org/0009-0004-9619-6083' },
    { label: 'Email', href: 'mailto:olamidebalogun174@gmail.com' },
    { label: 'GitHub', href: 'https://github.com/olamideba' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/olamideba/' },
    { label: 'Hugging Face', href: 'https://huggingface.co/olamideba' },
  ],
};

export const about = [
  'I graduated in Computer Science from Afe Babalola University in 2024 with first-class honours. My undergraduate thesis on dense retrieval for scholarly question answering became my first journal paper.',
  'Since then I have worked as an AI engineer, building retrieval systems and agents that other people depend on. That work keeps raising the same questions: when does a model ground its answer in evidence, how do you tell, and does any of it hold in a language like Yoruba, which I speak natively but most models barely see in training.',
  'Those questions are what I want to spend a thesis on.',
];

export const publication = {
  authors: 'Oguntimilehin, A. and Balogun, O.',
  title: 'Development of a RAG-Based Scholarly Research Chatbot with Fine-Tuned Dense Retrieval',
  venue: 'Nigerian Journal of Technology',
  details: '45(2), 401–410',
  year: '2026',
  doi: 'https://doi.org/10.67358/njt.2026.5975',
  pdf: 'https://www.nijotech.com/index.php/nijotech/article/download/5975/2316/23633',
  code: 'https://github.com/olamideba/rag-chatbot-final',
  summary:
    'My undergraduate thesis, supervised by Prof. Oguntimilehin. I built the retrieval pipeline over the ACL Anthology, generated synthetic question–passage pairs for training, and fine-tuned and evaluated the BAAI/bge embedding models. On the held-out test split, fine-tuning bge-large raised top-1 retrieval accuracy from 73.0% to 88.9% and MRR@10 from 0.82 to 0.92.',
};

export interface ResearchProject {
  id: string;
  title: string;
  period: string;
  question: string;
  body: string[];
  links: { label: string; href: string }[];
}

export const researchProjects: ResearchProject[] = [
  {
    id: 'debate',
    title: 'Does multi-agent debate make LLM judgements more reliable?',
    period: '2026',
    question:
      "Single LLM judges tend to commit early, which Liang et al. (2024) call Degeneration-of-Thought, and multi-agent debate is proposed as the fix. I tested what debate buys, and what it costs, on a judgement task with planted traps.",
    body: [
      "I built Parallax: three agents argue over a shared transcript, a fourth gives the verdict, and every claim must cite a retrieved passage. The task is deciding whether a research-inquiry email fits a professor's published work, with fabricated citations, inflated alignment claims or funding mismatches planted in some emails.",
      'On 19 hand-labelled cases, debate was correct on 17 and a single agent with the same retrieval on 16. Debate let one trap through against two, but used 5.9 times the tokens. Nineteen cases is too few to call a result. It is a working evaluation harness.',
      'Earlier runs had debate doing worse than the single agent. Reading the transcripts traced it to one miscalibrated agent dragging the whole group, a setup fault rather than a flaw in debate.',
    ],
    links: [
      { label: 'Write-up', href: '/projects/parallax/' },
      { label: 'Code', href: 'https://github.com/olamideba/parallax' },
    ],
  },
  {
    id: 'tiny-aya',
    title: 'Safety refusals of a small multilingual model across scripts',
    period: '2026, ongoing',
    question:
      'Safety training is concentrated in high-resource languages. Does a small multilingual model refuse harmful requests as reliably in Telugu or Yoruba as in English, and does that change when the same request is written in romanized or code-switched script?',
    body: [
      'This started in Expedition Tiny Aya, a community research programme run by Cohere Labs, where our team tested adversarial prompts in romanized scripts. I ran the comparison prompts against DeepSeek and Mistral models.',
      "The programme has ended, and the team is continuing the work as a refusal benchmark for Cohere's Tiny Aya Global model. I wrote the evaluation harness, which runs native, romanized and code-switched prompts and labels each answer as refused, harmful or garbled, sending unclear cases to a judge model or a human. I am also drafting the Yoruba prompt set.",
      'Status: the Telugu native-script run, 33 prompts, is complete and awaiting judging.',
    ],
    links: [
      { label: 'Expedition code', href: 'https://github.com/manaswithasunkara/AI_Safety_Adversersial_Prompting' },
    ],
  },
];

export const experience = [
  { role: 'Applied AI Engineer', org: 'AppsLevel (remote)', period: 'May 2026 – present', note: 'Retrieval pipeline and backend for personalised explanations and quizzes in a learning product.' },
  { role: 'Product Operations Officer', org: 'Lendsqr', period: 'Mar 2025 – Dec 2025', note: 'Built a retrieval-based support assistant over 15,000 past support tickets.' },
  { role: 'Software Engineering Intern', org: 'Lendsqr', period: 'Aug 2024 – Feb 2025', note: 'Built and self-hosted an internal RAG assistant that replaced a paid tool.' },
  { role: 'Machine Learning Intern', org: 'eProcess, Ecobank', period: 'Jun 2023 – Sep 2023', note: 'Salary prediction model (R² 0.91) and a face-recognition prototype.' },
];

export const education = {
  degree: 'B.Sc. Computer Science, First Class Honours',
  school: 'Afe Babalola University, Ado-Ekiti, Nigeria',
  year: '2024',
  detail: 'CGPA 4.88 / 5.00. Founder’s Award for Academic Excellence, 2021–2024.',
};
