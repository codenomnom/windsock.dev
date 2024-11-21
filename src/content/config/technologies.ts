import { SVGProps } from 'react';
import * as icons from '../../components/icons';

export type Tech = {
  id: string,
  name: string,
  icon?: ((props: SVGProps<SVGSVGElement>) => JSX.Element) | null,
  hidden?: boolean,
}

export const technologies = {
  html: {
    id: 'html',
    name: 'HTML',
    icon: icons.TechHTML,
  },
  vanilla: {
    id: 'vanilla',
    name: 'vanilla',
    icon: icons.TechJS,
  },
  react: {
    id: 'react',
    name: 'React',
    icon: icons.TechReact,
  },
  jsx: {
    id: 'jsx',
    name: 'JSX',
    icon: icons.TechJSX,
  },
  vue: {
    id: 'vue',
    name: 'Vue.js',
    icon: icons.TechVue,
  },
  next: {
    id: 'next',
    name: 'Next.js',
    icon: icons.TechNext,
  },
  alpine: {
    id: 'alpine',
    name: 'Alpine.js',
    icon: icons.TechAlpine,
  },
  'FIXME: check': {
    id: 'FIXME: check',
    name: '',
    hidden: true,
    icon: icons.TechAlpine,
  },
} as const satisfies Record<string, Tech>;

export type TechID = keyof typeof technologies;

export const techList = Object.values(technologies).filter((t: Tech) => !t.hidden);
