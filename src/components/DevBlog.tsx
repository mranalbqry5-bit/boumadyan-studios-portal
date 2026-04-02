import { Calendar, ArrowRight } from "lucide-react";

const posts = [
  {
    date: "Mar 28, 2026",
    title: "UE5 Nanite Integration: How We Render Millions of Polygons",
    excerpt: "Deep dive into our use of Nanite for environment detail that pushes the boundaries of real-time rendering.",
    tag: "Engineering",
  },
  {
    date: "Mar 15, 2026",
    title: "Season 1 Battle Pass: Everything You Need to Know",
    excerpt: "New skins, emotes, and exclusive rewards await in our first seasonal content drop.",
    tag: "Updates",
  },
  {
    date: "Mar 01, 2026",
    title: "Character Design: From Concept Art to Pixar-Quality 3D",
    excerpt: "Our art team shares the pipeline behind creating high-fidelity stylized characters.",
    tag: "Art",
  },
];

const DevBlog = () => {
  return (
    <section id="blog" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-3">Developer Updates</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase">
            <span className="gradient-text">Dev Blog</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.title} className="glass rounded-xl overflow-hidden group hover:box-glow transition-all duration-300">
              <div className="h-2 gradient-primary" />
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-primary font-semibold uppercase tracking-wider">{post.tag}</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                <button className="flex items-center gap-2 text-sm text-primary font-semibold group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevBlog;
