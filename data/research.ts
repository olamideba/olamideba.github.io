// Content for the research-first homepage (src/pages/index.astro).
// Every number here is taken from the paper or from a results file in the
// project repo. Do not round, restate or "improve" one without its source.

export const profile = {
  name: 'Olamide Balogun',
  role: 'Applied AI Engineer, Lagos, Nigeria',
  seeking: 'Applying to thesis-based MSc programmes in Computer Science for 2027.',
  interest:
    'I want to measure how small multilingual language models fail in low-resource languages such as Yoruba, especially on safety and grounding, and to test what makes them more reliable.',
  links: [
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
    'My undergraduate thesis, supervised by Dr. Oguntimilehin. I built the retrieval pipeline over the ACL Anthology, generated synthetic question–passage pairs for training, and fine-tuned and evaluated the BAAI/bge embedding models. On the held-out test split, fine-tuning bge-large raised top-1 retrieval accuracy from 73.0% to 88.9% and MRR@10 from 0.82 to 0.92.',
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
      'Single LLM judges tend to commit early and stop considering alternatives, which Liang et al. (2024) call Degeneration-of-Thought. Their Multi-Agent Debate framework, and ChatEval (Chan et al., 2024), propose debate as the fix. I wanted to see what debate buys, and what it costs, on a judgement task with planted traps.',
    body: [
      'I built Parallax, a debate system in which three agents with different roles argue over a shared transcript and a fourth issues the verdict. Each agent can retrieve from the same document collection, and every claim has to cite a retrieved passage. The task: decide whether a research-inquiry email fits a professor’s published work, where some emails contain fabricated citations, inflated claims of alignment, or a funding mismatch buried in the text.',
      'On 19 hand-labelled cases, the debate reached the correct decision on 17 and a single agent with the same retrieval tool on 16. The debate let one planted trap through against the single agent’s two, but used 5.9 times the tokens. It was also more conservative: it held back both clearly strong candidates. Nineteen synthetic cases is far too few to call this a result. It is a working evaluation harness and a direction.',
      'Earlier runs showed the debate doing worse than the single agent. Reading the transcripts traced this to two faults in my setup, not in debate itself: a missing field in the test cases that made one agent block every candidate, and an auditor prompt that treated unverifiable self-reported claims as suspicious. One miscalibrated agent was enough to drag the group.',
      'I also logged how the debate fails. Agents continuing their own turn invented statements from colleagues who had not yet spoken. Re-sending the full transcript every turn made token use grow quadratically, to about 138,000 tokens for one debate. With the model’s hidden reasoning (“thinking”) switched on, turns ran to 4,000–6,000 tokens and a debate took over 450 seconds; switched off, 89 seconds. I have not yet measured whether thinking changes the verdicts. That comparison is next.',
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
      'The team is now extending it to a refusal benchmark for Cohere’s Tiny Aya Global model. I wrote the evaluation harness: it runs native, romanized and code-switched prompts through local or hosted models, records the model’s stated language and reasoning, and labels each answer as refused, harmful, or garbled. Its rules never mark an answer harmful on their own, so a refusal phrased in an unfamiliar way cannot be miscounted as a jailbreak; those cases go to a judge model or a human. I am also drafting the Yoruba prompt set.',
      'Status: the Telugu native-script run is complete (33 prompts) and awaiting judging. No findings yet.',
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
