import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Token Bridge",
    category: "dApp",
    tech: "React • Next.js • TypeScript • Tailwind CSS • GraphQL",
    description: [
      "Owned the frontend for a cross-chain bridge. Planned user flows, designed the screens in Figma, and built the UI in React/Next.js with TypeScript",
      "Built a reusable component set with Tailwind CSS, responsive layouts and clear loading, error and empty states",
      "Integrated a GraphQL API (subgraph) to read indexed contract data such as balances, approvals and transfer status, using polling to keep the UI current",
      "Connected contract actions from the app: approve, initiate transfer, confirm. Added progress steps, network and chain checks, and an activity log so users can follow each step",
    ],
    year: "2024",
  },
  {
    title: "Block Majority",
    category: "Web App",
    tech: "Webflow + custom HTML/CSS/JavaScript",
    description: [
      "Overhauled Block Majority’s website, sharpening the story of its Web3 blockchain solutions with clearer structure and messaging",
      "Built in Webflow for speed and flexibility, extending it with custom JavaScript embeds to enable advanced interactivity and dynamic content",
      "Shipped a modern, user-centred interface with considered motion and intuitive navigation to spotlight the company’s Web3 offerings",
    ],
    year: "2023",
    url: "https://www.blockmajority.io",
  },
  {
    title: "AI Chat Assistant",
    category: "Web App",
    tech: "React • Next.js • TypeScript • Tailwind CSS",
    description: [
      "Designed and built the chatbot UI end to end for Australian Super. Planned user flows in Figma, set up Auth0 authentication, and implemented production React/TypeScript components",
      "Collaborated with one backend developer to define API contracts and integrate messaging endpoints, managing authenticated requests and robust error handling",
      "Implemented core features: session message history, document upload for context, and transcript downloads so users can save and reference conversations",
      "Focused on usability and trust for a financial service with responsive layouts, keyboard and screen-reader support, and clear loading, empty and error states",
    ],
    year: "2024",
  },
];
