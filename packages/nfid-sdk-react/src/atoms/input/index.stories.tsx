import { Input, InputProps } from '.'
import { Meta, Story } from '@storybook/react'
import React from 'react'

const meta: Meta = {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {},
  parameters: {
    controls: { expanded: true }
  }
}

export default meta

const Template: Story<InputProps> = (args) => (
    <Input {...args} />
)

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({})

Default.args = {
  placeholder: 'Placeholder',
  errorText: '',
}
