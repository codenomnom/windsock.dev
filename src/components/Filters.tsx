import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import '../styles/filters.css';
import type { LibCost, LibTech } from '@/data/libs';

export type FilterBy = {
  cost: 'all' | LibCost,
  // style: 'all' | 'styled' | 'unstyled' | 'minimal';
  tech: Array<'all' | LibTech>, // 'all' or tech name
  // sort: 'score' | 'count' | 'downloads' | 'a-z';
}

export type SortBy = 'score' | 'count' | 'downloads' | 'a-z';

export function Filters({
  filters, setFilters,
  sorting, setSorting,
}: {
  filters: FilterBy,
  setFilters: Dispatch<SetStateAction<FilterBy>>,
  sorting: SortBy,
  setSorting: Dispatch<SetStateAction<SortBy>>,
}) {
  const [showTechMenu, setShowTechMenu] = useState(false);

  function setCost(cost: FilterBy['cost']) {
    setFilters((prev) => ({ ...prev, cost }));
  }
  function toggleTech(tech: 'all' | LibTech) {
    const oldValue = [...filters.tech];
    if (tech === 'all') {
      setFilters((prev) => ({ ...prev, tech: ['all'] }));
    } else if (oldValue.length === 1 && oldValue[0] === 'all') {
      setFilters((prev) => ({ ...prev, tech: [tech] }));
    } else if (oldValue.includes(tech)) {
      const newValue = oldValue.filter((t) => t !== tech);
      if (newValue.length === 0) {
        setFilters((prev) => ({ ...prev, tech: ['all'] }));
      } else {
        setFilters((prev) => ({ ...prev, tech: newValue }));
      }
    } else {
      setFilters((prev) => ({ ...prev, tech: [...oldValue, tech] }));
    }
    setShowTechMenu(false);
  }

  function toggleTechMenu() {
    setShowTechMenu((prev) => !prev);
  }
  return (
    <section className="filters-wrapper">
      <div className="filters">
        

        {/* <!-- STYLE --> */}
        {/* <div className="filter-row">
          <span className="row-label">style</span>
          <div className="row-pills">
            <button className="pill active" onClick={() => togglePill('all')}>all</button>
            <button className="pill" onClick={() => togglePill('styled')}>styled</button>
            <button className="pill" onClick={() => togglePill('unstyled')}>unstyled</button>
            <button className="pill" onClick={() => togglePill('minimal')}>minimal</button>
          </div>
        </div> */}

        {/* <!-- TECH + SORT --> */}
        {/* <div className="filter-row">
          <span className="row-label">tech</span>
          <div className="row-pills">
            <div className="tech-dropdown-wrap" id="techWrap">
              <button className="tech-trigger" id="techTrigger" onClick={() => toggleTechMenu()}>
                {filters.tech === 'all' ? 'all options' : filters.tech}
              </button>
              <div className={`tech-menu ${showTechMenu ? 'open' : ''}`} id="techMenu">
                <div className={`tech-option ${filters.tech === 'all' ? 'active' : ''}`} onClick={() => setTech('all')}>
                  <span style={{ width: '14px' }}></span>
                  all options
                  <span className="check">✓</span>
                </div>
                <div className={`tech-option ${filters.tech === 'react' ? 'active' : ''}`} onClick={() => setTech('react')}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />
                  React
                  <span className="check">✓</span>
                </div>
                <div className={`tech-option ${filters.tech === 'vue' ? 'active' : ''}`} onClick={() => setTech('vue')}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="" />
                  Vue
                  <span className="check">✓</span>
                </div>
                <div className={`tech-option ${filters.tech === 'nextjs' ? 'active' : ''}`} onClick={() => setTech('nextjs')}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="" />
                  Next.js
                  <span className="check">✓</span>
                </div>
                <div className={`tech-option ${filters.tech === 'svelte' ? 'active' : ''}`} onClick={() => setTech('svelte')}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" alt="" />
                  Svelte
                  <span className="check">✓</span>
                </div>
                <div className={`tech-option ${filters.tech === 'alpine' ? 'active' : ''}`} onClick={() => setTech('alpine')}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/alpinejs/alpinejs-original.svg" alt="" />
                  Alpine.js
                  <span className="check">✓</span>
                </div>
                <div className={`tech-option ${filters.tech === 'vanilla' ? 'active' : ''}`} onClick={() => setTech('vanilla')}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="" />
                  Vanilla
                  <span className="check">✓</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row-sort">
            <span className="sort-label">sort</span>
            <div className="sort-tabs">
              <button className={`sort-tab${sorting === 'score' ? ' active' : ''}`} onClick={() => setSorting('score')}>score</button>
              <button className={`sort-tab${sorting === 'count' ? ' active' : ''}`} onClick={() => setSorting('count')}>count</button>
              <button className={`sort-tab${sorting === 'downloads' ? ' active' : ''}`} onClick={() => setSorting('downloads')}>downloads</button>
              <button className={`sort-tab${sorting === 'a-z' ? ' active' : ''}`} onClick={() => setSorting('a-z')}>A–Z</button>
            </div>
          </div>
        </div> */}

        {/* <!-- TYPE --> */}
        <div className="filter-row tech">
          <span className="row-label">Tech</span>
          <div className="row-pills">
            <button className={`pill ${filters.tech.includes('all') ? 'active' : ''}`} onClick={() => toggleTech('all')}>all</button>
            <button className={`pill ${filters.tech.includes('react') ? 'active' : ''}`} onClick={() => toggleTech('react')}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" /> React</button>
            <button className={`pill ${filters.tech.includes('vue') ? 'active' : ''}`} onClick={() => toggleTech('vue')}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="" /> Vue.js</button>
            <button className={`pill ${filters.tech.includes('nextjs') ? 'active' : ''}`} onClick={() => toggleTech('nextjs')}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="" /> Next.js</button>
            <button className={`pill ${filters.tech.includes('svelte') ? 'active' : ''}`} onClick={() => toggleTech('svelte')}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" alt="" /> Svelte</button>
            <button className={`pill ${filters.tech.includes('alpine') ? 'active' : ''}`} onClick={() => toggleTech('alpine')}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/alpinejs/alpinejs-original.svg" alt="" /> Alpine.js</button>
            <button className={`pill ${filters.tech.includes('vanilla') ? 'active' : ''}`} onClick={() => toggleTech('vanilla')}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="" /> Vanilla</button>
          </div>
        </div>

        {/* <!-- TYPE --> */}
        <div className="filter-row">
          <span className="row-label">Cost</span>
          <div className="row-pills">
            <button className={`pill ${filters.cost === 'all' ? 'active' : ''}`} onClick={() => setCost('all')}>all</button>
            <button className={`pill ${filters.cost === 'free' ? 'active' : ''}`} onClick={() => setCost('free')}>free</button>
            <button className={`pill ${filters.cost === 'freemium' ? 'active' : ''}`} onClick={() => setCost('freemium')}>freemium</button>
            <button className={`pill ${filters.cost === 'paid' ? 'active' : ''}`} onClick={() => setCost('paid')}>paid</button>
          </div>
        </div>

        <div className="filter-row">
          <span className="row-label">Sort</span>
          <div className="row-pills">
            <button className={`pill ${sorting === 'score' ? 'active' : ''}`} onClick={() => setSorting('score')}>score</button>
            <button className={`pill ${sorting === 'count' ? 'active' : ''}`} onClick={() => setSorting('count')}>count</button>
            <button className={`pill ${sorting === 'downloads' ? 'active' : ''}`} onClick={() => setSorting('downloads')}>downloads</button>
            <button className={`pill ${sorting === 'a-z' ? 'active' : ''}`} onClick={() => setSorting('a-z')}>A-Z</button>
          </div>
        </div>
      </div>
    </section>
  );
}
