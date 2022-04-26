import { Meta, Story } from '@storybook/react';
import React from 'react';
import { List } from '.';
import { LaptopIcon } from '../../atoms/icons/laptop';
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
        <ListItem
          title="One"
          subtitle="Item one subtitle"
          icon={
            <span className="text-xl font-medium text-blue-base">
              <LaptopIcon />
            </span>
          }
        />
        <ListItem
          title="Two"
          subtitle="Item one subtitle"
          icon={
            <span className="text-xl font-medium text-blue-base">
              <LaptopIcon />
            </span>
          }
        />
      </List.Items>
    </List>
  </div>
);

export const ListComponent = ListTemplate.bind({});

ListComponent.args = {};
