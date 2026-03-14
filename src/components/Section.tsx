import type { PropsWithChildren } from 'react';

export type SectionProps = PropsWithChildren<{
  label?: string,
  header?: string,
  headerEndContent?: React.ReactNode,
  className?: string,
}>;

export function Section({ label, header, headerEndContent, children, className }: SectionProps) {
  return (
    <section className={className}>

      {label && <div className="section-label">{label}</div>}

      {header && (
        <div className="section-header">
          <h2>{header}</h2>
          <div className="end-content">
            {headerEndContent}
          </div>
        </div>
      )}

      {children}
    </section>
  );
}
