import { Chip } from "@nextui-org/react";

interface BodyParametersItemComponentProps {
  item: {
    key: string;
    datatype: string;
    description: string | null;
    required: {} | null;
  };
}

export default function BodyParametersItemComponent(
  props: BodyParametersItemComponentProps
) {
  return (
    <div className="flex flex-col bg-content1 p-3 gap-2 rounded-lg mb-3">
      <div className="flex gap-2 items-center">
        <p className="font-mono text-sm">{props.item.key}</p>
        {props.item.required && (
          <Chip size="sm" radius="sm" color="danger" variant="flat">
            Required
          </Chip>
        )}
        <Chip
          size="sm"
          radius="sm"
          color="default"
          variant="flat"
          className="text-foreground-500"
        >
          {props.item.datatype}
        </Chip>
      </div>
      <p className="text-foreground-500 text-sm">
        {props.item.description || "No description available."}
      </p>
    </div>
  );
}
