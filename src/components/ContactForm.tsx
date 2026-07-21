import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { MapPin, Mail, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  address: z.string().min(5, "Address is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
});

export default function ContactForm() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Quote Request Received!",
      description: "We'll get back to you within 24 hours to schedule your service.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Free Quote</h2>
          <p className="text-lg text-muted-foreground">
            Ready for a spotless space? Fill out the form below and we'll provide a custom estimate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-border/50">
          
          {/* Form Side */}
          <div className="p-8 md:p-12">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="bg-slate-50/50" data-testid="input-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" {...field} className="bg-slate-50/50" data-testid="input-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="(555) 123-4567" {...field} className="bg-slate-50/50" data-testid="input-phone" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Needed</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-slate-50/50" data-testid="select-service">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="residential">Residential Cleaning</SelectItem>
                            <SelectItem value="commercial">Office Cleaning</SelectItem>
                            <SelectItem value="deep">Deep Cleaning</SelectItem>
                            <SelectItem value="move">Move-In/Move-Out</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Property Address</FormLabel>
                      <FormControl>
                        <Input placeholder="123 Sunny Blvd, Orlando, FL" {...field} className="bg-slate-50/50" data-testid="input-address" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Details (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about specific areas that need attention, square footage, or pets." 
                          className="resize-none h-32 bg-slate-50/50" 
                          {...field} 
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full text-lg h-14 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5" data-testid="button-submit-quote">
                  Request Free Quote
                </Button>
              </form>
            </Form>
          </div>

          {/* Map/Info Side */}
          <div className="bg-primary p-8 md:p-12 text-primary-foreground flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/40 via-transparent to-transparent opacity-80" />
            
            <div className="relative z-10 space-y-10">
              <div>
                <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
                <p className="text-primary-foreground/80 font-light">
                  We're here to answer any questions you have about our services.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 backdrop-blur-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/70 mb-1">Call Us</p>
                    <a href="tel:+15551234567" className="text-lg font-semibold hover:underline">(555) 123-4567</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 backdrop-blur-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/70 mb-1">Email Us</p>
                    <a href="mailto:hello@afloridacleaning.com" className="text-lg font-semibold hover:underline">hello@afloridacleaning.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 backdrop-blur-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/70 mb-1">Service Area</p>
                    <p className="text-lg font-semibold">Orlando & Central Florida</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder Graphic */}
            <div className="relative z-10 mt-12 h-48 w-full bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center justify-center backdrop-blur-sm">
              <MapPin className="w-12 h-12 text-accent mb-3 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
              <p className="font-semibold text-lg">Serving Central Florida</p>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CiAgPHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0wIDEwaDQwTTAgMjBoNDBNMCAzMGg0ME0xMCAwdjQwTTIwIDB2NDBNMzAgMHY0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')] opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent)] rounded-2xl" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
