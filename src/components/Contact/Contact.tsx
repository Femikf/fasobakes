'use client';

import { useState } from 'react';
import { PhoneIcon, LocationIcon, WhatsAppIcon, InstagramIcon, YouTubeIcon } from '@/components/common/Icons';
import styles from './Contact.module.css';

export default function Contact() {
  const phone = '+91 95444 08674';
  const cleanPhone = '919544408674';
  const address = '6th Mile, Anjukunnu P.O, Mukkath, Wayanad, Kerala 670645';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Wholesale & Retail Dealership',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: 'Wholesale & Retail Dealership',
        message: '',
      });
    }, 600);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={`container ${styles.contactGrid}`}>
        {/* Left Column: Info & Direct Connect */}
        <div className={styles.infoColumn}>
          <div className="section-badge">
            <PhoneIcon size={14} />
            <span>Get in Touch With FASO Bakes</span>
          </div>

          <h2 className="section-title">Visit or Call Our Bakery</h2>

          <p className={styles.leadSubtitle}>
            Whether you want to order our signature <strong>Italian Plum Cake</strong>, arrange daily scheduled bread supply,
            or partner as a regional distributor in Wayanad and beyond, we are here to assist.
          </p>

          <div className={styles.infoCards}>
            {/* Address Card */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <LocationIcon size={22} color="var(--primary)" />
              </div>
              <div>
                <h3 className={styles.infoTitle}>Bakery & Factory Address</h3>
                <p className={styles.infoDesc}>{address}</p>
                <span className={styles.subNote}>Wayanad District, North Kerala</span>
              </div>
            </div>

            {/* Telephone Card */}
            <a href={`tel:${phone.replace(/\s+/g, '')}`} className={`${styles.infoCard} ${styles.clickableCard}`}>
              <div className={styles.infoIcon}>
                <PhoneIcon size={22} color="var(--primary)" />
              </div>
              <div>
                <h3 className={styles.infoTitle}>Call Us Directly</h3>
                <p className={styles.infoDesc} style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary)' }}>
                  {phone}
                </p>
                <span className={styles.subNote}>Available 7:00 AM – 9:00 PM</span>
              </div>
            </a>

            {/* WhatsApp Direct Card */}
            <a
              href={`https://wa.me/${cleanPhone}?text=Hello%20FASO%20Bakes!%20I%20would%20like%20to%20inquire%20about%20your%20products.`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.infoCard} ${styles.clickableCard}`}
            >
              <div className={`${styles.infoIcon} ${styles.waIconBox}`}>
                <WhatsAppIcon size={22} color="#25D366" />
              </div>
              <div>
                <h3 className={styles.infoTitle}>WhatsApp Quick Order</h3>
                <p className={styles.infoDesc} style={{ color: '#25D366', fontWeight: 700 }}>
                  Chat with FASO Support
                </p>
                <span className={styles.subNote}>Instant response for bulk & festive orders</span>
              </div>
            </a>
          </div>

          {/* Social Profiles */}
          <div className={styles.socialBox}>
            <h4 className={styles.socialHeading}>
              Follow Our Daily Bakes & Stories
            </h4>
            <div className={styles.socialRow}>
              <a
                href="https://www.instagram.com/fasofoodproducts"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialCard}
              >
                <InstagramIcon size={18} color="#E4405F" />
                <span>@fasofoodproducts</span>
              </a>

              <a
                href="https://www.youtube.com/@fasofoodproducts"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialCard}
              >
                <YouTubeIcon size={18} color="#FF0000" />
                <span>YouTube Channel</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Inquiry Form */}
        <div className={styles.formCard}>
          <div className={styles.formHeader}>
            <h3 className={styles.formTitle}>Wholesale & Customer Inquiry</h3>
            <p className={styles.formSubtitle}>
              Send your requirements below. Our sales manager will contact you promptly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Thomas"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 95444 08674"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Email Address</label>
                <input
                  type="email"
                  placeholder="e.g. store@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Inquiry Type</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={styles.select}
                >
                  <option value="Wholesale & Retail Dealership">Retail & Supermarket Supply</option>
                  <option value="Italian Plum Cake Bulk Order">Italian Plum Cake Bulk Orders</option>
                  <option value="Cafe & Hotel Supply">Café / Restaurant Regular Loaves</option>
                  <option value="Customer Feedback">Customer Feedback</option>
                </select>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Your Message / Quantities Needed *</label>
              <textarea
                required
                rows={4}
                placeholder="Mention which items (Italian Plum Cake, Sliced Breads, Buns, Rusks) and delivery area..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={styles.textarea}
              ></textarea>
            </div>

            <button type="submit" disabled={loading} className="btn-primary" style={{ width: '100%', marginTop: '8px' }}>
              {loading ? 'Sending Details...' : 'Send Inquiry Now'}
            </button>

            {submitted && (
              <div className={styles.successMessage}>
                🎉 Thank you! We have received your inquiry. A FASO Bakes representative will reach you shortly at {formData.phone || phone}.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
