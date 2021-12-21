import * as React from "react";
import { useState, RefObject, createRef, useEffect } from "react";
import { ActivityIndicator, Div } from "react-with-native";

export interface PluginInputProps<TInput extends AnyInput> {
  onChange: OnChange<TInput["value"]>;
  value: TInput["value"];
  extra: TInput["extra"];
  config: TInput["config"];
  hasError: boolean;
  id: string;
}

export type EmptyValues<T> = {
  [K in keyof T]: T[K] extends string ? "" : never;
};

const mergeObjectsArray = (
  previous: { [key: string]: any },
  current: { [key: string]: any }
) => ({ ...previous, ...current });

export function notEmpty<TValue>(
  value: TValue | null | undefined
): value is TValue {
  return value !== null && value !== undefined;
}

export const makeField = <
  TInputs extends AnyInputs<any>,
  T extends keyof TInputs
>(
  type: T,
  config: Field<TInputs, T>
) => {
  // function fieldCreator<K extends T>(){
  //   return {type, ...config };
  // }

  return () => ({ ...config });
};

/**
 * type of every specific field in a form
 */
export interface Field<
  TInputs extends AnyInputs<any>,
  T extends keyof TInputs
> {
  /**
   * type of the field (any plugin type)
   */
  type: keyof TInputs;
  /**
   * unique identifier of the field
   */
  field: string;
  /**
   * title of the field
   */
  title?: string;
  shouldHide?: (state: any) => boolean;
  titleFromState?: (state: any) => string;
  /**
   * returns either false if there's no error or a string of an error message if there is one
   */
  hasError?: (
    value: TInputs[T]["value"],
    state: Partial<PossibleState>
  ) => boolean | string;
  startSection?: boolean;
  sectionTitle?: string;
  description?: string;
  /**
   * any extra properties that can be given to a specific input
   */
  extra?: TInputs[T]["extra"];
}

export type Keys<TObject> = Extract<keyof TObject, string>;

export interface ExtendedField<
  TInputs extends AnyInputs<any>,
  T extends keyof TInputs
> extends Field<TInputs, T> {
  /**
   * this is added to any field
   */
  reference?: RefObject<HTMLDivElement>;
}

export const inputClassWithoutWidth = `text-sm px-3 py-3 text-gray-700 border-gray-300 border rounded-md focus:outline-none`;
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
  defaultValue: any;
  /**
   * universal configuration options of the input
   */
  config?: { [key: string]: any };
  /**
   * type of the value of the input
   */
  value: any;
  /**
   * extra possible field specific settings of the input
   */
  extra?: any;
  /**
   *
   */
  component?: any;
}

export type Plugin<TInput extends AnyInput, TPlugins extends PluginsProp> = {
  component: PluginComponent<TInput, TPlugins>;
  config: TInput["config"];
};

export type PluginComponent<
  TInput extends AnyInput,
  TPlugins extends PluginsProp //can be thrown away?
> = (props: PluginInputProps<TInput>) => JSX.Element;

export type PluginsProp = {
  [key: string]: <TInput extends AnyInput, TPlugins extends PluginsProp>() => {
    component: PluginComponent<TInput, TPlugins>;
    config: TInput["config"];
    type: TInput;
  };
};

type Plugins<TInputs> = { [key in keyof TInputs]: Plugin<any, any> };

export type DataFormConfig<TInputs> = {
  submitButtonText?: string;
  title?: string;
  backButton?: () => void;
  plugins?: Plugins<TInputs>; //<TValues>;
  onError?: (message: string) => void;
  renderSubmitComponent?: (props: {
    onSubmit: () => void;
    loading: boolean;
    available: boolean;
  }) => JSX.Element;
  stickySubmit?: boolean;
};

/**
 * the possible states, like { password: string, text: string }
 */
export type PossibleValues<TInputs extends AnyInputs<TInputs[keyof TInputs]>> =
  {
    [K in keyof TInputs]: TInputs[K]["value"];
  };

export type PossibleState = {
  [key: string]: any;
};
/**
 * how do i get this?
 
{
  [K in Fields["field"]]: TInputs[Field["type"]]["value"]
}

 */

export type DataFormProps<TInputs extends AnyInputs<any>> = {
  fields: Array<<T extends keyof TInputs>() => Field<TInputs, T>>;
  defaultValues?: Partial<PossibleValues<TInputs>>;
  onSubmit: (
    values: Partial<PossibleValues<TInputs>>,
    resolve: (message: string) => void,
    reject: (props: { field: string; message: string }) => void
  ) => void;
} & DataFormConfig<TInputs>;

const Input = <
  TInputs extends AnyInputs<any>,
  T extends keyof TInputs,
  TPlugins extends PluginsProp
>({
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
  field,
  reference,
  description,
  config,
}: {
  plugin: PluginComponent<TInputs[T], TPlugins>;
  type: TInputs[T]["type"];
  config: TInputs[T]["config"];
  extra: TInputs[T]["extra"];
  field: string;
  next: any;
  title?: string;
  onChange: (newValue: TInputs[T]["value"]) => void;
  value: TInputs[T]["value"];
  error?: string;
  isLast: boolean;
  startSection?: boolean;
  sectionTitle?: string;
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
        {title ? (
          <label className="block mb-2 text-sm font-bold">{title}</label>
        ) : null}
        {description && (
          <div className={`flex mx-3 mb-2 items-start `}>
            <p className={`text-gray-500 italic ml-4`}>{description}</p>
          </div>
        )}
        {error ? (
          <p className={`mr-3 mb-2 text-red-500`}>{error || "Invalid value"}</p>
        ) : null}

        <InputComponent
          // assuming field is unique here
          id={field}
          config={config}
          extra={extra}
          hasError={error !== undefined}
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
};

const DataForm = <TInputs extends AnyInputs<any>>({
  fields,
  defaultValues,
  onSubmit,
  submitButtonText,
  title,
  backButton,
  plugins: maybePlugins,
  renderSubmitComponent,
  stickySubmit,
}: DataFormProps<TInputs>) => {
  const plugins: Plugins<TInputs> = maybePlugins!; //we always have plugins.

  const [fieldsWithReferences, setFieldsWithReferences] = useState<
    ExtendedField<TInputs, string>[]
  >([]);

  useEffect(() => {
    setFieldsWithReferences(
      fields.map((field) => {
        return { ...field(), reference: createRef<HTMLDivElement>() };
      })
    );
  }, [fields]);

  const [state, setState] = useState<Partial<PossibleValues<TInputs>>>(
    defaultValues || {}
  );

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [success, setSuccess] = useState<string | undefined>();

  const notReadyField = fieldsWithReferences.find((x) =>
    x.hasError?.(state[x.field], state)
  );

  const setError = ({ field, message }: { field: string; message: string }) => {
    if (field && message) {
      setErrors({ ...errors, [field]: message });

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

  const onClickSubmit = () => {
    const errorArray = fields
      .map((field) => {
        const hasError = field().hasError?.(state[field().field], state);

        if (hasError) {
          //continue
          return { [field().field]: hasError };
        } else {
          return null;
        }
      })
      .filter(notEmpty);
    const errors = errorArray.reduce(mergeObjectsArray, {});

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      //no errors
      setLoading(true);
      onSubmit(
        state,
        (message) => {
          setSuccess(message);
          setLoading(false);
        },
        (props) => {
          setError(props);
          setLoading(false);
        }
      );
    } else {
      //scroll to the error
      /// onError("Please fill in all fields correctly");

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

  const available = !loading && !notReadyField;

  return (
    <>
      <div className="w-full mx-auto mt-2">
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

        {success ? <p>{success}</p> : null}

        {fieldsWithReferences.map((field, index) => {
          const plugin = field.type
            ? plugins[field.type]
            : plugins[Object.keys(plugins)[0]]; //take the first plugin if the plugin isn't defined.

          if (!plugin) {
            return <p>Cant find plugin {field.field}</p>;
          }
          const next = fields[index + 1]();

          const onChange = (newValue: any) => {
            const newState = { [field.field]: newValue };

            if (errors[field.field] && !field.hasError?.(newValue, state)) {
              const newErrors = errors;
              delete newErrors[field.field];
              setErrors(newErrors);
            }

            setState({ ...state, ...newState });
          };
          return field.shouldHide?.(state) ? null : (
            <Input
              config={plugin.config}
              plugin={plugin.component}
              extra={field.extra}
              reference={field.reference}
              field={field.field}
              next={next}
              key={`field-${field.field}`}
              type={field.type!}
              title={
                field.titleFromState ? field.titleFromState(state) : field.title
              }
              value={state[field.field]}
              error={errors[field.field]}
              onChange={onChange}
              isLast={index === fields.length - 1}
              startSection={field.startSection}
              sectionTitle={field.sectionTitle}
              description={field.description}
            />
          );
        })}
      </div>
      <div className={`${stickySubmit ? "sticky bottom-0" : ""} mb-2 py-2`}>
        {renderSubmitComponent ? (
          renderSubmitComponent({
            onSubmit: onClickSubmit,
            loading,
            available,
          })
        ) : (
          <button
            disabled={loading}
            className={`${
              available ? "bg-orange" : "bg-gray-300"
            }  inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
            onClick={onClickSubmit}
          >
            {loading ? (
              <Div className="mr-2">
                <ActivityIndicator />
              </Div>
            ) : null}
            {submitButtonText || "Save"}
          </button>
        )}
      </div>
    </>
  );
};
export type AnyInputs<TInputs> = { [key: string]: AnyInput };

export const setConfig = <TInputs extends AnyInputs<TInputs>>(
  DataForm: (props: DataFormProps<TInputs>) => JSX.Element,
  config: DataFormConfig<TInputs>
) => {
  return (props: DataFormProps<TInputs>) => <DataForm {...config} {...props} />;
};

export default DataForm;
