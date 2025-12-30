import Link from "next/link";

const POSTS = [
  {
    title: "Rewilding Rivers: Community Stories",
    slug: "rewilding-rivers",
    excerpt:
      "Communities restoring rivers and reviving wildlife through local stewardship.",
    image:
      "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Seeds of Change: Indigenous Conservation",
    slug: "seeds-of-change",
    excerpt:
      "How indigenous knowledge informs resilient conservation practice.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Young Voices in Conservation",
    slug: "young-voices",
    excerpt:
      "Students and youth leading local climate action and storytelling.",
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function LearnMoreLanding() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-serif mb-6">Learn More — Articles & Stories</h1>

      <p className="text-textGreen mb-8">
        A mix of features, interviews and community stories. Click any item to read the full piece.
      </p>

      <div className="article-grid">
        {POSTS.map((p) => (
          <article key={p.slug} className="article-card">
            <img src={p.image} alt={p.title} />
            <div className="card-body">
              <h3 className="article-title">{p.title}</h3>
              <p className="article-excerpt">{p.excerpt}</p>
              <div className="mt-4">
                <Link href={`/learn-more/${p.slug}`} className="text-emerald-700 underline">
                  Read more →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
