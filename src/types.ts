export interface Experience {
  company: string
  role: string
  location: string
  period: string
  description: string
  highlights: string[]
  metrics: Metric[]
  techStack: string[]
}

export interface Metric {
  value: string
  label: string
  sublabel: string
}

export interface Project {
  title: string
  techStack: string
  description: string
  highlights: string[]
  metrics: ProjectMetric[]
}

export interface ProjectMetric {
  value: string
  label: string
}

export interface Contribution {
  repo: string
  title: string
  description: string
  status: 'merged' | 'open'
  prNumber: string
  prUrl: string
  changes: string
  date: string
  icon: string
}

export interface Article {
  slug: string
  title: string
  tag: string
  date: string
  readTime: string
  excerpt: string
}

export interface SkillCategory {
  title: string
  skills: string[]
}

export interface ServiceCard {
  icon: string
  title: string
  description: string
  buttonText: string
  modalType: 'employment' | 'project' | 'collaboration'
}
