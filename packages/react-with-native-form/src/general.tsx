import { useState, RefObject, createRef, useEffect } from "react";
import {
  ActivityIndicator,
  Div,
  Label,
  Strong,
  Form,
  P,
  H2,
  Button,
} from "react-with-native";
import { inputClass, bareInputClass } from "react-with-native-ui";
import deepEqual from "fast-deep-equal/react";

const inputClassWithoutWidth = bareInputClass;
export { deepEqual };
// TODO: to be removed
export { inputClassWithoutWidth, inputClass };

const isWeb = typeof window !== "undefined" && !!window.scrollTo;

const sameFieldArray = <
  T extends Field<TInputs, Keys<TInputs>>[],
  TInputs extends any
>(
  arr1: T,
  arr2: T
) => {
  const simpleArr1 = arr1.map(
    ({ shouldHide, titleFromState, hasError, ...item }) => item
  );
  const simpleArr2 = arr2.map(
    ({ shouldHide, titleFromState, hasError, ...item }) => item
  );

  const isDeepEqual = deepEqual(simpleArr1, simpleArr2);
  // console.log({ simpleArr1, simpleArr2, isDeepEqual });
  return isDeepEqual;
};

export function notEmpty<TValue>(
  value: TValue | null | undefined
): value is TValue {
  return value !== null && value !== undefined;
}

export const makeInputField = <TInputs, T extends Keys<TInputs>>(
  type: T,
  config: Omit<Field<TInputs, T>, "type">
) => {
  return () => ({ type, ...config });
};

const GLOBAL_PROPERTY_PATH = "__GLOBAL__";
/**
 * type of every specific field in a form
 */
export type Field<TInputs, T extends Keys<TInputs> = Keys<TInputs>> = {
  /**
   * type of the field (any plugin type), defaults to first plugin
   */
  type?: Keys<TInputs>;
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
    value: TInputs[T] extends PluginInputType ? TInputs[T]["value"] : any,
    state: Partial<PossibleState>
  ) => boolean | string | Error[]; //

  startSection?: boolean;
  sectionTitle?: string;
  description?: string;
  /**
   * initalValue (can be declared here or on Form defaultValues prop). This has priority
   */
  initialValue?: TInputs[T] extends PluginInputType ? TInputs[T]["value"] : any;
  /**
   * any extra properties that can be given to a specific input
   */
  extra?: TInputs[T] extends PluginInputType ? TInputs[T]["extra"] : any;
};

export type Keys<TObject> = Extract<keyof TObject, string>;

export interface ExtendedField<TInputs, T extends Keys<TInputs>>
  extends Field<TInputs, T> {
  /**
   * this is added to any field
   */
  reference?: RefObject<HTMLDivElement>;
}

export type SubmitProps = {
  onSubmit: () => void;
  loading: boolean;
  available: boolean;
  submitButtonText?: string;
  submitButtonColor?: string;
  state?: any;
};

export type DefaultConfig = {
  extraClassName?: string;
  replaceClassName?: string;
};

type RejectValue = string | Error[];
export type Error = {
  message: string | true;
  propertyPath: string;
};

export interface PluginInputType {
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

export type Plugin<TInput extends PluginInputType> = {
  component: PluginComponent<TInput>;
  config?: TInput["config"];
};

export type OnChange<TInput extends PluginInputType> = (
  value: TInput["value"]
) => void;

//NB: why are the prop comments not shown in intellisense?
export type PluginComponent<TInput extends PluginInputType> = ((props: {
  onChange: OnChange<TInput>;
  /**
   * value is never undefined, unless you didn't declare defaultInitialValue
   */
  value: TInput["value"];
  extra: TInput["extra"];
  config: TInput["config"];
  /**
   * Format: {randomId}.{fieldName}
   */
  uniqueFieldId: string;
  fieldName: string;

  /**
   * if there are multiple errors for this single field (from the backend), they can be given here. Key is in format `{fieldName}.{subfieldName}`, value should be the string containing the error
   */
  errors?: Error[];
  errorClassName?: string;
}) => JSX.Element) & {
  defaultInitialValue: TInput["value"];
  hideContainerError?: boolean;
};

type Plugins<TInputs> = { [key in keyof TInputs]: Plugin<any> };
export type RenderInputContainerType =
  | undefined
  | ((props: InputContainerProps) => JSX.Element);

export type InputContainerProps = {
  children: any;
  description?: string;
  sectionTitle?: string;
  startSection?: boolean;
  title?: string;
  next?: any;
  isLast?: boolean;
  error?: string | boolean;
  extra?: PluginInputType["extra"];
  config?: PluginInputType["config"];
  errorClassName?: string;
};

export type DataFormConfig<TInputs> = {
  submitButtonText?: string;
  submitButtonColor?: string;
  title?: string;
  backButton?: () => void;
  plugins?: Plugins<TInputs>; //<TValues>;
  onError?: (message: string) => void;
  renderSubmitComponent?: (props: {
    onSubmit: () => void;
    loading: boolean;
    available: boolean;
    submitButtonText?: string;
    submitButtonColor?: string;
  }) => JSX.Element;
  renderInputContainer?: RenderInputContainerType;
  renderTitle?: (props: {
    title?: string;
    backButton?: () => void;
  }) => JSX.Element;
  stickySubmit?: boolean;
  submitClassName?: string;
  errorClassName?: string;
  successClassName?: string;
};

/**
 * the possible states, like { password: string, text: string }
 */
export type PossibleValues<TInputs> = {
  [K in keyof TInputs]: TInputs[K] extends PluginInputType
    ? TInputs[K]["value"]
    : never;
};

export type PossibleState = {
  [key: string]: any;
};

export type ResolveType = (message: string) => void;

export type RejectType = (stringOrErrorArray: RejectValue) => void;
export type DataFormProps<TInputs, TState extends { [key: string]: any }> = {
  /**
   * array of fields created with makeField
   */
  fields: Array<<T extends Keys<TInputs>>() => Field<TInputs, T>>;
  /**
   * optionally, you can pass partial default values here.
   */
  initialValues?: Partial<TState>;
  /**
   * DEPRECATED, you can pass partial default values here. Please use initialValues
   */
  defaultValues?: Partial<TState>;
  /**
   * callback that's called when submit button has been pressed
   */
  onSubmit: (values: TState, resolve: ResolveType, reject: RejectType) => void;
  /**
   * optionally, you can use the onClickSubmit externally
   */
  withSubmitProps?: (props: SubmitProps) => void;
  /**
   * if true no submit button will be rendered. handy in combination with withSubmitProps
   */
  noSubmit?: boolean;
} & DataFormConfig<TInputs>;

export const DefaultInputContainer = ({
  children,
  startSection,
  sectionTitle,
  title,
  description,
  error,
  errorClassName,
}: InputContainerProps) => (
  <Div>
    {startSection ? (
      <Div
        style={{
          display: "flex",
          height: 40,
          justifyContent: "center",
          paddingLeft: 10,
        }}
      >
        {sectionTitle ? (
          <P>
            <Strong>{sectionTitle}</Strong>
          </P>
        ) : (
          <Div style={{ height: 40 }} />
        )}
      </Div>
    ) : null}

    {/* This is the section title */}
    <Div className="pt-0 mb-6" style={{ marginBottom: 10 }}>
      {title ? <Label className="mb-2 text-sm font-bold">{title}</Label> : null}
      {description && (
        <Div className={`flex mx-3 mb-2 items-start `}>
          <P className={`text-gray-500 italic`}>{description}</P>
        </Div>
      )}
      {error ? (
        <P className={errorClassName || `mr-3 mb-2 text-red-500`}>
          {error || "Invalid value"}
        </P>
      ) : null}

      <Div>{children}</Div>
    </Div>
  </Div>
);

const getPlugin = <TInputs extends AllPluginInputTypes>(
  type: string | undefined,
  plugins: Plugins<TInputs>
) => {
  return type
    ? plugins[type]
    : plugins[Object.keys(plugins)[0] as keyof Plugins<TInputs>];
};
export const Input = <
  TInputs extends AllPluginInputTypes,
  T extends keyof TInputs
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
  errors,
  reference,
  description,
  config,
  uniqueFieldId,
  renderInputContainer,
  errorClassName,
  fieldName,
}: {
  plugin: PluginComponent<TInputs[T]>;
  type: string;
  fieldName: string;
  config: TInputs[T]["config"];
  extra: TInputs[T]["extra"];
  next: any;
  title?: string;
  onChange: OnChange<TInputs[T]>;
  value: TInputs[T]["value"];
  errors?: Error[];
  isLast: boolean;
  startSection?: boolean;
  sectionTitle?: string;
  reference?: RefObject<HTMLDivElement>;
  description?: string;
  /**
   * format: {uniqueGeneratedNumber}.{fieldName}
   */
  uniqueFieldId: string;
  renderInputContainer?: RenderInputContainerType;
  errorClassName?: string;
}) => {
  const InputComponent = plugin;
  const InputContainer = renderInputContainer || DefaultInputContainer;
  return (
    <Div ref={reference}>
      <InputContainer
        {...{
          description,
          sectionTitle,
          startSection,
          title,
          next,
          isLast,
          id: uniqueFieldId,
          type,
          error:
            !plugin.hideContainerError &&
            errors?.find(errorOnField(fieldName))?.message,
          extra,
          config,
          errorClassName,
        }}
      >
        <InputComponent
          {...{
            uniqueFieldId,
            fieldName,
            config,
            extra,
            onChange,
            value,
            errors,
            errorClassName,
          }}
        />
      </InputContainer>
    </Div>
  );
};

const DefaultTitle = ({
  title,
  backButton,
}: {
  title?: string;
  backButton?: () => void;
}) => {
  return title ? (
    <Div className="flex items-center mb-10 ">
      {backButton && (
        <Div onClick={backButton} className={`p-4 cursor-pointer`}>
          back
        </Div>
      )}
      <H2 className="text-2xl font-bold">{title}</H2>
    </Div>
  ) : null;
};

export function isObject(object: any): object is object {
  return object != null && typeof object === "object";
}

export const errorOnField = (fieldName: string) => (error: Error) =>
  error.propertyPath === fieldName ||
  error.propertyPath.startsWith(fieldName + ".");

export const DataForm = <TInputs, TState extends { [key: string]: any }>({
  fields,
  defaultValues,
  initialValues,
  onSubmit,
  withSubmitProps,
  noSubmit,
  submitButtonText,
  submitButtonColor,
  title,
  backButton,
  plugins,
  renderSubmitComponent,
  renderInputContainer,
  stickySubmit,
  renderTitle,
  submitClassName,
  errorClassName,
  successClassName,
}: DataFormProps<TInputs, TState>) => {
  //sometimes use defaultValues (deprecated)

  initialValues = initialValues ? initialValues : defaultValues;
  if (!plugins) {
    throw new Error("No plugins given");
  }
  //Generate unique id for the form
  const [id] = useState(`Form${String(Math.round(Math.random() * 1000000))}`);

  const [fieldsWithReferences, setFieldsWithReferences] = useState<
    ExtendedField<TInputs, Keys<TInputs>>[]
  >([]);

  // need to have because we want to see when it's changed
  const [fieldsWithoutReferences, setFieldsWithoutReferences] = useState<
    Field<TInputs, Keys<TInputs>>[]
  >([]);

  useEffect(() => {
    const fieldsWithoutReferencesLocal = fields.map((f) => f());

    if (
      // fieldsWithoutReferences.length === 0 && //NB: why was this here? caused the fields not to refresh
      !sameFieldArray<Field<TInputs, Keys<TInputs>>[], TInputs>(
        fieldsWithoutReferencesLocal,
        fieldsWithoutReferences
      )
    ) {
      setFieldsWithReferences(
        fieldsWithoutReferencesLocal.map((fieldWithoutReference) => {
          return {
            ...fieldWithoutReference,
            reference: createRef<HTMLDivElement>(),
          };
        })
      );
      setFieldsWithoutReferences(fieldsWithoutReferencesLocal);
    }
  }, [fields]);

  const initialValuesPartial: TState = fields.reduce((all, field) => {
    const type = field().type!;
    const plugin = getPlugin(type, plugins);
    const defaultInital = plugin.component.defaultInitialValue;
    const initial = field().initialValue;
    const key = field().field;
    const value =
      initial !== undefined
        ? initial
        : defaultInital !== undefined
        ? defaultInital
        : undefined;

    return {
      ...all,
      [key]: value,
    };
  }, {}) as TState;

  const initialState = { ...initialValuesPartial, ...initialValues };

  const [state, setState] = useState<TState>(initialState);

  //used to check if the initialValues have changed
  const [initialValuesState, setInitialValuesState] = useState<
    TState | undefined
  >();

  useEffect(() => {
    if (!initialValuesState || !deepEqual(initialState, initialValuesState)) {
      // console.log("initialValues have changed");
      setState(initialState);
      setInitialValuesState(initialState);
    }
  }, [initialState]);

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState<Error[]>([]);
  const [success, setSuccess] = useState<string | undefined>();

  const notReadyFields = fieldsWithReferences.filter(
    (x) => !x.shouldHide?.(state) && x.hasError?.(state[x.field], state)
  );

  const setErrorsReject: RejectType = (stringOrErrorArray) => {
    if (stringOrErrorArray) {
      //if the rejection provides a string, just return an array with 1 element: that string, on the global property path
      //however, if it's an error array, return that. But make sure that if the propertyPath doesn't exist, it's still rendered globally.
      const newErrors: Error[] =
        typeof stringOrErrorArray === "string"
          ? [
              {
                propertyPath: GLOBAL_PROPERTY_PATH,
                message: stringOrErrorArray,
              },
            ]
          : stringOrErrorArray.map(({ propertyPath, message }) => ({
              message,
              propertyPath: fields
                .map((f) => f().field)
                .find(
                  (x) => propertyPath === x || propertyPath.startsWith(`${x}.`)
                )
                ? propertyPath
                : GLOBAL_PROPERTY_PATH,
            }));

      //this only happens when there are no frontend errors, so it's safe to replace errors
      setErrors(newErrors);

      //scroll to the first field that contains an error
      const firstNotReadyField = fieldsWithReferences.filter(
        (x) => newErrors.find(errorOnField(x.field)) !== undefined
      )[0];

      if (isWeb) {
        const top =
          (firstNotReadyField?.reference?.current?.getBoundingClientRect?.()
            .top || 0) +
          (window.scrollY || 0) -
          100;

        // console.log("setErrorsReject: scrolling to first error field");

        window.scrollTo?.({
          top,
          behavior: "smooth",
        });
      }
    }
  };

  const firstErrorRef = notReadyFields[0]?.reference?.current;

  function onClickSubmit(state: TState) {
    const frontendErrorArray = fields.reduce((all, field) => {
      const shouldNotHide = !field().shouldHide?.(state);
      const errorMessage = field().hasError?.(state[field().field], state);
      const hasError = shouldNotHide && errorMessage;

      const errors =
        typeof hasError === "string"
          ? [{ propertyPath: field().field, message: hasError }]
          : Array.isArray(hasError)
          ? hasError
          : [];

      return [...all, ...errors];
    }, [] as Error[]);

    setErrors(frontendErrorArray);
    //
    if (frontendErrorArray?.length === 0) {
      //no errors

      setLoading(true);
      onSubmit(
        state,
        (successMessage) => {
          setSuccess(successMessage);
          setLoading(false);
        },
        (stringOrErrorArray) => {
          setErrorsReject(stringOrErrorArray);
          setLoading(false);
        }
      );
    } else {
      //scroll to the error
      /// onError("Please fill in all fields correctly");

      if (isWeb) {
        const top =
          (firstErrorRef?.getBoundingClientRect().top || 0) +
          window.scrollY -
          100;
        // console.log("onClickSubmit: scrolling to first error field");

        window.scrollTo?.({
          top,
          behavior: "smooth",
        });
      }
    }
  }

  const available = !loading && notReadyFields.length === 0;

  const submitProps: SubmitProps = {
    loading,
    available,
    submitButtonText,
    submitButtonColor,
    //should be overwritten on state change
    onSubmit: () => onClickSubmit(state),
    state,
  };

  useEffect(() => {
    //console.log({ withSubmitProps: submitProps });
    withSubmitProps?.(submitProps);
  }, [loading, available, submitButtonText, submitButtonColor, firstErrorRef]);

  const Title = renderTitle || DefaultTitle;

  const Submit = () =>
    noSubmit ? null : renderSubmitComponent ? (
      renderSubmitComponent(submitProps)
    ) : (
      <Button
        disabled={loading}
        className={`${
          available
            ? `${submitButtonColor ? submitButtonColor : "bg-green-500"}`
            : "bg-gray-300"
        }  flex justify-center flex-row w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
        onClick={() => onClickSubmit(state)}
        //......Extra
        style={{
          backgroundColor: "#4ade80",
          color: "white",
          width: "100%",
          marginTop: 5,
          marginBottom: 5,
          display: "flex",
          justifyContent: "center",
          borderRadius: 10,
          alignItems: "center",
          borderColor: "white",
          padding: 8,
        }}
      >
        {loading ? (
          <Div className="mr-2">
            <ActivityIndicator />
          </Div>
        ) : null}
        <Label style={{ color: "white", fontWeight: "bold" }}>
          {submitButtonText || "Save"}
        </Label>
      </Button>
    );
  const globalError = errors?.find(
    (x) => x.propertyPath === GLOBAL_PROPERTY_PATH
  );
  return (
    <Form
      className="w-full"
      onSubmit={(e) => {
        e.preventDefault();
        onClickSubmit(state);
      }}
    >
      <Div className="w-full">
        <Title title={title} backButton={backButton} />

        {success ? <P className={successClassName}>{success}</P> : null}
        {globalError ? (
          <P className={errorClassName || "text-red-600"}>
            {globalError.message}
          </P>
        ) : null}

        {fieldsWithReferences.map((field, index) => {
          // Take the first plugin if the plugin isn't defined.
          const plugin = getPlugin(field.type, plugins);

          if (!plugin) {
            return (
              <P>
                Plugin not found ({field.field}, {field.type})
              </P>
            );
          }

          const next = fields[index + 1]?.();

          const onChange = (state: TState) => (newValue: any) => {

            const newState = { [field.field]: newValue };
            const newFullState = { ...state, ...newState };
            const fieldErrors = errors.filter(errorOnField(field.field));

            //check if field still has error(s)
            const newFieldErrors = field.hasError?.(newValue, newFullState);
            const newFieldErrorsAmount =
              typeof newFieldErrors === "string"
                ? 1
                : Array.isArray(newFieldErrors)
                ? newFieldErrors.length
                : 0;
            if (
              fieldErrors.length > 0 &&
              newFieldErrorsAmount !== fieldErrors.length
            ) {
              const newErrors = errors.filter(
                (error) => !errorOnField(field.field)(error)
              );
              const newFieldErrorsArray: Error[] =
                typeof newFieldErrors === "string"
                  ? [{ message: newFieldErrors, propertyPath: field.field }]
                  : Array.isArray(newFieldErrors)
                  ? newFieldErrors
                  : [];

              setErrors([...newErrors, ...newFieldErrorsArray]);
            }

            setState(newFullState);
            //NB: make sure to add the new state to the submitprops
            withSubmitProps?.({
              ...submitProps,
              state: newFullState,
              onSubmit: () => onClickSubmit(newFullState),
            });
          };

          const uniqueFieldId = `${id || ""}.${field.field}`;

          const inputErrors = errors.filter(
            (e) =>
              e.propertyPath === field.field ||
              e.propertyPath.startsWith(`${field.field}.`)
          );

          return field.shouldHide?.(state) ? null : (
            <Input
              fieldName={field.field}
              renderInputContainer={renderInputContainer}
              uniqueFieldId={uniqueFieldId}
              config={plugin.config}
              plugin={plugin.component}
              extra={field.extra}
              reference={field.reference}
              next={next}
              key={`field-${field.field}`}
              type={field.type!}
              title={
                field.titleFromState ? field.titleFromState(state) : field.title
              }
              value={state[field.field]}
              onChange={onChange(state)}
              isLast={index === fields?.length - 1}
              startSection={field.startSection}
              sectionTitle={field.sectionTitle}
              description={field.description}
              errors={inputErrors}
            />
          );
        })}
      </Div>
      {Submit ? (
        <Div
          className={`${stickySubmit ? "sticky bottom-0" : ""} ${
            submitClassName || "mb-2 py-2"
          }`}
        >
          <Submit />
        </Div>
      ) : null}
    </Form>
  );
};

export type AllPluginInputTypes = { [key: string]: PluginInputType };

export const setConfig = <TInputs, TState>(
  DataForm: (props: DataFormProps<TInputs, TState>) => JSX.Element,
  config: DataFormConfig<TInputs>
) => {
  return (props: DataFormProps<TInputs, TState>) => {
    return <DataForm {...config} {...props} />;
  };
};
