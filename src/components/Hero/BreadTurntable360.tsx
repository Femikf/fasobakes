'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './BreadTurntable360.module.css';

interface BreadTurntable360Props {
  imageSrc?: string;
  altText?: string;
}

export default function BreadTurntable360({
  imageSrc = '/images/faso-bread-turntable.jpg',
  altText = 'FASO Bakes Artisanal Multigrain Sliced Bread 360 View',
}: BreadTurntable360Props) {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isAutoSpinning, setIsAutoSpinning] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const startAngleRef = useRef(0);

  // Auto-spin animation loop
  useEffect(() => {
    if (!isAutoSpinning || isDragging) return;

    let animId: number;
    const speed = 0.45; // Degrees per frame

    const loop = () => {
      setRotationAngle((prev) => (prev + speed) % 360);
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isAutoSpinning, isDragging]);

  // Mouse / Touch Drag handlers for manual 360 inspection
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setIsAutoSpinning(false);
    startXRef.current = e.clientX;
    startAngleRef.current = rotationAngle;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startXRef.current;
    // Map drag distance to 360 degrees
    setRotationAngle((startAngleRef.current + deltaX * 0.75) % 360);
  };

  const handlePointerUp = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  // Calculate realistic lighting & perspective based on rotation angle
  // A subtle horizontal shift and scale oscillation simulating true 360 turntable depth
  const rad = (rotationAngle * Math.PI) / 180;
  const perspectiveShift = Math.sin(rad) * 14;
  const scaleEffect = 0.96 + Math.cos(rad) * 0.04;
  const shadowOpacity = 0.4 + Math.cos(rad) * 0.15;

  return (
    <div
      className={styles.turntableStage}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      role="region"
      aria-label="360 degree product view"
    >
      {/* Background Spatial Atmosphere Watermark */}
      <div className={styles.watermarkBackdrop} aria-hidden="true">
        <span>FASO BAKES</span>
      </div>

      {/* Radial Warm Spotlight Behind */}
      <div className={styles.ambientSpotlight}></div>

      {/* 360 Interactive Badge */}
      <div className={styles.badge360}>
        <span className={styles.rotateIcon}>↻</span>
        <span>360° Interactive Turntable</span>
      </div>

      {/* Rotating 3D Platform & Product */}
      <div
        className={styles.turntablePlatform}
        style={{
          transform: `perspective(900px) rotateY(${perspectiveShift}deg) scale(${scaleEffect})`,
        }}
      >
        {/* The Multigrain Bread Loaf on Pedestal */}
        <div className={styles.productFrame}>
          <Image
            src={imageSrc}
            alt={altText}
            width={520}
            height={520}
            priority
            className={styles.productImage}
            draggable={false}
          />
        </div>

        {/* Dynamic Grounding Shadow Underneath */}
        <div
          className={styles.pedestalShadow}
          style={{ opacity: shadowOpacity }}
        ></div>
      </div>

      {/* Control Bar: Auto-Spin Toggle & Drag Hint */}
      <div className={styles.turntableControls}>
        <button
          type="button"
          className={`${styles.spinToggleBtn} ${isAutoSpinning ? styles.activeSpinBtn : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            setIsAutoSpinning(!isAutoSpinning);
          }}
          title={isAutoSpinning ? 'Pause 360 Auto-Spin' : 'Resume 360 Auto-Spin'}
        >
          <span>{isAutoSpinning ? '⏸ Pause Spin' : '▶ Auto 360° Spin'}</span>
        </button>

        <span className={styles.dragHint}>
          ↔ Drag horizontally to rotate 360°
        </span>
      </div>
    </div>
  );
}
