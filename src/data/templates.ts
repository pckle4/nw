
import { Template } from '@/types/resume';

export const templates: Template[] = [
  {
    id: 'modern',
    name: 'Modern',
    description: 'A clean and professional template with a modern touch',
    thumbnail: '/svg/modern-template.svg',
    bgClass: 'bg-gradient-to-br from-purple-600 to-blue-500'
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'A minimalist design that puts content first',
    thumbnail: '/svg/minimal-template.svg',
    bgClass: 'bg-gradient-to-tr from-gray-50 to-gray-100 border border-gray-200'
  },
  {
    id: 'colorful',
    name: 'Colorful',
    description: 'Stand out with a vibrant and colorful template',
    thumbnail: '/svg/colorful-template.svg',
    bgClass: 'bg-gradient-to-r from-blue-500 to-cyan-400'
  }
];
