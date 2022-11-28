/**
- `react`: The core library that should always be used that wraps react and react native.

- `dumb`: Presentational components that only care about how things look, and have no idea about the type of information that they will contain (**data-agnostic**), nor their context they're used in.

- `smart`: Presentational components that may contain getters and setters for global state. This means they're still easy enough to set up, but

- `wise`: stateful components that use the backend as well to do things. for example, `simplified-schema-form`

- `genius`: blocks of components that have certain functionality. Example: `file-writer` or `crud`
*/
export declare type FunctionClassification = "wise" | "dumb" | "smart" | "genius" | "react-with-native" | "cli" | "test";
//# sourceMappingURL=FunctionClassification.d.ts.map