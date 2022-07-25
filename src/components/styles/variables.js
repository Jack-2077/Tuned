import { css } from 'styled-components/macro';

const variables = css`
  :root {
    --black: #000000;
    --near-black: #181818;
    --dark-grey: #161618;
    --darker-grey: #333
    --grey: #535353;
    --light-grey: #b3b3b3;
    --color-gray-100: hsl(225deg, 25%, 95%);
    --color-gray-700: hsl(225deg, 12%, 40%);
    --purple: #bb86fc;
    --color-invalid: #dc3232;
    --white: #ffffff;

    --font: 'Circular Std', -apple-system, BlinkMacSystemFont, system-ui,
      sans-serif;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 24px;

    --spacing-xxs: 4px;
    --spacing-xs: 8px;
    --spacing-sm: 12px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;
    --spacing-xxl: 64px;

    --border-radius-pill: 100px;
    --border-radius-subtle: 4px;
  }
`;

export default variables;
