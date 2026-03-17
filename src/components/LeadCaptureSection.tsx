import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import LeadCaptureForm from "./LeadCaptureForm";

const LeadCaptureSection = () => {
  return (
    <section id="free-trial" className="gym-section bg-background relative overflow-hidden py-16 lg:py-24">
      {/* Enhanced glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      {/* Section Header */}
      <div className="text-center mb-12 lg:mb-16 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-primary uppercase tracking-[0.3em] text-xs sm:text-sm mb-3 font-body font-semibold"
        >
          Limited Offer
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="gym-heading text-4xl sm:text-5xl lg:text-6xl mb-4"
        >
          Try Free <span className="gym-text-gradient">For 3 Days</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          <p className="text-muted-foreground font-body text-sm sm:text-base font-medium">
            ⚡ Only 7 trial slots left this week
          </p>
        </motion.div>
      </div>

      <div className="gym-container relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

            {/* Left Side: Map with Location Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative group"
            >
              <div className="bg-card/50 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-border shadow-xl h-full flex flex-col">
                <div className="relative w-full h-[300px] lg:h-[450px] rounded-xl overflow-hidden shadow-2xl border border-white/10 mb-4">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10 pointer-events-none" />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none z-10" />
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979146!2d73.7258327915!3d20.7503012984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sus!4v1703621434919!5m2!1sen!2sus"
                    className="w-full h-full border-0 grayscale invert opacity-80 transition-transform duration-700 group-hover:scale-110"
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Location Details Card */}
                <div className="grid grid-cols-2 gap-3 mt-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground p-3 bg-background/50 rounded-lg border border-border">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="truncate">Downtown, Main St</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground p-3 bg-background/50 rounded-lg border border-border">
                    <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="truncate">Open 24/7</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-card/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-border shadow-xl h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="font-display text-2xl mb-2">Start Your Journey</h3>
                </div>
                <div className="relative flex-1">
                  <LeadCaptureForm />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadCaptureSection;