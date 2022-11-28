import { TsConfig } from "code-types";
import { KeyValueMarkdownModelType, SlugModelType, CsvModelType, MarkdownModelType, DefaultModelType, Creation } from "model-types";
export interface SlugTestModel extends SlugModelType {
    id: string;
    name: string;
    slug: string;
    description: string;
    markdown: string;
    special: boolean;
}
export interface DefaultTestModel extends DefaultModelType {
    id: string;
    name: string;
    description: string;
    markdown: string;
    special: boolean;
}
export interface CsvTestModel extends CsvModelType {
    name: string;
    description: string;
    age: number;
}
export interface MarkdownTestModel extends MarkdownModelType {
    stringA: string;
    stringB: string;
    stringC: string;
    age: number;
    yes: boolean;
    canBeNull: string | null;
    canBeUndefined?: string;
}
export interface KvmdTestModel extends KeyValueMarkdownModelType {
}
export declare type TestModels = {
    CsvTestModel: CsvTestModel;
    KeyValueMarkdownTestModel: KvmdTestModel;
    MarkdownTestModel: MarkdownTestModel;
    JsonMultipleTestModel: SlugTestModel;
    DefaultTestModel: DefaultTestModel;
    TsConfig: TsConfig;
};
/**
 * a db is created with models from all different db storage methods
 */
export declare const testDb: import("fs-orm").Db<TestModels>;
export declare const generateCsvInstance: () => Creation<CsvTestModel>;
export declare const generateSlugTestModel: () => Creation<SlugTestModel>;
export declare const randomName: () => string;
export declare const generateJsonSingleInstance: () => Creation<DefaultTestModel>;
export declare const generateKvmdInstance: () => Creation<KvmdTestModel>;
export declare const generateMarkdownInstance: () => Creation<MarkdownTestModel>;
//# sourceMappingURL=test-db.d.ts.map