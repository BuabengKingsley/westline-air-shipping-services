
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Warehouse, Globe, Award } from 'lucide-react';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Easing function: easeOutQuart
      const easedProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easedProgress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return (
    <span ref={countRef}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { label: "Storage Capacity", value: 50000, suffix: " MT", icon: <Warehouse size={32} /> },
    { label: "Strategic Branches", value: 3, suffix: " Countries", icon: <Globe size={32} /> },
    { label: "Operational Years", value: 10, suffix: "+ Years", icon: <Award size={32} /> }
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar isScrolled={isScrolled} />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        
        {/* Statistics & Infrastructure */}
        <section className="relative py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-fixed bg-center"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1920')` }}
          >
            <div className="absolute inset-0 bg-slate-950/90"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8">Powering Regional Infrastructure</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-20 leading-relaxed">
              Our 50,000MT capacity Tank Farm in Cotonou, Benin, serves as a critical hub for fuel distribution to the landlocked markets of Burkina Faso and Mali.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {stats.map((stat, idx) => (
                <div key={idx} className="group p-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-[3rem] hover:bg-white/10 hover:border-emerald-500/50 transition-all duration-500">
                  <div className="w-16 h-16 bg-emerald-600/20 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-5xl font-black text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-slate-500 uppercase tracking-[0.2em] font-bold text-xs">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
