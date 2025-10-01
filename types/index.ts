export interface Project {
  title: string;
  category: string;
  tech: string;
  description: string | string[];
  year: string;
  url?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}
