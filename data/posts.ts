import { Post } from '../types';

// Writing — published essays and engineering write-ups.
export const posts: Post[] = [
  {
    id: "openclaw-cloud",
    title: "Deploying OpenClaw taught me more about the cloud than OpenClaw",
    excerpt:
      "A hands-on write-up on self-hosting the OpenClaw agent for free: an Oracle Cloud free-tier attempt that kept failing on capacity, then a 10-minute success on GCP — VM provisioning, Tailscale VPN, SSH hardening, and firewall rules. The deployment taught me more about cloud networking and security than the agent itself.",
    platform: "Medium",
    date: "May 2026",
    readTime: "6 min read",
    url: "https://olamideba.medium.com/deploying-openclaw-taught-me-more-about-the-cloud-than-openclaw-28a92f632839",
  },
];
