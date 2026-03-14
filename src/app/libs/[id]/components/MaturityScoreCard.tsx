import type { UILib } from '@/data/libs';

export function MaturityScoreCard({ stats }: { stats: UILib['stats'] }) {
  return (
    <div className="score-card">
      <div className="score-ring-wrap">
        <svg viewBox="0 0 96 96">
          <circle className="score-ring-bg" cx="48" cy="48" r="40" />
          <circle className="score-ring-fill" cx="48" cy="48" r="40"
            stroke="#16a34a"
            strokeDasharray="251.2"
            strokeDashoffset="21"
          />
        </svg>
        <div className="score-ring-text">
          <span className="score-number">11</span>
          <span className="score-denom">out of 12</span>
        </div>
      </div>

      <span className="score-label">maturity checklist</span>

      <div className="score-quick">
        <div className="score-quick-row">
          <span className="score-quick-label">weekly downloads</span>
          <span className="score-quick-val">{stats.npm?.weeklyDownloads}</span>
        </div>
        <div className="score-quick-row">
          <span className="score-quick-label">GH stars</span>
          <span className="score-quick-val">68.4K</span>
        </div>
        <div className="score-quick-row">
          <span className="score-quick-label">last release</span>
          <span className="score-quick-val">3 weeks ago</span>
        </div>
        <div className="score-quick-row">
          <span className="score-quick-label">components</span>
          <span className="score-quick-val">48</span>
        </div>
      </div>
    </div>
  );
}
