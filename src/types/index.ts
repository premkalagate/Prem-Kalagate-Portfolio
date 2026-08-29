export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  tags: string[];
  category: 'Full Stack' | 'Frontend' | 'Tools' | 'Web App';
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  highlights: string[];
  stats?: { label: string; value: string }[];
}

export interface SkillItem {
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'languages' | 'tools';
  level: number; // 1-100
  iconName: string;
  color?: string;
  highlight?: boolean;
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  description?: string;
  badge?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  gradient: string;
  tagline?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  handle: string;
}
