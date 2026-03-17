import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Target, Award, Users } from "lucide-react";
import heroImg from "@/assets/hero-gym.jpg";
import TrainersSection from "@/components/TrainersSection";
import GymFooter from "@/components/GymFooter";
import LeadCaptureModal from "@/components/LeadCaptureModal";
import { GymNavbar, StickyCTABar, WhatsAppButton, ScrollProgress } from "@/components/ConversionElements";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <ScrollProgress />
      <GymNavbar />

      <main>
        {/* Hero Banner Banner */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImg}
              alt="Elite gym interior"
              className="w-full h-full object-cover object-center fixed-bg pointer-events-none grayscale opacity-40"
              style={{ backgroundAttachment: 'fixed' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="gym-heading text-5xl md:text-7xl lg:text-8xl mb-6">
                Our <span className="gym-text-gradient">Story</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body">
                We didn't just build a gym. We built a sanctuary for those who refuse to settle for average. Welcome to the elite tier of fitness.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-display text-lg uppercase tracking-widest px-8 py-4 rounded-lg transition-transform active:scale-95"
              >
                Join The Movement
              </button>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="gym-section bg-background">
          <div className="gym-container">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-4xl md:text-5xl uppercase">Our <span className="text-primary tracking-wide">Mission</span></h3>
                <p className="text-muted-foreground font-body leading-relaxed text-lg">
                  To forge unshakeable discipline in every individual who walks through our doors. We believe that true strength isn't just physical—it's mental. Our goal is to provide the ultimate environment where excuses die and results are born.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card/50 backdrop-blur-md border border-border p-8 md:p-12 rounded-2xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
                  <Award className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-display text-3xl md:text-4xl uppercase mb-4">The Vision</h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  To become the global standard for elite performance facilities. A place where world-class coaching, bleeding-edge equipment, and an ironclad community intersect to create champions in life and sport.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Methodology / Philosophy */}
        <section className="gym-section bg-card relative overflow-hidden">
          <div className="gym-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-body">Methodology</p>
              <h2 className="gym-heading text-4xl md:text-6xl">
                How We <span className="gym-text-gradient">Train</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Assessment",
                  desc: "Every journey begins with data. We analyze your body mechanics, history, and goals to build a foolproof blueprint."
                },
                {
                  title: "Execution",
                  desc: "Implementation of the plan with precise technique. No wasted reps. High intensity, high focus, driven by expert coaches."
                },
                {
                  title: "Recovery",
                  desc: "Training breaks you down; recovery builds you up. We emphasize nutrition, sleep, and active rest protocols."
                }
              ].map((phase, i) => (
                <motion.div
                  key={phase.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-background border border-border p-8 rounded-2xl relative"
                >
                  <div className="text-primary font-display text-6xl opacity-20 absolute top-4 right-6">
                    0{i + 1}
                  </div>
                  <h4 className="font-display text-2xl uppercase mb-4 mt-8">{phase.title}</h4>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {phase.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Team / Trainers */}
        <TrainersSection />

        {/* Bottom CTA */}
        <section className="py-24 bg-background border-t border-border text-center px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="gym-heading text-4xl md:text-6xl mb-6">Ready to start?</h2>
            <p className="text-muted-foreground text-lg mb-8">Stop waiting for tomorrow. Tomorrow never comes.</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-display text-xl uppercase tracking-widest px-10 py-5 rounded-lg transition-transform active:scale-95 shadow-lg shadow-primary/20"
            >
              Get Your Free Trial
            </button>
          </div>
        </section>

      </main>

      <GymFooter />
      <StickyCTABar />
      <WhatsAppButton />

      {/* Dynamic Popups */}
      <LeadCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
};

export default About;
