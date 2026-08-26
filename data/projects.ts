import { Project } from '../types';

// Three projects are deliberately expanded into stories. The rest remain
// concise entries so the work is indexed without implying equal depth.
export const projects: Project[] = [
  // ── Category A — AI / ML Engineering ────────────────────────────────────
  {
    id: "parallax",
    title: "Parallax",
    description:
      "An agent society adopting the Multi Agent Debate Framework to help professors, faculty members, and research labs filter out the noise in student outreach emails.",
    category: "ai-ml",
    status: "Qwen Cloud Global AI Hackathon · 2026",
    featured: true,
    narrative: {
      challenge: "Faculty inboxes need a way to separate serious outreach from spam without silently losing a candidate who deserves review.",
      built: "A Gatekeeper routes uncertain cases to a reviewable queue, then five agents debate each candidate over a shared transcript. The final verdict includes receipts from the professor's publications, and no email sends without human approval.",
      learned: "An agentic workflow needs an audit trail. A verdict is more useful when a professor can replay the reasoning and decide what happens next.",
    },
    highlights: [
      "Gatekeeper filters spam before it costs a debate; rejections go to a reviewable queue",
      "Five agents debate each candidate over a shared transcript, ending in an Arbitrator's verdict.",
      "Every claim is grounded in a receipt from the professor's own publications, never hallucinated.",
      "Professors replay the debate in a pixel-art seminar room with a synthesized voice per agent.",
      "No email sends without explicit human approval."
    ],
    tags: ["Langraph", "Qwen", "FastAPI", "Supabase", "Next.js 14", "Multi-agent debate", "Alibaba Cloud"],
    links: {
      github: "https://github.com/olamideba/parallax",
      live: "https://parallax-five-chi.vercel.app",
      devpost: "https://devpost.com/software/parallax-walxpi",
      video: "https://youtu.be/wA0PStZ8JVU",
    },
  },
  {
    id: "grad-paddy",
    title: "Grad Paddy",
    description:
      "An AI agent that helps prospective grad students discover programs and navigate applications, built as a session-aware multi-agent system with human-in-the-loop checkpoints.",
    category: "ai-ml",
    status: "Google Cloud Rapid Agent Hackathon · 2026",
    featured: true,
    availability: "Currently being productionized for consumer usage at gradpaddy.com.",
    narrative: {
      challenge: "Graduate-school guidance has to keep a student's context intact while making program recommendations they can inspect and act on.",
      built: "A session-aware multi-agent system with a PersistentChatAgent wrapper, human-in-the-loop checkpoints, Elastic MCP program search, and a FastAPI and Next.js application stack.",
      learned: "Durable sessions and explicit checkpoints make an agent easier to trust when the decision has real consequences for the person using it.",
    },
    highlights: [
      "Session-aware multi-agent architecture with a custom PersistentChatAgent wrapper for durable chat sessions.",
      "Human-in-the-loop checkpoints and Elastic MCP tools for grounded program search.",
      "FastAPI backend (Google ADK, ag_ui_adk, Gemini, Firestore) with a Next.js 14 frontend.",
    ],
    tags: ["Google ADK", "Gemini", "FastAPI", "Firestore", "Next.js 14", "Multi-agent", "MCP"],
    links: {
      github: "https://github.com/olamideba/grad-paddy",
      live: "https://gradpaddy.com",
      devpost: "https://devpost.com/software/grad-paddy",
      video: "https://youtu.be/Je6jsfGuVA4",
    },
  },
  {
    id: "cognito",
    title: "Cognito",
    description:
      "A real-time, voice-and-vision AI tutor that scores and surfaces a student's 'flow state' live during a session.",
    category: "ai-ml",
    status: "Gemini Live Agent Hackathon · 2026",
    featured: true,
    narrative: {
      challenge: "A real-time tutor is only useful when its voice and vision session survives the messy parts of a live connection.",
      built: "A Gemini Live API tutor on FastAPI and Cloud Run, with WebSocket streaming, structured error envelopes, and a dismissible recovery banner.",
      learned: "Realtime reliability is state management: reconnects, audio ownership, and session hydration are product behavior, not edge cases.",
    },
    highlights: [
      "Built on the Gemini Live API with WebSocket streaming over FastAPI and Cloud Run.",
      "Hardened the realtime layer: fixed reconnection race conditions, audio duplication, and stale session hydration.",
      "Structured error envelopes plus a dismissible UI banner to gracefully handle intermittent APIError 1008/1011.",
    ],
    tags: ["Gemini Live API", "WebSocket", "FastAPI", "Cloud Run", "Firestore", "Multimodal"],
    links: {
      github: "https://github.com/olamideba/cognito",
      live: "https://cognito-lake-rho.vercel.app/",
      video: "https://youtu.be/giShVfu26oE",
    },
  },
  {
    id: "tiny-aya",
    title: "Tiny Aya Expedition: Cohere Labs",
    description:
      "Multilingual LLM safety research probing how romanized, low-resource scripts affect model robustness under adversarial prompting.",
    category: "ai-ml",
    status: "Research · Cohere Labs",
    highlights: [
      "Studied adversarial prompting in romanized multilingual scripts and its effect on model robustness.",
      "Direct signal toward my interest in multilingual, low-resource LLMs; research-oriented rather than a deployed product.",
    ],
    tags: ["LLM Safety", "Multilingual", "Adversarial Prompting", "Research"],
    links: {
      github: "https://github.com/manaswithasunkara/AI_Safety_Adversersial_Prompting",
      certificate: "https://credsverse.com/credentials/6b64060a-e45b-46d3-aa53-8049a68279c0",
    },
  },
  {
    id: "rag-chatbot",
    title: "RAG Scholarly Research Chatbot",
    description:
      "A retrieval-augmented system that answers scholarly-research queries over academic sources, built to reduce hallucination in academic settings. My undergraduate final-year project and first research manuscript.",
    category: "ai-ml",
    status: "Published · NIJOTECH",
    featured: true,
    narrative: {
      challenge: "Academic answers need evidence, not plausible language. The hard part was making retrieval quality visible and measurable.",
      built: "Fine-tuned BAAI/bge-large embeddings over the ACL Anthology and used vector retrieval to ground scholarly answers.",
      learned: "Retrieval needs its own evaluation. Measuring the retrieval layer made the improvement against baseline LLM answers concrete.",
    },
    highlights: [
      "Fine-tuned BAAI/bge-large embeddings over the ACL Anthology with vector-based retrieval.",
      "97% retrieval accuracy and a 15% reduction in hallucination versus baseline LLM responses.",
    ],
    metrics: {
      "Retrieval accuracy": "97%",
      "Hallucination": "−15%",
    },
    tags: ["RAG", "Embeddings", "Vector Search", "Python"],
    links: {
      github: "https://github.com/olamideba/rag-chatbot-final",
      live: "https://huggingface.co/spaces/olamideba/astra",
      doi: "https://doi.org/10.67358/njt.2026.5975"
    },
  },

  // ── Category B — Full-Stack & Product Engineering ───────────────────────
  {
    id: "nexr",
    title: "NexR",
    description:
      'Backend for a unified social media analytics platform, "The Forbes of Social Media." I designed and built the API and data layer: modular FastAPI monolith, PostgreSQL, Redis caching, transactional email via Mailgun, and file storage through Supabase. (Frontend handled separately by a dedicated engineer.)',
    category: "full-stack",
    status: "Live",
    tags: ["FastAPI", "PostgreSQL", "Redis", "Mailgun", "Supabase", "Render", "Python"],
    links: {
      live: "https://nexrcore.com",
    },
    privateRepo: true,
  },
  {
    id: "andus",
    title: "Andus D'Great Schools",
    description:
      "A public-facing site for a private school, kindergarten through secondary, in Ikorodu, Lagos; a real deployed client project and my alma mater.",
    category: "full-stack",
    status: "Live",
    tags: ["React", "TypeScript"],
    links: {
      live: "https://www.andusdgreatschools.com/",
    },
  },
  {
    id: "sura",
    title: "Sura",
    description:
      "An e-commerce/brand site for a modest-fashion label. I contributed primarily the backend and data layer.",
    category: "full-stack",
    status: "Live",
    tags: ["React", "Supabase"],
    links: {
      live: "https://theofficialsura.com/",
    },
  },
];
