
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


export type Inputs = {
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

{{
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