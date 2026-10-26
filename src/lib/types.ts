export interface Product {
  _id?: string;
  id?: string;
  name: string;
  category: 'breads' | 'buns' | 'cakes' | 'rusks' | 'other';
  description: string;
  weight?: string;
  badge?: string;
  price?: string;
  imageUrl: string;
  features?: string[];
  isFeatured?: boolean;
  isActive: boolean;
  order: number;
  createdAt?: string;
}

export interface Banner {
  _id?: string;
  id?: string;
  tagline: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageUrl: string;
  badge?: string;
  isActive: boolean;
  order: number;
  createdAt?: string;
}

export const INITIAL_BREADS: Product[] = [
  {
    id: 'prod-multigrain-pedestal',
    name: 'Artisanal Multigrain Loaf on Wooden Pedestal',
    category: 'breads',
    description: 'Master stone-hearth baked whole multigrain loaf encrusted with toasted sunflower seeds, golden flax, and honey oats. Pure Italian goodness in every slice.',
    weight: '500g Sliced Loaf',
    badge: '360° Studio Special',
    imageUrl: '/images/faso-bread-turntable.jpg',
    features: ['100% Whole Multigrain', 'Honey-Oat Seed Crust', 'Dawn 4 AM Dispatch', 'Zero Trans Fat'],
    isFeatured: true,
    isActive: true,
    order: 1
  },
  {
    id: 'prod-plum-1',
    name: 'Premium Italian Plum Cake',
    category: 'cakes',
    description: 'Authentic Italian recipe master-baked to golden perfection with succulent raisins, candid fruits, and warm aromatic spices on an artisanal wooden stand.',
    weight: '500g / 1kg Festive Round',
    badge: 'Pure Italian Goodness',
    imageUrl: '/images/faso-italian-plum-cake.png',
    features: ['Pure Italian Recipe', 'Rich California Raisins', 'Pure Butter Crumb', 'Oven Fresh Quality'],
    isFeatured: true,
    isActive: true,
    order: 1
  },
  {
    id: 'prod-plum-2',
    name: 'FASO Special Plum Cake Pouch',
    category: 'cakes',
    description: 'Hermetically fresh sealed festive plum cake packed with exquisite dry fruits, roasted cashews, and traditional spice essence. Baking delectable dreams in every bite.',
    weight: '400g Foil Pillow Pack',
    badge: 'Festive Delight',
    imageUrl: '/images/faso-plum-cake-pack.png',
    features: ['Hermetically Sealed', 'Loaded with Dry Fruits', 'ISO 22000 Certified', 'Long-Lasting Freshness'],
    isFeatured: true,
    isActive: true,
    order: 2
  },
  {
    id: 'prod-cake-cashew',
    name: 'Cashew Crowned Brownie Bakes',
    category: 'cakes',
    description: 'Batch-baked mini chocolate plum cakes crowned with hand-selected golden whole cashews straight from our Wayanad ovens.',
    weight: 'Pack of 6 / 12 Bakes',
    badge: 'Oven Warm Favorite',
    imageUrl: '/images/faso-fresh-baked-cakes.png',
    features: ['Whole Golden Cashews', 'Freshly Hearth-Baked', 'Rich Cocoa Crumb', 'Perfect Tea Snack'],
    isFeatured: true,
    isActive: true,
    order: 3
  },
  {
    id: 'prod-1',
    name: 'Sliced Brown Bread',
    category: 'breads',
    description: 'Wholesome, fiber-rich brown bread crafted with superior whole wheat flour. Soft, aromatic, and packed with everyday vitality.',
    weight: '400g / 800g',
    badge: 'Fiber Rich',
    imageUrl: '/images/sliced-brown-bread.png',
    features: ['100% Whole Wheat', 'High Dietary Fiber', 'Zero Trans Fat', 'Baked Daily'],
    isFeatured: true,
    isActive: true,
    order: 4
  },
  {
    id: 'prod-2',
    name: 'Sliced Long Bread',
    category: 'breads',
    description: 'Extra-length golden sandwich bread. Perfectly uniform slices ideal for cafes, bakeries, gourmet sandwiches, and large families.',
    weight: '700g Jumbo Loaf',
    badge: 'Café Special',
    imageUrl: '/images/sliced-long-bread.png',
    features: ['Golden Crust', 'Jumbo Slices', 'Stays Soft Longer', 'ISO 22000 Certified'],
    isFeatured: true,
    isActive: true,
    order: 5
  },
  {
    id: 'prod-3',
    name: 'Sliced White Bread',
    category: 'breads',
    description: 'Classic milk-soft sliced bread with an irresistibly tender crumb. The gold standard for morning toasts, spreads, and sandwiches.',
    weight: '400g / 800g',
    badge: 'Customer Favorite',
    imageUrl: '/images/sliced-white-bread.png',
    features: ['Pillow-Soft Crumb', 'Enriched with Milk', 'Great for Toasts', 'Fresh Everyday'],
    isFeatured: true,
    isActive: true,
    order: 6
  },
  {
    id: 'prod-cream-bun',
    name: 'FASO Cream Bun & Chocolate Cream Bun',
    category: 'buns',
    description: 'Soft pillow buns abundantly filled with velvety whipped cream and chocolate filling. Delight and nostalgia in every single bite.',
    weight: 'Single & Twin Packs',
    badge: 'Delight in Every Bite',
    imageUrl: '/images/faso-creative-cream-bun.png',
    features: ['Rich Whipped Cream', 'Melt-in-Mouth Brioche Bun', 'Vanilla & Chocolate Flavors', 'Favorite Tea Snack'],
    isFeatured: true,
    isActive: true,
    order: 7
  },
  {
    id: 'prod-milk-rusk',
    name: 'FASO Crispy Milk Rusk',
    category: 'rusks',
    description: 'Double-baked crispy golden milk rusks enriched with wholesome milk and subtle cardamom aromatics. The ultimate tea-time companion.',
    weight: '300g / 500g Pack',
    badge: 'Chai Companion',
    imageUrl: '/images/faso-milk-rusk-pack.png',
    features: ['Double-Baked Golden Crisp', 'Enriched with Farm Milk', 'Subtle Elaichi Fragrance', 'Long-Lasting Crunch'],
    isFeatured: true,
    isActive: true,
    order: 8
  },
  {
    id: 'prod-4',
    name: 'Golden Brioche & Butter Buns',
    category: 'buns',
    description: 'Melt-in-mouth soft brioche dinner rolls and sweet butter buns, freshly baked to an enticing golden glaze.',
    weight: '6 pcs Pack',
    badge: 'Melt-In-Mouth',
    imageUrl: '/images/product-buns.jpg',
    features: ['Pure Creamery Butter', 'Golden Glaze', 'Puff Soft Texture'],
    isFeatured: true,
    isActive: true,
    order: 9
  },
  {
    id: 'prod-6',
    name: 'Cardamom Tea Rusks & Butter Biscuits',
    category: 'rusks',
    description: 'Double-baked crispy aromatic cardamom rusks made for the quintessential morning and evening tea pairing.',
    weight: '300g / 500g Box',
    badge: 'Chai Special',
    imageUrl: '/images/product-rusk.jpg',
    features: ['Double Baked Crunch', 'Fragrant Elaichi', 'Authentic Recipe'],
    isFeatured: true,
    isActive: true,
    order: 10
  }
];

export const INITIAL_BANNERS: Banner[] = [
  {
    id: 'ban-1',
    tagline: 'Wayanad Master Baker | Premium Breads & Delicacies',
    title: 'Baking Delectable Dreams Every Sunrise',
    subtitle: 'From wholesome fiber-rich brown breads to soft golden bakery favorites, we craft daily nourishment with premium ingredients and unmatched love.',
    ctaText: 'Explore Artisan Breads',
    ctaLink: '#products',
    secondaryCtaText: 'Our Crafting Story',
    secondaryCtaLink: '#about',
    imageUrl: '/images/breads-group.png',
    badge: 'Oven Fresh Everyday',
    isActive: true,
    order: 1
  },
  {
    id: 'ban-2',
    tagline: 'Signature Italian Masterpiece',
    title: 'Pure Italian Goodness: Premium Italian Plum Cake',
    subtitle: 'Handcrafted with succulent raisins, velvety butter crumb, and authentic Italian baking tradition. Indulge in perfection.',
    ctaText: 'Order Plum Cake',
    ctaLink: '#contact',
    secondaryCtaText: 'View Cake Collection',
    secondaryCtaLink: '#products',
    imageUrl: '/images/faso-italian-plum-cake.png',
    badge: 'Pure Italian Goodness',
    isActive: true,
    order: 2
  },
  {
    id: 'ban-3',
    tagline: 'Direct Dawn Dispatch Across Wayanad',
    title: 'Dedicated Delivery Fleet Supplying 500+ Outlets',
    subtitle: 'Our Ashok Leyland fleet rolls out at 4:00 AM every morning from 6th Mile Anjukunnu, bringing fresh baked goods to stores across Kerala.',
    ctaText: 'Wholesale Inquiry',
    ctaLink: '#contact',
    secondaryCtaText: 'Our Process & Fleet',
    secondaryCtaLink: '#process',
    imageUrl: '/images/faso-delivery-trucks.png',
    badge: '50+ Delivery Vehicles',
    isActive: true,
    order: 3
  }
];
