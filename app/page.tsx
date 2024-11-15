import Image from 'next/image';
import { List } from '@/components/list/List';
import { Filter } from '@/components/filter/Filter';

// dark:invert
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <div className="intro flex flex-col items-center">
        <h1 className="font-black font-[family-name:var(--font-montserrat)] text-[4.5rem] sm:text-[5rem] leading-[120px] relative">
          <div className="absolute -translate-x-[130%] top-[44px]">
            <Image
              width={54}
              height={54}
              src={`./windsock.svg`}
              alt={` logo`}
              className=""
            />
          </div>
          windsock
        </h1>
        <p className="-mt-2 text-[18px]">browse, explore and compare tailwind resources</p>
      </div>

      <div className="filter w-full mt-12 md:max-w-[44rem] w-full">
        <Filter />
      </div>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start md:max-w-[44rem] w-full mt-16">
        <List />
      </main>
    </div>
  );
}
