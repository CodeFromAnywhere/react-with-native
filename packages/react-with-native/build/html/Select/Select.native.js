"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Select=void 0;var tailwind_rn_1=require("tailwind-rn"),trimClassName_1=require("../../util/trimClassName"),Select=function(e){var t=e.native,i=(e.options,e.className),r=(0,tailwind_rn_1.useTailwind)();(t||{}).style,i&&r((0,trimClassName_1.trimClassName)(i));return null;
// <Picker style={[{ fontWeight: "bold" }, tailwindStyle, style]}>
//   {(options || []).map((option: SelectOptionType) => {
//     <Picker.Item
//       value={String(option.value)}
//       label={String(option.label)}
//     />;
//   })}
// </Picker>
};exports.Select=Select;
//# sourceMappingURL=Select.native.js.map