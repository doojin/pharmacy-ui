import type { Meta, StoryObj } from '@storybook/react-vite';

import { TestComponent } from './PharmacyOrder';

const meta = {
  component: TestComponent,
  title: 'Пример: Форма заказа у поставщика'
} satisfies Meta<typeof TestComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};