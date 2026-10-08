import type { Metadata } from "next";
import Link from "next/link";
import { publications, researchAreas } from "../../content";

type ResearchPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return researchAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: ResearchPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = researchAreas.find((item) => item.slug === slug);

  return {
    title: area ? `${area.title} — Luca Marchetti` : "Research — Luca Marchetti",
    description: area?.text,
  };
}

export default async function ResearchPage({ params }: ResearchPageProps) {
  const { slug } = await params;
  const areaIndex = researchAreas.findIndex((item) => item.slug === slug);
  const area = researchAreas[areaIndex];

  if (!area) {
    return (
      <main className="research-detail missing-research">
        <h1>Research direction not found</h1>
        <Link href="/#research">Return to research</Link>
      </main>
    );
  }

  const selectedPapers = area.selectedArxiv
    .map((arxiv) => publications.find((paper) => paper.arxiv === arxiv))
    .filter((paper): paper is (typeof publications)[number] => Boolean(paper));
  const previous = researchAreas[(areaIndex - 1 + researchAreas.length) % researchAreas.length];
  const next = researchAreas[(areaIndex + 1) % researchAreas.length];

  return (
    <main className="research-detail">
      <header className="detail-header">
        <Link className="detail-name" href="/">Luca Marchetti</Link>
        <Link className="detail-back" href="/#research">All research <span aria-hidden="true">↙</span></Link>
      </header>

      <section className="detail-hero">
        <div className="detail-hero-grid" aria-hidden="true" />
        <p className="detail-index">Research direction · {area.number}</p>
        <h1>{area.title}</h1>
        <p className="detail-lead">{area.lead}</p>
      </section>

      <section className="detail-body">
        <aside className="detail-aside">
          <p>At a glance</p>
          <ul>
            {area.tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
        </aside>

        <div className="detail-main">
          <section className="detail-section">
            <p className="detail-label">Overview</p>
            {area.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>

          <section className="detail-section">
            <p className="detail-label">Questions</p>
            <h2>Questions I work on.</h2>
            <ol className="detail-questions">
              {area.questions.map((question, index) => (
                <li key={question}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{question}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="detail-section">
            <p className="detail-label">Approach</p>
            <h2>How I approach it.</h2>
            <p>{area.approach}</p>
          </section>

          <section className="detail-section">
            <p className="detail-label">Selected work</p>
            <h2>Related publications.</h2>
            <div className="detail-papers">
              {selectedPapers.map((paper) => (
                <a
                  href={`https://arxiv.org/abs/${paper.arxiv}`}
                  key={paper.arxiv}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{paper.year} · arXiv:{paper.arxiv}</span>
                  <h3>{paper.title}</h3>
                  <p>{paper.authors}</p>
                  <strong>Read paper ↗</strong>
                </a>
              ))}
            </div>
          </section>
        </div>
      </section>

      <nav className="detail-navigation" aria-label="Research directions">
        <Link href={`/research/${previous.slug}`}>
          <span>← Previous</span>
          <strong>{previous.title}</strong>
        </Link>
        <Link href={`/research/${next.slug}`}>
          <span>Next →</span>
          <strong>{next.title}</strong>
        </Link>
      </nav>
    </main>
  );
}
