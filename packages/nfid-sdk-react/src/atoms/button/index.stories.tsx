import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Button, ButtonProps } from '../..';
import { DesktopIcon } from '../icons/desktop';

const meta: Meta = {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const DefaultTemplate: Story<ButtonProps> = (args) => <Button {...args} />;

const IconTemplate: Story = (args) => (
  <Button {...args}>
    <DesktopIcon />
  </Button>
);
export const Default = DefaultTemplate.bind({});
Default.args = {
  children: 'Button',
  primary: true,
};

export const Icon = IconTemplate.bind({});

Icon.args = {
  isActive: false,
  icon: true,
};
