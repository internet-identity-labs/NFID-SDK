import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
