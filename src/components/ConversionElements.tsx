import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, ArrowUp } from "lucide-react";

// Sticky CTA Bar (mobile bottom)
export const StickyCTABar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border p-4 md:hidden"
        >
          <Button variant="cta" size="lg" className="w-full" onClick={() => document.getElementById("free-trial")?.scrollIntoView({ behavior: "smooth" })}>
            Start Free Trial
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// WhatsApp floating button
export const WhatsAppButton = () => (
  <a
    href="https://wa.me/1234567890"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-20 md:bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-7 h-7 text-foreground" />
  </a>
);

// Scroll progress bar
export const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-transparent">
      <div
        className="h-full bg-primary transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

// Navbar
export const GymNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Experience", "Trainers", "Pricing", "FAQ"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-card/95 backdrop-blur-md border-b border-border" : "bg-transparent"}`}
    >
      <div className="gym-container flex items-center justify-between px-4 md:px-8 h-16 md:h-20">
        <a href="#" className="font-display text-2xl md:text-3xl uppercase tracking-wider">
          Elite<span className="text-primary">Gym</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm uppercase tracking-wider">
              {link}
            </a>
          ))}
          <Button variant="default" size="sm" onClick={() => document.getElementById("free-trial")?.scrollIntoView({ behavior: "smooth" })}>
            Free Trial
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-foreground p-2">
          {menuOpen ? <X className="w-6 h-6" /> : (
            <div className="space-y-1.5">
              <div className="w-6 h-0.5 bg-foreground" />
              <div className="w-6 h-0.5 bg-foreground" />
              <div className="w-6 h-0.5 bg-foreground" />
            </div>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border"
          >
            <div className="px-4 py-6 space-y-4">
              {links.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="block text-muted-foreground hover:text-foreground font-body text-lg uppercase tracking-wider">
                  {link}
                </a>
              ))}
              <Button variant="default" className="w-full" onClick={() => { setMenuOpen(false); document.getElementById("free-trial")?.scrollIntoView({ behavior: "smooth" }); }}>
                Free Trial
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// Exit Intent Popup
export const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);
  const triggered = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !triggered[0]) {
        triggered[0] = true;
        setShow(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card border border-border rounded-2xl p-8 max-w-md w-full relative text-center"
      >
        <button onClick={() => setShow(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
          <X className="w-5 h-5" />
        </button>
        <h3 className="font-display text-4xl uppercase mb-2">Wait!</h3>
        <p className="font-display text-2xl text-primary uppercase mb-4">Don't Miss Your Free Trial</p>
        <p className="text-muted-foreground font-body mb-6">
          Get 3 days of unlimited access. No commitment, no credit card.
        </p>
        <Button variant="cta" size="xl" className="w-full" onClick={() => { setShow(false); document.getElementById("free-trial")?.scrollIntoView({ behavior: "smooth" }); }}>
          Claim Free Trial
        </Button>
      </motion.div>
    </div>
  );
};
