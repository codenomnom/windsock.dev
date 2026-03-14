import { libs } from '@/data/libs';

import './single-lib.css';
import { notFound } from 'next/navigation';
import { Section } from '@/components/Section';
import { getLibMaturity } from '@/data/helpers/maturity.helper';
import { MaturityFailCrossIcon, MaturityPassCheckIcon } from './components/MaturityPassIcons';

export async function generateStaticParams() {
  return libs.map((lib) => ({ id: lib.id }));
}

export type SingleLibraryProps = {
  params: Promise<{ id: string }>,
};

export default async function SingleLibrary({ params }: SingleLibraryProps) {
  const { id } = await params;
  const lib = libs.find((lib) => lib.id === id);

  if (!lib) {
    notFound();
  }

  const maturity = lib.maturity ?? getLibMaturity(lib);

  return (
    <main>
      <Section className="lib-header">
        <div className="lib-header-left">
          <div className="lib-top-row">
            <div className="lib-logo">
              <img src={`/logos/ui-libs/${lib.logo}`} alt={lib.name} />
            </div>
            <h1 className="lib-name">{lib.name}</h1>
          </div>

          <p className="lib-tagline">{lib.description}</p>

          {/* <div className="lib-badges">
            <span className="badge styled">styled</span>
            <span className="badge free">free</span>
            <span className="badge ts">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="" />TypeScript
            </span>
            <span className="badge">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />React
            </span>
            <span className="badge v4">Tailwind v4 ✓</span>
          </div> */}

          <div className="lib-links">
            <a href={lib.links.website} className="button primary" target="_blank" rel="noopener noreferrer">website →</a>
            {
              lib.links.repository && (
                <a href={lib.links.repository} className="lib-link" target="_blank" rel="noopener noreferrer">
                  {lib.links.repository.includes('github.com') ? 'GitHub' : 'repository'}
                </a>
              )
            }
            {
              lib.links.npm && (
                <a href={lib.links.npm} className="lib-link" target="_blank" rel="noopener noreferrer">
                  npm
                </a>
              )
            }
          </div>
        </div>

        {/* <MaturityScoreCard stats={lib.stats} /> */}
      </Section>

      <Section label="About" className="prose">
        {lib.description}
      </Section>

      <Section>
        <div className="box flex-centered lib-stats">
          <div className="stat-cell">
            <span className="stat-label">weekly downloads</span>
            <span className="stat-value">{lib.stats.npm?.weeklyDownloads}</span>
            <span className="stat-trend">↑ trending up</span>
          </div>
          <div className="stat-cell">
            <span className="stat-label">GitHub stars</span>
            <span className="stat-value">{lib.stats.github?.stars}</span>
            <span className="stat-sub">+1.2K this month</span>
          </div>
          <div className="stat-cell">
            <span className="stat-label">components</span>
            <span className="stat-value">{lib.stats.componentsCount}</span>
            <span className="stat-sub">+ community blocks</span>
          </div>
          <div className="stat-cell">
            <span className="stat-label">open issues</span>
            <span className="stat-value">{lib.stats.github?.issuesCount}</span>
            <span className="stat-sub">{lib.stats.github ? `${Math.round((lib.stats.github.closedIssuesCount / lib.stats.github.issuesCount) * 100)}% closed ratio` : ''}</span>
          </div>
          <div className="stat-cell">
            <span className="stat-label">latest version</span>
            <span className="stat-value">2.3.0</span>
            <span className="stat-sub">3 weeks ago</span>
          </div>
        </div>
      </Section>

      <Section header="Maturity Checklist" headerEndContent={<a href="#" className="text-link">read more →</a>}>
        <div className="maturity-checklist box">

          {
            maturity.list.map((criterion) => {
              const stateClass = criterion.notApplicable ? 'na' : criterion.pass ? 'pass' : 'fail';
              return (
                <div className={`check-item ${stateClass}`} key={criterion.id}>
                  <div className="check-top">
                    <div className={`check-icon ${criterion.notApplicable ? 'na' : criterion.pass ? 'pass' : 'fail'}`}>
                      {criterion.notApplicable ? null : criterion.pass ? (<MaturityPassCheckIcon />) : (<MaturityFailCrossIcon />)}
                    </div>
                    <span className="check-group-tag">{criterion.group.name}</span>
                  </div>
                  <span className="check-criterion">{criterion.label}</span>
                  {/* <span className="check-actual">{String(criterion.result)}</span> */}
                </div>
              );
            })
          }

          {/* <div className="check-item pass">
            <div className="check-top">
              <div className="check-icon pass">
                <svg viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="#16a34a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
              </div>
              <span className="check-group-tag">activity</span>
            </div>
            <span className="check-criterion">last release within 6mo</span>
            <span className="check-actual">3 weeks ago</span>
          </div> */}



          {/* <div className="check-item fail">
            <div className="check-top">
              <div className="check-icon"></div>
              <span className="check-group-tag">conditional</span>
            </div>
            <span className="check-criterion">Figma kit</span>
            <span className="check-na">n/a — copy-paste model</span>
          </div> */}

        </div>

        <div className="checklist-footer">
          <span>{maturity.passedCount} passed · {maturity.totalCount - maturity.applicableCount} not applicable</span>
          <span>crawled 2h ago</span>
        </div>
      </Section>

      <Section header="Live Samples">
        <div className="samples-frame">
          <div className="samples-toolbar">
            <div className="toolbar-dot"></div>
            <div className="toolbar-dot"></div>
            <div className="toolbar-dot"></div>
            <span className="toolbar-url">windsock.dev/examples/shadcn-ui</span>
          </div>
          <div className="iframe-placeholder">
            <span className="iframe-placeholder-text">live component preview</span>
            <span className="iframe-placeholder-sub">iframe · /examples/shadcn-ui</span>
          </div>
        </div>
      </Section>

      {/* <Section
        header="Similar Libraries"
        headerEndContent={<a href="/" className="text-link">browse all →</a>}
      >
        -- similar libraries
      </Section> */}
    </main>
  );
}
