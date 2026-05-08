import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'living-room',
    name: 'Living Room',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000',
    description: 'Elegance for your gathering space.'
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=1000',
    description: 'Serenity and comfort combined.'
  },
  {
    id: 'dining',
    name: 'Dining',
    image: 'https://images.unsplash.com/photo-1617806118233-f8e1374d2f9c?auto=format&fit=crop&q=80&w=1000',
    description: 'Gather around sophisticated design.'
  },
  {
    id: 'office',
    name: 'Office',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1000',
    description: 'Productivity in a refined environment.'
  }
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Velvet Meridian Sofa',
    category: 'Living Room',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1000',
    description: 'Handcrafted velvet sofa with brushed gold legs.'
  },
  {
    id: '2',
    name: 'Marble Heirloom Table',
    category: 'Dining',
    price: 3800,
    image: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5db?auto=format&fit=crop&q=80&w=1000',
    description: 'Italian Carrara marble top with a sculptural base.'
  },
  {
    id: '3',
    name: 'Cloud Dream Bed',
    category: 'Bedroom',
    price: 5200,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1000',
    description: 'Fully upholstered king-sized bed with memory foam support.'
  },
  {
    id: '4',
    name: 'Executive Walnut Desk',
    category: 'Office',
    price: 2900,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=1000',
    description: 'Solid walnut desk with integrated cable management.'
  }
];
