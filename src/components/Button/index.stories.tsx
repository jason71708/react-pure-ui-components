import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './index';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.argTypes = {
  children: {
    control: { type: 'text' },
    defaultValue: 'Button'
  }
}

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: (
    <span>!</span>
  ),
};
