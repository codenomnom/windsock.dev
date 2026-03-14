import React from 'react';
import type { PropsWithChildren } from 'react';

import '../styles/hero.css';

export function Hero({ children }: PropsWithChildren) {
  const title = React.Children.toArray(children).find((child) => (child as React.ReactElement).type === HeroTitle);
  const subtitle = React.Children.toArray(children).find((child) => (child as React.ReactElement).type === HeroSubtitle);

  return (
    <section className="hero centered">
      {title}
      {subtitle}
    </section>
  );
}

// export function Hero({ title, children }: PropsWithChildren<{ title?: string }>) {
//   return (
//     <section className="hero centered">
//       <h1>where is the wind<br /><em>blowing at today?</em></h1>
//       <p>
        // browse, filter and compare tailwind UI libraries
        // <span className="sep">·</span>
        // no opinions, just data
        // <span className="sep">·</span>
        // <span className="hero-count">{libsCount} libraries</span>
        // <a href="#" className="nav-submit">+ add more</a>
//       </p>
//     </section>
//   );
// }

export function HeroTitle({ children }: PropsWithChildren) {
  return (
    <h1 className="hero-title">{children}</h1>
  );
}
export function HeroSubtitle({ children }: PropsWithChildren) {
  return (
    <p className="hero-subtitle">{children}</p>
  );
}