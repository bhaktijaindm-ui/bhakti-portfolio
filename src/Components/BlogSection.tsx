import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { posts } from "@/data/blog";

const BlogSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="section-padding relative" ref={ref}>
      <div className="neon-line mb-24" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Insights That <span className="gradient-text">Drive Growth</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass-card-hover group cursor-pointer overflow-hidden md:row-span-2"
          >
            <Link to={`/blog/${posts[0].slug}`} className="block h-full">
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                    {posts[0].category}
                  </span>
                  <span className="text-xs text-muted-foreground">{posts[0].date}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {posts[0].title}
                </h3>
                <p className="text-muted-foreground font-body text-sm mb-6">
                  {posts[0].excerpt}
                </p>
                <span className="text-sm text-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </motion.article>

          {posts.slice(1).map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: (i + 1) * 0.15 }}
              className="glass-card-hover group cursor-pointer overflow-hidden flex flex-col"
            >
              <Link to={`/blog/${post.slug}`} className="flex flex-col sm:flex-row md:flex-col h-full">
                <div className="relative h-48 sm:w-48 sm:h-auto md:w-full md:h-44 overflow-hidden flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm flex-1 mb-4">
                    {post.excerpt}
                  </p>
                  <span className="text-sm text-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/blog" className="glow-button-outline inline-block">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
