import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="gym-section bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="gym-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="gym-heading text-5xl md:text-7xl lg:text-8xl mb-6">
            Your Transformation
            <br />
            <span className="gym-text-gradient">Starts Today.</span>
          </h2>
          <p className="text-muted-foreground text-lg font-body max-w-xl mx-auto mb-10">
            Stop waiting for Monday. Stop making excuses. The best version of you is one decision away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Book Free Trial
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => window.open("https://wa.me/1234567890", "_blank")}
            >
              Chat on WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
