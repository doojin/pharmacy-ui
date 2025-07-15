import type { Meta, StoryObj } from '@storybook/react-vite';

import { TestComponent } from './TestComponent';

const meta = {
  component: TestComponent,
} satisfies Meta<typeof TestComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};