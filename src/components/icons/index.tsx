import type { SVGProps } from 'react';
import { cn } from '@/utils';

export const Icon = ({ name, className, ...props }: { name: string, className?: string }) => <span className={cn(name, className)} {...props}> </span>
const icon = (name: string) => (props: SVGProps<SVGSVGElement>) => <Icon name={name} {...props} />;

export const IconifyIconBaselinePaid = icon('i-ic-baseline-paid');
export const IconifyIconBaselineMoneyOff = icon('i-ic-baseline-money-off');
