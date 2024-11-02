import Image from 'next/image';
import { Ui } from 'content-collections';
import { Props } from '@/types/react';
import { WindIcons } from '../icons/WindIcon';
import { WindSockIcon } from '../icons/WindSockIcon';

import './list.css';

type ListProps = {
  items?: Array<Ui>;
}

function WindIcon({ index }: { index: number }) {
  console.log('> ', index);
  // const index = 1 + Math.floor(Math.random() * 9);
  const Component = WindIcons[index];
  // console.log(Component);
  return <Component className={`h-14 w-14 index-${index}`} />
}

const rand = () => Math.floor(Math.random() * 9);
const speeds = [2, 1.8, 1.6, 1.4, 1.2, 1, .8, .6, .4, .2];
// const rspeed = () => [];

// https://www.flaticon.com/packs/user-interface-3178
// https://www.flaticon.com/packs/design-tool-44
// https://icon-sets.iconify.design/tdesign/component-layout/

export function UILibsList({ items = [] }: Props<ListProps>) {
  return (
    <ul className="w-full">
      {items.map((lib) => {
        const r = rand();

        return (
          <li
            key={lib._meta.path}
            className="
              ui-lib relative min-h-24 mb-10
              text-[#545454]
              rounded-md2
              border2 border-transparent border2-[#e2e2e2] hover:border-[#cfcfcf]
              bg-white2 hover:bg-[#fafafab2]
              hover:shadow-[0px_0px_18px_0px_rgba(0,_0,_0,_0.05)]
              transition-border transition-all duration-500
              p-6

              flex items-center
              ">


            {/* <div href={`${lib.website}`} target="_blank" className="item w-full h-full  px-0 pr-2 z-10 absolute"> */}
              <div className={`logo h-14 w-14 rounded-lg flex justify-center items-center bg-[#fafafa] border border-[#e2e2e2]`}>
                {
                  lib.logo && (
                    <Image
                      width={48}
                      height={48}
                      src={`/logos/ui-libs/${lib.logo}`}
                      alt={`${lib.name} logo`}
                    />
                  )
                }
                {
                  !lib.logo && (<>{lib.name}</>)
                }
              </div>
              <div className="content ml-4">
                <h3 className="font-bold font-[family-name:var(--font-poppins)]">{lib.name}</h3>
                <p className="text-sm">{lib.website}</p>
              </div>
              <div className="spacer flex-grow"></div>
              <div className="flex justify-center items-center text-5xl">
                {/* <WindIcon index={r} /> */}
                {/* <WindSockIcon duration={speeds[r]} className="-ml-3" /> */}
                <span className="i-meteocons-windsock"></span>
              </div>
            {/* </div> */}

            <div className="line" style={{ width: `${Math.floor(Math.random() * 100)}%`, height: 1 }}></div>

            {/* <div className="spacer absolute top-0 bottom-0 bg-white z-0 transition-all" style={{ width: `${Math.floor(Math.random() * 100)}%` }}>&nbsp;</div> */}
          </li>
        );
      })}
    </ul>
  );
}