import type { Meta, StoryObj } from '@storybook/react-vite';

import MuiDemo from './MuiDemo';

const meta = {
  component: MuiDemo,
} satisfies Meta<typeof MuiDemo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};