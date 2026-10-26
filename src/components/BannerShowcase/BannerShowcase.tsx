'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Banner, INITIAL_BANNERS } from '@/lib/types';
import styles from './BannerShowcase.module.css';

interface BannerShowcaseProps {
  banners?: Banner[];
}

export default function BannerShowcase({ banners }: BannerShowcaseProps) {
  // Use provided banners or fallback to INITIAL_BANNERS
  const activeBanners = (banners && banners.length > 0
    ? banners.filter((b) => b.isActive !== false)
    : INITIAL_BANNERS).slice(0, 6);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Infinite loop auto-cycling
  useEffect(() => {
    if (isPaused || activeBanners.length <= 1) return;

    autoPlayTimerRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % activeBanners.length);
    }, 4500);

    return () => {
      if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current);
    };
  }, [activeIndex, isPaused, activeBanners.length]);

  const handleSelectBanner = (index: number) => {
    setActiveIndex(index);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + activeBanners.length) % activeBanners.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % activeBanners.length);
  };

  if (!activeBanners || activeBanners.length === 0) return null;

  return (
    <section className={styles.showcaseSection}>
      {/* Infinite Marquee Announcement Ribbon */}
      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrack}>
          <span>✨ DAWN 4:00 AM DISPATCH ACROSS NORTH KERALA</span>
          <span className={styles.star}>★</span>
          <span>50+ TEMPERATURE-CONTROLLED FLEET</span>
          <span className={styles.star}>★</span>
          <span>100% UNTOUCHED HYGIENE & ISO 22000 AUTOMATED BAKING</span>
          <span className={styles.star}>★</span>
          <span>AUTHENTIC ITALIAN PLUM RECIPES & WHOLE GRAIN LOAVES</span>
          <span className={styles.star}>★</span>
          <span>SUPPLYING 500+ SUPERMARKETS & OUTLETS</span>
          <span className={styles.star}>★</span>
          {/* Repeated for seamless infinite loop */}
          <span>✨ DAWN 4:00 AM DISPATCH ACROSS NORTH KERALA</span>
          <span className={styles.star}>★</span>
          <span>50+ TEMPERATURE-CONTROLLED FLEET</span>
          <span className={styles.star}>★</span>
          <span>100% UNTOUCHED HYGIENE & ISO 22000 AUTOMATED BAKING</span>
          <span className={styles.star}>★</span>
          <span>AUTHENTIC ITALIAN PLUM RECIPES & WHOLE GRAIN LOAVES</span>
          <span className={styles.star}>★</span>
          <span>SUPPLYING 500+ SUPERMARKETS & OUTLETS</span>
          <span className={styles.star}>★</span>
        </div>
      </div>

      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerLeft}>
            <span className="section-badge">📢 Dynamic Highlights</span>
            <h2 className={styles.sectionTitle}>
              Promotional Spotlights & <span className={styles.highlightText}>Client Specials</span>
            </h2>
          </div>

          <div className={styles.headerControls}>
            <button
              type="button"
              className={styles.controlNavBtn}
              onClick={handlePrev}
              aria-label="Previous banner"
              title="Previous banner"
            >
              ❮
            </button>
            <button
              type="button"
              className={styles.controlNavBtn}
              onClick={handleNext}
              aria-label="Next banner"
              title="Next banner"
            >
              ❯
            </button>
            <button
              type="button"
              className={styles.pauseBtn}
              onClick={() => setIsPaused(!isPaused)}
              title={isPaused ? 'Resume auto-cycle' : 'Pause auto-cycle'}
            >
              {isPaused ? '▶ Resume' : '❚❚ Auto-Loop'}
            </button>
          </div>
        </div>

        {/* Dynamic Looped Accordion Cards */}
        <div
          className={styles.accordionContainer}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {activeBanners.map((banner, idx) => {
            const isExpanded = idx === activeIndex;
            return (
              <div
                key={banner.id || banner._id || idx}
                className={`${styles.accordionCard} ${isExpanded ? styles.expandedCard : styles.collapsedCard}`}
                onClick={() => handleSelectBanner(idx)}
              >
                {/* Background Image */}
                <div className={styles.cardBgWrapper}>
                  <Image
                    src={banner.imageUrl || '/images/hero-bg.jpg'}
                    alt={banner.title}
                    fill
                    className={styles.cardBgImg}
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                  <div className={styles.cardGradientOverlay}></div>
                </div>

                {/* Collapsed Vertical Preview Strip */}
                {!isExpanded && (
                  <div className={styles.collapsedContent}>
                    <span className={styles.collapsedNum}>0{idx + 1}</span>
                    <span className={styles.collapsedTitle}>{banner.title}</span>
                  </div>
                )}

                {/* Expanded Card Details */}
                {isExpanded && (
                  <div className={styles.expandedContent}>
                    <div className={styles.expandedBadgeRow}>
                      <span className={styles.cardBadge}>
                        {banner.badge || 'Featured Special'}
                      </span>
                      <span className={styles.cardOrder}>
                        0{idx + 1} / 0{activeBanners.length}
                      </span>
                    </div>

                    <span className={styles.cardTagline}>{banner.tagline}</span>

                    <h3 className={styles.cardTitle}>{banner.title}</h3>

                    <p className={styles.cardSubtitle}>{banner.subtitle}</p>

                    <div className={styles.cardActions}>
                      <Link href={banner.ctaLink || '#products'} className="btn-primary">
                        {banner.ctaText || 'Learn More'}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </Link>

                      {banner.secondaryCtaText && banner.secondaryCtaLink && (
                        <Link href={banner.secondaryCtaLink} className={styles.secondaryBtn}>
                          {banner.secondaryCtaText}
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Pagination Dots */}
        <div className={styles.paginationDots}>
          {activeBanners.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`${styles.dot} ${idx === activeIndex ? styles.activeDot : ''}`}
              onClick={() => handleSelectBanner(idx)}
              aria-label={`Go to banner ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
