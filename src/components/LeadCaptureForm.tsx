import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Loader2, User, Phone, Mail } from "lucide-react";

interface LeadCaptureFormProps {
  onSuccess?: () => void;
}

const LeadCaptureForm = ({ onSuccess }: LeadCaptureFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", goal: "", plan: "" });
  const [errors, setErrors] = useState({ phone: "", email: "" });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email is required";
    if (!re.test(email)) return "Please enter a valid email address (e.g., name@domain.com)";
    return "";
  };

  const validatePhone = (phone: string) => {
    const re = /^\+?[0-9]{10,15}$/;
    if (!phone) return "Phone number is required";
    if (!re.test(phone)) return "Must include country code and 10-15 digits (e.g., +12345678900)";
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailError = validateEmail(form.email);
    const phoneError = validatePhone(form.phone);

    if (emailError || phoneError) {
      setErrors({ email: emailError, phone: phoneError });
      return;
    }

    setErrors({ email: "", phone: "" });
    setIsSubmitting(true);

    try {
      const gasUrl = import.meta.env.VITE_GAS_URL;
      if (gasUrl) {
        await fetch(gasUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form)
        });
      }

      setSubmitted(true);
      localStorage.setItem('leadCaptured', 'true');

      if (onSuccess) onSuccess();

      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: "", phone: "", email: "", goal: "", plan: "" });
      }, 5000);

    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center justify-center text-center py-12 bg-card/50 backdrop-blur-sm rounded-2xl h-full"
      >
        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6">
          <CheckCircle className="w-12 h-12 text-primary" />
        </div>
        <h3 className="font-display text-3xl uppercase mb-3">You're In!</h3>
        <p className="text-muted-foreground font-body mb-8 max-w-xs">
          A welcome email is on its way. We'll contact you within 24 hours to confirm your trial session.
        </p>
        <div className="space-y-3 w-full max-w-xs">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open("https://wa.me/1234567890", "_blank")}
            className="w-full group"
          >
            <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            Chat on WhatsApp
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.location.href = "mailto:[EMAIL_ADDRESS]"}
            className="w-full text-muted-foreground"
          >
            <Mail className="w-4 h-4 mr-2" />
            [EMAIL_ADDRESS]
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 transition-opacity duration-300">
      <div className="space-y-1">
        <label className="text-sm font-medium text-foreground">Full Name</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
            <User className="w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder="Enter Your Full Name"
            required
            maxLength={100}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-background/80 border border-border rounded-lg pl-10 pr-4 py-3 text-foreground font-body placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
          />
        </div>
      </div>
      <div className="space-y-1">
        <label className="text-sm font-medium text-foreground">Phone Number</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
            <Phone className="w-4 h-4" />
          </div>
          <input
            type="tel"
            placeholder="Enter You Phone"
            required
            value={form.phone}
            onChange={(e) => {
              setForm({ ...form, phone: e.target.value });
              if (errors.phone) setErrors({ ...errors, phone: validatePhone(e.target.value) });
            }}
            onBlur={(e) => setErrors({ ...errors, phone: validatePhone(e.target.value) })}
            className={`w-full bg-background/80 border rounded-lg pl-10 pr-4 py-3 text-foreground font-body placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 transition-all ${errors.phone ? 'border-destructive focus:border-destructive focus:ring-destructive' : 'border-border focus:border-primary focus:ring-primary'}`}
          />
        </div>
        {errors.phone && <p className="text-xs text-destructive mt-1 font-medium">{errors.phone}</p>}
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-foreground">Email Address</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
            <Mail className="w-4 h-4" />
          </div>
          <input
            type="email"
            placeholder="[EMAIL_ADDRESS]"
            required
            value={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: validateEmail(e.target.value) });
            }}
            onBlur={(e) => setErrors({ ...errors, email: validateEmail(e.target.value) })}
            className={`w-full bg-background/80 border rounded-lg pl-10 pr-4 py-3 text-foreground font-body placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 transition-all ${errors.email ? 'border-destructive focus:border-destructive focus:ring-destructive' : 'border-border focus:border-primary focus:ring-primary'}`}
          />
        </div>
        {errors.email && <p className="text-xs text-destructive mt-1 font-medium">{errors.email}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-sm font-medium text-foreground">Select Plan</label>
          <select
            value={form.plan}
            onChange={(e) => setForm({ ...form, plan: e.target.value })}
            required
            className="w-full bg-background/80 border border-border rounded-lg px-4 py-3 text-muted-foreground font-body focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer"
          >
            <option value="" disabled>Choose plan</option>
            <option value="Basic">Basic • $49/mo</option>
            <option value="Pro">Pro • $89/mo</option>
            <option value="Elite">Elite • $149/mo</option>
          </select>
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-foreground">Fitness Goal</label>
          <select
            value={form.goal}
            onChange={(e) => setForm({ ...form, goal: e.target.value })}
            required
            className="w-full bg-background/80 border border-border rounded-lg px-4 py-3 text-muted-foreground font-body focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer"
          >
            <option value="" disabled>Select goal</option>
            <option value="weight-loss">🏃 Weight Loss</option>
            <option value="muscle-gain">💪 Muscle Gain</option>
            <option value="general-fitness">🎯 General Fitness</option>
            <option value="sports-performance">⚡ Performance</option>
          </select>
        </div>
      </div>

      <div className="flex justify-center pt-2">
        <Button
          variant="cta"
          size="lg"
          className="text-base font-semibold"
          type="submit"
          disabled={isSubmitting || !!errors.email || !!errors.phone}
        >
          {isSubmitting ? (
            <Loader2 className="w-6 h-6 animate-spin mx-auto" />
          ) : (
            "Claim Your Free Trial →"
          )}
        </Button>
      </div>
    </form>
  );
};

export default LeadCaptureForm;
