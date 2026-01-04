export const COLORS = {
  primary: 'hsl(287deg 60% 67%)',
  gray: 'hsl(219deg 13% 71%)',
  background: 'hsl(218deg 12% 18%)',
  offBlack: 'hsl(216deg 10% 19%)',
  white: 'hsl(0deg 0% 100%)',
  black: '#282c33'
};

export const WEIGHTS = {
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
};

export const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  tabletAndBelow: `(max-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  phoneAndBelow: `(max-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
  tabletOnly: `
    (min-width: ${BREAKPOINTS.tabletMin / 16}rem) and
    (max-width: ${(BREAKPOINTS.laptopMin - 1) / 16}rem)`,
};

export const FAMILIES = {
  FiraCode: '"Fira Code", monospace;',
};

export const rem = (px: number) => `${px / 16}rem`;