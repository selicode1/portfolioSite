export interface Skill {
  name: string;
  level: number;
  category: 'development' | 'design';
}

export const skills: Skill[] = [
  // Development Skills
  {
    name: 'JavaScript',
    level: 90,
    category: 'development'
  },
  {
    name: 'React',
    level: 85,
    category: 'development'
  },
  {
    name: 'TypeScript',
    level: 80,
    category: 'development'
  },
  {
    name: 'Node.js',
    level: 75,
    category: 'development'
  },
  {
    name: 'HTML/CSS',
    level: 95,
    category: 'development'
  },
  {
    name: 'Python',
    level: 65,
    category: 'development'
  },
  
  // Design Skills
  {
    name: 'UI/UX Design',
    level: 90,
    category: 'design'
  },
  {
    name: 'Adobe Photoshop',
    level: 85,
    category: 'design'
  },
  {
    name: 'Adobe Illustrator',
    level: 80,
    category: 'design'
  },
  {
    name: 'Figma',
    level: 95,
    category: 'design'
  },
  {
    name: 'Brand Design',
    level: 75,
    category: 'design'
  },
  {
    name: 'Motion Graphics',
    level: 65,
    category: 'design'
  }
];