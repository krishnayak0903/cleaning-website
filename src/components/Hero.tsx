import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background with CSS pattern */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary via-primary/90 to-accent">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        {/* Soft light blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent-foreground/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/20 backdrop-blur-sm text-sm font-semibold tracking-wider uppercase mb-2">
            Professional & Reliable
          </span>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Florida's Most Trusted <br className="hidden md:block" />
            <span className="text-secondary">Cleaning Service</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto font-light">
            Experience the joy of a spotless home or office. We bring the sunshine in and take the dirt out.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              size="lg"
              className="w-full sm:w-auto text-lg px-8 h-14 rounded-full bg-white text-primary hover:bg-secondary hover:text-primary shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              data-testid="button-hero-quote"
            >
              Get a Free Quote
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-lg px-8 h-14 rounded-full border-2 border-white text-white hover:bg-white/10 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-transparent"
              onClick={() => window.location.href = 'tel:+1234567890'}
              data-testid="button-hero-call"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10">
        <svg
          className="relative block w-full h-[50px] md:h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.3,196.36,108.68,240.25,101.6,281.4,85.2,321.39,56.44Z"
            className="fill-background"
          ></path>
        </svg>
      </div>
    </section>
  );
}
