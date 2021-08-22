"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const design_system_context_1 = require("design-system-context");
const Text = (Elm) => (props) => {
    const tokens = design_system_context_1.useTokens();
    return (jsx_runtime_1.jsx(Elm, Object.assign({ style: {
            color: tokens.colors.primary,
            fontSize: tokens.fontSizes[props.size] || 16
        } }, props), void 0));
};
exports.Text = Text;
