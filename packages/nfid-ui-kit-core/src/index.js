const plugin = require("tailwindcss/plugin");

import * as theme from "./theme";
import { iosUtilities } from "./utils/ios";

module.exports = plugin(
  function ({ addUtilities, addComponents, e, prefix, config }) {
    addUtilities(iosUtilities, ["responsive"]);
  },
  {
    theme,
  }
);
