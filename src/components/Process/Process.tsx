import Image from 'next/image';
import Link from 'next/link';
import { WhatsAppIcon } from '@/components/common/Icons';
import styles from './Process.module.css';

const STEPS = [
  {
    num: '01',
    icon: '🌾',
    title: 'Select Grains & Spices',
    desc: 'Procuring 100% premium quality whole wheat, farm butter, and hand-selected California raisins and cashews directly from verified sources.',
  },
  {
    num: '02',
    icon: '🥣',
    title: 'Slow Artisan Ferment',
    desc: 'Natural slow-proofed fermentation unlocking intricate grain aromatics, optimal crumb tenderness, and easy digestibility.',
  },
  {
    num: '03',
    icon: '🇮🇹',
    title: 'Italian Recipe Craft',
    desc: 'Baking our celebrated Italian Plum Cake using time-tested authentic formulas loaded with candied zest and plump raisins.',
  },
  {
    num: '04',
    icon: '🔥',
    title: 'Steam Hearth Baking',
    desc: 'Baked inside computer-controlled stone hearth ovens with precise humidity and temperature calibration for uniform golden caramelization.',
  },
  {
    num: '05',
    icon: '🛡️',
    title: 'Automated Clean Slicing',
    desc: 'Each bread loaf is machine-sliced without human contact inside ISO 22000 certified sanitary clean rooms.',
  },
  {
    num: '06',
    icon: '📦',
    title: 'Hermetic Fresh Seal',
    desc: 'Pouch packaging that safeguards crust integrity, moisture, and oven-freshness during transport and store shelving.',
  },
  {
    num: '07',
    icon: '🚚',
    title: '4:00 AM Dawn Dispatch',
    desc: 'Our 50+ dedicated Ashok Leyland delivery fleet embarks at dawn across Wayanad, Kozhikode, and North Kerala districts.',
  },
  {
    num: '08',
    icon: '✨',
    title: 'Customer Smiles Daily',
    desc: 'Delivering happiness, energy, and nourishment to over 10,000 households and breakfast counters every sunrise.',
  },
];

export default function Process() {
  return (
    <section id="process" className={styles.processSection}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.headerArea}>
          <div className="section-badge">
            <span>⚙️</span>
            <span>Why FASO Bakes is Unmatched</span>
          </div>
          <h2 className="section-title">The Science of Master Baking</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            From hand-picked grain grains to our sunrise delivery fleet, every step is engineered to exceed your expectations.
          </p>
        </div>

        {/* 8-Step Interactive Grid */}
        <div className={styles.stepsGrid}>
          {STEPS.map((step) => (
            <div key={step.num} className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <span className={styles.stepNumber}>{step.num}</span>
                <div className={styles.stepIconBox}>{step.icon}</div>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Delivery Fleet Spotlight Banner */}
        <div className={styles.fleetSpotlight}>
          <div className={styles.fleetVisual}>
            <Image
              src="/images/faso-delivery-trucks.png"
              alt="FASO Bakes 50+ Ashok Leyland Delivery Fleet"
              width={560}
              height={420}
              className={styles.fleetImage}
            />
            <div className={styles.fleetPill}>
              <span>🚚 50+ Dedicated Vehicles on Road</span>
            </div>
          </div>

          <div className={styles.fleetContent}>
            <div className="section-badge" style={{ marginBottom: '10px' }}>
              <span>🌄</span>
              <span>Dawn Logistics Network</span>
            </div>
            <h3 className={styles.fleetTitle}>Dawn Delivery Fleet Supplying 500+ Outlets</h3>
            <p className={styles.fleetDesc}>
              Before the rest of Kerala awakens, our signature orange Ashok Leyland fleet rolls out from our headquarters at
              <strong> 6th Mile, Anjukunnu, Wayanad</strong>. We service supermarkets, bakeries, school cafeterias, and boutique cafés
              with prompt, reliable deliveries 365 days a year.
            </p>

            <div className={styles.fleetFeatures}>
              <div className={styles.fleetFeat}>
                <strong>⏰ 4:00 AM</strong>
                <span>Guaranteed Departure</span>
              </div>
              <div className={styles.fleetFeat}>
                <strong>📍 10+ Regions</strong>
                <span>Wayanad & Neighboring Hubs</span>
              </div>
              <div className={styles.fleetFeat}>
                <strong>🍞 100% Fresh</strong>
                <span>Same-Day Oven Warmth</span>
              </div>
            </div>

            <div className={styles.fleetCtaRow}>
              <Link href="#contact" className="btn-primary">
                Inquire Wholesale Dealership
              </Link>
              <a
                href="https://wa.me/919544408674?text=Hello%20FASO%20Bakes!%20I%20am%20interested%20in%20becoming%20a%20retail%20partner."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <WhatsAppIcon size={16} color="#25D366" />
                <span>Wholesale WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
