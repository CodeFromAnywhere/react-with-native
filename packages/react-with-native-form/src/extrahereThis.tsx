
//this should go in coworksurf, not in a package.

export type Inputs = {
  rte: {
    config: RteConfig;
    value: Descendant[];
    extra: { maxLength?: number };
  };
};

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
      