import { PluginComponent, PluginInputType } from "react-with-native-form";
import { useEffect } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import { Li, Div, Label, P, Input, Aside, Ul } from "react-with-native";
// import Icon from "./icon.svg";

export const FileInput: PluginComponent<FileInputType> = ({
  extra,
  onChange,
}) => {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({});

  useEffect(() => {
    onChange(acceptedFiles);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [acceptedFiles]);

  const files = acceptedFiles.map((file: FileWithPath) => (
    <Li key={file.path} className="text-sm">
      {file.path}
    </Li>
  ));

  return (
    <Div
      className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md"
      {...getRootProps()}
    >
      <Div className="space-y-1 text-center">
        {/* <Icon /> */}
        <Div className="flex text-sm text-center text-gray-600">
          <Label
            htmlFor="file-upload"
            className="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
          />
          <Input id="file-upload" type="file" {...getInputProps()} />
        </Div>
        <P className="text-xs text-gray-500">PNG, JPG, GIF en PDF tot 15MB</P>
        {acceptedFiles.length > 0 ? (
          <Aside>
            <Ul>{files}</Ul>
          </Aside>
        ) : null}
      </Div>
    </Div>
  );
};

FileInput.defaultInitialValue = [];

export class FileInputType implements PluginInputType {
  value: File[];
  config?: {
    errorClassName?: string;
    extraClassName?: string;
    replaceClassName?: string;
  };
  extra: { allowedFileTypes: string[] };
}
