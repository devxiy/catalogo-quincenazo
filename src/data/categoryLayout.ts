import { CategoryLayoutKey } from '../types/catalog';

type CategoryLayoutConfig = {
  id: string;
  name: string;
  accentColor: string;
};

export const categoryLayoutConfig: Record<CategoryLayoutKey, CategoryLayoutConfig> = {
  Alimentos: {
    id: 'alimentos',
    name: 'Alimentos',
    accentColor: '#FF2600',
  },
  Bebidas: {
    id: 'bebidas',
    name: 'Bebidas',
    accentColor: '#25FF87',
  },
  Higiene: {
    id: 'higiene',
    name: 'Higiene',
    accentColor: '#FFB23E',
  },
  Limpieza: {
    id: 'limpieza',
    name: 'Limpieza',
    accentColor: '#41E9FF',
  },
  Hogar: {
    id: 'hogar',
    name: 'Hogar',
    accentColor: '#FFE95D',
  },
};

export const categoryLayoutOrder: CategoryLayoutKey[] = [
  'Alimentos',
  'Bebidas',
  'Higiene',
  'Limpieza',
  'Hogar',
];

