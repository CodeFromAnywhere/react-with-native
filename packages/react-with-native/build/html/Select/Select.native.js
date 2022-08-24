"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
var tailwind_rn_1 = require("tailwind-rn");
var trimClassName_1 = require("../../util/trimClassName");
var Select = function (_a) {
    var native = _a.native, options = _a.options, className = _a.className;
    var tailwind = (0, tailwind_rn_1.useTailwind)();
    var style = (native || {}).style;
    var tailwindStyle = className ? tailwind((0, trimClassName_1.trimClassName)(className)) : {};
    return null;
    // <Picker style={[{ fontWeight: "bold" }, tailwindStyle, style]}>
    //   {(options || []).map((option: SelectOptionType) => {
    //     <Picker.Item
    //       value={String(option.value)}
    //       label={String(option.label)}
    //     />;
    //   })}
    // </Picker>
};
exports.Select = Select;
//# sourceMappingURL=Select.native.js.map