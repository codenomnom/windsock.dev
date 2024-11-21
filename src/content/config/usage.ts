export type Usage = {
  id: string,
  name: string,
}
export const usage = {
  'npm-package': {
    id: 'npm-package',
    name: 'NPM package',
  },
  'copy-paste': {
    id: 'copy-paste',
    name: 'Copy-Paste'
  }
} satisfies Record<string, Usage>;

export type UsageID = keyof typeof usage;
