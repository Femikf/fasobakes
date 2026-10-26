'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Product, Banner } from '@/lib/types';
import styles from './dashboard.module.css';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'products' | 'banners' | 'settings'>('products');
  const [authChecked, setAuthChecked] = useState(false);

  const [products, setProducts] = useState<Product[]>([]);
  const [banners, setBanners] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  // New Product form state
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: 'breads' as Product['category'],
    description: '',
    weight: '',
    badge: '',
    imageUrl: '/images/breads-group.png',
    features: 'Whole Grain, Fresh Daily',
  });

  // New Banner form state
  const [newBanner, setNewBanner] = useState({
    tagline: 'Artisanal Bakery & Confectionery',
    title: '',
    subtitle: '',
    ctaText: 'Explore Products',
    ctaLink: '#products',
    secondaryCtaText: 'Contact Bakery',
    secondaryCtaLink: '#contact',
    imageUrl: '/images/hero-bg.jpg',
    badge: 'Limited Special',
  });

  // Check auth & fetch data
  useEffect(() => {
    async function init() {
      try {
        const authRes = await fetch('/api/auth');
        const authData = await authRes.json();
        if (!authData.authenticated) {
          router.push('/admin');
          return;
        }
        setAuthChecked(true);

        const [prodRes, banRes] = await Promise.all([
          fetch('/api/products'),
          fetch('/api/banners'),
        ]);

        if (prodRes.ok) setProducts(await prodRes.json());
        if (banRes.ok) setBanners(await banRes.json());
      } catch (e) {
        console.error('Failed to load dashboard data:', e);
      } finally {
        setLoading(false);
      }
    }

    init();
  }, [router]);

  // Logout handler
  const handleLogout = async () => {
    await fetch('/api/auth', { method: 'DELETE' });
    router.push('/admin');
  };

  // Upload handler helper
  const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>, target: 'product' | 'banner') => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (res.ok && data.url) {
        if (target === 'product') {
          setNewProduct((prev) => ({ ...prev, imageUrl: data.url }));
        } else {
          setNewBanner((prev) => ({ ...prev, imageUrl: data.url }));
        }
      } else {
        alert('Upload failed: ' + (data.error || 'Server error'));
      }
    } catch {
      alert('Upload failed. Check file format.');
    } finally {
      setUploading(false);
    }
  };

  // Add Product
  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const featuresArr = newProduct.features.split(',').map((f) => f.trim()).filter(Boolean);
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...newProduct,
          features: featuresArr,
          isActive: true,
          order: products.length + 1,
        }),
      });

      if (res.ok) {
        const created = await res.json();
        setProducts([...products, created]);
        setNewProduct({
          name: '',
          category: 'breads',
          description: '',
          weight: '',
          badge: '',
          imageUrl: '/images/breads-group.png',
          features: 'Whole Grain, Fresh Daily',
        });
        alert('Product added successfully!');
      }
    } catch {
      alert('Failed to add product');
    }
  };

  // Toggle Product active status
  const toggleProductActive = async (prod: Product) => {
    const id = prod.id || prod._id;
    if (!id) return;
    try {
      const res = await fetch('/api/products', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, isActive: !prod.isActive }),
      });
      if (res.ok) {
        setProducts(products.map((p) => ((p.id === id || p._id === id) ? { ...p, isActive: !p.isActive } : p)));
      }
    } catch {
      alert('Failed to update status');
    }
  };

  // Delete Product
  const handleDeleteProduct = async (prod: Product) => {
    const id = prod.id || prod._id;
    if (!id || !confirm(`Delete "${prod.name}"?`)) return;
    try {
      const res = await fetch(`/api/products?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setProducts(products.filter((p) => p.id !== id && p._id !== id));
      }
    } catch {
      alert('Failed to delete product');
    }
  };

  // Add Banner
  const handleAddBanner = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/banners', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...newBanner,
          isActive: true,
          order: banners.length + 1,
        }),
      });

      if (res.ok) {
        const created = await res.json();
        setBanners([...banners, created]);
        setNewBanner({
          tagline: 'Artisanal Bakery & Confectionery',
          title: '',
          subtitle: '',
          ctaText: 'Explore Products',
          ctaLink: '#products',
          secondaryCtaText: 'Contact Bakery',
          secondaryCtaLink: '#contact',
          imageUrl: '/images/hero-bg.jpg',
          badge: 'Limited Special',
        });
        alert('Banner added successfully!');
      }
    } catch {
      alert('Failed to add banner');
    }
  };

  // Toggle Banner Active
  const toggleBannerActive = async (banner: Banner) => {
    const id = banner.id || banner._id;
    if (!id) return;
    try {
      const res = await fetch('/api/banners', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, isActive: !banner.isActive }),
      });
      if (res.ok) {
        setBanners(banners.map((b) => ((b.id === id || b._id === id) ? { ...b, isActive: !b.isActive } : b)));
      }
    } catch {
      alert('Failed to update banner status');
    }
  };

  // Delete Banner
  const handleDeleteBanner = async (banner: Banner) => {
    const id = banner.id || banner._id;
    if (!id || !confirm(`Delete banner "${banner.title}"?`)) return;
    try {
      const res = await fetch(`/api/banners?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setBanners(banners.filter((b) => b.id !== id && b._id !== id));
      }
    } catch {
      alert('Failed to delete banner');
    }
  };

  if (!authChecked || loading) {
    return (
      <div className={styles.dashboard} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: 'var(--secondary)' }}>
          Loading FASO Bakes Admin Panel...
        </p>
      </div>
    );
  }

  return (
    <div className={styles.dashboard}>
      {/* Top Header */}
      <header className={styles.topBar}>
        <div className={`container ${styles.topBarInner}`}>
          <div className={styles.brandGroup}>
            <Image src="/images/logo.png" alt="FASO Bakes" width={100} height={42} priority />
            <span className={styles.adminBadge}>Admin CMS</span>
          </div>

          <div className={styles.topActions}>
            <Link href="/" target="_blank" className={styles.viewSiteBtn}>
              <span>🌐</span>
              <span>View Live Website</span>
            </Link>

            <button onClick={handleLogout} className={styles.logoutBtn}>
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className={`container ${styles.mainContent}`}>
        {/* Tab Navigation */}
        <div className={styles.tabNav}>
          <button
            className={`${styles.tabBtn} ${activeTab === 'products' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('products')}
          >
            🥖 Products ({products.length})
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === 'banners' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('banners')}
          >
            🎨 Hero Banners ({banners.length})
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === 'settings' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            ⚙️ Deployment & Database
          </button>
        </div>

        {/* ================= PRODUCTS TAB ================= */}
        {activeTab === 'products' && (
          <div>
            {/* Create Product Form */}
            <div className={styles.panelCard}>
              <h2 className={styles.panelTitle}>Add New Bakery Product</h2>
              <form onSubmit={handleAddProduct}>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Product Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Garlic Herb Sourdough"
                      value={newProduct.name}
                      onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Category *</label>
                    <select
                      value={newProduct.category}
                      onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value as Product['category'] })}
                      className={styles.select}
                    >
                      <option value="breads">Artisan Breads</option>
                      <option value="buns">Buns & Rolls</option>
                      <option value="cakes">Cakes & Pastries</option>
                      <option value="rusks">Tea Rusks & Cookies</option>
                      <option value="other">Other Specialties</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Weight / Size</label>
                    <input
                      type="text"
                      placeholder="e.g. 400g / 800g"
                      value={newProduct.weight}
                      onChange={(e) => setNewProduct({ ...newProduct, weight: e.target.value })}
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Badge Tag</label>
                    <input
                      type="text"
                      placeholder="e.g. Best Seller / New Arrival"
                      value={newProduct.badge}
                      onChange={(e) => setNewProduct({ ...newProduct, badge: e.target.value })}
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.formGrid} style={{ marginTop: '16px' }}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Image Path / URL</label>
                    <input
                      type="text"
                      value={newProduct.imageUrl}
                      onChange={(e) => setNewProduct({ ...newProduct, imageUrl: e.target.value })}
                      className={styles.input}
                    />
                    <div style={{ marginTop: '8px' }}>
                      <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Or Upload Image: </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, 'product')}
                        style={{ fontSize: '0.82rem' }}
                      />
                      {uploading && <span style={{ fontSize: '0.8rem', color: 'var(--primary)' }}> Uploading...</span>}
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Key Highlights (comma-separated)</label>
                    <input
                      type="text"
                      placeholder="Whole Grain, No Preservatives, Daily Baked"
                      value={newProduct.features}
                      onChange={(e) => setNewProduct({ ...newProduct, features: e.target.value })}
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.formGroup} style={{ marginTop: '16px' }}>
                  <label className={styles.label}>Description</label>
                  <textarea
                    placeholder="Short enticing summary of the product texture, ingredients, and taste..."
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                    className={styles.textarea}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ marginTop: '20px' }}>
                  + Add Product to Website
                </button>
              </form>
            </div>

            {/* Existing Products Grid */}
            <h2 className={styles.panelTitle} style={{ marginBottom: '20px' }}>
              Current Active & Inactive Products ({products.length})
            </h2>

            <div className={styles.itemsGrid}>
              {products.map((prod) => (
                <div key={prod.id || prod._id} className={styles.itemCard}>
                  <div className={styles.itemHeader}>
                    <span className={`${styles.itemBadge} ${prod.isActive ? styles.badgeActive : styles.badgeInactive}`}>
                      {prod.isActive ? 'Active on Site' : 'Hidden'}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      {prod.category}
                    </span>
                  </div>

                  <Image
                    src={prod.imageUrl}
                    alt={prod.name}
                    width={200}
                    height={160}
                    className={styles.itemImagePreview}
                  />

                  <h3 className={styles.itemName}>{prod.name}</h3>
                  <p className={styles.itemDesc}>{prod.description}</p>

                  <div className={styles.itemActions}>
                    <button onClick={() => toggleProductActive(prod)} className={styles.toggleBtn}>
                      {prod.isActive ? 'Hide' : 'Activate'}
                    </button>
                    <button onClick={() => handleDeleteProduct(prod)} className={styles.deleteBtn}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= BANNERS TAB ================= */}
        {activeTab === 'banners' && (
          <div>
            <div className={styles.panelCard}>
              <h2 className={styles.panelTitle}>Add Dynamic Hero Banner (Offers / Festivals)</h2>
              <form onSubmit={handleAddBanner}>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Headline Title *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Diwali Sweet & Bread Delights"
                      value={newBanner.title}
                      onChange={(e) => setNewBanner({ ...newBanner, title: e.target.value })}
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Tagline</label>
                    <input
                      type="text"
                      placeholder="e.g. Festival Special Offer"
                      value={newBanner.tagline}
                      onChange={(e) => setNewBanner({ ...newBanner, tagline: e.target.value })}
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Badge</label>
                    <input
                      type="text"
                      placeholder="e.g. Limited Festive Edition"
                      value={newBanner.badge}
                      onChange={(e) => setNewBanner({ ...newBanner, badge: e.target.value })}
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Banner Image Path / URL</label>
                    <input
                      type="text"
                      value={newBanner.imageUrl}
                      onChange={(e) => setNewBanner({ ...newBanner, imageUrl: e.target.value })}
                      className={styles.input}
                    />
                    <div style={{ marginTop: '8px' }}>
                      <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Or Upload: </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, 'banner')}
                        style={{ fontSize: '0.82rem' }}
                      />
                    </div>
                  </div>
                </div>

                <div className={styles.formGroup} style={{ marginTop: '16px' }}>
                  <label className={styles.label}>Subtitle Text</label>
                  <textarea
                    placeholder="Short description of the special offer..."
                    value={newBanner.subtitle}
                    onChange={(e) => setNewBanner({ ...newBanner, subtitle: e.target.value })}
                    className={styles.textarea}
                  />
                </div>

                <div className={styles.formGrid} style={{ marginTop: '16px' }}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Button Text</label>
                    <input
                      type="text"
                      value={newBanner.ctaText}
                      onChange={(e) => setNewBanner({ ...newBanner, ctaText: e.target.value })}
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Button Link</label>
                    <input
                      type="text"
                      value={newBanner.ctaLink}
                      onChange={(e) => setNewBanner({ ...newBanner, ctaLink: e.target.value })}
                      className={styles.input}
                    />
                  </div>
                </div>

                <button type="submit" className="btn-primary" style={{ marginTop: '20px' }}>
                  + Add Hero Banner
                </button>
              </form>
            </div>

            <h2 className={styles.panelTitle} style={{ marginBottom: '20px' }}>
              Active Hero Banners ({banners.length})
            </h2>

            <div className={styles.itemsGrid}>
              {banners.map((ban) => (
                <div key={ban.id || ban._id} className={styles.itemCard}>
                  <div className={styles.itemHeader}>
                    <span className={`${styles.itemBadge} ${ban.isActive ? styles.badgeActive : styles.badgeInactive}`}>
                      {ban.isActive ? 'Active Slide' : 'Disabled'}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{ban.badge}</span>
                  </div>

                  <Image
                    src={ban.imageUrl}
                    alt={ban.title}
                    width={240}
                    height={140}
                    className={styles.itemImagePreview}
                  />

                  <h3 className={styles.itemName}>{ban.title}</h3>
                  <p className={styles.itemDesc}>{ban.subtitle}</p>

                  <div className={styles.itemActions}>
                    <button onClick={() => toggleBannerActive(ban)} className={styles.toggleBtn}>
                      {ban.isActive ? 'Deactivate' : 'Activate'}
                    </button>
                    <button onClick={() => handleDeleteBanner(ban)} className={styles.deleteBtn}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= SETTINGS TAB ================= */}
        {activeTab === 'settings' && (
          <div className={styles.panelCard}>
            <h2 className={styles.panelTitle}>Cloud & Database Configuration</h2>
            <div className={styles.statusCard}>
              <div>
                <strong>MongoDB Atlas Status:</strong>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                  {process.env.MONGODB_URI
                    ? 'Connected to configured MongoDB Atlas Cluster'
                    : 'Currently operating in high-performance local in-memory fallback mode.'}
                </p>
              </div>
              <span className={styles.adminBadge} style={{ background: '#E8F5E9', color: '#2E7D32' }}>
                Operational
              </span>
            </div>

            <div style={{ marginTop: '24px', lineHeight: '1.8', color: 'var(--text-body)' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Environment Variables:</h3>
              <ul style={{ paddingLeft: '20px' }}>
                <li><code>MONGODB_URI</code>: MongoDB Atlas connection string (e.g. <code>mongodb+srv://...</code>)</li>
                <li><code>ADMIN_PASSWORD</code>: Password used to sign into this dashboard (Default: <code>faso@admin2026</code>)</li>
                <li><code>JWT_SECRET</code>: Encryption key for secure session cookies</li>
              </ul>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
