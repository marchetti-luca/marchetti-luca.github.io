import type { Metadata } from "next";
import Link from "next/link";
import { talkArchive } from "../content";

const Arrow = () => <span aria-hidden="true">↗</span>;

export const metadata: Metadata = {
  title: "Talks & Lectures — Luca Marchetti",
  description:
    "Talks, lectures, seminars, and presentation slides by theoretical physicist Luca Marchetti.",
};

export default function TalksPage() {
  return (
    <main className="talks-page">
      <header className="detail-header talks-page-header">
        <Link className="detail-name" href="/">Luca Marchetti</Link>
        <nav aria-label="Talk archive navigation">
          <Link className="detail-back" href="/#talks">Highlighted talks</Link>
          <Link className="detail-back" href="/">Home <span aria-hidden="true">↙</span></Link>
        </nav>
      </header>

      <section className="detail-hero talks-page-hero">
        <div className="detail-hero-grid" aria-hidden="true" />
        <p className="detail-index">Talks &amp; lectures · Archive</p>
        <h1>Ideas in conversation.</h1>
        <p className="detail-lead">
          Plenary lectures, invited seminars, conference presentations, and
          pedagogical talks on quantum gravity, relational physics, group field
          theory, and cosmology.
        </p>
      </section>

      <section className="talks-page-body">
        <div className="talk-archive-heading">
          <h2>Full archive</h2>
          <span>{talkArchive.length} talks &amp; seminars</span>
        </div>
        <div className="talk-archive">
          {talkArchive.map((talk, index) => (
            <article key={`${talk.date}-${talk.title}-${index}`}>
              <p>{talk.date}</p>
              <h3>{talk.title}</h3>
              <div>
                <span>{talk.type}</span>
                <span>{talk.venue}</span>
                {talk.slides && (
                  <a
                    className="archive-slides-link"
                    href={talk.slides}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Slides / PDF <Arrow />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="talks-page-footer">
        <Link href="/">← Back to homepage</Link>
        <a href="mailto:luca.marchetti@ipmu.jp">Invite me to speak <Arrow /></a>
      </footer>
    </main>
  );
}
