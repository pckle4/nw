
import { Template } from '@/types/resume';

export const templates: Template[] = [
  {
    id: 'modern',
    name: 'Modern',
    description: 'A clean and professional template with a modern touch',
    thumbnail: '/svg/modern-template.svg',
    bgClass: 'bg-purple-gradient'
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'A minimalist design that puts content first',
    thumbnail: '/svg/minimal-template.svg',
    bgClass: 'bg-white'
  },
  {
    id: 'colorful',
    name: 'Colorful',
    description: 'Stand out with a vibrant and colorful template',
    thumbnail: '/svg/colorful-template.svg',
    bgClass: 'bg-blue-gradient'
  }
];
