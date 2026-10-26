const { MongoClient } = require('../node_modules/mongodb');
const fs = require('fs');
const path = require('path');

let uri = process.env.MONGODB_URI;
if (!uri) {
  try {
    const envFile = fs.readFileSync(path.join(__dirname, '../.env.local'), 'utf-8');
    const match = envFile.match(/MONGODB_URI=(.*)/);
    if (match) uri = match[1].trim();
  } catch (e) {
    // ignore
  }
}
if (!uri) {
  console.error('Please set MONGODB_URI in your environment or .env.local file');
  process.exit(1);
}

const client = new MongoClient(uri);

async function seed() {
  await client.connect();
  const db = client.db();
  console.log('Connected to Atlas DB:', db.databaseName);
  
  const prodColl = db.collection('products');
  const prodCount = await prodColl.countDocuments();
  console.log('Current products count:', prodCount);
  if (prodCount === 0) {
    const initialProducts = [
      {
        name: 'Artisanal Multigrain Loaf on Wooden Pedestal',
        category: 'breads',
        description: 'Master stone-hearth baked whole multigrain loaf encrusted with toasted sunflower seeds, golden flax, and honey oats. Pure Italian goodness in every slice.',
        weight: '500g Sliced Loaf',
        badge: '360° Studio Special',
        imageUrl: '/images/faso-bread-turntable.jpg',
        features: ['100% Whole Multigrain', 'Honey-Oat Seed Crust', 'Dawn 4 AM Dispatch', 'Zero Trans Fat'],
        isFeatured: true,
        order: 1,
        createdAt: new Date().toISOString()
      },
      {
        name: 'Premium Italian Plum Cake',
        category: 'cakes',
        description: 'Authentic Italian recipe master-baked to golden perfection with succulent raisins, candid fruits, and warm aromatic spices on an artisanal wooden stand.',
        weight: '500g / 1kg Festive Round',
        badge: 'Signature Special',
        imageUrl: '/images/faso-italian-plum-cake.png',
        features: ['Pure Italian Recipe', 'Rich California Raisins', 'No Artificial Preservatives', 'Pure Dairy Butter'],
        isFeatured: true,
        order: 2,
        createdAt: new Date().toISOString()
      },
      {
        name: 'FASO Cream Bun & Chocolate Cream Bun',
        category: 'buns',
        description: 'Soft pillow buns abundantly filled with velvety whipped cream and chocolate filling. Delight and nostalgia in every single bite.',
        weight: 'Single & Twin Packs',
        badge: 'Delight In Every Bite',
        imageUrl: '/images/faso-creative-cream-bun.png',
        features: ['Fresh Whipped Cream', 'Vanilla & Chocolate', 'Soft Cloud Brioche', 'Twin Snack Packs'],
        isFeatured: true,
        order: 3,
        createdAt: new Date().toISOString()
      },
      {
        name: 'FASO Crispy Milk Rusk',
        category: 'rusks',
        description: 'Double-baked crispy golden milk rusks enriched with wholesome milk and subtle cardamom aromatics. The ultimate tea-time companion.',
        weight: '300g / 500g Pack',
        badge: 'Chai Companion',
        imageUrl: '/images/faso-milk-rusk-pack.png',
        features: ['Double-Baked Crunch', 'Enriched Farm Milk', 'Fragrant Elaichi', 'Breakfast Essential'],
        isFeatured: true,
        order: 4,
        createdAt: new Date().toISOString()
      }
    ];
    await prodColl.insertMany(initialProducts);
    console.log('Seeded initial products successfully! Total:', initialProducts.length);
  }

  const banColl = db.collection('banners');
  const banCount = await banColl.countDocuments();
  console.log('Current banners count:', banCount);
  if (banCount === 0) {
    const initialBanners = [
      {
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
        order: 1,
        createdAt: new Date().toISOString()
      },
      {
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
        order: 2,
        createdAt: new Date().toISOString()
      },
      {
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
        order: 3,
        createdAt: new Date().toISOString()
      }
    ];
    await banColl.insertMany(initialBanners);
    console.log('Seeded initial banners successfully! Total:', initialBanners.length);
  }

  console.log('Collections summary in Atlas database:');
  const collections = await db.listCollections().toArray();
  for (const c of collections) {
    const count = await db.collection(c.name).countDocuments();
    console.log(c.name + ': ' + count + ' documents');
  }

  await client.close();
}

seed().catch(console.error);
