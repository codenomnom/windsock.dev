import { PropsWithChildren } from 'react';

export type Props<P = unknown> = PropsWithChildren<P> & { className?: string };