import { css } from "styled-components";

const variables = css`
  :root {
    /* COLORS */
    --purple: #9c27b0;

    --green: #4a5d27;
    --white: #fff;
    --black: #000;
    --blue-l: #1879ce;
    --blue: #0f4c81;
    --blue-d: #0d4372;

    --brand-color-react: #61dafb;
    --brand-color-typescript: #007acc;

    /* GRAY SCALE */
    --gray-1: #fafafa;
    --gray-2: #f5f5f5;
    --gray-3: #eeeeee;
    --gray-4: #e0e0e0;
    --gray-5: #bdbdbd;
    --gray-6: #9e9e9e;
    --gray-7: #757575;
    --gray-8: #616161;
    --gray-9: #424242;
    --gray-10: #212121;

    /* TYPOGRAPHY */
    --heading-1: 3.052rem;
    --heading-2: 2.441rem;
    --heading-3: 1.953rem;
    --heading-4: 1.563rem;
    --heading-5: 1.25rem;
    --heading-6: normal small-caps bold 1rem/1 Roboto, sans-serif;
    --base-text: 1rem;
    --small-text: 0.8rem;

    /* SPACING */
    --spacing-0: 4px;
    --spacing-1: 8px;
    --spacing-2: 12px;
    --spacing-3: 16px;
    --spacing-4: 24px;
    --spacing-5: 32px;
    --spacing-6: 64px;

    --max-width: 680px;

    /* ELEVATION */
    --elevation-0: inset 0 7px 9px -7px rgba(0, 0, 0, 0.7);
    --elevation-1: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
      0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
    --elevation-2: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    --elevation-3: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
      0 3px 3px -2px rgba(0, 0, 0, 0.12), 0 1px 8px 0 rgba(0, 0, 0, 0.2);
    --elevation-4: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
      0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
    --elevation-5: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
      0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);

    /* THEMING */
    --primary-light: var(--blue-l);
    --primary: var(--blue);
    --primary-dark: var(--blue-d);

    --accent: var(--green);

    --base-low: var(--gray-3);
    --base: var(--gray-2);
    --base-high: var(--white);

    --contrast-low: var(--gray-9);
    --contrast: var(--gray-10);
    --contrast-high: var(--black);
  }
`;

export default variables;
