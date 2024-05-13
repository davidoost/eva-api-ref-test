import { PropertyMetadata } from "@/lib/types/serviceType";
import BodyParametersItemComponent from "./BodyParametersItem";

interface BodyParametersComponentProps {
  properties: { [key: string]: PropertyMetadata };
}

export default function BodyParametersComponent(
  props: BodyParametersComponentProps
) {
  // Extract top-level keys from the properties object
  const items = Object.entries(props.properties).map(([key, value]) => ({
    key: key,
    datatype: value.type.ref,
    description: value.description,
    required: value.required,
  }));

  return (
    <div>
      {items.map((item, index) => (
        <BodyParametersItemComponent item={item} />
      ))}
    </div>
  );
}
