import type { Meta, StoryObj } from '@storybook/react-vite';

import ChakraDemo from './ChakraDemo';

const meta = {
  component: ChakraDemo,
} satisfies Meta<typeof ChakraDemo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};