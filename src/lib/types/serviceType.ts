export interface APIResponse {
  typename: string;
  assembly: string;
  description: string;
  usage: Usage;
  enumIsFlag: boolean | null;
  typeArguments: any[];
  typeDependencies: string[];
  extends: TypeReference;
  properties: { [key: string]: PropertyMetadata };
  enumValues: { [key: string]: any };
  parent: any | null;
}

export interface Usage {
  request: boolean;
  response: boolean;
}

export interface TypeReference {
  ref: string;
  args: TypeArgument[];
  shared: boolean | null;
  nullable: boolean;
}

export interface TypeArgument {
  ref: string;
  args: any[];
  shared: boolean | null;
  nullable: boolean;
}

export interface PropertyMetadata {
  type: {
    ref: string;
    args: any[];
    shared: boolean | null;
    nullable: boolean;
  };
  description: string | null;
  skippable: boolean;
  deprecated: any;
  required: RequirementStatus;
  requiredAllowEmpty: RequirementStatus;
  minValue: number | null;
  maxValue: number | null;
  stringLengthConstraint: StringLengthConstraint | null;
  stringRegexConstraint: string | null;
  datamodel: DataModel;
  allowedValues: any[]; // Adjust the `any` based on specific allowed values if known.
}

export interface RequirementStatus {
  current: boolean;
  new: boolean | null;
  announced: boolean | null;
  active: boolean | null;
  comment: string | null;
}

export interface StringLengthConstraint {
  min: number | null;
  max: number | null;
}

export interface DataModel {
  name: string;
  lenient: boolean;
  supportsCustomID: boolean;
  supportsSystemID: boolean;
  isEvaID: boolean;
  isExternalID: boolean;
}
