'use client';

import Image from 'next/image';
import { useMemo } from 'react';
import type { Lib } from 'content-collections';

import { cn } from '@/utils';
import { useFilterContext } from '@/context/FilterContext';

import { UsageID } from "@/content/config/usage";
import { TechID } from "@/content/config/technologies";
import { technologies } from "@/content/config/technologies";

import './list.css';

// https://www.flaticon.com/packs/user-interface-3178
// https://www.flaticon.com/packs/design-tool-44
// https://icon-sets.iconify.design/tdesign/component-layout/

export function List({}) {
  const { items } = useFilterContext();

  const list = useMemo(
    () => items.map((lib) => <ListItem key={lib._meta.path} lib={lib}/>),
    [items],
  )

  return (
    <ul className="libs-list w-full">{list}</ul>
  );
}

function ListItem({ lib }: { lib: Lib }) {
  return (
    <li
      className={cn(
        'libs-list-item relative',
        'text-[#545454]',
        'transition-all duration-200',
      )}
    >
      <div
        className={cn('logo flex justify-center items-center')}
      >
        {
          lib.logo && (
            <Image
              width={56}
              height={56}
              src={`/logos/ui-libs/${lib.logo}`}
              alt={`${lib.name} logo`}
            />
          )
        }
        {
          !lib.logo && (<>{lib.name}</>)
        }
      </div>
      <div className="content ml-6">
        <h3 className="font-bold">
          {lib.name}

          <a href={lib.website} target="_blank" className="hover:opacity-75 transition-opacity ml-2">
            <span className="icon i-mi-external-link ml-1"></span>
          </a>
        </h3>

        <div className="rating -mt-3">
          <div className="score"
               style={{ '--progress': `${Math.floor(Math.random() * 100)}%` } as React.CSSProperties}
               suppressHydrationWarning
          ></div>
          {/*<span className="icon i-meteocons-windsock"></span>*/}
          <WindIcon level={Math.floor(Math.random() * 4) + 1}/>
          {/*<span className="icon i-meteocons-wind-beaufort-5-fill"></span>*/}
        </div>

        <div className="description mb-4">
          {
            !!lib.description && <blockquote>&quot;{lib.description}&quot;</blockquote>
          }
        </div>

        <div className="details">
          {
            lib.pros && <p><strong>pros:</strong> {lib.pros}</p>
          }

          {
            lib.cons && <p><strong>cons:</strong> {lib.cons}</p>
          }

          <div className="flex flex-col2 !items-start w-full gap-4">
            {
              !!lib.usage.length && (
                <div>
                  <strong>usage</strong>: <UsageIcons usage={lib.usage} parent={lib.website}/>
                </div>
              )
            }

            {
              !!lib.tech.length && (
                <div>
                  <strong>tech</strong>: <TechIcons stack={lib.tech as Array<TechID>} parent={lib.website}/>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </li>
  );
}

function UsageIcons({ usage, parent }: { usage: Array<UsageID>, parent: string }) {
  return useMemo(() => usage.map((u) => {
    let icon;
    if (u === 'copy-paste') icon = 'i-tabler-copy';
    if (u === 'npm-package') icon = 'i-tabler-package';

    if (icon)
      return <span className={`icon ${icon} ml-1`} key={`${icon}-${parent}`}></span>;

    return null;
  }), [usage, parent]);
}

function TechIcons({ stack, parent }: { stack: Array<TechID>, parent: string }) {
  return useMemo(() => stack.map((techID: TechID) => {
    const tech = technologies[techID];
    if (tech)
      return <tech.icon key={`${tech.id}-${parent}`} className="icon ml-1 border border-[#dddddd] rounded"/>

    return null;
  }), [stack, parent]);
}

function WindIcon({ level }: { level: number }) {
  let icon;
  if (level === 1) icon = 'i-meteocons-wind-beaufort-1-fill';
  if (level === 2) icon = 'i-meteocons-wind-beaufort-2-fill';
  if (level === 3) icon = 'i-meteocons-wind-beaufort-3-fill';
  if (level === 4) icon = 'i-meteocons-wind-beaufort-4-fill';
  if (level === 5) icon = 'i-meteocons-wind-beaufort-5-fill';

  if (icon)
    return <span className={`icon ${icon}`} suppressHydrationWarning></span>;

  return null;
}
