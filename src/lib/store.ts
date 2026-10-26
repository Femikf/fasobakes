import { getDatabase } from './mongodb';
import { Product, Banner, INITIAL_BREADS, INITIAL_BANNERS } from './types';
import { ObjectId } from 'mongodb';

// In-memory fallback stores
let memoryProducts: Product[] = [...INITIAL_BREADS];
let memoryBanners: Banner[] = [...INITIAL_BANNERS];

/* ================= PRODUCTS ================= */
export async function getAllProducts(): Promise<Product[]> {
  const db = await getDatabase();
  if (db) {
    try {
      const collection = db.collection('products');
      const count = await collection.countDocuments();
      if (count === 0) {
        // Auto-seed MongoDB with initial products
        await collection.insertMany(INITIAL_BREADS as unknown as Record<string, unknown>[]);
      }
      const docs = await collection.find({}).sort({ order: 1 }).toArray();
      return docs.map((doc) => {
        const { _id, ...rest } = doc;
        return {
          ...rest,
          _id: _id ? _id.toString() : undefined,
          id: _id ? _id.toString() : doc.id,
        };
      }) as unknown as Product[];
    } catch (e) {
      console.warn('MongoDB fetch error, using in-memory store:', e);
    }
  }
  return memoryProducts.sort((a, b) => a.order - b.order);
}

export async function addProduct(product: Omit<Product, 'id' | '_id'>): Promise<Product> {
  const db = await getDatabase();
  const newProduct: Product = {
    ...product,
    createdAt: new Date().toISOString(),
  };

  if (db) {
    try {
      const collection = db.collection('products');
      const result = await collection.insertOne(newProduct as unknown as Record<string, unknown>);
      return {
        ...newProduct,
        id: result.insertedId.toString(),
      };
    } catch (e) {
      console.warn('MongoDB insert error, saving to memory:', e);
    }
  }

  const generatedId = 'prod-' + Date.now();
  const created = { ...newProduct, id: generatedId };
  memoryProducts.push(created);
  return created;
}

export async function updateProduct(id: string, updates: Partial<Product>): Promise<Product | null> {
  const db = await getDatabase();
  if (db) {
    try {
      const collection = db.collection('products');
      let filter: Record<string, unknown> = { id };
      try {
        if (ObjectId.isValid(id)) {
          filter = { $or: [{ _id: new ObjectId(id) }, { id }] };
        }
      } catch {
        // ignore
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { _id, id: _, ...fieldsToSet } = updates;
      await collection.updateOne(filter, { $set: fieldsToSet });
      const updated = await collection.findOne(filter);
      if (updated) {
        return { ...updated, id: updated._id.toString() } as unknown as Product;
      }
    } catch (e) {
      console.warn('MongoDB update error, updating memory:', e);
    }
  }

  const index = memoryProducts.findIndex((p) => p.id === id || p._id === id);
  if (index !== -1) {
    memoryProducts[index] = { ...memoryProducts[index], ...updates };
    return memoryProducts[index];
  }
  return null;
}

export async function deleteProduct(id: string): Promise<boolean> {
  const db = await getDatabase();
  if (db) {
    try {
      const collection = db.collection('products');
      let filter: Record<string, unknown> = { id };
      try {
        if (ObjectId.isValid(id)) {
          filter = { $or: [{ _id: new ObjectId(id) }, { id }] };
        }
      } catch {
        // ignore
      }
      const res = await collection.deleteOne(filter);
      return res.deletedCount > 0;
    } catch (e) {
      console.warn('MongoDB delete error:', e);
    }
  }

  const initialLen = memoryProducts.length;
  memoryProducts = memoryProducts.filter((p) => p.id !== id && p._id !== id);
  return memoryProducts.length < initialLen;
}

/* ================= BANNERS ================= */
export async function getAllBanners(): Promise<Banner[]> {
  const db = await getDatabase();
  if (db) {
    try {
      const collection = db.collection('banners');
      const count = await collection.countDocuments();
      if (count === 0) {
        // Auto-seed MongoDB with initial banners
        await collection.insertMany(INITIAL_BANNERS as unknown as Record<string, unknown>[]);
      }
      const docs = await collection.find({}).sort({ order: 1 }).toArray();
      return docs.map((doc) => {
        const { _id, ...rest } = doc;
        return {
          ...rest,
          _id: _id ? _id.toString() : undefined,
          id: _id ? _id.toString() : doc.id,
        };
      }) as unknown as Banner[];
    } catch (e) {
      console.warn('MongoDB fetch error for banners, using in-memory store:', e);
    }
  }
  return memoryBanners.sort((a, b) => a.order - b.order);
}

export async function addBanner(banner: Omit<Banner, 'id' | '_id'>): Promise<Banner> {
  const db = await getDatabase();
  const newBanner: Banner = {
    ...banner,
    createdAt: new Date().toISOString(),
  };

  if (db) {
    try {
      const collection = db.collection('banners');
      const result = await collection.insertOne(newBanner as unknown as Record<string, unknown>);
      return {
        ...newBanner,
        id: result.insertedId.toString(),
      };
    } catch (e) {
      console.warn('MongoDB insert error for banner:', e);
    }
  }

  const generatedId = 'ban-' + Date.now();
  const created = { ...newBanner, id: generatedId };
  memoryBanners.push(created);
  return created;
}

export async function updateBanner(id: string, updates: Partial<Banner>): Promise<Banner | null> {
  const db = await getDatabase();
  if (db) {
    try {
      const collection = db.collection('banners');
      let filter: Record<string, unknown> = { id };
      try {
        if (ObjectId.isValid(id)) {
          filter = { $or: [{ _id: new ObjectId(id) }, { id }] };
        }
      } catch {
        // ignore
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { _id, id: _, ...fieldsToSet } = updates;
      await collection.updateOne(filter, { $set: fieldsToSet });
      const updated = await collection.findOne(filter);
      if (updated) {
        return { ...updated, id: updated._id.toString() } as unknown as Banner;
      }
    } catch (e) {
      console.warn('MongoDB banner update error:', e);
    }
  }

  const index = memoryBanners.findIndex((b) => b.id === id || b._id === id);
  if (index !== -1) {
    memoryBanners[index] = { ...memoryBanners[index], ...updates };
    return memoryBanners[index];
  }
  return null;
}

export async function deleteBanner(id: string): Promise<boolean> {
  const db = await getDatabase();
  if (db) {
    try {
      const collection = db.collection('banners');
      let filter: Record<string, unknown> = { id };
      try {
        if (ObjectId.isValid(id)) {
          filter = { $or: [{ _id: new ObjectId(id) }, { id }] };
        }
      } catch {
        // ignore
      }
      const res = await collection.deleteOne(filter);
      return res.deletedCount > 0;
    } catch (e) {
      console.warn('MongoDB banner delete error:', e);
    }
  }

  const initialLen = memoryBanners.length;
  memoryBanners = memoryBanners.filter((b) => b.id !== id && b._id !== id);
  return memoryBanners.length < initialLen;
}
