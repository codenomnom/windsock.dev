'use client';

import { createContext, useContext, useEffect, useState, type Dispatch, type SetStateAction } from 'react';
import { content } from '@/content';
import { Props } from '@/types/react';
import { type Lib } from 'content-collections';

type Filter = {
  items: Array<Lib>,
  setItems: Dispatch<SetStateAction<Array<Lib>>>,

  includePaid: boolean,
  setIncludePaid: Dispatch<SetStateAction<boolean>>,
};

export const FilterContext = createContext<Filter | undefined>(undefined);

export const FilterProvider = ({ children }: Props) => {
  const [items, setItems] = useState(content.libs);
  const [includePaid, setIncludePaid] = useState(true);

  useEffect(() => {
    const opts = ['free', 'freemium'];
    if (includePaid) {
      opts.push('paid');
    }
    setItems(content.libs.filter((item) => opts.includes(item.cost)))
  }, [includePaid]);

  return <FilterContext.Provider
    value={{
      items, setItems,
      includePaid, setIncludePaid,
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
