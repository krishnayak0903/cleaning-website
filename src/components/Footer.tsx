import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          
          <div className="md:col-span-1">
            <a href="#home" className="text-2xl font-bold tracking-tight flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl leading-none">
                A
              </div>
              Florida Cleaning
            </a>
            <p className="text-white/70 font-light leading-relaxed mb-6">
              Bringing sunshine and spotless perfection to homes and offices across Central Florida. Your trust, our guarantee.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-white/70 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#pricing" className="text-white/70 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 tracking-wide">Services</h4>
            <ul className="space-y-3">
              <li className="text-white/70 cursor-default">Residential Cleaning</li>
              <li className="text-white/70 cursor-default">Commercial Cleaning</li>
              <li className="text-white/70 cursor-default">Deep Cleaning</li>
              <li className="text-white/70 cursor-default">Move-In / Move-Out</li>
              <li className="text-white/70 cursor-default">Post-Construction</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 tracking-wide">Contact Us</h4>
            <ul className="space-y-4">
              <li className="text-white/70">
                <span className="block text-white/50 text-sm mb-1">Phone</span>
                (555) 123-4567
              </li>
              <li className="text-white/70">
                <span className="block text-white/50 text-sm mb-1">Email</span>
                hello@afloridacleaning.com
              </li>
              <li className="text-white/70">
                <span className="block text-white/50 text-sm mb-1">Hours</span>
                Mon-Fri: 8am - 6pm<br />
                Sat: 9am - 2pm
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} A Florida Cleaning. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/50 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
