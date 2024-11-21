'use client';

import { createContext, useContext, useEffect, useState, type Dispatch, type SetStateAction } from 'react';
import { content } from '@/content';
import { Props } from '@/types/react';
import { type Lib } from 'content-collections';
import { techList } from '@/content/config/technologies';

type Filter = {
  items: Array<Lib>,
  setItems: Dispatch<SetStateAction<Array<Lib>>>,

  includePaid: boolean,
  setIncludePaid: Dispatch<SetStateAction<boolean>>,

  techFilter: Set<string>,
  setTechFilter: Dispatch<SetStateAction<Set<string>>>,
};

export const FilterContext = createContext<Filter | undefined>(undefined);

export const FilterProvider = ({ children }: Props) => {
  const [items, setItems] = useState(content.libs);
  const [includePaid, setIncludePaid] = useState(true);
  const [techFilter, setTechFilter] = useState(new Set<string>(techList.map((t) => t.id)));

  useEffect(() => {
    const paidFilter = ['free', 'freemium'];
    if (includePaid) {
      paidFilter.push('paid');
    }

    setItems(content.libs
      .filter((item) => paidFilter.includes(item.cost))
      .filter((item) => !!item.tech.filter((t) => techFilter.has(t)).length)
    )
  }, [includePaid, techFilter]);

  return <FilterContext.Provider
    value={{
      items, setItems,
      includePaid, setIncludePaid,
      techFilter, setTechFilter,
    }}
  >
    {children}
  </FilterContext.Provider>;
}

export const useFilterContext = () => {
  const ctx = useContext(FilterContext);
  if (!ctx) {
    throw new Error('No FilterContext.Provider found when calling useFilterContext!');
  }
  return ctx;
};
