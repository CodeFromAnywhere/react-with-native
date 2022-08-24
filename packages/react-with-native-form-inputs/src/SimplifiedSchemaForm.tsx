/**

TODO: 

Support for arrays: Arrays can be empty, so rendering a form for an array should start with rendering the title and a plus-button (assuming the array is undefined or empty in value)

If you have an object that can be recursed on but it's not required, don't recurse yet until you expand it.

 */

// modules
import { useEffect } from "react";

import {
  FunctionParameter,
  markdownTextParameterNames,
  generatedParameterNames,
  passwordTextParameterNames,
} from "code-types";
import { Div, P, Span } from "react-with-native";
import { humanCase } from "convert-case";
import { Item } from "react-with-native-select";
import { mergeObjectsArray, notEmpty } from "js-util";
import { getReferenceParameterInfo } from "schema-util";
// relative
import { TextInput } from "./text/text";
import { ToggleInput } from "./toggle/toggle";
import { NumberInput } from "./number/number";
import { SelectMultipleInput } from "./selectMultiple/selectMultiple";
import { SelectInput } from "./select/select";
import { TextAreaInput } from "./textarea/textArea";
import { PasswordInput } from "./password/password";

/**
 * this is part of the database convention
 *
 * TODO: place in the right location
 */
export const isCalculatedParameter = (parameterName: string) => {
  return (
    generatedParameterNames.includes(parameterName) ||
    parameterName.endsWith("Calculated")
  );
};
export const renderParameterTitle = (
  parameter: FunctionParameter,
  isDebug: boolean | undefined
) => {
  const info = getReferenceParameterInfo(parameter.name);

  // console.log({ isDebug });
  return (
    <P>
      {info.isReferenceParameter
        ? humanCase(`${info.descriptor || ""} ${info.interfaceName}`)
        : humanCase(parameter.name)}
      {isDebug ? (
        <P className="italic text-gray-400">
          [{parameter.simplifiedSchema?.type}]:{" "}
          <Span className="text-gray-600">
            {parameter.simplifiedSchema?.description}
          </Span>
        </P>
      ) : null}
    </P>
  );
};

export const getReferencedModelData = (
  parameterName: string,
  referencedModelData: { [modelName: string]: any[] }
) => {
  const interfaceInfo = getReferenceParameterInfo(parameterName);
  const referencedData =
    interfaceInfo &&
    interfaceInfo.interfaceName &&
    referencedModelData[interfaceInfo.interfaceName] &&
    referencedModelData[interfaceInfo.interfaceName].length > 0
      ? referencedModelData[interfaceInfo.interfaceName]
      : undefined;

  return interfaceInfo
    ? {
        referencedData,
        ...interfaceInfo,
      }
    : undefined;
};

/**
recursive component that renders a form for a SimplifiedSchema


TODO: CLEANUP: Think about the different steps involved because some may be able to be reused, for example, in interactive-cli forms, chatbot interfaces, siri-like agents... etc.

 */
export const SimplifiedSchemaForm = ({
  id,
  onChange,
  parameters,
  values,
  referencedModelData,
  referencedModelDataIsLoading,
  isDbModel,
  title,
  isDebug,
}: {
  /**
   * if given, this form gets a clear container and title
   */
  title?: string;

  /** unique id for this form */
  id: string;
  /**
   * If true, we assume a model-ready endpoint is used, so it will be rendered more cleanly (some fields are automatic)
   */
  isDbModel?: boolean;
  /**
   * sometimes you have multiple schemas that you want to put in a form, for example if you have a function that takes multiple parameters
   */
  parameters: FunctionParameter[];
  /**
   * the value is a json with the structure of the simplified schema. with this you can also prefill the form
   */
  values: undefined | any[];
  onChange: (values: any[]) => void;
  /**
   * model data (can be filtered) that can be referenced in the schema. This is used to fill the form select inputs so a value can be selected.
   */
  referencedModelData: { [modelName: string]: any[] };
  referencedModelDataIsLoading?: boolean;
  /** show more info for devs */
  isDebug?: boolean;
}) => {
  useEffect(() => {
    if (!Array.isArray(values)) {
      onChange(parameters.map(() => undefined));
    }
  }, []);

  if (!values) return null;

  // For every parameter we are going to return elements
  const elements = parameters
    .map((parameter, index) => {
      if (!parameter.simplifiedSchema) return;
      const uniqueFieldId = `${id}.${parameter.name}`;
      const defaultInputFields = {
        uniqueFieldId,
        fieldName: uniqueFieldId,
      };
      if (parameter.simplifiedSchema?.type === "array") {
        // create a component where you can add and remove items, where each item that is added should recurse on this form builder
        return isDebug ? (
          <P className="text-red-500">
            {parameter.name}: Arrays are not supported yet...
          </P>
        ) : null;
      }

      if (parameter.simplifiedSchema?.type === "object") {
        // we can only render the object if it has properties...
        if (
          !parameter.simplifiedSchema.properties ||
          parameter.simplifiedSchema.properties.length === 0
        ) {
          console.log("Object without properties", { parameter });
          return isDebug ? (
            <P className="text-red-500">Object without properties</P>
          ) : null;
        }

        // for each parameter, recurse this form builder

        const onChangeSubset = (objectParameterValues: any[]) => {
          // NB: every item in the array is linked with a parameter in the object
          const objectParts = parameter.simplifiedSchema?.properties?.map(
            (x, i) => ({
              [x.name]: objectParameterValues[i],
            })
          );
          const objectOrNot = objectParts
            ? mergeObjectsArray(objectParts)
            : undefined;

          const newValues = values.map((v, i) =>
            i === index ? objectOrNot : v
          );
          onChange(newValues);
        };

        const valuesSubset: any[] = parameter.simplifiedSchema.properties.map(
          (x) => values[index]?.[x.name]
        );

        const parameters = parameter.simplifiedSchema.properties.map((x) => ({
          name: x.name,
          required: x.required,
          simplifiedSchema: x.schema,
        }));

        const title = parameter.name;

        return (
          <Div
            className={
              title
                ? "ml-2 pl-2 my-4 border-l border-gray-900 dark:border-gray-100"
                : undefined
            }
          >
            {title ? (
              <P className="font-bold">{humanCase(title || "")}</P>
            ) : null}
            {isDebug ? (
              <P className="italic text-gray-600">
                {parameter.simplifiedSchema.description}
              </P>
            ) : null}
            <SimplifiedSchemaForm
              isDebug={isDebug}
              isDbModel={isDbModel}
              id={`${id}.${index}`}
              parameters={parameters}
              referencedModelData={referencedModelData}
              onChange={onChangeSubset}
              values={valuesSubset}
            />
          </Div>
        );
      }

      if (isDbModel && isCalculatedParameter(parameter.name)) {
        //skip!
        return;
      }

      if (parameter.simplifiedSchema?.type === "number") {
        const value = values[index] as number | null | undefined;

        const onChangeNumber = (newNumber: number | null | undefined) => {
          const realNewNumber =
            !parameter.required &&
            (newNumber === null || newNumber === undefined)
              ? undefined
              : newNumber || 0;

          const newValues = values.map((x, i) =>
            // NB: only change the index we are on
            i === index ? realNewNumber : x
          );

          onChange(newValues);
        };

        return (
          <Div>
            {renderParameterTitle(parameter, isDebug)}
            <NumberInput
              {...defaultInputFields}
              onChange={onChangeNumber}
              value={value}
              extra={{}}
              config={{}}
            />
          </Div>
        );
      }

      if (parameter.simplifiedSchema?.type === "boolean") {
        const value = values[index] as boolean | undefined;

        const onChangeBoolean = (newBoolean: boolean) => {
          const newValues = values.map((x, i) =>
            // NB: only change the index we are on
            i === index
              ? // NB: ony return undefined for an empty string that's not required
                !parameter.required && newBoolean === false
                ? undefined
                : newBoolean
              : x
          );

          onChange(newValues);
        };

        return (
          <Div>
            <ToggleInput
              {...defaultInputFields}
              onChange={onChangeBoolean}
              value={value || false}
              extra={{ label: renderParameterTitle(parameter, isDebug) }}
              config={{}}
            />
          </Div>
        );
      }

      const thisReferencedModelData = getReferencedModelData(
        parameter.name,
        referencedModelData
      );

      // NB : only string type left... this can still be many things...

      if (
        thisReferencedModelData &&
        thisReferencedModelData.isReferenceParameter
      ) {
        // selectbox, if referencedModelData is available
        if (thisReferencedModelData.isReferenceMultipleParameter) {
          // select multiple
          const value = values[index] as string[];

          const onChangeMultiple = (selected: Item<string>[]) => {
            const newValue =
              selected.length === 0 && !parameter.required
                ? undefined
                : selected.map((x) => x.value);
            onChange(values.map((x, i) => (i === index ? newValue : x)));
          };

          const options: Item<string>[] =
            thisReferencedModelData.referencedData?.map((x) => {
              return {
                value: thisReferencedModelData.keyInModel
                  ? x[thisReferencedModelData.keyInModel]
                  : undefined,
                label: x.name,
              };
            }) || [];

          const optionsAndFirst: Item<string>[] = [
            { label: "Select an option", value: "" },
          ].concat(options);

          return (
            <Div>
              {renderParameterTitle(parameter, isDebug)}
              {referencedModelDataIsLoading ? (
                "Loading..."
              ) : (
                <SelectMultipleInput
                  {...defaultInputFields}
                  onChange={onChangeMultiple}
                  value={value.map((v) => ({ label: humanCase(v), value: v }))}
                  extra={{
                    options: optionsAndFirst,
                    autoSuggest: optionsAndFirst.length > 10,
                  }}
                  config={{}}
                />
              )}
            </Div>
          );
        } else {
          // select single

          // If a referenced model contains the `categoryStack` parameter, this data should be used to group the selectbox. Without categoryStack parameter, simply use the name.

          const value = values[index] as string | undefined;

          const onChangeSingle = (selected: Item<string> | null) => {
            const newValue =
              !selected && !parameter.required ? undefined : selected?.value;
            onChange(values.map((x, i) => (i === index ? newValue : x)));
          };

          const selectValue = value
            ? {
                label:
                  thisReferencedModelData.referencedData?.find((x) =>
                    thisReferencedModelData.keyInModel
                      ? x[thisReferencedModelData.keyInModel] === value
                      : false
                  )?.name || "Select an option",
                value,
              }
            : null;

          const options: Item<string>[] =
            thisReferencedModelData.referencedData?.map((x) => {
              const categoryStack = x.categoryStack;

              const value = thisReferencedModelData.keyInModel
                ? x[thisReferencedModelData.keyInModel]
                : undefined;
              const label = categoryStack
                ? categoryStack.concat(x.name).join(" › ")
                : x.name;

              return {
                value,
                label,
              };
            }) || [];

          const optionsAndFirst: Item<string>[] = [
            { label: "Select an option", value: "" },
          ].concat(options);

          return (
            <Div>
              {renderParameterTitle(parameter, isDebug)}
              {referencedModelDataIsLoading ? (
                "Loading..."
              ) : (
                <SelectInput
                  {...defaultInputFields}
                  onChange={onChangeSingle}
                  value={selectValue}
                  extra={{
                    options: optionsAndFirst,
                    autoSuggest: optionsAndFirst.length > 10,
                  }}
                  config={{}}
                />
              )}
            </Div>
          );
        }
      }

      // NB: only string text left... sometimes it can be markdown though (textArea would be great here)... But we can't see this yet due to indexation

      const value = values[index] as string | undefined;

      if (parameter.simplifiedSchema?.enum) {
        const onChangeEnum = (newItemValue: string | null) => {
          const newValues = values.map((x, i) =>
            // NB: only change the index we are on
            i === index
              ? //   NB: ony return undefined for an empty string that's not required
                !newItemValue
                ? null
                : newItemValue
              : x
          );

          onChange(newValues);
        };
        const enumItems = parameter.simplifiedSchema.enum.map((enumString) => {
          return {
            value: String(enumString),
            label: humanCase(String(enumString)),
          };
        });

        const firstEnumValue = parameter.simplifiedSchema?.enum[0];
        const firstEnumValueString = firstEnumValue
          ? String(firstEnumValue)
          : null;

        // NB: we are changing the state here to set the enum to the first value, if it's not specified

        if (value === undefined) {
          onChangeEnum(firstEnumValueString);
        }
        const currentEnumItemValue = value || firstEnumValueString;

        const currentEnumItem = enumItems.find(
          (x) => x.value === currentEnumItemValue
        )!;

        return (
          <Div>
            {renderParameterTitle(parameter, isDebug)}

            <SelectInput
              {...defaultInputFields}
              onChange={(item) => onChangeEnum(item?.value || null)}
              value={currentEnumItem}
              extra={{ options: enumItems, autoSuggest: enumItems.length > 10 }}
              config={{}}
            />
          </Div>
        );
      }

      const onChangeText = (newText: string) => {
        const newValues = values.map((x, i) =>
          // NB: only change the index we are on
          i === index
            ? //   NB: ony return undefined for an empty string that's not required
              !parameter.required && newText.length === 0
              ? undefined
              : newText
            : x
        );

        onChange(newValues);
      };

      const RightTextInput = markdownTextParameterNames.includes(parameter.name)
        ? TextAreaInput
        : passwordTextParameterNames.includes(parameter.name)
        ? PasswordInput
        : TextInput;
      return (
        <Div>
          {renderParameterTitle(parameter, isDebug)}

          <RightTextInput
            {...defaultInputFields}
            onChange={onChangeText}
            value={value || ""}
            extra={{}}
            config={{}}
          />
        </Div>
      );
    })
    .filter(notEmpty);

  return <Div>{elements}</Div>;
};
