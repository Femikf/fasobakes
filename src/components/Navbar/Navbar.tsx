'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LocationIcon, PhoneIcon, WhatsAppIcon } from '@/components/common/Icons';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const phone = '+91 95444 08674';
  const cleanPhone = '919544408674';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      {/* Top Micro-Bar */}
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarInner}`}>
          <div className={styles.topBarLeft}>
            <span className={styles.locationPin}>
              <LocationIcon size={14} color="var(--primary)" />
            </span>
            <span>6th Mile, Anjukunnu P.O, Mukkath, Wayanad, Kerala 670645</span>
          </div>
          <div className={styles.topBarRight}>
            <a href={`tel:${phone.replace(/\s+/g, '')}`} className={styles.phoneLink}>
              <PhoneIcon size={13} color="var(--primary)" />
              <span>Call Us:</span>
              <strong>{phone}</strong>
            </a>
            <span className={styles.divider}>|</span>
            <a
              href={`https://wa.me/${cleanPhone}?text=Hello%20FASO%20Bakes!%20I%20would%20like%20to%20place%20an%20order.`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.waLink}
            >
              <WhatsAppIcon size={14} color="#25D366" />
              <span>WhatsApp Order</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
        <div className={`container ${styles.navInner}`}>
          <Link href="#hero" className={styles.brand} onClick={closeMobile}>
            <Image
              src="/images/logo.png"
              alt="FASO Bakes Logo"
              width={130}
              height={52}
              priority
              className={styles.logoImage}
            />
            <div className={styles.brandInfo}>
              <span className={styles.brandName}>FASO BAKES</span>
              <span className={styles.brandTagline}>Baking Delectable Dreams</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav} aria-label="Main Navigation">
            <Link href="#hero" className={styles.navLink}>Home</Link>
            <Link href="#about" className={styles.navLink}>Our Story</Link>
            <Link href="#products" className={styles.navLink}>Artisan Products</Link>
            <Link href="#process" className={styles.navLink}>Our Craft</Link>
            <Link href="#contact" className={styles.navLink}>Contact & Dealers</Link>
          </nav>

          {/* Actions */}
          <div className={styles.actions}>
            <a
              href={`tel:${phone.replace(/\s+/g, '')}`}
              className={styles.callButtonHeader}
              title="Quick Call"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>{phone}</span>
            </a>

            <Link href="#contact" className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.95rem' }}>
              Order Inquiry
            </Link>
          </div>

          {/* Hamburger Toggle */}
          <button
            className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerActive : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>

          {/* Mobile Menu Overlay */}
          <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}>
            <Link href="#hero" className={styles.mobileNavLink} onClick={closeMobile}>Home</Link>
            <Link href="#about" className={styles.mobileNavLink} onClick={closeMobile}>Our Story</Link>
            <Link href="#products" className={styles.mobileNavLink} onClick={closeMobile}>Artisan Products</Link>
            <Link href="#process" className={styles.mobileNavLink} onClick={closeMobile}>Our Craft & Fleet</Link>
            <Link href="#contact" className={styles.mobileNavLink} onClick={closeMobile}>Contact & Wholesale</Link>
            
            <div className={styles.mobileCtaBox}>
              <a href={`tel:${phone.replace(/\s+/g, '')}`} className="btn-primary" style={{ width: '100%', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <PhoneIcon size={16} />
                <span>Call +91 95444 08674</span>
              </a>
              <a
                href={`https://wa.me/${cleanPhone}?text=Hello%20FASO%20Bakes!`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                <WhatsAppIcon size={16} color="#25D366" />
                <span>WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
