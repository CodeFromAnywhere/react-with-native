import { CategoryStack } from "model-types";
import { ReferenceParameterInfo } from "schema-util";
import { ReferencableModelData } from "./types";
export declare type ReferenceItem = {
    id: string;
    slug?: string;
    name?: string;
    categoryStackCalculated?: CategoryStack;
};
export declare type ReferenceItemsObject = {
    data?: ReferenceItem[];
    isLoading?: boolean;
};
export declare type ReferencedModelDataItem = ReferenceParameterInfo & ReferenceItemsObject;
export declare const getReferencedModelDataItem: (parameterName: string, referencedModelData?: ReferencableModelData) => ReferencedModelDataItem | undefined;
//# sourceMappingURL=getReferencedModelDataItem.d.ts.map