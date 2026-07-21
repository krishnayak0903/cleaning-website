import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl relative bg-gradient-to-tr from-primary to-secondary p-8 flex items-end">
              {/* Decorative graphic pattern */}
              <div className="absolute inset-0 opacity-10" 
                style={{
                  backgroundImage: `repeating-linear-gradient(45deg, #fff 0, #fff 2px, transparent 2px, transparent 10px)`
                }}
              />
              <div className="relative z-10 bg-white/90 backdrop-blur rounded-2xl p-6 shadow-lg inline-block">
                <p className="text-4xl font-extrabold text-primary mb-1">10+</p>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Years Experience</p>
              </div>
            </div>
            
            {/* Background offset square */}
            <div className="absolute -inset-4 bg-muted/50 rounded-3xl -z-10 translate-x-8 translate-y-8" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">About A Florida Cleaning</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Local roots, professional standards, immaculate results.
              </h3>
            </div>
            
            <div className="space-y-4 text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                Founded on the principle that a clean space elevates your entire day, A Florida Cleaning has been serving communities across the state with unmatched dedication. We aren't just cleaning houses; we're restoring peace of mind.
              </p>
              <p>
                Our team is composed of vetted, trained professionals who treat your property with the utmost respect. We use top-tier, eco-friendly products that leave your home smelling fresh and feeling pristine, without harsh chemical residues.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-muted">
              <div>
                <p className="text-4xl font-bold text-foreground mb-2">500+</p>
                <p className="text-sm text-muted-foreground font-medium">Happy Clients</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-foreground mb-2">10k+</p>
                <p className="text-sm text-muted-foreground font-medium">Spaces Cleaned</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
