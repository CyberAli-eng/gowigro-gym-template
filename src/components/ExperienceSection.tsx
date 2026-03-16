import { motion } from "framer-motion";
import { Dumbbell, Heart, Zap, Users, Target } from "lucide-react";

const experiences = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    description: "Olympic platforms, power racks, and a complete free-weight arsenal. Built for serious lifters.",
  },
  {
    icon: Heart,
    title: "Cardio Zone",
    description: "State-of-the-art treadmills, rowers, and assault bikes. Burn fat, build endurance.",
  },
  {
    icon: Zap,
    title: "Functional Training",
    description: "Battle ropes, kettlebells, sleds, and rigs. Train movement, not just muscles.",
  },
  {
    icon: Target,
    title: "Personal Coaching",
    description: "1-on-1 sessions with certified coaches who build custom programs around your goals.",
  },
  {
    icon: Users,
    title: "Group Classes",
    description: "HIIT, CrossFit, Boxing, Yoga. High-energy sessions that build community and discipline.",
  },
];

const ExperienceSection = () => {
  return (
    <section className="gym-section bg-card">
      <div className="gym-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-body">The Experience</p>
          <h2 className="gym-heading text-4xl md:text-6xl">
            More Than A Gym.
            <br />
            <span className="gym-text-gradient">A Performance Lab.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="gym-card p-8 group cursor-default"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <exp.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl uppercase tracking-wide mb-3">{exp.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
