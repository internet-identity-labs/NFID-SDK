import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Button, ButtonProps } from '../..';
import { DesktopIcon } from './icons/desktop';

const meta: Meta = {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
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
export const Icon = IconTemplate.bind({});

Default.args = {
  children: 'Button',
};

Icon.args = {
  isActive: false,
  icon: true,
  onClick: () => {
    window.alert('Clicked!');
  },
};
