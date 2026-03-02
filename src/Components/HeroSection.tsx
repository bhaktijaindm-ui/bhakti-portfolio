import { motion } from "framer-motion";
import heroMockup from "@/assets/hero-mockup.png";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary">Growth-Driven Digital Agency</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
            Turning Websites Into{" "}
            <span className="gradient-text">Revenue Machines</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mb-10 font-body">
            We design conversion-focused websites and growth-driven SEO systems
            that generate leads, traffic, and long-term authority.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="glow-button text-center">
              Get Free Website Audit
            </a>
            <a href="#cases" className="glow-button-outline text-center">
              View Our Work
            </a>
          </div>

          <div className="flex items-center gap-8 mt-12">
            {[
              { value: "150+", label: "Projects" },
              { value: "98%", label: "Satisfaction" },
              { value: "50K+", label: "Leads Generated" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative floating hidden lg:block"
        >
          <div className="relative">
            <img
              src={heroMockup}
              alt="SEO Analytics Dashboard"
              className="w-full rounded-2xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
