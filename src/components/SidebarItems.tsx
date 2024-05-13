"use client";

import React from "react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { ListboxWrapper } from "./ListboxWrapper";

interface SidebarItemsComponentProps {
  services?: string[]; // Marking the prop as optional
}

const SidebarItemsComponent: React.FC<SidebarItemsComponentProps> = ({
  services = [],
}) => {
  // If services is undefined, it defaults to an empty array
  const items = services.map((label) => ({
    key: label.toLowerCase().replace(/\s+/g, "_"), // Convert label to a suitable key format
    label: label,
  }));

  return (
    <ListboxWrapper>
      <Listbox
        items={items}
        aria-label="Dynamic Actions"
        onAction={(key) => alert(key)}
      >
        {(item) => (
          <ListboxItem
            key={item.key}
            color={item.key.includes("delete") ? "danger" : "default"}
            className={item.key.includes("delete") ? "text-danger" : ""}
            href={`/${item.key}`}
          >
            {item.label}
          </ListboxItem>
        )}
      </Listbox>
    </ListboxWrapper>
  );
};

export default SidebarItemsComponent;
