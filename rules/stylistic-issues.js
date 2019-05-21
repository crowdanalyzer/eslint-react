/* eslint quotes: ['off'] */
"use strict";

module.exports = {
  rules: {
    // keywords spacing
    "keyword-spacing": [
      "error",
      {
        overrides: {
          from: { after: true },
          default: { after: true },
          if: { after: false },
        },
      },
    ],

    // Use double quotes for strings
    quotes: ["error", "double", { avoidEscape: true, allowTemplateLiterals: true }],

    // use a consistent indentation style of 2 spaces.
    indent: ["error", 2],
  },
};
