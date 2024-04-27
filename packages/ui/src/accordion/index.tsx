'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { Item, type ItemProps } from './item';

interface AccordionProps {
  items: ItemProps[];
}

export function Accordion({ items }: AccordionProps) {
  return (
    <AccordionPrimitive.Root collapsible type="single">
      {items.map((item) => (
        <Item key={item.value} {...item} />
      ))}
    </AccordionPrimitive.Root>
  );
}
