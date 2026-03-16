import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do I need experience to join?",
    a: "Absolutely not. Our coaches work with all levels — from complete beginners to competitive athletes. We'll create a custom plan that matches your current fitness level.",
  },
  {
    q: "What does the free trial include?",
    a: "3 full days of unlimited gym access, one complimentary group class, and a body composition analysis with a coach. No credit card required.",
  },
  {
    q: "Are personal trainers included?",
    a: "Personal training sessions are included in our Pro and Elite plans. Basic members can add PT sessions at a discounted rate.",
  },
  {
    q: "Can I cancel my membership anytime?",
    a: "Yes. All our plans are month-to-month with no long-term contracts. Cancel anytime with 30 days notice — no cancellation fees.",
  },
  {
    q: "What are the gym hours?",
    a: "We're open Monday–Friday 5AM–11PM, Saturday 6AM–10PM, and Sunday 7AM–9PM. Elite members have 24/7 access.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="gym-section bg-card">
      <div className="gym-container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-body">FAQ</p>
          <h2 className="gym-heading text-4xl md:text-6xl">
            Got <span className="gym-text-gradient">Questions?</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/30 transition-colors"
              >
                <span className="font-body font-semibold text-foreground pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-muted-foreground font-body leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
