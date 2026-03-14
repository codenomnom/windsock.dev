import type { UILib } from '../libs';

export const criterionGroups = [
  { id: 'activity', name: 'Activity' },
  { id: 'adoption', name: 'Adoption' },
  { id: 'maintenance', name: 'Maintenance' },
  { id: 'maturity', name: 'Maturity' },
  { id: 'compatibility', name: 'Compatibility' },
  { id: 'conditional', name: 'Conditional' },
] as const;

export type CriterionGroupId = typeof criterionGroups[number]['id'];
export type CriterionGroup = typeof criterionGroups[number];

export type CriterionCheckResult = {
  pass: boolean,
  notApplicable: boolean,
  result: unknown,
};

export type CriterionDefinition = {
  id: string,
  label: string,
  group: CriterionGroupId,
  check: (lib: UILib) => CriterionCheckResult,
};

export type MaturityCriterionResult = {
  id: string,
  label: string,
  pass: boolean,
  notApplicable: boolean,
  result: unknown,
  group: CriterionGroup,
};

export type LibMaturity = {
  passedCount: number,
  applicableCount: number,
  totalCount: number,
  list: MaturityCriterionResult[],
};

const daysAgo = (days: number): Date => {
  const threshold = new Date();
  threshold.setDate(threshold.getDate() - days);
  return threshold;
};

const daysSince = (date: Date | undefined): number | null => {
  if (!date) {
    return null;
  }
  const oneDayMs = 1000 * 60 * 60 * 24;
  return Math.floor((Date.now() - date.getTime()) / oneDayMs);
};

const hasFeature = (lib: UILib, key: string): boolean => lib.features[key] === true;

const findGroup = (id: CriterionGroupId): CriterionGroup => {
  const group = criterionGroups.find((item) => item.id === id);
  if (!group) {
    throw new Error(`Unknown criterion group: ${id}`);
  }
  return group;
};

export const criterions: CriterionDefinition[] = [
  {
    id: 'releasedIn6mo',
    label: 'last release within 6mo',
    group: 'activity',
    check: (lib: UILib) => {
      const days = daysSince(lib.stats.lastReleaseDate);
      return {
        pass: lib.stats.lastReleaseDate >= daysAgo(183),
        notApplicable: false,
        result: days,
      };
    },
  },
  {
    id: 'releasesIn12mo',
    label: '3+ releases in last 12mo',
    group: 'activity',
    check: (lib: UILib) => ({
      pass: lib.stats.lastYearReleaseCount >= 3,
      notApplicable: false,
      result: lib.stats.lastYearReleaseCount,
    }),
  },
  {
    id: 'downloads100k',
    label: '100K+ weekly downloads',
    group: 'adoption',
    check: (lib: UILib) => {
      const downloads = lib.stats.npm?.weeklyDownloads;
      const notApplicable = !lib.stats.npm;
      return {
        pass: !notApplicable && (downloads ?? 0) >= 100000,
        notApplicable,
        result: downloads ?? null,
      };
    },
  },
  {
    id: 'stars5k',
    label: '5K+ GH stars',
    group: 'adoption',
    check: (lib: UILib) => {
      const stars = lib.stats.github?.stars;
      const notApplicable = !lib.stats.github;
      return {
        pass: !notApplicable && (stars ?? 0) >= 5000,
        notApplicable,
        result: stars ?? null,
      };
    },
  },
  {
    id: 'committedIn3mo',
    label: 'last commit within 3mo',
    group: 'maintenance',
    check: (lib: UILib) => {
      const lastCommitDate = lib.stats.github?.lastCommitDate;
      const days = daysSince(lastCommitDate);
      const notApplicable = !lib.stats.github;
      return {
        pass: !notApplicable && !!lastCommitDate && lastCommitDate >= daysAgo(92),
        notApplicable,
        result: days,
      };
    },
  },
  {
    id: 'closedIssues80',
    label: '80%+ closed issues ratio',
    group: 'maintenance',
    check: (lib: UILib) => {
      const notApplicable = !lib.stats.github;
      const openIssues = lib.stats.github?.issuesCount ?? 0;
      const closedIssues = lib.stats.github?.closedIssuesCount ?? 0;
      const totalIssues = openIssues + closedIssues;
      const closedRatio = totalIssues > 0 ? closedIssues / totalIssues : 0;
      const percent = Math.round(closedRatio * 100);

      return {
        pass: !notApplicable && closedRatio >= 0.8,
        notApplicable,
        result: notApplicable ? null : percent,
      };
    },
  },
  {
    id: 'olderThan1y',
    label: 'project older than 1 year',
    group: 'maturity',
    check: (lib: UILib) => {
      const projectCreationDate = lib.stats.github?.projectCreationDate;
      const days = daysSince(projectCreationDate);
      const notApplicable = !lib.stats.github;
      return {
        pass: !notApplicable && !!projectCreationDate && projectCreationDate <= daysAgo(365),
        notApplicable,
        result: days,
      };
    },
  },
  {
    id: 'ariaWcag',
    label: 'ARIA / WCAG support',
    group: 'maturity',
    check: (lib: UILib) => {
      const aria = hasFeature(lib, 'aria');
      const wcag = hasFeature(lib, 'wcag');
      return {
        pass: aria || wcag,
        notApplicable: false,
        result: { aria, wcag },
      };
    },
  },
  {
    id: 'themingSupport',
    label: 'dark mode / theming support',
    group: 'maturity',
    check: (lib: UILib) => {
      const darkMode = hasFeature(lib, 'dark-mode');
      const theming = hasFeature(lib, 'theming');
      return {
        pass: darkMode || theming,
        notApplicable: false,
        result: { darkMode, theming },
      };
    },
  },
  {
    id: 'tailwind4Support',
    label: 'Tailwind v4 support',
    group: 'compatibility',
    check: (lib: UILib) => {
      const pass = hasFeature(lib, 'tailwind-v4') || hasFeature(lib, 'tailwind4');
      return {
        pass,
        notApplicable: false,
        result: pass,
      };
    },
  },
  {
    id: 'typescriptTypes',
    label: 'TypeScript types',
    group: 'conditional',
    check: (lib: UILib) => {
      const pass = hasFeature(lib, 'typescript') || hasFeature(lib, 'typescript-types');
      return {
        pass,
        notApplicable: false,
        result: pass,
      };
    },
  },
  {
    id: 'figmaKit',
    label: 'Figma kit',
    group: 'conditional',
    check: (lib: UILib) => {
      const figma = lib.features.figma;
      const notApplicable = figma === '' && lib.usage.includes('copy-paste');
      return {
        pass: !notApplicable && (figma === 'free' || figma === 'paid'),
        notApplicable,
        result: figma,
      };
    },
  },
];

export const maturityCriteriaCount = criterions.length;
export const maturityCriteriaList = criterions.map((criterion) => criterion.label);

export const maturityGroups = criterionGroups.map((group) => group.id);
export const maturityCriteria = criterions;

export function getLibMaturity(lib: UILib): LibMaturity {
  const list = criterions.map((criterion) => {
    const { pass, notApplicable, result } = criterion.check(lib);
    return {
      id: criterion.id,
      label: criterion.label,
      pass,
      notApplicable,
      result,
      group: findGroup(criterion.group),
    };
  });

  const applicableList = list.filter((item) => !item.notApplicable);

  return {
    passedCount: applicableList.filter((item) => item.pass).length,
    applicableCount: applicableList.length,
    totalCount: list.length,
    list,
  };
}

export function calculateMaturity(lib: UILib) {
  return getLibMaturity(lib).passedCount;
}

export function populateLibsMaturity(libs: UILib[]): UILib[] {
  libs.forEach((lib) => {
    lib.maturity = getLibMaturity(lib);
  });

  return libs;
}
