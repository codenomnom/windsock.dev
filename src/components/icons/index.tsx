import type { SVGProps } from 'react';
import { cn } from '@/utils';

export const Icon = ({ name, className, ...props }: { name: string, className?: string }) => <span className={cn(name, className)} {...props}> </span>
// eslint-disable-next-line react/display-name
const icon = (name: string) => (props: SVGProps<SVGSVGElement>) => <Icon name={name} {...props} />;

export const IconifyIconBaselinePaid = icon('i-ic-baseline-paid');
export const IconifyIconBaselineMoneyOff = icon('i-ic-baseline-money-off');

// tech
export const TechHTML = icon('i-skill-icons-html');
export const TechReact = icon('i-skill-icons-react-light');
export const TechVue = icon('i-skill-icons-vuejs-light');
export const TechNext = icon('i-skill-icons-nextjs-light');
export const TechAlpine = icon('i-skill-icons-alpinejs-light');
export const TechJS = icon('i-skill-icons-javascript');
export const TechJSX = icon('i-file-icons-jsx');

export const ClearIcon = icon('i-ic-baseline-clear');
