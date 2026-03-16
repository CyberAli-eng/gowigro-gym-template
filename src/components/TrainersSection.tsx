import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";

const trainers = [
  {
    name: "Marcus Cole",
    specialty: "Strength & Powerlifting",
    experience: "8 Years",
    image: trainer1,
  },
  {
    name: "Elena Voss",
    specialty: "Boxing & HIIT",
    experience: "6 Years",
    image: trainer2,
  },
  {
    name: "Jake Torres",
    specialty: "CrossFit & Functional",
    experience: "10 Years",
    image: trainer3,
  },
];

const TrainersSection = () => {
  return (
    <section className="gym-section bg-background">
      <div className="gym-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-body">The Team</p>
          <h2 className="gym-heading text-4xl md:text-6xl">
            World-Class <span className="gym-text-gradient">Coaches</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {trainers.map((trainer, i) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary/40 transition-colors">
                    <Instagram className="w-5 h-5 text-foreground" />
                  </button>
                </div>
              </div>
              <h3 className="font-display text-2xl uppercase tracking-wide">{trainer.name}</h3>
              <p className="text-primary font-body text-sm">{trainer.specialty}</p>
              <p className="text-muted-foreground font-body text-sm">{trainer.experience} Experience</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
