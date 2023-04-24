import { Story, Meta } from '@storybook/react'
import Button, { ButtonProps } from '.'
import { AddShoppingCart } from '@styled-icons/material/AddShoppingCart'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: 'function'
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: 'Buy now'
}

export const withIcon: Story<ButtonProps> = (args) => <Button {...args} />

withIcon.args = {
  icon: <AddShoppingCart />,
  children: 'Buy now',
  size: 'small'
}
