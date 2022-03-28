const plugin = require("tailwindcss/plugin");

const iosUtilities = require("./utils/ios");

module.exports = plugin(
  function ({ addUtilities, addComponents, theme, e, prefix, config }) {
    addUtilities(iosUtilities, ["responsive"]);
    addComponents([require("./button/index")(theme)]);
  },
  {
    theme: {
      extend: require("./theme"),
    },
  }
);
