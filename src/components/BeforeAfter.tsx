import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ComparisonPairProps {
  title: string;
}

function ComparisonPair({ title }: ComparisonPairProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  // Add global mouse up to stop dragging if they let go outside the component
  useEffect(() => {
    const handleMouseUpGlobal = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUpGlobal);
    window.addEventListener('touchend', handleMouseUpGlobal);
    return () => {
      window.removeEventListener('mouseup', handleMouseUpGlobal);
      window.removeEventListener('touchend', handleMouseUpGlobal);
    };
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-semibold text-center text-foreground">{title}</h3>
      <div 
        ref={containerRef}
        className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-md group"
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onMouseMove={handleMouseMove}
        onTouchStart={(e) => {
          setIsDragging(true);
          handleMove(e.touches[0].clientX);
        }}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER (Background) */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent flex items-center justify-end p-8">
          <span className="text-white font-bold text-2xl tracking-widest opacity-40 rotate-[-10deg]">AFTER</span>
        </div>

        {/* BEFORE (Foreground, clipped) */}
        <div 
          className="absolute inset-0 bg-muted flex items-center justify-start p-8"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
          <span className="text-muted-foreground font-bold text-2xl tracking-widest opacity-40 rotate-[-10deg]">BEFORE</span>
        </div>

        {/* DRAGGER LINE */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.3)]"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <polyline points="9 18 3 12 9 6"></polyline>
              <polyline points="15 18 21 12 15 6"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const comparisons = [
    "Kitchen Deep Clean",
    "Move-Out Cleaning",
    "Bathroom Restore",
    "Office Refresh"
  ];

  return (
    <section id="before-after" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">See the Difference We Make</h2>
          <p className="text-lg text-muted-foreground">
            Swipe left and right to reveal the spotless transformations we deliver every day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {comparisons.map((title, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ComparisonPair title={title} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
