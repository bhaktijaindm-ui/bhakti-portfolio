import { Link } from "react-router-dom";

const FooterSection = () => (
  <footer className="border-t border-border py-16 px-6 md:px-12 lg:px-20">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
      <div className="md:col-span-2">
        <Link to="/" className="text-2xl font-bold gradient-text">GrowthEngine</Link>
        <p className="text-muted-foreground font-body mt-4 max-w-sm text-sm leading-relaxed">
          We turn websites into revenue machines through conversion-focused
          design and growth-driven SEO strategies.
        </p>
      </div>

      <div>
        <h4 className="font-semibold mb-4">Services</h4>
        <ul className="space-y-3">
          {["SEO Growth System", "Website Design", "Local SEO", "Analytics"].map((item) => (
            <li key={item}>
              <a href="/#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-4">Company</h4>
        <ul className="space-y-3">
          <li><a href="/#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
          <li><a href="/#cases" className="text-sm text-muted-foreground hover:text-primary transition-colors">Case Studies</a></li>
          <li><Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
          <li><a href="/#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
        </ul>
      </div>
    </div>

    <div className="neon-line mt-12 mb-8" />

    <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
      © 2026 GrowthEngine. All rights reserved.
    </div>
  </footer>
);

export default FooterSection;
