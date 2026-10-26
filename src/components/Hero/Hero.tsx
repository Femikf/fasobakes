'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { WhatsAppIcon } from '@/components/common/Icons';
import { Banner } from '@/lib/types';
import styles from './Hero.module.css';

interface ProductStage {
  id: string;
  stageNum: string;
  stageLabel: string;
  startTime: number;
  endTime: number;
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  highlights: string[];
  ctaText: string;
  ctaLink: string;
  waText: string;
}

const PRODUCT_STAGES: ProductStage[] = [
  {
    id: 'bread',
    stageNum: '01',
    stageLabel: 'Multigrain Bread',
    startTime: 0,
    endTime: 2.5,
    badge: '🌾 100% Artisanal Whole Grain',
    titlePrefix: 'Baking Delectable Dreams: ',
    titleHighlight: 'Multigrain Sliced Bread',
    subtitle:
      'Stone-hearth baked with toasted sunflower seeds, golden flax, and wholesome whole wheat on our master pedestal. Sliced fresh with our signature sandwich loaf packaging.',
    highlights: ['100% Whole Multigrain', 'Toasted Seed Crust', 'Dawn 4 AM Dispatch'],
    ctaText: 'Order Multigrain Loaf',
    ctaLink: '#products',
    waText: 'Hello FASO Bakes! I would like to order the Artisanal Multigrain Sliced Bread.',
  },
  {
    id: 'cream-bun',
    stageNum: '02',
    stageLabel: 'Velveteen Cream Buns',
    startTime: 2.5,
    endTime: 5.0,
    badge: '🧁 Pure Whipped Cream Indulgence',
    titlePrefix: 'Delight in Every Bite: ',
    titleHighlight: 'Velveteen Cream Buns',
    subtitle:
      'Cloud-soft golden brioche buns filled with luxurious whipped vanilla cream and decadent chocolate fudge. Loved by children and families across Kerala.',
    highlights: ['Real Whipped Dairy Cream', 'Vanilla & Chocolate Twin Packs', 'Cloud-Soft Brioche'],
    ctaText: 'Order Fresh Cream Buns',
    ctaLink: '#products',
    waText: 'Hello FASO Bakes! I would like to order your Velveteen Cream Buns.',
  },
  {
    id: 'milk-rusk',
    stageNum: '03',
    stageLabel: 'Crispy Milk Rusks',
    startTime: 5.0,
    endTime: 7.5,
    badge: '☕ The Quintessential Chai Companion',
    titlePrefix: 'Double-Baked Crunch: ',
    titleHighlight: 'Crispy Milk Rusks',
    subtitle:
      'Oven-toasted to a deep golden crisp with wholesome farm milk and fragrant elaichi cardamom. The gold standard for morning tea times across Kerala.',
    highlights: ['Double-Baked Crisp', 'Enriched Farm Milk', 'Fragrant Elaichi Essence'],
    ctaText: 'Order Crispy Milk Rusks',
    ctaLink: '#products',
    waText: 'Hello FASO Bakes! I would like to order your Crispy Milk Rusks.',
  },
  {
    id: 'plum-cake',
    stageNum: '04',
    stageLabel: 'Italian Plum Cake',
    startTime: 7.5,
    endTime: 10.01,
    badge: '🇮🇹 Authentic Italian Heritage Recipe',
    titlePrefix: 'Pure Italian Goodness: ',
    titleHighlight: 'Signature Plum Cake',
    subtitle:
      'Master-baked according to authentic Italian traditions with California raisins, roasted whole cashews, candied fruits, and pure dairy butter in our luxury festive gift box.',
    highlights: ['Authentic Italian Recipe', 'Loaded with Whole Cashews', 'Pure Dairy Butter Crumb'],
    ctaText: 'Order Italian Plum Cake',
    ctaLink: '#products',
    waText: 'Hello FASO Bakes! I would like to order the Premium Italian Plum Cake.',
  },
];

interface HeroProps {
  banners?: Banner[];
}

export default function Hero({ banners }: HeroProps = {}) {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Synchronize text overlay smoothly as the video plays
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const time = videoRef.current.currentTime;

    const index = PRODUCT_STAGES.findIndex(
      (s) => time >= s.startTime && time < s.endTime
    );
    if (index !== -1 && index !== activeStageIndex) {
      setActiveStageIndex(index);
    }
  };

  const current = PRODUCT_STAGES[activeStageIndex];

  return (
    <section id="hero" className={styles.fullscreenHero}>
      {/* Background Full-Bleed Video Element */}
      <div className={styles.videoBackground}>
        <video
          ref={videoRef}
          src="/gemini_generated_video_a2de6f4c.mp4"
          poster="/images/hero-video-poster.webp"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onTimeUpdate={handleTimeUpdate}
          className={styles.fullscreenVideo}
          aria-label="FASO Bakes 360 rotating showcase of multigrain bread, cream buns, milk rusks, and Italian plum cake"
        />

        {/* Multi-layered cinematic vignette & contrast gradients */}
        <div className={styles.cinematicScrim}></div>
        <div className={styles.bottomGradientFade}></div>
      </div>

      {/* Dynamic Text Content Overlay (Pure & Distraction-Free) */}
      <div className={`container ${styles.overlayContainer}`}>
        <div className={styles.overlayContent}>
          <div className={styles.textTransitionBox} key={current.id}>
            {/* Active Product Category Badge */}
            <div className={styles.badgeRow}>
              <span className={styles.stageBadge}>{current.badge}</span>
              <span className={styles.originTag}>Wayanad, Kerala</span>
            </div>

            {/* Dynamic Headline */}
            <h1 className={styles.overlayTitle}>
              {current.titlePrefix}
              <span className={styles.highlightText}>{current.titleHighlight}</span>
            </h1>

            {/* Dynamic Subtitle */}
            <p className={styles.overlaySubtitle}>{current.subtitle}</p>

            {/* Call-to-Action Buttons */}
            <div className={styles.ctaRow}>
              <Link href={current.ctaLink} className="btn-primary">
                {current.ctaText}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>

              <a
                href={`https://wa.me/919544408674?text=${encodeURIComponent(current.waText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.overlayWhatsAppBtn}
              >
                <WhatsAppIcon size={18} color="#25D366" />
                <span>WhatsApp Order</span>
              </a>
            </div>

            {/* Craft Highlights */}
            <div className={styles.specsList}>
              {current.highlights.map((h, i) => (
                <div key={i} className={styles.specTag}>
                  <span className={styles.checkMark}>✓</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scale Counters Bar Docked at Bottom of Hero */}
      <div className={styles.statsBarWrapper}>
        <div className={`container ${styles.statsContainer}`}>
          <div className={styles.statBox}>
            <div className={styles.statNumber}>80<span>+</span></div>
            <div className={styles.statLabel}>Fresh Delicacies</div>
            <div className={styles.statSub}>Plum cakes, breads & buns</div>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statBox}>
            <div className={styles.statNumber}>500<span>+</span></div>
            <div className={styles.statLabel}>Retail Outlets</div>
            <div className={styles.statSub}>Across Wayanad & North Kerala</div>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statBox}>
            <div className={styles.statNumber}>50<span>+</span></div>
            <div className={styles.statLabel}>Dawn Delivery Fleet</div>
            <div className={styles.statSub}>4:00 AM daily dispatch</div>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statBox}>
            <div className={styles.statNumber}>100<span>%</span></div>
            <div className={styles.statLabel}>Untouched Hygiene</div>
            <div className={styles.statSub}>ISO 22000 automated baking</div>
          </div>
        </div>
      </div>
    </section>
  );
}
