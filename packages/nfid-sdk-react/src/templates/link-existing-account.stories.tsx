import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  LinkExistingAccount,
  LinkExistingAccountProps,
} from './link-existing-account';

const meta: Meta = {
  title: 'templates/Link existing account',
  component: LinkExistingAccount,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const LinkExistingAccountTemplate: Story<LinkExistingAccountProps> = (args) => (
  <LinkExistingAccount {...args} />
);

export const Default = LinkExistingAccountTemplate.bind({});
