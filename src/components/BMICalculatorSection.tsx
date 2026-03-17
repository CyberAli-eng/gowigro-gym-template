import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-gym.jpg";

const BMICalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState('');

    const calculateBMI = () => {
        const weightNum = parseFloat(weight);
        const heightNum = parseFloat(height);

        if (weightNum > 0 && heightNum > 0) {
            const heightInMeters = heightNum / 100;
            const bmiValue = (weightNum / (heightInMeters * heightInMeters)).toFixed(1);
            setBmi(bmiValue as any); // using any to bypass strict type for now or parsing to string is fine since it's displayed

            const numBmi = parseFloat(bmiValue);
            if (numBmi < 18.5) setCategory('Underweight');
            else if (numBmi >= 18.5 && numBmi <= 24.9) setCategory('Healthy');
            else if (numBmi >= 25 && numBmi <= 29.9) setCategory('Overweight');
            else setCategory('Obese');
        } else {
            setBmi(null);
            setCategory('');
        }
    };

    return (
        <section className="relative py-24 px-4 overflow-hidden">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroImg}
                    alt="Gym Background"
                    className="w-full h-full object-cover object-center fixed-bg pointer-events-none"
                    style={{ backgroundAttachment: 'fixed' }}
                />
                <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Side: Info & Guidance */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="gym-heading text-4xl md:text-5xl text-white">Know Your <span className="gym-text-gradient">BMI</span></h2>
                    <p className="text-gray-300 font-body leading-relaxed">
                        BMI (Body Mass Index) uses your height and weight to estimate if you’re underweight, healthy, overweight, or obese.
                        It’s a quick health indicator — but just the starting point.
                    </p>

                    <div className="space-y-4 mt-8">
                        <h4 className="font-display text-xl text-primary uppercase tracking-widest">Guidance:</h4>
                        <ul className="space-y-3 font-body text-sm md:text-base">
                            <li className="flex gap-3"><span className="text-primary">→</span> <strong>Below 18.5:</strong> Focus on strength training and a calorie-rich diet.</li>
                            <li className="flex gap-3"><span className="text-primary">→</span> <strong>18.5–24.9:</strong> Maintain with balanced workouts and healthy eating.</li>
                            <li className="flex gap-3"><span className="text-primary">→</span> <strong>25–29.9:</strong> Add more cardio and track your calorie intake.</li>
                            <li className="flex gap-3"><span className="text-primary">→</span> <strong>30+:</strong> Work with a trainer for a structured weight loss program.</li>
                        </ul>
                    </div>
                </motion.div>

                {/* Right Side: Calculator Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-black/40 backdrop-blur-md p-8 md:p-12 border border-white/10 rounded-2xl shadow-2xl relative overflow-hidden"
                >
                    <div className="relative z-10">
                        <h3 className="text-2xl font-display mb-8 uppercase italic">BMI Calculator</h3>

                        <div className="grid sm:grid-cols-2 gap-6 mb-8">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-400">Weight (kg)</label>
                                <input
                                    type="number"
                                    min="0"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    placeholder="e.g. 75"
                                    className="w-full bg-black/50 text-white border border-white/20 p-4 rounded-lg focus:outline-none focus:border-primary transition-colors placeholder:text-gray-600"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-400">Height (cm)</label>
                                <input
                                    type="number"
                                    min="0"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                    placeholder="e.g. 180"
                                    className="w-full bg-black/50 text-white border border-white/20 p-4 rounded-lg focus:outline-none focus:border-primary transition-colors placeholder:text-gray-600"
                                />
                            </div>
                        </div>

                        <button
                            onClick={calculateBMI}
                            className="w-full bg-primary text-primary-foreground font-display py-4 rounded-lg uppercase tracking-widest hover:bg-primary/90 transition-all active:scale-[0.98]"
                        >
                            Calculate BMI
                        </button>

                        {/* Results Display */}
                        <AnimatePresence>
                            {bmi && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-8 pt-8 border-t border-border flex justify-between items-center"
                                >
                                    <div>
                                        <p className="text-sm text-gray-400 uppercase">Your Score</p>
                                        <p className="text-5xl font-display text-primary">{bmi}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm text-gray-400 uppercase">Category</p>
                                        <p className="text-xl font-display italic text-white">{category}</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default BMICalculator;