'use client';

import { libs } from '@/data/libs';
import { Hero, HeroSubtitle, HeroTitle } from '../../components/Hero';

import './about.css';

export default function About() {

  return (
    <main className="narrow">
      <Hero>
        <HeroTitle>no opinions,<br /><em>just data</em></HeroTitle>
        <HeroSubtitle>
          Picking a Tailwind UI library shouldn't take three hours of googling.<br />
          This exists to save you those hours.
          {/* <span className="sep">·</span>
          no opinions, just data
          <span className="sep">·</span>
          <span className="hero-count">{libs.length} libraries</span>
          <a href="#" className="nav-submit">+ add more</a> */}
        </HeroSubtitle>
      </Hero>

      <section>
        <div className="section-label">the checklist</div>
        <h2>A list of things that matter.</h2>
        <p>
          Each library is measured against a fixed set of criteria. No weights, no formula,
          no number crunched from other numbers. Each criterion either passes or doesn't — and
          the actual value is always shown alongside. A library sitting at 4,980 stars fails
          the 5K threshold, but you can see that. If your only options are 49 and 980 stars,
          the checklist didn't help you — the raw numbers did.
        </p>
        <p>
          Some criteria don't apply to every library. A vanilla HTML copy-paste library won't have
          TypeScript types — that's not a failure, it's just not applicable. The denominator adjusts:
          11/13 means 11 out of 13 criteria that actually make sense for that library.
        </p>

        {/* <div className="score-table">
          <div className="score-row header">
            <div className="score-cell">signal</div>
            <div className="score-cell weight">weight</div>
            <div className="score-cell">source</div>
          </div>
          <div className="score-row">
            <div className="score-cell">weekly npm downloads</div>
            <div className="score-cell weight weight-high">35%</div>
            <div className="score-cell">npm registry</div>
          </div>
          <div className="score-row">
            <div className="score-cell">GitHub stars</div>
            <div className="score-cell weight weight-high">25%</div>
            <div className="score-cell">GitHub API</div>
          </div>
          <div className="score-row">
            <div className="score-cell">release recency</div>
            <div className="score-cell weight weight-mid">20%</div>
            <div className="score-cell">npm registry</div>
          </div>
          <div className="score-row">
            <div className="score-cell">open issues ratio</div>
            <div className="score-cell weight weight-mid">15%</div>
            <div className="score-cell">GitHub API</div>
          </div>
          <div className="score-row">
            <div className="score-cell">contributor count</div>
            <div className="score-cell weight">5%</div>
            <div className="score-cell">GitHub API</div>
          </div>
        </div> */}

        <div className="criteria-block">

          <div className="criteria-group-label">activity</div>

          <div className="criteria-row">
            <div className="criteria-left">
              <div className="criteria-name">last release within 6 months</div>
              <div className="criteria-why">not in silent maintenance mode</div>
            </div>
            <div className="criteria-meta">crawled every 48h</div>
          </div>

          <div className="criteria-row">
            <div className="criteria-left">
              <div className="criteria-name">3+ releases in the last 12 months</div>
              <div className="criteria-why">something is shipping, not just a hotfix once a year</div>
            </div>
            <div className="criteria-meta">crawled every 48h</div>
          </div>

          <div className="criteria-group-label">adoption</div>

          <div className="criteria-row">
            <div className="criteria-left">
              <div className="criteria-name">100K+ weekly npm downloads</div>
              <div className="criteria-why">not a side project, people are actually using it</div>
            </div>
            <div className="criteria-meta">crawled every 12h</div>
          </div>

          <div className="criteria-row">
            <div className="criteria-left">
              <div className="criteria-name">5K+ GitHub stars</div>
              <div className="criteria-why">the community has noticed it exists</div>
            </div>
            <div className="criteria-meta">crawled every 24h</div>
          </div>

          <div className="criteria-group-label">maintenance</div>

          <div className="criteria-row">
            <div className="criteria-left">
              <div className="criteria-name">last commit within 3 months</div>
              <div className="criteria-why">someone is still looking at the code</div>
            </div>
            <div className="criteria-meta">crawled every 48h</div>
          </div>

          <div className="criteria-row">
            <div className="criteria-left">
              <div className="criteria-name">80%+ closed issues ratio</div>
              <div className="criteria-why">the backlog is managed, not just growing</div>
            </div>
            <div className="criteria-meta">crawled every 48h</div>
          </div>

          <div className="criteria-group-label">maturity</div>

          <div className="criteria-row">
            <div className="criteria-left">
              <div className="criteria-name">project older than 1 year</div>
              <div className="criteria-why">survived at least one hype cycle</div>
            </div>
            <div className="criteria-meta">crawled once</div>
          </div>

          <div className="criteria-row">
            <div className="criteria-left">
              <div className="criteria-name">ARIA / WCAG support</div>
              <div className="criteria-why">accessibility isn't an afterthought — a must for any serious project</div>
            </div>
            <div className="criteria-meta"><span className="manual-tag">manual</span></div>
          </div>

          <div className="criteria-row">
            <div className="criteria-left">
              <div className="criteria-name">dark mode / theming support</div>
              <div className="criteria-why">locked to one visual style is a liability</div>
            </div>
            <div className="criteria-meta"><span className="manual-tag">manual</span></div>
          </div>

          <div className="criteria-group-label">compatibility</div>

          <div className="criteria-row">
            <div className="criteria-left">
              <div className="criteria-name">Tailwind v4 support</div>
              <div className="criteria-why">v3-only libraries will cause headaches on new projects</div>
            </div>
            <div className="criteria-meta"><span className="manual-tag">manual</span></div>
          </div>

          <div className="criteria-group-label">conditional — n/a if not applicable</div>

          <div className="criteria-row">
            <div className="criteria-left">
              <div className="criteria-name">TypeScript types included</div>
              <div className="criteria-why">first-class TS, not bolted on later</div>
            </div>
            <div className="criteria-meta"><span className="conditional-tag">n/a for JS / vanilla</span></div>
          </div>

          <div className="criteria-row">
            <div className="criteria-left">
              <div className="criteria-name">official Figma kit</div>
              <div className="criteria-why">designers and devs working from the same source</div>
            </div>
            <div className="criteria-meta"><span className="conditional-tag">n/a for copy-paste</span></div>
          </div>

        </div>

        <p style={{ marginTop: '1rem' }}>
          Thresholds are fixed, not dynamic. They'll be reviewed and updated periodically as the ecosystem evolves — last updated Mar 2026.
        </p>
      </section>

      {/* <!-- WHAT'S COMING --> */}
      <section className="coming-soon">
        <div className="section-label">roadmap</div>
        <h2>What's coming</h2>

        <div className="coming-soon-list">
          <div className="coming-block">
            <div className="coming-dot done"></div>
            <div className="coming-text">
              <strong>Browse + filter</strong>
              Filter by type, style, tech stack. Sort by score, component count, or downloads.
            </div>
          </div>
          <div className="coming-block">
            <div className="coming-dot next"></div>
            <div className="coming-text">
              <strong>Visual comparison — /libs</strong>
              See a real button, dropdown, and spinner rendered side-by-side across libraries.
              No screenshots — live components in isolated frames.
            </div>
          </div>
          <div className="coming-block">
            <div className="coming-dot"></div>
            <div className="coming-text">
              <strong>Library detail pages — /libs/[name]</strong>
              Full stats, visual samples, and similar library suggestions. A URL you can share.
            </div>
          </div>
          <div className="coming-block">
            <div className="coming-dot"></div>
            <div className="coming-text">
              <strong>More libraries</strong>
              Currently tracking {libs.length}. Working through the rest.
            </div>
          </div>
        </div>
      </section>

      {/* <!-- SUBMIT --> */}
      <section>
        <div className="section-label">contribute</div>
        <h2>Missing a library?</h2>

        <div className="submit-block">
          <p>
            If a library isn't listed and you think it belongs here, open an issue or a pull request.
            The only criteria: it has to work with Tailwind CSS and have a public npm package.
          </p>
          <a href="#" className="submit-link">github.com/codenomnom/windsock →</a>
        </div>
      </section>
    </main>
  );
}
