"use client";

import Link from "next/link";

const articles = [
  {
    title: "Rewilding Rivers: Community Stories",
    slug: "rewilding-rivers",
    excerpt:
      "How local communities are restoring rivers and reviving wildlife along their banks.",
    image:
      "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Seeds of Change: Indigenous Conservation",
    slug: "seeds-of-change",
    excerpt:
      "Exploring indigenous knowledge systems that sustain ecosystems and people.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Young Voices in Conservation",
    slug: "young-voices",
    excerpt:
      "Stories from students and youth leading local climate action and advocacy.",
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function ArticlesPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-serif mb-6">Articles</h2>

      <div className="article-grid">
        {articles.map((a) => (
          <Link
            key={a.slug}
            href={`/learn-more/${a.slug}`}
            className="article-card"
          >
            <img src={a.image} alt={a.title} />
            <div className="card-body">
              <h3 className="article-title">{a.title}</h3>
              <p className="article-excerpt">{a.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
