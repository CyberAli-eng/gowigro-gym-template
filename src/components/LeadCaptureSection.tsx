import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const LeadCaptureSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", goal: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="free-trial" className="gym-section bg-background relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="gym-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-body">Limited Offer</p>
            <h2 className="gym-heading text-4xl md:text-6xl mb-4">
              Try The Gym <span className="gym-text-gradient">Free For 3 Days</span>
            </h2>
            <p className="text-muted-foreground font-body">
              No commitment. No credit card. Just results.
            </p>
            <p className="text-primary font-body text-sm mt-2 font-semibold">
              ⚡ Only 7 trial slots left this week
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-card border border-border rounded-lg px-6 py-4 text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                maxLength={20}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-card border border-border rounded-lg px-6 py-4 text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-card border border-border rounded-lg px-6 py-4 text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <select
                value={form.goal}
                onChange={(e) => setForm({ ...form, goal: e.target.value })}
                required
                className="w-full bg-card border border-border rounded-lg px-6 py-4 text-foreground font-body focus:outline-none focus:border-primary transition-colors appearance-none"
              >
                <option value="" disabled>Select Your Fitness Goal</option>
                <option value="weight-loss">Weight Loss</option>
                <option value="muscle-gain">Muscle Gain</option>
                <option value="general-fitness">General Fitness</option>
                <option value="sports-performance">Sports Performance</option>
              </select>
              <Button variant="cta" size="xl" className="w-full" type="submit">
                Claim Free Trial
              </Button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="font-display text-3xl uppercase mb-2">You're In!</h3>
              <p className="text-muted-foreground font-body mb-6">
                We'll contact you within 24 hours to schedule your trial.
              </p>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open("https://wa.me/1234567890", "_blank")}
              >
                Chat on WhatsApp Instead
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default LeadCaptureSection;
