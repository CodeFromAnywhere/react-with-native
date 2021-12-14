import * as React from "react";
import { useState, useRef, RefObject, createRef, useEffect } from "react";
import { Descendant } from "slate";
import { RichTextArea, Button } from "react-with-native";
import MapInput from "./MapInput";
import DatePicker from "./DatePickerInput";
import ReactStars from "react-stars";
import { toast } from "react-toastify";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsChevronLeft } from "react-icons/bs";
import { shimmer, postMultipart, toBase64 } from "./Util";

export { shimmer, postMultipart, toBase64 };
export interface Birthday {
  date: number;
  month: number;
}

export type Categories = string[];

export type Option = {
  label: string;
  value: string | number;
};

export type MapLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export interface Field<T extends InputType> {
  type?: InputType;
  field: string;
  title?: string;
  shouldHide?: (state: unknown) => boolean;
  titleFromState?: (state: unknown) => string;
  isValid?: (value: InputValue<T>) => boolean;
  errorMessage?: string;
  placeholder?: string;
  startSection?: boolean;
  sectionTitle?: string;
  description?: string;
  /**
   * any extra properties that can be given to a specific input
   */
  extra?: InputExtra<T>;
  reference?: RefObject<HTMLDivElement>;
}

export const inputClassWithoutWidth = `text-sm px-3 py-3 text-gray-700 border-gray-300 border-[0.5px] rounded-md focus:outline-none`;
export const inputClass = `w-full ${inputClassWithoutWidth}`;
export type DefaultConfig = {
  extraClassName?: string;
  replaceClassName?: string;
};

export type TextConfig = DefaultConfig & { hoi: string };
export type StarsConfig = DefaultConfig & {};
export type SelectOneConfig = DefaultConfig & {};
export type PasswordConfig = DefaultConfig & {};
export type DateConfig = DefaultConfig & {};
export type MapConfig = DefaultConfig & { mapboxKey: string };
export type SelectMultipleConfig = DefaultConfig & {};
export type RteConfig = DefaultConfig & {};
export type BooleanConfig = DefaultConfig & {};
export type TextAreaConfig = DefaultConfig & {};
export type NumberConfig = DefaultConfig & {};
export type PhoneConfig = DefaultConfig & {};

export type Inputs = {
  text: { config: TextConfig; value: string; extra: { maxLength?: number } };
  stars: { config: StarsConfig; value: number; extra: { half?: boolean } };
  selectOne: {
    config: SelectOneConfig;
    value: Option;
    extra: { options: Option[] };
  };
  password: { config: PasswordConfig; value: string; extra: undefined };
  date: { config: DateConfig; value: Date; extra: undefined };
  map: {
    config: MapConfig;
    value: MapLocation;
    extra: { showMarker: boolean; showZoom: boolean };
  };
  selectMultiple: {
    config: SelectMultipleConfig;
    value: Option[];
    extra: { options: Option[] };
  };
  rte: {
    config: RteConfig;
    value: Descendant[];
    extra: { maxLength?: number };
  };
  boolean: { config: BooleanConfig; value: boolean; extra: undefined };
  textArea: {
    config: TextAreaConfig;
    value: boolean;
    extra: { maxLength?: number };
  };
  number: { config: NumberConfig; value: boolean; extra: undefined };
  phone: { config: PhoneConfig; value: string; extra: undefined };
};

export type InputFormat<TValue, TExtra> = {
  config: DefaultConfig & { [key: string]: any };
  value: TValue;
  extra: TExtra;
};
export type InputType = keyof Inputs;
export type InputConfig<T extends InputType> = Inputs[T]["config"];
export type InputExtra<T extends InputType> = Inputs[T]["extra"];
export type InputValue<T extends InputType> = Inputs[T]["value"];

export type DataFormConfig = {
  saveButtonText?: string;
  title?: string;
  response?: { response: string; success: boolean; field?: string } | null;
  backButton?: () => void;
  plugins: Plugins;
  config: { [key in InputType]: InputConfig<key> };
};

export type Values<T extends InputType> = { [key in InputType]: InputValue<T> };

export type DataFormProps = {
  fields: Field<any>[];
  defaultValues: Values<any>;
  onSubmit: (values: Values<any>) => void;
} & DataFormConfig;

export type Plugin<TValue> = ({
  onChange,
  value,
}: {
  onChange: (value: TValue) => void;
  value: TValue;
}) => JSX.Element;

export type Plugins = {
  [key: string]: Plugin<any>;
};

const Input = <T extends InputType>({
  type,
  title,
  onChange,
  value,
  isLast,
  startSection,
  sectionTitle,
  next,
  placeholder,
  extra,
  error,
  errorMessage,
  field,
  reference,
  description,
  plugins,
  config,
}: {
  field: string;
  next: Field<any>;
  type: T;
  title: string;
  placeholder?: string;
  onChange: (newValue: InputValue<T>) => void;
  value: InputValue<T>;
  error?: boolean;
  isLast: boolean;
  startSection?: boolean;
  sectionTitle?: string;
  extra?: InputExtra<T>;
  errorMessage?: string;
  reference?: RefObject<HTMLDivElement>;
  description?: string;
  plugins: Plugins;
  config: InputConfig<T>;
}) => {
  const inputClassWithError = `${inputClass}${
    error ? " border border-red-400" : ""
  }`;
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
            <AiOutlineInfoCircle size={28} />
            <p className={`text-gray-500 italic ml-4`}>{description}</p>
          </div>
        )}
        {error ? (
          <p className={`mx-3 mb-2 text-red-500`}>
            {errorMessage || "Invalid value"}
          </p>
        ) : null}

        <>
          {{
            text: function textInput() {
              const realExtra = extra as Inputs["text"]["extra"];

              return (
                <input
                  className={inputClassWithError}
                  value={value as string}
                  onChange={(event) => onChange(event.target.value)}
                  placeholder={placeholder}
                  maxLength={realExtra?.maxLength}
                />
              );
            },

            stars: function starsInput() {
              return (
                <ReactStars
                  className={`m-3`}
                  count={5}
                  value={value as number}
                  onChange={onChange}
                  half={false}
                  size={24}
                  color2={"#ffd700"}
                />
              );
            },

            selectOne: function selectOneInput() {
              const realExtra = extra as Inputs["selectOne"]["extra"];

              return (
                <select
                  className={inputClassWithError}
                  value={value as string}
                  onChange={(event) => {
                    onChange(event.target.value);
                  }}
                >
                  <option value={undefined}></option>
                  {realExtra?.options.map(
                    (option: { label: string; value: any }, index: number) => {
                      return (
                        <option key={`option${index}`} value={option.value}>
                          {option.label}
                        </option>
                      );
                    }
                  )}
                </select>
              );
            },

            password: function passwordInput() {
              return (
                <input
                  className={inputClassWithError}
                  value={value as string}
                  onChange={(event) => onChange(event.target.value)}
                  placeholder={placeholder}
                  type="password"
                />
              );
            },

            date: () => {
              return (
                <DatePicker
                  value={value as Inputs["date"]["value"]}
                  onChange={onChange}
                />
              );
            },

            map: () => (
              <MapInput
                onChange={onChange}
                value={value as Inputs["map"]["value"]}
                extra={extra as Inputs["map"]["extra"]}
                config={config as Inputs["map"]["config"]}
              />
            ),

            rte: function rteInput() {
              const initialValue: Descendant[] = [
                {
                  type: "paragraph",
                  children: [{ text: "" }],
                },
              ];
              return (
                <RichTextArea
                  value={(value as Descendant[]) || initialValue}
                  onChange={(v) => onChange(v)}
                />
              );
            },
            // This is for the Amenities or Passion
            selectMultiple: function selectMultipleInput() {
              const realExtra = extra as Inputs["selectMultiple"]["extra"];
              const realValue = value as Inputs["selectMultiple"]["value"];

              return (
                <div className="flex flex-col px-2 py-1 text-sm bg-white border rounded-lg">
                  {realExtra?.options?.map((option: Option) => {
                    return (
                      <div key={`option${option.value}`}>
                        <input
                          type="checkbox"
                          checked={!!realValue?.find((x) => x === option)}
                          onChange={() => {
                            if (!realValue?.find((x) => x === option)) {
                              const newValue = realValue?.length
                                ? [...realValue, option.value]
                                : [option.value];

                              // console.log("add checked", newValue);
                              onChange(newValue as any);
                            } else {
                              const newValue = realValue.filter(
                                (x) => x !== option
                              );

                              ///console.log("uncheck", newValue);
                              onChange(newValue);
                            }
                          }}
                        />{" "}
                        {option.label}
                      </div>
                    );
                  })}
                </div>
              );
            },
            //This is for the single checkbox
            boolean: function selectBoolean() {
              const booleanValue = !!value as boolean;
              return (
                <div className="border bg-white px-1 py-[10px] rounded-lg border-gray-300 text-sm">
                  <input
                    type="checkbox"
                    checked={booleanValue}
                    onChange={() => {
                      onChange(!booleanValue);
                    }}
                  />{" "}
                  {title}
                </div>
              );
            },

            textArea: function textAreaInput() {
              return (
                <textarea
                  className={`${inputClassWithError} h-20`}
                  value={value as string}
                  onChange={(event) => onChange(event.target.value)}
                  placeholder={placeholder}
                />
              );
            },
            number: function numberInput() {
              return (
                <input
                  className={inputClassWithError}
                  value={value?.toString()}
                  onChange={(event) =>
                    onChange(
                      event.target.value ? Number(event.target.value) : null
                    )
                  }
                  placeholder={placeholder}
                />
              );
            },

            phone: function phoneInput() {
              return (
                <input
                  className={inputClassWithError}
                  value={value as string}
                  onChange={(event) => onChange(event.target.value)}
                  placeholder={placeholder}
                />
              );
            },

            ...plugins,
          }[type]()}
        </>
      </div>
    </div>
  );
};

const DataForm = ({
  fields,
  defaultValues,
  onSubmit,
  saveButtonText,
  title,
  response,
  backButton,
  plugins,
  config,
}: DataFormProps) => {
  const [fieldsWithReferences, setFieldsWithReferences] = useState<
    Field<any>[]
  >([]);

  useEffect(() => {
    if (response?.field) {
      setState({ ...state, [`${response?.field}Error`]: true });
      const notReadyField = fieldsWithReferences.find(
        (x) => x.field === response.field
      );
      const top =
        (notReadyField?.reference?.current?.getBoundingClientRect().top || 0) +
        window.scrollY -
        100;

      console.log("top", top);

      if (typeof window !== "undefined") {
        console.log("let's scroll");
        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }
    }
  }, [response?.field]);

  useEffect(() => {
    setFieldsWithReferences(
      fields.map((field) => {
        return { ...field, reference: createRef<HTMLDivElement>() };
      })
    );
  }, [fields]);

  const [state, setState] = useState<Values<InputType>>(defaultValues);

  const notReadyField = fieldsWithReferences.find(
    (x) => x.isValid && !x.isValid(state[x.field])
  );
  return (
    // outer div to whold all
    <>
      <div className="w-full mx-auto mt-2 mb-20 pr-28">
        {title && (
          <div className="flex items-center mb-10 ">
            {backButton && (
              <BsChevronLeft
                color="black"
                size={52}
                onClick={backButton}
                className={`p-4 cursor-pointer`}
              />
            )}
            <h3 className="text-2xl font-bold">{title}</h3>
          </div>
        )}

        {response ? (
          response.success ? (
            <p>{response.response}</p>
          ) : !response.success ? (
            !response.field ? (
              <p>{response.response}</p>
            ) : null
          ) : null
        ) : null}
        {fieldsWithReferences.map((field, index) => {
          const next = fields[index + 1];
          return field.shouldHide?.(state) ? null : (
            <Input
              config={config[field.type]}
              plugins={plugins}
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
              value={state?.[field.field]}
              error={state?.[`${field.field}Error`] as boolean | undefined}
              errorMessage={
                response?.field ? response?.response : field.errorMessage
              }
              onChange={(newValue) => {
                const newState = { [field.field]: newValue };

                if (state[`${field.field}Error`] && field.isValid?.(newValue)) {
                  newState[`${field.field}Error`] = false;
                }

                setState({ ...state, ...newState });
              }}
              isLast={index === fields.length - 1}
              startSection={field.startSection}
              sectionTitle={field.sectionTitle}
              placeholder={field.placeholder}
              extra={field.extra}
              description={field.description}
            />
          );
        })}
      </div>
      <div className={`sticky bottom-0 mb-2 py-2 bg-gray-50`}>
        <Button
          title={saveButtonText || "💾 Save"}
          extraClassName="px-10"
          onClick={() => {
            const errors = fields.map((field) => {
              if (!field.isValid || field.isValid?.(state[field.field])) {
                //continue
                return false;
              } else {
                return field.field;
              }
            });

            const newState = { ...state };
            errors.forEach((errorField) => {
              newState[`${errorField}Error`] = true;
            });

            setState(newState);

            if (!errors.find((x) => !!x)) {
              //no errors
              onSubmit(state);
            } else {
              toast.error("Please fill in all fields correctly");

              const top =
                (notReadyField?.reference?.current?.getBoundingClientRect()
                  .top || 0) +
                window.scrollY -
                100;

              console.log("Top", top);

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

export const setConfig = (
  DataForm: (props: DataFormProps) => JSX.Element,
  config: DataFormConfig
) => {
  return (props: DataFormProps) => <DataForm {...config} {...props} />;
};

export default DataForm;
