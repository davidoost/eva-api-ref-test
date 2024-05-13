"use client";

import getService from "@/lib/functions/getService";
import ServiceHeaderComponent from "./ServiceHeader";
import getType from "@/lib/functions/getType";
import BodyParametersComponent from "./BodyParameters";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Icon } from "@iconify/react/dist/iconify.js";

interface ServiceComponentProps {
  service: string;
}

export default async function ServiceComponent(props: ServiceComponentProps) {
  const serviceInfo = await getService(props.service);
  const serviceType = await getType(serviceInfo.requestType);
  return (
    <div className="flex flex-col gap-3">
      <ServiceHeaderComponent
        name={serviceInfo.name}
        path={serviceInfo.path}
        method={serviceInfo.method}
        description={serviceType.description}
      />
      <Accordion
        variant="splitted"
        itemClasses={{
          base: "!bg-content2 !shadow-none",
        }}
        isCompact
        defaultExpandedKeys={["body-parameters"]}
      >
        <AccordionItem
          indicator={<Icon icon="tabler:chevron-right" width={24} />}
          title="Body Parameters"
          className="gap-2"
          key="body-parameters"
        >
          <BodyParametersComponent properties={serviceType.properties} />
        </AccordionItem>
      </Accordion>
      <pre>{JSON.stringify(serviceType, null, 2)}</pre>
    </div>
  );
}
