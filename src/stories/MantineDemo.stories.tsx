import type { Meta, StoryObj } from '@storybook/react-vite';

import MantineDemo from './MantineDemo';

const meta = {
  component: MantineDemo,
} satisfies Meta<typeof MantineDemo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};