import { Project } from '../types';

// Engineering portfolio, shown at /engineering. Projects with `sections` also
// get a page at /projects/<id>/. The research framing of Parallax lives in
// data/research.ts; this file describes the systems.
export const projects: Project[] = [
  {
    id: 'parallax',
    title: 'Parallax',
    summary:
      'A multi-agent debate system that judges whether a research-inquiry email fits a professor’s published work, with every claim tied to a retrieved passage and a human approving any reply.',
    context: 'Qwen Cloud Global AI Hackathon, 2026',
    stack: 'LangGraph, Qwen, FastAPI, Celery, Postgres with pgvector, Next.js, Alibaba Cloud',
    links: {
      github: 'https://github.com/olamideba/parallax',
      video: 'https://youtu.be/wA0PStZ8JVU',
      writeup: 'https://olamideba.medium.com/what-if-we-build-for-the-overwhelmed-professor-91cfedadbf58',
    },
    sections: [
      {
        heading: 'Question',
        paragraphs: [
          'A single LLM asked to judge something tends to settle on an answer early and then defend it. Liang et al. (2024) call this Degeneration-of-Thought and propose Multi-Agent Debate as a remedy; ChatEval (Chan et al., 2024) applies the same idea to LLM evaluators. I built Parallax to see what debate changes on a judgement task where the inputs contain deliberate traps, and what it costs.',
        ],
      },
      {
        heading: 'Setup',
        paragraphs: [
          'A cheap first pass removes obvious mass mail. Each remaining email goes to a moderated debate between a research-fit advocate, an authenticity auditor and a capacity-and-funding assessor, who take turns over one shared transcript. An arbitrator reads the full transcript once and decides: invite, ask for more information, or decline. All agents retrieve from the professor’s indexed publications, and each claim must cite a passage. The debate is a LangGraph state graph with a hard cap on rounds.',
          'The baseline is a single agent with the same model family, the same retrieval tool and the same corpus. Both were run on 19 hand-written cases for two fictional professors, each case labelled with the correct decision and a failure mode: fabricated citation, inflated alignment, capacity mismatch, clean strong fit, clean weak fit, or a harder variant such as a contradiction buried mid-email.',
        ],
      },
      {
        heading: 'Result',
        paragraphs: [
          'Debate: 17 of 19 correct, one planted trap accepted, 620,795 tokens, 1,266 seconds. Single agent: 16 of 19 correct, two traps accepted, 104,895 tokens, 530 seconds.',
          'The debate caught a false claim of extending the professor’s work and a funding problem that the single agent waved through. It also downgraded both clean, strong candidates to “ask for more information”, so its errors lean towards caution. With 19 synthetic cases, a one-case difference is not evidence of anything. What the benchmark does show is where each approach breaks, and it gives me a harness to test changes against.',
        ],
      },
      {
        heading: 'What the transcripts showed',
        paragraphs: [
          'Earlier runs had the debate scoring well below the single agent. The per-case transcripts showed why. Every test case was missing the candidate’s country, so the assessor could never clear visa feasibility and held every candidate. And the auditor’s prompt did not separate claims about the professor’s work, which can be checked, from claims about the candidate’s own unpublished work, which cannot; it flagged every self-reported credential. Fixing those two faults, and giving both systems an equal token budget, produced the result above. One miscalibrated agent was enough to pull the whole group down.',
          'When an agent was asked to continue its own turn, it sometimes rebutted a colleague who had not spoken yet. Re-sending the whole transcript on every turn made cost grow quadratically, to about 138,000 tokens for one debate. Both were fixed by telling the agent explicitly that it was continuing its own point, capping turn length, and truncating quoted evidence in the re-sent transcript while keeping it in full in the record.',
          'With the model’s hidden reasoning (“thinking”) on, each turn produced 4,000–6,000 tokens and a 15-turn debate took over 450 seconds. With it off, the same debate took 89 seconds and turns stayed under 700 tokens. I switched it off for speed. Whether thinking improves the arbitrator’s verdicts is the next thing to measure; the system has a setting to turn it on for the arbitrator alone.',
        ],
      },
      {
        heading: 'Limitations',
        paragraphs: [
          'Nineteen cases, all written by me, for two fictional professors. One run per configuration, so no variance estimate. A single model family. The labels are my judgement. A real evaluation would need more cases, written or labelled by people other than me, and repeated runs.',
        ],
      },
    ],
  },
  {
    id: 'grad-paddy',
    title: 'Grad Paddy',
    summary:
      'An agent that helps students find graduate programmes and plan applications. It keeps long sessions in durable storage and stops for the student’s approval before any action that writes data.',
    context: 'Google Cloud Rapid Agent Hackathon, 2026. Now being developed into a product at gradpaddy.com.',
    stack: 'Google ADK, Gemini, FastAPI, Firestore, Elasticsearch, Next.js',
    links: {
      github: 'https://github.com/olamideba/grad-paddy',
      live: 'https://gradpaddy.com',
      video: 'https://youtu.be/Je6jsfGuVA4',
    },
    sections: [
      {
        heading: 'What it is',
        paragraphs: [
          'A routing agent hands work to specialist agents: a larger Gemini model for reasoning and a smaller one for routine tasks. Programme search runs against an Elasticsearch index through MCP tools, so recommendations come from real programme data.',
          'When an agent pauses for the student, its state is saved to Firestore so the session can resume later. Tool calls that write data are intercepted and held until the student approves them, and the agent’s progress streams to the browser as it runs.',
        ],
      },
    ],
  },
  {
    id: 'cognito',
    title: 'Cognito',
    summary:
      'A voice-first study companion on the Gemini Live API. It talks a learner through a topic, asks Socratic questions, and can see their screen or webcam when they allow it.',
    context: 'Gemini Live Agent Hackathon, 2026',
    stack: 'Google ADK, Gemini Live API, FastAPI, WebSockets, Firestore, Cloud Run',
    links: {
      github: 'https://github.com/olamideba/cognito',
      live: 'https://cognito-lake-rho.vercel.app/',
      video: 'https://youtu.be/giShVfu26oE',
    },
    sections: [
      {
        heading: 'What it is',
        paragraphs: [
          'Audio and optional screen or webcam frames stream to a FastAPI backend over WebSockets, which runs an ADK agent on the Gemini Live API. The agent uses tools to set a session goal, keep time, generate quizzes and draw analogies, and sends typed events to the browser to render them.',
          'Most of the work was keeping a live session usable when the connection was not: reconnecting without duplicating audio, restoring the goal, timer and conversation from Firestore after a drop, and showing a clear recovery message instead of a dead screen.',
        ],
      },
    ],
  },
  {
    id: 'rag-chatbot',
    title: 'Astra: scholarly question answering with fine-tuned retrieval',
    summary:
      'My undergraduate thesis. A retrieval-augmented chatbot over the ACL Anthology, with BAAI/bge embedding models fine-tuned on synthetic question–passage pairs. Published in the Nigerian Journal of Technology.',
    context: 'Undergraduate thesis, 2024. Published 2026.',
    stack: 'Python, sentence-transformers, ChromaDB, LangChain, Mixtral, Streamlit',
    links: {
      github: 'https://github.com/olamideba/rag-chatbot-final',
      doi: 'https://doi.org/10.67358/njt.2026.5975',
    },
    sections: [
      {
        heading: 'What it is',
        paragraphs: [
          'The knowledge base is the ACL Anthology corpus, split into passages and indexed in a vector store. I generated synthetic question–passage pairs from the corpus, split them 70/15/15 for training, validation and test, and fine-tuned bge-small and bge-large on the training set. Mixtral generates answers from the retrieved passages.',
          'On the test split, fine-tuned bge-large found the correct passage first 88.9% of the time, against 73.0% for the base model. MRR@10 rose from 0.82 to 0.92. At k=10 both models are close to the ceiling (97.3% and 96.5%), so the gain is in ranking the right passage first, which is what matters most for the answer the generator writes.',
          'The paper measures retrieval only. It does not measure hallucination in the generated answers directly; that would be the obvious next study.',
        ],
      },
    ],
  },
  {
    id: 'nexr',
    title: 'NexR',
    summary:
      'Backend for a social media analytics platform: a modular FastAPI service with PostgreSQL, Redis caching, transactional email and file storage. I designed and built the API and data layer.',
    context: 'Client project, live',
    stack: 'FastAPI, PostgreSQL, Redis, Supabase',
    links: { live: 'https://nexrcore.com' },
  },
  {
    id: 'andus',
    title: 'Andus D’Great Schools',
    summary: 'Public website for a K–12 school in Ikorodu, Lagos.',
    context: 'Client project, live',
    stack: 'React, TypeScript',
    links: { live: 'https://www.andusdgreatschools.com/' },
  },
];
