import { motion } from 'framer-motion';
import { Shield, Leaf, Clock, Star } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      title: "Licensed & Insured",
      description: "Full coverage for your peace of mind while we are in your space.",
      icon: Shield
    },
    {
      title: "Eco-Friendly Products",
      description: "Safe for kids, pets, and the environment without compromising on clean.",
      icon: Leaf
    },
    {
      title: "Flexible Scheduling",
      description: "We work around your life, offering appointments that fit your calendar.",
      icon: Clock
    },
    {
      title: "Satisfaction Guarantee",
      description: "If you're not fully satisfied, we'll return and make it right.",
      icon: Star
    }
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {points.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 shadow-inner backdrop-blur-sm">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
                <p className="text-primary-foreground/80 font-light text-sm md:text-base">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
