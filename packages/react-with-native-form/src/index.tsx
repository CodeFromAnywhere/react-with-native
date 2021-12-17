import * as React from "react";
import { useState, RefObject, createRef, useEffect } from "react";
import { Button } from "react-with-native";

const mergeObjectsArray = (
  previous: { [key: string]: any },
  current: { [key: string]: any }
) => ({ ...previous, ...current });

/**
 * type of every specific field in a form
 */
export interface Field<TInput extends AnyInput, TState> {
  /**
   * type of the field (any plugin type)
   */
  type?: TInput["type"];
  /**
   * unique identifier of the field
   */
  field: string;
  /**
   * title of the field
   */
  title?: string;
  shouldHide?: (state: TState) => boolean;
  titleFromState?: (state: TState) => string;
  isValid?: (value: TInput["value"]) => true | string;
  startSection?: boolean;
  sectionTitle?: string;
  description?: string;
  /**
   * any extra properties that can be given to a specific input
   */
  extra?: TInput["extra"];
}

export interface ExtendedField<TInput extends AnyInput, TState>
  extends Field<TInput, TState> {
  /**
   * this is added to any field
   */
  reference?: RefObject<HTMLDivElement>;
}

export const inputClassWithoutWidth = `text-sm px-3 py-3 text-gray-700 border-gray-300 border-[0.5px] rounded-md focus:outline-none`;
export const inputClass = `w-full ${inputClassWithoutWidth}`;
export type DefaultConfig = {
  extraClassName?: string;
  replaceClassName?: string;
};

export type OnChange<T> = (value: T) => void;

export type Error = {
  message: string;
  fieldKey: string;
};

export interface AnyInput {
  /**
   * typename of the input
   */
  type: string;
  /**
   * default value of the input on submitting, if no defaultValues are given
   */
  defaultValue: unknown;
  /**
   * universal configuration options of the input
   */
  config: { [key: string]: any };
  /**
   * type of the value of the input
   */
  value: unknown;
  /**
   * extra possible field specific settings of the input
   */
  extra: unknown;
}

export type Plugin<TInput extends AnyInput> = (props: {
  onChange: OnChange<TInput["value"]>;
  value: TInput["value"];
  extra: TInput["extra"];
  config: TInput["config"];
  hasError: boolean;
}) => JSX.Element;

export type Plugins = {
  [key: string]: Plugin<any>;
};

export type DataFormConfig = {
  saveButtonText?: string;
  title?: string;
  backButton?: () => void;
  plugins?: Plugins;
  config?: { [key in keyof Plugins]: any };
  onError?: (message: string) => void;
};

export type ValuesObject = {
  [key: string]: any;
};

export type DataFormProps<TValues extends ValuesObject> = {
  fields: Field<AnyInput, any>[];
  defaultValues?: Partial<TValues>;
  onSubmit: (
    values: Partial<TValues>,
    resolve?: (message: string) => void,
    reject?: (props: { field: string; message: string }) => void
  ) => void;
} & DataFormConfig;

const Input = <TInput extends AnyInput, TState>({
  type,
  plugin,
  title,
  onChange,
  value,
  isLast,
  startSection,
  sectionTitle,
  next,
  extra,
  error,
  errorMessage,
  field,
  reference,
  description,
  config,
}: {
  plugin: Plugin<TInput>;
  type: TInput["type"];
  config: TInput["config"];
  extra: TInput["extra"];
  field: string;

  next: Field<AnyInput, TState>;
  title: string;
  onChange: (newValue: TInput["value"]) => void;
  value: TInput["value"];
  error?: string;
  isLast: boolean;
  startSection?: boolean;
  sectionTitle?: string;
  errorMessage?: string;
  reference?: RefObject<HTMLDivElement>;
  description?: string;
}) => {
  const InputComponent = plugin;
  return (
    <div ref={reference}>
      {startSection ? (
        <div
          style={{
            display: "flex",
            height: 40,
            justifyContent: "center",
            paddingLeft: 10,
          }}
        >
          {sectionTitle ? (
            <p>
              <strong>{sectionTitle}</strong>
            </p>
          ) : (
            <div style={{ height: 40 }} />
          )}
        </div>
      ) : null}

      {/* This is the section title */}
      <div className="pt-0 mb-6">
        <label className="block mb-2 text-sm font-bold">{title}</label>
        {description && (
          <div className={`flex mx-3 mb-2 items-start `}>
            <p className={`text-gray-500 italic ml-4`}>{description}</p>
          </div>
        )}
        {error ? (
          <p className={`mx-3 mb-2 text-red-500`}>
            {errorMessage || "Invalid value"}
          </p>
        ) : null}

        <InputComponent
          config={config}
          extra={extra}
          hasError={!!error}
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
};

type UtilityState = { _success: string; _errors: { [key: string]: string } };

const DataForm = <TValues extends ValuesObject>({
  fields,
  defaultValues,
  onSubmit,
  saveButtonText,
  title,
  backButton,
  plugins,
  config,
  onError,
}: DataFormProps<TValues>) => {
  const [fieldsWithReferences, setFieldsWithReferences] = useState<
    ExtendedField<any, any>[]
  >([]);

  useEffect(() => {
    setFieldsWithReferences(
      fields.map((field) => {
        return { ...field, reference: createRef<HTMLDivElement>() };
      })
    );
  }, [fields]);

  const [state, setState] = useState<Partial<TValues> & UtilityState>({
    ...defaultValues,
    _errors: {},
    _success: undefined,
  });

  const notReadyField = fieldsWithReferences.filter(
    (x) => x.isValid && !x.isValid(state[x.field])
  )[0];

  const setError = ({ field, message }: { field: string; message: string }) => {
    if (field) {
      setState({ ...state, _errors: { ...state._errors, [field]: message } });

      const notReadyField = fieldsWithReferences.filter(
        (x) => x.field === field
      )[0];

      const top =
        (notReadyField?.reference?.current?.getBoundingClientRect().top || 0) +
        window.scrollY -
        100;

      if (typeof window !== "undefined") {
        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }
    }
  };

  const setSuccess = (message: string) => {
    setState({ ...state, _success: message });
  };

  return (
    <>
      <div className="w-full mx-auto mt-2 mb-20 pr-28">
        {title && (
          <div className="flex items-center mb-10 ">
            {backButton && (
              <div onClick={backButton} className={`p-4 cursor-pointer`}>
                back
              </div>
            )}
            <h3 className="text-2xl font-bold">{title}</h3>
          </div>
        )}

        {state._success ? <p>{state._success}</p> : null}

        {fieldsWithReferences.map((field, index) => {
          const next = fields[index + 1];

          return field.shouldHide?.(state) ? null : (
            <Input
              plugin={plugins[field.type]}
              config={config[field.type]}
              reference={field.reference}
              field={field.field}
              next={next}
              key={`field-${field.field}`}
              type={field.type || "text"}
              title={
                field.titleFromState
                  ? field.titleFromState(state)
                  : field.title || "NO TITLE"
              }
              value={state[field.field]}
              error={state._errors[field.field]}
              onChange={(newValue) => {
                const newState = { [field.field]: newValue };

                if (state._errors[field.field] && field.isValid?.(newValue)) {
                  newState[`${field.field}Error`] = false;
                }

                setState({ ...state, ...newState });
              }}
              isLast={index === fields.length - 1}
              startSection={field.startSection}
              sectionTitle={field.sectionTitle}
              extra={field.extra}
              description={field.description}
            />
          );
        })}
      </div>
      <div className={`sticky bottom-0 mb-2 py-2 bg-gray-50`}>
        <Button
          title={saveButtonText || "💾 Save"}
          className="px-10"
          onClick={() => {
            const _errors = fields
              .map((field) => {
                const error =
                  !field.isValid || field.isValid?.(state[field.field]);
                if (error) {
                  //continue
                  return false;
                } else {
                  return { [field.field]: error };
                }
              })
              .filter(Boolean)
              .reduce(mergeObjectsArray, {}) as { [key: string]: string };

            const newState = { ...state, _errors };

            setState(newState);

            if (Object.keys(_errors).length === 0) {
              //no errors
              onSubmit(state, setSuccess, setError);
            } else {
              //scroll to the error
              /// onError("Please fill in all fields correctly");

              const top =
                (notReadyField?.reference?.current?.getBoundingClientRect()
                  .top || 0) +
                window.scrollY -
                100;

              if (typeof window !== "undefined") {
                window.scrollTo({
                  top,
                  behavior: "smooth",
                });
              }
            }
          }}
          color={
            notReadyField //find one that's not valid
              ? "gray"
              : undefined
          }
        />
      </div>
    </>
  );
};

export const setConfig = <TValues extends ValuesObject>(
  DataForm: (props: DataFormProps<TValues>) => JSX.Element,
  config: DataFormConfig
) => {
  return (props: DataFormProps<TValues>) => <DataForm {...config} {...props} />;
};

export default DataForm;
