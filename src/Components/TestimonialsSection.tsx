import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, MedCare Clinic",
    review: "GrowthEngine completely transformed our online presence. Our patient inquiries increased by 230% within 6 months.",
    rating: 5,
  },
  {
    name: "James Porter",
    role: "Partner, LegalPro Firm",
    review: "The SEO strategy they implemented took us from page 5 to the top 3 results. Our inbound leads have never been higher.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Founder, FitZone",
    review: "Not only did they build a stunning website, but they also integrated a lead funnel that converts like crazy. Worth every penny.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What People <span className="gradient-text">Say About Us</span>
          </h2>
        </motion.div>

        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="glass-card p-10 md:p-14 text-center"
        >
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} size={18} className="text-primary fill-primary" />
            ))}
          </div>
          <p className="text-lg md:text-xl text-foreground mb-8 font-body leading-relaxed">
            "{t.review}"
          </p>
          <div>
            <div className="font-bold text-lg">{t.name}</div>
            <div className="text-sm text-muted-foreground">{t.role}</div>
          </div>
        </motion.div>

        <div className="flex justify-center gap-4 mt-8">
          <button onClick={prev} className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary/50 transition-colors">
            <ChevronLeft size={20} />
          </button>
          <button onClick={next} className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary/50 transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
