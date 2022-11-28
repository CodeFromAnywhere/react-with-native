/// <reference types="react" />
import { SubtextConfig, SubwordConfig, WriterViewEnum } from "writer-types";
export declare const writerInitialValues: {
    writerView: WriterViewEnum;
    subtextConfig: SubtextConfig;
    subwordConfig: SubwordConfig;
};
export declare const useStore: <K_1 extends "subtextConfig" | "writerView" | "subwordConfig">(key: K_1) => import("react-with-native-store").UseStoreResult<{
    writerView: WriterViewEnum;
    subtextConfig: SubtextConfig;
    subwordConfig: SubwordConfig;
}[K_1]>, StoreProvider: ({ children }: {
    children: any;
}) => JSX.Element;
