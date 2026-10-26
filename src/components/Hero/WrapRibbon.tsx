'use client';

import React from 'react';
import styles from './WrapRibbon.module.css';

interface WrapRibbonProps {
  children: React.ReactNode;
  accentColor?: string;
  badgeText?: string;
}

export default function WrapRibbon({
  children,
  accentColor = '#E8751A',
  badgeText = 'BAKING DELECTABLE DREAMS • OVEN FRESH EVERYDAY • 100% WHOLESOME • WAYANAD',
}: WrapRibbonProps) {
  return (
    <div className={styles.wrapRibbonContainer}>
      {/* SVG Layer 1: Behind the product (Back arch of ribbon) */}
      <svg
        className={styles.ribbonSvgBack}
        viewBox="0 0 700 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="backRibbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C45F0E" />
            <stop offset="50%" stopColor="#E8751A" />
            <stop offset="100%" stopColor="#D4A853" />
          </linearGradient>
          <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Back path passing behind the image */}
        <path
          d="M 40 180 C 120 70, 360 40, 560 140 C 620 170, 640 240, 580 300"
          className={styles.ribbonBackStroke}
          stroke="url(#backRibbonGrad)"
          strokeWidth="38"
          strokeLinecap="round"
        />

        {/* Subtle inner highlight track */}
        <path
          d="M 60 170 C 130 80, 350 55, 545 145 C 595 170, 615 230, 565 285"
          stroke="rgba(255, 255, 255, 0.45)"
          strokeWidth="3"
          strokeDasharray="8 12"
          fill="none"
        />
      </svg>

      {/* Floating Rotating Marquee Ribbon behind/mid */}
      <div className={styles.ambientOrbitCircle}></div>

      {/* Center Spotlight: The Product Image passed as children */}
      <div className={styles.productStageWrapper}>
        <div className={styles.contactShadow}></div>
        {children}
      </div>

      {/* SVG Layer 2: In Front of the product (Front loop that cuts across the front) */}
      <svg
        className={styles.ribbonSvgFront}
        viewBox="0 0 700 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="frontRibbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4A853" />
            <stop offset="40%" stopColor="#FF882E" />
            <stop offset="80%" stopColor="#E8751A" />
            <stop offset="100%" stopColor="#9C2718" />
          </linearGradient>
          <filter id="ribbonShadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="rgba(42, 17, 7, 0.35)" />
          </filter>
        </defs>

        {/* Path for text to follow along the front loop */}
        <path
          id="frontRibbonPath"
          d="M 580 300 C 510 390, 220 490, 90 390 C 20 330, 60 210, 150 170 C 250 120, 520 220, 650 360"
          fill="none"
        />

        {/* Thick Front 3D Ribbon */}
        <path
          d="M 580 300 C 510 390, 220 490, 90 390 C 20 330, 60 210, 150 170 C 250 120, 520 220, 650 360"
          stroke="url(#frontRibbonGrad)"
          strokeWidth="38"
          strokeLinecap="round"
          filter="url(#ribbonShadow)"
          className={styles.ribbonFrontStroke}
        />

        {/* Golden Edge Lining */}
        <path
          d="M 580 300 C 510 390, 220 490, 90 390 C 20 330, 60 210, 150 170 C 250 120, 520 220, 650 360"
          stroke="#FFF2DC"
          strokeWidth="2.5"
          fill="none"
          strokeDasharray="14 10"
          className={styles.ribbonDashes}
        />

        {/* Animated Marquee Typography along the ribbon curve */}
        <text className={styles.ribbonText}>
          <textPath href="#frontRibbonPath" startOffset="0%" className={styles.textTrack}>
            ✨ {badgeText} • {badgeText} ✨
          </textPath>
        </text>
      </svg>

      {/* Floating Sparkles & Bakery Particles */}
      <div className={`${styles.sparkle} ${styles.sp1}`}>🌾</div>
      <div className={`${styles.sparkle} ${styles.sp2}`}>✨</div>
      <div className={`${styles.sparkle} ${styles.sp3}`}>⭐</div>
      <div className={`${styles.sparkle} ${styles.sp4}`}>🍞</div>
    </div>
  );
}
