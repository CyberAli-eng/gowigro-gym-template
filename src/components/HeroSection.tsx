import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-gym.jpg";

const stats = [
  { value: 5000, suffix: "+", label: "Active Members" },
  { value: 12, suffix: "", label: "Certified Trainers" },
  { value: 7, suffix: "+", label: "Years Experience" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const step = target / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="gym-stat-glow">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Elite gym interior"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 gym-gradient-overlay" />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-primary font-body text-sm md:text-base uppercase tracking-[0.3em] mb-4">
            Elite Performance Gym
          </p>
          <h1 className="gym-heading text-5xl md:text-7xl lg:text-9xl mb-6">
            Transform Your Body.
            <br />
            <span className="gym-text-gradient">Build Unbreakable</span>
            <br />
            Discipline.
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body">
            The gym where results are built and limits are broken. Join the elite.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="hero" size="xl">
            Start Free Trial
          </Button>
          <Button variant="heroOutline" size="xl">
            Book Consultation
          </Button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex items-center justify-center gap-4 text-muted-foreground text-sm font-body"
        >
          <span className="flex items-center gap-1">
            <span className="text-primary">★★★★★</span> 4.9/5 Google Rating
          </span>
          <span className="hidden sm:inline text-border">|</span>
          <span>No Contract Required</span>
        </motion.div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 bg-card/80 backdrop-blur-md border-t border-border"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-3 divide-x divide-border">
          {stats.map((stat) => (
            <div key={stat.label} className="py-6 text-center">
              <div className="font-display text-3xl md:text-5xl text-primary">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-muted-foreground text-xs md:text-sm mt-1 uppercase tracking-wider font-body">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 animate-scroll-down">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
