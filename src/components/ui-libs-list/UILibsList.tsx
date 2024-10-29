import Image from 'next/image';
import { Ui } from 'content-collections';
import { Props } from '@/types/react';

type ListProps = {
  items?: Array<Ui>;
}

export function UILibsList({ items = [] }: Props<ListProps>) {
  return (
    <ul className="w-full">
      {items.map((lib) => (
        <li key={lib._meta.path} className="min-h-24 text-[#545454] bg-white rounded mb-4 shadow-[0px_0px_10px_0px_#523f690d] border border-[#e2e2e2] hover:border-[#cfcfcf] hover:shadow-[0px_0px_16px_0px_#523f6926] transition-shadow duration-300">
          <a href={`/posts/${lib._meta.path}`} className="w-full h-full flex items-start p-6">
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
          </a>
        </li>
      ))}
    </ul>
  );
}