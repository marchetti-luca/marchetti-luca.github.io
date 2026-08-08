"use client";

import { useEffect, type MouseEvent } from "react";
import Link from "next/link";
import {
  featuredTalks,
  positions,
  publications,
  researchAreas,
  talkArchive,
} from "./content";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  useEffect(() => {
    const target = window.location.hash.slice(1);
    if (target) {
      window.setTimeout(
        () => document.getElementById(target)?.scrollIntoView(),
        50,
      );
    }
  }, []);

  const scrollTo = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <main>
      <header className="site-header">
        <a
          className="wordmark"
          href="#top"
          aria-label="Luca Marchetti, home"
          onClick={(event) => scrollTo(event, "top")}
        >
          Luca Marchetti
        </a>
        <nav aria-label="Primary navigation">
          <a href="#research" onClick={(event) => scrollTo(event, "research")}>Research</a>
          <a href="#publications" onClick={(event) => scrollTo(event, "publications")}>Publications</a>
          <Link href="/talks">Talks</Link>
          <a href="#cv" onClick={(event) => scrollTo(event, "cv")}>CV</a>
        </nav>
        <a className="contact-link" href="mailto:luca.marchetti@ipmu.jp">
          Contact <Arrow />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">Postdoctoral Fellow · OIST &amp; Kavli IPMU</p>
          <h1>
            Luca
            <br />
            Marchetti
          </h1>
          <p className="hero-intro">
            I am a theoretical physicist studying how <em>spacetime and
            cosmology emerge</em> from quantum gravity—and how physics can be
            described from within, using dynamical frames and relational
            observables.
          </p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href="#research"
              onClick={(event) => scrollTo(event, "research")}
            >
              Explore my research <Arrow />
            </a>
            <a
              className="button button-secondary"
              href="https://inspirehep.net/authors/1949575"
              target="_blank"
              rel="noreferrer"
            >
              INSPIRE profile <Arrow />
            </a>
          </div>
        </div>

        <div className="portrait-wrap">
          <div className="portrait-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/luca-marchetti-cutout.png"
              alt="Portrait of Luca Marchetti"
            />
          </div>
          <div className="portrait-caption">
            <span>OIST · Kavli IPMU</span>
            <span>Japan</span>
          </div>
        </div>

        <div className="hero-index" aria-hidden="true">
          01 <span /> 05
        </div>
      </section>

      <section className="section research-section" id="research">
        <div className="section-heading">
          <p className="section-number">01 / Research</p>
          <h2>From quantum geometry to the universe.</h2>
          <p>
            My work connects foundational questions about observables and
            reference frames with non-perturbative models of quantum spacetime
            and their cosmological consequences.
          </p>
        </div>

        <div className="research-list">
          {researchAreas.map((area) => (
            <article className="research-item" key={area.slug}>
              <span className="research-number">{area.number}</span>
              <div>
                <h3>
                  <Link href={`/research/${area.slug}`}>{area.title}</Link>
                </h3>
                <p>{area.text}</p>
                <ul aria-label={`${area.title} topics`}>
                  {area.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <Link className="research-link" href={`/research/${area.slug}`}>
                  Explore this research <Arrow />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section publication-section" id="publications">
        <div className="section-heading light-heading">
          <p className="section-number">02 / Publications</p>
          <h2>Recent &amp; selected work.</h2>
          <p>
            Recent papers on relational quantum gravity, emergent cosmology,
            and the collective dynamics of quantum geometry. The complete
            record is available on INSPIRE.
          </p>
        </div>

        <div className="publication-list">
          {publications.map((publication, index) => (
            <article className="publication" key={publication.arxiv}>
              <div className="pub-index">{String(index + 1).padStart(2, "0")}</div>
              <div className="pub-main">
                <div className="pub-meta">
                  <span>{publication.year}</span>
                  <span>{publication.journal}</span>
                  {publication.featured && <strong>Selected</strong>}
                </div>
                <h3>{publication.title}</h3>
                <p>{publication.authors}</p>
              </div>
              <div className="pub-links">
                <a
                  href={`https://arxiv.org/abs/${publication.arxiv}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  arXiv <Arrow />
                </a>
                {publication.doi && (
                  <a
                    href={`https://doi.org/${publication.doi}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    DOI <Arrow />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <a
          className="text-link light-link"
          href="https://inspirehep.net/authors/1949575"
          target="_blank"
          rel="noreferrer"
        >
          Complete publication record on INSPIRE <Arrow />
        </a>
      </section>

      <section className="section talks-section" id="talks">
        <div className="section-heading compact-heading">
          <p className="section-number">03 / Talks</p>
          <h2>Ideas in conversation.</h2>
        </div>

        <div className="talk-subheading">
          <p>Highlighted talks</p>
          <span>A selection of plenary lectures, invited seminars, and presentations</span>
        </div>
        <div className="activity-list">
          {featuredTalks.map((activity) => (
            <article className="activity" key={`${activity.date}-${activity.title}`}>
              <p className="activity-date">{activity.date}</p>
              <div>
                <span className="activity-type">{activity.type}</span>
                <h3>{activity.title}</h3>
                <p>{activity.venue}</p>
                {activity.slides && (
                  <a
                    className="slides-link"
                    href={activity.slides}
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

        <div className="talk-archive-cta">
          <div>
            <p>Full archive</p>
            <span>{talkArchive.length} talks &amp; seminars, with slides where available</span>
          </div>
          <Link href="/talks">
            Browse all talks <Arrow />
          </Link>
        </div>
      </section>

      <section className="section cv-section" id="cv">
        <div className="section-heading compact-heading">
          <p className="section-number">04 / Selected CV</p>
          <h2>Experience.</h2>
        </div>
        <div className="timeline">
          {positions.map((position) => (
            <article key={`${position.years}-${position.role}`}>
              <p>{position.years}</p>
              <div>
                <h3>{position.role}</h3>
                <span>{position.place}</span>
              </div>
            </article>
          ))}
        </div>
        <div className="cv-callout">
          <p>
            The CV lives at one permanent address. Future updates only require
            replacing this single PDF.
          </p>
          <a
            className="cv-download"
            href="/files/luca-marchetti-cv.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download CV <Arrow />
          </a>
        </div>
      </section>

      <footer id="contact">
        <div>
          <p className="section-number">05 / Contact</p>
          <h2>
            Let’s discuss
            <br />
            quantum spacetime<span className="accent">.</span>
          </h2>
        </div>
        <div className="footer-links">
          <a href="mailto:luca.marchetti@ipmu.jp">
            Email <Arrow />
          </a>
          <a
            href="https://inspirehep.net/authors/1949575"
            target="_blank"
            rel="noreferrer"
          >
            INSPIRE <Arrow />
          </a>
          <a
            href="https://orcid.org/0000-0002-8927-5937"
            target="_blank"
            rel="noreferrer"
          >
            ORCID <Arrow />
          </a>
          <a
            href="https://github.com/marchetti-luca"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <Arrow />
          </a>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Luca Marchetti</p>
          <a href="#top" onClick={(event) => scrollTo(event, "top")}>Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
