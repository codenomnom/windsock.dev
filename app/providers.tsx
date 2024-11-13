'use client';

import { NextUIProvider } from '@nextui-org/react';
import { FilterProvider } from '@/context/FilterContext';

type ProvidersProps = React.PropsWithChildren;

export default function Providers({ children }: ProvidersProps) {
  return (
    <NextUIProvider>
      <FilterProvider>
        {children}
      </FilterProvider>
    </NextUIProvider>
  );
};
