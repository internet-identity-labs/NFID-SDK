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
  title: 'Atoms/Button/Icons',
};

export default meta;

const Icons: Story = (args) => {
  return (
    <div className="flex gap-2 items-center">
      <DesktopIcon className={args.className} />
      <KeyIcon className={args.className} />
      <LaptopIcon className={args.className} />
      <MobileIcon className={args.className} />
      <PencilIcon className={args.className} />
      <TabletIcon className={args.className} />
      <TrashIcon className={args.className} />
      <ButtonChevronIcon className={args.className} />
      <CopyIcon className={args.className} />
      <DotsIcon className={args.className} />
      <LogoutIcon className={args.className} />
      <PlusIcon className={args.className} />
      <RefreshIcon className={args.className} />
    </div>
  );
};

export const Overview = Icons.bind({});

Overview.args = {
  onClick: () => {
    window.alert('Clicked!');
  },
};
