export { default } from "../Components/CaseStudiesSection";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cases } from "@/data/cases";

const CaseStudiesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cases" className="section-padding relative" ref={ref}>
      <div className="neon-line mb-24" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Proven <span className="gradient-text">SEO Results</span> You Can Trust
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Real results from real clients. No vanity metrics.
          </p>
        </motion.div>

        {/* Bento grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`glass-card-hover group cursor-pointer overflow-hidden ${i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
            >
              <Link to={`/cases/${c.slug}`} className="block h-full">
                <div className={`relative overflow-hidden ${i === 0 ? "h-64 lg:h-80" : "h-48"}`}>
                  <img
                    src={c.image}
                    alt={c.client}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/20 text-primary backdrop-blur-sm">
                      {c.industry}
                    </span>
                  </div>
                </div>

                <div className="p-6 lg:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {c.client}
                    </h3>
                    <ArrowUpRight className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" size={20} />
                  </div>

                  {i === 0 && (
                    <p className="text-sm text-muted-foreground mb-6 font-body">{c.excerpt}</p>
                  )}

                  <div className="flex flex-wrap gap-4">
                    {c.metrics.map((m) => (
                      <div key={m.label} className="flex-1 min-w-[80px]">
                        <div className="text-lg font-bold gradient-text">{m.value}</div>
                        <div className="text-xs text-muted-foreground">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
