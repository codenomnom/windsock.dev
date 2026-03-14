'use client';

import { useMemo, useState } from 'react';
import { libs } from '@/data/libs';
import { LibsList } from '../components/libs-list/LibsList';
import { Hero, HeroSubtitle, HeroTitle } from '../components/Hero';
import { Filters, type SortBy, type FilterBy } from '../components/Filters';

export default function Home() {

  const [filters, setFilters] = useState<FilterBy>({ cost: 'all', tech: ['all'] });
  const [sorting, setSorting] = useState<SortBy>('score');

  const items = useMemo(() => {
    return libs
      .filter(lib => {
        if (filters.cost !== 'all' && lib.cost !== filters.cost) return false;
        // if (filters.style !== 'all' && lib.style !== filters.style) return false;
        if (!filters.tech.includes('all') && !filters.tech.filter((tech) => tech !== 'all').some((tech) => lib.tech.includes(tech))) return false;
        return true;
      })
      .sort((a, b) => {
        if (sorting === 'score') return (b.maturity?.passedCount || 0) - (a.maturity?.passedCount || 0);
        if (sorting === 'count') return b.stats.componentsCount - a.stats.componentsCount;
        if (sorting === 'downloads') return (b.stats.npm?.weeklyDownloads || 0) - (a.stats.npm?.weeklyDownloads || 0);
        if (sorting === 'a-z') return a.name.localeCompare(b.name);
        return 0;
      });
  }, [filters, sorting]);

  return (
    <main>
      <Hero>
        <HeroTitle>where is the wind<br /><em>blowing at today?</em></HeroTitle>
        <HeroSubtitle>
          browse, filter and compare tailwind UI libraries
          <span className="sep">·</span>
          no opinions, just data
          <span className="sep">·</span>
          <span className="hero-count">{libs.length} libraries</span>
          <a href="#" className="nav-submit">+ add more</a>
        </HeroSubtitle>
      </Hero>

      <Filters
        filters={filters}
        setFilters={setFilters}
        sorting={sorting}
        setSorting={setSorting}
      />
      <section className="grid-wrap">
        <LibsList items={items} />
        {/* <div className="grid" id="cards-grid"> */}


        {/* <a href="/shadcn-ui" className="card">
            <span className="card-arrow">→</span>
            <div className="card-top">
              <div className="lib-logo">
                <img src="https://ui.shadcn.com/favicon.ico" alt="shadcn/ui" onError={(e) => { e.currentTarget?.parentElement ? e.currentTarget.parentElement.textContent = 'sh' : null; }} />
              </div>
              <span className="badge-styled styled">styled</span>
            </div>
            <div>
              <div className="card-name">shadcn/ui</div>
              <div className="card-desc">Copy-paste components built on Radix primitives. You own the code, no library to update.</div>
            </div>
            <div className="stats">
              <div className="stat">
                <span className="stat-label">components</span>
                <span className="stat-val">48</span>
              </div>
              <div className="stat">
                <span className="stat-label">wk downloads</span>
                <span className="stat-val">1.2M</span>
              </div>
              <div className="stat">
                <span className="stat-label">score</span>
                <span className="stat-val">
                  <span className="score-hint" data-tip="npm trends + gh stars + issues + contributors">
                    <span className="score-dot" style={{ background: "var(--green)" }}></span>94
                  </span>
                </span>
                <div className="score-bar"><div className="score-fill score-high" style={{ width: "94%" }}></div></div>
              </div>
            </div>
            <div className="tags">
              <span className="tag"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />react</span>
              <span className="tag"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="" />typescript</span>
              <span className="tag">radix</span>
            </div>
            <div className="card-footer">
              <span className="paid-badge free">free</span>
              <span className="card-domain">shadcn.com</span>
            </div>
          </a>


          <a href="/daisyui" className="card">
            <span className="card-arrow">→</span>
            <div className="card-top">
              <div className="lib-logo">
                <img src="https://daisyui.com/favicon.ico" alt="DaisyUI" onError={(e) => { e.currentTarget?.parentElement ? e.currentTarget.parentElement.textContent = 'da' : null; }} />
              </div>
              <span className="badge-styled styled">styled</span>
            </div>
            <div>
              <div className="card-name">DaisyUI</div>
              <div className="card-desc">Component class names on top of Tailwind. Pure CSS, works with any framework. Heavily themeable.</div>
            </div>
            <div className="stats">
              <div className="stat">
                <span className="stat-label">components</span>
                <span className="stat-val">56</span>
              </div>
              <div className="stat">
                <span className="stat-label">wk downloads</span>
                <span className="stat-val">870K</span>
              </div>
              <div className="stat">
                <span className="stat-label">score</span>
                <span className="stat-val">
                  <span className="score-hint" data-tip="npm trends + gh stars + issues + contributors">
                    <span className="score-dot" style={{ background: "var(--green)" }}></span>91
                  </span>
                </span>
                <div className="score-bar"><div className="score-fill score-high" style={{ width: "91%" }}></div></div>
              </div>
            </div>
            <div className="tags">
              <span className="tag"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="" />html</span>
              <span className="tag"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />react</span>
              <span className="tag"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="" />vue</span>
              <span className="tag"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" alt="" />svelte</span>
            </div>
            <div className="card-footer">
              <span className="paid-badge free">free</span>
              <span className="card-domain">daisyui.com</span>
            </div>
          </a>

          <a href="/radix-ui" className="card">
            <span className="card-arrow">→</span>
            <div className="card-top">
              <div className="lib-logo" style={{ background: "#111", color: "#888" }}>Ra</div>
              <span className="badge-styled unstyled">unstyled</span>
            </div>
            <div>
              <div className="card-name">Radix UI</div>
              <div className="card-desc">Accessible, unstyled primitives. The foundation under shadcn. Bring your own styles entirely.</div>
            </div>
            <div className="stats">
              <div className="stat">
                <span className="stat-label">components</span>
                <span className="stat-val">28</span>
              </div>
              <div className="stat">
                <span className="stat-label">wk downloads</span>
                <span className="stat-val">2.1M</span>
              </div>
              <div className="stat">
                <span className="stat-label">score</span>
                <span className="stat-val">
                  <span className="score-hint" data-tip="npm trends + gh stars + issues + contributors">
                    <span className="score-dot" style={{ background: "var(--green)" }}></span>97
                  </span>
                </span>
                <div className="score-bar"><div className="score-fill score-high" style={{ width: "97%" }}></div></div>
              </div>
            </div>
            <div className="tags">
              <span className="tag"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />react</span>
              <span className="tag"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="" />typescript</span>
              <span className="tag">a11y</span>
            </div>
            <div className="card-footer">
              <span className="paid-badge free">free</span>
              <span className="card-domain">radix-ui.com</span>
            </div>
          </a>


          <a href="/nextui" className="card">
            <span className="card-arrow">→</span>
            <div className="card-top">
              <div className="lib-logo" style={{ background: "#000", color: "#fff", fontSize: "0.55rem" }}>Ne</div>
              <span className="badge-styled styled">styled</span>
            </div>
            <div>
              <div className="card-name">NextUI</div>
              <div className="card-desc">Opinionated beautiful components with first-class dark mode. Customizable via slots &amp; variants.</div>
            </div>
            <div className="stats">
              <div className="stat">
                <span className="stat-label">components</span>
                <span className="stat-val">41</span>
              </div>
              <div className="stat">
                <span className="stat-label">wk downloads</span>
                <span className="stat-val">340K</span>
              </div>
              <div className="stat">
                <span className="stat-label">score</span>
                <span className="stat-val">
                  <span className="score-hint" data-tip="npm trends + gh stars + issues + contributors">
                    <span className="score-dot" style={{ background: "var(--green)" }}></span>82
                  </span>
                </span>
                <div className="score-bar"><div className="score-fill score-high" style={{ width: "82%" }}></div></div>
              </div>
            </div>
            <div className="tags">
              <span className="tag"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />react</span>
              <span className="tag">framer-motion</span>
            </div>
            <div className="card-footer">
              <span className="paid-badge free">free</span>
              <span className="card-domain">nextui.org</span>
            </div>
          </a>

          <a href="/flowbite" className="card">
            <span className="card-arrow">→</span>
            <div className="card-top">
              <div className="lib-logo">
                <img src="https://flowbite.com/favicon.ico" alt="Flowbite" onError={(e) => { e.currentTarget?.parentElement ? e.currentTarget.parentElement.textContent = 'fb' : null; }} />
              </div>
              <span className="badge-styled styled">styled</span>
            </div>
            <div>
              <div className="card-name">Flowbite</div>
              <div className="card-desc">600+ UI components and blocks. Figma system included. Works with React, Vue, and plain HTML.</div>
            </div>
            <div className="stats">
              <div className="stat">
                <span className="stat-label">components</span>
                <span className="stat-val">600+</span>
              </div>
              <div className="stat">
                <span className="stat-label">wk downloads</span>
                <span className="stat-val">190K</span>
              </div>
              <div className="stat">
                <span className="stat-label">score</span>
                <span className="stat-val">
                  <span className="score-hint" data-tip="npm trends + gh stars + issues + contributors">
                    <span className="score-dot" style={{ background: "var(--amber)" }}></span>71
                  </span>
                </span>
                <div className="score-bar"><div className="score-fill score-mid" style={{ width: "71%" }}></div></div>
              </div>
            </div>
            <div className="tags">
              <span className="tag"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="" />html</span>
              <span className="tag"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />react</span>
              <span className="tag"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="" />vue</span>
            </div>
            <div className="card-footer">
              <span className="paid-badge freemium">freemium</span>
              <span className="card-domain">flowbite.com</span>
            </div>
          </a>

          <a href="/tremor" className="card">
            <span className="card-arrow">→</span>
            <div className="card-top">
              <div className="lib-logo" style={{ background: "#eff6ff", color: "#1d4ed8", fontSize: "0.55rem" }}>Tr</div>
              <span className="badge-styled styled">styled</span>
            </div>
            <div>
              <div className="card-name">Tremor</div>
              <div className="card-desc">Dashboard-focused. 35+ chart and data components built on Radix. Opinionated clean aesthetic.</div>
            </div>
            <div className="stats">
              <div className="stat">
                <span className="stat-label">components</span>
                <span className="stat-val">35</span>
              </div>
              <div className="stat">
                <span className="stat-label">wk downloads</span>
                <span className="stat-val">88K</span>
              </div>
              <div className="stat">
                <span className="stat-label">score</span>
                <span className="stat-val">
                  <span className="score-hint" data-tip="npm trends + gh stars + issues + contributors">
                    <span className="score-dot" style={{ background: "var(--amber)" }}></span>68
                  </span>
                </span>
                <div className="score-bar"><div className="score-fill score-mid" style={{ width: "68%" }}></div></div>
              </div>
            </div>
            <div className="tags">
              <span className="tag"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />react</span>
              <span className="tag">charts</span>
              <span className="tag">dashboards</span>
            </div>
            <div className="card-footer">
              <span className="paid-badge free">free</span>
              <span className="card-domain">tremor.so</span>
            </div>
          </a>

          <a href="/headless-ui" className="card">
            <span className="card-arrow">→</span>
            <div className="card-top">
              <div className="lib-logo" style={{ background: "#f8fafc", color: "#94a3b8", fontSize: "0.55rem" }}>HL</div>
              <span className="badge-styled unstyled">unstyled</span>
            </div>
            <div>
              <div className="card-name">Headless UI</div>
              <div className="card-desc">By Tailwind Labs. Fully unstyled, accessible primitives designed to pair directly with Tailwind.</div>
            </div>
            <div className="stats">
              <div className="stat">
                <span className="stat-label">components</span>
                <span className="stat-val">14</span>
              </div>
              <div className="stat">
                <span className="stat-label">wk downloads</span>
                <span className="stat-val">1.8M</span>
              </div>
              <div className="stat">
                <span className="stat-label">score</span>
                <span className="stat-val">
                  <span className="score-hint" data-tip="npm trends + gh stars + issues + contributors">
                    <span className="score-dot" style={{ background: "var(--green)" }}></span>89
                  </span>
                </span>
                <div className="score-bar"><div className="score-fill score-high" style={{ width: "89%" }}></div></div>
              </div>
            </div>
            <div className="tags">
              <span className="tag"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />react</span>
              <span className="tag"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="" />vue</span>
              <span className="tag">a11y</span>
            </div>
            <div className="card-footer">
              <span className="paid-badge free">free</span>
              <span className="card-domain">headlessui.com</span>
            </div>
          </a>

          <a href="/hyperui" className="card">
            <span className="card-arrow">→</span>
            <div className="card-top">
              <div className="lib-logo" style={{ background: "#fdf4ff", color: "#a21caf", fontSize: "0.55rem" }}>Hy</div>
              <span className="badge-styled minimal">minimal</span>
            </div>
            <div>
              <div className="card-name">HyperUI</div>
              <div className="card-desc">Free copy-paste Tailwind components with no framework dependency. Minimal JS, just markup.</div>
            </div>
            <div className="stats">
              <div className="stat">
                <span className="stat-label">components</span>
                <span className="stat-val">138</span>
              </div>
              <div className="stat">
                <span className="stat-label">wk downloads</span>
                <span className="stat-val">12K</span>
              </div>
              <div className="stat">
                <span className="stat-label">score</span>
                <span className="stat-val">
                  <span className="score-hint" data-tip="npm trends + gh stars + issues + contributors">
                    <span className="score-dot" style={{ background: "var(--amber)" }}></span>54
                  </span>
                </span>
                <div className="score-bar"><div className="score-fill score-mid" style={{ width: "54%" }}></div></div>
              </div>
            </div>
            <div className="tags">
              <span className="tag"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="" />html</span>
              <span className="tag">alpine</span>
            </div>
            <div className="card-footer">
              <span className="paid-badge free">free</span>
              <span className="card-domain">hyperui.dev</span>
            </div>
          </a>

          <a href="/preline" className="card">
            <span className="card-arrow">→</span>
            <div className="card-top">
              <div className="lib-logo" style={{ background: "#f0f9ff", color: "#0284c7", fontSize: "0.55rem" }}>Pr</div>
              <span className="badge-styled styled">styled</span>
            </div>
            <div>
              <div className="card-name">Preline UI</div>
              <div className="card-desc">400+ components with Figma system and ready-made templates. Vanilla JS, no framework required.</div>
            </div>
            <div className="stats">
              <div className="stat">
                <span className="stat-label">components</span>
                <span className="stat-val">400+</span>
              </div>
              <div className="stat">
                <span className="stat-label">wk downloads</span>
                <span className="stat-val">42K</span>
              </div>
              <div className="stat">
                <span className="stat-label">score</span>
                <span className="stat-val">
                  <span className="score-hint" data-tip="npm trends + gh stars + issues + contributors">
                    <span className="score-dot" style={{ background: "var(--amber)" }}></span>61
                  </span>
                </span>
                <div className="score-bar"><div className="score-fill score-mid" style={{ width: "61%" }}></div></div>
              </div>
            </div>
            <div className="tags">
              <span className="tag"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="" />html</span>
              <span className="tag"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />react</span>
              <span className="tag">figma</span>
            </div>
            <div className="card-footer">
              <span className="paid-badge freemium">freemium</span>
              <span className="card-domain">preline.co</span>
            </div>
          </a> */}

        {/* </div> */}
      </section>
    </main>
  );
}
