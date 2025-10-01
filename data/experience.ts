import { Experience } from "@/types";

export const experience: Experience[] = [
  {
    role: "Frontend Developer (Contractor)",
    company: "ANZ Banking Group",
    period: "2023 — Present",
    location: "Melbourne, Australia",
    description:
      "Designed and shipped production UIs for ANZ’s RWA platform, collaborating with backend and blockchain teams from discovery to release.",
    achievements: [
      "Delivered the end-to-end UI flows for stablecoin issuance and RWA tokenisation (corporate bonds, investment funds), including requests, multi-party approvals, marketplace listing, purchase/settlement, portfolio dashboards and payout tracking.",
      "Implemented API integrations that orchestrate blockchain actions on Sepolia and ANZ’s private chain, adding status polling with sensible retries and a consistent error model to make long-running transactions predictable.",
      "Contributed to the Svelte-to-React migration; introduced reusable components and custom hooks, adopted Zustand and TanStack Query to standardise state/data access and reduce duplicate requests.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Block Majority",
    period: "2023 - Present",
    location: "Melbourne, Australia",
    description:
      "Delivered multiple blockchain applications end-to-end—owning UI/UX and frontend, and coordinating smart-contract integration and deployment with the on-chain team.",
    achievements: [
      "Owned complete frontend delivery lifecycle for blockchain applications, from wireframes to production deployment",
      "Bridged technical gaps between UI/UX design and smart contract implementation teams",
      "Established code standards and component architecture patterns adopted across multiple blockchain projects",
      "Mentored junior developers on blockchain frontend patterns and decentralized application architecture",
    ],
  },
];
