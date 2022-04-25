import { Meta, Story } from '@storybook/react';
import React from 'react';
import { List } from '.';
import { H1 } from '../../atoms/typography';
import { ListItem } from './list-item';

const meta: Meta = {
  title: 'Molecules/List',
  component: List,
};

export default meta;

const ListTemplate: Story = (args) => (
  <div>
    <H1>Applications</H1>
    <List {...args}>
      <List.Header>My Header</List.Header>
      <List.Items>
        <ListItem title="One" />
        <ListItem title="Two" />
      </List.Items>
    </List>
  </div>
);

export const ListComponent = ListTemplate.bind({});

ListComponent.args = {};
