'use client';

import Link from 'next/link';
import Image from 'next/image';
import { PhoneIcon, WhatsAppIcon, InstagramIcon, YouTubeIcon } from '@/components/common/Icons';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = 2026;
  const phone = '+91 95444 08674';
  const cleanPhone = '919544408674';
  const address = '6th Mile, Anjukunnu P.O, Mukkath, Wayanad, Kerala 670645';

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        {/* Brand Column */}
        <div className={styles.brandCol}>
          <Link href="#hero">
            <Image
              src="/images/logo.png"
              alt="FASO Bakes"
              width={150}
              height={60}
              className={styles.logoImage}
            />
          </Link>
          <div className={styles.tagline}>Baking Delectable Dreams</div>
          <p className={styles.brandDesc}>
            Artisanal bakery and confectionery crafted with master pride in Wayanad, Kerala.
            Wholesome sliced breads, Italian plum cakes, golden buns, and gourmet treats delivered fresh daily across Kerala.
          </p>
          <div className={styles.certBadge}>
            <span>🛡️</span>
            <span>ISO 22000 Certified Sanitary Bakery Facility</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className={styles.colTitle}>Quick Navigation</h4>
          <ul className={styles.linksList}>
            <li className={styles.linkItem}><Link href="#hero">Home</Link></li>
            <li className={styles.linkItem}><Link href="#about">Our Wayanad Story</Link></li>
            <li className={styles.linkItem}><Link href="#products">Italian Plum Cakes</Link></li>
            <li className={styles.linkItem}><Link href="#products">Artisan Breads</Link></li>
            <li className={styles.linkItem}><Link href="#process">Our Baking Science</Link></li>
            <li className={styles.linkItem}><Link href="#contact">Wholesale & Contact</Link></li>
          </ul>
        </div>

        {/* Product Categories */}
        <div>
          <h4 className={styles.colTitle}>Signature Range</h4>
          <ul className={styles.linksList}>
            <li className={styles.linkItem}><Link href="#products">Premium Italian Plum Cake</Link></li>
            <li className={styles.linkItem}><Link href="#products">FASO Special Plum Cake</Link></li>
            <li className={styles.linkItem}><Link href="#products">Cashew Crowned Brownie Bakes</Link></li>
            <li className={styles.linkItem}><Link href="#products">Sliced Brown Bread</Link></li>
            <li className={styles.linkItem}><Link href="#products">Sliced Long Bread</Link></li>
            <li className={styles.linkItem}><Link href="#products">Cardamom Tea Rusks</Link></li>
          </ul>
        </div>

        {/* Factory Contact & Orders */}
        <div>
          <h4 className={styles.colTitle}>Bakery Headquarters</h4>
          <p className={styles.addressText}>
            <strong>FASO Food Products</strong><br />
            {address}
          </p>

          <div className={styles.contactLinks}>
            <a href={`tel:${phone.replace(/\s+/g, '')}`} className={styles.phoneLink}>
              <PhoneIcon size={16} />
              <strong>{phone}</strong>
            </a>

            <a
              href={`https://wa.me/${cleanPhone}?text=Hello%20FASO%20Bakes!`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.waLink}
            >
              <WhatsAppIcon size={16} color="#25D366" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

          <div className={styles.socialIcons}>
            <a
              href="https://www.instagram.com/fasofoodproducts"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="FASO Instagram"
              title="Follow on Instagram"
            >
              <InstagramIcon size={18} />
            </a>

            <a
              href="https://www.youtube.com/@fasofoodproducts"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="FASO YouTube"
              title="Watch on YouTube"
            >
              <YouTubeIcon size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className={`container ${styles.bottomBar}`}>
        <div>
          © {currentYear} FASO Bakes (FASO Food Products). Wayanad, Kerala. All rights reserved.
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <span style={{ color: 'var(--accent-gold)' }}>Baking Delectable Dreams</span>
          <span>•</span>
          <Link href="/admin" className={styles.adminLink}>
            Admin Portal
          </Link>
        </div>
      </div>
    </footer>
  );
}
