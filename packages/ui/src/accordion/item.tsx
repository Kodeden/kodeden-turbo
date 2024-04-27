import { cn } from '@kode/tailwind-config/cn';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { type ComponentPropsWithoutRef, type ReactNode } from 'react';

export type ItemProps = Pick<
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>,
  'disabled' | 'value'
> & {
  contentClassName?: string;
  contentChildren: ReactNode;
  itemClassName?: string;
  triggerChildren: ReactNode;
  triggerClassName?: string;
};

export function Item({
  contentClassName,
  contentChildren,
  disabled,
  itemClassName,
  triggerChildren,
  triggerClassName,
  value,
}: ItemProps) {
  return (
    <AccordionPrimitive.Item
      className={cn('border-b', itemClassName)}
      disabled={disabled}
      value={value}
    >
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
          className={cn(
            'flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
            triggerClassName,
          )}
        >
          {triggerChildren}
          <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
      <AccordionPrimitive.Content className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
        <div className={cn('pb-4 pt-0', contentClassName)}>
          {contentChildren}
        </div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  );
}
