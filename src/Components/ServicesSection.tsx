export { default } from "../Components/ServicesSection";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Search, BarChart2, Globe, Gauge, Smartphone, FileCode,
  TrendingUp, MapPin, LineChart, Layers, Workflow, Target
} from "lucide-react";

const services = [
  {
    title: "SEO Growth System™",
    description: "A complete search engine optimization system designed to dominate rankings and drive organic traffic at scale.",
    icon: Search,
    features: [
      { icon: FileCode, label: "Technical SEO Optimization" },
      { icon: Target, label: "Keyword Strategy" },
      { icon: Layers, label: "On-page SEO" },
      { icon: TrendingUp, label: "Authority Building" },
      { icon: LineChart, label: "Analytics Tracking" },
      { icon: MapPin, label: "Local SEO Optimization" },
    ],
  },
  {
    title: "Conversion Website Design™",
    description: "Websites built for one purpose: turning visitors into customers through strategic design and UX.",
    icon: Globe,
    features: [
      { icon: Layers, label: "UI/UX Strategy" },
      { icon: BarChart2, label: "High-converting Layout" },
      { icon: Gauge, label: "Speed Optimization" },
      { icon: Search, label: "SEO-friendly Structure" },
      { icon: Smartphone, label: "Mobile-first Design" },
      { icon: Workflow, label: "Lead Funnel Integration" },
    ],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Productized Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Not generic services. Packaged growth systems with proven frameworks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="glass-card-hover p-8 md:p-10"
              style={{ perspective: "800px" }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 glow-ring">
                <service.icon size={28} className="text-primary" />
              </div>

              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground font-body mb-8">{service.description}</p>

              <div className="grid grid-cols-2 gap-4">
                {service.features.map((f) => (
                  <div key={f.label} className="flex items-center gap-3">
                    <f.icon size={16} className="text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{f.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
