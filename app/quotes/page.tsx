export default function Quotes() {
  const quotes = [
    {
      text: "The best way to predict the future is to invent it.",
      author: "Alan Kay"
    },
    {
      text: "Programs must be written for people to read, and only incidentally for machines to execute.",
      author: "Harold Abelson"
    },
    {
      text: "Make it work, make it right, make it fast.",
      author: "Kent Beck"
    },
    {
      text: "Simplicity is prerequisite for reliability.",
      author: "Edsger W. Dijkstra"
    },
    {
      text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      author: "Martin Fowler"
    },
    {
      text: "First, solve the problem. Then, write the code.",
      author: "John Johnson"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-2xl mx-auto px-6 py-20">
        {/* Header */}
        <header className="mb-16">
          <a
            href="/"
            className="text-accent hover:underline text-sm mb-4 inline-block"
          >
            ← Back to home
          </a>
          <h1 className="text-5xl font-black mb-3 text-foreground">
            Quotes I Like
          </h1>
          <p className="text-muted text-base">
            A collection of quotes that inspire and resonate with me.
          </p>
        </header>

        {/* Quotes List */}
        <div className="space-y-12">
          {quotes.map((quote, index) => (
            <div key={index} className="py-6 border-l-4 border-accent pl-6">
              <p className="text-foreground text-2xl leading-relaxed mb-4 font-medium">
                "{quote.text}"
              </p>
              <p className="text-muted text-base">
                — {quote.author}
              </p>
            </div>
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
