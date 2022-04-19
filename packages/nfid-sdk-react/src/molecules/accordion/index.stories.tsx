import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Accordion, AccordionProps } from '../..';

const meta: Meta = {
  title: 'Atoms/Accordion',
  component: Accordion,
  argTypes: {
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<AccordionProps> = (args) => <Accordion {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  title: "Example accordion title",
  details: "Lorem ipsum"
};
