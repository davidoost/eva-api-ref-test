import { Chip, Code, Divider } from "@nextui-org/react";
import MarkdownContent from "./MarkdownContent";

interface ServiceHeaderComponentProps {
  name: string;
  method: string;
  path: string;
  description: string;
}

export default async function ServiceHeaderComponent(
  props: ServiceHeaderComponentProps
) {
  return (
    <>
      <div className="flex flex-col w-full max-w-2xl gap-3">
        <p className="text-3xl font-semibold">{props.name}</p>
        <div className="flex gap-3">
          <Chip variant="flat" radius="sm" color="primary">
            {props.method}
          </Chip>
          <Code>{props.path}</Code>
        </div>
        <MarkdownContent content={props.description} />
        <Divider></Divider>
      </div>
    </>
  );
}
