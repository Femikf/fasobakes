import Image from 'next/image';
import Link from 'next/link';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={`container ${styles.aboutGrid}`}>
        {/* Left Column: Dual Imagery Showcase */}
        <div className={styles.imageShowcase}>
          <div className={styles.mainImageWrapper}>
            <Image
              src="/images/faso-baker-team.png"
              alt="FASO Bakes Master Baker - Baking Delectable Dreams"
              width={600}
              height={700}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              loading="lazy"
              className={styles.mainImage}
            />
            <div className={styles.brandBadgeOver}>
              <span className={styles.badgeMotto}>&quot;Baking Delectable Dreams&quot;</span>
              <span className={styles.badgeOrigin}>Crafted with Pride in Wayanad, Kerala</span>
            </div>
          </div>

          {/* Overlapping Inset Visual: Fresh Ovens */}
          <div className={styles.insetCard}>
            <Image
              src="/images/faso-fresh-baked-cakes.png"
              alt="Freshly baked mini plum cakes with cashews"
              width={260}
              height={260}
              sizes="(max-width: 768px) 130px, 260px"
              loading="lazy"
              className={styles.insetImage}
            />
            <div className={styles.insetText}>
              <strong>Hearth Baked</strong>
              <span>Golden Cashew Delights</span>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative & Pillars */}
        <div className={styles.textContent}>
          <div className="section-badge">
            <span>🌾</span>
            <span>Our Wayanad Heritage</span>
          </div>

          <h2 className="section-title">
            Crafting Beloved Flavors, <br />
            Rooted in Wayanad
          </h2>

          <p className={styles.leadText}>
            At <strong>FASO Bakes</strong>, our motto is a promise we fulfill with every loaf and cake: 
            <em> &quot;Baking Delectable Dreams&quot;</em>. Operating from 6th Mile, Anjukunnu P.O, Mukkath in Wayanad,
            our ovens ignite before dawn to fill morning breakfast tables and tea times across Kerala with irresistible aroma and wholesome goodness.
          </p>

          <p className={styles.description}>
            From our signature <strong>Premium Italian Plum Cake</strong> baked with authentic Italian recipes and rich raisins,
            to our daily sliced brown and white breads, every creation reflects slow natural fermentation, premium whole wheat grains,
            and stringent ISO 22000 certified untouched hygiene.
          </p>

          {/* Pillars Grid */}
          <div className={styles.pillarsGrid}>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>🇮🇹</div>
              <div>
                <h3 className={styles.pillarTitle}>Pure Italian Plum Recipes</h3>
                <p className={styles.pillarDesc}>Artisanal festive cakes baked with plump raisins and pure dairy butter.</p>
              </div>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>🌾</div>
              <div>
                <h3 className={styles.pillarTitle}>100% Wholesome Grains</h3>
                <p className={styles.pillarDesc}>Carefully sourced wheat flours rich in natural fiber and vital nutrients.</p>
              </div>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>🛡️</div>
              <div>
                <h3 className={styles.pillarTitle}>Untouched Clean Rooms</h3>
                <p className={styles.pillarDesc}>Automated slicing and hermetic packaging maintaining peak freshness.</p>
              </div>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>🚚</div>
              <div>
                <h3 className={styles.pillarTitle}>50+ Fleet Dawn Dispatch</h3>
                <p className={styles.pillarDesc}>Delivering fresh to 500+ supermarkets and stores by breakfast time.</p>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <span className={styles.statVal}>80+</span>
              <span className={styles.statLbl}>Bakery Delights</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statVal}>100%</span>
              <span className={styles.statLbl}>Hygienic Guarantee</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statVal}>500+</span>
              <span className={styles.statLbl}>Retail Outlets</span>
            </div>
          </div>

          <div className={styles.btnRow}>
            <Link href="#contact" className="btn-primary">
              Partner With Us
            </Link>
            <Link href="#products" className="btn-secondary">
              View Product Line
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
