import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import BannerShowcase from '@/components/BannerShowcase/BannerShowcase';
import About from '@/components/About/About';
import Products from '@/components/Products/Products';
import Process from '@/components/Process/Process';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp/FloatingWhatsApp';
import { getAllProducts, getAllBanners } from '@/lib/store';

export const instant = false;

export default async function HomePage() {
  const [products, banners] = await Promise.all([
    getAllProducts(),
    getAllBanners(),
  ]);

  return (
    <main>
      <Navbar />
      <Hero banners={banners} />
      <BannerShowcase banners={banners} />
      <About />
      <Products products={products} />
      <Process />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
