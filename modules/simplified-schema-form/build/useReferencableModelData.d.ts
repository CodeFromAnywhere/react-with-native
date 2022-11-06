import { SimplifiedSchema } from "code-types";
import { ReferencableModelData } from "./types";
/**
 * Hook to retreive `ReferencableModelData` to supply to `SimplifiedSchemaForm`.
 *
 * Underwater, this calculates all referencableModelNames for a schema, and then it fetches the `ReferencableItem`[] for every one of those models, using `react-query` `useQuery` hooks
 *
 * NB: be careful, not to change the simplifiedSchema after using this hook for the first time. This will change the amount of hooks and this can break react!
 *
 * (it will give `Error: Rendered more hooks than during the previous render`)
 */
export declare const useReferencableModelData: (simplifiedSchema: SimplifiedSchema) => ReferencableModelData | undefined;
//# sourceMappingURL=useReferencableModelData.d.ts.map