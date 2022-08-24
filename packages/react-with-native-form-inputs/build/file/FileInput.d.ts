import { PluginComponent, PluginInputType } from "react-with-native-form";
export declare const FileInput: PluginComponent<FileInputType>;
export declare class FileInputType implements PluginInputType {
    value: File[];
    config?: {
        errorClassName?: string;
        extraClassName?: string;
        replaceClassName?: string;
    };
    extra: {
        allowedFileTypes: string[];
    };
}
//# sourceMappingURL=FileInput.d.ts.map