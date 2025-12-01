export default function Home() {
  const posts = [
    {
      title: "Welcome to My Blog",
      date: "December 1, 2025",
      excerpt: "This is where I share my thoughts on software development, open source, and building great products.",
      slug: "welcome"
    },
    {
      title: "Building for the Web",
      date: "November 28, 2025",
      excerpt: "Reflections on modern web development and the tools that shape how we build applications today.",
      slug: "building-for-web"
    },
    {
      title: "On Writing and Thinking",
      date: "November 15, 2025",
      excerpt: "Why writing is one of the most powerful tools for clarifying your thoughts and communicating ideas.",
      slug: "writing-and-thinking"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-2xl mx-auto px-6 py-20">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-5xl font-black mb-3 text-foreground">
            icarus
          </h1>
          <p className="text-muted text-base">
            Personal blog by{" "}
            <span className="text-foreground font-medium">
              Omar Abu Ammouneh
            </span>
            .{" "}
            I explain things with words and code.
          </p>
          <nav className="mt-8 flex gap-6">
            <a
              href="/quotes"
              className="text-base font-semibold text-accent hover:underline transition-colors"
            >
              Quotes →
            </a>
          </nav>
        </header>

        {/* Blog Posts */}
        <div className="space-y-12">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group cursor-pointer transition-transform hover:scale-[1.002]"
            >
              <a href={`/blog/${post.slug}`} className="block">
                <h2 className="text-3xl font-black mb-2 text-foreground group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <time className="text-sm text-muted block mb-3">
                  {post.date}
                </time>
                <p className="text-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </a>
            </article>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-border">
          <div className="flex gap-6 text-sm mb-4">
            <a
              href="https://twitter.com"
              className="text-muted hover:text-accent transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://github.com"
              className="text-muted hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <a
              href="/rss.xml"
              className="text-muted hover:text-accent transition-colors"
            >
              RSS
            </a>
          </div>
          <p className="text-xs text-muted italic">
            Portfolio style inspired (stolen) from{" "}
            <a
              href="https://overreacted.io"
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dan Abramov
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}
