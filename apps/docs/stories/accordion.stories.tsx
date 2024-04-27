import { Accordion } from '@kode/ui/accordion';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  args: {
    items: [
      {
        value: 'item-1',
        triggerChildren: 'Item 1',
        contentChildren: (
          <section>
            <h3>Custom Content 1</h3>
            <p>This is custom content for Item 1.</p>
          </section>
        ),
      },
      {
        value: 'item-2',
        triggerChildren: 'Item 2',
        contentChildren: (
          <section className="max-w-prose">
            <h3>Custom Content 2</h3>
            <p>This is custom content for Item 2.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
              fugit perspiciatis minus sapiente, neque ullam alias sunt,
              molestias porro odio voluptates non reprehenderit molestiae nihil
              voluptatum quibusdam, consectetur explicabo odit.
            </p>
          </section>
        ),
      },
    ],
  },
  argTypes: {
    items: {
      table: {
        disable: true,
      },
    },
  },
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export const Default: StoryObj<typeof Accordion> = {};

export const CustomTrigger: StoryObj<typeof Accordion> = {
  args: {
    items: [
      {
        value: 'item-1',
        triggerChildren: 'Trigger 1',
        contentChildren: <p>Item 1 content</p>,
      },
      {
        value: 'item-2',
        triggerChildren: <span className="text-red-500">Custom Trigger 2</span>,
        contentChildren: <p>Item 2 content</p>,
      },
    ],
  },
};

export const WithDisabledItems: StoryObj<typeof Accordion> = {
  args: {
    items: [
      {
        value: 'item-1',
        triggerChildren: 'Item 1 is Disabled',
        contentChildren: (
          <section>
            <h3>Custom Content 1</h3>
            <p>This is custom content for Item 1.</p>
          </section>
        ),
        disabled: true,
      },
      {
        value: 'item-2',
        triggerChildren: 'Item 2',
        contentChildren: (
          <section className="max-w-prose">
            <h3>Custom Content 2</h3>
            <p>This is custom content for Item 2.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
              fugit perspiciatis minus sapiente, neque ullam alias sunt,
              molestias porro odio voluptates non reprehenderit molestiae nihil
              voluptatum quibusdam, consectetur explicabo odit.
            </p>
          </section>
        ),
      },
    ],
  },
};

export default meta;
