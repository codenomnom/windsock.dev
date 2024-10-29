import { allUis, Ui } from 'content-collections';

// https://github.com/sdorra/content-collections/issues/373
// newest / updated item is last, so it overrides the initial one
export const ui: Array<Ui> = Object.values( // convert to array
  Object.fromEntries( // convert to object
    allUis.map((item) => [ // override array objects to tuples
      item._meta.filePath.replaceAll('\\', '/'), // key is posix file path
      item, // value is the item
    ])
  )
);

export const ui2 = allUis;