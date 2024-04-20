import { Button } from '@kode/ui/button';
import type { Meta, StoryObj } from '@storybook/react';

const SIZES = ['default', 'sm', 'lg', 'icon'] as const;
const VARIANTS = [
  'default',
  'destructive',
  'outline',
  'secondary',
  'ghost',
  'link',
] as const;

const meta = {
  args: {
    children: 'Click Me!',
    onClick: () => {},
  },
  argTypes: {
    onClick: {
      table: {
        disable: true,
      },
    },
    size: {
      control: {
        type: 'select',
      },
      options: SIZES,
    },
    variant: {
      control: {
        type: 'select',
      },
      options: VARIANTS,
    },
  },
  component: Button,
} satisfies Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {};

export default meta;
