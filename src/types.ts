export interface Project {
  id: string;
  name: string;
  category: "Productivity" | "AI Tools" | "Utilities" | "Archive Experiments";
  url: string;
  description: string;
  problem: string;
  exploration: string;
  outcome: string;
  ecosystem: string[];
}

export interface JourneyStep {
  phase: "Curiosity" | "Learning" | "Exploration" | "Experimentation" | "Building";
  title: string;
  subtitle: string;
  description: string;
  techKeywords: string[];
}

export interface EcosystemGroup {
  category: "AI Tools" | "Builders" | "Infrastructure" | "Environment";
  items: {
    name: string;
    description: string;
    iconName: string;
    logo?: string;
  }[];
}

export interface SocialLink {
  type: "github" | "telegram" | "whatsapp" | "tiktok" | "email" | "instagram" | "channel";
  label: string;
  url: string;
}

export interface Person {
  name: string;
  handle: string;
  avatar?: string;
  role: string;
  socials?: SocialLink[];
}

export interface Community {
  name: string;
  title: string;
  tagline: string;
  image: string;
  url?: string;
  status?: string;
}
