'use client';

import Image from 'next/image';
import { useMemo } from 'react';
import type { Lib } from 'content-collections';

import { cn } from '@/utils';
import { useFilterContext } from '@/context/FilterContext';

import './list.css';
import { UsageID } from "@/content/config/usage";
import { Tech, TechID } from "@/content/config/technologies";
import { technologies } from "@/content/config/technologies";

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
    <ul className="libs-list w-full">
      {/*<li*/}
      {/*  className={cn(*/}
      {/*    'libs-list-item relative',*/}
      {/*    'text-[#545454]',*/}
      {/*    'transition-all duration-200',*/}
      {/*  )}*/}
      {/*>*/}
      {/*  <div className="content ml-4">*/}
      {/*    <h3 className="font-bold">How to choose an UI Library?</h3>*/}
      {/*  </div>*/}
      {/*</li>*/}
      {list}
    </ul>
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
            {/*{lib.website}*/}
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


        {/*<a href={lib.website} target="_blank" className="text-sm hover:opacity-75 transition-opacity">*/}
        {/*  {lib.website}*/}
        {/*  <span className="icon i-mi-external-link ml-1"></span>*/}
        {/*</a>*/}
        <div className="description mb-4">


          {
            lib.description && <blockquote>&quot;{lib.description}&quot;</blockquote>
          }
          {/*<p>{lib.description}</p>*/}
          {/*<p>{lib.description}</p>*/}
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
                  <strong>tech</strong>: <TechIcons tech={lib.tech as Array<TechID>} parent={lib.website}/>
                </div>
              )
            }
          </div>
        </div>
      </div>
      {/*<div className="spacer flex-grow"></div>*/}
      {/*<div className="flex justify-center items-center text-5xl">*/}
      {/*  /!* <WindIcon index={r} /> *!/*/}
      {/*  /!* <WindSockIcon duration={speeds[r]} className="-ml-3" /> *!/*/}
      {/*  <span className="i-meteocons-windsock"></span>*/}
      {/*</div>*/}
      {/* </div> */}

      {/* <div className="line" style={{ width: `${Math.floor(Math.random() * 100)}%`, height: 1 }}></div> */}
      {/* <div className="spacer absolute top-0 bottom-0 bg-white z-0 transition-all" style={{ width: `${Math.floor(Math.random() * 100)}%` }}>&nbsp;</div> */}
      {/*<a href={lib.website} target="_blank"*/}
      {/*   className="flex items-center w-full h-full py-6 hover:px-6 transition-all duration-200"*/}
      {/*>*/}
      {/*</a>*/}
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

function TechIcons({ tech, parent }: { tech: Array<TechID>, parent: string }) {
  return useMemo(() => tech.map((t) => {
    // console.log(t.id, t.icon);
    // const id: TechID = t.id as TechID;
    const te = technologies[t];
    if (te)
      return <te.icon key={`${te.id}-${parent}`} className="icon ml-1 border border-[#dddddd] rounded"/>
    else
      console.log('--- missing', t);
    // let icon;
    // if (id === 'jsx') icon = 'i-tabler-copy';
    // // if (t === 'npm-package') icon = 'i-tabler-package';
    //
    // if (icon)
    //   return <span className={`icon ${icon} ml-1`} key={`${icon}-${parent}`}></span>;

    return null;
  }), [tech, parent]);
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

// function ListItem({ lib }: { lib: Lib }) {
//   return (
//     <li
//       className={cn(
//         'ui-lib2 relative min-h-24 mb-8',
//         'text-[#545454]',
//         'rounded2-lg',
//         'border border-transparent border2-[#e2e2e2] hover:border-[#d6d6d6]',
//         'bg-white2 hover2:bg-[#fafafa5d]',
//         'bg-[#f4f4f5a6]',
//         'hover:shadow-[0px_0px_18px_0px_rgba(0,_0,_0,_0.03)]',
//         'transition-border transition-all duration-200',
//       )}
//     >
//       <a href={lib.website} target='_blank' className="flex items-center w-full h-full py-6 hover:px-6 transition-all duration-200">
//
//         {/* <div href={`${lib.website}`} target="_blank" className="item w-full h-full  px-0 pr-2 z-10 absolute"> */}
//         <div className={cn('logo h-14 w-14 rounded-lg flex justify-center items-center bg-[#fafafa] border border-[#e2e2e2]')}>
//           {
//             lib.logo && (
//               <Image
//                 width={48}
//                 height={48}
//                 src={`/logos/ui-libs/${lib.logo}`}
//                 alt={`${lib.name} logo`}
//               />
//             )
//           }
//           {
//             !lib.logo && (<>{lib.name}</>)
//           }
//         </div>
//         <div className="content ml-4">
//           <h3 className="font-bold font-[family-name:var(--font-poppins)]">{lib.name}</h3>
//           <p className="text-sm">{lib.website}</p>
//         </div>
//         <div className="spacer flex-grow"></div>
//         <div className="flex justify-center items-center text-5xl">
//           {/* <WindIcon index={r} /> */}
//           {/* <WindSockIcon duration={speeds[r]} className="-ml-3" /> */}
//           <span className="i-meteocons-windsock"></span>
//         </div>
//         {/* </div> */}
//
//         {/* <div className="line" style={{ width: `${Math.floor(Math.random() * 100)}%`, height: 1 }}></div> */}
//         {/* <div className="spacer absolute top-0 bottom-0 bg-white z-0 transition-all" style={{ width: `${Math.floor(Math.random() * 100)}%` }}>&nbsp;</div> */}
//       </a>
//     </li>
//   );
// }
