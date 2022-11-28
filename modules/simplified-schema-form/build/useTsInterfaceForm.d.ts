import { TsInterface } from "code-types";
import { Storing } from "model-types";
/**
 * hook to create a form for a TsInterface
 *
 * # Usage
 *
 ```ts
import { useTsInterfaceForm } from "simplified-schema-form";
import DatasetConfigJson from "code-types/db/ts-interfaces/datasetconfig.json";
import { DatasetConfig, TsInterface } from "code-types";
import { Storing } from "model-types";

// in your component:
const initialValue:DatasetConfig = {} as any;
const [Form, value, onChange] = useTsInterfaceForm(DatasetConfigJson as Storing<TsInterface>,initialValue);
```
 */
export declare const useTsInterfaceForm: <T extends unknown>(tsInterface: Storing<TsInterface>, id?: string, initialValue?: T | undefined, projectRelativeStorageFilePath?: string, modelName?: string) => [form?: JSX.Element | undefined, value?: T | undefined, onChange?: ((value: T) => void) | undefined];
//# sourceMappingURL=useTsInterfaceForm.d.ts.map