import type { Meta, StoryObj } from '@storybook/react-vite';

import AntDemo from './AntDemo';

const meta = {
  component: AntDemo,
} satisfies Meta<typeof AntDemo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};