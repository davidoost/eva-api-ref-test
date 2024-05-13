"use client";

import {
  Accordion,
  AccordionItem,
  Chip,
  Code,
  Divider,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";

export default function ServiceExample() {
  return (
    <div className="flex flex-col items-center p-8">
      <div className="flex flex-col w-full max-w-2xl gap-3">
        <div className="flex flex-col w-full max-w-2xl gap-3">
          <p className="text-3xl font-semibold">ImportProducts</p>
          <div className="flex gap-3">
            <Chip variant="flat" radius="sm" color="primary">
              POST
            </Chip>
            <Code>/message/importproducts</Code>
          </div>
          <p className="text-foreground-500">
            This service lets you create and update a set of products and their
            content.
          </p>
        </div>
        <Divider></Divider>
        <div className="flex flex-col w-full max-w-2xl gap-3">
          <Accordion
            variant="splitted"
            itemClasses={{
              base: "!bg-content2 !shadow-none",
            }}
            isCompact
          >
            <AccordionItem
              indicator={<Icon icon="tabler:chevron-right" width={24} />}
              title="Header Parameters"
              className="gap-2"
            >
              <div className="flex flex-col bg-content1 p-3 gap-2 rounded-lg mb-3">
                <div className="flex gap-2 items-center">
                  <p className="font-mono text-sm">EVA-User-Agent</p>
                  <Chip size="sm" radius="sm" color="danger" variant="flat">
                    Required
                  </Chip>
                  <Chip
                    size="sm"
                    radius="sm"
                    color="default"
                    variant="flat"
                    className="text-foreground-500"
                  >
                    string
                  </Chip>
                </div>
                <p className="text-foreground-500 text-sm">
                  The user agent that is making these calls. Don't make this
                  specific per device/browser but per application. This should
                  be of the form: MyFirstUserAgent/1.0.0
                </p>
              </div>
              <div className="flex flex-col bg-content1 p-3 gap-2 rounded-lg mb-3">
                <div className="flex gap-2 items-center">
                  <p className="font-mono text-sm">Authorization</p>
                  <Chip size="sm" radius="sm" color="danger" variant="flat">
                    Required
                  </Chip>
                  <Chip
                    size="sm"
                    radius="sm"
                    color="default"
                    variant="flat"
                    className="text-foreground-500"
                  >
                    string
                  </Chip>
                </div>
                <p className="text-foreground-500 text-sm">
                  This is a custom HTTP parameter in the heading that can be
                  used to send an API key as a token in the header of an HTTP
                  request. The header value usually includes the key itself and
                  is added to the "Authorization" header field using a specific
                  format.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem
              indicator={<Icon icon="tabler:chevron-right" width={24} />}
              title="Body Parameters"
            >
              Content
            </AccordionItem>
            <AccordionItem
              indicator={<Icon icon="tabler:chevron-right" width={24} />}
              title="Response Parameters"
            >
              Content
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
