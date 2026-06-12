import { Experience } from "../types";
import React from "react";

export const experience: Experience[] = [
  {
    id: "appslevel-ai",
    role: "Applied AI Engineer",
    company: "AppsLevel",
    period: "May 2025 – Present",
    description: [
      "Contributing to an AI-powered reinforcement-learning backend in FastAPI and MongoDB, with a RAG pipeline (pgvector + Sentence Transformers) that delivers personalized concept explanations, quizzes, and feedback.",
    ],
    type: "Work",
  },
  {
    id: "lendsqr-po",
    role: "Product Operations Officer",
    company: "Lendsqr",
    period: "Mar 2025 – Dec 2025",
    description: [
      "Architected an AI support system using RAG on 15,000+ tickets with Gemini embeddings and Supabase.",
      "Automated Play Store review collection and AI sentiment reporting, reducing manual work by ~50%.",
      "Manage product operations for 3+ fintech lenders with ₦2M+ in monthly loan volume.",
    ],
    type: "Work",
  },
  {
    id: "lendsqr-intern",
    role: "Software Engineering Intern",
    company: "Lendsqr",
    period: "Aug 2024 – Feb 2025",
    description: [
      "Built and self-hosted an internal RAG chatbot on Azure AI, replacing a paid GPT tool and saving ₦160,000+ in six months.",
      "Maintained 35+ private repos, enforcing branch protections and SonarQube code quality checks.",
      "Managed the API gateway (API Umbrella), standardising access and cleaning configs for 160+ users and services.",
    ],
    type: "Internship",
  },
  {
    id: "ecobank-intern",
    role: "Machine Learning Intern",
    company: "eProcess, Ecobank Transnational Inc",
    period: "June 2023 – Sept 2023",
    description: [
      "Built a salary prediction model in Scikit-learn with 91% R-squared.",
      "Developed a facial recognition prototype with OpenCV and Deepface, reaching ~70% test accuracy.",
      "Built an IBM Watson chatbot handling 3 transaction modes with full invalid-input handling.",
    ],
    type: "Internship",
  },
  {
    id: "nacos-lead",
    role: "Software Director",
    company: "NACOS (Student Association)",
    period: "2023 – 2024",
    description: [
      "Led a coding bootcamp for 150+ students.",
      "Authored 'Mastering Final Year Projects' guide, impacting 100+ students.",
      "Organized hackathons to bridge theoretical CS knowledge with practical coding skills."
    ],
    type: "Leadership",
  },
];
