const plugin = require("tailwindcss/plugin");

const theme = require("./theme");
const iosUtilities = require("./utils/ios");
const buttonComponents = require("./button/index");

module.exports = plugin(
  function({ addUtilities, addComponents, e, prefix, config }) {
    addUtilities(iosUtilities, ["responsive"]);
    addComponents(buttonComponents);
  },
  {
    theme
  }
);
