import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const transformations = [
  { name: "Rahul S.", lost: "18kg", duration: "6 months", detail: "From sedentary office worker to marathon runner" },
  { name: "Sarah M.", lost: "25kg", duration: "8 months", detail: "Complete lifestyle transformation with strength gains" },
  { name: "David L.", lost: "15kg", duration: "4 months", detail: "Built lean muscle and dropped body fat from 30% to 14%" },
];

const TransformationSection = () => {
  return (
    <section className="gym-section bg-card">
      <div className="gym-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-body">Success Stories</p>
          <h2 className="gym-heading text-4xl md:text-6xl">
            <span className="gym-text-gradient">Transformation</span> Stories
          </h2>
        </motion.div>

        <div className="space-y-6">
          {transformations.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="gym-card p-8 flex flex-col md:flex-row md:items-center gap-6 group"
            >
              <div className="flex-1">
                <h3 className="font-display text-3xl uppercase tracking-wide mb-1">{t.name}</h3>
                <p className="text-muted-foreground font-body">{t.detail}</p>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="font-display text-4xl text-primary">{t.lost}</div>
                  <div className="text-muted-foreground text-xs uppercase tracking-wider font-body">Lost</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-4xl text-secondary">{t.duration}</div>
                  <div className="text-muted-foreground text-xs uppercase tracking-wider font-body">Duration</div>
                </div>
                <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
