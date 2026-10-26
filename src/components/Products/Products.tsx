'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { WhatsAppIcon } from '@/components/common/Icons';
import { Product, INITIAL_BREADS } from '@/lib/types';
import styles from './Products.module.css';

interface ProductsProps {
  products?: Product[];
}

const CATEGORIES = [
  { id: 'all', label: 'All Bakery Delights' },
  { id: 'cakes', label: 'Signature Plum Cakes' },
  { id: 'breads', label: 'Artisan Breads' },
  { id: 'buns', label: 'Buns & Rolls' },
  { id: 'rusks', label: 'Tea Rusks & Biscuits' },
];

export default function Products({ products = INITIAL_BREADS }: ProductsProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProduct(null);
    };
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProduct]);

  const displayList = products.filter((p) => p.isActive);
  const filteredProducts =
    activeCategory === 'all'
      ? displayList
      : displayList.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className={styles.productsSection}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.headerArea}>
          <div className="section-badge">
            <span>🥖</span>
            <span>Our Fresh Collection</span>
          </div>
          <h2 className="section-title">Wholesome Bakes, Freshly Crafted</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Discover our spectrum of authentic Italian plum cakes, daily oven-fresh sliced breads, buttery rolls,
            and crunchy tea rusks.
          </p>
        </div>

        {/* Category Tabs */}
        <div className={styles.categoryTabs}>
          {CATEGORIES.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tabBtn} ${activeCategory === tab.id ? styles.tabBtnActive : ''}`}
              onClick={() => setActiveCategory(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className={styles.productsGrid}>
          {filteredProducts.map((product) => {
            const waOrderText = encodeURIComponent(
              `Hello FASO Bakes! I would like to order / inquire about: ${product.name} (${product.weight || 'Standard Pack'}).`
            );

            return (
              <div key={product.id || product._id} className={styles.productCard}>
                <div className={styles.cardImageWrapper}>
                  {product.badge && <span className={styles.productBadge}>{product.badge}</span>}
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={360}
                    height={300}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                    loading="lazy"
                    className={styles.cardImage}
                  />
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    <span className={styles.categoryTag}>{product.category}</span>
                    <span className={styles.weightTag}>{product.weight || 'Fresh Pack'}</span>
                  </div>

                  <h3 className={styles.productName}>{product.name}</h3>
                  <p className={styles.productDescription}>{product.description}</p>

                  {product.features && product.features.length > 0 && (
                    <div className={styles.featuresList}>
                      {product.features.slice(0, 3).map((feat, i) => (
                        <span key={i} className={styles.featurePill}>
                          ✓ {feat}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className={styles.cardFooter}>
                    <button
                      className={styles.viewBtn}
                      onClick={() => setSelectedProduct(product)}
                      aria-label={`View details of ${product.name}`}
                    >
                      Quick View
                    </button>

                    <a
                      href={`https://wa.me/919544408674?text=${waOrderText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.orderWaBtn}
                      title="Order on WhatsApp"
                    >
                      <WhatsAppIcon size={14} color="#25D366" />
                      <span>Order</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick View Modal */}
        {selectedProduct && (
          <div
            className={styles.modalBackdrop}
            onClick={() => setSelectedProduct(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selectedProduct.name}
          >
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button
                className={styles.closeModalBtn}
                onClick={() => setSelectedProduct(null)}
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className={styles.modalGrid}>
                <div className={styles.modalImgBox}>
                  <Image
                    src={selectedProduct.imageUrl}
                    alt={selectedProduct.name}
                    width={380}
                    height={340}
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                    className={styles.modalImage}
                  />
                </div>

                <div>
                  <span className={styles.categoryTag}>{selectedProduct.category}</span>
                  <h3 className={styles.modalProductName}>
                    {selectedProduct.name}
                  </h3>
                  <p className={styles.modalProductDescription}>
                    {selectedProduct.description}
                  </p>

                  <div className={styles.modalSpecBox}>
                    <strong>Pack Specification: </strong>
                    <span style={{ color: 'var(--primary-dark)', fontWeight: 700 }}>
                      {selectedProduct.weight || 'Standard Pack'}
                    </span>
                  </div>

                  {selectedProduct.features && (
                    <div className={styles.featuresList} style={{ marginBottom: '24px' }}>
                      {selectedProduct.features.map((f, i) => (
                        <span key={i} className={styles.featurePill}>
                          ✓ {f}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className={styles.modalActionButtons}>
                    <a
                      href={`https://wa.me/919544408674?text=${encodeURIComponent(
                        `Hello FASO Bakes! I would like to order: ${selectedProduct.name} (${selectedProduct.weight}).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                    >
                      <WhatsAppIcon size={18} color="#FFFFFF" />
                      <span>Order on WhatsApp</span>
                    </a>

                    <Link
                      href="#contact"
                      className="btn-secondary"
                      onClick={() => setSelectedProduct(null)}
                    >
                      Wholesale Inquiry
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
