import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';

// Import all sections for the single page scroll site
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BeforeAfter from './components/BeforeAfter';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background w-full overflow-x-hidden flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Hero />
            <BeforeAfter />
            <Services />
            <WhyChooseUs />
            <About />
            <Testimonials />
            <Pricing />
            <ContactForm />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
