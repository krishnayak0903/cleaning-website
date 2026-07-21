import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    text: "They completely transformed my home. I walked in after a long day at work and almost cried from relief. Every surface was shining, and it smelled incredible.",
    rating: 5,
    type: "Residential Client"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    text: "We hired A Florida Cleaning for our downtown office. The attention to detail is fantastic. The team is always punctual, professional, and thorough.",
    rating: 5,
    type: "Commercial Client"
  },
  {
    id: 3,
    name: "Emily Chen",
    text: "The move-out clean they did for my apartment ensured I got my full deposit back. They got into corners and appliances I didn't even know were dirty!",
    rating: 5,
    type: "Move-Out Client"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Hear from the people whose spaces we've revitalized.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <TestimonialCard testimonial={t} />
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative h-[350px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <TestimonialCard testimonial={testimonials[currentIndex]} />
            </motion.div>
          </AnimatePresence>
          
          {/* Indicators */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 pb-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow bg-white">
      <CardContent className="p-8 flex flex-col h-full relative">
        <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
        
        <div className="flex gap-1 mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
          ))}
        </div>
        
        <p className="text-foreground/80 italic mb-8 flex-grow text-lg leading-relaxed">
          "{testimonial.text}"
        </p>
        
        <div className="mt-auto">
          <p className="font-bold text-foreground">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.type}</p>
        </div>
      </CardContent>
    </Card>
  );
}
