const supportsTouchRule = "@supports (-webkit-touch-callout: none)";
const webkitFillAvailable = "-webkit-fill-available";

const iosUtilities = {
  ".min-h-screen-ios": {
    [supportsTouchRule]: {
      minHeight: webkitFillAvailable,
    },
  },
  ".h-screen-ios": {
    [supportsTouchRule]: {
      height: webkitFillAvailable,
    },
  },
};

module.exports = iosUtilities;
