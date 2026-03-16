import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from "lucide-react";

const GymFooter = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="gym-container py-16 px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-display text-3xl uppercase tracking-wider text-foreground mb-4">Elite<span className="text-primary">Gym</span></h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Where limits are broken and champions are made. Join the elite.
            </p>
            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors text-muted-foreground">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl uppercase tracking-wide mb-4">Quick Links</h4>
            <ul className="space-y-3 font-body text-sm">
              {["About Us", "Membership", "Trainers", "Classes", "Blog"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl uppercase tracking-wide mb-4">Contact</h4>
            <ul className="space-y-3 font-body text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> 123 Iron Street, Fitness City</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> +1 (555) 123-4567</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> hello@elitegym.com</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-xl uppercase tracking-wide mb-4">Hours</h4>
            <ul className="space-y-3 font-body text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> Mon–Fri: 5AM – 11PM</li>
              <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> Sat: 6AM – 10PM</li>
              <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> Sun: 7AM – 9PM</li>
            </ul>
          </div>
        </div>

        <div className="gym-divider mt-12 mb-6" />
        <p className="text-center text-muted-foreground font-body text-xs">
          © {new Date().getFullYear()} EliteGym. All rights reserved. Built for champions.
        </p>
      </div>
    </footer>
  );
};

export default GymFooter;
