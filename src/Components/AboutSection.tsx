import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, TrendingUp, Zap, BarChart3 } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const points = [
    { icon: Target, text: "Most businesses struggle with online visibility" },
    { icon: TrendingUp, text: "Poor website structure kills conversions" },
    { icon: Zap, text: "No SEO strategy wastes valuable traffic" },
    { icon: BarChart3, text: "We combine design + SEO for real growth" },
  ];

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="neon-line mb-24" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — Glass card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="glass-card p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/20 blur-[60px]" />
          <div className="relative space-y-6">
            {points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <point.icon size={20} className="text-primary" />
                </div>
                <p className="text-muted-foreground font-body">{point.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            We Don't Just Build Websites.{" "}
            <span className="gradient-text">We Build Digital Assets.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed font-body mb-8">
            Every website we create is engineered for growth. We combine
            stunning design with data-driven SEO strategies to turn your online
            presence into a revenue-generating machine. No fluff, no vanity
            metrics — just real, measurable results.
          </p>
          <a href="#services" className="glow-button inline-block">
            Explore Our Services
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
