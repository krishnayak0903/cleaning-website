import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const plans = [
  {
    name: "Basic",
    description: "Perfect for regular maintenance",
    price: "120",
    features: [
      "Dusting all surfaces",
      "Vacuuming & mopping floors",
      "Bathroom sanitation",
      "Kitchen counter & sink wipe down",
      "Trash removal"
    ],
    highlighted: false
  },
  {
    name: "Standard",
    description: "Our most popular comprehensive clean",
    price: "180",
    features: [
      "Everything in Basic, plus:",
      "Baseboard dusting",
      "Inside microwave cleaning",
      "Window sills & blinds",
      "Light fixtures dusting",
      "Furniture vacuuming"
    ],
    highlighted: true
  },
  {
    name: "Deep Clean",
    description: "Intensive top-to-bottom detail",
    price: "350",
    features: [
      "Everything in Standard, plus:",
      "Inside oven & fridge",
      "Cabinet interiors (if empty)",
      "Heavy scrub of tile grout",
      "Spot cleaning walls/doors",
      "Air vent wiping"
    ],
    highlighted: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground">
            No hidden fees, no surprises. Just straightforward pricing for spotless results. (Starting prices)
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={plan.highlighted ? "md:-mt-8 md:mb-8" : ""}
            >
              <Card className={`relative h-full flex flex-col ${
                plan.highlighted 
                  ? 'border-2 border-primary shadow-2xl' 
                  : 'border border-border shadow-lg'
              }`}>
                {plan.highlighted && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase shadow-md">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className="text-center pt-8 pb-4">
                  <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-6 h-10">{plan.description}</p>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-2xl font-semibold text-muted-foreground">$</span>
                    <span className="text-5xl font-extrabold">{plan.price}</span>
                    <span className="text-muted-foreground">/start</span>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-grow pt-6 border-t border-muted/50 mx-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 text-primary font-bold" />
                        </div>
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="pt-8 pb-8 px-6">
                  <Button 
                    className={`w-full h-12 text-base font-semibold rounded-xl transition-all ${
                      plan.highlighted 
                        ? 'bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5' 
                        : 'bg-muted hover:bg-muted/80 text-foreground'
                    }`}
                    variant={plan.highlighted ? "default" : "secondary"}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    data-testid={`button-pricing-${plan.name.toLowerCase()}`}
                  >
                    Choose {plan.name}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
