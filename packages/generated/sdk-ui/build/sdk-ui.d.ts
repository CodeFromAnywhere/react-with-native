/// <reference types="react" />
/// <reference types="react" />
/// <reference types="node" />
import { isObject } from "react-with-native-form";
import { notEmpty } from "react-with-native-form";
import { Modal } from "react-with-native-modal";
import { useNavigation } from "react-with-native-router";
import { useIsInViewport } from "react-with-native-table";
import { useReactMediaRecorder } from "asset-input";
import { BigButton } from "big-button";
import { useOnScreen } from "use-on-screen";
export declare const sdk: {
    A: ({ native, className, textClassName, ...props }: import("react-with-native").AType) => JSX.Element;
    ActivityIndicator: (props: import("react-with-native").ActivityIndicatorType) => JSX.Element;
    Button: ({ native, className, textClassName, ...props }: import("react-with-native").ButtonType) => JSX.Element;
    Form: ({ native, className, textClassName, ...props }: import("react-with-native").FormType) => JSX.Element;
    getTailwindModules: (options: {
        packages?: string[] | undefined;
        modules?: string[] | undefined;
        isWorkspace?: boolean | undefined;
    }) => string[];
    H2: ({ native, ...props }: import("react-with-native").H2Type) => JSX.Element;
    I: ({ native, ...props }: import("react-with-native").IType) => JSX.Element;
    Image: ({ native, ...props }: import("react-with-native").ImgType) => JSX.Element;
    Input: ({ native, ...props }: import("react-with-native").InputType) => JSX.Element;
    joinClassNames: (...args: (string | undefined)[]) => string;
    Label: ({ native, ...props }: import("react-with-native").LabelType) => JSX.Element;
    Li: ({ native, className, textClassName, ...props }: import("react-with-native").LiType) => JSX.Element;
    Ol: ({ native, className, textClassName, ...props }: import("react-with-native").OlType) => JSX.Element;
    P: ({ native, ...props }: import("react-with-native").PType) => JSX.Element;
    Pressable: ({ native, textClassName, className, ...props }: import("react-with-native").PressableType) => JSX.Element;
    Select: ({ native, options, customOptionSelector, ...props }: import("react-with-native").SelectType) => JSX.Element;
    Span: ({ native, className, textClassName, ...props }: import("react-with-native").SpanType) => JSX.Element;
    Strong: ({ native, ...props }: import("react-with-native").StrongType) => JSX.Element;
    Svg: ({ src, width, height, className, style }: import("react-with-native").SvgType) => JSX.Element;
    TextArea: ({ native, className, textClassName, ...props }: import("react-with-native").TextAreaType) => JSX.Element;
    Text: ({ native, ...props }: import("react-with-native").TextType) => JSX.Element;
    Toggle: ({ native, onChange, checked, ...props }: import("react-with-native").ToggleType) => JSX.Element;
    TouchableOpacity: ({ native, textClassName, className, ...props }: import("react-with-native").TouchableOpacityType) => JSX.Element;
    trimClassName: (className: string) => string;
    Ul: ({ native, className, textClassName, ...props }: import("react-with-native").UlType) => JSX.Element;
    wrapInTextIfNeeded: (children: any, textClassName?: string | undefined) => any;
    AlertProvider: ({ children }: {
        children: any;
    }) => JSX.Element;
    useAlert: () => import("react-with-native-alert").AlertFn | null;
    DataForm: <TInputs, TState extends {
        [key: string]: any;
    }>({ fields, defaultValues, initialValues, onSubmit, withSubmitProps, noSubmit, submitButtonText, submitButtonColor, title, backButton, plugins, renderSubmitComponent, renderInputContainer, stickySubmit, renderTitle, submitClassName, errorClassName, successClassName, }: import("react-with-native-form").DataFormProps<TInputs, TState>) => JSX.Element;
    DefaultInputContainer: ({ children, startSection, sectionTitle, title, description, error, errorClassName, }: import("react-with-native-form").InputContainerProps) => JSX.Element;
    errorOnField: (fieldName: string) => (error: import("react-with-native-form").Error) => boolean;
    isObject: typeof isObject;
    makeInputField: <TInputs_1, T extends Extract<keyof TInputs_1, string>>(type: T, config: Omit<import("react-with-native-form").Field<TInputs_1, T>, "type">) => () => {
        field: string;
        title?: string | undefined;
        shouldHide?: ((state: any) => boolean) | undefined;
        titleFromState?: ((state: any) => string) | undefined;
        hasError?: ((value: TInputs_1[T] extends import("react-with-native-form").PluginInputType ? TInputs_1[T]["value"] : any, state: Partial<import("react-with-native-form").PossibleState>) => string | boolean | import("react-with-native-form").Error[]) | undefined;
        startSection?: boolean | undefined;
        sectionTitle?: string | undefined;
        description?: string | undefined;
        initialValue?: (TInputs_1[T] extends import("react-with-native-form").PluginInputType ? TInputs_1[T]["value"] : any) | undefined;
        extra?: (TInputs_1[T] extends import("react-with-native-form").PluginInputType ? TInputs_1[T]["extra"] : any) | undefined;
        type: T;
    };
    notEmpty: typeof notEmpty;
    setConfig: <TInputs_2, TState_1 extends {
        [key: string]: any;
    }>(DataForm: (props: import("react-with-native-form").DataFormProps<TInputs_2, TState_1>) => JSX.Element, config: import("react-with-native-form").DataFormConfig<TInputs_2>) => (props: import("react-with-native-form").DataFormProps<TInputs_2, TState_1>) => JSX.Element;
    castToNumber: (numberString: string | null | undefined) => number | null | undefined;
    DateInput: import("react-with-native-form").PluginComponent<import("react-with-native-form-inputs").DateInputType>;
    DatetimeInput: import("react-with-native-form").PluginComponent<import("react-with-native-form-inputs").DatetimeInputType>;
    FileInput: import("react-with-native-form").PluginComponent<import("react-with-native-form-inputs").FileInputType>;
    isNumber: (numberString: string | null | undefined) => boolean;
    LabelsInput: import("react-with-native-form").PluginComponent<import("react-with-native-form-inputs").LabelsInputType>;
    MapInput: import("react-with-native-form").PluginComponent<import("react-with-native-form-inputs").MapInputType>;
    NumberInput: import("react-with-native-form").PluginComponent<import("react-with-native-form-inputs").NumberInputType>;
    PasswordInput: import("react-with-native-form").PluginComponent<import("react-with-native-form-inputs").PasswordInputType>;
    PhoneInput: import("react-with-native-form").PluginComponent<import("react-with-native-form-inputs").PhoneInputType>;
    SelectInput: import("react-with-native-form").PluginComponent<import("react-with-native-form-inputs").SelectInputType>;
    SelectMultipleInput: import("react-with-native-form").PluginComponent<import("react-with-native-form-inputs").SelectMultipleInputType>;
    StarsInput: import("react-with-native-form").PluginComponent<import("react-with-native-form-inputs").StarsInputType>;
    TextAreaInput: import("react-with-native-form").PluginComponent<import("react-with-native-form-inputs").TextAreaInputType>;
    TextInput: import("react-with-native-form").PluginComponent<import("react-with-native-form-inputs").TextInputType>;
    TimeInput: import("react-with-native-form").PluginComponent<import("react-with-native-form-inputs").TimeInputType>;
    ToggleInput: import("react-with-native-form").PluginComponent<import("react-with-native-form-inputs").ToggleInputType>;
    ModalProvider: ({ children }: {
        children: any;
    }) => JSX.Element;
    Modal: typeof Modal;
    useModal: () => {
        modalContent: string | JSX.Element | null;
        handleModal: (newModal: string | JSX.Element | null, title?: string | undefined) => void;
        showModal: boolean;
        title?: string | undefined;
    };
    toast: (message: {
        title: string;
        body: string;
    }, options?: import("react-with-native-notification").ToastOptions | undefined) => void;
    useNavigation: typeof useNavigation;
    getRealValue: <T_1 extends unknown>({ value, selectFirstOption, options, title, }: {
        title: string;
        options: import("react-with-native-select").Item<T_1>[];
        value?: import("react-with-native-select").Item<T_1> | null | undefined;
        selectFirstOption?: boolean | undefined;
    }) => import("react-with-native-select").Item<T_1>;
    useSelectMultiple: <T_2 extends unknown>(items?: import("react-with-native-select").Item<T_2 | null>[] | undefined, initialValue?: import("react-with-native-select").Item<T_2 | null>[] | undefined, withValue?: ((value: import("react-with-native-select").Item<T_2 | null>[]) => void) | undefined, config?: Omit<import("react-with-native-select").SelectMultipleInputProps<T_2>, "onChange" | "value" | "options"> | undefined) => [Component: () => JSX.Element, value: import("react-with-native-select").Item<T_2 | null>[], setValue: (value: import("react-with-native-select").Item<T_2 | null>[]) => void];
    useSelect: <T_3 extends unknown>(items?: import("react-with-native-select").Item<T_3>[] | undefined, initialValue?: import("react-with-native-select").Item<T_3> | undefined, withValue?: ((value: import("react-with-native-select").Item<T_3> | undefined) => void) | undefined) => [Component: () => JSX.Element, value: import("react-with-native-select").Item<T_3> | null, setValue: (value: import("react-with-native-select").Item<T_3> | null) => void];
    createStoreProvider: <TStore extends object>(config: import("react-with-native-store").StoreConfig<TStore>) => ({ children }: {
        children: any;
    }) => JSX.Element;
    createStore: <K extends object>(initialValues: K) => {
        StoreProvider: ({ children }: {
            children: any;
        }) => JSX.Element;
        useStore: <K_1 extends Extract<keyof K, string>>(key: K_1) => import("react-with-native-store").UseStoreResult<K[K_1]>;
    };
    createUseStore: <TStore_1 extends object>(initialValues: TStore_1) => <K_2 extends Extract<keyof TStore_1, string>>(key: K_2) => import("react-with-native-store").UseStoreResult<TStore_1[K_2]>;
    getItem: (key: string) => Promise<any>;
    setItem: (key: string, value: any) => Promise<void>;
    getColumns: (modelName: string, interfaces: import("code-types").TsInterface[] | undefined, data: any[]) => import("react-with-native-table").ColumnType<any>[];
    TableHeadItem: (column: import("react-with-native-table").ColumnType<any>) => JSX.Element;
    TableRow: <T_4 extends {
        [key: string]: any;
    } = any>({ row, columns, renderExtraColumns, extraColumnsAtStart, shouldHighlight, }: import("react-with-native-table").RowType<T_4>) => JSX.Element;
    Table: <TModel extends {
        [key: string]: any;
    }>({ data, columns, renderExtraColumns, extraColumnsAtStart, onEndReached, shouldHighlightItem, }: import("react-with-native-table").TableType<TModel>) => JSX.Element;
    useIsInViewport: typeof useIsInViewport;
    AssetInput: (props: {
        attachTokenToFilename?: boolean | undefined;
        defaultAssetName: string;
        allowMultiple?: boolean | undefined;
        inputTypes?: import("asset-type").NewAssetType[] | undefined;
        value?: import("asset-type").BackendAsset[] | undefined;
        onChange: (value: import("asset-type").BackendAsset[]) => void;
        projectRelativeReferencingFilePath: string;
        modelName?: string | undefined;
    }) => JSX.Element;
    getTypeFromFileBlob: (file: File) => import("asset-type").AssetType;
    makeBackendAsset: (asset: import("asset-type").Asset, projectRelativeReferencingFilePath: string, modelName?: string | undefined) => import("asset-type").BackendAsset;
    MediaRecorderComponent: (props: import("asset-input").ReactMediaRecorderRenderProps & {
        type: import("asset-input").MediaRecorderType;
    }) => JSX.Element;
    MediaRecorder: (props: {
        type: import("asset-input").MediaRecorderType;
        withBlob: (blobUrl: string, blob: Blob) => void;
    }) => JSX.Element;
    ReactMediaRecorder: (props: import("asset-input").ReactMediaRecorderProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    SelectMedia: (props: {
        source: import("asset-input").MediaSourceEnum;
    }) => JSX.Element;
    useReactMediaRecorder: typeof useReactMediaRecorder;
    WebcamCapture: (props: {
        withBlob: (blobUrl: string, blob: Blob) => void;
    }) => JSX.Element;
    AssetView: (props: {
        asset: import("asset-type").Asset;
        className?: string | undefined;
        projectRelativeReferencingFilePath?: string | undefined;
        hideDownloadLink?: boolean | undefined;
    }) => JSX.Element;
    getSrc: (asset: import("asset-type").Asset, projectRelativeReferencingFilePath: string, isNextStaticProductionBuild?: boolean | undefined) => {
        src: string | undefined;
        downloadUrl: string | undefined;
    };
    InteractiveAsset: (props: {
        asset: import("asset-type").Asset;
        attachTokenToFilename?: boolean | undefined;
        projectRelativeReferencingFilePath: string;
        remove: () => void;
        onChange: (newAsset: import("asset-type").Asset) => void;
    }) => JSX.Element;
    itemGetBackendAssetUrl: (config: {
        item: import("model-types").AugmentedAnyModelType;
        backendAsset?: import("asset-type").BackendAsset | import("asset-type").BackendAsset[] | undefined;
        isDownload?: boolean | undefined;
    }) => string | undefined;
    ModelItemAssetView: <T_5 extends import("model-types").AugmentedAnyModelType>(props: {
        item: T_5;
        backendAsset?: import("asset-type").BackendAsset | undefined;
        hideDownloadLink?: boolean | undefined;
        className?: string | undefined;
    }) => JSX.Element | null;
    useAssetInfo: (url?: string | undefined, filename?: string | undefined) => {
        rawText: string | null;
        type: import("asset-type").AssetType;
    } | undefined;
    useAsset: (asset: import("asset-type").Asset | undefined, projectRelativeReferencingFilePath?: string | null | undefined, isNextStaticProductionBuild?: boolean | undefined) => {
        rawText: string | null;
        type: import("asset-type").AssetType | undefined;
        downloadUrl: string | undefined;
        src: string | undefined;
        extension: string | undefined;
    } | undefined;
    AuthenticationMethodsCrud: () => JSX.Element;
    LoginForm: () => JSX.Element;
    LoginWrapper: (props: {
        children: any;
    }) => any;
    MeAuthenticationInfo: () => JSX.Element;
    PersonProfileDetailsForm: (props: {
        personProfileDetails: import("peer-types").PersonProfileDetails;
    }) => JSX.Element | null;
    PictureWithInfoDropdown: <T_6 extends unknown>(props: {
        current: import("authentication").PictureWithInfo<T_6>;
        dropdown: import("authentication").PictureWithInfo<T_6>[];
        extraItems?: {
            onClick: () => void;
            text: string;
        }[] | undefined;
        isLoading: boolean;
        onClickCurrent?: (() => void) | undefined;
        onSelectDropdownItem: (selected: T_6 | undefined) => void;
    }) => JSX.Element;
    PublicPersonComponent: (props: {
        publicPerson: import("peer-types").PublicPerson | undefined;
    }) => JSX.Element | null;
    PublicProfile: () => JSX.Element;
    SignupForm: () => JSX.Element;
    UpdateMeForm: () => JSX.Element;
    BigButton: (button: BigButton) => JSX.Element;
    BreadCrumbs: (props: {
        path: string;
    }) => JSX.Element;
    renderBreadCrumbs: (chunks: string[]) => JSX.Element[];
    ClickableIcon: (button: import("clickable-icon").ClickableIconType) => JSX.Element;
    ContextMenuItemComponent: (props: {
        item: import("context-menu").ContextMenuItem;
        id: string | undefined;
        onClose: () => void;
        itemClassName?: string | undefined;
    }) => JSX.Element;
    useContextMenu: (props: {
        items: import("context-menu").ContextMenuItem[];
        longTouchDurationMs?: number | undefined;
        className?: string | undefined;
        itemClassName?: string | undefined;
        customItemRender?: ((contextMenuItem: import("context-menu").ContextMenuItem, index: number, onClose: () => any, id: string | undefined) => JSX.Element | null) | undefined;
    }) => {
        renderContextMenu: () => JSX.Element | null;
        openContextMenuProps: {
            ref: import("react").RefObject<HTMLDivElement>;
            onContextMenu: (event: import("react").MouseEvent<Element, MouseEvent>) => void;
            onTouchStart: (event: import("react").TouchEvent<Element>) => void;
            onTouchEnd: () => void;
            onClick: (mouseEvent: import("react").MouseEvent<Element, MouseEvent>) => void;
            style: import("react").CSSProperties;
        };
        onClose: () => void;
        isOpen: boolean;
    };
    useContextPopper: (props: {
        renderPopper: (props: {
            id?: string | undefined;
        }) => JSX.Element;
        longTouchDurationMs?: number | undefined;
    }) => {
        isOpen: boolean;
        renderContextPopper: () => JSX.Element | null;
        onClose: () => void;
        openContextPopperProps: {
            ref: import("react").RefObject<HTMLDivElement>;
            onContextMenu: (event: import("react").MouseEvent<Element, MouseEvent>) => void;
            onTouchStart: (event: import("react").TouchEvent<Element>) => void;
            onTouchEnd: () => void;
            onClick: (mouseEvent: import("react").MouseEvent<Element, MouseEvent>) => void;
            style: import("react").CSSProperties;
        };
    };
    useContext: (callback: (position: import("context-menu").ContextEvent) => any, config?: {
        longTouchDurationMs?: number | undefined;
    } | undefined) => {
        onContextMenu: (event: import("react").MouseEvent<Element, MouseEvent>) => void;
        onTouchStart: (event: import("react").TouchEvent<Element>) => void;
        onTouchEnd: () => void;
        onClick: (mouseEvent: import("react").MouseEvent<Element, MouseEvent>) => void;
        style: {
            userSelect: import("csstype").Property.UserSelect | undefined;
        };
    };
    errorToast: (message?: string | undefined) => void;
    infoToast: (message?: string | undefined) => void;
    showStandardResponse: (apiResult: import("api-types").StandardizedApiReturnType) => void;
    successToast: (message?: string | undefined) => void;
    warningToast: (message?: string | undefined) => void;
    CrudGrid: (props: import("db-crud").CrudViewProps) => JSX.Element;
    CrudTable: (props: import("db-crud").CrudViewProps) => JSX.Element;
    CrudTimeline: (props: import("db-crud").CrudViewProps) => JSX.Element;
    CrudTree: (props: import("db-crud").CrudViewProps) => JSX.Element;
    DatasetForm: (props: {
        modelName: string;
    }) => JSX.Element;
    DbPage: (props: {
        filter?: ((item: import("model-types").AugmentedAnyModelType) => boolean) | undefined;
        modelName?: string | undefined;
    }) => JSX.Element;
    getPropertiesDataParameterNames: (properties: import("schema-util").SchemaProperty[]) => string[];
    IndexInstanceContainer: ({ title, children, buttons, }: {
        title: string;
        children: any;
        buttons: import("labeled-button").LabeledButtonType[];
    }) => JSX.Element;
    ModelComponent: (props: {
        modelName?: string | undefined;
        highlight: import("db-crud").Highlight;
    }) => JSX.Element;
    openWhatsapp: ({ phone, text, }: {
        phone: string;
        text: string;
    }) => void;
    SearchBar: (props: {
        initialValue?: string | undefined;
        placeholder?: string | undefined;
    }) => JSX.Element;
    shimmer: (w: number, h: number) => string;
    SimplifiedSchemaFormDebug: ({ parameters, values, }: {
        parameters: import("code-types").FunctionParameter[] | undefined;
        values: any[];
    }) => JSX.Element;
    sortToItem: (sort: import("code-types").DatasetSort) => import("react-with-native-select").Item<import("code-types").DatasetSort>;
    SpaceCard: (props: {
        secondaryImageUrl: string | null;
        darkened: boolean;
        base64?: string | undefined;
        imageUrl: string;
        ctaText: string;
        title: string;
        subtitle: string;
        action?: (() => any) | undefined;
    }) => JSX.Element;
    toBase64: (str: string) => string;
    UpsertForm: (props: {
        simplifiedSchema: import("code-types").SimplifiedSchema;
        instance: any;
        referencableModelNames?: string[] | undefined;
        modelName: string;
    }) => JSX.Element;
    UpsertPage: () => JSX.Element;
    useInfiniteGetDbModel: () => import("react-query").UseInfiniteQueryResult<import("api-types").ApiReturnType<"getDbModel">, unknown>;
    useModelFromUrl: () => string | undefined;
    useUrl: <T_7 extends "path" | "id" | "name" | "type" | "slug">(queryKey: T_7) => {
        path: [string | undefined, (newValue: string | undefined) => Promise<boolean>];
        name: [string | undefined, (newValue: string | undefined) => Promise<boolean>];
        type: [string | undefined, (newValue: string | undefined) => Promise<boolean>];
        slug: [string | undefined, (newValue: string | undefined) => Promise<boolean>];
        id: [string | undefined, (newValue: string | undefined) => Promise<boolean>];
    }[T_7];
    FancyLoader: ({ big, medium, }: {
        big?: boolean | undefined;
        medium?: boolean | undefined;
    }) => JSX.Element;
    MatchingText: (props: {
        text: string;
        search: string;
        defaultTextClassName: string;
        matchTextClassName: string;
        truncateLength?: number | undefined;
    }) => JSX.Element;
    PathSearchResults: (props: {
        paths: string[];
        search: string;
        augmentedWords?: import("augmented-word-types").AugmentedWord[] | undefined;
    }) => JSX.Element;
    FunctionForm: <T_8 extends (...params: any[]) => any>(props: {
        projectRelativeStorageFilePath?: string | undefined;
        modelName?: string | undefined;
        tsFunction: any;
        submitFunction?: T_8 | undefined;
        withResult?: ((result: import("api-types").WithoutPromise<ReturnType<T_8>>) => void) | undefined;
        withApiResult?: ((result: any) => void) | undefined;
        initialValues?: any[] | undefined;
        showResult?: boolean | undefined;
        referencableModelData?: import("simplified-schema-form").ReferencableModelData | undefined;
    }) => JSX.Element;
    isAltB: (keyboardEvent: KeyboardEvent) => boolean;
    isAltN: (keyboardEvent: KeyboardEvent) => boolean;
    isAltO: (keyboardEvent: KeyboardEvent) => boolean;
    isAltW: (keyboardEvent: KeyboardEvent) => boolean;
    isCtrlBacktick: (keyboardEvent: KeyboardEvent) => boolean;
    isCtrlP: (keyboardEvent: KeyboardEvent) => boolean;
    isCtrlS: (keyboardEvent: KeyboardEvent) => boolean;
    isCtrlSpace: (keyboardEvent: KeyboardEvent) => boolean;
    useHotkey: (isRightKey: (keyboardEvent: KeyboardEvent) => boolean, callback: () => void, dependencies: any[]) => void;
    useHotkeys: (dependencies: any[], callback: (keyboardEvent: KeyboardEvent) => void) => void;
    LabeledButton: (button: import("labeled-button").LabeledButtonType, index: number) => JSX.Element;
    AuthenticationLayout: (props: {
        menu?: import("menu").MenuProps | undefined;
        customHeader?: import("react").ReactNode;
        custom404Page?: import("react").ReactNode;
        nextPage?: any;
        pageProps?: any;
    }) => JSX.Element;
    Header: (props: {
        publicBundleConfig?: import("bundle-types").PublicBundleConfig | undefined;
    }) => JSX.Element;
    LayoutGrid: (props: {
        children: import("react").ReactNode;
        header: import("react").ReactNode;
        menu?: import("menu").MenuProps | undefined;
    }) => JSX.Element;
    PingApi: () => JSX.Element;
    copyStaticAssets: (readerWebPages: import("webpage-types").FileWebPage[], config?: {
        operationName?: string | undefined;
    } | undefined) => Promise<boolean | undefined>;
    docsGetPages: (basePaths: {
        projectRelativeBasePath: string;
        queryPath: string;
    }[]) => Promise<import("webpage-types").FileWebPage[]>;
    docsGetStaticPaths: (context: import("next-types").GetStaticPathsContext, basePaths: {
        projectRelativeBasePath: string;
        queryPath: string;
    }[]) => Promise<import("next-types").GetStaticPathsResult<import("next-types").ParsedUrlQuery>>;
    docsGetStaticProps: (context: import("next-types").GetStaticPropsContext<import("next-types").ParsedUrlQuery, import("next-types").PreviewData>, basePaths: {
        projectRelativeBasePath: string;
        queryPath: string;
    }[], webOperationName: string) => Promise<{
        props: import("markdown-reader-types").MarkdownReaderPageProps;
    }>;
    getAllMarkdownReaderPages: (config?: {
        manualProjectRoot?: string | undefined;
    } | undefined) => Promise<import("webpage-types").WebPage<any>[] | undefined>;
    getChildren: (webPages: import("webpage-types").WebPage<any>[], queryPath: string) => string[];
    getFolderExplorationInfo: (webPages: import("webpage-types").WebPage<any>[], queryPath: string, projectRoot: string) => Promise<{
        title: string | undefined;
        description: string | null;
        descriptionProjectRelativeMarkdownPath: string | null;
        children: {
            projectRelativeMarkdownPath: string | null;
            title: string;
            firstParagraph: string | null;
            folderName: string;
        }[];
    }>;
    getMarkdownModelPages: (projectRoot: string) => Promise<import("webpage-types").FileWebPage[]>;
    getMarkdownPageInfo: (config: {
        projectRoot: string;
        webPages: import("webpage-types").WebPage<any>[];
        queryPath: string;
        contentPage: import("webpage-types").FileWebPage;
        webOperationName: string;
        markdownCallToActions: import("markdown-types").MarkdownCallToAction[];
    }) => Promise<{
        markdownFile: import("markdown-types").WebMarkdownFile | null;
        nextQueryPath: string | null;
        previousQueryPath: string | null;
        projectRelativeMarkdownPath: string | null;
    }>;
    getMarkdownReaderPages: (config: {
        projectRoot: string;
        basePaths: string[];
        queryPathCustomPrefix?: ((basePath?: string | undefined) => string | undefined) | undefined;
        mapQueryPath?: ((queryPath: string) => string) | undefined;
    }) => Promise<import("webpage-types").FileWebPage[]>;
    getMarkdownReaderQueryPaths: (config?: {
        manualProjectRoot?: string | undefined;
    } | undefined) => Promise<string[] | undefined>;
    getOperationPages: (projectRoot: string, bundleMarkdownReaderConfig?: import("bundle-types").BundleMarkdownReaderConfig | undefined) => Promise<import("webpage-types").FileWebPage[]>;
    getPublicMarkdownFilePaths: (baseFolderPath: string, includeFoldersWithResults?: boolean | undefined) => Promise<{
        path: string;
        isFolder: boolean;
    }[]>;
    getReaderTodoPages: (projectRoot: string) => Promise<import("webpage-types").FileWebPage[]>;
    markdownReaderGetStaticPaths: import("next-types").GetStaticPaths<import("next-types").ParsedUrlQuery>;
    markdownReaderGetStaticPropsFromPages: (context: import("next-types").GetStaticPropsContext<import("next-types").ParsedUrlQuery, import("next-types").PreviewData>, fileWebPages: import("webpage-types").WebPage<any>[], webOperationName: string) => Promise<{
        props: import("markdown-reader-types").MarkdownReaderPageProps;
    }>;
    markdownReaderGetStaticProps: (context: import("next-types").GetStaticPropsContext<import("next-types").ParsedUrlQuery, import("next-types").PreviewData>) => Promise<{
        props: import("markdown-reader-types").MarkdownReaderPageProps;
    }>;
    putReadmeOnTop: <T_9 extends {
        path: string;
        isFolder: boolean;
    }>(items: T_9[]) => T_9[];
    removeExtensionsFromPath: (relativePath: string) => string;
    removeNumberPrefix: (fileOrFolderName: string) => string;
    shouldExposeMarkdownFile: (parameters: import("matter-types").Frontmatter) => boolean;
    stripReadmeFromFolder: (filePath: string) => string;
    getQueryPath: (parsedUrlQuery: import("next-types").ParsedUrlQuery | undefined) => string;
    getLegacyMenu: (queryPaths: string[]) => import("webpage-types").WebPage<null>[] | undefined;
    Menu: (props: import("menu").MenuProps & {
        message?: string | undefined;
    }) => JSX.Element;
    getRealItemRecursive: (item: import("webpage-types").NestedWebPage) => import("webpage-types").NestedWebPage;
    getTitle: (item: import("webpage-types").WebPage<null>) => string;
    NestedMenuItem: (props: {
        item: import("webpage-types").NestedWebPage;
        mergeSingleChilds?: boolean | undefined;
        headersClickable?: boolean | undefined;
        level?: number | undefined;
    } & import("nested-menu-types").MouseEventCallbacks) => JSX.Element | null;
    NestedMenu: (props: {
        items?: import("webpage-types").NestedWebPage[] | undefined;
        headersClickable?: boolean | undefined;
    } & import("nested-menu-types").MouseEventCallbacks) => JSX.Element;
    useExpanded: (queryPath?: string | undefined) => [boolean, () => Promise<void>, () => Promise<void>, () => Promise<void>, {
        hydrated: boolean;
    }];
    ALink: ({ children, href, target, rel, linkProps, ...otherAProps }: {
        linkProps?: {
            href: string | import("url").UrlObject;
            as?: string | import("url").UrlObject | undefined;
            replace?: boolean | undefined;
            scroll?: boolean | undefined;
            shallow?: boolean | undefined;
            passHref?: boolean | undefined;
            prefetch?: boolean | undefined;
            locale?: string | false | undefined;
            legacyBehavior?: boolean | undefined;
            onMouseEnter?: ((e: any) => void) | undefined;
            onTouchStart?: ((e: any) => void) | undefined;
            onClick?: ((e: any) => void) | undefined;
        } | undefined;
    } & import("react").ClassAttributes<HTMLAnchorElement> & import("react").AnchorHTMLAttributes<HTMLAnchorElement> & {
        native?: import("react-native").TextProps | undefined;
        textClassName?: string | undefined;
    }) => JSX.Element;
    ArrayForm: (props: {
        itemNameOrId?: string | undefined;
        parameterNameStack?: string[] | undefined;
        projectRelativeStorageFilePath?: string | undefined;
        parameter: import("code-types").FunctionParameter;
        parameterValue: any[] | undefined;
        onChangeParameter: (newValue: any) => void;
        isDebug?: boolean | undefined;
        referencableModelData?: import("simplified-schema-form").ReferencableModelData | undefined;
        id: string;
        modelName?: string | undefined;
    }) => JSX.Element | null;
    FormContainer: (props: {
        className?: string | undefined;
        onSubmit: () => void;
        title?: string | undefined;
        isLoading?: boolean | undefined;
        submitButtonText?: string | undefined;
        children?: any;
    }) => JSX.Element;
    getReferencedModelDataItem: (parameterName: string, referencedModelData?: import("simplified-schema-form").ReferencableModelData | undefined) => import("simplified-schema-form").ReferencedModelDataItem | undefined;
    ObjectForm: (props: {
        itemNameOrId?: string | undefined;
        parameterNameStack?: string[] | undefined;
        projectRelativeStorageFilePath?: string | undefined;
        parameter: import("simplified-schema-form").RenderableFunctionParameter;
        parameterValue: {
            [key: string]: any;
        } | undefined;
        onChangeParameter: (newValue: any) => void;
        isDebug?: boolean | undefined;
        referencableModelData?: import("simplified-schema-form").ReferencableModelData | undefined;
        referencedModelDataIsLoading?: boolean | undefined;
        id: string;
        modelName?: string | undefined;
    }) => JSX.Element | null;
    ReferenceInput: (props: {
        parameter: import("code-types").FunctionParameter;
        parameterValue: any;
        onChangeParameter: (newValue: any) => void;
        referencedModelDataItem: import("simplified-schema-form").ReferencedModelDataItem;
        defaultInputFields: {
            uniqueFieldId: string;
            fieldName: string;
        };
        isDebug?: boolean | undefined;
    }) => JSX.Element;
    renderParameterTitle: (parameter: import("simplified-schema-form").RenderableFunctionParameter, isDebug: boolean | undefined, isBolded?: boolean | undefined, renderAdditionalButtons?: (() => JSX.Element | null) | undefined) => JSX.Element;
    SimplifiedSchemaForm: <TValues extends any[]>(props: {
        id: string;
        parameterNameStack?: string[] | undefined;
        parameters: import("simplified-schema-form").RenderableFunctionParameter[];
        values: TValues | undefined;
        onChange: (values: TValues) => void;
        referencableModelData?: import("simplified-schema-form").ReferencableModelData | undefined;
        isDebug?: boolean | undefined;
        projectRelativeStorageFilePath?: string | undefined;
        itemNameOrId?: string | undefined;
        modelName?: string | undefined;
    }) => JSX.Element | null;
    useReferencableModelData: (simplifiedSchema: import("code-types").SimplifiedSchema) => import("simplified-schema-form").ReferencableModelData | undefined;
    useTsInterfaceForm: <T_10 extends unknown>(tsInterface: import("model-types").Storing<import("code-types").TsInterface>, id?: string | undefined, initialValue?: T_10 | undefined, projectRelativeStorageFilePath?: string | undefined, modelName?: string | undefined) => [form?: JSX.Element | undefined, value?: T_10 | undefined, onChange?: ((value: T_10) => void) | undefined];
    Tooltip: (props: {
        tooltip: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
        children: import("react").ReactNode;
        placement?: import("@popperjs/core").Placement | undefined;
    }) => JSX.Element;
    useOnScreen: typeof useOnScreen;
    getRealSrc: (src: string | undefined, config: import("markdown").MarkdownParseRenderConfig) => string | undefined;
    getUrlFromRelativeUrl: (relativeUrl: string, relativeUrlStrategy: "api" | "static", projectRelativeBaseFolderPath: string, projectRelativeMarkdownFilePath: string) => string | undefined;
    getYoutubeId: (url: string | undefined) => string | undefined;
    HtmlHeader: keyof JSX.IntrinsicElements | import("react-markdown/lib/ast-to-react").HeadingComponent | undefined;
    MarkdownCodeblock: (props: {
        text: string;
        extension?: string | undefined;
        minimalMode?: import("markdown").CodeblockMode | undefined;
        expandedMode?: import("markdown").CodeblockMode | undefined;
        isInitiallyExpanded?: boolean | undefined;
        isModeStatic?: boolean | undefined;
    }) => JSX.Element;
    Parameter: (props: {
        text: string;
    }) => JSX.Element | null;
    renderFrontmatter: (parameters: import("matter-types").Frontmatter, config?: {
        renderSpacer?: boolean | undefined;
    } | undefined) => JSX.Element | null;
    renderMarkdownChunk: (chunk: import("markdown-types").MarkdownChunk, config: import("markdown").MarkdownParseRenderConfig) => JSX.Element;
    renderMarkdownContent: (content: string, config: import("markdown").MarkdownParseRenderConfig) => JSX.Element;
    renderMarkdownParse: (markdownParse: import("markdown-types").MarkdownParse, config: import("markdown").MarkdownParseRenderConfig) => JSX.Element;
    renderMarkdownTitle: (title: string, level: number) => JSX.Element;
    useOpenHashDetails: () => void;
    AugmentedWordComponent: (props: {
        augmentedWord: import("augmented-word-types").AugmentedWord;
        augmentedWordObject: import("js-util").MappedObject<import("augmented-word-types").AugmentedWord>;
    }) => JSX.Element;
    Dictionary: (props: {
        augmentedWordObject: import("js-util").MappedObject<import("augmented-word-types").AugmentedWord>;
        word?: string | undefined;
    }) => JSX.Element;
    DocsReaderLayout: (props: import("markdown-reader-types").MarkdownReaderPageProps) => JSX.Element;
    Layout: (props: {
        publicBundleConfig: import("bundle-types").PublicBundleConfig | null | undefined;
        children: any;
        augmentedWordObject?: import("js-util").MappedObject<import("augmented-word-types").AugmentedWord> | undefined;
        menu: import("webpage-types").MenuObjectType<import("webpage-types").FilePage>;
    }) => JSX.Element;
    ReaderPageContent: (props: import("markdown-reader-types").ReaderPageContentProps) => JSX.Element;
    ReaderPageHeader: (props: {
        markdownFile?: import("markdown-types").WebMarkdownFile | null | undefined;
        projectRelativeMarkdownPath?: string | null | undefined;
    }) => JSX.Element | null;
    Share: (props: {
        contextText?: string | undefined;
    }) => JSX.Element;
    useAllText: () => string | undefined;
    useLastSelection: () => string | null;
    ShortMarkdownPlayer: (props: {
        shortMarkdown?: import("short-markdown-types").ShortMarkdown | undefined;
        projectRelativeFilePath?: string | undefined;
    }) => JSX.Element | null;
    ShortMarkdownSlide: (props: {
        item: import("short-markdown-types").ViewEmbed;
        index: number;
        projectRelativeFilePath: string;
        setSlide: (index: number) => void;
        isAutoplay?: boolean | undefined;
    }) => JSX.Element;
    ShortStudio: (props: {
        onChange: (value: string) => void;
        value: string;
        projectRelativeFilePath: string;
        markdownModelName?: string | number | symbol | undefined;
    }) => JSX.Element;
    useMultiAudio: (urls: string[]) => {
        players: {
            url: string;
            playing: boolean;
        }[];
        toggle: (targetIndex: number) => () => void;
    };
    Completion: (props: {
        augmentedWord: import("augmented-word-types").AugmentedWord;
        augmentedWordObject?: import("js-util").MappedObject<import("augmented-word-types").AugmentedWord> | undefined;
    }) => JSX.Element;
    ContentEditableDivInput: <T_11 extends unknown>(props: {
        value: string;
        onChange: (newValue: string) => void;
        markdownParseRenderConfig?: import("markdown").MarkdownParseRenderConfig | undefined;
        subwordConfig: import("writer-types").SubwordConfig;
        subtextConfig: import("writer-types").SubtextConfig;
        parseTextContentToHtmlString: import("writer-input").ParseTextContentToHtmlString;
        divProps: Omit<import("react-with-native").FinalDivType<T_11>, "contentEditable" | "onChange" | "onInput" | "value">;
    }) => JSX.Element;
    ContextTextArea: (props: import("writer-input").EditorProps) => JSX.Element;
    DivContentEditable: (props: import("writer-input").EditorProps) => JSX.Element;
    editSubtextSubwordConfig: (subtextConfig: import("writer-types").SubtextConfig, subwordConfig: import("writer-types").SubwordConfig) => {
        subtextConfig: import("writer-types").SubtextConfig;
        subwordConfig: import("writer-types").SubwordConfig;
    };
    EditWriterInput: (props: {
        onChange: (value: string) => void;
        value: string;
        projectRelativeFilePath: string;
        markdownModelName?: string | number | symbol | undefined;
    }) => JSX.Element;
    FrontmatterForm: (props: {
        modelName?: string | undefined;
        projectRelativeMarkdownFilePath: string;
        frontmatterSchema: import("code-types").SimplifiedSchema;
        markdownParse: import("markdown-types").MarkdownParse;
        onChange: (value: string) => void;
    }) => JSX.Element;
    getContext: (editorDetails: {
        text: string;
        positionIndex: number;
    }) => import("writer-input").TextEditingContext;
    getSubtext: (markdownString: string, subtextConfig: import("writer-types").SubtextConfig) => string | undefined;
    getTextSegments: (element: any) => import("writer-input").TextSegment[];
    getWriterTypeFromContent: (text: string) => import("filename-conventions").WriterType;
    isAugmentedWordMatch: (augmentedWord: import("augmented-word-types").AugmentedWord, completableWord: string) => boolean;
    isTypescript: (text: string) => boolean;
    MarkdownCompletions: (props: {
        context: import("writer-input").TextEditingContext | null;
        augmentedWords?: import("augmented-word-types").AugmentedWord[] | undefined;
        augmentedWordObject?: import("js-util").MappedObject<import("augmented-word-types").AugmentedWord> | undefined;
    }) => JSX.Element;
    MarkdownParsePresentation: (props: {
        markdownParse: import("markdown-types").MarkdownParse;
        augmentedWordObject?: import("js-util").MappedObject<import("augmented-word-types").AugmentedWord> | undefined;
        projectRelativeBaseFolderPath: string;
        projectRelativeMarkdownFilePath: string;
    }) => JSX.Element | null;
    MarkdownView: (props: {
        view: "view" | "presentation";
        markdownParse: import("markdown-types").MarkdownParse;
        markdownParseRenderConfig: import("markdown").MarkdownParseRenderConfig;
    }) => JSX.Element;
    MarkedParagraph: import("writer-input").ContentEditableRenderComponentType<import("marked").marked.Tokens.Paragraph>;
    MarkedText: import("writer-input").ContentEditableRenderComponentType<import("marked").marked.Tokens.Text | import("marked").marked.Tokens.Tag | import("marked").marked.Tokens.ListItem | import("marked").marked.Tokens.Em | import("marked").marked.Tokens.Strong | import("marked").marked.Tokens.Code | import("marked").marked.Tokens.Escape | import("marked").marked.Tokens.Table>;
    MarkedToken: (props: {
        item: import("marked").marked.Token;
        subtextConfig: import("writer-types").SubtextConfig;
        subwordConfig: import("writer-types").SubwordConfig;
        markdownFileConfig: import("markdown").MarkdownParseRenderConfig;
        testModeEnabled?: boolean | undefined;
    }) => JSX.Element;
    omitSpecialCharactersFromStart: (word?: string | undefined) => string | undefined;
    parseTextContentToHtmlString: import("writer-input").ParseTextContentToHtmlString;
    SmartContentEditableDivInput: (props: {
        writerType: import("filename-conventions").WriterType;
        value: string;
        onChange: (value: string) => void;
        markdownParseRenderConfig?: import("markdown").MarkdownParseRenderConfig | undefined;
    }) => JSX.Element;
    SpannedSentence: (props: Omit<import("writer-input").ContentEditableRenderProps<any>, "markedToken"> & {
        sentence: string;
    }) => JSX.Element;
    SubtextContainer: (props: {
        rawMarkdown: string;
        subtextConfig: import("writer-types").SubtextConfig;
    }) => JSX.Element | null;
    Subword: {
        (props: {
            word: string;
            subwordConfig: import("writer-types").SubwordConfig;
        }): JSX.Element;
        example: (() => JSX.Element)[];
    };
    testAllContentEditableRenderComponents: () => void;
    testContentEditableRenderComponent: <TToken extends import("marked").marked.Token>(ContentEditableRenderComponent: import("writer-input").ContentEditableRenderComponentType<TToken>, markedToken?: TToken | undefined) => boolean;
    TitleContainer: ({ title, children, buttons, }: {
        title?: string | undefined;
        children: any;
        buttons: import("labeled-button").LabeledButtonType[];
    }) => JSX.Element;
    trimAround: (word: string, trimLength: number) => string;
    trimLeft: (word: string, character: string) => string;
    TypescriptCompletions: (props: {
        context: import("writer-input").TextEditingContext | null;
        augmentedWords?: import("augmented-word-types").AugmentedWord[] | undefined;
        augmentedWordObject?: import("js-util").MappedObject<import("augmented-word-types").AugmentedWord> | undefined;
    }) => JSX.Element;
    WriterConfigForm: () => JSX.Element;
    WriterInput: (props: {
        isSaved?: boolean | undefined;
        save?: (() => void) | undefined;
        augmentedWordObject?: import("js-util").MappedObject<import("augmented-word-types").AugmentedWord> | undefined;
        value: string;
        markdownModelName?: string | number | symbol | undefined;
        onChange: (value: string) => void;
        type?: import("filename-conventions").WriterType | undefined;
        projectRelativeFilePath?: string | undefined;
        reload?: (() => void) | undefined;
        isLoading?: boolean | undefined;
        hideButtons?: boolean | undefined;
        className?: string | undefined;
        initialWriterView?: import("writer-types").WriterViewEnum | undefined;
    }) => JSX.Element;
};
export declare type SdkType = typeof sdk;
//# sourceMappingURL=sdk-ui.d.ts.map