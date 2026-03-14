import { maturityCriteriaCount } from '@/data/helpers/maturity.helper';
import type { UILib } from '@/data/libs';

export function LibsList({ items }: { items: Array<UILib> }) {
  return (
    <div className="grid" id="cards-grid">
      {
        items.map((lib) => (
          <a href={`/libs/${lib.id}`} className="card" key={lib.name}>
            {/* <span className="card-arrow">→</span> */}
            <div className="card-top">
              <div className="lib-logo">
                <img src={`/logos/ui-libs/${lib.logo}`} alt={lib.name} />
              </div>
              <span className="badge-styled styled">styled</span>
            </div>
            <div>
              <div className="card-name">{lib.name}</div>
              <div className="card-desc" title={lib.description}><q>{lib.description}</q></div>
            </div>
            <div className="stats">
              <div className="stat">
                <span className="stat-label">components</span>
                <span className="stat-val">{lib.stats.componentsCount}</span>
              </div>
              <div className="stat">
                <span className="stat-label">wk downloads</span>
                <span className="stat-val">{lib.stats.npm?.weeklyDownloads}</span>
              </div>
              <div className="stat">
                <span className="stat-label">maturity</span>
                <span className="stat-val">
                  <span style={{ color: 'var(--green)' }}>
                    {lib.maturity?.passedCount ?? 0}
                  </span>
                  /{lib.maturity?.applicableCount ?? maturityCriteriaCount}</span>
                {/* <span className="stat-val">
                  <span className="score-hint" data-tip="npm trends + gh stars + issues + contributors">
                    <span className="score-dot" style={{ background: "var(--green)" }}></span>{lib.stats.score}
                  </span>
                </span> */}
                {/* <div className="score-bar"><div className="score-fill score-high" style={{ width: `${lib.stats.score}%` }}></div></div> */}
              </div>
            </div>
            <div className="tags">
              {
                lib.tech.map((tech) => (
                  <span className="tag" key={tech}>
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
                      alt={tech}
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                    {tech}
                  </span>
                ))
              }
              {/* <span className="tag"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />react</span> */}
              {/* <span className="tag"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="" />typescript</span> */}
              {/* <span className="tag">radix</span> */}
            </div>
            <div className="card-footer">
              <span className={`paid-badge ${lib.cost}`}>{lib.cost}</span>
              <span className="card-domain">{lib.links.website}</span>
            </div>
          </a>
        ))
      }
    </div>
  );
}
