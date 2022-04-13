import { Meta, Story } from '@storybook/react';
import React from 'react';
import { ButtonChevronIcon } from './chevron';
import { CopyIcon } from './copy';
import { DesktopIcon } from './desktop';
import { DotsIcon } from './dots';
import { KeyIcon } from './key';
import { LaptopIcon } from './laptop';
import { LogoutIcon } from './logout';
import { MobileIcon } from './mobile';
import { PencilIcon } from './pencil';
import { PlusIcon } from './plus';
import { RefreshIcon } from './refresh';
import { TabletIcon } from './tablet';
import { TrashIcon } from './trash';

const meta: Meta = {
  title: 'Atoms/Button/IconList',
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
};

export default meta;

const Icons: Story = (args) => {
  return (
    <div className="flex gap-2 items-center">
      <DesktopIcon {...args} />
      <KeyIcon {...args} />
      <LaptopIcon {...args} />
      <MobileIcon {...args} />
      <PencilIcon {...args} />
      <TabletIcon {...args} />
      <TrashIcon {...args} />
      <ButtonChevronIcon {...args} />
      <CopyIcon {...args} />
      <DotsIcon {...args} />
      <LogoutIcon {...args} />
      <PlusIcon {...args} />
      <RefreshIcon {...args} />
    </div>
  );
};

export const Overview = Icons.bind({});

Overview.args = {};
