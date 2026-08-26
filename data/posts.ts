import { Post } from '../types';

// Writing — published essays and engineering write-ups.
export const posts: Post[] = [
  {
    id: "parallax-agent-society",
    title: "Building Parallax, and shipping it live on Alibaba Cloud, for the Qwen Cloud Global AI Hackathon",
    excerpt: "An agent society adopting the Multi Agent Debate Framework to help professors, faculty members, and research labs filter out the noise in student outreach emails. Covers agent design, the failure modes hit along the way, and deploying the full stack on Alibaba Cloud with Tailscale-secured SSH, Nginx, and CI/CD over the tailnet.",
    platform: "Medium",
    date: "Jul 2026",
    readTime: "9 min read",
    url: "https://olamideba.medium.com/what-if-we-build-for-the-overwhelmed-professor-91cfedadbf58",
  },
  {
    id: "openclaw-cloud",
    title: "Deploying OpenClaw taught me more about the cloud than OpenClaw",
    excerpt:
      "A hands-on write-up on self-hosting the OpenClaw agent for free: an Oracle Cloud free-tier attempt that kept failing on capacity, then a 10-minute success on GCP covering VM provisioning, Tailscale VPN, SSH hardening, and firewall rules. The deployment taught me more about cloud networking and security than the agent itself.",
    platform: "Medium",
    date: "May 2026",
    readTime: "6 min read",
    url: "https://olamideba.medium.com/deploying-openclaw-taught-me-more-about-the-cloud-than-openclaw-28a92f632839",
  },
];
