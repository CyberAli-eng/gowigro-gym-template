import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    text: "This gym completely changed my life. Lost 25kg in 8 months with the personal training program. The coaches push you beyond what you think is possible.",
    rating: 5,
    result: "Lost 25kg",
  },
  {
    name: "James K.",
    text: "Best investment I've ever made. The facilities are world-class and the trainers actually care about your progress. Not your average gym.",
    rating: 5,
    result: "Gained 12kg muscle",
  },
  {
    name: "Priya D.",
    text: "I was scared to start but the community here is incredibly supportive. The group classes are intense but addictive. 10/10 recommend.",
    rating: 5,
    result: "Completed first marathon",
  },
  {
    name: "Michael R.",
    text: "After trying 5 different gyms, this is the one that stuck. The accountability system and coaching quality is unmatched.",
    rating: 5,
    result: "Lost 18kg in 6 months",
  },
];

const SocialProofSection = () => {
  return (
    <section className="gym-section bg-background overflow-hidden">
      <div className="gym-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-body">Testimonials</p>
          <h2 className="gym-heading text-4xl md:text-6xl">
            Real People. <span className="gym-text-gradient">Real Results.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="gym-card p-8"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/90 text-lg mb-6 font-body leading-relaxed">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground font-body">{t.name}</p>
                  <p className="text-primary text-sm font-body">{t.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-card border border-border rounded-full px-6 py-3">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-foreground font-body font-semibold">4.9/5</span>
            <span className="text-muted-foreground font-body">from 500+ Google Reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
