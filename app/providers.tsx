'use client';

import { NextUIProvider } from '@nextui-org/react';

type ProvidersProps = React.PropsWithChildren;

export default function Providers({ children }: ProvidersProps) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
};
