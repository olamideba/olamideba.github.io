import { Post } from '../types';

export const posts: Post[] = [
  {
    id: 'parallax-agent-society',
    title: 'Building Parallax and deploying it on Alibaba Cloud',
    excerpt: 'Agent design, the failure modes I hit, and running the full stack on a single cloud VM with CI/CD.',
    platform: 'Medium',
    date: 'Jul 2026',
    url: 'https://olamideba.medium.com/what-if-we-build-for-the-overwhelmed-professor-91cfedadbf58',
  },
  {
    id: 'openclaw-cloud',
    title: 'Deploying OpenClaw taught me more about the cloud than OpenClaw',
    excerpt: 'Self-hosting an agent on free-tier cloud: VM provisioning, VPN access, SSH hardening and firewall rules.',
    platform: 'Medium',
    date: 'May 2026',
    url: 'https://olamideba.medium.com/deploying-openclaw-taught-me-more-about-the-cloud-than-openclaw-28a92f632839',
  },
];
