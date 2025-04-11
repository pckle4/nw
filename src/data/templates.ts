
import { Template } from '@/types/resume';

export const templates: Template[] = [
  {
    id: 'modern',
    name: 'Modern',
    description: 'A clean and professional template with a modern touch',
    thumbnail: 'https://placehold.co/300x400/9b87f5/FFF?text=Modern',
    bgClass: 'bg-purple-gradient'
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'A minimalist design that puts content first',
    thumbnail: 'https://placehold.co/300x400/eee/333?text=Minimal',
    bgClass: 'bg-white'
  },
  {
    id: 'colorful',
    name: 'Colorful',
    description: 'Stand out with a vibrant and colorful template',
    thumbnail: 'https://placehold.co/300x400/0EA5E9/FFF?text=Colorful',
    bgClass: 'bg-blue-gradient'
  }
];
