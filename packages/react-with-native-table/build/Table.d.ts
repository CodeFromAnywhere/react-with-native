/// <reference types="react" />
import { TsInterface } from "code-types";
/**
 * This contains the rows and columns of a table
 */
export declare type TableType<TModel extends {
    [key: string]: any;
}> = {
    data: TModel[] | undefined;
    columns: ColumnType<TModel>[];
    /** NB: we can provide extra things to render behind all model data */
    renderExtraColumns?: (item: TModel | undefined) => JSX.Element;
    extraColumnsAtStart?: boolean;
    /**
     * optionally provide a function that returns a boolean indicating whether or not this row should be highlighted
     */
    shouldHighlightItem?: (item: TModel) => boolean;
};
/**
 * gets all columns you can present based on a modelname, the interfaces of that model, and the data
 */
export declare const getColumns: (modelName: string, interfaces: TsInterface[] | undefined, data: any[]) => ColumnType<any>[];
/**
 * This contains the row which is any data of the respective model and it contains a array of columns
 */
export declare type RowType<TModel extends {
    [key: string]: any;
} = any> = {
    row: TModel | undefined;
    columns: ColumnType<TModel>[];
    renderExtraColumns?: (row: TModel | undefined) => JSX.Element;
    extraColumnsAtStart?: boolean;
    shouldHighlight?: boolean;
};
export declare type Keys<TObject> = Extract<keyof TObject, string>;
/**
 * This is a column, that contains the name, type of presentation and the object parameterkey that is used to generate a table
 *
 * NB: in the generics we say here that the model must be an object with keys
 */
export declare type ColumnType<TModel extends {
    [key: string]: any;
}> = {
    name: string;
    presentationType?: PresentationTypeEnum;
    customPresentation?: (item: TModel) => JSX.Element;
    /**
     * Used to match the right row item to the column
     *
     * NB: we are saying here that we only want all the string keys of the model we are using
     */
    objectParameterKey: Keys<TModel>;
};
/**
 * This contains all possible presenation types of the data in the table
 */
export declare type PresentationTypeEnum = "text" | "referenceSingle" | "referenceMultiple";
export declare const Table: <TModel extends {
    [key: string]: any;
}>({ data, columns, renderExtraColumns, extraColumnsAtStart, shouldHighlightItem, }: TableType<TModel>) => JSX.Element;
export declare const TableHeadItem: (column: ColumnType<any>) => JSX.Element;
export declare const TableRow: <T extends {
    [key: string]: any;
} = any>({ row, columns, renderExtraColumns, extraColumnsAtStart, shouldHighlight, }: RowType<T>) => JSX.Element;
//# sourceMappingURL=Table.d.ts.map