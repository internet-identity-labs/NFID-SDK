import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Modal, ModalProps } from '.';
import { Button } from '../../atoms/button';

const meta: Meta = {
  title: 'Molecules/Modal',
  component: Modal,
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

const Template: Story<ModalProps> = ({ isVisible, ...args }) => {
  const [visible, setVisible] = React.useState(isVisible);
  return (
    <>
      <Button onClick={() => setVisible(true)}>Open Modal</Button>
      <Modal {...args} isVisible={visible} onClose={() => setVisible(false)} />
    </>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  children: 'Button',
  onClose: () => {},
  id: 'default-modal',
};
