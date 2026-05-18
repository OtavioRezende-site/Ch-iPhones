import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Differentials from '../components/Differentials';
import ProductShowcase from '../components/ProductShowcase';
import Testimonials from '../components/Testimonials';
import Location from '../components/Location';
import Footer from '../components/Footer';
import ThreeBackground from '../components/ThreeBackground';
import SmoothScroll from '../components/SmoothScroll';

export default function Landing() {
  return (
    <SmoothScroll>
      <div className="relative font-sans text-white antialiased selection:bg-gold selection:text-black">
        <ThreeBackground />
        <Navbar />
        
        <main>
          <Hero />
          
          <div className="relative z-10 bg-black/40">
            <Differentials />
            <ProductShowcase />
            <Testimonials />
            <Location />
          </div>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
