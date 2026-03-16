import { useRef } from "react";
import { motion } from "framer-motion";
import facility1 from "@/assets/facility-1.jpg";
import facility2 from "@/assets/facility-2.jpg";
import facility3 from "@/assets/facility-3.jpg";
import facility4 from "@/assets/facility-4.jpg";

const images = [
  { src: facility1, label: "Strength Zone" },
  { src: facility2, label: "Cardio Arena" },
  { src: facility3, label: "Functional Area" },
  { src: facility4, label: "Group Training" },
];

const FacilitiesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="gym-section bg-card overflow-hidden">
      <div className="gym-container mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-body">Our Space</p>
          <h2 className="gym-heading text-4xl md:text-6xl">
            World-Class <span className="gym-text-gradient">Facilities</span>
          </h2>
        </motion.div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-6 px-4 md:px-8 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none" }}
      >
        {images.map((img, i) => (
          <motion.div
            key={img.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex-shrink-0 w-[80vw] md:w-[40vw] lg:w-[30vw] snap-center relative group rounded-lg overflow-hidden"
          >
            <img
              src={img.src}
              alt={img.label}
              className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="font-display text-2xl uppercase tracking-wide">{img.label}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FacilitiesSection;
