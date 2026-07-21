import { motion } from 'framer-motion';
import { Home, Building, Sparkles, Truck, HardHat, CalendarCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Services() {
  const services = [
    {
      title: 'Residential Cleaning',
      description: 'Comprehensive home cleaning services tailored to your space and lifestyle.',
      icon: Home
    },
    {
      title: 'Office Cleaning',
      description: 'Professional cleaning for workspaces to boost productivity and morale.',
      icon: Building
    },
    {
      title: 'Deep Cleaning',
      description: 'Intensive top-to-bottom cleaning targeting hidden dirt and grime.',
      icon: Sparkles
    },
    {
      title: 'Move-In/Move-Out',
      description: 'Start fresh or leave a spotless space for the next occupants.',
      icon: Truck
    },
    {
      title: 'Post-Construction',
      description: 'Safe removal of construction dust and debris from new builds or remodels.',
      icon: HardHat
    },
    {
      title: 'Recurring Plans',
      description: 'Weekly, bi-weekly, or monthly scheduling to keep your space consistently clean.',
      icon: CalendarCheck
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Cleaning Services</h2>
          <p className="text-lg text-muted-foreground">
            From cozy apartments to sprawling corporate offices, we have a pristine solution for every space.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full border-none shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white group cursor-default">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                      <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
