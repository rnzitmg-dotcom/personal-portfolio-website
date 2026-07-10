"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export function FaqAccordion({ items }: { items: string[][] }) {
  return (
    <Accordion.Root
      type="single"
      collapsible
      className="mx-auto max-w-3xl space-y-3"
    >
      {items.map(([question, answer], index) => (
        <Accordion.Item
          key={question}
          value={`item-${index}`}
          className="glass rounded-2xl px-5"
        >
          <Accordion.Header>
            <Accordion.Trigger className="focus-ring flex w-full items-center justify-between gap-4 rounded-xl py-5 text-left font-semibold text-white">
              {question}
              <ChevronDown className="h-5 w-5 shrink-0 text-cyan-200 transition duration-300 data-[state=open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden pb-5 text-sm leading-7 text-slate-400">
            {answer}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
