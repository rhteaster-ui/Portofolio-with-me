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
  }[];
}

export interface Person {
  name: string;
  handle: string;
  avatar: string; // fallback if image fails, let's make neat custom visual references
  role: string;
}

export interface Community {
  name: string;
  title: string;
  tagline: string;
  image: string;
  url?: string;
}
