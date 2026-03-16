import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    price: "49",
    period: "/month",
    features: ["Full gym access", "Locker room", "Basic equipment", "2 group classes/week", "Mobile app access"],
    popular: false,
  },
  {
    name: "Pro",
    price: "89",
    period: "/month",
    features: [
      "Everything in Basic",
      "Unlimited group classes",
      "1 PT session/month",
      "Nutrition guide",
      "Body composition analysis",
      "Priority booking",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "149",
    period: "/month",
    features: [
      "Everything in Pro",
      "4 PT sessions/month",
      "Custom meal plan",
      "Recovery zone access",
      "Guest passes",
      "24/7 trainer support",
      "VIP locker",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section className="gym-section bg-background">
      <div className="gym-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-body">Membership</p>
          <h2 className="gym-heading text-4xl md:text-6xl">
            Choose Your <span className="gym-text-gradient">Level</span>
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-xl mx-auto">
            No contracts. No hidden fees. Cancel anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`gym-card p-8 relative ${plan.popular ? "border-primary gym-glow-red" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs uppercase tracking-widest font-body font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="font-display text-3xl uppercase tracking-wide mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="font-display text-6xl text-foreground">${plan.price}</span>
                <span className="text-muted-foreground font-body">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-muted-foreground font-body">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.popular ? "hero" : "outline"}
                className="w-full"
                size="lg"
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
