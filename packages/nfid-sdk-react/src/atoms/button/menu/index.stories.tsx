import { Meta, Story } from '@storybook/react';
import React from 'react';
import {ButtonMenu, ButtonMenuProps} from "./index";

const meta: Meta = {
  title: 'Atoms/ButtonMenu',
  component: ButtonMenu,
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


  const classes = {
    navItem:
      "text-black hover:underline cursor-pointer hover:text-blue-hover transition-all",
  }

  const items = [
    {
      label: "The Identity Layer",
      to: "home",
      external: false,
    },
    {
      label: "Only with NFID",
      to: "only-with-nfid",
      external: false,
    },
    {
      label: "Our mission",
      to: "our-mission",
      external: false,
    },
    // {
    //   label: "Partners",
    //   to: "partners",
    // },
    {
      label: "FAQ",
      to: "faq",
      external: false,
    },
    {
      label: "Docs",
      to: "https://docs.nfid.one",
      external: true,
    },
  ]

const DefaultTemplate: Story<ButtonMenuProps> = () => <ButtonMenu buttonElement={<span>menu</span>}>
          {(toggleMenu) => (
            <div className={'p-4 py-6 font-bold bg-white rounded w-[70vw]'}>
              <div className="pt-24 pb-6 space-y-5">
              {items.map((item, index) => (
                <div
                  className={classes.navItem}
                  onClick={(el) => {
                    el.stopPropagation()
                    toggleMenu()
                  }}
                  key={index}
                >
                  {item.label}
                </div>
              ))}
              </div>
            </div>
          )}
        </ButtonMenu>;

export const Default = DefaultTemplate.bind({});

